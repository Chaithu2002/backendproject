import { string } from '@hapi/joi';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new Schema(
  {
    fname:{
      type: String
    },
    lname:{
      type: String
    },
    email:{
      type: String
    },
    password:{
      type: String
    }
  },
  {
    timestamps: true
  }
);

// saving the encrypted password before saving in database
userSchema.pre('save',async function(next){
  try{
    const salt = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(this.password,salt);
    this.password = encryptPassword;
  }catch(error){
    next(error);
  }
  
});

export default model('User', userSchema);
