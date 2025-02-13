import React from "react";
import styles from "./link.module.scss";

const Link:React.FC<{title:string,className?:string, href:string}>=({title,className,href})=> {
    return <a className={`${styles.link} ${className ?? ''}`} href={'#'}>
        {title}
    </a>
}

export default Link;