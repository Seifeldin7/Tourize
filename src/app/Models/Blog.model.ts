export class Blog {
  public userId: number;
  public title: string;
  public description: string;
  public imageUrl: string;
  public username: string;

  constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    username: string
  ) {
    this.title = title;
    this.userId = id;
    this.description = description;
    this.imageUrl = imageUrl;
    this.username = username;
  }
}
