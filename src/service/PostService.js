const BASE_URL = "http://localhost:5000/api/Posts";

export default class PostService {
  getAll = async () => {
    return fetch(BASE_URL + "/getAll", {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());
  };
}
