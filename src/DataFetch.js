import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataFetch() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://mockaccommodation.tranzgate.com.ng/api/rooms?hallId=mariere&seed=4"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>This is the API</h1>
      <ul>
        {post.map((post) => (
          <li key={post.hallId}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
