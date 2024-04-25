import express from "express";
import { graphqlHTTP } from "express-graphql";
// import { makeExecutableSchema } from "graphql-tools";
import schema from "./schema/schema";
import mongoose from "mongoose";
import cors from "cors";

const app: express.Application = express();

const PORT = 3001;

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,//makeExecutableSchema({typeDefs, resolvers}),
        graphiql: true
    })
)

app.listen(PORT, () => console.log(`Node Graphql API listening on port ${PORT}!`))