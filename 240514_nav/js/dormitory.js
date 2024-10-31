let allData;        // 초기 설정에 필요한 모든 데이터 : 세탁기, 시간, 호실
let weeklyReservation;      // 미리 정해진 요일별 예약 데이터

// selection-item 요소 가져오기
const selectionItemDivs = document.getElementsByClassName("selection-item");

// 4개의 페이지 요소 가져오기
const calendarDiv = document.getElementById("calendar");
const selectionWashingmachineTimeDiv = document.getElementById("selection-washingmachine-time");
const selectionRoomNameDiv = document.querySelector("#selection-room-name");
const boardDiv = document.querySelector("#board");

// 4개 한번에 다 모으기
const pageDivs = [calendarDiv, selectionWashingmachineTimeDiv, selectionRoomNameDiv, boardDiv];
// console.log(pageDivs);

// 초기 데이터 가져오기 .allData, weekly-reservation.json
const initData = () => {
    const getAllData = () => {
        const url = 'js/allData.json';
        fetch(url)
        .then(response => response.json())
        .then(data => allData = data)
        .catch(error => console.log(error.message));
    }

    const getWeeklyReservation = async () => {
        const url = 'js/weekly-reservation.json';
        try {
            const response = await fetch(url);
            const data = await response.json();
            weeklyReservation = data;
        } catch (error) {
            console.log(error.message);
        }
    }
    
    getAllData();
    getWeeklyReservation();
}

const setPage = (page) => {
    // clear selection
    for (const selectionItemDiv of selectionItemDivs) {
        selectionItemDiv.classList.remove("select-menu");
    }

    // selection 칠하기
    if (page != 4){     // 세탁기 예약 현황표는 selection이 없음
        selectionItemDivs[page-1].classList.add("select-menu");
    }

    // clear pageDiv
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none";
    });
    
    // show pageDiv 1
    pageDivs[page-1].style.display = "block";
}

initData();
setPage(1);