
/**
 * Get end time in milliseconds
 * @param date end time
 * -date in number with flag means number of that flag from now
 * -date in string represent any supported string date
 * -date in Date represent date object
 * @returns 
 */
export function msEndDate(date: number | string | Date, flag = "day") {

    if (typeof date === "number") {

        let temp = new Date()

        temp.setDate(temp.getDate() + date)

        return temp.getTime()

    }

    if (typeof date === "string") {

        return new Date(date).getTime()
    }

    return date.getTime()
}


/**
 * Get formated remaining time
 * @param end end time in milliseconds
 * @returns object of remaining days, hours, minutes, seconds and milliseconds
 */
export function timeRemaining(end: number) {

    //remaining time
    let deltaTime = end - Date.now()    

    //avoid negative value
    if (deltaTime < 0) {
        return {
            deltaTime,
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    }

    let days = approxi(deltaTime / (1000 * 60 * 60 * 24))
    let hours = approxi((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = approxi((deltaTime % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = approxi((deltaTime % (1000 * 60)) / 1000)

    return {
        deltaTime,
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds)
    }
}



/**
 * Get approximate value of a number
 * @param nbr number to approximate
 * @returns approximated value
 */
function approxi(nbr: number) {
    return Math.floor(nbr)
}

/**
 * append 0 to its input
 * @param time string or number to format
 * @returns format value in string
 */
function formatTime(time: number | string) {
    return ('0' + time).slice(-2)
}




