// 커밋 린팅할 컨벤션을 설정해요
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules : {
    'type-enum': [
      2,
      'always',
      ['fix', 'feat', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
  }
};
