An implementation for the hl7 fhir specifications as defined here [HL7 FHIR](https://www.hl7.org/fhir/)

Server is currently implementing the following resources:
- [x] Patient
- [x] ValueSet
- [x] Practitioner
- [x] RelatedPerson
- [x] Encounter (Still in progress)

For more details check the [roadmap](https://github.com/shalkam/gql-fhir/wiki/Roadmap)
# Features
* Uses JSON Structure definitions [converter](https://github.com/shalkam/gql-fhir/blob/master/src/data/fhir/helpers/gql-schema/index.js) to create [GraphQL schema](https://github.com/shalkam/gql-fhir/blob/master/src/data/schema.graphql)
* Live editing inside electron
* Webpack for bundling both backend and frontend
* React.js for the frontend
* Graphql & MongoDB using mongoose on the backend

# Why Graphql?
Graphql has a very flexible type definition system, where HL7 FHIR specifications can fit right into.

![img](https://www.dropbox.com/s/ogkn39kmlzludze/Screenshot%20from%202016-12-29%2019-14-13.png?raw=1)

![img](https://www.dropbox.com/s/ostn0fzle7uvh0q/Screenshot%20from%202016-12-29%2019-12-38.png?raw=1)

![img](https://www.dropbox.com/s/cx58hxl3gguhwro/Screenshot%20from%202016-12-29%2019-11-35.png?raw=1)

![img](https://www.dropbox.com/s/r0eo7a041oxnsm1/Screenshot%20from%202016-12-29%2019-12-01.png?raw=1)

# Requirements
* nodejs and npm package manager
* MongoDB

# Installation
[<img src="https://asciinema.org/a/7aes2ndgveuozfnz5hn6bi5a0.png" height="400" width="500">](https://asciinema.org/a/7aes2ndgveuozfnz5hn6bi5a0?speed=3)

* Clone the repository: `git clone git@github.com:shalkam/gql-fhir.git your-project-name`
* Change directory`cd your-project-name`
* Install dependencies `npm install`

# Development
* make sure you have MongoDB running (you can configure db connection inside `config.js` file)
* Start app development
```shell
npm start
```
this will start server using [electron.js](http://electron.atom.io)
* To start the server only using [nodemon](https://nodemon.io/):
```shell
npm run dev-server
```
* By default the server port is `3000`
* You can browse to graphiql on `http://localhost:3000/graphiql`

# Build
To build the app run `npm run build`
