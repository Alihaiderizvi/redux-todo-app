// This reducer will hold the current state and action defination.

const initialState = {
	list: [],
};

const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const { id, data } = action.payload;
			return {
				...state,
				list: [
					...state.list,
					{
						id: id,
						data: data,
					},
				],
			};

		case "DELETE_TODO":

		default:
			return state;
	}
};

export default TodoReducer;
