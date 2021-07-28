import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Redux/actions/Index";
import "./todo.css";

const Todo = () => {
	const [inputData, setInputData] = useState("");
	// To Get Data from redux store
	const list = useSelector((state) => state.TodoReducer.list);
	const dispatch = useDispatch();
	return (
		<>
			<div className='main-div'>
				<div className='child-div'>
					<figure>
						<figcaption>Add List Items</figcaption>
					</figure>

					<div className='addItems'>
						<input
							type='text'
							className=''
							placeholder='Add Items'
							value={inputData}
							onChange={(event) => {
								setInputData(event.target.value);
							}}
						/>
						<i
							className='fa fa-plus add-btn'
							onClick={() => dispatch(addTodo(inputData), setInputData(""))}
						></i>
					</div>

					<div className='showItems'>
						{list.map((e) => (
							<div className='eachItem' key={e.id}>
								<h3>{e.data}</h3>
								<div className='todo-btn'>
									<i
										className='far fa-trash-alt add-btn'
										title='Delete Item'
										onClick={() => dispatch(deleteTodo(e.id))}
									></i>
								</div>
							</div>
						))}
					</div>

					<div className='showItems'>
						<button
							className='btn effect04'
							data-sm-link-text='Remove All'
							onClick={() => dispatch(removeTodo())}
						>
							<span>Check List</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
