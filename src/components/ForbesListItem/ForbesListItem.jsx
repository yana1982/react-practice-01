import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css';

export const ForbesListItem = ({ forb }) => {
  return (
    <>
      <img className={style.avatar} src={forb.avatar} alt={forb.name} />
      <h3 className={style.title}>{forb.name}</h3>
      <span className={style.capital}>
        {forb.capital} <BiDollarCircle color="#2196f3" size={22} />
        {forb.isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};
