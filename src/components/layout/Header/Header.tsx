"use client"
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";
import HeaderDesktop from "@/components/Header/HeaderDesktop/HeaderDesktop";
import {usePlatformMobile} from "@/hooks";
import HeaderMobile from "@/components/Header/HeaderMobile/HeaderMobile";


const Header: React.FC = () => {
    const isMobile = usePlatformMobile()
    return (<header className={styles.header}>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop/>}
    </header>)
}
export default Header