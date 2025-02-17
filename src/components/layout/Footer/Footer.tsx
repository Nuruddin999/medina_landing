import React from "react";
import styles from "@/components/layout/Footer/footer.module.scss";
import Image from "next/image";


const Footer: React.FC = () => {
    return (<footer className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.about}>
                <Image src={'/Logo.svg'} alt={'logo'} width={96} height={88} className={styles.footerLogo}/>
                <div>
                    © 2023, Академия Медина
                </div>
                <div>
                    <a>Политика конфиденциальности</a>
                </div>
                <div>
                    <a> Что-то еще по документам</a>
                </div>
            </div>
            <div className={styles.academy}>
                <div className={styles.academyTitle}>
                    Заголовок
                </div>
                <a>
                    Академия
                </a>
                <a>
                    Арабский язык
                </a>
                <a>
                    Новости
                </a>
                <a>
                    Поддержать проект
                </a>
            </div>
            <div className={styles.academy}>
                <div className={styles.academyTitle}>
                    Заголовок
                </div>
                <a>
                    Библиотека
                </a>
                <a>
                    Вебинары
                </a>
                <a>
                    Публицисты
                </a>
                <a>
                    Вопрос ответ
                </a>
                <a>
                    Аттестат
                </a>
            </div>
            <div className={styles.social}>
                <div>
                    Социальные сети
                </div>
                <div className={styles.mediaIcons}>
                    <Image src={'/vk.svg'} alt={'vk'} width={32} height={32}/>
                    <Image src={'/Telega.svg'} alt={'telega'} width={34} height={34}/>
                    <Image src={'/Whatsapp.png'} alt={'vk'} width={34} height={34}/>
                </div>
            </div>
            <div className={styles.social}>
                <div>
                    Скачать приложение
                </div>
                <div className={styles.stores}>
                    <div>
                        <Image src={'/Google play.svg'} alt={'google play'} width={148} height={52}/>
                    </div>
                    <div>
                        <Image src={'/App_Store.png'} alt={'app store'} width={148} height={52}/>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}
export default Footer