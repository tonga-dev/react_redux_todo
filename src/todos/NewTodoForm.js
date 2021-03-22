import React, { useState } from 'react';
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.div`
	border-radius: 2px;
	padding: 10px;
	text-align: center;
	box-shadow: 0 2px 6px grey;
`;

const TodoInput = styled.input`
	font-size: 12px;
	padding: 8px;
	border: none;
	border-bottom: 2px solid #ddd;
	border-radius: 2px;
	width: 80%;
	outline: none;
`;

const NewTodoButton = styled.button`
	font-size: 12px;
	padding: 8px;
	border: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	margin-left: 8px;
	width: 15%;
	background-color: #22ee22;	
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {

	const [inputValue, setInputValue] = useState('');

	return (
		<FormContainer>
			<TodoInput
				className="add-todo-input"
				type="text"
				value={inputValue}
				placeholder="Add Your ToDo"
				onChange={e => setInputValue(e.target.value)}
			/>
			{' '}
			<NewTodoButton
				className="add-todo-button"
				onClick={() => {
					const isDuplicateText = todos.some(todo => todo.text === inputValue);
					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue('');
					}
				}}
			>Add</NewTodoButton>
		</FormContainer>
	)
};

const mapStateToProps = state => ({
	todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
	onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
