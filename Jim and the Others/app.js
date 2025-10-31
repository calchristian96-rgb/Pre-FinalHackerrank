function jimOrders(orders) {
    const customerData = orders.map((order, index) => {
        const completionTime = order[0] + order[1];
        const customerId = index + 1;
        return {
            id: customerId,
            time: completionTime,
        };
    });

    customerData.sort((a, b) => {
        if (a.time !== b.time) {
            return a.time - b.time;
        }
        return a.id - b.id;
    });

    return customerData.map(data => data.id);
}