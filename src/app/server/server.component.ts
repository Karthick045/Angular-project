import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:white;
    }
`]
})
export class ServerComponent {
    serverId:number =70;
    serverStatus:String ='Online';
constructor(){
    this.serverStatus = Math.random()> 0.6 ? 'Online': 'Offline';
}
getColor(){
    return this.serverStatus==='Online'?'green':'red';
}

}