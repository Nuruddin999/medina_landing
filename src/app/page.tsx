"use client"

import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import {useState} from "react";
import {mockSidebarGroup} from "@/mockData";
import CategoryTitle from "@/components/CategoryTitle/CategoryTitle";
import Button from "@/components/Button/Button";
import ArticleBanner from "@/components/ArticleBanner/ArticleBanner";
import GridBanner from "@/components/GridBanner/GridBanner";

export default function Home() {
    const itemsTest = Array.from({length: 38}, (_, index) => index);
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className={styles.mainPage}>
            <div className={styles.searchBlock}>
                <SearchBar value={searchValue} setValue={setSearchValue}/>
            </div>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <ArticleBanner img={'/IslamAppear.png'} title={'История возникновения Ислама'}
                                   text={'Краткое описание о чем данная статья чтобы было понятно о чем будет идти речь, касаемо всех аспектов этого большого события'}/>
                    {itemsTest.map((item, index) => index === 6 || (((index - 6) % 7) === 0) ? <div>
                        <GridBanner title={'Таджвид: искусство правильного чтения Корана'}
                                    text={'Краткое описание о чем данная статья чтобы было понятно о чем будет идти речь, касаемо всех аспектов этого большого события'}
                                    labelText={'Онлайн занятия'}
                                    imgUrl={'/Tajweed.png'}
                        />
                    </div> : <div className={styles.cardContainer}>
                        <ArticleCard/>
                    </div>)}
                    <div className={styles.moreButton}>
                        <Button className={styles.showMore}>Показать еще</Button>
                    </div>
                </div>
                <div className={styles.sideBarSide}>
                    <div className={styles.sideBar}>
                        <CategoryTitle
                            item={{title: "Все рубрики", articleCount: 92, categoryCount: 750}}
                            className={styles.categoryItemTitle}
                            topTitleStyle={styles.topTitleStyle}
                            icon={'/faith.svg'}
                        />
                        <div className={styles.itemsBlock}>
                            {mockSidebarGroup.map((item) =>
                                <div>
                                    <CategoryTitle item={item} key={item.title} icon={'/arabic.svg'}/>
                                    {item.categories.map((itemCategory, index) =>
                                        <div key={itemCategory + index} className={styles.categoryName}>
                                            {itemCategory}
                                        </div>)}
                                </div>)}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
