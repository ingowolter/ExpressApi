let app = require('./init');
let routes = require('./routes/routes');

routes(app.express);

app.start();