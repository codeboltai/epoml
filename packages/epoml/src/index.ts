
import epoml, { Epoml } from './epoml';
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
import { registerComponent, unregisterComponent, getComponent, clearComponents } from './epoml';
import { type TemplateVariables } from './types';

// Export the epoml function, components, epomlparse function, and component registry functions
export { 
  epoml, 
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
