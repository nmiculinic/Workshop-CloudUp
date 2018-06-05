import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import { GiphyViewer } from './components/giphyViewer';

export interface AppState {
    gifSource: any;
}

class Index extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            gifSource: ''
        };
    }

    public componentDidMount() {
        this.searchGiphy('hackerman');
    }

    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                gifSource: gifSource
            });
        });
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <GiphyViewer
                    source={this.state.gifSource}
                />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
