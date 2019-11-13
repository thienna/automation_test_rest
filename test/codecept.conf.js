exports.config = {
  tests: './*_test.js',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8000'
   }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'webtest'  
}