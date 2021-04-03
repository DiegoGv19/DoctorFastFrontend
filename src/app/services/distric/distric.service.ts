import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DistricService {

  private districsList: Array<string> = new Array<string>();
  
  constructor() { 
    this.districsList.push("Chorrillos","Callao")
  }
  public getDistricsList(): Array<string>
  {
    return this.districsList;
  }
}
