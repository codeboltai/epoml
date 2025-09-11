import { createElement } from '../core/createElement';
import { Component, BaseComponentProps } from '../types';

export interface ListProps extends BaseComponentProps {
  /** Whether to use numbered (ordered) list instead of bulleted (unordered) list */
  ordered?: boolean;
  /** Start number for ordered lists */
  start?: number;
}

export function List(props: ListProps): Component {
  const {
    ordered = false,
    start,
    syntax = 'markdown',
    className,
    speaker,
    children = []
  } = props;

  // Process children content
  const items = children.map(child => typeof child === 'string' ? child : '').filter(item => item.trim() !== '');

  // Generate the component based on syntax
  switch (syntax) {
    case 'markdown':
      return generateMarkdownList(items, ordered, start, className, speaker);
    
    case 'html':
      return generateHtmlList(items, ordered, start, className, speaker);
    
    case 'json':
      return generateJsonList(items, ordered, start, className, speaker);
    
    case 'yaml':
      return generateYamlList(items, ordered, start, className, speaker);
    
    case 'xml':
      return generateXmlList(items, ordered, start, className, speaker);
    
    case 'text':
    default:
      return generateTextList(items, ordered, start, className, speaker);
  }
}

function generateMarkdownList(
  items: string[],
  ordered: boolean,
  start: number | undefined,
  className?: string,
  speaker?: string
): Component {
  const prefix = ordered ? (start ? `${start}. ` : '1. ') : '- ';
  const listItems = items.map((item, index) => {
    const itemPrefix = ordered && start ? `${start + index}. ` : prefix;
    return `${itemPrefix}${item}`;
  });
  
  return createElement('div', { className, 'data-speaker': speaker }, listItems.join('\n'));
}

function generateHtmlList(
  items: string[],
  ordered: boolean,
  start: number | undefined,
  className?: string,
  speaker?: string
): Component {
  const listTag = ordered ? 'ol' : 'ul';
  const startAttr = ordered && start ? ` start="${start}"` : '';
  const listItems = items.map(item => `  <li>${item}</li>`).join('\n');
  
  return createElement('div', { className, 'data-speaker': speaker }, 
    `<${listTag}${startAttr}>\n${listItems}\n</${listTag}>`);
}

function generateJsonList(
  items: string[],
  ordered: boolean,
  start: number | undefined,
  className?: string,
  speaker?: string
): Component {
  const obj = { 
    type: ordered ? 'ordered-list' : 'unordered-list', 
    items,
    ordered,
    start
  };
  
  return createElement('div', { className, 'data-speaker': speaker }, JSON.stringify(obj, null, 2));
}

function generateYamlList(
  items: string[],
  ordered: boolean,
  start: number | undefined,
  className?: string,
  speaker?: string
): Component {
  const yamlItems = items.map(item => `  - ${JSON.stringify(item)}`).join('\n');
  const yaml = `type: ${ordered ? 'ordered-list' : 'unordered-list'}\nordered: ${ordered}\nitems:\n${yamlItems}`;
  
  if (start !== undefined) {
    return createElement('div', { className, 'data-speaker': speaker }, `${yaml}\nstart: ${start}`);
  }
  
  return createElement('div', { className, 'data-speaker': speaker }, yaml);
}

function generateXmlList(
  items: string[],
  ordered: boolean,
  start: number | undefined,
  className?: string,
  speaker?: string
): Component {
  const listTag = ordered ? 'ordered-list' : 'unordered-list';
  const startAttr = start !== undefined ? ` start="${start}"` : '';
  const listItems = items.map(item => `  <item>${item.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</item>`).join('\n');
  
  return createElement('div', { className, 'data-speaker': speaker }, 
    `<${listTag} ordered="${ordered}"${startAttr}>\n${listItems}\n</${listTag}>`);
}

function generateTextList(
  items: string[],
  ordered: boolean,
  start: number | undefined,
  className?: string,
  speaker?: string
): Component {
  const listItems = items.map((item, index) => {
    const prefix = ordered ? (start ? `${start + index}. ` : `${index + 1}. `) : '- ';
    return `${prefix}${item}`;
  });
  
  return createElement('div', { className, 'data-speaker': speaker }, listItems.join('\n'));
}