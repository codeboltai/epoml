import * as fs from 'fs';
import * as path from 'path';
import { Epoml, Component } from '../epoml';

export function FileTree({ depth = 1 }: { depth?: number }): Component {
  let tree = '\n';
  const root = process.cwd();

  function getTree(dir: string, currentDepth: number, prefix: string) {
    if (currentDepth > depth) {
      return;
    }

    const files = fs.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      const isLast = i === files.length - 1;

      tree += `${prefix}${isLast ? '└── ' : '├── '}${file}\n`;

      if (stats.isDirectory()) {
        getTree(filePath, currentDepth + 1, `${prefix}${isLast ? '    ' : '│   '}`);
      }
    }
  }

  getTree(root, 1, '');
  return Epoml.createElement('pre', {}, tree);
}
