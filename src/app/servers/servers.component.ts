import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  .fifthlog{
    color:white;
  }
  `]
})
export class ServersComponent implements OnInit {

   allowNewServer= false;
   serverCreationStatus = "No server was created";
   serverCreated =false;
   updatedServerName='Test Server';
   servers =['Test Server', 'Test Server 2'];
   displayStatus= true;
   buttonClickArray=[];
   clickCount : number = 0;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    } ,2000);
   }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.updatedServerName);
    this.serverCreationStatus='Server Successfully created, Server name is '+ this.updatedServerName;
  }
  onUpdatedServerName(event){
    this.updatedServerName=event.target.value;
  }
  onButtonClick(event){
    this.clickCount++;
    this.buttonClickArray.push(new Date());
    this.displayStatus= !this.displayStatus;
  }
  getBackGround(){
      return this.clickCount>4 ?'blue' : 'transparent';                    
  }
  ngOnInit() {
  }


}
