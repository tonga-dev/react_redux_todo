import React from 'react';

const TodoListItem = () => (
	<div className="todo-item-container">
		<h3>{todo.text}</h3>
		<div>
			<button>Done</button>
			<button>Delete</button>
		</div>
	</div>
);

export default TodoListItem;