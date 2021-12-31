const { application } = require("express");
const express = require("express");
const { restart } = require("nodemon");
const app = express();
app.use(express.json());
app.listen(5000, () => console.log("Server started on port 5000"));
app.get('api/values',function(req,res){
    db.pool.query('SELECT * FROM lists;', function(err, results, fields) {
        if (err) 
            return res.status(500).send(err);
        else
            res.json(results);
    })
})
api.get('api/value',function(req,res,next){
    db.pool.query('INSERT INTO lists (value) VALUES("$(res.body.value}")', function(err, results, fields) {
        if (err) 
            return res.status(500).send(err);
        else
            return res.json({success: true, value: req.body.value});
    })
})
