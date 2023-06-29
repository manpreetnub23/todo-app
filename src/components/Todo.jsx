import React, { useState } from "react";
import "./Todo.css";
import ShowTodo from "./ShowTodo";

function Todo() {
	const [Task, setTask] = useState("");
	const [Data, setData] = useState([]);

	const onChangeHandler = (e) => {
		setTask(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const newData = Task;
		setData([...Data, newData]);
		setTask("");
	};
	const deleteItem = (a) => {
		const showData = Data.filter((curElem, index) => {
			return index !== a;
		});
		setData(showData);
	};
	return (
		<div>
			<div className="container">
				<div className="row justify-content-center align-items-center main-row">
					<div className="col shadow main-col bg-white">
						<div className="row bg-danger text-white">
							<div className="col p-2">
								<h4 className="text-center">Todo App</h4>
							</div>
						</div>
						<form onSubmit={submitHandler}>
							<div className="row justify-content-between text-white p-2">
								<div className="form-group flex-fill mb-2 col-9">
									<input
										type="text"
										className="form-control rounded-pill"
										id="todo-input"
										value={Task}
										onChange={onChangeHandler}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-dark rounded-pill mb-2 ml-2 col-3"
								>
									Add Task
								</button>
							</div>
						</form>
						{Data.map((value, index) => (
							<ShowTodo
								key={index}
								id={index}
								Task={value}
								onSelect={deleteItem}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Todo;
