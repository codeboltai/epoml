import * as swc from '@swc/core';
import { render } from './renderer';
import { createElement } from './createElement';
import { Fragment } from './Fragment';
import { registerComponent, unregisterComponent, getComponent, clearComponents } from './componentRegistry';
import { 
  Audio, 
  Bold, 
  CaptionedParagraph, 
  Code,
  Document,
  Example,
  ExampleInput,
  ExampleOutput,
  ExampleSet,
  FileTree, 
  Header,
  Hint,
  Image,
  Inline,
  Introducer,
  DataObject,
  OutputFormat,
  Question,
  Role,
  StepwiseInstructions,
  Table,
  Task,
  // Newly added components
  Italic,
  Text,
  Paragraph,
  Strikethrough,
  Underline,
  Newline,
  List,
  ListItem,
  SubContent,
  Folder,
  Webpage,
  Conversation,
  AiMessage,
  HumanMessage,
  SystemMessage,
  MessageContext,
  ToolRequest,
  ToolResponse
} from '../components';

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
          pragma: 'createElement',
          pragmaFrag: 'Fragment',
          importSource: 'epoml',
        },
      },
    },
    module: {
      type: 'commonjs',
    },
  });

  // Make createElement, Fragment and component registry functions available globally for the eval
  (global as any).createElement = createElement;
  (global as any).Fragment = Fragment;
  (global as any).registerComponent = registerComponent;
  (global as any).unregisterComponent = unregisterComponent;
  (global as any).getComponent = getComponent;
  (global as any).clearComponents = clearComponents;
  
  // Make all built-in components available globally for the eval
  (global as any).Audio = Audio;
  (global as any).Bold = Bold;
  (global as any).CaptionedParagraph = CaptionedParagraph;
  (global as any).Code = Code;
  (global as any).Document = Document;
  (global as any).Example = Example;
  (global as any).ExampleInput = ExampleInput;
  (global as any).ExampleOutput = ExampleOutput;
  (global as any).ExampleSet = ExampleSet;
  (global as any).FileTree = FileTree;
  (global as any).Header = Header;
  (global as any).Hint = Hint;
  (global as any).Image = Image;
  (global as any).Inline = Inline;
  (global as any).Introducer = Introducer;
  (global as any).DataObject = DataObject;
  (global as any).OutputFormat = OutputFormat;
  (global as any).Question = Question;
  (global as any).Role = Role;
  (global as any).StepwiseInstructions = StepwiseInstructions;
  (global as any).Table = Table;
  (global as any).Task = Task;
  // Newly added components
  (global as any).Italic = Italic;
  (global as any).Text = Text;
  (global as any).Paragraph = Paragraph;
  (global as any).Strikethrough = Strikethrough;
  (global as any).Underline = Underline;
  (global as any).Newline = Newline;
  (global as any).List = List;
  (global as any).ListItem = ListItem;
  (global as any).SubContent = SubContent;
  (global as any).Folder = Folder;
  (global as any).Webpage = Webpage;
  (global as any).Conversation = Conversation;
  (global as any).AiMessage = AiMessage;
  (global as any).HumanMessage = HumanMessage;
  (global as any).SystemMessage = SystemMessage;
  (global as any).MessageContext = MessageContext;
  (global as any).ToolRequest = ToolRequest;
  (global as any).ToolResponse = ToolResponse;
  
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
  const output = await render(component);
  return output;
}