import converter from '../../helpers/gql-schema/index.js';
import annotation from './data/annotation.json';
import attachment from './data/attachment.json';
import address from './data/address.json';
import backboneElement from './abstract/backbone-element.json';
import coding from './data/coding.json';
import codeableconcept from './data/codeable-concept.json';
import contactPoint from './data/contact-point.json';
import domainResource from './abstract/domain-resource.json';
import element from './abstract/element.json';
import elementDefinition from './data/element-definition.json';
import extension from './abstract/extension.json';
import humanName from './data/human-name.json';
import identifier from './data/identifier.json';
import meta from './data/meta.json';
import narrative from './data/narrative.json';
import period from './data/period.json';
import quantity from './data/quantity.json';
import range from './data/range.json';
import ratio from './data/ratio.json';
import sampledData from './data/sampled-data.json';
import signature from './data/signature.json';
import timing from './data/timing.json';
import reference from './data/reference.json';
import resource from './abstract/resource.json';

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

export {
  Reference,
  Annotation,
  Address,
  Attachment,
  Coding,
  CodeableConcept,
  ContactPoint,
  BackboneElement,
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
  DomainResource,
  Resource,
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
