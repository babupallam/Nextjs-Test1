/**
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I'm in Dev Mode");
    return defaultConfig
  }

  return defaultConfig
} 
 * 
 * 
 */
/* ---global variable without plugin 
 module.exports = {
    env:{
        ENV: "Babu Pallam - (A plugin example global variable) /next.jsx  ref to /next.config.js"
    }
 }
 //enable console.log(process.env.ENV) in next.js too
 */

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()