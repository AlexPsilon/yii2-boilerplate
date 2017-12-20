module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores', 'mixin', 'include'],
      },
    ],
    indentation: 2,
    // 'string-quotes': 'single',
    'unit-whitelist': ['em', 's', 'px', 'vw', 'vh', '%'],
    'number-leading-zero': null,
    'declaration-colon-newline-after': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
};
