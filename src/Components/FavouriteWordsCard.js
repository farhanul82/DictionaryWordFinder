//  External Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';


// Internal Imports
import { deleteFavWords, fetchFavWords } from '../Redux/Action/Action'
import { capitalize } from '../Controller/CapitalizeFirstWord';




const FavouriteWordsCard = ({ state, type }) => {
console.log(state)
    const dispatch = useDispatch()

    let filterWords;

    // Check if word type is all or any specofic
    if (type === 'all') {
        filterWords = state

    } else {
        filterWords = state.filter(x => x.type === type).map(x => x)
    }


    return (
        <div className="d-flex flex-wrap justify-content-around">
            {
                filterWords?.map((x, index) => {
                    return (
                        <Card style={{ width: '18rem' }} className="mt-3 mb-3 favWordCard">
                            <div className="nameSection">
                                <p className="wordName">{x.word}</p>

                                {/* Delete button */}
                                <button className="deleteBtn" onClick={() => dispatch(deleteFavWords(index,x.word,x.type))} ><AiFillDelete /></button>
                            </div>

                            <Card.Body className="favWordCardBody ">
                                {
                                    x?.data.map(def => {
                                        return (
                                            <>
                                                {
                                                    def.image_url ? (
                                                        <Card.Img className="favWordImg" variant="top" src={def.image_url} />
                                                    ) : (
                                                        <></>
                                                    )
                                                }

                                                <Card.Title className="text-center">{def.type}</Card.Title>
                                                <Card.Text className="wordDefinition text-center">{def.definition}</Card.Text>
                                                <Card.Text className="wordExample mb-4 text-center">"{capitalize(def.example)}"</Card.Text>
                                            </>
                                        )
                                    })
                                }
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default FavouriteWordsCard
