#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Dynamically import epoml
async function renderPomlFile(pomlFilePath: string, outputFilePath?: string) {
  try {
    // Import epoml dynamically
    const { epomlparse } = await import('../../../packages/epoml/src/index');
    
    // Resolve the file path
    const fullPath = join(process.cwd(), pomlFilePath);
    
    // Read the POML file
    const pomlContent = readFileSync(fullPath, 'utf-8');
    
    // Parse and render the POML content
    const result = await epomlparse(pomlContent);
    
    // Output to file or console
    if (outputFilePath) {
      const outputPath = join(process.cwd(), outputFilePath);
      writeFileSync(outputPath, result);
      console.log(`POML rendered successfully. Output written to: ${outputPath}`);
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error(`Error reading or parsing POML file: ${pomlFilePath}`, error);
    process.exit(1);
  }
}

// Get command line arguments
const args = process.argv.slice(2);
const pomlFilePath = args[0];
const outputFilePath = args[1];

// Check if file path is provided
if (!pomlFilePath) {
  console.error('Usage: render-poml <poml-file-path> [output-file-path]');
  console.error('Example: render-poml prompt.poml output.md');
  process.exit(1);
}

// Render the POML file
renderPomlFile(pomlFilePath, outputFilePath);