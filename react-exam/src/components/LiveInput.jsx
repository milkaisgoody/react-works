import { useState } from "react";

const LiveInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트를 입력하세요"
      />

      <p>입력값: {text}</p>
    </div>
  );
}

export default LiveInput;
