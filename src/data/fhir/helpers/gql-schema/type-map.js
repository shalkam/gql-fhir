import converter from '../../helpers/gql-schema/index.js';
import { GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt, GraphQLFloat } from 'graphql';
import {
  // GraphQLEmail,
  GraphQLURL,
  // GraphQLLimitedString,
  // GraphQLPassword,
  // GraphQLUUID
  GraphQLDateTime
} from 'graphql-custom-types';
import instant from './types/primitive/instant.js';
import date from './types/primitive/date.js';
import positiveInt from './types/primitive/positive-integer.js';
import unsignedInt from './types/primitive/unsigned-integer.js';
import annotation from '../../profiles/base/data/annotation.json';
import attachment from '../../profiles/base/data/attachment.json';
import address from '../../profiles/base/data/address.json';
import backboneElement from '../../profiles/base/abstract/backbone-element.json';
import coding from '../../profiles/base/data/coding.json';
import codeableconcept from '../../profiles/base/data/codeable-concept.json';
import contactPoint from '../../profiles/base/data/contact-point.json';
import domainResource from '../../profiles/base/abstract/domain-resource.json';
import element from '../../profiles/base/abstract/element.json';
import elementDefinition from '../../profiles/base/data/element-definition.json';
import extension from '../../profiles/base/abstract/extension.json';
import humanName from '../../profiles/base/data/human-name.json';
import identifier from '../../profiles/base/data/identifier.json';
import meta from '../../profiles/base/data/meta.json';
import narrative from '../../profiles/base/data/narrative.json';
import period from '../../profiles/base/data/period.json';
import quantity from '../../profiles/base/data/quantity.json';
import range from '../../profiles/base/data/range.json';
import ratio from '../../profiles/base/data/ratio.json';
import sampledData from '../../profiles/base/data/sampled-data.json';
import signature from '../../profiles/base/data/signature.json';
import timing from '../../profiles/base/data/timing.json';
import reference from '../../profiles/base/data/reference.json';
import resource from '../../profiles/base/abstract/resource.json';

const Annotation = converter(annotation);
const Address = converter(address);
const Attachment = converter(attachment);
const Coding = converter(coding);
const CodeableConcept = converter(codeableconcept);
const ContactPoint = converter(contactPoint);
const BackboneElement = converter(backboneElement);
const DomainResource = converter(domainResource);
const Element = converter(element);
const ElementDefinition = converter(elementDefinition);
const Extension = converter(extension);
const HumanName = converter(humanName);
const Identifier = converter(identifier);
const Meta = converter(meta);
const Narrative = converter(narrative);
const Period = converter(period);
const Quantity = converter(quantity);
const Range = converter(range);
const Ratio = converter(ratio);
const SampledData = converter(sampledData);
const Signature = converter(signature);
const Timing = converter(timing);
const Reference = converter(reference);
const Resource = converter(resource);

const AnnotationInput = converter(annotation, 'input');
const AddressInput = converter(address, 'input');
const AttachmentInput = converter(attachment, 'input');
const CodingInput = converter(coding, 'input');
const CodeableConceptInput = converter(codeableconcept, 'input');
const ContactPointInput = converter(contactPoint, 'input');
const BackboneElementInput = converter(backboneElement, 'input');
const DomainResourceInput = converter(domainResource, 'input');
const ElementInput = converter(element, 'input');
const ElementDefinitionInput = converter(elementDefinition, 'input');
const ExtensionInput = converter(extension, 'input');
const HumanNameInput = converter(humanName, 'input');
const IdentifierInput = converter(identifier, 'input');
const MetaInput = converter(meta, 'input');
const NarrativeInput = converter(narrative, 'input');
const PeriodInput = converter(period, 'input');
const QuantityInput = converter(quantity, 'input');
const RangeInput = converter(range, 'input');
const RatioInput = converter(ratio, 'input');
const SampledDataInput = converter(sampledData, 'input');
const SignatureInput = converter(signature, 'input');
const TimingInput = converter(timing, 'input');
const ReferenceInput = converter(reference, 'input');
const ResourceInput = converter(resource, 'input');

export default {
  uri: GraphQLString,
  string: GraphQLString,
  code: GraphQLString,
  base64Binary: GraphQLString,
  markdown: GraphQLString,
  time: GraphQLString,
  oid: GraphQLString,
  id: GraphQLID,
  integer: GraphQLInt,
  decimal: GraphQLFloat,
  instant,
  date,
  positiveInt,
  unsignedInt,
  boolean: GraphQLBoolean,
  dateTime: GraphQLDateTime,
  xhtml: GraphQLString,
  Annotation,
  Address,
  Attachment,
  Coding,
  CodeableConcept,
  ContactPoint,
  DomainResource,
  Element,
  ElementDefinition,
  Extension,
  HumanName,
  Identifier,
  Meta,
  Narrative,
  Period,
  Quantity,
  Range,
  Ratio,
  SampledData,
  Signature,
  Timing,
  Resource,
  Reference,
  ReferenceInput,
  AnnotationInput,
  AddressInput,
  AttachmentInput,
  CodingInput,
  CodeableConceptInput,
  ContactPointInput,
  BackboneElementInput,
  ElementInput,
  ElementDefinitionInput,
  ExtensionInput,
  HumanNameInput,
  IdentifierInput,
  MetaInput,
  NarrativeInput,
  PeriodInput,
  QuantityInput,
  RangeInput,
  RatioInput,
  SampledDataInput,
  SignatureInput,
  TimingInput,
  DomainResourceInput,
  ResourceInput
};
