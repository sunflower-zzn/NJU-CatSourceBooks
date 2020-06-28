// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env:"nju-cat-test-hamy4"})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userId = event.id
  const information = await db.collection("admin").where({openid:userId}).get(res=>{
    return{
      data:res.data,
      errMsg:"success"
    }
  }).catch(err=>{
    return{
      data:[],
      errMsg:err.errMsg
    }
  })

  console.log(information)

  if(information.data.length != 0){
    return {isAdmin: true}
  }else{
    return {isAdmin: false}
  }
}