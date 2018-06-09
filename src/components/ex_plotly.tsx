import * as React from 'react';
const Plot = require('react-plotly.js');

export interface IPexState {
  data: any;
  layout: any;
  frames: any;
  config: any;
}

export interface IPexProp {
  url: string;
}

export default class Pex extends React.Component<IPexProp,  IPexState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {},
      layout: {},
      frames: [],
      config: {},
    };
    fetch(this.props.url, {mode: 'cors'}).then((x) => {
      return x.json();
    }).then((x) => {
      console.log(x);
      this.setState(x);
    });
  }

  public render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
      />
    );
  }
}