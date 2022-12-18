import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Utente } from 'src/app/model/utente';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  utente:Utente = {username:"", password:"", token:""}
  errormessage:string = ""

  destroy$:Subject<Boolean> = new Subject()


  constructor(private _router:Router, private _authService:AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

  login(utenteForm:NgForm){
    if(utenteForm.valid){
      this._authService.login(utenteForm.value).pipe(
        takeUntil(this.destroy$)
      ).subscribe(res =>{
        this._authService.setUserLogged(res);
        this._router.navigate(["welcome"])
      })
    }else{
      this._router.navigate(["auth/login"])
    }
  }

}
