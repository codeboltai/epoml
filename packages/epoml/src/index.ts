
import { render } from './core/renderer';
import { createElement } from './core/createElement';
import { Fragment } from './core/Fragment';
import { registerComponent, unregisterComponent, getComponent, clearComponents } from './core/componentRegistry';
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
import { type TemplateVariables, type Component } from './types';

// Export the core functions, components, epomlparse function, and component registry functions
export { 
  render,
  createElement,
  Fragment,
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
