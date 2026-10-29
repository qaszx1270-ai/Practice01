import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styles from './MenuIndex.module.css';



const MenuIndex = () => {
  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div onClick={() => navi("/admin/menus/read")}>목록(Read)</div>
        <div onClick={() => navi("/admin/menus/create")}>등록(Create)</div>
        <div onClick={() => navi("/admin/menus/update")}>수정(Update)</div>
        <div onClick={() => navi("/admin/menus/delete")}>삭제(Delete)</div>
      </div>
      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  )
}

export default MenuIndex;