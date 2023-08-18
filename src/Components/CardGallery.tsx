import { TCharacter } from "../types";
import { CardCreator } from "./CharacterCard";

export function CardGallery({ characters }: { characters: TCharacter[] }) {
	return characters.map((card) => {
		return (
			<CardCreator
				item={card}
				key={card.name}
			/>
		);
	});
}
