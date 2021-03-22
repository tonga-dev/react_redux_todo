import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
	background: #fff;
	border-radius: 2px;
	margin-top: 8px;
	padding: 15px;
	position: relative;
	box-shadow: 0 2px 6px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
	border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
		? 'none'
		: '2px solid red'
	)};
`;

const ButtonsContainer = styled.div`
	position: absolute;
	right: 12px;
	bottom: 12px;
`;

const Button = styled.button`
	font-size: 12px;
	padding: 8px 12px;
	border: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
`;

const CompletedButton = styled(Button)`
	background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
	background-color: #ee2222;
	margin-left: 8px
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
	const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
	return (
		<Container createdAt={todo.createdAt}>
			<h3>{todo.text}</h3>
			<p>Created at:&nbsp; {(new Date(todo.createdAt)).toLocaleDateString()}</p>
			<ButtonsContainer>
				{todo.isCompleted ?
					null :
					<CompletedButton
						onClick={() => onCompletedPressed(todo.id)}
						className="btn completed-button">Completed</CompletedButton>}
				{' '}
				<RemoveButton
					onClick={() => onRemovePressed(todo.id)}
					className="btn remove-button">Delete</RemoveButton>
			</ButtonsContainer>
		</Container>
	);
}


export default TodoListItem;
