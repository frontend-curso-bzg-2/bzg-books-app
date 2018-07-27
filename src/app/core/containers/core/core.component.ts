import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../../alerts/services/messages.service";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.styl']
})
export class CoreComponent implements OnInit {

  stateAside: string;

  constructor(private alertService:MessagesService) { }

  ngOnInit() {

    window.addEventListener('online',  this.updateIndicator.bind(this));
  	window.addEventListener('offline', this.updateIndicator.bind(this));
  }

  closeAside(state){
    this.stateAside = state;
  }

  updateIndicator (event) {
  	if(event.type == "online") {  		
      let msg = "Se ha establecido conexión de red.";
      let type = "success";      
  		this.alertService.message(msg,type);

  	}else if(event.type == "offline"){  		
      let msg = "Se ha perdido la conexión de red.";      
      let type = "error"; 
  		this.alertService.message(msg, type);
  	}
  }
}
