import { useState } from "react";

const InventorySub3 = ({stocks,setStocks}) => {

    const [update, setUpdate] = useState({
        id: "",
        name: "",
        stock: ""
    });

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setUpdate(prev => ({ ...prev, [name]: value }));
    }

    const Add = () => {
    setStocks(prev => prev.map((e) => {
        if (e.id == update.id) {
            return {
                ...e,
                name: update.name,
                stock: Number(update.stock)
            };
        } else {
            return e;
        }
    }));

    setUpdate({
        id: "",
        name: "",
        stock: ""
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
                name="stock"
                placeholder="수정할 stock 입력"
                onChange={handleUpdate}
                value={update.stock}
            /><br />

            <button onClick={Add}>저장</button>
        </div>
    );
};

export default InventorySub3;
