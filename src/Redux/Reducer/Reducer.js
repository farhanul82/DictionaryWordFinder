import { FETCH_WORD ,GET_FAVORITE_WORD} from "../Type";

export const WordReducer = (
  state = {
    words:[],
    favouriteWords : [],
    filterWords:[],
  },
  action
) => {
  switch (action.type) {
    case FETCH_WORD:
      return {
        ...state,
        words: action.payload,
      };
      
      case GET_FAVORITE_WORD:
     
        return {
          ...state,
          favouriteWords: action.payload,
        };

    default:
      return state;
  }
};