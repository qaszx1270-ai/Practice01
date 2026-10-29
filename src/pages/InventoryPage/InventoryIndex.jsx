import { useNavigate,Outlet } from "react-router-dom";

import styles from './InventoryIndex.module.css';


const InventoryIndex = () => {

  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div onClick={()=> {navi("/admin/inventory/read")}}>목록(Read)</div>
        <div onClick={()=> {navi("/admin/inventory/create")}}>등록(Create)</div>
        <div onClick={()=> {navi("/admin/inventory/update")}}>수정(Update)</div>
        <div onClick={()=> {navi("/admin/inventory/delete")}}>삭제(Delete)</div>
      </div>
      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  )
}

export default InventoryIndex;