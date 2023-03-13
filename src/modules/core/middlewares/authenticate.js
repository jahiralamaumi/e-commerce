const { findUser } = require('../../user/user.controller')

// Schema Authentication
module.exports = function (req, res, next){
    let { email, token } = req.body;
    const { email: emailFromParams } = req.params;
    email = email || emailFromParams;
    const user = findUser(email);

    if(!user) return res.status(400).send('User not found!');
    
    if(token === user.token) return next();

    res.status(401).send('Unauthenticated');
}
