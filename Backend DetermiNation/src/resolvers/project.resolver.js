import Projects from "../models/projects.models.js";
import Users from "../models/users.models.js";

const allProjects = async () => {
  const project= await Projects.find();
  return project;  
};

const project = async (parent, args, context, info) => {
 const project = await Projects.findById(args._id);
 return project;

};

const proyectByName = async (parent, args, context, info) => {
  const projectbyname = await Projects.findOne({nom_proyecto : args.nom_proyecto});
  return projectbyname;
}

const addProject = async (parent, args, context, info) =>{
    let newproject = new Projects(args.input);
    newproject = await newproject.save();
    return newproject;

}

const leader = async (parent, args, context, info) => {
  const userbyid = await Users.findById(parent.doc_lider);
  return userbyid;
 
 };

export default {
  projectQueries:{
    allProjects,
    project,
    proyectByName
  },
  Project:{
    leader,
   },
  projectMutations:{
    addProject,
  },
  

  
};
