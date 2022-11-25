const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const axios = require("axios");
const bookURL = process.env.BOOK_URL;
const userURL = process.env.USER_URL;

const typeDefs = `#graphql
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
	# This "Book" type defines the queryable fields for every book in our data source.
	type Book {
		id: ID
		title: String
		description: String
	}

  type User {
    id: ID
    username: String
    email: String
  }

	type Query {
		books: [Book]
    users: [User]
	}
`;

const resolvers = {
	Query: {
		books: async (_) => {
			try {
				const { data: books } = await axios.get(
					bookURL + '/books'
				);
				return books;
			} catch (error) {
				console.log("🚀 ~ file: app.js ~ line 88 ~ products: ~ error", error);
				throw error;
			}
		},
		users: async (_) => {
			try {
				const { data: users } = await axios.get(
					userURL + '/users'
				);
				return users;
			} catch (error) {
				console.log("🚀 ~ file: app.js ~ line 88 ~ products: ~ error", error);
				throw error;
			}
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers, instrospection: true });

startStandaloneServer(server, {
  listen: { port: process.env.PORT },
})
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch(err => {
    console.log(err)
  })
