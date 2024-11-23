
import style from "./style.module.css"
interface Props{
    type: "success"|"error"|"warning",
    text:any
}

export const Button = ({type, text}:Props) => {

    return (
        <button className={style[type]}>{text}</button>
    )
}
