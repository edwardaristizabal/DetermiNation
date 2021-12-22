import Advances from "../models/advances.modelo.js";
import Projects from "../models/projects.models.js";

const allAdvances = async (parent, args, context, info) => {
    const advances= await Advances.find();
    return advances;  
  };

const advanceByid = async (parent, args, context, info) => {
    const advancebyid = await Advances.findById(args._id);
    return advancebyid;
   };

   const project = async (parent, args, context, info) => {
    const proyectbyid = await Projects.findById(parent.id_proyecto);
    return proyectbyid;
   };

const addAdvance = async (parent, args, context, info) =>{
    let newadvance = new Advances(args.input);
    newadvance = await newadvance.save();
    return  newadvance;
}

export default {
  advanceQueries:{
    allAdvances,
    advanceByid,
   },
   Advance:{
    project,
   },

  advanceMutations:{
    addAdvance,
  }
};