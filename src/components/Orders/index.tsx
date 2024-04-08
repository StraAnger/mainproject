import React from "react";
import styles from "./Orders.module.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props {
    item: any;
}

const Orders: React.FC<Props> = ({ item }) => {

    const { deleteOrder } = useAppContext();

    return (
        <div className={styles.item}>
            <img src={"./images/" + item.image} alt="Error" />
            <h2>{item.title}</h2>
            <b>${item.price}</b>
            <TiDeleteOutline onClick={() => deleteOrder(item.id)} className={styles.deleteIcon} />
        </div>
    );
};

export default Orders;