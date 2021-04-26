import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./billItem.style.css";

const Item = ({ item, onClick, onValueChange }) => {
	const handleChange = (e) => {
		const value = e.target.value;
		onValueChange(value);
	};
	return (
		<Row item={item} className="p-2">
			<Col md={5}>{item.name}</Col>
			<Col md={2}>
				<input
					className="quantity"
					type="number"
					min="1"
					value={item.quantity}
					onChange={handleChange}
				/>
			</Col>
			<Col md={3}>x {item.price}k</Col>
			<Col md={2} className="delete" onClick={onClick}>
				X
			</Col>
		</Row>
	);
};

const BillItemList = (props) => {
	const items = props.items;

	let total;
	if (items.length > 0) {
		const totalArr = items.map((elem) => elem.price * elem.quantity);
		total = totalArr.reduce((total, amount) => total + amount);
	}

	const listItems = items.map((item, index) => (
		<Item
			key={item.id}
			item={item}
			onClick={() => {
				props.onClick(index);
			}}
			onValueChange={(value) => props.onChange(item.id, value)}
		/>
	));

	return (
		<Form>
			{listItems}
			{items.length > 0 && (
				<>
					<Row className="total-wrapper">
						<Col>Total:</Col>
						<Col className="text-right">{total}</Col>
					</Row>
					<div className="button-container d-flex justify-content-center mt-4">
						<Button
							className="m-1"
							onClick={() => {
								props.onClickOrder(total);
							}}
						>
							Order
						</Button>
						<Button variant="success" className="m-1">
							Check Out
						</Button>
					</div>
				</>
			)}
		</Form>
	);
};

export default BillItemList;
