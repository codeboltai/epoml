import * as swc from '@swc/core';
import epoml, { Epoml, registerComponent, unregisterComponent, getComponent, clearComponents } from './epoml';
import { FileTree } from './components/FileTree';

/**
 * Parse EPOML (Enhanced Plain Old Markup Language) and convert it to a string
 * @param prompt The EPOML string to parse
 * @param variables Optional object containing variables to substitute in the template
 * @returns The parsed output as a string
 */
export async function epomlparse(prompt: string, variables?: Record<string, any>): Promise<string> {
  // Transform the JSX code to JavaScript using SWC
  const transformed = await swc.transform(prompt, {
    jsc: {
      parser: {
        syntax: 'ecmascript',
        jsx: true,
      },
      transform: {
        react: {
          runtime: 'classic',
          pragma: 'Epoml.createElement',
          pragmaFrag: 'Epoml.Fragment',
          importSource: 'epoml',
        },
      },
    },
    module: {
      type: 'commonjs',
    },
  });

  // Make Epoml and component registry functions available globally for the eval
  (global as any).Epoml = Epoml;
  (global as any).registerComponent = registerComponent;
  (global as any).unregisterComponent = unregisterComponent;
  (global as any).getComponent = getComponent;
  (global as any).clearComponents = clearComponents;
  (global as any).FileTree = FileTree;
  
  // Make variables available globally for the eval
  if (variables) {
    for (const [key, value] of Object.entries(variables)) {
      (global as any)[key] = value;
    }
  }
  
  // Make all registered components available globally
  const componentRegistry = (global as any).__EPOML_COMPONENT_REGISTRY__ || new Map();
  for (const [name, component] of componentRegistry) {
    (global as any)[name] = component;
  }

  // Evaluate the transpiled code to get the component tree
  const component = eval(transformed.code);

  // Clean up variables from global scope to prevent pollution
  if (variables) {
    for (const key of Object.keys(variables)) {
      delete (global as any)[key];
    }
  }

  // Render the component tree to a string
  const output = await epoml(component);
  return output;
}