import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../context/notes/noteContext";

import React, { useContext } from "react";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex alignitems-center">
            <h5 className="card-title">{note.title}</h5>
            <FontAwesomeIcon
              className=" mx-2"
              icon={faTrashCan}
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Your note is deleted successfully", "success");
              }}
            />
            <FontAwesomeIcon
              className=" mx-2"
              icon={faEdit}
              onClick={() => {
                updateNote(note);
              }}
            />
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
