import React from "react";
import styles from "./button.module.scss";


const Button: React.FC<any> = ({children, className}) => <div className={`${styles.customButton} ${className ?? ''}`}>
    {children}
</div>

export default Button;