import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  title='title';
  informationToChild = 'Este texto viene desde el padre hacia el hijo';
  informationFromChild = '...aqui va a llegar la info del hijo...';

  changeParentInformation(){
    this.informationToChild = 'Acabo de modificarlo desde un boton'
  }

  manageChildInformation( text:string ){
    this.informationFromChild = text;
  }


}
