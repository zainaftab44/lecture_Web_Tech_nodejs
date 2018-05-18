const express=  require("express")
const app = express();
const router = express.Router();
//var mongoose= require("mongoose")
//mongoose.connect("mongodb://localhost:27017/scocs") // connect to our database
//
var MongoClient = require("mongodb").MongoClient;
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(router);

app.use(function(req, res, next) {
    res.status(404).json({ "status": 403, "message": "Sorry, that route doesn\'t exist." });
console.log('route does\'t exist')
});

app.listen(3000,function() {
    console.log('App listening on port 3000.');
});


router.post("/hello/:name",function(req,res){
console.log('hello')
res.send("hello "+ req.params.name)
});
router.get("/sum/:a/:b", function(req,res){
var a=parseInt(req.params.a)
var b =parseInt(req.params.b)
console.log(a+b)
res.send(a+b+"")
}
);
router.get("/sub/:a/:b",  function (req,res){
var a=parseInt (req.params.a)
var b= parseInt(req.params.b)

MongoClient.connect("mongodb://localhost:27017/", function (err, c) {
	var db = c.db("scocs");
	db.collection("res").insert({"a":a,"b":b,"res":a-b});
})
if (a>b){
console.log(a-b)
res.send(a-b+"")
}
else{
 console.log (b-a)
res.send(b-a+"")
}
}
)
