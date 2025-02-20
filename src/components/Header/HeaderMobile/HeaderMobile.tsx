import React from "react";
import styles from "./headermob.module.scss";
import Image from "next/image";

const HeaderMobile: React.FC = () => {
    return <div className={styles.mainWrapperMob}>
        <div className={styles.menuMobItems}>
            <Image src={"/search.svg"} alt={"search"} width={16.67} height={16.67} />
            <Image src={"/Logo.svg"} alt={"medina logo"} width={48} height={40} />
            <div className={styles.burger}>
                <div className={styles.burgerItem}></div>
                <div className={styles.burgerItem}></div>
                <div className={styles.burgerItem}></div>
            </div>
        </div>
    </div>
}

export default HeaderMobile;