import React from "react";
import "./Post.css";

const Post = React.forwardRef(({ name, image }, ref) => {
  const postBody = (
    <>
    <div className="card">

       <p className="post__name">Name: {name}</p>

      <div className="post__img ">
        <img src={image} alt="img" />
      </div> 
    </div>
    </>
  );

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});

export default Post;
