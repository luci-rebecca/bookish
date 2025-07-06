module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: [
        '**/*.spec.(ts|tsx)'
    ],
    verbose: true,
 }