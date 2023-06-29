import React from "react";

function ShowTodo(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6 mb-3">
					<h6>{props.Task}</h6>
				</div>
				<div className="col-6">
					<button
						onClick={() => {
							props.onSelect(props.id);
						}}
					>
						x
					</button>
				</div>
			</div>
		</div>
	);
}

export default ShowTodo;
