import User from '../models/user.model';
import bcrypt from 'bcrypt';

// user registration validation
export const register = async (body) => {
  const data = await User.find({email:body.email});
  console.log(data);
  if(data.length>0){
    throw new Error("EmailId is already registered, use another EmailID");
  }else{
    const data = await User.create(body);
    return data;
  }

};

// login user validation
export const login = async (body) => {
  const userPresent = await User.find({email:body.email}); //outputs an array with user data
  if(userPresent.length>0){
    const validPassword = await bcrypt.compare(body.password,userPresent[0].password); // comparing user password with encrypted password
    if(validPassword === false){
      throw new Error("please enter correct password");
    }
    return userPresent;
  }else{
    throw new Error("User has not registered, please register first");
  }
};

