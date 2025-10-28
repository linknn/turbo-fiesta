const nodeNotes = `NOTE: if you accidentally run npm un dev instead of npm run dev, running npm install should fix the packages you just deleted
    -------- Node.js -------

to make app auto update each time you save install nodemon and run app with nodemon app.js

on npm init -y flag answer yes to all initialization questions
   
Create an express project on port 3001:
    const express = require("express");

const app = express();

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(Listening on port PORT); //PORT should be template literal
});


If you decide to use relational databases for your application, you'll need to choose an appropriate database management system (DBMS) and use its Node.js driver to connect it to your app.

We recommend using PostgreSQL (or Postgres), a free and open-source relational database management system. PostgreSQL is widely used by companies for their database needs.

Install the npm module called pg-promise first:

npm install pg-promise

morgan
  middleware logger for incoming requests

  `;

export default nodeNotes;
