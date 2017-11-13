console.log('App.js is running now ...');
const appRoot = document.getElementById('app');

const appData = {
    title: 'My Application',
    subtitle: 'My App Subtitle',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option) {
        const optionItem = {id: appData.options.length, value: option};
        appData.options.push(optionItem);
        event.target.elements.option.value = '';

        render();
    }
}

const onRemoveAllButtonClick = (event) => {
    appData.options = [];
    render();
}

const getOptionList = (list) => {
    const options = list.map((item) => {
        console.log(item.id);
        return <li key={item.id}>{ item.value }</li>;
    });

    const content = (
        <ol>
            {options}
        </ol>
    );

    return content;
};

const onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * appData.options.length));
    if (appData.options.length > 0) {
        const option = appData.options[randomNum].value;
        alert('selected option is = ' + option);
    }
};

const render = () => {
    const uiTemplete = (
        <div>
            <h1>{ appData.title }</h1>
            {appData.subtitle && <p>{ appData.subtitle }</p>}

            { getOptionList(appData.options) }

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button disabled={appData.options.length === 0} onClick={onMakeDecision}>What Should I do ?</button>
                <button onClick={onRemoveAllButtonClick}>Remove All</button>
            </form>
        </div>
    );

    ReactDOM.render(uiTemplete, appRoot);
};

render();