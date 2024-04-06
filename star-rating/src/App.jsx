import { useState } from 'react'
import './App.css'
import StarRating from './StarRating'

function App() {
  const [rating, setRating] = useState();

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px", width: "1000px"}}>
      <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
      <StarRating maxRating={10} size={24} color='red' defaultRating={3} onSetRating={setRating} />
    </div>
  )
}

export default App
