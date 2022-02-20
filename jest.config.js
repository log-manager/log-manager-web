module.exports = {
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^@app/(.*)': '<rootDir>/src/app/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
  },
};
