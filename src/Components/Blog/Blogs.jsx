import { Query } from "appwrite";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const HASHNODE_USERNAME = "Amitn01";

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query{
            user(username:"${HASHNODE_USERNAME}"){
              publication{
                posts(page:0){
                title
                slug
                brief
                coverImage
                }
              }
            }
          }
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok !! :: HASHNODE");
      }

      const data = await response.json();
      setBlogs(data.data.user.publication.posts);
    } catch (error) {
      setError(error.message);
      console.error("Blogs fetch error::", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="">
      {isLoading && <p>Loading Blogs...</p>}
      {error && <p>Error : {error}</p>}
      {blogs.map((blog) => {
        <div key={blog.slug}>
          {blog.coverImage && <img src={blog.coverImage} alt={blog.title} />}
          <h3>{blog.title}</h3>
          <p>{blog.brief}</p>
          <a
            href={`https://support.hashnode.com/en/articles/6420128-creating-a-personal-blog-on-hashnode${HASHNODE_USERNAME}/${blog.slug}`}
          >
            Read More
          </a>
        </div>;
      })}
    </div>
  );
}
