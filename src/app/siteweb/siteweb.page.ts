import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siteweb',
  templateUrl: './siteweb.page.html',
  styleUrls: ['./siteweb.page.scss'],
})
export class SitewebPage implements OnInit {
  map="0"
  nom=""
  type=""
  niveau=""
  auccun=false
  constructor() {

   }

  ngOnInit() {

  }

  ChangeNom(n){
    this.nom=n ;
    this.changeMap();
  }
  ChangeType(t){
    this.type=t ;
    this.changeMap();
  }
  ChangeNiveau(n){

    this.niveau=n ;
    this.changeMap();
  }


  changeMap(){
    console.log(this.nom+' '+this.niveau+' '+this.type)

    if ((this.nom=='Circuit Entre Terre et Mer') && (this.type=='cyclables') && (this.niveau=='Medium')){
      this.map="1"
 this.auccun=false;
    }
    else 
     if (this.nom=='Circuit Entre Terre et Mer' && this.type=='pédestres' && this.niveau=='Medium'){
      this.map="2"
 this.auccun=false;
    }
    
else {

  this.auccun=true;
  this.map="0"

}
  }
  }
