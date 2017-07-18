import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate {

 // redirectUrl;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // Function to check if user is authorized to view route
  canActivate(){
      
   // router: ActivatedRouteSnapshot,
   // state: RouterStateSnapshot
 // ){
    // Check if user is logge din
    if (this.authService.loggedIn()) {
     this.router.navigate(['/']);
      return false;
    } else {
      //this.redirectUrl = state.url; // Grab previous urul
  
      return true; // Return false: user not authorized to view page
    }
  }
}