import ValidateType from '../helpers/validate.js'

export default ValidateType({
  name: 'id',
  description: 'Any combination of upper or lower case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'), '-' and '.', with a length limit of 64 characters. (This might be an integer, an un-prefixed OID, UUID or any other identifier pattern that meets these constraints.) regex: [A-Za-z0-9\-\.]{1,64}',
  type: 'STRING',
  regex: /[A-Za-z0-9\-\.]{1,64}/
});
