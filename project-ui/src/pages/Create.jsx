import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import "./create.style.css";

import axios from "axios";

import MyNav from "../components/Navbar/MyNav";

const Create = () => {
	const [form, setForm] = useState({ name: "", price: "", type: "food" });
	const [images, setImages] = useState([]);

	const isHidden = images.length > 0;
	const toggleHiddenClass = isHidden ? "hidden" : "";

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios({
				url: "http://localhost:8080/api/item",
				method: "POST",
				data: {
					name: form.name,
					price: form.price,
					type: form.type,
				},
			});

			if (res.data.success) {
				alert("Item added!!");
				setForm({ name: "", price: "" });
			}
		} catch (err) {
			console.log(err);
		}
	};

	const onImageChange = (imageList, addUpdateIndex) => {
		setImages(imageList);
	};
	return (
		<div>
			<MyNav></MyNav>
			<Container md={6} className="mt-3" fluid>
				<Form onSubmit={handleSubmit}>
					<Row>
						<Col md={3}></Col>
						<Col
							xs={6}
							md={3}
							className="d-flex align-items-center justify-content-center"
						>
							<div className="mb-3">
								<ImageUploading
									value={images}
									maxNumber={1}
									onChange={onImageChange}
									dataURLKey="data_url"
								>
									{({
										imageList,
										onImageUpload,
										onImageUpdate,
										onImageRemove,
									}) => {
										return (
											<div className="upload-wrapper">
												<Button
													className={toggleHiddenClass}
													onClick={onImageUpload}
												>
													Upload image
												</Button>
												{imageList.map((image, index) => {
													return (
														<div key={index} className="image-item">
															<div
																className="image-wrapper"
																onClick={onImageUpdate}
															>
																<img src={image.data_url} alt="" width="200" />
															</div>
															<span
																className="remove-btn"
																onClick={onImageRemove}
															>
																X
															</span>
														</div>
													);
												})}
											</div>
										);
									}}
								</ImageUploading>
							</div>
						</Col>
						<Col xs={6} md={3}>
							<Form.Group controlId="formName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									onChange={handleFormChange}
									type="text"
									placeholder="Dish name"
									name="name"
									value={form.name}
								/>
							</Form.Group>
							<Form.Group controlId="formPrice">
								<Form.Label>Price</Form.Label>
								<Form.Control
									type="number"
									placeholder="x1000 VND"
									onChange={handleFormChange}
									name="price"
									value={form.price}
								/>
							</Form.Group>
							<Form.Group controlId="formSelect">
								<Form.Label>Type</Form.Label>
								<Form.Control
									as="select"
									custom
									onChange={handleFormChange}
									name="type"
								>
									<option value="food">Food</option>
									<option value="drink">Drink</option>
								</Form.Control>
							</Form.Group>
							<Button variant="success" type="submit" className="mt-2">
								Submit
							</Button>
						</Col>
						<Col md={3}></Col>
					</Row>
				</Form>
			</Container>
		</div>
	);
};

export default Create;
