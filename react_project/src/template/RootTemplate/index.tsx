import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import style from "./style.module.css"

export const RootTemplate =()=>{
    return (
        <main className={style.root}>
            <Header valute="BTC" count={100}/>
            <Outlet/>
        </main>
    )
}


