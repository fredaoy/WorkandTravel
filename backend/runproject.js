var express = require("express");
var app = express();
var path = require("path");
var router = express.Router();
var port = 4000;
var mysql = require("mysql");
var ejs = require("ejs");
var fs = require("fs");
const { emit } = require("process");
require("dotenv").config();
var connection = mysql.createConnection({
  host: process.env.DB_HOSTSERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORTNUMBER,
});

// router.get('/signup', function (req, res) {
//   cname = req.query.fn;
//   em = req.query.em;
//   pwd = req.query.pw;

//   sql1 = "INSERT INTO user (name, email, password) VALUES ('" + cname + "','" + em + "','" + pwd + "')";

//   connection.query(sql1, function (error, result) {
//     if (error) throw error;
//     res.sendFile(path.join(__dirname + "/../frontend/login2.html"));
//   });
// });

// router.get('/signin', function (req, res) {
//   Cem = req.query.em;
//   Cpwd = req.query.pw;

//   sql2 = "SELECT email, password FROM user WHERE email = '" + Cem + "' AND password = '" + Cpwd + "'";
//   connection.query(sql2, function (error, result) {
//     if (error) throw error;
//     if (result.length > 0) {
//       res.sendFile(path.join(__dirname + "/../frontend/project1.html"));
//     } else {
//       res.sendFile(path.join(__dirname + "/../frontend/login2.html"));
//     }
//   });
// });

// router.get('/submit-form', function (req, res) {
//   usData = {
//     city: req.query.city,
//     position: req.query.position,
//     gender: req.query.gender
//   }

//   let sql4 = "INSERT INTO stock (position, gender, city) VALUES ('" +
//     usData.position + "', '" + usData.gender + "', '" + usData.city + "')";

//   console.log(sql4);

//   connection.query(sql4, function (error, result) {
//     if (error) throw error;
//     else {
//       console.log(result);
//       // ตรวจสอบว่าตำแหน่งที่เลือกต้องการให้ลดจำนวนหรือไม่
//       if (usData.position === 'Cashier' || usData.position === 'Sandwist Artist') {
//         let sql5 = "UPDATE stock SET quantity = quantity - 1 WHERE position = '" + usData.position + "'";
//         connection.query(sql5, function (error, result) {
//           if (error) throw error;
//           else {
//             console.log(result);
//           }
//         });
//       }
//     }
//   });

//   res.sendFile(path.join(__dirname + "/../frontend/thank.html"));
//   app.use(express.static(__dirname + '/../frontend'));
// });

// router.get('/wtRegis', function (req, res) {
//   userData = {
//     fn: req.query.fID,
//     ln: req.query.lID,
//     nn: req.query.nID,
//     gd: req.query.genderID,
//     bd: req.query.dateID,
//     a: req.query.ageID,
//     ad: req.query.addressID,
//     mbn: req.query.mpID,
//     m: req.query.emailID,
//     l: req.query.lineID,
//     unv: req.query.unID,
//     ftl: req.query.fcID,
//     yos: req.query.yosID
//   }

//   let sql = "INSERT INTO wt (Fristname, Lastname, Nickname, Age, gender, Brithday, Address, phonenumber, email, IDline, University, Facutuly, YearofStudy) VALUES ('" +
//     userData.fn + "', '" + userData.ln + "', '" + userData.nn + "', '" + userData.a + "', '" + userData.gd +
//     "', '" + userData.bd + "', '" + userData.ad + "', '" + userData.mbn + "', '" + userData.m + "', '" +
//     userData.l + "', '" + userData.unv + "', '" + userData.ftl + "', '" + userData.yos + "')";

//   console.log(sql);

//   connection.query(sql, function (error, result) {
//     if (error) throw error
//     else {
//       console.log(result);
//     }
//   })
//   // กำหนดเส้นทางสำหรับการรับข้อมูลจากแบบฟอร์ม
//   res.sendFile(path.join(__dirname + "/../frontend/payment.html"))
// })

router.get("/aboutus", function (req, res) {
  app.use(express.static(__dirname + "/../frontend"));
  res.sendFile(path.join(__dirname + "/../frontend/about.html"));
});

router.get("/about.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/about.css"));
});

router.get("/location.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/location.css"));
});

router.get("/payment.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/payment.css"));
});

router.get("/thank", function (req, res) {
  app.use(express.static(__dirname + "/../frontend"));
  res.sendFile(path.join(__dirname + "/../frontend/thank.html"));
});

router.get("/location", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/location.html"));
});

router.get("/job", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/job.html"));
});

router.get("/job.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/job.css"));
});

router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/project1.html"));
});

router.get("/applynow", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/signin.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/login.html"));
});

router.get("/login1.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/login1.css"));
});

router.get("/signin.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/signin.css"));
});

router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/project1.html"));
});

router.get("/project1.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/project1.css"));
});

router.get("/project1.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/project1.js"));
});

router.get("/howto", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/page2.html"));
});

router.get("/page2.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/page2.css"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/login2.html"));
});

router.get("/map.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/../frontend/map.js"));
});
// app.get('/SantaRosaBeach', function(req, res) {
//   res.sendFile(path.join(__dirname, '/../frontend/SantaRosaBeach.html'));
// });

app.use("/", router);
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`deployed Application Server is ${port}`);
});
