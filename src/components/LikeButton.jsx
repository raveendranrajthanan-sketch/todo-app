
import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes((previousLikes) => previousLikes + 1);
  }

  return (
    <div>
      <h3>Like Button</h3>

      <p>Likes: {likes}</p>

      <button onClick={handleLike}>
        ❤️ Like
      </button>
    </div>
  );
}

export default LikeButton;
