import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } from "graphql"

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve (parent, args) {
                return 
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQuery
    // mutation: Mutat
})
export default schema