import { readFileSync } from 'fs';
import { epomlparse } from 'epoml';

/**
 * Read and render a POML file
 * @param filePath Path to the POML file
 * @param variables Optional variables to pass to the template
 * @returns Rendered output as a string
 */
export async function readPoml(filePath: string, variables?: Record<string, any>): Promise<string> {
  try {
    // Read the POML file
    const pomlContent = readFileSync(filePath, 'utf-8');
    
    // Parse and render the POML content
    const result = await epomlparse(pomlContent, variables);
    
    return result;
  } catch (error) {
    console.error(`Error reading or parsing POML file: ${filePath}`, error);
    throw error;
  }
}

// Example usage
if (require.main === module) {
  // Example of how to use the function
  readPoml('./example.poml', { name: 'World' })
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
}