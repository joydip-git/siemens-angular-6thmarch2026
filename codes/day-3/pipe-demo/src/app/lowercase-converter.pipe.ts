import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'lowercaseconverter'
})
export class LowerCaseConverterPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        const converted = value.toLocaleLowerCase()
        const arg = args[0]
        if (arg !== '')
            return `${arg}: ${converted}`
        else
            return converted
    }
}