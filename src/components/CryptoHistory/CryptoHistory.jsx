import style from './CryptoHistory.module.css';
import { intlFormat } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const result = intlFormat(new Date(item.date), {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
          });
          return (
            <tr className={style.tr} key={item.id}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{item.price}</td>
              <td className={style.td}>{item.amount}</td>
              <td className={style.td}>{result} hours ago</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
