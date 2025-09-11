const { transform } = require('@swc/core');

async function debugTransform() {
  // Test the template that should work
  const template = `<Paragraph for="item in items">{item}</Paragraph>`;
  
  // Transform the JSX code to JavaScript using SWC
  const transformed = await transform(template, {
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