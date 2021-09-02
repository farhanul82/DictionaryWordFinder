// External Imports
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


// Internal Imports
import SearchWordCard from '../Components/SearchWordCard';
import { fetchWord } from '../Redux/Action/Action';


const Home = () => {
    const dispatch = useDispatch()
    const [word, setWord] = useState('')
  

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchWord(word))
     
     
    }

       // Fetch favourites searched Word
    const state = useSelector(state => state.words.words)

  

    return (
        <div className="container">

            {/* Search Word row */}
            <div className='row mt-4'>
                <form onSubmit={(e) => onSubmit(e)} className="searchWordForm">
                    <div className="form-group ">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search word"
                            name="word"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn btn-primary  searchBtn" type="submit">Search</button>
                </form>
            </div>

            <div className='row mt-5'>
                {
                    state ? (
                        <SearchWordCard state ={state} word = {state.word}/>
                    ) : (
                        <div></div>
                    )
                }
            </div>


        </div>
    )
}

export default Home
