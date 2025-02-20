import React from "react";
import styles from "./headerdesck.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";

const HeaderDesktop:React.FC=()=> {
    return <div className={styles.mainWrapper}>
        <div className={styles.logo}>
            <Image src={'/Logo.svg'} alt={''} width={64} height={56}/>
        </div>
        <div className={styles.menuItems}>
            <a href="/">Академия</a>
            <a href="/">Арабский язык</a>
            <a href="/">Новости</a>
            <a href="/">Поддержать проект</a>
        </div>
        <div className={styles.buttons}>
            <Button className={styles.loginButton}>
                <span>Войти</span>
                <Image src={'/search.svg'} alt={''} width={16} height={16}/>
            </Button>
            <Button>
                Начать учиться
            </Button>
        </div>
    </div>
}

export default HeaderDesktop;