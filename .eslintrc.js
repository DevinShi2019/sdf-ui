/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-01 14:50:06
 * @LastEditTime: 2019-11-01 14:52:13
 * @LastEditors: Devin Shi
 * @Description:
 */
module.exports = {
    "env": {
      "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "plugins": [
        "vue"
    ],
    "rules": {
      ////////////////
      // 可能的错误  //
      ////////////////
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      // 禁用 console
      'no-console': 'off',
      // 禁用 alert、confirm 和 prompt
      'no-alert': 'error',

      //////////////
      // 风格指南  //
      //////////////
      // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
      'semi': ['off', 'always'],
      // 强制在 function的左括号之前使用一致的空格
      'space-before-function-paren': ['off', 'always'],

      //////////////
      // 最佳实践 //
      //////////////


      //////////////
      // ES6.相关 //
      //////////////
      // 要求箭头函数的参数使用圆括号
      'arrow-parens': 'error',
      // allow async-await
      'generator-star-spacing': 'off',
      'no-unused-vars': 'warn'
    }
};
