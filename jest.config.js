module.exports = {
  transform: {
    '\\.(ts|tsx)$': 'typescript-babel-jest',
    '\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  // Coverage report
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'html'],
  mapCoverage: true,
  // Test configuration
  testMatch: ['**/__tests__/**/*.spec.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
};
