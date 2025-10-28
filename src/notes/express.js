const expressNotes = `
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



`;

export default expressNotes;
