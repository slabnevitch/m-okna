module.exports = {
	// important: true,
	darkMode: 'selector',
	content: [ 'app/*.html', 'app/js/*.js', '!app/js/*.min.js' ],
	theme: {
		screens: { //полная перезапись дефолтных точек
			'xl': {'max': '1824px'},
			'lg': {'max': '1199.99px'},
			'md': {'max': '991.98px'},
			'sm': {'max': '767.98px'},
			'xs': {'max':' 575.98px'},
			'xss':{'max': '479.98px'},
			'xsss': {'max': '375.98px'},
			'minw': {'max': '359.98px'},
			'minsw': {'max': '320px'}
		},
		extend: {
			fontFamily: {
				light: ['"TTTravels-Light"', 'sans-serif'],
				regular: ['"TTTravels-Regular"', 'sans-serif'],
				medium: ['"TTTravels-Medium"', 'sans-serif'],
				demibold: ['"TTTravels-DemiBold"', 'sans-serif'],
				bold: ['"TTTravels-Bold"', 'sans-serif'],
				icomoon: ['"icomoon"']

			},
			textShadow: {
		       DEFAULT: '0px 2px 2px #840E05'
		    },
		    maxWidth: {
		    	cont: '1824px'
		    },
			colors: {
				accent: '#2B2862',
				blue: '#00B4EF'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms')({
		    // strategy: 'base', // only generate global styles
		    strategy: 'class', // only generate classes
		 }),
	]
}
