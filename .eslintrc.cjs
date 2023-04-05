module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["index"]
    }]
  },
};
