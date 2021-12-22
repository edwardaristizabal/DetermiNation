import { gql } from 'apollo-server';

const advanceType = gql `
#Advances - Gestion_avances
    type Advance {
     
        _id: ID
        id_proyecto: String!
        fecha_avance: String!
        descripcion: String!
        observaciones: String!
        project: Project
              
    }
` ; 

const queries = gql `
  #Query todos los usuarios
  type Query {
    allAdvances: [Advance]
  }
  type Query{
    project(id_proyecto:ID): Project
  }
  
  type Query {
    advanceByid(_id:ID): Advance
  }
     
`;

const mutations = gql`
   type Mutation {
    addAdvance(input: addAdvanceInput!): Advance
       
   }

`;

const inputs = gql `
  input addAdvanceInput {
            id_proyecto: ID
            fecha_avance: String!
            descripcion: String!
            observaciones: String!
       }
`;

export default[
  advanceType,
  queries,
  mutations,
  inputs,

];
