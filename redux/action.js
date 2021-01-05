export const filmSearch = (filmData) => (
    {
        type: "SEARCH",
        payload: {
            data: filmData
        }
    }
)

export const addFavourite = (movies) => (
  {
      type: "ADD_FAVOURITE",
      payload: {
          favList: movies
      }
  }
)

export const mainScreen = (dispatch, url, text) =>{
  return async () => {
    try {
      console.log(url+text)
      const response = await fetch(url + text);
      const data = await response.json();
      dispatch(filmSearch(data));
    } catch (e) {
      console.log("Wrong url!");
    }
  } 
}