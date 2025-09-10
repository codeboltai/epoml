import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';

export interface DocumentProps extends BaseComponentProps {
  /** Document title */
  title?: string;
  /** Document author */
  author?: string;
  /** Document version */
  version?: string;
  /** Document date */
  date?: string;
  /** Document metadata */
  metadata?: Record<string, any>;
}

export function Document(props: DocumentProps): Component {
  const {
    title,
    author,
    version,
    date,
    metadata = {},
    syntax = 'markdown',
    className,
    speaker,
    children = []
  } = props;

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownDocument(title, author, version, date, metadata, children, className, speaker);
    
    case 'html':
      return generateHtmlDocument(title, author, version, date, metadata, children, className, speaker);
    
    case 'json':
      return generateJsonDocument(title, author, version, date, metadata, children, className, speaker);
    
    case 'yaml':
      return generateYamlDocument(title, author, version, date, metadata, children, className, speaker);
    
    case 'xml':
      return generateXmlDocument(title, author, version, date, metadata, children, className, speaker);
    
    case 'text':
    default:
      return generateTextDocument(title, author, version, date, metadata, children, className, speaker);
  }
}

function generateMarkdownDocument(
  title: string | undefined,
  author: string | undefined,
  version: string | undefined,
  date: string | undefined,
  metadata: Record<string, any>,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  if (title) {
    result += `# ${title}
`;
  }
  
  if (author || version || date) {
    result += '<!-- Document Info -->
';
    
    if (author) {
      result += `**Author:** ${author}  
`;
    }
    
    if (version) {
      result += `**Version:** ${version}  
`;
    }
    
    if (date) {
      result += `**Date:** ${date}  
`;
    }
    
    result += `
`;
  }
  
  // Add metadata as comments
  if (Object.keys(metadata).length > 0) {
    result += '<!-- Metadata -->
';
    for (const [key, value] of Object.entries(metadata)) {
      result += `<!-- ${key}: ${value} -->
`;
    }
    result += `
`;
  }
  
  // Add children content
  const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
  result += childrenContent;
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

function generateHtmlDocument(
  title: string | undefined,
  author: string | undefined,
  version: string | undefined,
  date: string | undefined,
  metadata: Record<string, any>,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let html = '<!DOCTYPE html>
<html>
<head>
';
  
  if (title) {
    html += `  <title>${title}</title>
`;
  }
  
  // Add metadata as meta tags
  for (const [key, value] of Object.entries(metadata)) {
    html += `  <meta name="${key}" content="${value}">
`;
  }
  
  html += '</head>
<body>
';
  
  if (title) {
    html += `  <h1>${title}</h1>
`;
  }
  
  if (author || version || date) {
    html += '  <div class="document-info">
';
    
    if (author) {
      html += `    <p><strong>Author:</strong> ${author}</p>
`;
    }
    
    if (version) {
      html += `    <p><strong>Version:</strong> ${version}</p>
`;
    }
    
    if (date) {
      html += `    <p><strong>Date:</strong> ${date}</p>
`;
    }
    
    html += '  </div>
';
  }
  
  // Add children content
  const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
  html += `  <div class="document-content">
${childrenContent}
  </div>
`;
  
  html += '</body>
</html>';
  
  return createElement('div', { className, 'data-speaker': speaker }, html);
}

function generateJsonDocument(
  title: string | undefined,
  author: string | undefined,
  version: string | undefined,
  date: string | undefined,
  metadata: Record<string, any>,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  const doc: any = {};
  
  if (title) {
    doc.title = title;
  }
  
  if (author) {
    doc.author = author;
  }
  
  if (version) {
    doc.version = version;
  }
  
  if (date) {
    doc.date = date;
  }
  
  if (Object.keys(metadata).length > 0) {
    doc.metadata = metadata;
  }
  
  // Add children content as a string
  const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
  if (childrenContent) {
    doc.content = childrenContent;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, JSON.stringify(doc, null, 2));
}

function generateYamlDocument(
  title: string | undefined,
  author: string | undefined,
  version: string | undefined,
  date: string | undefined,
  metadata: Record<string, any>,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let yaml = '';
  
  if (title) {
    yaml += `title: ${JSON.stringify(title)}
`;
  }
  
  if (author) {
    yaml += `author: ${JSON.stringify(author)}
`;
  }
  
  if (version) {
    yaml += `version: ${JSON.stringify(version)}
`;
  }
  
  if (date) {
    yaml += `date: ${JSON.stringify(date)}
`;
  }
  
  if (Object.keys(metadata).length > 0) {
    yaml += `metadata:
`;
    for (const [key, value] of Object.entries(metadata)) {
      yaml += `  ${key}: ${JSON.stringify(value)}
`;
    }
  }
  
  // Add children content as a string
  const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
  if (childrenContent) {
    yaml += `content: |
${childrenContent.split('
').map(line => `  ${line}`).join('
')}`;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlDocument(
  title: string | undefined,
  author: string | undefined,
  version: string | undefined,
  date: string | undefined,
  metadata: Record<string, any>,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let xml = '<document';
  
  if (className) {
    xml += ` class="${className}"`;
  }
  
  if (speaker) {
    xml += ` data-speaker="${speaker}"`;
  }
  
  xml += '>
';
  
  if (title) {
    xml += `  <title>${title}</title>
`;
  }
  
  if (author) {
    xml += `  <author>${author}</author>
`;
  }
  
  if (version) {
    xml += `  <version>${version}</version>
`;
  }
  
  if (date) {
    xml += `  <date>${date}</date>
`;
  }
  
  if (Object.keys(metadata).length > 0) {
    xml += '  <metadata>
';
    for (const [key, value] of Object.entries(metadata)) {
      xml += `    <${key}>${value}</${key}>
`;
    }
    xml += '  </metadata>
';
  }
  
  // Add children content
  const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
  if (childrenContent) {
    xml += `  <content>${childrenContent}</content>
`;
  }
  
  xml += '</document>';
  
  return createElement('pre', { className, 'data-speaker': speaker }, xml);
}

function generateTextDocument(
  title: string | undefined,
  author: string | undefined,
  version: string | undefined,
  date: string | undefined,
  metadata: Record<string, any>,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let result = '';
  
  if (title) {
    result += `DOCUMENT: ${title}
`;
    result += '='.repeat(Math.max(10, title.length + 9)) + `
`;
  }
  
  if (author || version || date) {
    result += 'DOCUMENT INFO:
';
    result += '-------------
';
    
    if (author) {
      result += `Author: ${author}
`;
    }
    
    if (version) {
      result += `Version: ${version}
`;
    }
    
    if (date) {
      result += `Date: ${date}
`;
    }
    
    result += `
`;
  }
  
  // Add metadata
  if (Object.keys(metadata).length > 0) {
    result += 'METADATA:
';
    result += '--------
';
    for (const [key, value] of Object.entries(metadata)) {
      result += `${key}: ${value}
`;
    }
    result += `
`;
  }
  
  // Add children content
  const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
  result += childrenContent;
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}