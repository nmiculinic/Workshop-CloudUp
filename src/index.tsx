import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Pex from './components/ex_plotly';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

const friendOptions = [
    {
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        // image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
    },
    {
        text: 'lala',
        value: 'lala',
        // image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
    },
];

interface MainState {
    plot?: string;
}

class Index extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    private _onChange = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        this.setState({
            plot: data.value as string,
        });
    }

    public render() {
        if (!this.state.plot) {
            return (
                <div>
                    <Dropdown placeholder="Select friend" fluid={true} selection={true} options={friendOptions} onChange={this._onChange} />
                </div>
            );
        }

        return (
            <div>
                <Dropdown placeholder="Select friend" fluid={true} selection={true} options={friendOptions} onChange={this._onChange} />
                <Pex url={`http://localhost:8000?plot=${this.state.plot}`} />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));