import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";


const Header: React.FC = () => {
    return (<header className={styles.header}>
        <div className={styles.mainWrapper}>
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
                    <Image src={'/Vector.svg'} alt={''} width={16} height={16}/>
                </Button>
                <Button>
                    Начать учиться
                </Button>
            </div>
        </div>
    </header>)
}
export default Header