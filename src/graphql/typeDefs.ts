export const typeDefs = `#graphql
  type Query {
    currentUser: User
  }

  type Mutation {
    signUp(email: String!, password: String!): User
    signIn(email: String!, password: String!): String
  }

  type User {
    id: ID!
    email: String!
  }
`;
