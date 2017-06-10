import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 1;
    serverStatus: string = 'offline';

    constructor() {
        this.serverId = Math.floor(Math.random() * 5001);
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";

    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
