/* eslint-disable react/react-in-jsx-scope */
import { TCharacter } from "../types";
import { TableRow } from "./TableRow";

function OrderedTableRow({ characters }: { characters: TCharacter[] }) {
	return structuredClone(characters)
		.sort((a, b) => (a.votes > b.votes ? -1 : 1))
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
		});
}

export function RatingsTable({ characters }: { characters: TCharacter[] }) {
	return (
		<table className="fix-margin">
			<tbody>
				<tr>
					<th>Name</th>
					<th>Skillset</th>
					<th>Votes</th>
				</tr>
				<OrderedTableRow characters={characters} />
			</tbody>
		</table>
	);
}
