interface IBaseRepository<T> {
    get(id: number | string): T
    getAll(): T[]
    insert(obj: T): boolean
    update(id: number | string, obj: T): boolean
}

export class BaseRepository<T> implements IBaseRepository<T>{
    get(id: string | number): T {
        throw new Error("Method not implemented.");
    }
    getAll(): T[] {
        throw new Error("Method not implemented.");
    }
    insert(obj: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(id: string | number, obj: T): boolean {
        throw new Error("Method not implemented.");
    }

}