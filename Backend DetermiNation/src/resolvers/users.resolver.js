import Users from "../models/users.models.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { USER_STATUS,ROLES } from "../constans/user.constants.js";

const allUsers = async (parent, args, { user,errorMessage }) => {
   if(!user){ 
      throw new Error(errorMessage);
    }
   if(user.rol !== ROLES.Administrador){
      throw new Error('Acces denied')
    }
     return await Users.find();
  };
  

const user = async (parent, args, {user, errorMessage}) => {
   if(!user){
     throw new Error(errorMessage);
   }
    return user;
   };

const userById = async (parent, args, context, info) => {
    const userbyid = await Users.findById(args._id);
    return userbyid;
   
};


const userByCorreo = async (parent, args, context, info) => {
  const userbycorreo = await Users.findOne({correo : args.correo});
  return userbycorreo;
}

const register = async (parent, args, context) => {

   const user = new Users ({  
       ...args.input,
       estado: USER_STATUS.Pendiente,
       contrasena: await bcrypt.hash(args.input.contrasena, 12),

   });
   return user.save();

}

const login = async (parent,args) => {
   const user = await await Users.findOne({correo : args.correo});
   if (!user){
     throw new error('User not found');

   }

   const {contrasena, _id} = user;
   const isValid = await bcrypt.compare(args.contrasena, user.contrasena);
   if (!isValid){
     throw new Error('Wrong password');
   }
 
   const token = await jwt.sign( 
    { user},
    process.env.SECRET,
    {expiresIn: '30m'}
    );
   return token;
};

export default {
  userQueries:{
    allUsers,
    user,
    userByCorreo
  },
  userMutations:{
    register,
    login,
  }

  
};
