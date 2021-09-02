
// Function to get data from loacal storage
export const getLocalStogaeItem=()=>{
      // Get Word form local storage
    let favourites = localStorage.getItem("favourites");

    if (favourites === null) {
      var words = []
    } else {
      var words = JSON.parse(favourites)
    }

    return words
}