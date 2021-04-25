import { Card, Badge } from "react-bootstrap";
import "./itemCard.style.css";

const ItemCard = (props) => {
	const { name, price, imgUrl } = props.item;

	return (
		<Card className="item-card" onClick={props.onClick}>
			<div className="badge-container">
				<h4>
					<Badge className="badge" variant="success">
						{price}k VND
					</Badge>
				</h4>
			</div>
			<Card.Img variant="top" src={imgUrl} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default ItemCard;
