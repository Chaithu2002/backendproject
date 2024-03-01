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
    const encryptPassword = await bcrypt.hash(body.password,10);
    data.password = encryptPassword;
    return data;
  }

};
