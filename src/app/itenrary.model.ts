export class Itenrary {
  constructor(
     public id: number,
     public title: string,
     public departure_date: string,
     public arrival_date: string,
     public dest: string,
     public description,
     public paths: any[]
  ) {}
}
// {
//   id: number,
//   user_id:number,
//   open: boolean,
//   origin: string,
//   departure_date: string,
//   arrival_date: string,
//   dest: string,
//   transportation: [
//     {
//       type: string,
//       price: string,
//       provider: string,
//       start_time: string,
//       end_time: string,
//     }
//   ];
//   housing: [
//     {
//       name: string,
//       location: string,
//       type: string,
//       price: number,
//     }
//   ];
//   activities: [
//     {
//       location: string,
//       type: string,
//       start_time: string,
//       end_time: string,
//     }
//   ];
// }