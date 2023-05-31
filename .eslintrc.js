module.exports = {
  extends: ['stlato'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};
