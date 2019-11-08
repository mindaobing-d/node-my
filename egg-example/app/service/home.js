let Service = require("egg").Service;

class HomeService extends Service{
  async list(){
    let result = await this.app.mysql.select("list")
    return result
  }
  async data(){
    let result = await this.app.mysql.select("data")
    return result
  }
  async account(){
    let result = await this.app.mysql.select("account")
    return result
  }
  async create(name,pass){
    const result = await this.app.mysql.insert('account', {name,pass});
    return result
  }
  async read(name){
    const result = await this.app.mysql.get('account', {name});
    return result
  }
}

module.exports = HomeService;