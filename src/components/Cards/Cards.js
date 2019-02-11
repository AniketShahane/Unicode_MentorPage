import React from 'react';
import Card from './Card/Card'; 
import classes from './Cards.css';
import SearchInput from '../UI Elements/Search/Search';

const Cards = (props) => {
    const cardsInformation = [...props.cardsInfo];
    let searchInput = null;
    if(props.searchInput){
        searchInput = (<SearchInput />);
    }
    return (
        <>    
            {searchInput}
            <div className={classes.Cards}>
                {cardsInformation.map((card, index) => {
                    return (
                        <Card 
                            key={index}
                            cardTitle={card.name}
                            cardContent={card.position}
                            button1={card.button1}
                            button2={card.button2}/>
                    );
                })}
            </div>
        </>
    );
}
export default Cards;