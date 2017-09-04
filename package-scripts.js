/* eslint-disable no-undef */
module.exports = {
	scripts: {
		default: 'react-scripts start',
		test: {
			default: 'jest ./src',
			full: 'nps test && eslint ./src && nps test.pa11y',
			precommit: 'nps test && lint-staged',
			pa11y: {
				default:
					'nps test.pa11y.start && nps test.pa11y.test && nps test.pa11y.stop',
				start:
					'BROWSER=none forever start -v --killSignal=SIGINT -t --uid "hey-so-um-pa11y-test" -a -c "react-scripts start" ./ && sleep 4',
				test: 'pa11y-ci',
				stop: 'forever stop hey-so-um-pa11y-test'
			}
		},
		eject: 'react-scripts eject',
		build: 'react-scripts build',
		deploy: {
			default: 'nps build && nps deploy.toServer',
			toServer: 'surge --project ./build --domain hey-so-um.zcorbett.com'
		}
	}
}
