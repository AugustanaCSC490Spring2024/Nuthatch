// credits to https://www.youtube.com/watch?v=rZ6iu5FQr2c&ab_channel=developedbyed
import React from "react";
// import "../styles/PrintDrillCardView.css";

const PrintDrillCardView = (props) => {
	const cardItem = props.cardItem;
	
	return (
		props.cardItem == null ? 
			(<div></div>) :
			(<div>
				<img className="thumbnail" src={cardItem.fullImageURL} alt={cardItem.Title} style={{ width: "500px" }} />
			</div>)
	);
};

export default PrintDrillCardView;