module.exports = {
  plugins: ['security', 'simple-import-sort'],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9
  },
  rules: {
    'simple-import-sort/imports': 'error',
    quotes: [2, 'single'],
    'no-console': 2,
    'no-debugger': 2,
    'accessor-pairs': 2,
    'no-var': 2,
    'array-callback-return': 2,
    'no-template-curly-in-string': 2,
    complexity: [
      'error',
      {
        max: 11
      }
    ],
    'no-trailing-spaces': 2,
    'dot-location': [2, 'property'],
    'eol-last': 0,
    eqeqeq: 2,
    'no-unused-vars': 2,
    'guard-for-in': 2,
    'dot-notation': 2,
    curly: 2,
    'default-case': 2,
    'consistent-return': 2,
    'no-underscore-dangle': 0,
    'no-alert': 2,
    'no-caller': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-else-return': 2,
    'no-extra-label': 2,
    'no-lone-blocks': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-octal-escape': 2,
    'no-implied-eval': 2,
    'no-control-regex': 0,
    'no-new-wrappers': 2,
    'no-prototype-builtins': 0,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-label-var': 2,
    'no-undefined': 2,
    'prefer-promise-reject-errors': 2,
    'no-proto': 2,
    'no-with': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-return-await': 2,
    'no-iterator': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-labels': 2,
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-sync': 2,
    semi: [2, 'never'],
    'no-extra-semi': 0,
    'key-spacing': [
      'error',
      {
        afterColon: true
      }
    ],
    'object-curly-spacing': ['error', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'quote-props': ['error', 'as-needed'],
    'keyword-spacing': [
      'error',
      {
        before: true
      }
    ]
  },
  extends: ['eslint:recommended', 'plugin:security/recommended', 'prettier']
}
