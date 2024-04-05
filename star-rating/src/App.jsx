import './App.css'
import StarRating from './StarRating'

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px", width: "1000px"}}>
      <StarRating maxRating={5} />
      <StarRating maxRating={10} />
      <StarRating />
    </div>
  )
}

export default App
