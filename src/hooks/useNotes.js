import cssNotes from "../notes/css";
import jsNotes from "../notes/javascript";
import expressNotes from "../notes/express";
import databaseNotes from "../notes/database";
import miscNotes from "../notes/misc";
import bemNotes from "../notes/bem";
import bashNotes from "../notes/git-bash";
import errorNotes from "../notes/error-handling";
import featureNotes from "../notes/new-features";
import authNotes from "../notes/id-auth";

export function useNotes() {
  const groupedNotes = {
    Frontend: {
      CSS: cssNotes,
      BEM: bemNotes,
      JavaScript: jsNotes,
    },
    Backend: {
      "Error Handling": errorNotes,
      Database: databaseNotes,
      "Id and Auth": authNotes,
      "Node & Express": expressNotes,
    },
    Miscellaneous: {
      "Git Bash": bashNotes,
      Misc: miscNotes,
    },
  };

  const flattenNotes = (grouped) =>
    Object.values(grouped).reduce((acc, group) => ({ ...acc, ...group }), {});

  const notes = {
    ...flattenNotes(groupedNotes),
    ToDo: featureNotes,
  };
  return { groupedNotes, notes };
}
