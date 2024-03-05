import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';


export const create = async (req, res, next) => {
    try{
        const data = await noteService.create(req.body);
        res.status(HttpStatus.OK).json({
        code:HttpStatus.OK,
        data:data,
        message:"Note created successfully"
    });
    }
    catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code:HttpStatus.BAD_REQUEST,
            message:`${error}`
        })
    }
    
}


export const update = async (req,res,next) => {
    try{
        const data = await noteService.update(req.params._id,req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Note updated successfully"
        });
    }
    catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
}

export const read = async (req,res,next) => {
    try{
        const data = await noteService.read(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "Note fetched successfully"
        });
    }
    catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
}


export const remove = async (req,res,next) => {
    try{
        const data = await noteService.remove(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "note removed successfully"
        });
    }
    catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
}

export const getALL = async (req,res,next) => {
    try{
        const data = await noteService.getALL();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: "ALL Notes are fetched successfully"
        });
    }
    catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
}