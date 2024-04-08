import React from "react";
import styles from "./ShowFullItem.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

const ShowFullItem: React.FC = () => {

    const { fullItem, onShowItem, addToCart } = useAppContext();

    return (
        <div className={styles.fullItem}>
            <div>
                <img src={"./images/" + fullItem.image} onClick={() => onShowItem(fullItem)} alt="Error" />
                <h2>{fullItem.title}</h2>
                <p>{fullItem.description}</p>
                <b>${fullItem.price}</b>
                <div className={styles.addToCart} onClick={() => addToCart(fullItem)}>Add to cart</div>
            </div>
        </div>
    );
};

export default ShowFullItem;