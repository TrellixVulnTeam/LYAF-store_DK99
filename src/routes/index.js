//Require route:
const sideRoute = require('./side');
const proManager = require('./proManager');
const route = (app)=>{
    app.use('/',sideRoute);
    app.use('/manager',proManager);
    app.use('/checkpass',sideRoute);
}

module.exports = route;