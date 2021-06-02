require('dotenv').config();

const app = require('./app');

require('./db.conection');

app.listen(app.get('port'), ()=> {
  console.log('server on port:', app.get('port'))
})
