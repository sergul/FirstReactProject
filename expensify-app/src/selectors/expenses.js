// Get visible exppenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((ex1, ex2) => {
        let targetProp = 'createdAt';
        if (sortBy === 'amount') {
            targetProp = 'amount';
        }
        return ex2[targetProp] > ex1[targetProp] ? -1 : 1;
    });
}