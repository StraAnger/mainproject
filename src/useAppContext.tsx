import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext<any>(null);

export const useAppContext = () => {

    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Context empty")
    }

    return context;
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [items, setItems] = useState<any[]>([]);

    const [orders, setOrders] = useState<any[]>([]);

    const [currentItems, setCurrentItems] = useState<any[]>([]);

    const [showFullItem, setShowFullItem] = useState<boolean>(false);

    const [fullItem, setFullItem] = useState<any>({});


    useEffect(() => {
        axios
            .get("http://localhost:3001/items")
            .then((responce)=>{
                setItems(responce.data);
                selectCategory("all");
                setCurrentItems(responce.data);
            })
            .catch((error)=>{
                console.log("Data load error",error);
            });
    }, []);

    const deleteOrder = (id: number) => {
        setOrders(orders.filter((el) => el.id !== id))
    }

    const addToCart = (item: any) => {
        // добавление однотипного товара не более 1 раза
        if (!orders.some((el) => el.id === item.id)) {
            setOrders([...orders, item]);
        }
    }

    const selectCategory = (category: string) => {
        if (category === "all") {
            setCurrentItems(items);
        } else {
            setCurrentItems(items.filter((el) => el.category === category));
        }
    }

    const onShowItem = (item: any) => {
        setFullItem(item);
        setShowFullItem(!showFullItem);
    }

    const contextValue = {
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setCurrentItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        deleteOrder,
        addToCart,
        selectCategory,
        onShowItem,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;