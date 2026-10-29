import styles from './MenuSub1.module.css';

const MenuSub1 = ({ menus }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tableWrap}>  {/* ← 추가 */}
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>메뉴 이름</td>
              <td>가격</td>
            </tr>
          </thead>
          <tbody>
            {menus.map((e, i) => (
              <tr key={i}>
                <td><span className={styles.idBadge}>{e.id}</span></td>  {/* ← 뱃지 */}
                <td>{e.name}</td>
                <td className={styles.price}>{e.price}</td>  {/* ← 가격 강조 */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuSub1;