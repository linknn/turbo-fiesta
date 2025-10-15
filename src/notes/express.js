const expressNotes = `NOTE: if you accidentally run npm un dev instead of npm run dev, running npm install should fix the packages you just deleted

router.get('/books', getBooks);
router.post('/books', createBook);
router.put('/books/:id', replaceBook);
router.patch('/books/:id', updateBookInfo);
router.delete('/books/:id', deleteBook);

post -> create
get -> retrieve ---------- (get one has path but get all does not)
put -> full update        | These have path param id
patch -> partial update   |
delete -> delete ----------

imports are written as const and require the path
    const express = require('express');
if you want to use import instead of require -- modify the json file

//converts JSON into Javascript objects
app.use(express.json());
  If youre request comes out undefined its probably because you dont have this

express doesn't work with return 
  express is a chain it sends or it moves on

Middleware is software that acts as a "middleman", enabling different applications, systems, and components to communicate and share data by providing a translation or communication layer between them. Can be described as software glue.


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


`;

export default expressNotes;
