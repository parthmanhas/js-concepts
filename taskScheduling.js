let schedules = [
    {"id": "a", "dependencies": ["b", "c"]},
    {"id": "b", "dependencies": ["d"]},
    {"id": "c", "dependencies": ["e"]},
    {"id": "d", "dependencies": []},
    {"id": "e", "dependencies": ["f"]},
    {"id": "f", "dependencies": []}
]

function handleSchedule(id) {
    const schedule = schedules.filter(schedule => schedule.id === id)[0];
    console.log(schedule)
    if(schedule.dependencies.length === 0) {
        console.log(`schedule with id: ${id} completed`);
        return true;
    }

    schedule.dependencies.forEach(dependency => {
        let tSchedule = schedules.filter(schedule => schedule.id === dependency)[0];
        const status = handleSchedule(dependency);
        if(status) {
            schedule.dependencies.filter(id => id !== dependency);
        }
    });
    console.log(`schedule with id: ${id} completed`);
}

handleSchedule("a");