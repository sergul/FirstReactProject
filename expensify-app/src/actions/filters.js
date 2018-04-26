// SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE_OR_AMOUNT

export const setSortByFilter = (sortBy = '') => ({
    type: 'SORT_BY',
    sortBy
});

// SET_START_DATE and SET_END_DATE

export const setDateFilter = (type = '', date = '') => ({
    type,
    date
});