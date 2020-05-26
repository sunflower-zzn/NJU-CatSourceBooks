// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env:"nju-cat-test-hamy4"})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const catId = event.id
  const userId = wxContext.OPENID
  console.log(catId + '      ' + userId)
  return await cloud.callFunction({
    name:"isAdmin",
    data:{
      id: userId
    }
  }).then(res=>{
    console.log(res.result.isAdmin)
      if(res.result.isAdmin){
        return{
          success: true,
          errMsg: ""
        }
      }else{
        return{
          success:false,
          errMsg:"无权限"
        }
      }
  }).catch(err=>{
    return {
      success:false,
      errMsg:err.errMsg
    }
  })
}