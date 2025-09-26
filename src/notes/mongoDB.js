const mongoNotes = `Find all documents:
{}

Find by fields:
{ name: 'Elise', age: 38 }

Age > 30:
{ age: { $gt: 30 }}
 // >= : $gte
 // Find all ages greater than or equal to 30

Age < 30:
{ age: { $lt: 30 }}
 // >= : $lte
 // Find all ages less than or equal to 30`;
export default mongoNotes;
