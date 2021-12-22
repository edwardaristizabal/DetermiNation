const {gql} = require('apollo-server');

type proyectos {
    id: ID!,
    title: String!,
    year: Int,
    author: String!,
}