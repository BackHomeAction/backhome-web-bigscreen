module.exports = {
  root: true,

  env: {
    node: true
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021
  },

  extends: ['plugin:vue/recommended', '@vue/standard', 'eslint:recommended']
}
