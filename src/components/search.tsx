import * as React from 'react';

interface ISearchProps {
    onSearchCallback();
}

interface ISearchState {
    query: string;
}

export class SearchComponent extends React.Component<ISearchProps, ISearchState> {
    constructor(props: ISearchProps) {
        super(props);
        this.state  = {
            query: '112122'
        };
    }

    private _onChange = (args: React.FormEvent<any>) => {
        this.setState({
            query: args.currentTarget.value
        });
    }

    public render() {
    return (
        <div>
            <input value={this.state.query} onChange={this._onChange}/>;
                <button onClick={this.props.onSearchCallback}> Add Student </button>
        </div>
    );
    }
}