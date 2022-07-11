
require('dotenv').config()

export default {
  server: {
    port: process.env.PORT || 1337,
    host: 'localhost'
  },
  database: {
    url: 'mongodb://127.0.0.1/test',
    options: {
      useUnifiedTopology: true,
      maxPoolSize: 50,
      wtimeoutMS: 50000
    }
  },
  private: {

  }
}
