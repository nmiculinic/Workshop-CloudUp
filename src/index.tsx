import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GiphyViewer } from './component';
import { getRandomGiphy } from './util/giphy.service';

export interface AppState {
    gifSource: string;
    query: string;
}

class Index extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            gifSource: '',
            query: ''
        };
    }

    public componentDidMount() {
        this.searchGiphy();
    }

    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                gifSource: gifSource
            });
        });
    }

    private onSubmit = (e: any) => {
        this.searchGiphy(this.state.query);
        e.preventDefault();
    }

    private onQueryChanged = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            query: event.currentTarget.value
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

                {'Just some randoooom giphy'}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        value={this.state.query}
                        onChange={this.onQueryChanged}
                        placeholder="Enter Your Interest!"
                        style={{
                            margin: '10px'
                        }}
                    />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
