import style from '../StatisticsItem/Statistics.module.css';
// import stats from '../../data/stats.json';
export const StatisticsItem = ({ stat }) => {
  return (
    <>
      {/* Тут повинна бути іконка */}
      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};

{
  /* <Icon size={30} color={'blue'} />
      <span className={style.counter}>{statsItem.total}</span>
      <p className={style.text}>{statsItem.title}</p> */
}
