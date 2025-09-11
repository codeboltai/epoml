const swc = require('@swc/core');

async function debugSWC() {
  const template = `<Loop for="item in items">Item {{loop.index}}: {{item}}
</Loop>`;
  
  console.log('Original template:');
  console.log(template);
  
  // Transform the JSX code to JavaScript using SWC
  const transformed = await swc.transform(template, {
    jsc: {
      parser: {
        syntax: 'ecmascript',
        jsx: true,
      },
      transform: {
        react: {
          runtime: 'classic',
          pragma: 'createElement',
          pragmaFrag: 'Fragment',
          importSource: 'epoml',
        },
      },
    },
    module: {
      type: 'commonjs',
    },
  });
  
  console.log('\nTransformed code:');
  console.log(transformed.code);
}

debugSWC().catch(console.error);