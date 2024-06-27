const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userroutes = require('./routs/userrouts');
app.use('/api/users', userroutes);

const db = require('./models');
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});