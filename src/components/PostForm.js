import React, { useEffect, useState } from "react";
import PostService from "../service/PostService";

function PostForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const [post, setPost] = useState([]);

  let postService = new PostService();

  useEffect(() => {
    getAll();
  }, []);
  console.log(post);

  async function getAll() {
    setPost(await postService.getAll());
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: `linear-gradient(
        '90deg',
        '#4d0ccf',
        '#3aec49'
      )`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="table-div">
        <table ite className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {post.map((p, index) => (
              <tr key={p.id}>
                {/* <td onMouseOver={(event) => {
                                       setBook(emp),
                                           setId(emp.id)
                                   }}>{emp.id}</td> */}
                <td>{p.description}</td>
                <td>{p.date}</td>
                <td>{p.latitude}</td>
                <td>{p.longitude}</td>

                {/* <td><Button id="fireEmployee"
                                               buttonTitle="Delete Book"
                                               className="btn-danger"
                                               onClick={(event) => deleteBookById(event, emp.id) }></Button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default PostForm;
