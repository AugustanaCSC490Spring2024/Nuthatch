// credits to https://www.youtube.com/watch?v=rZ6iu5FQr2c&ab_channel=developedbyed
import React from "react";
import "../styles/DrillCardView.css";
import {motion} from 'framer-motion';
import {useState} from 'react';

const DrillCardView = (props) => {
	const cardItem = props.cardItem;
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		props.cardItem == null ? 
			(<div></div>) :
			(<div className="card-view">

					<motion.div 
						transition={{layout: {duration: 0.5, type: "spring" }}} 
						layout
						onClick={() => setIsOpen(!isOpen)} 
						className="cards"
						style={{
							borderRadius: "1rem",
						}}
						>
							<motion.h2 className="card-head" layout= "position">{cardItem.Title}</motion.h2>
							<img className="thumbnail" src={cardItem.thumbnailURL} alt={cardItem.Title}/>
							{isOpen && ( 
						<motion.div
								initial={{ opacity: 0}}
								animate={{ opacity: 1}}
								transition={{ duration: 0.5}}
								className= "expand"
						>
				{/* this is anything in the excel sheet */}
				{/* <h3>Code: {cardItem.CODE}</h3> */}
				{/* <h3>Title: {cardItem.Title}</h3> */}
				<h3 className="card-text">Event: {cardItem.Event}</h3>
				{/* <h3>Category: {cardItem.Category}</h3> */}
				<h3 className="card-text">Gender: {cardItem.Gender}</h3>
				<h3 className="card-text">Level: {cardItem.Level}</h3>
				<h3 className="card-text">Equipment: {cardItem.Equipment}</h3>
				


						</motion.div>
						)}
						<div className="btn-container">
							{props.addCardToLessonFunction && (
								<button className = "btn1" onClick={() => props.addCardToLessonFunction(cardItem.CODE)}>Add</button>
							)}
							{props.removeCardFromLesson && (
                                <button className = "btn1" onClick={() => props.removeCardFromLesson(cardItem.CODE)}>Remove</button>
                            )}
					</div>
			</motion.div>
		</div>
	));
};

export default DrillCardView;