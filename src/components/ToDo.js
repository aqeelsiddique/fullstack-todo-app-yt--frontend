import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';


const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
          <p>{text}</p>
          <div className="actions">
            <button onClick={updateMode}>
              <FontAwesomeIcon icon={faEdit} size="2x" /> 
            </button>
            <button onClick={deleteToDo} className="delete">
              <FontAwesomeIcon icon={faTrashAlt} size="2x" /> 
            </button>
          </div>
        </div>
      );
}

export default ToDo