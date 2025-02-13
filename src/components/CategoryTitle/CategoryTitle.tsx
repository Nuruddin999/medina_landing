import React from "react";
import styles from "./categorytitle.module.scss";
import Image from "next/image";


const CategoryTitle: React.FC<any> = ({className, item, topTitleStyle, icon}) => <div
    className={`${styles.categoryItemTitle} ${className ?? ''}`}>
    <div className={styles.titleIcon}>
        {icon && <Image alt={'icon'} src={icon} width={50} height={50}/>}
    </div>
    <div className={styles.titleBlock}>
        <div className={topTitleStyle}>{item.title}</div>
        <div className={styles.countsTitle}>
                <span
                    className={styles.articleCount}>{`${item.articleCount} рубрики`}</span><span>{`${item.categoryCount} статьи`}</span>
        </div>
    </div>
</div>

export default CategoryTitle;