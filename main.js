const currentMonth = 7,
      dateFuture = new Date(currentMonth +' 25, 2021 17:40:00').getTime(),
      day = document.querySelector('.day'),
      hour = document.querySelector('.hour'),
      minute = document.querySelector('.minute'),
      second = document.querySelector('.second');


let countTime = function(){
    const date = new Date(),
        dayDate = new Date(dateFuture);
        let numberOfDay = new Date(
            2021,
            date.getMonth() +1,
            0
        ).getDate();
        let allDays = numberOfDay - date.getDate(),
        countAllDays = null,
        dayResult = dayDate.getDate() - date.getDate(),
        hourResult = date.getHours(),
        hourChange = 24 - hourResult + dayDate.getHours(),
        hourCheck = dayDate.getHours() - date.getHours(),
        minuteResult = date.getMinutes() +1,
        minuteChange = 60 - minuteResult + dayDate.getMinutes(),
        minuteCheck = dayDate.getMinutes() - minuteResult,
        secondsResult = date.getSeconds();

    function countOfAllDays(){
        if(currentMonth - (date.getMonth() +1) == 1){
            for(let i = (date.getMonth() +2); i <= currentMonth; i++){
                allDays += dayDate.getDate();
                day.textContent = allDays;
            }
        }else if((currentMonth - (date.getMonth() +1)) > 1){
            for(let i = (date.getMonth() +2); i < currentMonth; i++){
                let DayNextMonth = new Date(
                    2021,
                    i,
                    0
                ).getDate();
                countAllDays += DayNextMonth;
            }
            allDays += countAllDays + dayDate.getDate();
        }
        return allDays;
    }
    
    if(currentMonth == (date.getMonth() +1)){
        if(dayResult > 1){
            if(dayDate.getHours() > date.getHours()){
                day.textContent = (dayResult < 10) ? '0' + dayResult : dayResult;
            }else if(dayDate.getHours() == date.getHours()){
                if(dayDate.getMinutes() > date.getMinutes()){
                    day.textContent = (dayResult < 10) ? '0' + dayResult : dayResult;
                }else{
                    day.textContent = ((dayResult -1) < 10) ? '0' + (dayResult -1) : dayResult -1;
                }
            }else{
                day.textContent = ((dayResult -1) < 10) ? '0' + (dayResult -1) : dayResult -1;
            }
             
        }else if(dayResult == 1){
            if(dayDate.getHours() > date.getHours()){
                day.textContent = '0' + 1; 
            }else if(dayDate.getHours() == date.getHours()){
                if(dayDate.getMinutes() > date.getMinutes()){
                    day.textContent = '0' + 1;
                }else{
                    day.textContent = '00';
                }
            }else{
             day.textContent = '00';
            }
        }else if(dayResult <= 0){
            day.textContent = '00';
        }
    }else if(currentMonth > (date.getMonth() +1)){
        if(dayDate.getHours() > date.getHours()){
            day.textContent = countOfAllDays();
        }else if(dayDate.getHours() == date.getHours()){
            if(dayDate.getMinutes() > date.getMinutes()){
                
                day.textContent = countOfAllDays();
            }else{
                day.textContent = countOfAllDays() -1;
            }
        }else{
            day.textContent = countOfAllDays() -1;
        }
    }
    
    if(dayDate.getMinutes() > date.getMinutes()){
        minute.textContent = (minuteCheck < 10) ? '0' + minuteCheck : minuteCheck;

        if(dayDate.getHours() > date.getHours()){
            hour.textContent = (hourCheck < 10) ? '0' + hourCheck : hourCheck;
        }else if(dayDate.getHours() == date.getHours()){
            hour.textContent = '00';
        }else{
            hour.textContent = (hourChange < 10) ? '0' + hourChange : hourChange;
        }
    }else{
        minute.textContent = (minuteChange < 10) ? '0' + minuteChange : minuteChange;
        if(dayDate.getHours() > date.getHours()){
            hour.textContent = ((hourCheck -1) < 10) ? '0' + (hourCheck -1) : hourCheck -1;
        }else if(dayDate.getHours() == date.getHours()){
            hour.textContent = (hourChange -1 < 10) ? '0' + (hourChange -1) : hourChange -1;
        }else{
            hour.textContent = (hourChange -1 < 10) ? '0' + (hourChange -1) : hourChange -1;
        }
    }

    if(60 - secondsResult === 60){
        second.textContent = '00';
    }else{
        second.textContent = ((60 - secondsResult) < 10) ? '0' + (60 - secondsResult) : 60 - secondsResult;
    }

    if(dateFuture <= date.getTime()){
        clearInterval(counter);
        day.textContent = '00';
        hour.textContent = '00';
        minute.textContent = '00';
        second.textContent = '00';
    }
}
countTime();
let counter = setInterval(countTime, 200);
