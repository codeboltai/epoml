import * as fs from 'fs';
import * as path from 'path';

// Define the component types
export type Component = {
  type: string | Function;
  props: { [key: string]: any };
  children: (Component | string)[];
};

export namespace Epoml {
  export function createElement(
    type: string | Function,
    props: { [key: string]: any },
    ...children: (Component | string)[]
  ): Component {
    const flattenedChildren = children.flat();
    return { type, props, children: flattenedChildren || [] };
  }

  export function Fragment(props: { children: (Component | string)[] }): (Component | string)[] {
    return props.children;
  }
}

// The renderer function
async function render(component: Component | string): Promise<string> {
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

// The main epoml function
export default async function epoml(component: Component): Promise<string> {
  return render(component);
}
