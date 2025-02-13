import React from "react";
import styles from "./search.module.scss"
import Image from "next/image";

const SearchBar: React.FC<any> = ({value, setValue}) => {

    return<div className={styles.searchContainer}>

        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Поиск по библиотеке..."/>
        <div className={styles.icon}>
            <Image src={'/searchIcon.svg'} alt={'значек поиска'} width={20} height={20}/>
        </div>
    </div>
}

export default SearchBar;