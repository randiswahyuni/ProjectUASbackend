import {Sequelize} from "sequelize";
 
const db = new Sequelize('projectuas','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
