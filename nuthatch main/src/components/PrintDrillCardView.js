import React from "react";

const PrintDrillCardView = (props) => {
	const cardItem = props.cardItem;
	
	return (
		props.cardItem == null ? 
			(<div></div>) :
			(<div className="printCollection">
				<img className="full" src={cardItem.fullImageURL} alt={cardItem.Title} style={{ width: "500px" }} />
			</div>)
	);
};

export default PrintDrillCardView;