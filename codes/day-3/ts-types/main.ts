type Person = {
    id: number,
    name: string,
    location: string
}

type Trainer = {
    subject: string
} & Person;


const anil: Trainer = {
    id: 1,
    name: 'anil',
    location: 'bangalore',
    subject: 'JS'
}

type myType = boolean | number | string | null;

function doSomething(arg: myType): myType {
    return false
}



function add(a: number, b: number): number {
    return a + b
}

function multiply(a: number, b: number, c: number): number {
    return a * b * c
}

//delegate int fnType(int x, int y);
type fnType = (x: number, y: number) => number;

function invoke(fnRef: fnType, x: number, y: number): void {
    console.log(fnRef(x, y))
}

invoke(add, 12, 13);
//invoke(multiply, 12, 13);

type AbstractType = {
    (arg: string): void
}

type AbsType = {
    add(a: number, b: number): number;
}

class AbsImpl implements AbsType {
    add(a: number, b: number): number {
        throw new Error("Method not implemented.");
    }
}