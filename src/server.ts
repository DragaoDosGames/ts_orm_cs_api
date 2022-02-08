
const {app, setup} = require('./index.ts')
if(require.main === module){
    console.log(">>>> Server")
    setup();
    app.listen(5500, () => console.log('Server started at http://localhost:5500'));
}