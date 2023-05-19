import { Component } from '@angular/core';


@Component({
    selector: 'site-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [
    ]
})
export default class HomePage {
    public handleTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
