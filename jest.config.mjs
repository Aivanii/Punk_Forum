//comments here just for better understanding how testing library works for myself (Aivanii)

export default {
  // Use TypeScript + ESM preset
  preset: 'ts-jest/presets/default-esm',
  
  // Simulate browser environment
  testEnvironment: 'jsdom',
  
  // Files to run before tests
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  
  // Map import aliases
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
  },
  
  // Test file patterns
  testMatch: [
    '<rootDir>/app/test/**/*.test.{ts,tsx}'
  ],
  
  // Paths to ignore
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/coverage/'
  ],
};