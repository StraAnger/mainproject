import React from "react";
import Item from "../Item/index.tsx";
import styles from "./items.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

const Items:React.FC=()=> {

    const { currentItems } = useAppContext();

    return (
        <main className={styles.item}>
            {currentItems.map((el:any) => (
                <Item key={el.id} item={el} />
            ))}
        </main>
    );
};

export default Items;