const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')

exports.config = {
    // baseUrl: 'http://localhost',
    // port: 4723,
    // path: '/wd/hub',
    // services: ['appium'],
    user: 'pedroflix_p5KMJE',
    key: 'TTqqup4pVhX4pkZ5FiVy',
    services: ['browserstack'],
    waitForTimeout: 99999,
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        // "platformName": "Android",
        // "appium:platformVersion": "8.0",
        // "appium:deviceName": "Pixel 2 API 26",
        // "appium:automationName": "UiAutomator2",
        // "appium:app": join(process.cwd(), './app/android/loja-ebac.apk'),
        // "appium:appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        // "appium:newCommandTimeout": 999

        'app': 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
        'device': 'Samsung Galaxy S10',// Specify device and os_version for testing
        'os_version': '9.0',        // Set other BrowserStack capabilities
        'project': 'Meu primeiro projeto em device farm',
        'build': 'build-1',
        'name': 'teste_login'
    }],
    mochaOpts: {
        timeout: 999999
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: false,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
