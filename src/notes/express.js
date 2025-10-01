const expressNotes = `

NOTE: if you accidentally run npm un dev instead of npm run dev, running npm install should fix the packages you just deleted

router.get('/books', getBooks);
router.post('/books', createBook);
router.put('/books/:id', replaceBook);
router.patch('/books/:id', updateBookInfo);
router.delete('/books/:id', deleteBook);

imports are written as const and require the path
    const express = require('express');

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
