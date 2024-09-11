const { defineConfig } = require('cypress')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')
const { allureCypress } = require("allure-cypress/reporter")
const os = require('os')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://bugbank.netlify.app',
        specPattern: '**/*.feature',
        video: false,
        fixturesFolder: false,
        setupNodeEvents: async function (on, config) {
            await preprocessor.addCucumberPreprocessorPlugin(on, config)
            on('file:preprocessor', browserify.default(config))
            allureCypress(on, {
                environmentInfo: {
                    OS: os.platform,
                    OsVersion: os.version,
                    Architecture: os.arch,
                    NodeVersion: process.version,
                    UrlAPI: config.baseUrl,
                }
            })
            return config
        }
    }
})