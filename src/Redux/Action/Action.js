import axios from 'axios';
import { getLocalStogaeItem } from '../../Controller/localStorageData';
import {
  FETCH_WORD,
  GET_FAVORITE_WORD,
} from '../Type'




// fetch  Search Word
export const fetchWord = (word) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
        Authorization: `Token 17d730f383ff340fdc96969c70ebd9c3a9ba3ca4`,
      },
    };
    const result = await axios.get(`https://owlbot.info/api/v4/dictionary/${word}`, config)

    dispatch({
      type: FETCH_WORD,
      payload: result.data
    });
  } catch (error) {
    if (error) {
      alert("The word does not esist")
    }

  }

};



// Add word in your favourite List
export const addFavorite = (word, type) => async (dispatch) => {

  const config = {
    headers: {
      "Content-Type": "application/json",

      Accept: "application/json",
      Authorization: `Token 17d730f383ff340fdc96969c70ebd9c3a9ba3ca4`,
    },
  };
  let result = await axios.get(`https://owlbot.info/api/v4/dictionary/${word}`, config)

  // Filter data with respect to type
  let data = result.data.definitions.filter(x => x.type === type).map(x => x)

  let addWord = {
    word: word,
    type: type,
    data: data,
  }


  let favWords = [];

  // Get Word form local storage
  let favourites = localStorage.getItem("favourites");
  let words = JSON.parse(favourites)
  if (words == null) {
    favWords.push(addWord)

    localStorage.setItem("favourites", JSON.stringify(favWords));
  } else {

     // Check if the word is already availavble
    const isAvailable = words.some(x => x.word === word && x.type===type)
  
  
    // Check isAvailable or not
    if (isAvailable) {
      alert("The word is already saved")
    } else {
      favWords.push(...words, addWord)
      // Set New word
      localStorage.setItem("favourites", JSON.stringify(favWords));
    }
  }
};





// Fetch favourite Words
export const fetchFavWords = () => async (dispatch) => {

  // Call getLocalStogaeItem to get the favourite words from local stogae
  let words = getLocalStogaeItem()

  dispatch({
    type: GET_FAVORITE_WORD,
    payload: words.flat(Infinity)
  })
}



// Delete favourite word
export const deleteFavWords = (index, word,type) => async (dispatch) => {

  // Call getLocalStogaeItem to get the favourite words from local stogae
  let words = getLocalStogaeItem()


  // Filter the array without the deleted word
  let indexOfWord = words.findIndex(x=>x.word===word &&x.type===type)

 
  // remove the specific word with type 
  words.splice(indexOfWord,1)


  // Set updated word
  localStorage.setItem("favourites", JSON.stringify(words));


  // Call the action function of the favourite words
  dispatch(fetchFavWords())

}
