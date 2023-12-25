var express = require('express');
var router = express.Router();
var { requiresAuth } = require('express-openid-connect')
var axios = require('axios')
router.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    console.log(req.oidc.user);
    res.render('index', {
        title: 'Express demo',
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user
    },
    );

})
router.get('/secured', requiresAuth(), async (req, res) => {
    // let data = {}
    // const { token_type, access_token } = req.oidc.accessToken
    // try {
    //     const Apiresponce = await axios.get('http://localhost:5000/public',
    //         {
    //             headers: {
    //                 authoriazation: `${token_type} ${access_token}`
    //             }
    //         }
    //     )
    //     data = Apiresponce.data
    // }
    // catch (e) {

    // }
    console.log(req.oidc.isAuthenticated());
    console.log(req.oidc.user);
    res.render('Secured', {
        title: 'Secured page',
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user,

    },
    );

})


module.exports = router;