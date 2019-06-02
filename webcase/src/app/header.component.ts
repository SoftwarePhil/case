import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "header-comp",
  templateUrl: './template/header.component.html',
  styleUrls: ['./template/app.component.css']
})

export class HeaderComponent implements OnInit{
  title = 'webcase';

  @Input() header: String
  
  ngOnInit(){

  }

  survey(){
    
  }
}
