import { Card, Badge, Row, Col } from "react-bootstrap";
import "./itemCard.style.css";

const ItemCard = (props) => {
	const { name, price, imgUrl } = props.item;

	return (
		<Card className="item-card grow" onClick={props.onClick}>
			<div className="badge-container">
				<h4>
					<Badge className="badge" variant="success">
						{price}k VND
					</Badge>
				</h4>
			</div>
			<div className="image-container">
				<Card.Img variant="top" src={imgUrl} />
			</div>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default ItemCard;
