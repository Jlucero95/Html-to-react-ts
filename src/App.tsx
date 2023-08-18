import "./App.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";
import "./style.css";
import "./reset.css";
import { characterData } from "./CharacterData";
import { Header } from "./Components/Header";
import { RatingsTable } from "./Components/RatingsTable";
import { CardGallery } from "./Components/CardGallery";

function App() {
	return (
		<>
			<Header />
			<section id="character-ratings">
				<h4>Top Characters</h4>
				<RatingsTable characters={characterData} />
			</section>
			<section id="character-cards">
				<CardGallery characters={characterData} />
			</section>
		</>
	);
}

export default App;
