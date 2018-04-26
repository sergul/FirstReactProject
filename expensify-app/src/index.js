import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './router/AppRouter';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, setSortByFilter, setDateFilter } from './actions/filters';

const store = configureStore();



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

const rentExpense = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 127 }));

const coctelExpense = store.dispatch(addExpense({ description: 'Coctel', amount: 300, createdAt: 300 }));

const coffeeExpense = store.dispatch(addExpense({ description: 'Coffee', amount: 150, createdAt: 126 }));

//store.dispatch(setTextFilter('Coffee'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// store.dispatch(setSortByFilter('amount'));

// store.dispatch(setDateFilter('SET_START_DATE', 125));

// store.dispatch(setDateFilter('SET_END_DATE', 3000));



ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

// HOC

// const Info = ({info}) => (
//     <div>
//         <h1>Info</h1>
//         <p>The info is: {info}</p>
//     </div>
// );

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

// const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are details"/>, document.getElementById('root'));