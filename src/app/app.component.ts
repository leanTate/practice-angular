import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'lean';
  age = 18;
  img = 'https://picsum.photos/200/300'
  btnDisabled = true;
  person={
    name:'lean',
    age:18,
    icon:'https://picsum.photos/200/300'
  }
  btnName = 'disable';
  toggleBtn(){
    this.btnDisabled = !this.btnDisabled;
    this.btnDisabled==false ? this.btnName='disable' : this.btnName='enable';
  }
  aumentBTN(){
    this.person.age++;
  }
  decreaseBTN(){
    this.person.age--;
  }
  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  names:string[]=['lean','jane','joe','jim'];
  nametopush:string='';
  pushName(){
    this.names.push(this.nametopush);
    this.nametopush='';
  }
  popName(index:number){
    this.names.splice(index,1);
    this.nametopush='';
  }


  products:Product[]=[
    {
      name:'product1',
      price:100,
      img:'https://picsum.photos/200/200'
    },
    {
      name:'product2',
      price:200,
      img:'https://picsum.photos/200/200'
    },
    {
      name:'product3',
      price:400,
      img:'https://picsum.photos/200/200'
    },
    {
      name:'product4',
      price:700,
      img:'https://picsum.photos/200/200'
    },
    {
      name:'product5',
      price:1000,
      img:'https://picsum.photos/200/200'
    },
  ]
  register={
    name:'',
    email:'',
    password:'',
  }
  onRegister(){
    console.log(this.register);

  }
}
