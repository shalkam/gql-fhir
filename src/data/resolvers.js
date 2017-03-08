import patient from './fhir/resources/patient/resolvers.js';
import valueSet from './fhir/resources/value-set/resolvers.js';
import practitioner from './fhir/resources/practitioner/resolvers.js';
import relatedPerson from './fhir/resources/related-person/resolvers.js';
import encounter from './fhir/resources/encounter/resolvers.js';
import episodeOfCare from './fhir/resources/episode-of-care/resolvers.js';
import bundle from './fhir/resources/bundle/resolvers.js';
import searchParameter from './fhir/resources/search-parameter/resolvers.js';
import user from './common/acl/user/resolvers.js';
import {
  // GraphQLEmail,
  GraphQLURL,
  // GraphQLLimitedString,
  // GraphQLPassword,
  // GraphQLUUID
  GraphQLDateTime
} from 'graphql-custom-types';
import instant from './fhir/types/primitive/instant.js';
import date from './fhir/types/primitive/date.js';
import positiveInt from './fhir/types/primitive/positive-integer.js';
import unsignedInt from './fhir/types/primitive/unsigned-integer.js';

const rootResolvers = {
  patient: () => true,
  valueSet: () => true,
  practitioner: () => true,
  relatedPerson: () => true,
  encounter: () => true,
  episodeOfCare: () => true,
  bundle: () => true,
  searchParameter: () => true
};
export default {
  unsignedInt,
  positiveInt,
  date,
  instant,
  DateTime: GraphQLDateTime,
  ...patient,
  ...valueSet,
  ...practitioner,
  ...relatedPerson,
  ...encounter,
  ...episodeOfCare,
  ...bundle,
  ...searchParameter,
  Query: rootResolvers,
  Mutation: { ...user, ...rootResolvers }
};
