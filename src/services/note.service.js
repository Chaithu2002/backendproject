import { error } from '@hapi/joi/lib/base';
import Note from '../models/note.model';

// create function for creating a new note

export const create = async (body)=>{
    
    //checking whether title is already present or not
    const present = await Note.find({title:body.title});
    console.log(present);
    if(present.length>0){
        throw new Error("Title is present already, try with another title name");
    }
    const data = await Note.create(body);
    return data;
}

// update function for updating existing note

export const update = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    if(!data){
        throw new Error("No title is present in database,please try again with correct title name");
    }
    return data;
};

// remove function for deleting particular note from database

export const remove = async (id)=>{
    const data = await Note.findByIdAndDelete(id);
    return data;
}

// read function for reading particular note from database

export const read = async (id)=>{
    const data = await Note.findById(id);
    return data;
}

// getAll function for getting all the notes  

export const getALL = async ()=>{
    const data = await Note.find();
    return data;
}