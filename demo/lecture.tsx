import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StudentProps, Student } from './student';

export interface LectureProps {
    lecturerName: string;
    students: Array<StudentProps>;
}

export class Lecture extends React.PureComponent<LectureProps, {}> {

    public static contextTypes: any = {
        router: PropTypes.object
    };

    public static defaultProps: Partial<LectureProps> = {
        lecturerName: 'Professor X'
    };

    public render(): JSX.Element {
        return (
            <>
                {this.props.lecturerName}
                {this.props.students.map((s, i) =>
                    <Student
                        key={i}
                        {...s}
                    />
                )}
            </>
        );
    }
}
