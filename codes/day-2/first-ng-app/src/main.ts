import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";

const platform: PlatformRef = platformBrowser()

const promise = platform
  .bootstrapModule(AppModule)

promise
  .then(
    function (data: NgModuleRef<AppModule>) {
      console.log(data.instance);
    }
  )
  .catch(
    function (err) {
      console.log(err);
    }
  )