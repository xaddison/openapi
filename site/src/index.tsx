import "./style.css";
import React, { Component } from "react";

const SwaggerUI = require("swagger-ui");

type AugmentingLayoutP = {
	getComponent(comp: string, nose: boolean): any;
};

const Logo = () => (
	<svg width="30" viewBox="0 0 226 200" aria-label="zeit" className="logo">
		<defs>
			<linearGradient
				x1="196.572434%"
				y1="228.815483%"
				x2="50%"
				y2="50%"
				id="logo-d-zeit"
			>
				<stop offset="0%" stopColor="#fff" />
				<stop offset="100%" stopColor="#000" />
			</linearGradient>
		</defs>
		<g transform="translate(-141, -156)">
			<polygon
				fill="url(#logo-d-zeit)"
				points="254 156.459299 367 356 141 356 "
			/>
		</g>
	</svg>
);

class AugmentingLayout extends Component<AugmentingLayoutP, {}> {
	render() {
		const { getComponent } = this.props;
		const BaseLayout = getComponent("BaseLayout", true);

		return (
			<div>
				<div className="custom-header">
					<a href="https://zeit.co">
						<Logo />
					</a>
					<h1>ZEIT OpenAPI Spec</h1>
				</div>
				<BaseLayout />
			</div>
		);
	}
}

const AugmentingLayoutPlugin = () => {
	return {
		components: {
			AugmentingLayout: AugmentingLayout
		}
	};
};

SwaggerUI({
	deepLinking: true,
	displayOperationId: true,
	dom_id: "#container",
	layout: "AugmentingLayout",
	plugins: [AugmentingLayoutPlugin],
	url: "/swagger.yaml"
});
