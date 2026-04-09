import { BehaviorSubject, retry } from "rxjs";

export class StorageService {
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    publish(value: number) {
        this.store.next(value)
    }

    private constructor() { }
    private static service: StorageService = new StorageService()
    public static create(): StorageService {
        return this.service
    }
}