import { useState, useEffect } from "react";
import Post from "./Post";
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    async function fetchData() {
      try {
        const res = await  fetch(API_URL)
        const post = await res.json()
        setPosts(post)
            } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])
//  функция useEffect возвращает либо undefind либо другую функцию и не может возвращать промис.async всегда возвращает промис.Поэтому встраиваем в useEffect другую функцию с async .

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false)); // finally вызывается в любом случае, после then или catch
  // }, []); функция useEffect возвращает либо undefind либо другую функцию и не может возвращать промис. В данном случает т.к. нет return то возврат undefind.

  
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
        <h1>Post</h1>
        <hr />
        {isLoading?<h1>Loading...</h1>:posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
   
    </>
  );
}

export default Posts;
