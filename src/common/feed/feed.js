import "./feed.scss";
import { Post } from "./post";

export class Feed {
  constructor(mountPoint = document.querySelector("body")) {
    this.mountPoint = mountPoint;
    this.posts = [];
    this.init();
  }

  init() {
    this.render();
    this.fetchPosts();
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("feed");
    this.wrapper.textContent = "Loading...";
    this.mountPoint.appendChild(this.wrapper);
  }

  renderPosts() {
    this.posts.forEach(post => {
      console.log(post);
      new Post(this.wrapper, post);
    });
  }

  fetchPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/posts");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("Loaded");
        this.posts = JSON.parse(xhr.response);
        console.log(this.posts);
        this.renderPosts();
        // const resp = JSON.parse(xhr.response);
        // resp.forEach(item => {
        //   console.log(item);
        //   const div = document.createElement("div");
        //   div.textContent = item.title;
        //   body.appendChild(div);
        // });
      }
    };
  }
}
