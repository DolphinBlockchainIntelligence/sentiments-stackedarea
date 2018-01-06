/*eslint-disable no-magic-numbers*/
import React from "react";
// import 'whatwg-fetch';
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
        this.setState( { data: data } );
      } .bind(this);
      xhr.send();
  }

  constructor() {
    super();
    this.state = {data: []};
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
    console.log(this.state.data)
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
                data={[
                      {x: new Date(1982, 1, 1), y: 125},
                      {x: new Date(1987, 1, 1), y: 257},
                      {x: new Date(1993, 1, 1), y: 345},
                      {x: new Date(1997, 1, 1), y: 515},
                      {x: new Date(2001, 1, 1), y: 132},
                      {x: new Date(2005, 1, 1), y: 305},
                      {x: new Date(2011, 1, 1), y: 270},
                      {x: new Date(2015, 1, 1), y: 470}
                    ]}
              />
              <VictoryArea
                data={[
                      {x: new Date(1982, 1, 1), y: 125},
                      {x: new Date(1987, 1, 1), y: 257},
                      {x: new Date(1993, 1, 1), y: 345},
                      {x: new Date(1997, 1, 1), y: 515},
                      {x: new Date(2001, 1, 1), y: 132},
                      {x: new Date(2005, 1, 1), y: 305},
                      {x: new Date(2011, 1, 1), y: 270},
                      {x: new Date(2015, 1, 1), y: 470}
                    ]}
              />
              <VictoryArea
                data={[
                      {x: new Date(1982, 1, 1), y: 125},
                      {x: new Date(1987, 1, 1), y: 257},
                      {x: new Date(1993, 1, 1), y: 345},
                      {x: new Date(1997, 1, 1), y: 515},
                      {x: new Date(2001, 1, 1), y: 132},
                      {x: new Date(2005, 1, 1), y: 305},
                      {x: new Date(2011, 1, 1), y: 270},
                      {x: new Date(2015, 1, 1), y: 470}
                    ]}
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
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
<VictoryStack>
  <VictoryArea
    data={[
          {x: new Date(1982, 1, 1), y: 125},
          {x: new Date(1987, 1, 1), y: 257},
          {x: new Date(1993, 1, 1), y: 345},
          {x: new Date(1997, 1, 1), y: 515},
          {x: new Date(2001, 1, 1), y: 132},
          {x: new Date(2005, 1, 1), y: 305},
          {x: new Date(2011, 1, 1), y: 270},
          {x: new Date(2015, 1, 1), y: 470}
        ]}
  />
  <VictoryArea
    data={[
          {x: new Date(1982, 1, 1), y: 125},
          {x: new Date(1987, 1, 1), y: 257},
          {x: new Date(1993, 1, 1), y: 345},
          {x: new Date(1997, 1, 1), y: 515},
          {x: new Date(2001, 1, 1), y: 132},
          {x: new Date(2005, 1, 1), y: 305},
          {x: new Date(2011, 1, 1), y: 270},
          {x: new Date(2015, 1, 1), y: 470}
        ]}
  />
  <VictoryArea
    data={[
          {x: new Date(1982, 1, 1), y: 125},
          {x: new Date(1987, 1, 1), y: 257},
          {x: new Date(1993, 1, 1), y: 345},
          {x: new Date(1997, 1, 1), y: 515},
          {x: new Date(2001, 1, 1), y: 132},
          {x: new Date(2005, 1, 1), y: 305},
          {x: new Date(2011, 1, 1), y: 270},
          {x: new Date(2015, 1, 1), y: 470}
        ]}
  />
</VictoryStack>
          </VictoryChart>
      </div>
    );
  }
}