import { Sequelize } from "sequelize";

const db = new Sequelize('ptscmeicweb', 'g2xy5ksk5l0156b7q9ez','pscale_pw_5EApJQKSbOW6iPRhS2UBvTHJG8gIysP2jMMezqhh4iL', {
    host: 'us-east.connect.psdb.cloud',
    dialect: 'mysql'
    }
)

export default db