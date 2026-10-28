import { useState, useEffect } from "react";
import axios from "axios";

const Notice = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        setPosts(response.data);
      } catch (error) {
        console.error("게시글을 불러오지 못했습니다.", error);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.includes(search)
  );

  return (
    <main>
      <h2>공지사항</h2>

      <input
        className="search"
        type="text"
        placeholder="제목 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>{filteredPosts.length}건</p>

      <ul className="notice-list">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <span className="notice-id">{post.id}</span>
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Notice;
