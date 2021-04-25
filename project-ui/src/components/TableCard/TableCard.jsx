import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

import table from "./table.png";

const TableCard = (props) => {
	const history = useHistory();
	// const [isBusy, setBusy] = useState(false);

	const number = props.number;

	// const toggleBusy = isBusy ? "busy" : "";
	const handleTableClick = () => {
		history.push(`/table/${number}`);
	};

	return (
		<Card className="card">
			<Card.Img
				variant="top"
				src={table}
				// className={toggleBusy}
				onClick={handleTableClick}
			/>
			<Card.Text>{number}</Card.Text>
		</Card>
	);
};

export default TableCard;
