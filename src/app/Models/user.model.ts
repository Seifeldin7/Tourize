export class User{

  id: number;
  email: string;
  displayName: string;
  photoURL: string;
  city: string;

  constructor(id: number, email: string, displayName: string, photoURL: string, city: string){
    this.id=id;
    this.email=email;
    this.displayName=displayName;
    this.photoURL=photoURL;
    this.city=city;
  }
}
