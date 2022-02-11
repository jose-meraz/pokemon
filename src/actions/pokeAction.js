export const fetchAllPoke = (url) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SETLOADING",
      payload: true
    })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          dispatch({
            type: "SETALLPOKE",
            payload: data.results
          })
          dispatch({
            type: "SETLOADING",
            payload: false
          })
        }, 1000);
      })
      .catch(err => {
        dispatch({
          type: "SETERROR",
          payload: true
        })
      })
  }
}

export const fetchPoke = (url) => {
  if (url === 'clear') {
    return (dispatch) => {
      dispatch({
        type: "SETONEPOKE",
        payload: null
      })
    }
  }
  return (dispatch, getState) => {
    dispatch({
      type: "SETLOADING",
      payload: true
    })
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          dispatch({
            type: "SETONEPOKE",
            payload: data
          })
          dispatch({
            type: "SETLOADING",
            payload: false
          })
        }, 1000);
      })
      .catch(err => {
        dispatch({
          type: "SETERROR",
          payload: true
        })
      })
  }
}

export const searchPoke = (string) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SEARCHPOKE", payload: string
    })
  }
}

export const setActive = (number) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SETACTIVE", payload: number
    })
  }
}