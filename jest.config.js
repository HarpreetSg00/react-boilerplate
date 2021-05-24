module.exports = {
  globals: {
    IS_SERVER: false,
    IS_CLIENT: true,
    __VERSION__: 'readonly',
  },
  collectCoverageFrom: ['**/src/**/*.{js,jsx,mjs}'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  modulePathIgnorePatterns: ['<rootDir>/src/__tests__/test-utils.js', '<rootDir>/src/server/'],
  transform: { '\\.[jt]sx?$': 'babel-jest' },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@container(.*)$': '<rootDir>/src/client/components/container$1',
    '^@general(.*)$': '<rootDir>/src/client/components/general$1',
    '^@view(.*)$': '<rootDir>/src/client/components/view$1',
    '^@store(.*)$': '<rootDir>/src/client/store$1',
    '^@utils(.*)$': '<rootDir>src/client/utils$1',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
