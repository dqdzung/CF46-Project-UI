import TableCard from "../../components/TableCard/TableCard";
import { CardDeck, Container } from "react-bootstrap";
import "./home.style.css";

const CardList = (props) => {
	const numbers = props.numbers;

	const listItems = numbers.map((number) => (
		<TableCard key={number} number={number}></TableCard>
	));

	return <>{listItems}</>;
};

const Home = () => {
	const numbers = [1, 2, 3, 4, 5];

	return (
		<div id="container" className="p-5">
			<Container className="mt-3" fluid>
				<CardDeck>
					<CardList numbers={numbers} />
				</CardDeck>
			</Container>
		</div>
	);
};

export default Home;
