var express = require('express');
var router = express.Router();

//hiển thị toàn bộ
router.get("/",function(req,res,next){
  UserModel.find().then(function(data){
    res.json(data)
  })
})


//thêm mới
router.post("/",function(req,res,next){
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
router.put("/:id",function(req,res,next){
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
router.delete("/:id",function(req,res,next){
  var id = req.params.id
  UserModel.deleteOne({_id:id}).then(function(data){
    res.json({
      err:false,
      message:"xóa thành công"
    })
  })
  })



module.exports = router;
