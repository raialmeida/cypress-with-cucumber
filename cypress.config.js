const { defineConfig } = require('cypress')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config)
    on('file:preprocessor', browserify.default(config))
    allureWriter(on, config)
    return config
}

module.exports = defineConfig({
    e2e: {
        env: {
            omitFiltered: true,
            filterSpecs: true
        },
        baseUrl: 'https://bugbank.netlify.app',
        specPattern: '**/*.feature',
        video: false,
        fixturesFolder: false,
        setupNodeEvents,
    },
})