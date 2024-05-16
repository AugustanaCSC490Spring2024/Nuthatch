import React, { useEffect } from "react";
import "../styles/Print.css";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import {getLessonFromFirestoreByID} from '../firestoreFunctions';
import {auth} from '../firebase';
import PrintDrillCardView from "../components/PrintDrillCardView"; 
import { getCardByCode } from '../drillDB';


const Print = (props) => {
  const [currentLesson, setCurrentLesson] = useState({'title': 'Untitled Lesson', 'description':"not done yet", 'drillCodes':[]});
  const [eventToCardListMap, setEventToCardListMap] = useState(new Map());

  const {lessonID} = useParams();

  useEffect(() => {
    // Load lesson from firestore
    async function fetchLesson() {
        try{
        const theLesson = await getLessonFromFirestoreByID(lessonID);
        setCurrentLesson(theLesson);
        //group the cards (or IDs really) that are in the lesson by their event

        const groupCardsByEvent = () => {
            const eventMap = new Map();
            theLesson.drillCodes.forEach(async (drillCode) => {
                const cardItem = getCardByCode(drillCode);
                const event = cardItem.Event;
                console.log(cardItem.Event);
                if (!eventMap.has(event)) {
                    eventMap.set(event, []);
                }
                eventMap.get(event).push(cardItem);
            });
            
            // Now we have a map where each key is an event and the value is an array of cards for that event
            setEventToCardListMap(eventMap);
        };
    

        groupCardsByEvent();
        } catch (error) {
            alert("No lesson Data")
        }
    };
    if (lessonID && auth.currentUser && props.drillLibrary) {
      fetchLesson();
    }
  }, [props.isSignedIn, props.drillLibrary, lessonID]);

  return (
    <div class= 'grid-container'>
        <div className='text-container'>
            <h1 class="lessonTitle">{currentLesson.title}</h1>
            <h2>Description</h2>
            <p>{currentLesson.description}</p>
        </div>
        <div className="drill-cards">
        {[...eventToCardListMap.keys()].map(event => (
            <div>
                <h3>Event: {event}</h3>
                {eventToCardListMap.get(event).map(card => (
                    <PrintDrillCardView cardItem={card} />
                ))}
            </div>))}
            {/* {currentLesson.drillCodes.map(drillCode => (
                <PrintDrillCardView cardItem={getCardByCode(drillCode)} />
            ))}  */}
        </div>
    </div>
  );
};

export default Print;