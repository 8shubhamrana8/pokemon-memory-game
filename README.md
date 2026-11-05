
# Pokémon Card Memory Game

An interactive memory card game built with React[cite: 2] and the PokéAPI. Players test their memory by clicking on unique Generation 1 Pokémon cards without selecting the same card twice, as the grid dynamically shuffles after every turn.

🔗 **Live Demo:** [https://mellifluous-faun-876e32.netlify.app/](https://mellifluous-faun-876e32.netlify.app/)  
💻 **Repository:** [https://github.com/8shubhamrana8/pokemon-memory-game](https://github.com/8shubhamrana8/pokemon-memory-game)

---

## 📸 Preview

(https://github.com/user-attachments/assets/945bf664-9a08-4b29-9067-aac303aeae69)



---

## ✨ Features & Gameplay

- **Live Scoreboard:** Tracks and updates both **Current Score** and **Best Score** in the top header banner.
- **Dynamic Card Shuffling:** Randomly rearranges the 5-column card grid after every click to test spatial memory.
- **PokéAPI Integration:** Fetches Generation 1 Pokémon sprites and names (including Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie, Metapod, Butterfree, Weedle, Kakuna, and Beedrill).
- **Game Loop Logic:** Clicking a new Pokémon increments the **Current Score** by 1; clicking a duplicate card resets the **Current Score** to 0 while preserving the highest **Best Score**.
- **Clean UI Design:** Features contrasting green cards, white sprite frames, and a dark-themed board layout.

---

## 🛠️ Tech Stack

- **Frontend:** React[cite: 2], JavaScript (ES6+), HTML5, CSS3
- **API:** [PokéAPI](https://pokeapi.co/) (REST API via Fetch)
- **Hosting:** Netlify

---

## 🚀 Getting Started Locally
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/8shubhamrana8/pokemon-memory-game.git](https://github.com/8shubhamrana8/pokemon-memory-game.git)

2. cd pokemon-memory-game

3. npm install

4. npm run dev

5. Visit http://localhost:5173 to play locally.
