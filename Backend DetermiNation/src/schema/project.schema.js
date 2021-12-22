import { gql } from 'apollo-server';

const projectType = gql `
#Project - proyectos
    type Project {
        _id: ID!,
        nom_proyecto: String!
        obj_gen: String
        obj_esp: [String]!
        presupuesto: Float
        fecha_inicio: String!
        fecha_fin: String!
        doc_lider: ID
        estado: ProjectStatus!
        fase: Phase
        leader: User
        
    }

    
` ;

const enums = gql`          
   #Enum for status values - estado
   enum ProjectStatus{
       Activo
       Inactivo
   }
   enum Phase{
       Iniciando
       En_desarrollo
       Terminado

   }
`;

const queries = gql `
  #Query todos los proyectos
  type Query {
    allProjects: [Project]
  }
  
  type Query {
    project(_id:ID): Project
  }
  type Query {
    proyectByName(nom_proyecto: String!): Project
  }
  type Query{
    leader(doc_lider:ID): User
  }
   
`;

const mutations = gql`
   type Mutation {
       addProject(input: AddProjectInput!): Project 
       
   }

`;

const inputs = gql `
  input AddProjectInput {
       nom_proyecto: String!
        obj_gen: String
        obj_esp: [String]
        presupuesto: Float
        fecha_inicio: String!
        fecha_fin: String!
        doc_lider: ID
        estado: ProjectStatus!
        fase: Phase
       }
`

export default[
  projectType,
  enums,
  queries,
  mutations,
  inputs,

];
