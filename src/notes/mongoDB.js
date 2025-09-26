const mongoNotes = `Find all documents:
{}

Find by fields:
{ name: 'Elise', age: 38 }

Age > 30:
{ age: { $gt: 30 }}

Age < 30:
{ age: { $lt: 30 }}`;
export default mongoNotes;
