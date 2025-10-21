const miscNotes = `res.status(404).send({message: 'User not found'});

json-server --watch db.json --id _id --port 3001
  adds json file and sets the port to 3001

--save-dev is used with npm install and adds new packages to devDependencies in the json
  these tools are just to assist the developer not for the client


in a vite project add --open to the dev script for npm run dev to suto open in browser

  // eslint-disable-next-line no-unused-vars
this comment tells eslint when a variable looks unused to just ignore it

url is more web stuff uri is more local

when usisng import file type ext is necessary (.js .txt .jsx etc) with require imports the ext is omitted


-----------Regular expressions----------
https://regex101.com/
The match() method of String values retrieves the result of matching this string against a regular expression
  JS match method used with regex
  could be used as a validation/search tool (like if a string is an email)
    joi // yup // zod alternative valdator tools can be found in npm
      check weekly downloads to see how relevant a package is


https://www.jwt.io/
debug webtokens

turning things into variables can help with debugging

magic numbers variables
  60*30*1000
  1000*60*30
  instead of just using 





  finish sp13 regular expressions and go back over ch07
`;
export default miscNotes;
