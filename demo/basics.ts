
interface Student {
    name: string;
    surname: string;
    nickname?: string;
}

const mark: Student = {
    name: 'Mark',
    surname: 'SubMark'
};

interface Room {
    name: string;
    capacity: number;
}

let confRoom: Room = {
    name: 'Conference Room',
    capacity: 2
};

enum LectureRegistrationResultEnum {
    Ok = 'Ok',
    RoomFull = 'Room Full',
    NotRegistred = 'Not Registred'
}

alert(LectureRegistrationResultEnum.RoomFull);

class Lecture {

    private room: Room;
    private attendees: Array<Student>;

    constructor(room: Room) {
        this.room = room;
        this.attendees = [];
    }

    public RegisterForLecture(student: Student): LectureRegistrationResultEnum {
        if (this.attendees.length === this.room.capacity) {
            return LectureRegistrationResultEnum.RoomFull;
        }
        this.attendees.push(student);
        return LectureRegistrationResultEnum.Ok;
    }
}

let jsTalk = new Lecture(confRoom);
jsTalk.RegisterForLecture(mark);
jsTalk.RegisterForLecture(mark);
alert(jsTalk.RegisterForLecture(mark));

class RegistredLecture extends Lecture {
    private registredAttendees: Array<Student>;

    constructor(room: Room) {
        super(room);
        this.registredAttendees = [];
    }

    public RegisterForLecture(student: Student): LectureRegistrationResultEnum {
        const find = this.registredAttendees.find(x => x.name === student.name);
        if (!Boolean(student)) {
            return LectureRegistrationResultEnum.NotRegistred;
        }
        return super.RegisterForLecture(student);
    }
}
