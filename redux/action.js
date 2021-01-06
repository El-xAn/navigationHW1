export const filmSearch = (filmData) => (
  {
      type: "SEARCH",
      payload:  filmData
    
  }
)

export const addFavourite = (movies) => (
{
    type: "ADD_FAVOURITE",
    payload: movies
    
}
)

export const cleanFavourite = () => (
{
    type: "CLEAN_FAVOURITE",
    payload: []
    
}
)

export const removeFromFav = (movies) => (
{
    type: "REMOVE_FAVOURITE",
    payload: movies
}
)
 
export const mainScreen = (dispatch, text) =>{
return async () => {
  try {
    const url = `http://api.tvmaze.com/search/shows?q=${text}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(filmSearch(data));
  } catch (e) {
    console.log("Wrong url!");
  }
} 
}