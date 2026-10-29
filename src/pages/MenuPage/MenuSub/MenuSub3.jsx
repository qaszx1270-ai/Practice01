import { useState } from "react";

const MenuSub3 = ({menus,setMenus}) => {

    const [update, setUpdate] = useState({
        id: "",
        name: "",
        price: ""
    });

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setUpdate(prev => ({ ...prev, [name]: value }));
    }

    const Add = () => {
        setMenus(prev => prev.map((e) => {
            if (e.id == update.id) {
                return {
                    ...e,
                    name: update.name,
                    price: Number(update.price)
                };
            } else {
                return e;
            }
    }));

    setUpdate({
        id: "",
        name: "",
        price: ""
    });
}
    return (
        <div>
            <input
                type="text"
                name="id"
                placeholder="수정할 id 입력"
                onChange={handleUpdate}
                value={update.id}
            /><br />

            <input
                type="text"
                name="name"
                placeholder="수정할 name 입력"
                onChange={handleUpdate}
                value={update.name}
            /><br />

            <input
                type="text"
                name="price"
                placeholder="수정할 price 입력"
                onChange={handleUpdate}
                value={update.price}
            /><br />

            <button onClick={Add}>저장</button>
        </div>
    );
};

export default MenuSub3;
