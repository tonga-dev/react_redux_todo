import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from './selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';

const ListWrapper = styled.div`
	max-width: 700px;
	margin: auto;
	text-align: justify;
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);
	const loadingMessage = <div>Loading ToDos...</div>;
	const content = (
		<ListWrapper>
			<NewTodoForm />
			<h3>Incomplete: </h3>

			{incompleteTodos.map(todo => <TodoListItem
				todo={todo}
				onCompletedPressed={onCompletedPressed}
				onRemovePressed={onRemovePressed}
			/>)}
			<h3>Completed: </h3>
			{completedTodos.map(todo => <TodoListItem
				todo={todo}
				onCompletedPressed={onCompletedPressed}
				onRemovePressed={onRemovePressed}
			/>)}
		</ListWrapper>
	);
	return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
	isLoading: getTodosLoading(state),
	completedTodos: getCompletedTodos(state),
	incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
	onRemovePressed: id => dispatch(removeTodoRequest(id)),
	onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
