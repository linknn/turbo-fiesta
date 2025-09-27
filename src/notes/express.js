const expressNotes = `

router.get('/books', getBooks);
router.post('/books', createBook);
router.put('/books/:id', replaceBook);
router.patch('/books/:id', updateBookInfo);
router.delete('/books/:id', deleteBook);

imports are written as const and require the path
    const express = require('express');
`;

export default expressNotes;
