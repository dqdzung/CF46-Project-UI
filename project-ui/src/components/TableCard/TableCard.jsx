import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./tableCard.style.css";
import table from "./table.png";
import tableBusy from "./tableBusy.png";

const TableCard = (props) => {
	const history = useHistory();

	const number = props.number;

	const isBusy = props.busy ? tableBusy : table;

	const handleTableClick = () => {
		history.push(`/table/${number}`);
	};

	return (
		<Card className="card grow">
			<Card.Img variant="top" src={isBusy} onClick={handleTableClick} />
			<Card.Text className="mt-2">Table {number}</Card.Text>
		</Card>
	);
};

export default TableCard;
