import React from "react";
import styles from "./gridbanner.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";

const GridBanner: React.FC<any> = ({title,text, labelText,imgUrl}) => {
    return <div className={styles.gridBanner}>
        <div className={styles.leftBlock}>
          <Label labelText={labelText} />
            <div className={styles.title}><span>{title}</span></div>
            <div className={styles.text}><span>{text}</span></div>
            <Button className={styles.moreButton}>Узнать подробнее</Button>
        </div>
        <Image src={imgUrl || '/'} alt={'banner image'} width={0} height={0} className={styles.imgBlock} />
    </div>
}


export default GridBanner;