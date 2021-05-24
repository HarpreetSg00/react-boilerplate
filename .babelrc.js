const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [['@babel/preset-env', { modules: isTest ? 'commonjs' : false }], '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-export-namespace-from',
    'dynamic-import-node',
  ],
};
