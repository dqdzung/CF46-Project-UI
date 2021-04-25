import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, CardDeck, Container } from "react-bootstrap";
import axios from "axios";
import ItemList from "../../components/ItemList/ItemList";
import BillItemList from "../../components/BillItemList/BillItemList";

const Table = () => {
	const [items, setItems] = useState([]);
	const [billItems, setBillItems] = useState([]);

	const fetchItems = async () => {
		try {
			const res = await axios({
				url: "http://localhost:8080/api/item",
				method: "GET",
			});

			if (res.data.success) {
				setItems(res.data.data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchItems();
	}, []);

	const handleClick = (item) => {
		if (billItems.some((elem) => elem.id === item._id)) {
			return console.log("matched");
		}
		setBillItems((prevState) => {
			return [
				...prevState,
				{ id: item._id, name: item.name, price: item.price, quantity: 1 },
			];
		});
	};

	const removeItem = (i) => {
		setBillItems((currentItems) =>
			currentItems.filter((item, index) => index !== i)
		);
	};

	const handleChange = (id, value) => {
		const updated = billItems.map((elem) => {
			if (elem.id === id) {
				return { ...elem, quantity: Number(value) };
			} else return elem;
		});
		setBillItems(updated);
	};

	const handleSubmitOrder = (e) => {
		console.log(billItems);
	};

	const { id } = useParams();
	return (
		<Container className="mt-3" fluid>
			<Row>
				<Col xs={6} md={8}>
					<h2>Table {id}</h2>
					<CardDeck>
						<ItemList items={items} onClick={handleClick}></ItemList>
					</CardDeck>
				</Col>
				<Col xs={6} md={4}>
					<h2>Bill</h2>
					<BillItemList
						items={billItems}
						onClick={removeItem}
						onChange={handleChange}
						onClickOrder={handleSubmitOrder}
					></BillItemList>
				</Col>
			</Row>
		</Container>
	);
};

export default Table;
