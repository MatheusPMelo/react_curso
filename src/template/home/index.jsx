import "./styles.css";

import { Component } from "react";

import {loadPosts} from '../../utils/load-posts';
import { Posts } from "../../components/posts";
import { Button } from "../../components/button";


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  };


  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state

    const nextPage = page + postsPerPage;

    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPost)

    this.setState({ posts, page: nextPage})


  }


  render() {
    const { posts , page, postsPerPage , allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <div className="App">
          <Posts posts = { posts } />
        </div>
        <Button 
          text="Load More Posts" 
          onClick = {this.loadMorePosts}
          disabled = {noMorePosts}
        />
      </section>
    );
  }
}

export default Home;
