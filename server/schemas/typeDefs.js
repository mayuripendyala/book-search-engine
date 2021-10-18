const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link : String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
      _id: ID
      username: String!
      email: String!
      bookCount: Int
      savedBooks: [Book]
  }

 
  input SavedBookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link : String
  }

  type Query {
        me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: SavedBookInput )): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
