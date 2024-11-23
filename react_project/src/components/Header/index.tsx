
import styles from "./style.module.css";
import {ListLink} from "../../UI/ListLink";

type HeaderProps = {
    valute: string;
    count: number;
}

export const Header = ({ valute, count }: HeaderProps) => {
    const options =[
        {value:'/', label:'Home'},
        {value:'/cases', label:'Cases'},
        {value:'/mines', label:'Mines'},
    ];
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__links}>
                    <ListLink options={options} placeholder={""}/>
                </div>
                <div>
                    <span>{count}</span>
                    <span>{valute}</span>
                </div>
            </header>
        </>
    )
}