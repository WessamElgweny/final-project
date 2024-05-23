import { Component, OnInit } from '@angular/core';
import { AuthnService } from '../authn.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 constructor(private _AuthnService:AuthnService){}
 enableNavbar:any; 
  ngOnInit(): void{
      this._AuthnService.isLogin.subscribe({
      next:(behaviorSubValue)=>{
        this.enableNavbar=behaviorSubValue;
      }
    })
  }
 signOut(){
  this._AuthnService.signOut();
 }
}
