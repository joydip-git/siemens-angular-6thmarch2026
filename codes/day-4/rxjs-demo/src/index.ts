import { Observable, Observer, Subscription } from "rxjs";
import { StorageService } from "./storage-service";

//consumer
const consumerStorage = StorageService.create()
const consumerObservable: Observable<number> = consumerStorage.storeObservable

const numberObserver: Observer<number> = {
    next: (data) => console.log('recived ' + data),
    error: (err) => console.log(err),
    complete: () => console.log('completed...')
}
const subscription: Subscription = consumerObservable
    .subscribe(numberObserver)

setTimeout(
    () => {
        subscription.unsubscribe()
    },
    10000
)


//provider
const providerStorage = StorageService.create()

let value = 1
setInterval(
    () => {
        console.log('publishing...' + value);
        providerStorage.publish(value)
        ++value
    },
    1000
)

