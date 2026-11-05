export default function Card({ pokemon, onCardClick }) {

    return (
        <>
            <div onClick={onCardClick} className='bg-green-500 font-bold font-mono text-black rounded-2xl p-1
                hover:bg-emerald-700 hover:scale-110 hover:text-white
                transition-transform duration-300'>
                <div className='bg-white rounded-2xl text-center p-1'>
                    <img src={pokemon.photo} alt={pokemon.name} className="mx-auto" />
                </div>
                <h3 className='text-center mt-4'>{pokemon.name}</h3>
            </div>
        </>
    )
}