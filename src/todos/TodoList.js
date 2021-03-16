import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';


const TodoList = ({ todos = [] }) => (
	<div className="list-wrapper">
		<NewTodoForm />
		{todos.map(todo => <TodoListItem todo={todo} />)};
	</div>
);

export default TodoList;