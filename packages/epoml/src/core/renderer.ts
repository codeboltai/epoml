import { Component } from '../types';
import { Fragment } from './Fragment';

/**
 * Render a component tree to a string
 * @param component The component to render
 * @returns Promise resolving to the rendered string
 */
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
    // Text formatting components
    case 'italic':
    case 'i':
      return `*${(await Promise.all(component.children.map(render))).join('')}*`;
    
    case 'strikethrough':
    case 'strike':
    case 's':
      return `~~${(await Promise.all(component.children.map(render))).join('')}~~`;
    
    case 'underline':
    case 'u':
      return `<u>${(await Promise.all(component.children.map(render))).join('')}</u>`;
    
    case 'text':
      return (await Promise.all(component.children.map(render))).join('');
    
    // Structure components
    case 'paragraph':
    case 'p':
      return `${(await Promise.all(component.children.map(render))).join('')}\n`;
    
    case 'newline':
    case 'br':
      return '\n';
    
    case 'list':
    case 'ul':
      return `${(await Promise.all(component.children.map(render))).join('')}`;
    
    case 'listitem':
    case 'item':
    case 'li':
      return `- ${(await Promise.all(component.children.map(render))).join('')}\n`;
    
    case 'subcontent':
    case 'section':
      const sectionContent = (await Promise.all(component.children.map(render))).join('');
      return `${sectionContent}\n`;
    
    case 'folder':
      const folderTitle = component.props?.name || component.props?.title || 'Folder';
      const folderContent = (await Promise.all(component.children.map(render))).join('');
      return `📁 ${folderTitle}\n${folderContent}`;
    
    // Conversation components
    case 'aimessage':
    case 'ai-msg':
      return `**AI**: ${(await Promise.all(component.children.map(render))).join('')}\n`;
    
    case 'humanmessage':
    case 'human-msg':
      return `**Human**: ${(await Promise.all(component.children.map(render))).join('')}\n`;
    
    case 'systemmessage':
    case 'system-msg':
      return `**System**: ${(await Promise.all(component.children.map(render))).join('')}\n`;
    
    case 'conversation':
      const conversationContent = (await Promise.all(component.children.map(render))).join('');
      return `--- Conversation ---\n${conversationContent}--- End Conversation ---\n`;
    
    case 'messagecontext':
    case 'msg-context':
      return `[Context: ${(await Promise.all(component.children.map(render))).join('')}]\n`;
    
    // Utility components
    case 'toolrequest':
    case 'tool-request':
      const toolName = component.props?.tool || 'Unknown Tool';
      const requestContent = (await Promise.all(component.children.map(render))).join('');
      return `🔧 Tool Request (${toolName}): ${requestContent}\n`;
    
    case 'toolresponse':
    case 'tool-response':
      const responseTool = component.props?.tool || 'Unknown Tool';
      const responseContent = (await Promise.all(component.children.map(render))).join('');
      return `✅ Tool Response (${responseTool}): ${responseContent}\n`;
    
    case 'webpage':
      const url = component.props?.url || '';
      const title = component.props?.title || url;
      const webContent = (await Promise.all(component.children.map(render))).join('');
      if (webContent) {
        return `🌐 [${title}](${url})\n${webContent}\n`;
      } else {
        return `🌐 [${title}](${url})\n`;
      }
    
    case 'image':
    case 'img':
      const imgSrc = component.props?.src || component.props?.url || '';
      const imgAlt = component.props?.alt || 'Image';
      const imgCaption = component.props?.caption;
      let imgResult = `![${imgAlt}](${imgSrc})`;
      if (imgCaption) {
        imgResult += `\n*${imgCaption}*`;
      }
      return `${imgResult}\n`;
    
    // Custom components
    case 'example':
      const exampleContent = (await Promise.all(component.children.map(render))).join('');
      return `${exampleContent}\n`;
    
    default:
      if (component.children) {
        return `${(await Promise.all(component.children.map(render))).join('')}`;
      }
      return '';
  }
}