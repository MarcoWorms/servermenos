module.exports = {
  "extends": ["airbnb-base"],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "semi": [2, "never"],
    "space-before-function-paren": [2, "always"],
    "comma-dangle": [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
}
