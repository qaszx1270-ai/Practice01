import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useState } from 'react';
import Admin from './pages/Admin/Admin';
import DashBoard from './pages/DashBoard/DashBoard';
import OrdersIndex from './pages/Orders/OrdersIndex';
import OrdersRead from './pages/Orders/OrdersRead';
import OrdersCreate from './pages/Orders/OrdersCreate';
import OrdersUpdate from './pages/Orders/OrdersUpdate';
import OrdersDelete from './pages/Orders/OrdersDelete';
import StaffsIndex from './pages/Staffs/StaffsIndex';
import StaffsRead from './pages/Staffs/StaffsRead';
import StaffsCreate from './pages/Staffs/StaffsCreate';
import StaffsUpdate from './pages/Staffs/StaffsUpdate';
import StaffsDelete from './pages/Staffs/StaffsDelete';
import MenuIndex from './pages/MenuPage/MenuIndex';
import MenuSub1 from './pages/MenuPage/MenuSub/MenuSub1';
import MenuSub2 from './pages/MenuPage/MenuSub/MenuSub2';
import MenuSub3 from './pages/MenuPage/MenuSub/MenuSub3';
import MenuSub4 from './pages/MenuPage/MenuSub/MenuSub4';
import InventoryIndex from './pages/InventoryPage/InventoryIndex';
import InventorySub1 from './pages/InventoryPage/InventorySub/InventorySub1';
import InventorySub2 from './pages/InventoryPage/InventorySub/InventorySub2';
import InventorySub3 from './pages/InventoryPage/InventorySub/InventorySub3';
import InventorySub4 from './pages/InventoryPage/InventorySub/InventorySub4';

function App() {
  const [menus, setMenus] = useState([
    { id: 1, name: '아메리카노', price: 4500 },
    { id: 2, name: '카페라떼', price: 5000 },
    { id: 3, name: '바닐라라떼', price: 5500 },
    { id: 4, name: '딸기스무디', price: 6000 },
    { id: 5, name: '치즈케이크', price: 6500 },
  ]);

  const [stocks, setStocks] = useState([
    { id: 1, name: '원두 200g', stock: 25 },
    { id: 2, name: '바닐라 시럽 1L', stock: 10 },
    { id: 3, name: '종이컵 1박스', stock: 500 },
    { id: 4, name: '우유 1L', stock: 30 },
  ]);

  const [orders, setOrders] = useState([
    { id: 101, item: '아메리카노 2잔', total: 9000 },
    { id: 102, item: '카페라떼 1잔', total: 5000 },
    { id: 103, item: '치즈케이크 1개', total: 6500 },
    { id: 104, item: '바닐라라떼 1잔', total: 5500 },
    { id: 105, item: '딸기스무디 2잔', total: 12000 },
    { id: 106, item: '아메리카노 1잔, 카페라떼 1잔', total: 9500 },
  ]);

  const [staffs, setStaffs] = useState([
    { id: 1, name: '김민승', phone: '010-1234-5678' },
    { id: 2, name: '장윤아', phone: '010-9876-5432' },
  ]);

  return (
    <Routes>
      <Route index element={<Login />}></Route>
      {/* 로그인 */}
      <Route path="/admin" element={<Admin />}>
        <Route index element={<DashBoard menus={menus} stocks={stocks} orders={orders} staffs={staffs}/>}></Route>
        {/* 대시보드 */}
        <Route path="menus" element={<MenuIndex />}>
          <Route path="read" element={<MenuSub1 menus={menus} />}></Route>
          <Route path="create" element={<MenuSub2 setMenus={setMenus} />}></Route>
          <Route path="update" element={<MenuSub3 menus={menus} setMenus={setMenus} />}></Route>
          <Route path="delete" element={<MenuSub4 menus={menus} setMenus={setMenus} />}></Route>
        </Route>
        {/* 메뉴관리 */}
        <Route path="inventory" element={<InventoryIndex />}>
          <Route path="read" element={<InventorySub1 stocks={stocks} />}></Route>
          <Route path="create" element={<InventorySub2 setStocks={setStocks} />}></Route>
          <Route path="update" element={<InventorySub3 stock={stocks}  setStocks={setStocks} />}></Route>
          <Route path="delete" element={<InventorySub4 setStocks={setStocks} />}></Route>
        </Route>
        {/* 재고관리 */}
        <Route path="orders" element={<OrdersIndex />}>
          <Route path="read" element={<OrdersRead orders={orders}/>}></Route>
          <Route path="create" element={<OrdersCreate setOrders={setOrders} />}></Route>
          <Route path="update" element={<OrdersUpdate setOrders={setOrders} />}></Route>
          <Route path="delete" element={<OrdersDelete setOrders={setOrders} />}></Route>
        </Route>
        {/* 주문관리 */}
        <Route path="staffs" element={<StaffsIndex />}>
          <Route path="read" element={<StaffsRead staffs={staffs}/>}></Route>
          <Route path="create" element={<StaffsCreate setStaffs={setStaffs} />}></Route>
          <Route path="update" element={<StaffsUpdate setStaffs={setStaffs} />}></Route>
          <Route path="delete" element={<StaffsDelete setStaffs={setStaffs} />}></Route>
        </Route>
        {/* 직원관리 */}
      </Route>
      {/* 매장관리시스템 */}
    </Routes>
  )
}

export default App
