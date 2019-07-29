const PromiseAction = require('./index.js').default;


let result = new PromiseAction('GET_DATA');
if (result.toString() !== 'GET_DATA'
  || result.PENDING !== 'GET_DATA_PENDING'
  || result.FULFILLED !== 'GET_DATA_FULFILLED'
  || result.REJECTED !== 'GET_DATA_REJECTED') {
  console.error(`Test failed: input: 'GET_DATA'\
     output: ${result}`)
     process.exit(1)
}

result = new PromiseAction('GET_DATA', 'APP');
if (result.toString() !== 'APP/GET_DATA'
  || result.PENDING !== 'APP/GET_DATA_PENDING'
  || result.FULFILLED !== 'APP/GET_DATA_FULFILLED'
  || result.REJECTED !== 'APP/GET_DATA_REJECTED') {
  console.error(`Test failed: input: 'GET_DATA'\
     output: ${result}`)
     process.exit(1)
}
console.log('Test completed successfully')
process.exit(0)
