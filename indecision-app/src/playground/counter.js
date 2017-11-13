let count = 0;

const onPlusButtonClick = () => {
    count ++;
    render();
}

const onResetButtonClick = () => {
    count = 0;
    render();
}



const render = () => {
    var templeteTwo = (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={ onPlusButtonClick }>+1</button>
            <button onClick={ onResetButtonClick  }>Reset</button>
        </div>
    );
    ReactDOM.render(templeteTwo, appRoot);
}

render();