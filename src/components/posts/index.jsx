import { PostCard } from "../postCard"

export const Posts = ({ posts }) => (
    <>
        {posts.map((post) => (
            <PostCard 
              key={post.id}
              cover={post.cover}
              title={post.title}
              body={post.body}
            />
        ))}
    </>
)