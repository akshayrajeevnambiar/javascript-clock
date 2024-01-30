import { useState } from "react";

function Clock() {

    let time = new Date();
    let hours = time.getHours().toString().padStart(2, '0');
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let seconds = time.getSeconds().toString().padStart(2, '0');
    let timeOfDay = (time.getHours() >= 12) ? "PM" : "AM";
    
    const [currentHours, setCurrentHours] = useState(hours);
    const [currentMinutes, setCurrentMinutes] = useState(minutes);
    const [currentSeconds, setCurrentSeconds] = useState(seconds);
    const [currentTimeOfDay, setCurrentTimeOfDay] = useState(timeOfDay);

    const updateTime = () => {
        let time = new Date();
        let hours = time.getHours().toString().padStart(2, '0');
        let minutes = time.getMinutes().toString().padStart(2, '0');
        let seconds = time.getSeconds().toString().padStart(2, '0');
        let timeOfDay = (time.getHours() >= 12) ? "PM" : "AM";

        setCurrentHours(hours);
        setCurrentMinutes(minutes);
        setCurrentSeconds(seconds);
        setCurrentTimeOfDay(timeOfDay);
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            let clock = {'{<br/>'}
            hour: {currentHours}{",\n"}
            minute: {currentMinutes}{",\n"}
            second:{currentSeconds}{",\n"}
            period: {currentTimeOfDay}
            day:
            month:
            year:
        </div>
    );
}

export default Clock;