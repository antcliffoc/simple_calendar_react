module.exports = {
  env           : {
    browser : true,
    es6     : true,
  },
  extends       : ['plugin:react/recommended', 'google'],
  globals       : {
    Atomics           : 'readonly',
    SharedArrayBuffer : 'readonly',
  },
  parserOptions : {
    ecmaFeatures : {
      jsx : true,
    },
    ecmaVersion  : 2018,
    sourceType   : 'module',
  },
  plugins       : ['react', 'react-hooks'],
  rules         : {
    'react-hooks/rules-of-hooks'  : 'error',
    'react-hooks/exhaustive-deps' : 'warn',
    'require-jsdoc'               : 0,
    indent                        : 0,
    'key-spacing'                 : 0,
  },
};
