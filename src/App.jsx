import { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {
  const [cscore, setCscore] = useState(0);
  const [bscore, setBscore] = useState(0);

  const [theList, setThelist] = useState([]);
  const [loading, setLoading] = useState(true);

  const[streakList, setStreakList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((response) => response.json())
      .then((data) => {
        const pokeData = data.results.map((pokemon, index) => {
          const id = index + 1;
          const photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
          return {
            id,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            photo: photo
          };
        });
        setThelist(pokeData);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching pokemon"));
  }, [])

  if (loading) return <p style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Loading Pokédex...</p>;

  const shuffleCards = (id) => {
    
    const shuffledList = [...theList];

    for(let i = 0; i < shuffledList.length; i++) {
      
      const j = Math.floor(Math.random() * (i+1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]
    
    }

    if (streakList.includes(id)) {
      setCscore(0);
      setStreakList([])
    } else {
      setCscore((prev) => {
        const newScore = prev + 1;
        if (newScore > bscore) {
          setBscore(newScore);
        }
        return newScore
      });
      setStreakList((prev) => [...prev, id]);
    }

    setThelist(shuffledList);
  }

  return (
    <>
      <div className='text-center font-mono bg-amber-500 p-3'>
        <h1 className='text-3xl'>POKEMON CARD MEMORY GAME</h1>
        <h3>Best Score: {bscore}</h3>
        <h3>Current Score: {cscore}</h3>
      </div>
      <div id="cardContainer" className='w-screen p-5 bg-slate-800  grid grid-cols-5 gap-5 min-h-screen px-20'>
        {theList.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} onCardClick={() => shuffleCards(pokemon.id)}/>
        })}
      </div>
    </>
  )
}

export default App
