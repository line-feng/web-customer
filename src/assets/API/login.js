let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({
	extended: false
}));

app.post('/post', function(req, res) {
	console.log(req.body)

	//设置允许跨域的域名，*代表允许任意域名跨域8
	res.header("Access-Control-Allow-Origin", "*");
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");
	//跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

	res.header("Content-Type", "application/json;charset=utf-8");

	connectionData((db) => {

		var dbo = db.db("userlists"),
			whereStr = {
				"username": req.body['username']
			},
			updateStr = {
				$set: {
					"password": req.body['password']
				}
			};
		dbo.collection("uses").updateOne(whereStr, updateStr, (err, result) => {
			if (err) throw err;

			console.log("文档更新成功");
			db.close();
		});
	})

	res.send(200);

})

app.get('/get', (req, res) => {

	//设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "*");
	//允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");
	//跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

	res.header("Content-Type", "application/json;charset=utf-8");

	connectionData((db) => {
		//查
		var dbo = db.db("userlists");
		dbo.collection("uses").find({}).toArray((err, result) => {
			if (err) throw err;
			res.send(result)
			db.close()
		});
	})

})

//连接数据库
function connectionData(fun) {

	let MongoClient = require('mongodb').MongoClient;
	let url = "mongodb://localhost:27017/";

	MongoClient.connect(url, {
		useNewUrlParser: true
	}, function(err, db) {

		if (err) throw err;

		fun(db)

	})
}


let server = app.listen(8081, function() {
	console.log("localhost:8081")

})
