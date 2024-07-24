import styles from './BlogCard.module.css';
import { formatDistanceToNow } from 'date-fns';

export const BlogCard = ({
  poster,
  tag,
  title,
  discription,
  name,
  avatar,
  postedAt,
}) => {
  const result = formatDistanceToNow(new Date(postedAt));
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img className={styles.cardPoster} src={poster} alt={poster} />
        </div>
        <div className={styles.cardBody}>
          <span className={styles.tag}>{tag}</span>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardText}>{discription}</p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.userBox}>
            <img className={styles.avatar} src={avatar} alt={name} />
            <div>
              <h3 className={styles.userName}>{name}</h3>
              <small className={styles.date}>{result} ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
