// This reducer will hold the current state and action defination.

const initialState = {
	list: [],
};

const TodoReducer = (state = { initialState }, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const { id, data } = action.payload;
			return {
				...state,
				data: [
					...state.list,
					{
						id: id,
						data: data,
					},
				],
			};
		default:
			break;
	}
};

export default TodoReducer;
