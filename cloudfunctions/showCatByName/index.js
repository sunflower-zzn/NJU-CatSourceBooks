// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const catName = event.name
  return db.collection("cat").where({
    name: catName
  }).get(res=>{
    return{
      data: res.data,
      errMsg: "success"
    }
  }).catch(err=>{
    return{
      data:[],
      errMsg: err.errMsg
    }
  })
}