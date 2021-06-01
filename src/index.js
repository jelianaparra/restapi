const app = require('./app');

require('dotenv').config();

const app = require('./app');

require('./db.conection');

app.listen(app.get('port'), ()=> {
  console.log('server on port:', app.get('port'))
})

/*

app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
  console.log(app.get("name"));
});*/