import styles from './InventorySub1.module.css';

const InventorySub1 = ({stocks}) => {

    return (
        <div className={styles.container}>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    stocks.map((e,i)=>(
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.stock}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}

export default InventorySub1;
