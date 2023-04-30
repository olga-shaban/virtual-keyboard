module.exports = {
    env: {
      browser: true,
      es6: true
    },
    globals: {
      module: true // добавляем глобальную переменную "module"
    },
    extends: "eslint:recommended",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module"
    },
    rules: {
      // правила линтинга
    }
  }; 
