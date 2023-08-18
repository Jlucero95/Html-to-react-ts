import { TCharacter } from "../types";
import { OrderedTableRow } from "./OrderedTableRow";

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
