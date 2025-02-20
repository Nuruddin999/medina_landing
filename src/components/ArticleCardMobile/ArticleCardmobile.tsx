import React from "react";
import Label from "@/components/Label/Label";
import styles from "./articlecardmob.module.scss"
import Image from "next/image";
import Button from "@/components/Button/Button";

const ArticleCardMobile: React.FC<{ labelText: string, imgUrl: string, alt?: string, title: string, text: string }> =
    ({
         labelText,
         imgUrl,
         alt,
         title = 'Таджвид: искусство правильного чтения Корана',
         text,
     }) => {
        return <div className={styles.cardMob}>
            <Label labelText={labelText}/>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.imgContainer}>
                <Image src={imgUrl} alt={alt || ''} width={0} height={0} className={styles.img}/>
            </div>
            <div className={styles.descriptionMob}>
                {text}
            </div>
            <Button className={styles.moremob}>
                Узнать больше
            </Button>
        </div>
    }

export default ArticleCardMobile;