import React, { useEffect, useState } from "react";
import Input from "./Input";
import "react-phone-input-2/lib/style.css";
import PostService from "../service/PostService";
import Post from "../Model/Post";

export default function Modal() {
  let postService = new PostService();

  let [post, setPost] = useState(new Post());

  useEffect(() => {}, []);

  // function handleClick(e){

  //   let value=e.target.value
  //   setData(o => [...o,value]);
  //   setEmplooyes(value);

  //   console.log(data)
  // }

  function addProject(event) {
    postService.addProject({ ...post }).then((response) => {
      let p = [...post];
      p.push({ ...post });
      setPost(p);
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    let newPost = { ...post };
    newPost[name] = value;
    setPost(newPost);
  }

  return (
    <div className="modal-container">
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      {/* <button onClick={closeModal}>close</button> */}

      <Input
        id="description"
        value={post.description}
        handleChange={handleInputChange}
        type="text"
        label="Description"
      ></Input>
      <Input
        id="date"
        value={post.date}
        handleChange={handleInputChange}
        type="date"
        label="Date"
      ></Input>
      <Input
        value={post.latitude}
        label="Latitude"
        type="text"
        id="latitude"
        handleChange={handleInputChange}
      />
      <Input
        value={post.longitude}
        label="Longtitude"
        type="text"
        id="longitude"
        handleChange={handleInputChange}
      />
      {/* <DatePicker className="date" onChange={d=> setEndDate(d)} value={endDate} /> */}

      {/* <Input id="phone" name="phone" label="Tel" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required /> */}

      <div className="addButtonDiv">
        <button onClick={addProject} className="project-button">
          Save
        </button>
      </div>
    </div>
  );
}
