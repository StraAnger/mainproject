import React from "react";
import styles from "./item.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props{
    item:any;
}

const Item:React.FC<Props>=({item})=>{

    const {addToCart, onShowItem} = useAppContext();
    
    return(
        <div className={styles.item}>
            <img src={"./images/"+item.image} onClick={()=>onShowItem(item)} alt="Error" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <b>${item.price}</b>
            <div className={styles.addToCart} onClick={()=>addToCart(item)}>Add to cart</div>
        </div>
    );
};

export default Item;