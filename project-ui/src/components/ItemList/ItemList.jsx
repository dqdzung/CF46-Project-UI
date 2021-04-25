import ItemCard from "../ItemCard/ItemCard";

const ItemList = (props) => {
	const items = props.items;

	const listItems = items.map((item) => (
		<ItemCard
			key={items.indexOf(item)}
			item={item}
			onClick={() => {
				props.onClick(item);
			}}
		></ItemCard>
	));

	return <>{listItems}</>;
};

export default ItemList;
