import { Component } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  display: boolean = false;
  billInfos = [{header: 'Matter 0', body: 'Test 0'}]; 
    showDialog() {
        this.display = true;
    }

    addTab(){
        this.billInfos.push({header:'Matter ' + this.billInfos.length, body:'Test ' + this.billInfos.length});
    }
}
