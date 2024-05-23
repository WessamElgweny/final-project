import { Component, OnInit } from '@angular/core';
import { PakyasService } from '../pakyas.service';
import { Pakyas } from '../interface/pakyas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PakyasContainer:Pakyas[] = [];
  constructor(private _PakyasService:PakyasService){}
  ngOnInit():void{
    this._PakyasService.getPakyas().subscribe({
      next:(response)=>{this.PakyasContainer=response
      },
      error:(err)=>{console.log(err)}
    })
}
}
