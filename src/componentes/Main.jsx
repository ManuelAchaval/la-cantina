import ItemListContainer from "./itemlistcont/ItemListContainer"
import './main.scss'


const Main = (params) => {
    const {uno, dos}=params;
    console.log(uno)
    console.log(dos)


    return (
        <main>
            <div>
                <h2>main</h2>
                <ItemListContainer/>
            </div>
        </main>
    )
}
export default Main