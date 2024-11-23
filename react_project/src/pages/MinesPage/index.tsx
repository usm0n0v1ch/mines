
import { useGenerateMines } from "../../hooks/generateMines"
import style from "./style.module.css"


export const MinesPage = () => {
    const {mines} = useGenerateMines(10);
    const defaultBet  = 20
    function renderMines(mines:any[]){
        let listJsx =[];
        let count = 0
        for (let i = 0; i < mines.length; i++) {
            for (let j = 0; j < mines[i].length; j++) {
                listJsx.push(
                    <div className={style.mine} 
                    onClick={(e)=>{
                        if(mines[i][j].type === "mine"){
                            alert("Вы попали на мину")
                        }
                        if(mines[i][j].type === "sun"){
                            alert(defaultBet*mines[i][j].value)
                        }
                        e.currentTarget.dataset.type = mines[i][j].type;
                    }} key={count}
                    ></div>
                );
                count++
            }
        }
        return listJsx;
    }
    return (
        <div>
            <div 
            className={style.mines} 
            style={{
                gridTemplateColumns:'repeat(10,1fr)',
                gridTemplateRows:'repeat(10,1fr)',
            }}>
                {renderMines(mines)}
            </div>
            <div className={style.footer}></div>
        </div>
        
    )
}

