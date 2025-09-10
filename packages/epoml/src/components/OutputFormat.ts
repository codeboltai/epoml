import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';

export interface OutputFormatProps extends BaseComponentProps {
      /** Format type */
      type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html';
      /** Format description */
      description?: string;
      /** Format example */
      example?: string;
      /** Format schema */
      schema?: any;
      /** Whether this format is the preferred output format */
      preferred?: boolean;
    
}

export function OutputFormat(props: OutputFormatProps): Component {
      const {
        type,
        description,
        example,
        schema,
        preferred = false,
        syntax = 'text',
        className,
        speaker,
        children = []
    
  } = props;

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownOutputFormat(type, description, example, schema, preferred, children, className, speaker);
    
    case 'html':
      return generateHtmlOutputFormat(type, description, example, schema, preferred, children, className, speaker);
    
    case 'json':
      return generateJsonOutputFormat(type, description, example, schema, preferred, children, className, speaker);
    
    case 'yaml':
      return generateYamlOutputFormat(type, description, example, schema, preferred, children, className, speaker);
    
    case 'xml':
      return generateXmlOutputFormat(type, description, example, schema, preferred, children, className, speaker);
    
    case 'text':
    default:
      return generateTextOutputFormat(type, description, example, schema, preferred, children, className, speaker);
  }
}

function generateMarkdownOutputFormat(
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html',
  description: string | undefined,
  example: string | undefined,
  schema: any,
  preferred: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  const preferredMarker = preferred ? ' 🌟 (Preferred)' : '';
  result += `## Output Format: ${type}${preferredMarker}\
\
`;
  
  if (description) {
    result += `**Description:** ${description}\
\
`;
  }
  
  if (example) {
    result += '### Example\
\
';
    result += `\\`\\`\\`${type}\
${example}\
\\`\\`\\`\
\
`;
  }
  
  if (schema) {
    result += '### Schema\
\
';
    result += `\\`\\`\\`json\
${JSON.stringify(schema, null, 2)}\
\\`\\`\\`\
\
`;
  }
  
  // Add children content
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    result += childrenContent;
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

function generateHtmlOutputFormat(
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html',
  description: string | undefined,
  example: string | undefined,
  schema: any,
  preferred: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  const preferredMarker = preferred ? ' 🌟 (Preferred)' : '';
  
  let html = `<div class=\"output-format${className ? ` ${className}` : ''}\"${speaker ? ` data-speaker=\"${speaker}\"` : ''}>\
`;
  html += `  <h2>Output Format: ${escapeHtml(type)}${preferredMarker}</h2>\
`;
  
  if (description) {
    html += `  <p class=\"format-description\"><strong>Description:</strong> ${escapeHtml(description)}</p>\
`;
  }
  
  if (example) {
    html += '  <h3>Example</h3>\
';
    html += `  <pre class=\"format-example\"><code class=\"language-${type}\">${escapeHtml(example)}</code></pre>\
`;
  }
  
  if (schema) {
    html += '  <h3>Schema</h3>\
';
    html += `  <pre class=\"format-schema\"><code class=\"language-json\">${escapeHtml(JSON.stringify(schema, null, 2))}</code></pre>\
`;
  }
  
  // Add children content
  if (children.length > 0) {
    html += '  <div class=\"format-details\">\
';
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    html += `    ${childrenContent}\
`;
    html += '  </div>\
';
  }
  
  html += '</div>';
  
  return createElement('div', { 'data-speaker': speaker }, html);
}

function generateJsonOutputFormat(
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html',
  description: string | undefined,
  example: string | undefined,
  schema: any,
  preferred: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  const format: any = {
    type,
    preferred
  };
  
  if (description) {
    format.description = description;
  }
  
  if (example) {
    format.example = example;
  }
  
  if (schema) {
    format.schema = schema;
  }
  
  // Add children content as a string
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    format.details = childrenContent;
  }
  
  if (className) {
    format.className = className;
  }
  
  if (speaker) {
    format.speaker = speaker;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, JSON.stringify(format, null, 2));
}

function generateYamlOutputFormat(
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html',
  description: string | undefined,
  example: string | undefined,
  schema: any,
  preferred: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  const preferredMarker = preferred ? ' 🌟 (Preferred)' : '';
  let yaml = `type: ${type}\
preferred: ${preferred}\
`;
  
  if (description) {
    yaml += `description: ${JSON.stringify(description)}\
`;
  }
  
  if (example) {
    yaml += `example: |\
${example.split('\
').map(line => `  ${line}`).join('\
')}`;
  }
  
  if (schema) {
    yaml += `\
schema: ${JSON.stringify(schema)}`;
  }
  
  // Add children content as a string
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    yaml += `\
details: |\
${childrenContent.split('\
').map(line => `  ${line}`).join('\
')}`;
  }
  
  if (className) {
    yaml += `\
className: ${JSON.stringify(className)}`;
  }
  
  if (speaker) {
    yaml += `\
speaker: ${JSON.stringify(speaker)}`;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlOutputFormat(
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html',
  description: string | undefined,
  example: string | undefined,
  schema: any,
  preferred: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let xml = `<outputFormat type=\"${type}\" preferred=\"${preferred}\"`;
  
  if (className) {
    xml += ` class=\"${className}\"`;
  }
  
  if (speaker) {
    xml += ` data-speaker=\"${speaker}\"`;
  }
  
  xml += '>\
';
  
  if (description) {
    xml += `  <description>${escapeXml(description)}</description>\
`;
  }
  
  if (example) {
    xml += `  <example>${escapeXml(example)}</example>\
`;
  }
  
  if (schema) {
    xml += `  <schema>${escapeXml(JSON.stringify(schema))}</schema>\
`;
  }
  
  // Add children content
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    xml += `  <details>${escapeXml(childrenContent)}</details>\
`;
  }
  
  xml += '</outputFormat>';
  
  return createElement('pre', { className, 'data-speaker': speaker }, xml);
}

function generateTextOutputFormat(
  type: 'json' | 'xml' | 'csv' | 'yaml' | 'text' | 'markdown' | 'html',
  description: string | undefined,
  example: string | undefined,
  schema: any,
  preferred: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  const preferredMarker = preferred ? ' 🌟 (Preferred)' : '';
  let result = `OUTPUT FORMAT: ${type}${preferredMarker}\
`;
  result += '='.repeat(Math.max(14, type.length + 15)) + '\
\
';
  
  if (description) {
    result += `Description: ${description}\
\
`;
  }
  
  if (example) {
    result += 'Example:\
';
    result += '-------\
';
    result += `${example}\
\
`;
  }
  
  if (schema) {
    result += 'Schema:\
';
    result += '------\
';
    result += `${JSON.stringify(schema, null, 2)}\
\
`;
  }
  
  // Add children content
  if (children.length > 0) {
    result += 'Details:\
';
    result += '-------\
';
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    result += childrenContent;
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