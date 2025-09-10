
import { render, Epoml, registerComponent, unregisterComponent, getComponent, clearComponents, type Component } from './epoml';
import { 
  Audio, 
  Bold, 
  CaptionedParagraph, 
  Code, 
  FileTree, 
  Header, 
  Inline,
  type AudioProps,
  type BoldProps,
  type CaptionedParagraphProps,
  type CodeProps,
  type HeaderProps,
  type InlineProps
} from './components';
import { epomlparse } from './epomlparse';
import { type TemplateVariables } from './types';

// Export the render function, components, epomlparse function, and component registry functions
export { 
  render,
  Epoml,
  Component,
  Audio, 
  Bold, 
  CaptionedParagraph, 
  Code, 
  FileTree, 
  Header, 
  Inline,
  epomlparse, 
  registerComponent, 
  unregisterComponent, 
  getComponent, 
  clearComponents,
  type AudioProps,
  type BoldProps,
  type CaptionedParagraphProps,
  type CodeProps,
  type HeaderProps,
  type InlineProps,
  type TemplateVariables
};
