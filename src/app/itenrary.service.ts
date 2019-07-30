import { Injectable } from "@angular/core";
import { Itenrary } from "./itenrary.model";
import { Subject, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';

interface ItenData {
  title: string;
  departure_date: string;
  arrival_date: string;
  dest: string;
  description;
  paths: any[];
}
@Injectable({
  providedIn: "root"
})
export class ItenraryService {
  private suggested_Itenraries: Itenrary[];
  private my_itenraries: Itenrary[] = [];
  select:number;
  //private my_itenraries = new BehaviorSubject<Itenrary[]>([]);
  viewMode = new Subject<boolean>();
  viewflag = false;
  Surpriseflag = false;
  private onChangeItenraries = new Subject<Itenrary[]>();

  constructor(private http: HttpClient) {}
  // get itenraries() {
  //   return this.my_itenraries.asObservable();
  // }
  getItenrary(iten_id: number) {
    return this.my_itenraries.filter(x => x.id == iten_id)[0];
  }
  getItenraries() {
    return this.my_itenraries;
  }
  setItenraries(itenraries: Itenrary[]) {
    this.my_itenraries = itenraries;
  }
  addEmptyItenrary(new_id: number) {
    console.log(this.my_itenraries)
    this.my_itenraries.push(new Itenrary(new_id, "", "", "", "", "", []));
    console.log(this.my_itenraries)
  }
  addIteninfo(
    iten: Itenrary,
    title: string,
    departure_date: string,
    arrival_date: string,
    dest: string,
    description: string
  ) {
    iten.title = title;
    iten.dest = dest;
    iten.departure_date = departure_date;
    iten.arrival_date = arrival_date;
    iten.description = description;
  }
  addStopDetails(
    iten: Itenrary,
    path_id: number,
    origin: string,
    arrival_date: string,
    departure_date: string
  ) {
    const path = iten.paths.filter(x => x.id == path_id)[0];
    path.origin = origin;
    path.departure_date = departure_date;
    path.arrival_date = arrival_date;
  }
  addTransportation(iten: Itenrary, path_id: number, transportation: any) {
    iten.paths
      .filter(x => x.id == path_id)[0]
      .transportation.push(transportation);
  }
  addHousing(iten: Itenrary, path_id: number, housing: any) {
    iten.paths.filter(x => x.id == path_id)[0].housing = [housing];
  }
  addActivity(iten: Itenrary, path_id: number, activity: any) {
    iten.paths.filter(x => x.id == path_id)[0].activities.push(activity);
  }
  getStopById(iten_id: number, path_id: number) {
    return this.my_itenraries
      .filter(x => x.id == iten_id)[0]
      .paths.filter(x => x.id == path_id)[0];
  }
  getSuggestedItenraries() {
    //return http response with itenraries
  }
  addStop(iten_id: number, n: number, destination: string) {
    this.my_itenraries
      .filter(x => x.id == iten_id)[0]
      .paths.push({
        id: n,
        open: false,
        origin: "Cairo",
        departure_date: "5/8/2019",
        arrival_date: "13/8/2019",
        dest: destination,
        transportation: [
          {
            type: "bus",
            price: "15 $",
            provider: "Explore",
            start_time: "11 am",
            end_time: "1 pm"
          }
        ],
        housing: [{ name: "EPIK", location: null, price: "1500 $", type: "hotel" }],
        activities: [
          { type: "lunch", location: "The Led bury", end_time: "1 pm", start_time: "3 pm" }
        ]
      });
  }

  removeStop(iten_id: number, i: number) {
    this.my_itenraries.filter(x => x.id == iten_id)[0].paths.splice(i, 1);
  }
  fetch_itenraries() {
    if (this.my_itenraries.length > 0) {
      setTimeout(() => {
        this.onChangeItenraries.next(this.my_itenraries);
      });
    } else {
      this.http
        .get<Itenrary[]>("https://tourize-f71eb.firebaseio.com/itenrary.json")
        .subscribe(
          itenraries => {
            this.my_itenraries = itenraries;
            this.onChangeItenraries.next(this.my_itenraries);
          },
          err => {}
        );
    }
    return this.onChangeItenraries;
  }
  postItenrary(iten: Itenrary) {
    //var key = "id";
    //const delete_iten = this.my_itenraries.filter(x => x.id == iten.id)[0];
    //delete delete_iten[key];
    return this.http.put(
      "https://tourize-f71eb.firebaseio.com/itenrary.json",
      this.my_itenraries
    );
  }
  
  setViewMode(mode: boolean) {
    this.viewflag = mode;
  }
  getViewMode() {
    return this.viewflag;
  }
  setSurpriseMode(mode: boolean) {
    this.Surpriseflag = mode;
  }
  getSurpriseMode() {
    return this.Surpriseflag;
  }
  getSelect(){
    return this.select;
  }
  setSelect(select:number){
    this.select = select;
  }
 
}
