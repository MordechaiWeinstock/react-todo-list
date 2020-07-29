import React from 'react';
import './Todo.css';

export const Todo = props => {
  return (
    <div className="list-item">
      {props.content}
      <button className="delete" onClick={() => props.onDelete(props.id)} />
    </div>
  );
};

export default Todo;
