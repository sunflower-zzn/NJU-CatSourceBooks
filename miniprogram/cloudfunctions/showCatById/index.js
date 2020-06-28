// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const id = event.id
  return db.collection("cat").where({
    _id: id
  })
  .get(res=>{
    return {
      data: res.data,
      errMsg: "success"
    }
  })
  .catch(err=>{
      return{
        data: [],
        errMsg: err.errMsg
      }
  })
}