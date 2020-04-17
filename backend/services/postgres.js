const {Pool} = require("pg");

class ServicioPG{

  constructor(){
    this.pool = new Pool({
      user: "admin",
      host: "localhost",
      database: "bookmarks",
      password: "1193036789",
      port: 5432
    });
  }

  async ejecutarSql(sql){
      let respuesta = await his.pool.query(sql);
      return respuesta;
  }
}

module.export = ServicioPG;
