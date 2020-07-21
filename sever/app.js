var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var UserModel = require("./Model/userModel")

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);

//login
app.post("/login",function(req,res,next){
  var email = req.body.email
  var password = req.body.password
  UserModel.findById({
    email:email,
    password:password
  }).then(function(data){
    res.json({
      err:false,
      message:"đăng nhập thành công"
    })
  })
})

//hiển thị toàn bộ
app.get("/",function(req,res,next){
  UserModel.find().then(function(data){
    res.json(data)
  })
})


//thêm mới
app.post("/",function(req,res,next){
  var email = req.body.email
  var password = req.body.password
  UserModel.create({
    email:email,
    password:password,
  }).then(function(data){
    res.json({
      err:false,
      message:"đăng ký thành công"
    })
  })
})
//cập nhập
app.put("/:id",function(req,res,next){
  var id = req.params.id
  var email = req.body.email
  var password = req.body.password
  UserModel.updateOne({
    _id:id
  },{
    email:email,
    password:password,
  }).then(function(data){
    res.json({
      err:false,
      message:"cập nhập thành công"
    })
  })
})
//xóa
app.delete("/",function(req,res,next){
  var id = req.params.id
  UserModel.deleteOne({_id:id}).then(function(data){
    res.json({
      err:false,
      message:"xóa thành công"
    })
  })
  })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
