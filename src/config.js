const config = {
  debug: true,
  host: ''
}

if (config.debug) {
  config.API_URL = 'http://localhost:3000/api/v1'
}

export default config
