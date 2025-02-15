import React from "react";
import styles from "./articleBanner.module.scss";
import Image from "next/image";
import Link from "@/components/Link/Link";

const ArticleBanner: React.FC<{ img: string, title: string, text: string }> = ({img, title, text}) => {
    return <div className={styles.articleBanner}>
        <Image src={img} alt={'banner'} width={0} height={276} className={styles.bannerImg} />
        <div className={styles.textBlock}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.text}>
                {text}
            </div>
           <Link title={'Читать статью →'} className={styles.readLink} href={""} />
        </div>
    </div>
}

export default ArticleBanner

