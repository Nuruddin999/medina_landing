import React from "react";
import styles from "./gridbanner.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";

const GridBanner: React.FC<any> = ({title,text, labelText,imgUrl}) => {
    return <div className={styles.gridBanner}>
        <div className={styles.leftBlock}>
            <div className={styles.label}>
                {labelText}
            </div>
            <div className={styles.title}><span>{title}</span></div>
            <div className={styles.text}><span>{text}</span></div>
            <Button className={styles.moreButton}>Узнать подробнее</Button>
        </div>
        <Image src={imgUrl || '/'} alt={'banner image'} width={0} height={332} className={styles.imgBlock} />
    </div>
}


export default GridBanner;