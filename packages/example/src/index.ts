import { epomlparse, registerComponent } from 'epoml';

// Define a custom Task component
function Task({ children }: { children: string }) {
  return `# ${children}\n`;
}

async function main() {
  // Register custom component
  registerComponent('Task', Task);

  // Use custom component
  const prompt = `
<Task>Task1</Task>
`;

  try {
    const output = await epomlparse(prompt);
    console.log(output);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();