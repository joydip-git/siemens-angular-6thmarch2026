import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    //register-components, pipes and directives ONLY
    declarations: [AppComponent],
    //register services
    providers: [],
    //register built-in and feature modules
    imports: [BrowserModule],
    //exports registered assets
    exports: [],
    //name(s) of the component(s) to be bootstrapped when the app is loaded in the browser
    bootstrap: [AppComponent]
})
export class AppModule {

}