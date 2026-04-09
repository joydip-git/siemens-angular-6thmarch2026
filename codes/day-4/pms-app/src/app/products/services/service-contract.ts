export interface IServiceContract<T>{
    //getAll(): Readonly<T[]>;
    getAll(): readonly T[];
}