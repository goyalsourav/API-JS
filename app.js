console.log("Hello JS API!!");

const URL = "https://dog.ceo/api/breeds/list/all";

const getDog = async () => {
    console.log("getting data ...");
    let promise = await fetch(URL);
    console.log(promise);
    let data = await promise.json();
    console.log(data);
};

