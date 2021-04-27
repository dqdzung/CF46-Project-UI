import { useState, useEffect } from "react";
import axios from "axios";
import TableCard from "../../components/TableCard/TableCard";
import { CardDeck, Container } from "react-bootstrap";
import "./home.style.css";

const CardList = (props) => {
	const [bills, setBills] = useState([]);

	const fetchBills = async () => {
		try {
			const res = await axios({
				url: `http://localhost:8080/api/bill`,
				method: "GET",
			});

			if (res.data.success) {
				setBills(res.data.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchBills();
	}, []);

	const numbers = props.numbers;

	const listItems = numbers.map((number) => {
		if (bills) {
			const tableArr = bills.map((elem) => elem.table);
			if (tableArr.includes(number)) {
				return <TableCard key={number} number={number} busy={true}></TableCard>;
			}
		}
		return <TableCard key={number} number={number}></TableCard>;
	});

	return <>{listItems}</>;
};

const Home = () => {
	const numbers = [1, 2, 3, 4, 5];

	return (
		<div id="container" className="p-5 ">
			<Container className="mt-3 d-flex justify-content-center" fluid>
				<CardDeck>
					<CardList numbers={numbers} />
				</CardDeck>
			</Container>
		</div>
	);
};

export default Home;
