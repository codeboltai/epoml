import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';

export interface ObjectProps extends BaseComponentProps {
      /** Object data */
      data?: any;
      /** Object type */
      type?: string;
      /** Object name */
      name?: string;
      /** Whether to render as inline */
      inline?: boolean;
    
}

export function Object(props: ObjectProps): Component {
      const {
        data,
        type,
        name,
        inline = false,
        syntax = 'json',
        className,
        speaker,
        children = []
    
  } = props;

  // If children are provided, use them instead of data
  if (children.length > 0) {
    return createElement('div', { className, 'data-speaker': speaker }, ...children);
  }

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownObject(data, type, name, inline, className, speaker);
    
    case 'html':
      return generateHtmlObject(data, type, name, inline, className, speaker);
    
    case 'json':
      return generateJsonObject(data, type, name, className, speaker);
    
    case 'yaml':
      return generateYamlObject(data, type, name, className, speaker);
    
    case 'xml':
      return generateXmlObject(data, type, name, className, speaker);
    
    case 'text':
    default:
      return generateTextObject(data, type, name, className, speaker);
  }
}

function generateMarkdownObject(
  data: any,
  type: string | undefined,
  name: string | undefined,
  inline: boolean,
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  if (name) {
    result += `**${name}**\
\
`;
  }
  
  if (type) {
    result += `*Type: ${type}*\
\
`;
  }
  
  if (data !== undefined) {
    if (inline) {
      result += `\\`${JSON.stringify(data)}\\``;
    } else {
      result += `\\`\\`\\`json\
${JSON.stringify(data, null, 2)}\
\\`\\`\\``;
    }
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

function generateHtmlObject(
  data: any,
  type: string | undefined,
  name: string | undefined,
  inline: boolean,
  className?: string,
  speaker?: string
): Component {
  let html = '';
  
  if (name) {
    html += `<h3>${name}</h3>\
`;
  }
  
  if (type) {
    html += `<p><em>Type: ${type}</em></p>\
`;
  }
  
  if (data !== undefined) {
    if (inline) {
      html += `<code>${escapeHtml(JSON.stringify(data))}</code>`;
    } else {
      html += `<pre><code>${escapeHtml(JSON.stringify(data, null, 2))}</code></pre>`;
    }
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, html);
}

function generateJsonObject(
  data: any,
  type: string | undefined,
  name: string | undefined,
  className?: string,
  speaker?: string
): Component {
  const obj: any = {};
  
  if (name) {
    obj.name = name;
  }
  
  if (type) {
    obj.type = type;
  }
  
  if (data !== undefined) {
    obj.data = data;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, JSON.stringify(obj, null, 2));
}

function generateYamlObject(
  data: any,
  type: string | undefined,
  name: string | undefined,
  className?: string,
  speaker?: string
): Component {
  let yaml = '';
  
  if (name) {
    yaml += `name: ${JSON.stringify(name)}\
`;
  }
  
  if (type) {
    yaml += `type: ${JSON.stringify(type)}\
`;
  }
  
  if (data !== undefined) {
    yaml += `data: ${JSON.stringify(data)}`;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlObject(
  data: any,
  type: string | undefined,
  name: string | undefined,
  className?: string,
  speaker?: string
): Component {
  let xml = '<object';
  
  if (name) {
    xml += ` name=\"${name}\"`;
  }
  
  if (type) {
    xml += ` type=\"${type}\"`;
  }
  
  if (className) {
    xml += ` class=\"${className}\"`;
  }
  
  if (speaker) {
    xml += ` data-speaker=\"${speaker}\"`;
  }
  
  xml += '>';
  
  if (data !== undefined) {
    xml += `\
  <data>${escapeXml(JSON.stringify(data))}</data>`;
  }
  
  xml += '\
</object>';
  
  return createElement('pre', { className, 'data-speaker': speaker }, xml);
}

function generateTextObject(
  data: any,
  type: string | undefined,
  name: string | undefined,
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  if (name) {
    result += `Object: ${name}\
`;
  }
  
  if (type) {
    result += `Type: ${type}\
`;
  }
  
  if (data !== undefined) {
    result += `Data: ${JSON.stringify(data, null, 2)}`;
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}