'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.service
    ctx.body = 'hi, egg';
  }
  async data(){
    const {ctx}=this
    let list=await this.ctx.service.home.data()
    ctx.body={
      message:"",
      list
    }
  }
  async list(){
    const {ctx}=this
    let list=await this.ctx.service.home.list()
    ctx.body={
      message:"",
      list:list.slice(0,10),
      data:list.slice(10)
    }
  }
  async account(){
    const {ctx}=this
    let list=await this.ctx.service.home.account()
    ctx.body={
      message:"",
      list
    }
  }
  async create(){
    const {ctx}=this
    let {name,pass}=this.ctx.query
    let bool=await this.ctx.service.home.read(name)
    let list=await this.ctx.service.home.account()
    if(bool!==null){
      ctx.body={
          message:"注册失败（用户名重复）",
          code:-1
        }
    }else{
      let data=await this.ctx.service.home.create(name,pass)
      ctx.body={
        message:"注册成功",
        code:1
      }
    }
  }
  async deng(){
    const {ctx}=this
    let {name,pass}=this.ctx.query
    let list=await this.ctx.service.home.account()
   
    list.filter(item=>{
      if(item.name==name&&item.pass==pass){
        ctx.body={
          item,
          bool:item.name==name
        }
      }
    })
    // list.filter(item=>{
    //   console.log(item)
    //   if(item.name==name&&item.pass==pass){
    //      let token = app.jwt.sign({ name, pwd }, app.jwt.secret, { expiresIn: '1h' })
    //     ctx.body={
    //       message:"登入成功",
    //       token,
    //       item
    //     } 
    //   }else{
    //     ctx.body={
    //       message:"登入失败",
    //       code:-1,
    //       name,
    //       item
    //     }
    //   }
    // })
  }
}

module.exports = HomeController;
