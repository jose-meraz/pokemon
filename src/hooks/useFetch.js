import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (url) {
      setLoading(true)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            setData(data)
            setLoading(false)
          }, 100);
        })
        .catch(err => {
          setError(true)
        })
    }

    return () => {
      setData(null)
    }
  }, [url])

  return {
    data,
    error,
    loading
  }
}

export default useFetch