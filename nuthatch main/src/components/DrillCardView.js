// credits to https://www.youtube.com/watch?v=rZ6iu5FQr2c&ab_channel=developedbyed
import React from "react";
import "../styles/DrillCardView.css";
import {motion} from 'framer-motion';
import {useState} from 'react';

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
						}}
						>
							<motion.h2 layout= "position">{cardItem.Title}</motion.h2>
							<img className="thumbnail" src={cardItem.thumbnailURL} />
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
						<div className="btn-container">
							{props.addCardToLessonFunction && (
								<button className = "btn" onClick={() => props.addCardToLessonFunction(cardItem.CODE)}>Add</button>
							)}
							{props.removeCardFromLesson && (
                                <button className = "btn" onClick={() => props.removeCardFromLesson(cardItem.CODE)}>Remove</button>
                            )}
					</div>
			</motion.div>
		</div>
	);
};

export default DrillCardView;