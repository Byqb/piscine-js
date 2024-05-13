function addWeek(strDate) {
    if (!strDate instanceof Date) {
        return "Invalid Date Type!";
    }
    const days = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday',
        7: 'secondMonday',
        8: 'secondTuesday',
        9: 'secondWednesday',
        10: 'secondThursday',
        11: 'secondFriday',
        12: 'secondSaturday',
        13: 'secondSunday'
    };
    let usrDay = strDate.getTime() + 62135596800000;
    return days[(usrDay/86400000)%14];
}

function timeTravel(strDate) {
    return new Date(
        strDate.date.setHours(
            strDate.hour,
            strDate.minute,
            strDate.second
        )
    );
}