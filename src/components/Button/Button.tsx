import React from "react";
import styles from "./Button.module.scss";


const Button: React.FC<any> = ({children, className,...props}) => <div className={`${styles.customButton} ${className ?? ''}`}>
    {children}
</div>

export default Button;