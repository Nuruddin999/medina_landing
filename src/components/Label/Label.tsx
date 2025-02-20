import React from "react";
import styles from "./label.module.scss";

const Label:React.FC<{labelText?:string}>=({labelText})=> {
    return <div className={styles.label}>
        {labelText && labelText}
    </div>
}

export default Label