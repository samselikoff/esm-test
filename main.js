// This works
// import foo from './addon/foo';

// I'm wondering if it's possible to wire up ESM to make this to work
import foo from 'esm-test/foo';

console.log(foo);

export {}
