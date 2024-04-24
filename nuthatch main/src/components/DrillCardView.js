// credits to https://www.youtube.com/watch?v=rZ6iu5FQr2c&ab_channel=developedbyed
import React from "react";
import "../styles/DrillCardView.css";
import {motion} from 'framer-motion';
import {useState} from 'react';
import { isDOMComponent } from "react-dom/test-utils";

const DrillCardView = (props) => {
	const cardItem = props.cardItem;
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<div className="card-view">

					<motion.div 
						transition={{layout: {duration: 1, type: "spring" }}} 
						layout
						onClick={() => setIsOpen(!isOpen)} 
						className="cards"
						style={{
							borderRadius: "1rem",
							boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
						}}
						>
							<motion.h2 layout= "position">{cardItem.Title}</motion.h2>
							<img src={cardItem.thumbnailURL} />
							{isOpen && (
						<motion.div
								initial={{ opacity: 0}}
								animate={{ opacity: 1}}
								transition={{ duration: 1}}
								className= "expand"
						>
				<h3>Event: {cardItem.Event}</h3>
				<h3>Category: {cardItem.Category}</h3>  
						</motion.div>
						 )}
						<button className = "btn" onClick={() => props.addCardToLessonFunction(cardItem.CODE)}>Add</button>
					{ <button className = "btn" onClick={() => props.removeCardFromLesson(cardItem.CODE)}>Remove</button> }
					
			</motion.div>
		</div>
	);
};

 
export default DrillCardView;