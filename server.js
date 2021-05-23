var express = require('express');
var app = express();

app.listen(3000,function(){
    console.log('App is Running on 3000');
});

app.use( function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
  next();
})
app.get('/products', function(req,res){
    var products=[
    { empId: '10001', fname: 'Firoz', lname: 'Khan', dep: 'Web Devloper', city: 'Bengaluru', email: 'khan3firoz@gmail.com' ,dob:"12/01/1999",salary:100000 },
      { empId: '10002', fname: 'Akhlaque', lname: 'Ahmad', dep: 'Web Devloper', city: 'Bengaluru', email: 'akhlaquea01@gmail.com' ,dob:"12/01/1999",salary:100000},
      { empId: '10003', fname: 'Ashfaque', lname: 'Ahmad', dep: 'Data Scientist', city: 'Bengaluru', email: 'ashfaque786@gmail.com',dob:"12/01/1999",salary:100000 },
      { empId: '10004', fname: 'Krishna', lname: 'kumar', dep: 'Mechanical', city: 'Noida', email: 'twariji@gmail.com',dob:"12/01/1999",salary:100000 }]
    res.json([products]);
});