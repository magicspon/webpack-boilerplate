// const wallabyWebpack = require('wallaby-webpack')
// const { config } = require('./webpack.config')
// const wallabyPostprocessor = wallabyWebpack(config)

module.exports = function(wallaby) {
	return {
		files: [
			'setup-jest.js',
			{
				pattern: 'node_modules/babel-polyfill/dist/polyfill.js',
				instrument: false
			},
			{ pattern: 'src/**/*.js', load: true }
		],

		tests: [{ pattern: 'tests/*.test.js', load: true }],

		env: {
			type: 'node',
			runner: 'node'
		},

		testFramework: 'jest',

		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},

		// postprocessor: wallabyPostprocessor,

		debug: true
	}
}
