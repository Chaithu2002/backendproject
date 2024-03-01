import User from '../models/user.model';

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
