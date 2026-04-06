export interface IServiceContract<T> {
    getAll(): Readonly<T[]>;
    getById(id: number): T | null;
    add(data: T): boolean;
}