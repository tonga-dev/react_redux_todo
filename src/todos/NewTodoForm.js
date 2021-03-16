import React, { useState } from 'react';


const NewTodoForm = () => {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className="new-todo-form">
			<input
				className="new-todo-input"
				type="text"
				placeholder="Add Your Todo"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button className="new-todo-button">New Todo</button>
		</div>
	)
}

export default NewTodoForm;