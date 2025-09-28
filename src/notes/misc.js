const miscNotes = `res.status(404).send({message: 'User not found'});

json-server --watch db.json --id _id --port 3001


If you decide to use relational databases for your application, you'll need to choose an appropriate database management system (DBMS) and use its Node.js driver to connect it to your app.

We recommend using PostgreSQL (or Postgres), a free and open-source relational database management system. PostgreSQL is widely used by companies for their database needs.

Install the npm module called pg-promise first:

npm install pg-promise

`;
export default miscNotes;
