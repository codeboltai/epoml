const { evaluateArrayExpression } = require('../epoml/dist/utils/conditionalUtils');

// Test evaluateArrayExpression with inline array
const result = evaluateArrayExpression("['apple', 'banana', 'cherry']", {});
console.log('Result:', result);