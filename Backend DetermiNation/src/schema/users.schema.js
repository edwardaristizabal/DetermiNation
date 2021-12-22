import { gql } from 'apollo-server';
const userType = gql `
#Users - usuarios
    type User {
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        contrasena: String!
        rol: Rol!
        estado: Status!
       
    }
` ;

const enums = gql`          
   #Enum for status values - estado
   enum Rol{
      Estudiante
      Lider
      Administrador

    }
     enum Status{
      Pendiente
      Autorizado
      No_autorizado
     }
  
`;

const queries = gql `
  #Query todos los usuarios
  type Query {
    allUsers: [User]
  }
  
  type Query {
    userById(_id:ID): User
  }

  type Query {
    user: User!
  }

  type Query {
    userByCorreo(correo: String!): User
  }
   
`;

const mutations = gql`
   type Mutation {
      register(input: RegisterInput!): User 
       
   }

   type Mutation {
      login(correo: String!, contrasena: String!): String!
   }
`;

const inputs = gql `
  input RegisterInput {
        correo: String!
        identificacion: String!
        nombre: String!
        contrasena: String!
        rol: Rol!
      
       }
`;

export default[
  userType,
  enums,
  queries,
  mutations,
  inputs,

];
