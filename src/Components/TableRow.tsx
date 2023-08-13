import { Component } from "react";
import { ItemData } from "../types";

type RowTypes = {
	item: ItemData;
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
