interface Person {
    id: number;
    name: string;
    location: string;
}

interface Trainer extends Person {
    subject: string;
}

const anil: Trainer = {
    id: 1,
    name: 'anil',
    location: 'bangalore',
    subject: 'JS'
}

interface FuncType {
    (x: number, y: number): number;
}

interface Abs {
    add(a: number, b: number): number;
}
class AbsCls implements Abs {
    add(a: number, b: number): number {
        return a + b
    }
}


