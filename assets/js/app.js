function dateTime() {
    document.querySelector("#currentDay").innerHTML = dayjs().format('MMM d dddd, h:mmA');
}


dateTime();