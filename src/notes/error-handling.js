const errorNotes = `utiles/errors.js

status codes helpers

//400 Bad Request is for client-side input errors (e.g., missing required fields, invalid formats)
const BAD_REQUEST = {
  code: 400,
  message: "Invalid request",
};

// 404 Not Found is for missing resources, not invalid inputs
const NOT_FOUND = {
  code: 404,
  message: "Resource not found",
};

const INTERNAL_SERVER_ERROR = {
  code: 500,
  message: "Something went wrong on the server",
};

function orFailWithNotFound(resourceName = "Resource") {
  return () => {
    const error = new Error('$[resourceName] not found'); 
            //use backticks and curly braces
    error.name = "DocumentNotFoundError";
    error.statusCode = NOT_FOUND;
    throw error;
  };
}

module.exports = {
  BAD_REQUEST,
  NOT_FOUND, 
  INTERNAL_SERVER_ERROR,
  orFailWithNotFound,
};

Then import to your controller file

get returns and array so no need for orFail
create either creates or throws a validationerror so no orfail there either
orFail applies when you're supposed to return a single document like:
findById
findByIdAndUpdate
findByIdAndDelete
findOne

    .orFail(orFailWithNotFound("Item"))
    .then((item) => res.send(item))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: BAD_REQUEST.message });
      }
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send({ message: INTERNAL_SERVER_ERROR.message });
    });
};
`;
export default errorNotes;
