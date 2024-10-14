cookies = [
    {
    cookieName: "Chocolate Chip",
    calories: "120",
    price: "2.0",
    },
    {
    cookieName: "Pecan",
    calories: "115",
    price: "2.5",
    },
    {
    cookieName: "White Chocolate",
    calories: "125",
    price: "1.5",
    },
    {
    cookieName: "Peanut Butter",
    calories: "150",
    price: "2.7",
    },
    {
    cookieName: "Sugar",
    calories: "175",
    price: "3.0"
    } 
]

const crud = () => {
    let cruds = document.querySelector("#crudInput").value;
    let cookieInQuestion;
    switch (cruds) {
    case "C":
        createACookie();
        break;
    case "R":
        readACookie();
        break;
    case "U":
        cookieInQuestion = findCookie();
        alert (cookieInQuestion);
        console.log(cookieInQuestion);
        updateACake(cookieInQuesion);
        break;
    case "D":
        cookieInQuestion = findCookie();
        deleteACookie(cookieInQuestion);
        break;
    }
};

const createACookie = () => {
    let name = prompt("Cookie Name?");
    let cals = prompt("Cookie Calories?");
    let cost = prompt("Cookie Price?");
    cookies.push({
        cookieName: name,
        calories: parseFloat(cals),
        price : parseFloat(cost),
    });
    listCookies();
    console.log(cookies);
};

const listCookies = () => {

}

