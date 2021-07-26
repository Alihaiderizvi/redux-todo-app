// All Of the Actions that your app would ne performing should be mentioned in this file.

export const addTodo = () => {
	return {
		type: "ADD_TODO",
	};
};
export const deleteTodo = () => {
	return {
		type: "DELETE_TODO",
	};
};
export const removeTodo = () => {
	return {
		type: "REMOVE_TODO",
	};
};
