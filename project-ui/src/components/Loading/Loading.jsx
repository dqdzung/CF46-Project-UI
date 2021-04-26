import { Spinner } from "react-bootstrap";
import "./loading.css";

function Loading() {
	return (
		<div className="loading-container">
			<Spinner animation="border" variant="primary" />
			<Spinner animation="border" variant="secondary" />
			<Spinner animation="border" variant="success" />
			<Spinner animation="border" variant="danger" />
			<Spinner animation="border" variant="warning" />
			<Spinner animation="border" variant="info" />
		</div>
	);
}

export default Loading;
