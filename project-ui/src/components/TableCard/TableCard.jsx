import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./tableCard.style.css";
import table from "./table.png";

const TableCard = (props) => {
	const history = useHistory();

	const number = props.number;

	const isBusy = props.busy ? "busy" : "";

	const handleTableClick = () => {
		history.push(`/table/${number}`);
	};

	return (
		<Card className="card">
			<Card.Img
				className={isBusy}
				variant="top"
				src={table}
				onClick={handleTableClick}
			/>
			<Card.Text>{number}</Card.Text>
		</Card>
	);
};

export default TableCard;
