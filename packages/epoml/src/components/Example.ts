import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';
import { escapeHtml, escapeXml, escapeXmlAttr, repeatChar, processTemplateVars } from '../utils';
import { evaluateCondition, parseLoopExpression, evaluateArrayExpression, createLoopContext } from '../utils/conditionalUtils';
import { Fragment } from '../core/Fragment';

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
  // Add conditional and loop props
  if?: boolean | string | ((context: Record<string, any>) => boolean);
  for?: string;
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
    children = [],
    // Extract conditional and loop props
    if: condition,
    for: loopExpression
  } = props;

  // Handle conditional rendering
  if (condition !== undefined) {
    // Get the evaluation context from a global or passed context
    const evaluationContext = (props as any).context || {};
    const shouldRender = evaluateCondition(condition, evaluationContext);
    if (!shouldRender) {
      // Return an empty fragment
      return Fragment({ children: [] }) as unknown as Component;
    }
  }

  // Handle loop rendering
  if (loopExpression) {
    const evaluationContext = (props as any).context || {};
    const loopParts = parseLoopExpression(loopExpression);
    if (loopParts) {
      const array = evaluateArrayExpression(loopParts.arrayExpression, evaluationContext);
      const loopChildren: (Component | string)[] = [];
      
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // Create a new context with loop variables
        const loopContext = createLoopContext(evaluationContext, loopParts.itemName, item, i, array.length);
        
        // Create a new component instance for this iteration with the loop context
        const loopProps = {
          ...props,
          for: undefined, // Remove the for prop to prevent infinite recursion
          context: loopContext // Pass the loop context
        };
        
        loopChildren.push(Example(loopProps));
      }
      
      // Return a fragment with all loop children
      return Fragment({ children: loopChildren }) as unknown as Component;
    }
  }

  // Process template variables in title
  const context = (props as any).context || {};
  const processedTitle = title ? processTemplateVars(title, context) : undefined;

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownExample(processedTitle, description, category, difficulty, bestPractice, children, className, speaker, context);
    
    case 'html':
      return generateHtmlExample(processedTitle, description, category, difficulty, bestPractice, children, className, speaker, context);
    
    case 'json':
      return generateJsonExample(processedTitle, description, category, difficulty, bestPractice, children, className, speaker, context);
    
    case 'yaml':
      return generateYamlExample(processedTitle, description, category, difficulty, bestPractice, children, className, speaker, context);
    
    case 'xml':
      return generateXmlExample(processedTitle, description, category, difficulty, bestPractice, children, className, speaker, context);
    
    case 'text':
    default:
      return generateTextExample(processedTitle, description, category, difficulty, bestPractice, children, className, speaker, context);
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
  speaker?: string,
  context?: Record<string, any>
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
    // Process template variables in children content
    const processedContent = processTemplateVars(childrenContent, context || {});
    result += processedContent;
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
  speaker?: string,
  context?: Record<string, any>
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
    // Process template variables in children content
    const processedContent = processTemplateVars(childrenContent, context || {});
    html += `    ${processedContent}\n`;
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
  speaker?: string,
  context?: Record<string, any>
): Component {
  const example: any = {
    difficulty,
    bestPractice
  };
  
  if (title) {
    example.title = title;
  }
  
  if (description) {
    example.description = description;
  }
  
  if (category) {
    example.category = category;
  }
  
  // Add children content as a string
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    // Process template variables in children content
    const processedContent = processTemplateVars(childrenContent, context || {});
    example.content = processedContent;
  }
  
  if (className) {
    example.className = className;
  }
  
  if (speaker) {
    example.speaker = speaker;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, JSON.stringify(example, null, 2));
}

function generateYamlExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string,
  context?: Record<string, any>
): Component {
  // Difficulty emoji
  const difficultyEmoji = {
    'beginner': '🟢',
    'intermediate': '🟡',
    'advanced': '🔴'
  }[difficulty];
  
  // Best practice marker
  const bestPracticeMarker = bestPractice ? ' ⭐' : '';
  
  let yaml = `difficulty: ${difficulty}\nbestPractice: ${bestPractice}\n`;
  
  if (title) {
    yaml += `title: ${JSON.stringify(title)}\n`;
  }
  
  if (description) {
    yaml += `description: ${JSON.stringify(description)}\n`;
  }
  
  if (category) {
    yaml += `category: ${JSON.stringify(category)}\n`;
  }
  
  // Add children content as a string
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    // Process template variables in children content
    const processedContent = processTemplateVars(childrenContent, context || {});
    yaml += `content: |\n${processedContent.split('\n').map((line: string) => `  ${line}`).join('\n')}`;
  }
  
  if (className) {
    yaml += `\nclassName: ${JSON.stringify(className)}`;
  }
  
  if (speaker) {
    yaml += `\nspeaker: ${JSON.stringify(speaker)}`;
  }
  
  return createElement('pre', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string,
  context?: Record<string, any>
): Component {
  let xml = `<example difficulty="${difficulty}" bestPractice="${bestPractice}"`;
  
  if (title) {
    xml += ` title="${escapeXmlAttr(title)}"`;
  }
  
  if (category) {
    xml += ` category="${escapeXmlAttr(category)}"`;
  }
  
  if (className) {
    xml += ` class="${className}"`;
  }
  
  if (speaker) {
    xml += ` data-speaker="${speaker}"`;
  }
  
  xml += '>\n';
  
  if (description) {
    xml += `  <description>${escapeXml(description)}</description>\n`;
  }
  
  // Add children content (the example content)
  if (children.length > 0) {
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    // Process template variables in children content
    const processedContent = processTemplateVars(childrenContent, context || {});
    xml += `  <content>${escapeXml(processedContent)}</content>\n`;
  }
  
  xml += '</example>';
  
  return createElement('pre', { className, 'data-speaker': speaker }, xml);
}

function generateTextExample(
  title: string | undefined,
  description: string | undefined,
  category: string | undefined,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  bestPractice: boolean,
  children: (Component | string)[],
  className?: string,
  speaker?: string,
  context?: Record<string, any>
): Component {
  // Difficulty emoji
  const difficultyEmoji = {
    'beginner': '🟢',
    'intermediate': '🟡',
    'advanced': '🔴'
  }[difficulty];
  
  // Best practice marker
  const bestPracticeMarker = bestPractice ? ' ⭐' : '';
  
  let result = `EXAMPLE: 📝${title ? ` ${title}` : ''}${bestPracticeMarker} ${difficultyEmoji}\n`;
  result += repeatChar('=', Math.max(8, (title?.length || 0) + 8)) + '\n\n';
  
  if (description) {
    result += `Description: ${description}\n\n`;
  }
  
  if (category) {
    result += `Category: ${category}\n\n`;
  }
  
  result += `Difficulty: ${difficulty}\n\n`;
  
  // Add children content (the example content)
  if (children.length > 0) {
    result += 'Content:\n';
    result += '-------\n\n';
    const childrenContent = children.map(child => typeof child === 'string' ? child : '').join('');
    // Process template variables in children content
    const processedContent = processTemplateVars(childrenContent, context || {});
    result += processedContent;
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, result);
}