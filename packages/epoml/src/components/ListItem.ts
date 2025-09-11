import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';
import { evaluateCondition, parseLoopExpression, evaluateArrayExpression, createLoopContext } from '../utils/conditionalUtils';
import { processTemplateVars } from '../utils';
import { Fragment } from '../core/Fragment';

export interface ListItemProps extends BaseComponentProps {
  // Add conditional and loop props
  if?: boolean | string | ((context: Record<string, any>) => boolean);
  for?: string;
}

export function ListItem(props: ListItemProps): Component {
  const {
    syntax = 'markdown',
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
        
        loopChildren.push(ListItem(loopProps));
      }
      
      // Return a fragment with all loop children
      return Fragment({ children: loopChildren }) as unknown as Component;
    }
  }

  // Process children content
  let content = children.map(child => typeof child === 'string' ? child : '').join('');

  // Process template variables in content
  const context = (props as any).context || {};
  content = processTemplateVars(content, context);

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownListItem(content, className, speaker);
    
    case 'html':
      return generateHtmlListItem(content, className, speaker);
    
    case 'json':
      return generateJsonListItem(content, className, speaker);
    
    case 'yaml':
      return generateYamlListItem(content, className, speaker);
    
    case 'xml':
      return generateXmlListItem(content, className, speaker);
    
    case 'text':
    default:
      return generateTextListItem(content, className, speaker);
  }
}

function generateMarkdownListItem(
  content: string,
  className?: string,
  speaker?: string
): Component {
  return createElement('div', { className, 'data-speaker': speaker }, `- ${content}`);
}

function generateHtmlListItem(
  content: string,
  className?: string,
  speaker?: string
): Component {
  return createElement('li', { className, 'data-speaker': speaker }, content);
}

function generateJsonListItem(
  content: string,
  className?: string,
  speaker?: string
): Component {
  const obj = { type: 'list-item', content };
  return createElement('div', { className, 'data-speaker': speaker }, JSON.stringify(obj));
}

function generateYamlListItem(
  content: string,
  className?: string,
  speaker?: string
): Component {
  const yaml = `type: list-item\ncontent: ${JSON.stringify(content)}`;
  return createElement('div', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlListItem(
  content: string,
  className?: string,
  speaker?: string
): Component {
  const xml = `<list-item>${content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</list-item>`;
  return createElement('div', { className, 'data-speaker': speaker }, xml);
}

function generateTextListItem(
  content: string,
  className?: string,
  speaker?: string
): Component {
  return createElement('div', { className, 'data-speaker': speaker }, `- ${content}`);
}