
import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);

  return (
    <div>
      <p>좋아요{like}</p>
      <button onClick={() => setLike(like + 1)}>
            👍 
      </button>
    </div>
  );
}

export default LikeButton;
