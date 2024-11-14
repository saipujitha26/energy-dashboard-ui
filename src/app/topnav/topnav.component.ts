import { Component } from '@angular/core';
import { EnergyDataService } from '../energy-data.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  userId!: number  ;
  userName: string = '';

  constructor(private energyDataService: EnergyDataService){

  }

  ngOnInit(){
    // this.energyDataService.getUserData(this.userId).subscribe((data: any) => {
    //   console.log('user data : ', data);
    //   this.userName = data.username;
    //   this.userId = data.id;
    // })
    const storedUserId = localStorage.getItem('userId');

    // If the value is found, parse it as a number
    if (storedUserId) {
      this.userId = Number(storedUserId); // Convert to number
    } else {
       // Set to null if not found
    }

    const storedUserName = localStorage.getItem('username');

    // If the value is found, parse it as a number
    if (storedUserName) {
      this.userName = String(storedUserName); // Convert to number
    } else {
       // Set to null if not found
    }


  }

  

}
