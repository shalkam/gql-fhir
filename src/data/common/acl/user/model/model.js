import mongoose from 'mongoose';
import passportGraphqlMongoose from 'passport-graphql-mongoose';
var user = new mongoose.Schema({ _id: { type: String } });

user.plugin(passportGraphqlMongoose);
export default mongoose.model('user', user);
