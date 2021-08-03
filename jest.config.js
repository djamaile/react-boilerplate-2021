module.exports = {
    roots: ["<rootDir>/src"],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      "\\.svg$": "<rootDir>/src/__mocks__/fileTransformer.js",
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect",
    ],
    
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  
    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    
    moduleNameMapper: {
      "\\.(css|scss)$": `<rootDir>/src/__mocks__/styleMock.js`
    },

    testEnvironment: 'jsdom'

}