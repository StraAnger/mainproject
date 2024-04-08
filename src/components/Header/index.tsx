import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import Orders from "../Orders/index.tsx";
import { useAppContext } from "./../../useAppContext.tsx";

const Header: React.FC = () => {

    const { orders } = useAppContext();

    let [cartOpen, setCartOpen] = useState<boolean>(false);

    const showOrders = () => {
        let sum = 0;
        orders.forEach(el => sum += Number.parseFloat(el.price));
        return (
            <div>
                {orders.map(el => (
                    <Orders key={el.id} item={el} />
                ))}
                <p className={styles.sum}>Summary: ${new Intl.NumberFormat().format(sum)}</p>
            </div>
        );
    }

    const showNothing = () => {
        return (
            <div className={styles.emptyCart}>
                <h2>Cart is empty</h2>
            </div>
        );
    }

    return (
        <header>
            <div>
                <span className={styles.logo}>RC things</span>
                <ul className={styles.nav}>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Sign in</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen((prevCartOpen) => !prevCartOpen)} className={`${styles.cartButton} ${cartOpen ? styles.active : ''}`} />

                {cartOpen && (
                    <div className={styles.shopCart}>
                        {orders.length > 0 ? showOrders() : showNothing()}
                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
};

export default Header;