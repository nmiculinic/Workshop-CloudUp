import * as React from 'react';

interface GiphyViewerProps {
    source: string;
}

export class GiphyViewer extends React.PureComponent<GiphyViewerProps, never> {
    public render(): JSX.Element {
        return (
            <img src={this.props.source} />
        );
    }
}
