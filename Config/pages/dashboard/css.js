
const css = 
`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800;900&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --capigreen: #87b344;
    --capypasta: #c4e477;
    --murky-water: #f2fbeb;
    --glistening-moon: #171219;
}

.container {
    display: grid;
    gap: 10px;
    height: 100vh;
    width: 100vw;
    grid-template-rows: 40px 1fr 1fr 1fr;
    grid-template-columns: 200px 1fr 1fr 1fr;
    grid-template-areas:
        "sideMenu topBar topBar topBar"
        "sideMenu content content content"
        "sideMenu content content content"
        "SideMenu content content content"
        ;
}

.sideMenu {
    height: 100%;
    grid-area: sideMenu;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.topBox {
    display: flex;
    align-items: center;
}

.topBox img {
    max-width: 20%;
    align-items: center;
}

.optBox {
    align-items: center;
    justify-content: end;
}
.optBox ul li {
    list-style-type: none;
    padding: 10px;
}

.botBox {
    align-items: flex-end;
    justify-content: flex-end;
}

.botBox ul li {
    list-style-type: none;
    padding: 10px;
}

.topBar {
    display: flex;
    justify-content: space-around;
    grid-area: topBar;
}

.topBar .search-area {
    display: flex;
    padding: 3%;
    border-radius: 5px;
    width: 215px;
    background: var(--capypasta);
    color: white;
}

.topBar .search-area > input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
}

.content {
    grid-area: content;
    display: flex;
}

`

module.exports = css