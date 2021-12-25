import React from "react";

import sprite from "../../assets/svg/sprite.svg";
import "./style.scss";

const SVGSprite = (props: {
	SvgName: string;
	className?: string;
}): JSX.Element => {
	const SvgName = `${sprite}#${props.SvgName}`;

	return (
		<div
			className={`icon-wrapper ${props.className ? props.className : ""}`}
		>
			<svg
				className={"svg" + " " + `svg--${props.SvgName}`}
				role="presentation"
			>
				<use xlinkHref={SvgName}></use>
			</svg>
		</div>
	);
};

export default SVGSprite;