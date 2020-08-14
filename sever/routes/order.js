var express = require('express');
var router = express.Router();
var OrderModel = require("../Model/OrderModel");

router.get("/",function(req,res,next){
  OrderModel.find().then(function(data){
    res.json(data)
  })
})


  //tạo đơn đặt bàn
  router.post("/",function(req,res,next){
    var amount = req.body.amount,
        session = req.body.session,
        place = req.body.place,
        name = req.body.name,
        gender = req.body.gender,
        date = req.body.date,
        choose = req.body.choose,
        request = req.body.request,
        source = req.body.source,
        totalPrice = req.body.totalPrice;
        console.log(req.body);
    OrderModel.create({
        amount,
        session,
        place,
        name,
        gender,
        date,
        choose,
        request,
        source,
        totalPrice
    }).then(function(data){
      res.json({
       err:false,
       message:"tạo thành công" 
      })
    })
  })
  
  //sửa đơn đặt bàn
  router.put("/:id",function(req,res,next){
    var id = req.params.id,
        amount = req.body.amount,
        session = req.body.session,
        place = req.body.place,
        name = req.body.name,
        gender = req.body.gender,
        date = req.body.date,
        choose = req.body.choose,
        request = req.body.request,
        source = req.body.source,
        totalPrice = req.body.totalPrice

        OrderModel.updateOne({
          _id:id
        },{
        amount,
        session,
        place,
        name,
        gender,
        date,
        choose,
        request,
        source,
        totalPrice
        }).then(function(data){
          res.json({
            err:false,
            message:"cập nhập thành công"
          })
        })
  })
  
  
  //xóa bản ghi
  router.delete("/:id",function(req,res,next){
    var id = req.params.id
    OrderModel.deleteOne({_id:id}).then(function(data){
      res.json({
        err:false,
        message:"xóa thành công"
      })
    })
  })


module.exports = router;
