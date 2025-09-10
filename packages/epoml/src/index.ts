
import epoml, { Epoml } from './epoml';
import { FileTree } from './components/FileTree';
import { epomlparse } from './epomlparse';
import { registerComponent, unregisterComponent, getComponent, clearComponents } from './epoml';

// Export the epoml function, components, epomlparse function, and component registry functions
export { epoml, FileTree, epomlparse, registerComponent, unregisterComponent, getComponent, clearComponents };
