const authNotes = `
Identification: some kind of value given to something to distinguish it
Authentication: checking that the value and what it was given to are accurate
Authorization: giving permissions to that value once authenticated

Saying your name is identification
Showing your id is authentication of who you are
Based on that authentication ( showing id ) authorization is given because of the information on it
    Or like when you sign up for socials and confirm your email, authorization now lets you edit your profile


id: place an order with phone/name/email
authen:
author: show id to get package, use qr to pickup; cop asks for id


controller for user search 
module.exports.login = (req, res) => {
    const {email, password} = req.body;
    
    User.findOne({ email })
    .then((user) => {
        if (!user) {
             // user with given email not found
             // fire the catch block with an error
        return Promise.reject(new Error('Incorrect password or email'));
        }
        // user found
         // comparing submitted pass and hash from db
     return bcrypt.compare(password, user.password);
     })
     .then((matched) => {
        if (!matched) {
             //the hashes didn't match
        return Promise.reject(new Error('Incorrect password or email'))
        }
             // successful authen
        res.send({res.send({ message: 'Everything good!'});
        })
     .catch((err) => {
            // return an authen error
        res
        .status(401)
        .send({message: err.message});
    });
};

JWT (Json Web Token)
const jwt = require("jsonwebtoken");
    header - meta info about toke
    payload - holds the data
    signature - info in token can't be changed

const token = jwt.sign(
  { _id: user._id },
  'some-secret-key',
  { expiresIn: 3600 } // this token will expire an hour after creation
);

expiresIn: '120ms' // 120 miliseconds
expiresIn: '15m' // 15 minutes
expiresIn: '2h' // 2 hours
expiresIn: '7d' // 7 days

`;
export default authNotes;
