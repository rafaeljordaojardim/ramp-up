// file

const rafa = new Promise((reject, resolve) => {
    fetch('linkedin.com/rafa')
        .then(name => {
            return resolve(name);
        })
        .catch(err => {
            return reject(err);
        });
});

module.exports = { rafa };

//



const { rafa } = require('../file');

app.get('/name', meuMW, (req, res, next) => {
    rafa
        .then((name) => {
            return res.send(name);
        }).catch(err => {        
            return res.sendStatus(500);
        });
});


app.get('/name', meuMW, async (req, res, next) => {
    try {
        const name = await rafa();
        return res.send(name);
    } catch (error) {
        return res.sendStatus(500);        
    }

});
