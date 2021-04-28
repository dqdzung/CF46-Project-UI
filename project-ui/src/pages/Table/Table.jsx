import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, CardDeck, Container } from "react-bootstrap";
import axios from "axios";
import ItemList from "../../components/ItemList/ItemList";
import BillItemList from "../../components/BillItemList/BillItemList";
import Loading from "../../components/Loading/Loading";
import "./table.style.css";

const Table = () => {
	const [items, setItems] = useState([]);
	const [billItems, setBillItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const { id } = useParams();
	const tableId = id;

	const fetchItems = async () => {
		try {
			const res = await axios({
				url: `${process.env.REACT_APP_BASE_URL}/api/item`,
				method: "GET",
			});

			if (res.data.success) {
				setItems(res.data.data);
				setLoading(false);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const fetchTableBill = async () => {
		try {
			const res = await axios({
				url: `${process.env.REACT_APP_BASE_URL}/api/bill/${tableId}`,
				method: "GET",
			});

			if (res.data.success) {
				const { items } = res.data.data;
				setBillItems(items);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchItems();
		fetchTableBill();
	}, []);

	const handleAddBill = (item) => {
		if (billItems.some((elem) => elem.id === item._id)) {
			return console.log(billItems);
		}
		setBillItems((prevState) => {
			const newBillItem = {
				id: item._id,
				name: item.name,
				price: item.price,
				quantity: 1,
			};

			return [...prevState, newBillItem];
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

	const handleSubmitOrder = async (total) => {
		console.log(billItems, total, tableId);

		try {
			const res = await axios({
				url: `${process.env.REACT_APP_BASE_URL}/api/bill`,
				method: "POST",
				data: {
					items: billItems,
					total: total,
					table: tableId,
				},
			});

			if (res.data.success) {
				alert("Order submitted!!");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container fluid>
			<Row className="p-2">
				<Col className="table-wrapper" xs={6} md={8}>
					<h2>Table {tableId}</h2>
					{loading ? (
						<Loading></Loading>
					) : (
						<CardDeck>
							<ItemList items={items} onClick={handleAddBill}></ItemList>
						</CardDeck>
					)}
				</Col>
				<Col className="table-wrapper" xs={6} md={4}>
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
