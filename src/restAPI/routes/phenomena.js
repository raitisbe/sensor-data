const Router = require('express-promise-router');
const db = require('../db');
const bodyparser = require('body-parser');
const { check, validationResult } = require('express-validator');
// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();
// export our router to be mounted by the parent application
module.exports = router
router.use(bodyparser());
router.get('/data', async (req, res) => {
    try {
        console.log('Get list');           
        const { rows } = await db.query('SELECT phenomenon_name,unit,id FROM phenomenons')
        res.send(rows)
    } catch (e) {
        console.log(e.stack)
    }
})