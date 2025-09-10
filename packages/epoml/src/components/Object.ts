import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';
import { escapeHtml, escapeXml, repeatChar, processTemplateVars } from '../utils';

export interface ObjectProps extends BaseComponentProps {
  /** Object data to display */
  data?: any;
  /** Type of the object */
  type?: string;
  /** Name of the object */
  name?: string;
  /** Whether to display inline */
  inline?: boolean;
  /** Template variables for dynamic content */
  templateVars?: Record<string, any>;
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
    result += `**${name}**\n\n`;
  }
  
  if (type) {
    result += `*Type: ${type}*\n\n`;
  }
  
  if (data !== undefined) {
    if (inline) {
      result += '`' + JSON.stringify(data) + '`';
    } else {
      result += '```json\n' + JSON.stringify(data, null, 2) + '\n```';
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
    html += `<h3>${name}</h3>\n`;
  }
  
  if (type) {
    html += `<p><em>Type: ${type}</em></p>\n`;
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
    yaml += `name: ${JSON.stringify(name)}\n`;
  }
  
  if (type) {
    yaml += `type: ${JSON.stringify(type)}\n`;
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
    xml += ` name="${name}"`;
  }
  
  if (type) {
    xml += ` type="${type}"`;
  }
  
  if (className) {
    xml += ` class="${className}"`;
  }
  
  if (speaker) {
    xml += ` data-speaker="${speaker}"`;
  }
  
  xml += '>';
  
  if (data !== undefined) {
    xml += `\n  <data>${escapeXml(JSON.stringify(data))}</data>`;
  }
  
  xml += '\n</object>';
  
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
    result += `OBJECT: ${name}\n`;
    result += repeatChar('=', Math.max(7, name.length + 7)) + '\n\n';
  } else {
    result += 'OBJECT\n';
    result += repeatChar('=', 6) + '\n\n';
  }
  
  if (type) {
    result += `Type: ${type}\n\n`;
  }
  
  if (data !== undefined) {
    result += 'Data:\n';
    result += '----\n';
    result += JSON.stringify(data, null, 2);
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

