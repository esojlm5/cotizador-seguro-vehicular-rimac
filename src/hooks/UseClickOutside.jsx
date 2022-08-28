import { useEffect } from 'react'

const useClickOutSide = (ref, callback, value) => {
  useEffect(() => {
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('You clicked outside of me!')
        callback(value)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useClickOutSide
