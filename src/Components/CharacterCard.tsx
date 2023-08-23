import { TCharacter } from "../types";

type CardTypes = {
	item: TCharacter;
};

export function CardCreator({
	item: { name, nickName, imageUrl, background },
}: CardTypes) {
	return (
		<div className="card">
			<div className="card-titles">
				<h3>{name}</h3>
				<h4>{nickName}</h4>
			</div>
			<img src={imageUrl} />
			<p>{background}</p>
		</div>
	);
}
