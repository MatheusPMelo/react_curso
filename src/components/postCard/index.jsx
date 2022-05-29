import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div  className="post-content">
    <img src={cover} alt={title} />
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);
