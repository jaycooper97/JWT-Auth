const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    //checks if jwt exist/is valid
    if(token) {
        jwt.verify(token, 'secret message', (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
}



//check current user
const checkUser = (req, res, next) => {
    //grabs token from cookies
    const token = req.cookies.jwt;

    //checks if token exists
    if(token) {
        //verify token
        jwt.verify(token, 'secret message', async (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);

                //makes accessible in views folder
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}


module.exports = { requireAuth, checkUser };