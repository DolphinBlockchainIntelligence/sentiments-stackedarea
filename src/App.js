/*eslint-disable no-magic-numbers*/
import React from "react";
import {
	VictoryAxis,
	VictoryArea,
	VictoryBar,
	VictoryChart,
	VictoryLine,
	VictoryPie,
	VictoryScatter,
	VictoryStack,
	VictoryGroup,
	VictorySelectionContainer,
	VictoryZoomContainer,
	VictoryBrushContainer
} from "victory";

export default class App extends React.Component {


	loadThingsFromServer()  {
			var xhr = new XMLHttpRequest();
			xhr.overrideMimeType("application/json");
			xhr.open('get', 'S89843.json', true);
			xhr.onload = function()  {
				console.log(xhr)
				var data = JSON.parse(xhr.responseText);
				var pointStart = data.pointStart*10;
				var positive = [],
						negative = [],
						neutral = [],
						pointPositive = pointStart,
						pointNegative = pointStart,
						pointNeutral = pointStart;
				console.log( pointStart)
				console.log(new Date(1982, 1, 1))
				data.chart.positive.forEach(function(item){
					var point = new Date(pointPositive);
					positive.push({'x': point,'y': item});
					pointPositive = pointPositive + 3600 * 1000 * 24;
				});	
				data.chart.negative.forEach(function(item){
					var point = new Date(pointNegative);
					negative.push({'x': point,'y': item});
					pointNegative = pointNegative + 3600 * 1000 * 24;
				});
				data.chart.neutral.forEach(function(item){
					var point = new Date(pointNeutral);
					neutral.push({'x': point,'y': item});
					pointNeutral = pointNeutral + 3600 * 1000 * 24;
				});
				this.setState( { positive: positive, negative: negative, neutral: neutral} );
			} .bind(this);
			xhr.send();
	}

	constructor() {
		super();
		this.state = {positive: [], negative: [], neutral: [], tickValues: []};
	}

	componentDidMount()  {
			this.loadThingsFromServer();
	}

	handleZoom(domain) {
		this.setState({selectedDomain: domain});
	}

	handleBrush(domain) {
		this.setState({zoomDomain: domain});
	}

	
	render() {
		const style = {
			parent: { border: "1px solid #ccc", margin: "2%", maxWidth: "100%", height: "100%", width: "100%" }
		};
		return (
			<div className="demo">
					<VictoryChart width={window.innerWidth} height={window.innerHeight - 100} scale={{x: "time"}}
						containerComponent={
							<VictoryZoomContainer responsive={false}
								zoomDimension="x"
								zoomDomain={this.state.zoomDomain}
								onZoomDomainChange={this.handleZoom.bind(this)}
							/>
						}
					>
						<VictoryStack>
							<VictoryArea
								style={{
									data: { stroke: "#ff938c", fill: "#ff938c" }
								}}
								data={this.state.negative}
							/>
							<VictoryArea
								style={{
									data: {stroke: "#6aedc7", fill: "#6aedc7"}
								}}
								data={this.state.positive}
							/>
							<VictoryArea
								style={{
									data: {stroke: "#ffce00", fill: "#ffce00"}
								}}
								data={this.state.neutral}
							/>
						</VictoryStack>
					</VictoryChart>

					<VictoryChart
						padding={{top: 0, left: 50, right: 50, bottom: 30}}
						width={window.innerWidth} height={90} scale={{x: "time"}}
						containerComponent={
							<VictoryBrushContainer responsive={false}
								brushDimension="x"
								brushDomain={this.state.selectedDomain}
								onBrushDomainChange={this.handleBrush.bind(this)}
							/>
						}
					>
						
						<VictoryAxis
			      />
						<VictoryStack>
							<VictoryArea
								style={{
									data: { stroke: "#ff938c", fill: "#ff938c" }
								}}
								data={this.state.negative}
							/>
							<VictoryArea
								style={{
									data: {stroke: "#6aedc7", fill: "#6aedc7"}
								}}
								data={this.state.positive}
							/>
							<VictoryArea
								style={{
									data: {stroke: "#ffce00", fill: "#ffce00"}
								}}
								data={this.state.neutral}
							/>
						</VictoryStack>
					</VictoryChart>
			</div>
		);
	}
}