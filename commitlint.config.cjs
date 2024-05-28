// 커밋 린팅할 컨벤션을 설정해요
/*  rules : {
    'type-enum': [
      2,
      'always',
      ['fix', 'feat', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'header-max-length': [2, 'always', 100],
    'subject-case': [0, 'never'],
    'header-case': [0, 'never'],
    'type-case': [0, 'never'],
  },
**/
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
