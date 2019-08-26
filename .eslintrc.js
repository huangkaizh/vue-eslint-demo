module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  // plugins: ["prettier"],
  extends: ["@vue/standard", "plugin:vue/strongly-recommended", "prettier"],
  rules: {
    // "prettier/prettier": "error",
    quotes: [1, "single", "avoid-escape"], //引号风格
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // @fixable 结尾必须有分号
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true
      }
    ],
    // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    // @fixable 分号必须写在行尾，禁止在行首出现
    "semi-style": ["error", "last"],

    //
    //
    // 可能的错误
    //
    // 禁止重复的二级键名
    // @off 没必要限制
    "vue/no-dupe-keys": "off",
    // 禁止 <template> 使用 key 属性
    // @off 太严格了
    "vue/no-template-key": "off",
    // prop 的默认值必须匹配它的类型
    // @off 太严格了
    "vue/require-valid-default-prop": "off",

    //
    //
    // 最佳实践
    //
    // @fixable html 的结束标签必须符合规定
    // @off 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
    "vue/html-end-tags": "off",
    // 禁止在计算属性中对属性修改
    // @off 太严格了
    "vue/no-side-effects-in-computed-properties": "off",
    // prop 需要设置默认值
    // @off 太严格了
    "vue/require-default-prop": "off",
    // 组件的属性必须为一定的顺序
    "vue/order-in-components": "error",

    //
    //
    // 风格问题
    //
    // @fixable 限制自定义组件的属性风格
    // @off 没必要限制
    "vue/attribute-hyphenation": "off",
    // html 属性值必须用双引号括起来
    "vue/html-quotes": "error",
    // @fixable 没有内容时，组件必须自闭和
    // @off 没必要限制
    "vue/html-self-closing": "off",
    // 限制每行允许的最多属性数量
    // @off 没必要限制
    "vue/max-attributes-per-line": "off",
    // @fixable 限制组件的 name 属性的值的风格
    // @off 没必要限制
    "vue/name-property-casing": "off",
    // @fixable 禁止出现连续空格
    "vue/no-multi-spaces": "error",
    // @fixable 限制 v-bind 的风格
    // @off 没必要限制
    "vue/v-bind-style": "off",
    // @fixable 限制 v-on 的风格
    // @off 没必要限制
    "vue/v-on-style": "off",
    // 单行元素的内容之前和之后强制执行换行符
    // @off 没必要限制
    "vue/singleline-html-element-content-newline": "off"
  }
};
