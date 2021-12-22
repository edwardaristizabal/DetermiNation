import { gql } from 'apollo-server';

const inscriptionType = gql `
#Project - proyectos
    type Incription { 
       _id: ID
       id_proyecto: ID
       id_estudiante:ID
        estado: Phase
        fecha_ingreso: String
        fecha_egreso:String
        }
` ; 

const enums = gql`          
   #Enum for status values - estado
   
   enum Phase{
       Activo
       Iniciando
       En desarrollo
       Terminado

   }
`;

const queries = gql `
  #Query todos los proyectos
  type Query {
    allInscriptions: [Incription]
  }
  
  type Query {
    inscriptionByid(_id:ID): Incription
  }
   
`;

const mutations = gql`
   type Mutation {
    addInscription(input: AddInscriptionInput!): Incription 
       
   }

`;

const inputs = gql `
  input AddInscriptionInput {
        id_proyecto: ID
        id_estudiante:ID
        estado: Phase
        fecha_ingreso: String
         fecha_egreso:String
      }
`

export default[
  inscriptionType,
  enums,
  queries,
  mutations,
  inputs,

];

