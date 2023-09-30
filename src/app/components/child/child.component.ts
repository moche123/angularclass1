import { Component, OnChanges, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() informationReceivedFromParent = '';
  @Output() sendToParentFromChild = new EventEmitter();
  textToSendToParent = 'Hello from Child to Parent';

  constructor(  ){
    console.log('Este es el constructor');
  } //! INYECTAR DEPENDENCIAS
  
  ngOnChanges(){ //! SE EJECUTA CADA VEZ QUE CAMBIA EL VALOR DEL INPUT
    console.log('Este es el OnChanges');
  }

  ngOnInit(){
    console.log('Este es el oninit');
  }

  sendToParent(){
    this.sendToParentFromChild.emit(this.textToSendToParent)
  }
  
  ngOnDestroy(){
    console.log('Se destruye el componente');
  }
}
