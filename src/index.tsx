import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';
import { SearchComponent } from './components/search';

interface MainState {
    image?: string;
}

class Index extends React.Component<{}, MainState> {
    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            // nesto uraditi sa gif source. primjer prikaza: <img src={gifSource} />
        });
    }
    private _SearchButtonClicked = (query: string) => {
        getRandomGiphy(query).then(
            x => {
                this.setState({
                    image: x
                });
        }).catch((e) => {
            console.log(JSON.stringify(e));
        });
    }

    private _renderImage(): JSX.Element {
        if (!this.state.image) {
            return <p>No image</p>;
        }
        return (
            <img src={this.state.image}/>
            );
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
                {this._renderImage()}
                <SearchComponent
                    onSearchCallback={this._SearchButtonClicked}
                />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
