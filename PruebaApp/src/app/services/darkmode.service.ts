import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DarkmodeService {

    constructor() { }

    checkDarkMode() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        console.log(prefersDark);
    }
}
