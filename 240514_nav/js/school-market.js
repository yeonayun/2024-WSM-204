let allData;

const showData = (data) => {
    //data하나씩 뽑아서 <article> -> .product-container의 자식으로 넣자 <- html
    const productContainerSection = document.getElementsByClassName("product-container")[0];
    
    articleString = "";

    data.forEach(element => {

       articleString += `            <article class="product-item">
                <img src="images/${element["image"]}" alt="${element.name}" class="product-image">
                <div class="product-name">${element.name}</div>
            </article>\n`;
    });

    productContainerSection.innerHTML = articleString;

}

const setData = (data) => {
    allData = data;
    showData(data);

    // //무뚝뚝.webp출력
    // console.log(data[3].image); !!!!!!!!!!!!!1 .시험문제
    // console.log(data[3]["image"]);
    // //허니버터칩 출력
    // console.log(data[9].name);
    // console.log(data[9]["name"]);
}

const getData = (() => {
    const url = 'js/data.json';
    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
});

getData();

const searchData = (query) => {
    console.log(query)
    //data하나씩 꺼내어, name이랑 query비교해서 있으면, 모아놓자

    let searchData = allData.filter((oneData) => oneData["name"].includes(query) || oneData["category"].includes(query) )
    showData(searchData);
    // data.forEach(element => {
    //     element.name.includes(query)
        
    // });
}