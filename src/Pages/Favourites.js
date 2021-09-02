// External Imports
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Internal Imports
import { fetchFavWords } from '../Redux/Action/Action'
import FavouriteWordsCard from '../Components/FavouriteWordsCard';



const Favourites = () => {
    const dispatch = useDispatch()

    // Initialize the selected type values
    const [value, setValue] = useState('all')


    // Call action to fetch favourites from the store 
    useEffect(() => {
        dispatch(fetchFavWords())
    }, [])


    // Fetch favourites from the store
    const state = useSelector(state => state.words.favouriteWords)

    // Select input options array
    let  options = ['all','noun','pronoun','verb','adverb','adjective','preposition',]

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center mt-3">Your Favourite Words List</h2>
            </div>
            <div className="row">
                <div className="selectInput">
                    <label for="Types">Select Type:</label>

                    <select name="types" id="cars" value={value} onChange={(e) => setValue(e.target.value)}>
                        {
                            options.map(opt=>{
                                return(
                                    <option value={`${opt}`}>{opt}</option>
                                )
                            })
                        }
                    </select>
                </div>

            </div>
            <div className="row">
                {
                    state ? (
                        <FavouriteWordsCard state={state} type={value} />
                    ) : (
                       <></>
                    )
                }



            </div>
        </div>
    )
}

export default Favourites
