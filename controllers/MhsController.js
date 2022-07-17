import Mahasiswa from "../models/MhsModel.js";
 
export const getMahasiswa = async(req, res) =>{
    try {
        const response = await Mahasiswa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getMahasiswaById = async(req, res) =>{
    try {
        const response = await Mahasiswa.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createMahasiswa = async(req, res) =>{
    try {
        await Mahasiswa.create(req.body);
        res.status(201).json({msg: "Mahasiswa Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateMahasiswa = async(req, res) =>{
    try {
        await Mahasiswa.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Mahasiswa Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteMahasiswa = async(req, res) =>{
    try {
        await Mahasiswa.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Mahasiswa Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}