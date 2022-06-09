export default class Post {
  constructor(
    post = {
      date: "",
      description: "",
      latitude: 0,
      longitude: 0,
    }
  ) {
    this.date = post.date;
    this.description = post.description;
    this.latitude = post.endDate;
    this.longitude = post.longitude;
  }
}
