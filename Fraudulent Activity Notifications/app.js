function activityNotifications(expenditure, d) {
    const count = Array(201).fill(0);
    let notifications = 0;

   
    for (let i = 0; i < d; i++) {
        count[expenditure[i]]++;
    }

    function getMedian(count, d) {
        let sum = 0;
        if (d % 2 === 1) {
            const mid = Math.floor(d / 2) + 1;
            for (let i = 0; i < count.length; i++) {
                sum += count[i];
                if (sum >= mid) return i;
            }
        } else {
            const mid1 = Math.floor(d / 2);
            const mid2 = mid1 + 1;
            let m1 = -1, m2 = -1;
            for (let i = 0; i < count.length; i++) {
                sum += count[i];
                if (sum >= mid1 && m1 === -1) m1 = i;
                if (sum >= mid2) {
                    m2 = i;
                    break;
                }
            }
            return (m1 + m2) / 2;
        }
    }

    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(count, d);
        if (expenditure[i] >= 2 * median) notifications++;

        
        count[expenditure[i - d]]--;
        count[expenditure[i]]++;
    }

    return notifications;
}