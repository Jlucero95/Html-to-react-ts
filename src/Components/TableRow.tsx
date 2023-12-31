import { Component } from "react";
import { TCharacter } from "../types";

type RowTypes = {
	item: TCharacter;
	isDark: boolean;
};

export class TableRow extends Component<RowTypes> {
	render() {
		const { name, skillset, votes } = this.props.item;

		return (
			<tr className={this.props.isDark ? "dark" : "light"}>
				<td>{name}</td>
				<td>{skillset.join(", ")}</td>
				<td>{votes}</td>
			</tr>
		);
	}
}
