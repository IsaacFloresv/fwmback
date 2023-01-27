import { Sequelize } from "sequelize";

const db = new Sequelize('blcdr404egy5ji4mgjpl', 'u286mwgrlvpbidog','XBLpKkNOmxXQ8ntty7X', {
    host: 'blcdr404egy5ji4mgjpl-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: '21215'
    }
)

export default db