const miscNotes = `res.status(404).send({message: 'User not found'});

json-server --watch db.json --id _id --port 3001
  adds json file and sets the port to 3001


If you decide to use relational databases for your application, you'll need to choose an appropriate database management system (DBMS) and use its Node.js driver to connect it to your app.

We recommend using PostgreSQL (or Postgres), a free and open-source relational database management system. PostgreSQL is widely used by companies for their database needs.

Install the npm module called pg-promise first:

npm install pg-promise

in a vite project add --open to the dev script for npm run dev to suto open in browser

  // eslint-disable-next-line no-unused-vars
this comment tells eslint when a variable looks unused to just ignore it

Middleware is software that acts as a "middleman", enabling different applications, systems, and components to communicate and share data by providing a translation or communication layer between them. Can be described as software glue.

`;
export default miscNotes;
