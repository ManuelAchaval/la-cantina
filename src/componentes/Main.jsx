import ItemListContainer from "./itemlistcont/ItemListContainer"

const Main = (params) => {
    const {uno, dos, tres}=params;
    console.log(uno)
    console.log(dos)
    console.log(tres)

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