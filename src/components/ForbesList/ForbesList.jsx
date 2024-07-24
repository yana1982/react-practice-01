import { ForbesListItem } from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

export const ForbesList = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>
      <ul className={style.list}>
        {list.map(listItem => {
          return (
            <li className={style.item} key={listItem.id}>
              <ForbesListItem forb={listItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
