import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public sharedResource: LooseObject = {};
  private dbPath = '/vehicles';
  vehicleRef: AngularFireList<Vehicle> = null;
  constructor(private db: AngularFireDatabase) {
    this.vehicleRef = db.list(this.dbPath);
   }

   createVehicle(vehicle: Vehicle): void {
    this.vehicleRef.push(vehicle);
  }
}

interface LooseObject {
  [key: string]: any; // this will help in dynamic properties in ts.
}

