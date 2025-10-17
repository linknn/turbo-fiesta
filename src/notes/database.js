const databaseNotes = `Find all documents:
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
 // Find all ages less than or equal to 30
 
 mongodb://127.0.0.1:27017 is the default address of the MongoDB server
    It's run on the local loopback address 127.0.0.1 on port 27017. The second part is mydb, which is the name of our database
    mongoose.connect('mongodb://127.0.0.1:27017/mydb');


Relational Databases = Organized Toy Boxes
Imagine you have perfectly organized toy boxes with labels:

Box 1: All your cars (each car has a number, color, and size)
Box 2: All your dolls (each doll has a name, hair color, and outfit)
Box 3: All your blocks (each block has a shape, color, and material)
Rules:
- Every car MUST have a number, color, and size (no exceptions!)
- All cars go in the car box, all dolls in the doll box
- You have a list that shows which toys belong to which kid

Non-Relational Databases = Big Toy Chest
Now imagine you have one giant toy chest where you throw everything:

Some cars might have stickers, some don't
Some dolls have shoes, others are barefoot
You might have a toy that's part car, part robot
Some toys don't fit any category!
No strict rules:
- Toys can be different from each other
- You can add new types of toys anytime
- Everything just goes in the big chest

--------Mongoose ----------

const userSchema = new mongoose.Schema({
  name: { // every user has a name field, the requirements for which are described below:
    type: String, // the name is a string
    required: true, // every user has a name, so it's a required field
    minlength: 2, // the minimum length of the name is 2 characters
    maxlength: 30, // the maximum length is 30 characters
  },
  pronouns: {
    type: String, // the pronouns are a string
    enum: ['they/them', 'she/her', 'he/him', 'other pronouns'] // every user can choose their pronouns
        //enum type adds a validator to the field which checks whether it's strictly equal to one of the unique values of a specific array.
  },
  age: { // every user has an age field
        type: Number, // the age type is a number
        required: true, // the user has to specify their age
        validate: { // describe the validate feature
            validator(v) { // validator is a data validation feature. v is the age value
                return v >= 18; // if the age is less than 18, it will return false
            },
            message: 'Sorry. You have to be at least 18 years old', // when the validator returns false, this message will be displayed
        }
    },
  about: String, // type: String
});


schema -> Attributes (data type/structure)
  Car
    plate (string)
    year  (number)
    model (string)
    color (string)
model -> floorplan / blueprint
document -> an instance of a model



Installation
1. nodemon - used for hot reload (update package.json scripts)
2. express - library for creating APIs
3. cors - avoid communicaiton issues with diff domains
4. db connector - mongo connector (mongoose)
  npm i mongoose

Coding
1. add type: "module" into package.json (ES6 - import export)
    ^^This step makes it so you use import instead of require
2. import express
3. create express app
4. call listen function
5. important: add json middleware!
6. add cors
7. add database connection
8. add error middleware
9. add routes/endpoints/paths (after the middlewares in the code)




`;
export default databaseNotes;
