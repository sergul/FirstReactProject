'use strict';

console.log('App.js is running now ...');

//JSX - JavaScript XML

var dataItemTwo = {
    title: 'This is JSX from app.js',
    subtitle: 'This is some info',
    point1: 'Item One',
    point2: 'Item two'
};

var templete = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        dataItemTwo.title
    ),
    React.createElement(
        'p',
        null,
        dataItemTwo.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            dataItemTwo.point1
        ),
        React.createElement(
            'li',
            null,
            dataItemTwo.point2
        )
    )
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

var templeteTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        userData.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userData.age
    ),
    React.createElement(
        'p',
        null,
        'Loaction: ',
        getLocation(userData.loaction)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templeteTwo, appRoot);
