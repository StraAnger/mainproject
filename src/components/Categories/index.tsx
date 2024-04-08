import React from "react";
import styles from "./Categories.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

interface Category {
    key: string;
    name: string;
}

const Categories: React.FC = () => {

    const { selectCategory } = useAppContext();

    const categories:Category[] = [
        {
            key: "all",
            name: "All",

        },
        {
            key: "cars",
            name: "Cars",

        },
        {
            key: "helicopters",
            name: "Helicopters",

        },
        {
            key: "quads",
            name: "Quads",

        },
        {
            key: "radios",
            name: "Radios",

        },
    ];

    return (
        <div className={styles.categories}>
            {categories.map(el => (
                <div key={el.key} onClick={() => selectCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
};

export default Categories;