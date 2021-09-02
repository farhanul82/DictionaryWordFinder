import React, { useEffect } from 'react'
import '../App.css'
import { IoIosAddCircleOutline } from 'react-icons/io';

import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../Redux/Action/Action';
import { capitalize } from '../Controller/CapitalizeFirstWord';

const SearchWordCard = ({ state, word }) => {
    const dispatch = useDispatch()

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {
                state.definitions?.map((x,index) => {
                    return (
                        <Card className="searchWordCard" style={{ width: '18rem' }} key = {index}>
                            <p className="text-center mt-3 wordName">{word}</p>
                            {
                                x.image_url ? (
                                    <div className="cardImgBox">
                                        <img src={x.image_url} alt=''></img>
                                    </div>
                                ) : (
                                    <div className="mt-2">
                                    </div>
                                )
                            }
                            <Card.Body>
                                <Card.Title className="text-center">{x.type}</Card.Title>
                                <Card.Text className="wordDefinition text-center"> {x.definition}  </Card.Text>
                                <Card.Text  className="wordExample text-center">"{capitalize(x.example)}"</Card.Text>
                                <Button className="addFavouriteBtn text-center" variant="primary" onClick={()=>dispatch(addFavorite(word,x.type))}><IoIosAddCircleOutline/>Favourite</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default SearchWordCard
