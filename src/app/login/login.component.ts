import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: Observable<firebase.User>;
  returnUrl: string;
  
  constructor(public afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
    this.user = afAuth.authState;
    this.afAuth.auth.onAuthStateChanged(function(user){
      if (user) {
        router.navigateByUrl('/home');
      }
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value).then(function(user){
      this.router.navigateByUrl('/home');
    }, function(error) {
      console.log("Error Login: ", error);
    });

  }
}
