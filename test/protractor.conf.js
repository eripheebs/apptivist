exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/e2e/*.js'],
  baseUrl: 'http://localhost:3000/'
}
