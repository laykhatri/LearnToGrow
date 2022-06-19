import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
  }

  @Input() isUserLoggedIn!:boolean;

  LogoutUser()
  {
    this._dataService.logout();
  }
}
