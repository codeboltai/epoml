const swc = require('@swc/core');

async function debugTransform() {
  const template = `<Paragraph for="item in ['apple', 'banana', 'cherry']">{item}</Paragraph>`;
  
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
  
  console.log('Transformed code:');
  console.log(transformed.code);
}

debugTransform().catch(console.error);