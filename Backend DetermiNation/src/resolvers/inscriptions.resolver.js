import Inscriptions from "../models/inscriptions.models.js";

const allInscriptions = async (parent, args, context, info) => {
    const advances= await Inscriptions.find();
    return advances;  
  };
  

const inscriptionByid = async (parent, args, context, info) => {
    const inscriptionbyid = await Inscriptions.findById(args._id);
    return inscriptionbyid;
   };

const addInscription = async (parent, args, context, info) =>{
    let newinscription = new Inscriptions(args.input);
    newinscription = await newinscription.save();
    return  newinscription;
}

export default {
  inscriptionQueries:{
    allInscriptions,
    inscriptionByid,
   },
   inscriptionMutations:{
    addInscription,
  }
};