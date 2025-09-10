import { Component } from '../types';

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
    case 'list':
      return `${(await Promise.all(component.children.map(render))).join('')}`;
    case 'item':
      return `- ${(await Promise.all(component.children.map(render))).join('')}\n`;
    case 'p':
      return `${(await Promise.all(component.children.map(render))).join('')}\n`;
    default:
      if (component.children) {
        return `${(await Promise.all(component.children.map(render))).join('')}`;
      }
      return '';
  }
}