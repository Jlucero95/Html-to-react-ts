import { TCharacter } from "../types";
import { TableRow } from "./TableRow";

export function OrderedTableRow({ characters }: { characters: TCharacter[] }) {
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
