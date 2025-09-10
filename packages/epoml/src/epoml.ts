import * as fs from 'fs';
import * as path from 'path';

// Define the component types
export type Component = {
  type: string | Function;
  props: { [key: string]: any };
  children: (Component | string)[];
};

// Component registry to store custom components
const componentRegistry = new Map<string, Function>();

/**
 * Register a custom component
 * @param name The name of the component to register
 * @param component The component function
 */
export function registerComponent(name: string, component: Function): void {
  componentRegistry.set(name, component);
  // Also make it available globally for eval context
  (global as any)[name] = component;
}

/**
 * Unregister a custom component
 * @param name The name of the component to unregister
 */
export function unregisterComponent(name: string): void {
  componentRegistry.delete(name);
  // Also remove it from global context
  delete (global as any)[name];
}

/**
 * Get a registered component by name
 * @param name The name of the component to get
 * @returns The component function or undefined if not found
 */
export function getComponent(name: string): Function | undefined {
  return componentRegistry.get(name);
}

/**
 * Clear all registered components
 */
export function clearComponents(): void {
  // Remove all components from global context
  for (const name of componentRegistry.keys()) {
    delete (global as any)[name];
  }
  componentRegistry.clear();
}

export namespace Epoml {
  export function createElement(
    type: string | Function,
    props: { [key: string]: any },
    ...children: (Component | string)[]
  ): Component {
    // If type is a string, check if there's a custom component registered with that name
    if (typeof type === 'string') {
      const customComponent = getComponent(type);
      if (customComponent) {
        type = customComponent;
      }
    }
    
    const flattenedChildren = children.flat();
    return { type, props, children: flattenedChildren || [] };
  }

  export function Fragment(props: { children: (Component | string)[] }): (Component | string)[] {
    return props.children;
  }
}

// The renderer function
export async function render(component: Component | string): Promise<string> {
  if (typeof component === 'string') {
    return component;
  }

  if (Array.isArray(component)) {
    return (await Promise.all(component.map(render))).join('');
  }

  if (typeof component.type === 'function') {
    const result = await component.type({ ...component.props, children: component.children });
    if (typeof result === 'string') {
      return result;
    }
    return render(result);
  }

  switch (component.type) {
    case 'list':
      return `${(await Promise.all(component.children.map(render))).join('')}`;
    case 'item':
      return `- ${(await Promise.all(component.children.map(render))).join('')}\n`;
    case 'p':
      return `${(await Promise.all(component.children.map(render))).join('')}\n`;
    default:
      if (component.children) {
        return `${(await Promise.all(component.children.map(render))).join('')}`;
      }
      return '';
  }
}
