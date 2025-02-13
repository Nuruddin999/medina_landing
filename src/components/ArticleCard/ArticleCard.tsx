import React from "react";
import styles from "./arctilecard.module.scss"
import Link from "@/components/Link/Link";

const ArticleCard: React.FC = () => {
    return <div className={styles.articleCard}>
        <div className={styles.imgSide}>

        </div>
        <div className={styles.textBlock}>
            <div className={styles.title}>
                Полная инструкция совершения большого хаджа
            </div>
            <div className={styles.description}>
                Краткое описание о чем данная статья, чтобы было понятно о чем будет идти речь, касаемо всех аспектов
            </div>
            <Link title={`Читать статью →`} href={""} />
        </div>

    </div>
}

export default ArticleCard;