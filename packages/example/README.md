# EPOML Example

This is an example project demonstrating how to use the EPOML library.

## Usage

```javascript
import { epomlparse } from 'epoml';

const prompt = `
<>
  <p>This is basic text</p>
  <list>
    <item>item1</item>
    <item>item2</item>
  </list>
</>
`;

const output = await epomlparse(prompt);
console.log(output);
```

## Running the Example

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run in development mode:
   ```bash
   pnpm run dev
   ```

3. Build for production:
   ```bash
   pnpm run build
   ```

4. Run the built JavaScript:
   ```bash
   pnpm start
   ```

## Available Scripts

- `pnpm run dev` - Run the TypeScript file directly using ts-node
- `pnpm run build` - Compile TypeScript to JavaScript in the dist folder
- `pnpm start` - Run the compiled JavaScript