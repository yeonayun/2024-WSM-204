//달력
const calendarContainerDiv = document.querySelector("#calendar-container");

//현재 날짜 구하자
let currentDate = new Date();

const setCalendarHeader = (date) => {
    //연도 구하자
    const year = date.getFullYear();
    //달 구하자
    const month = date.getMonth();

    titleString = `${year}년 ${month + 1}월`;
    const calendarHeaderH1 = document.querySelector("#calendar-header h1");
    calendarHeaderH1.innerHTML = titleString;
}

const changeMonth = (delta) => {
    currentDate.setMonth(currentDate.getMonth() + delta);
    setCalendarHeader(currentDate);
    setCalendar(currentDate);
}

//이전 달 버튼 이벤트 처리하자
const prevMonthButton = document.getElementById('prev-month');
prevMonthButton.addEventListener("click", () => changeMonth(-1)); // .addEventListner("click", console.log('이전 달'))하면 안 돼. console.log()함수 실행한 결과를 클릭했을 때 실행하는 거야. 즉 아무일도 안 함

//다음 달 버튼 이벤트 처리하자
const nextMonthButton = document.querySelector("#next-month");
nextMonthButton.onclick = () => changeMonth(1);

//일 구하자
const setCalendar = (date) => {
    console.log(date);
    const year = date.getFullYear();
    const month = date.getMonth();

//첫 날의 요일 구하자: 이전 달 뒷날짜 쓰기 위하여
    const firstDay = new Date(year, month, 1).getDay(); //0:일요일, 6:토요일
    console.log(firstDay);

//마지막 날짜 구하자: 요일 구하기 위하여
    const lastDate = new Date(year, month + 1, 0) //실제 마지막 날짜만 구하려면 lastDate.getDate()
    console.log(lastDate.getDate());

//마지막 날의 요일 구하자: 다음 달 앞 날짜 쓰기 위하여
    const lastDay = lastDate.getDay();
    console.log(lastDay);

//일월화수목금토
    // const weekNameString = `<div class = "item week-name">일</div>
    //     <div class = "item week-name">월</div>
    //     <div class = "item week-name">화</div>
    //     <div class = "item week-name">수</div>
    //     <div class = "item week-name">목</div>
    //     <div class = "item week-name">금</div>
    //     <div class = "item week-name">토</div>`;

        let weekNameString = "";
        const weekNames = "일월화수목금토";
        const weekNamesArray = weekNames.split(""); //["일", "월", "화", "수", "목", "금", "토"]
        weekNamesArray.forEach((weekName) => {
            weekNameString += `<div class = "item week-name">${weekName}</div>`;
        })
        calendarContainerDiv.innerHTML = weekNameString;

//이전 달 뒷날짜 구하자
//0~이번 달 1일의 요일 -1까지 이전 달 마지막 날짜 - 이번 달 1일의 요일 + 1(시작날짜)부터 +1 해서 쓰자

//이번 달 날짜들 쓰자: 1~30: 1~lastDate.getDate()
// let dateString = "";
// for (let date = 1; date <= lastDate.getDate(); date++) {
//     dateString += `<div class = "item">${date}</div>`;
// }
//     calendarContainerDiv.innerHTML += dateString;

//div 요소 만들자, class에 item 넣자, text에 날짜 넣자. calendarContainer에 자식으로 붙이자
for (let date = 1; date <= lastDate.getDate(); date++){
    let currentMonthDateDiv = document.createElement("div"); // <div></div>
    currentMonthDateDiv.className = "item"; // <div class = "item"></div>
    currentMonthDateDiv.textContent = date; // <div class = "item"> 1 </div>
    calendarContainerDiv.appendChild(currentMonthDateDiv); // <div id = "calendar-container"><div class = "item">1</div></div>
}

//다음 달 앞날짜 구하자
//이번 달2~6까지 1부터 차례대로 날짜 쓰자
}

setCalendarHeader(currentDate);
setCalendar(currentDate);