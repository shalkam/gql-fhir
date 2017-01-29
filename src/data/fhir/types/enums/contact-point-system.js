import {
  GraphQLEnumType
} from 'graphql';
export default new GraphQLEnumType({
  name: 'ContactPointSystem',
  description: 'Telecommunications form for contact point',
  values: {
    Phone: {
      value: 'phone',
      description: 'The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.',
    },
    Fax: {
      value: 'fax',
      description: 'The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.',
    },
    Email: {
      value: 'email',
      description: 'The value is an email address.'
    },
    Pager: {
      value: 'pager',
      description: 'The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.'
    },
    URL: {
      value: 'other',
      description: 'A contact that is not a phone, fax, or email address. The format of the value SHOULD be a URL. This is intended for various personal contacts including blogs, Twitter, Facebook, etc. Do not use for email addresses. If this is not a URL, then it will require human interpretation.'
    }
  }
})
