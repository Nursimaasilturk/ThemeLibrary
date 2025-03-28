module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	transform: {
	  '^.+\\.tsx?$': 'ts-jest', 
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  