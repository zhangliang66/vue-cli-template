'use strict'
module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  EVN_CONFIG: '"test"',
  API_ROOT: '"/test/apis/v1"'
})
