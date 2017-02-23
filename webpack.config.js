var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: 'index.jsx'
	},
	output: {
		path: __dirname,
		filename: 'public/bundle.js',
	},
	resolve: {
		modules: [
			path.join(__dirname, 'src/'),
			path.join(__dirname, 'node_modules/ace-builds/src-noconflict/'),
			"node_modules"
		],
		extensions: ['.js', '.jsx'],
		alias: {
			applicationStyles: 'styles/app.scss',
			configureStore: 'store/configureStore.jsx',
			EditorPane: 'components/EditorPane.jsx',
			actions: 'actions/actions.jsx',
			reducers: 'reducers/reducers.jsx',
			ace:  'ace-builds/src-noconflict/ace.js',
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/(node_modules|bower_components)/],		
				loader: 'babel-loader',
				options: { 
					presets: ['react', ['es2015', {modules: false}], 'stage-0' ]
				},
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
				 		options: {
					 		includePaths: [
								path.resolve(__dirname, './node_modules/normalize-scss/sass')
							]
				 		},
					}
					,
				],

			}
		],
	},
	devtool: 'cheap-module-eval-source-map' /* For debugging, shows actual code not webpack code. */
}
