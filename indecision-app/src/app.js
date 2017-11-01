console.log('App.js is running now ...');

//JSX - JavaScript XML

var dataItemTwo = {
    title: 'This is JSX from app.js',
    subtitle: 'This is some info',
    point1: 'Item One',
    point2: 'Item two'
};

var templete = (
    <div>
        <h1>{ dataItemTwo.title }</h1>
        <p>{ dataItemTwo.subtitle }</p>

        <ol>
        <li>{ dataItemTwo.point1 }</li>
        <li>{ dataItemTwo.point2 }</li>
        </ol>

    </div>
);

var userData = {
    name: 'Sergey Mikayelyan',
    age: '26',
    loaction: 'Seattle, Wa'
};

function getLocation(location) {
    if (location === undefined) {
        return 'Unknown';
    }
    return location;
}

var templeteTwo = (
    <div>
        <h1>Name: { userData.name }</h1>
        <p>Age: { userData.age }</p>
        <p>Loaction: { getLocation(userData.loaction) }</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templeteTwo, appRoot);