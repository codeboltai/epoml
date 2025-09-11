import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';
import { escapeHtml, escapeXml, escapeXmlAttr, repeatChar, processTemplateVars } from '../utils';

export interface ExampleProps extends BaseComponentProps {
  /** Title for the example */
  title?: string;
  /** Description of the example */
  description?: string;
  /** Category or topic of the example */
  category?: string;
  /** Difficulty level */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  /** Whether this is a best practice example */
  bestPractice?: boolean;
}

export function Example(props: ExampleProps): Component {
  const {
    title,
    description,
    category,
    difficulty = 'beginner',
    bestPractice = false,
    syntax = 'text',
    className,
    speaker,
    children = []
  } = props;

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownExample(title, description, category, difficulty, bestPractice, children, className, speaker);
    
    case 'html':
      return generateHtmlExample(title, description, category, difficulty, bestPractice, children, className, speaker);
    
    case 'json':
      return generateJsonExample(title, description, category, difficulty, bestPractice, children, className, speaker);
    
    case 'yaml':
      return generateYamlExample(title, description, category, difficulty, bestPractice, children, className, speaker);
    
    case 'xml':
      return generateXmlExample(title, description, category, difficulty, bestPractice, children, className, speaker);
    
    case 'text':
    default:
      return generateTextExample(title, description, category, difficulty, bestPractice, children, className, speaker);
  }
}

function generateMarkdownExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  // Difficulty emoji
  const difficultyEmoji = {
    'beginner': '🟢',
    'intermediate': '🟡',
    'advanced': '🔴'
  }[difficulty];
  
  // Best practice marker
  const bestPracticeMarker = bestPractice ? ' ⭐' : '';
  
  let result = '';
  result += `## 📝 Example${title ? `: ${title}` : ''}${bestPracticeMarker} ${difficultyEmoji}\n\n`;
  
  if (description) {
    result += `**Description:** ${description}\n\n`;
  }
  
  if (category) {
    result += `**Category:** ${category}\n\n`;
  }
  
  result += `**Difficulty:** ${difficulty}\n\n`;
  
  // Add children content (the example content)
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    result += childrenContent;
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}

function generateHtmlExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  // Difficulty emoji
  const difficultyEmoji = {
    'beginner': '🟢',
    'intermediate': '🟡',
    'advanced': '🔴'
  }[difficulty];
  
  // Best practice marker
  const bestPracticeMarker = bestPractice ? ' ⭐' : '';
  
  let html = `<div class="example${className ? ` ${className}` : ''}"${speaker ? ` data-speaker="${speaker}"` : ''}>\n`;
  html += `  <h2>📝 Example${title ? `: ${escapeHtml(title)}` : ''}${bestPracticeMarker} ${difficultyEmoji}</h2>\n`;
  
  if (description) {
    html += `  <p class="example-description"><strong>Description:</strong> ${escapeHtml(description)}</p>\n`;
  }
  
  if (category) {
    html += `  <p class="example-category"><strong>Category:</strong> ${escapeHtml(category)}</p>\n`;
  }
  
  html += `  <p class="example-difficulty"><strong>Difficulty:</strong> ${difficulty}</p>\n`;
  
  // Add children content (the example content)
  if (children.length > 0) {
    html += '  <div class="example-content">\n';
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    html += `    ${childrenContent}\n`;
    html += '  </div>\n';
  }
  
  html += '</div>';
  
  return createElement('div', { 'data-speaker': speaker }, html);
}

function generateJsonExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  return createElement('div', { className, 'data-speaker': speaker }, JSON.stringify({
    type: 'example',
    title,
    description,
    category,
    difficulty,
    bestPractice,
    content: children.map(child => typeof child === 'string' ? child : '').join('')
  }, null, 2));
}

function generateYamlExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let yaml = `type: example\ntitle: ${title ? JSON.stringify(title) : 'null'}\n`;
  if (description) yaml += `description: ${JSON.stringify(description)}\n`;
  if (category) yaml += `category: ${JSON.stringify(category)}\n`;
  yaml += `difficulty: ${difficulty}\n`;
  yaml += `bestPractice: ${bestPractice}\n`;
  yaml += `content: ${JSON.stringify(children.map(child => typeof child === 'string' ? child : '').join(''))}\n`;
  
  return createElement('div', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let xml = `<example${className ? ` class="${escapeXmlAttr(className)}"` : ''}${speaker ? ` data-speaker="${escapeXmlAttr(speaker)}"` : ''}>\n`;
  if (title) xml += `  <title>${escapeXml(title)}</title>\n`;
  if (description) xml += `  <description>${escapeXml(description)}</description>\n`;
  if (category) xml += `  <category>${escapeXml(category)}</category>\n`;
  xml += `  <difficulty>${escapeXml(difficulty)}</difficulty>\n`;
  xml += `  <bestPractice>${bestPractice}</bestPractice>\n`;
  xml += `  <content>${escapeXml(children.map(child => typeof child === 'string' ? child : '').join(''))}</content>\n`;
  xml += `</example>`;
  
  return createElement('div', { className, 'data-speaker': speaker }, xml);
}

function generateTextExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string
): Component {
  let result = '';
  result += `EXAMPLE: 📝${title ? ` ${title}` : ''}${bestPractice ? ' ⭐' : ''}\n`;
  result += repeatChar('=', Math.max(20, title ? title.length + 15 : 20)) + '\n\n';
  
  if (description) {
    result += `Description: ${description}\n\n`;
  }
  
  if (category) {
    result += `Category: ${category}\n\n`;
  }
  
  result += `Difficulty: ${difficulty}\n\n`;
  
  if (children.length > 0) {
    result += 'Content:\n';
    result += '-------\n';
    result += children.map(child => typeof child === 'string' ? child : '').join('');
    result += '\n';
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}