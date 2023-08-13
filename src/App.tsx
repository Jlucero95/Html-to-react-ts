import "./App.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";
import "./style.css";
import "./reset.css";
import { CharacterData } from "./CharacterData";
import { TableRow } from "./Components/TableRow";
import { CardCreator } from "./Components/CharacterCard";

function App() {
	return (
		<>
			<header className="header">
				<h1>Fullmetal Alchemist</h1>
				<nav>
					<li>about us</li>
					<li>info</li>
					<li>support us</li>
				</nav>
			</header>
			<section id="character-ratings">
				<h4>Top Characters</h4>
				<table className="fix-margin">
					<tbody>
						<tr>
							<th>Name</th>
							<th>Skillset</th>
							<th>Votes</th>
						</tr>
						{CharacterData.sort((a, b) => (a.votes > b.votes ? -1 : 1))
							.slice(0, 5)
							.map((character, characterIndex) => {
								const isOdd = characterIndex % 2 !== 0;
								return (
									<TableRow
										item={character}
										key={character.name}
										isDark={isOdd}
									/>
								);
							})}
					</tbody>
				</table>
			</section>
			<section id="character-cards">
				{CharacterData.map((card) => {
					return (
						<CardCreator
							item={card}
							key={card.name}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
