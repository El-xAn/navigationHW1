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
   
export const addReducer = (data) => (
  {
    type: "ADD",
    payload: data
  }   
)