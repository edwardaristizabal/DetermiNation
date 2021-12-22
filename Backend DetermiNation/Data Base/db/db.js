import { connect } from "mongoose";

const BaseDB = async () =>{
     return await connect(
       "mongodb+srv://usertestmongog2:<usertestmongog2>@webservice.lo0ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
     )
     .then(() => {
          console.log('conexion exitosa');
     })
     .catch((e) => {
          console.error('error conectando con base de datos',e)
     })
};

export default BaseDB;
