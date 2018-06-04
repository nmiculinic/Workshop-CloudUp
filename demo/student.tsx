import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface StudentProps {
    name: string;
    surname: string;
}

export const Student: React.SFC<StudentProps> = (props, context) => {
    return (
        <div>
            Hello it's me, {`${props.name} ${props.surname}`}
        </div>
    );
};

Student.contextTypes = {
    router: PropTypes.object
};

Student.defaultProps = {
    name: 'Wolwerine'
};
