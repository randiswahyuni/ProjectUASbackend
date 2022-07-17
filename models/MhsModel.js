import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Mahasiswa = db.define('mahasiswa',{
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default Mahasiswa;
 
(async()=>{
    await db.sync();
})();