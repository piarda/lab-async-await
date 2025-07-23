document.addEventListener("DOMContentLoaded", () => {
  const postList = document.getElementById("post-list");

  // This function displays the posts
  function displayPosts(posts) {
    posts.forEach(post => {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      h1.textContent = post.title;
      p.textContent = post.body;
      li.appendChild(h1);
      li.appendChild(p);
      postList.appendChild(li);
    });
  }
  // This async function fetches from the API and displays the posts
  async function fetchPosts() {
    try {
      const response = await
      fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error("Fetch error:", error);
      postList.innerHTML = "<li>Error loading posts</li>";
    }
  }
  // This calls the async fetch function
  fetchPosts();
});
