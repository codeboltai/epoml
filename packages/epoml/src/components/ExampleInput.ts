import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';
import { escapeHtml, escapeXml, processTemplateVars } from '../utils';

export interface ExampleInputProps extends BaseComponentProps {
  /** Label for the example input */
  label?: string;
  /** Whether to render as inline */
  inline?: boolean;
  /** Input format/type */
  format?: string;
  /** Template variables for dynamic content */
  templateVars?: Record<string, any>;
}

export function ExampleInput(props: ExampleInputProps): Component {
  const {
    label,
    inline = false,
    format,
    templateVars = {},
    syntax = 'markdown',
    className,
    speaker,
    children = []
  } = props;

  // Process template variables
  const processedLabel = label ? processTemplateVars(label, templateVars) : label;

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownExampleInput(processedLabel, inline, format, children, className, speaker);
    
    case 'html':
      return generateHtmlExampleInput(processedLabel, inline, format, children, className, speaker);
    
    case 'json':
      return generateJsonExampleInput(processedLabel, inline, format, children, className, speaker);
    
    case 'yaml':
      return generateYamlExampleInput(processedLabel, inline, format, children, className, speaker);
    
    case 'xml':
      return generateXmlExampleInput(processedLabel, inline, format, children, className, speaker);
    
    case 'text':
    default:
      return generateTextExampleInput(processedLabel, inline, format, children, className, speaker);
  }
}

function generateMarkdownExampleInput(
  label: string | undefined,
  inline: boolean,
  format: string | undefined,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  
  if (inline) {
    if (label) {
      result += `**${label}:** `;
    }
    result += '`' + content + '`';
  } else {
    if (label) {
      result += `**${label}**\n\n`;
    } else {
      result += '**Input:**\n\n';
    }
    
    if (format) {
      result += '```' + format + '\n' + content + '\n```';
    } else {
      result += '```\n' + content + '\n```';
    }
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

function generateHtmlExampleInput(
  label: string | undefined,
  inline: boolean,
  format: string | undefined,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let html = '';
  
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  
  if (inline) {
    html += '<span class="example-input"';
    if (className) {
      html += ` class="${className}"`;
    }
    html += '>';
    
    if (label) {
      html += `<strong>${escapeHtml(label)}:</strong> `;
    }
    html += `<code>${escapeHtml(content)}</code>`;
    html += '</span>';
  } else {
    html += '<div class="example-input"';
    if (className) {
      html += ` class="${className}"`;
    }
    html += '>\n';
    
    if (label) {
      html += `  <h4>${escapeHtml(label)}</h4>\n`;
    } else {
      html += '  <h4>Input</h4>\n';
    }
    
    html += `  <pre><code`;
    if (format) {
      html += ` class="language-${format}"`;
    }
    html += `>${escapeHtml(content)}</code></pre>\n`;
    html += '</div>';
  }
  
  return createElement('div', { 'data-speaker': speaker }, html);
}

function generateJsonExampleInput(
  label: string | undefined,
  inline: boolean,
  format: string | undefined,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  const exampleInput: any = {};
  
  if (label) {
    exampleInput.label = label;
  }
  
  exampleInput.inline = inline;
  
  if (format) {
    exampleInput.format = format;
  }
  
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  if (content) {
    exampleInput.content = content;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, JSON.stringify(exampleInput, null, 2));
}

function generateYamlExampleInput(
  label: string | undefined,
  inline: boolean,
  format: string | undefined,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let yaml = '';
  
  if (label) {
    yaml += `label: ${JSON.stringify(label)}\n`;
  }
  
  yaml += `inline: ${inline}\n`;
  
  if (format) {
    yaml += `format: ${JSON.stringify(format)}\n`;
  }
  
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  if (content) {
    yaml += `content: |\n${content.split('\n').map(line => `  ${line}`).join('\n')}`;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlExampleInput(
  label: string | undefined,
  inline: boolean,
  format: string | undefined,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let xml = '<exampleInput';
  
  if (className) {
    xml += ` class="${className}"`;
  }
  
  if (speaker) {
    xml += ` data-speaker="${speaker}"`;
  }
  
  if (label) {
    xml += ` label="${escapeXml(label)}"`;
  }
  
  if (format) {
    xml += ` format="${format}"`;
  }
  
  xml += ` inline="${inline}"`;
  xml += '>';
  
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  if (content) {
    xml += `\n  <content>${escapeXml(content)}</content>\n`;
  }
  
  xml += '</exampleInput>';
  
  return createElement('pre', { className, 'data-speaker': speaker }, xml);
}

function generateTextExampleInput(
  label: string | undefined,
  inline: boolean,
  format: string | undefined,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  const content = children.map(child => typeof child === 'string' ? child : '').join('');
  
  if (inline) {
    if (label) {
      result += `${label}: `;
    }
    result += content;
  } else {
    if (label) {
      result += `INPUT: ${label}\n`;
      result += '='.repeat(Math.max(6, label.length + 6)) + '\n\n';
    } else {
      result += 'INPUT\n';
      result += '=====\n\n';
    }
    
    if (format) {
      result += `Format: ${format}\n\n`;
    }
    
    result += 'Content:\n';
    result += '-------\n';
    result += content;
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}