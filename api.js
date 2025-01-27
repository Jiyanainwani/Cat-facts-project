const apiurl = "https://catfact.ninja/fact";
const caturl= "https://api.thecatapi.com/v1/images/search";
const factpara=document.querySelector("#fact");
const btn = document.getElementById("btn");
const img = document.getElementById("img");

//this is through async await
const getfacts = async () => {
    console.log("fetching api..");
    let response = await fetch(apiurl);
    console.log( response );
    let data= await response.json(); //JSON format
    factpara.innerHTML= data.fact;
    // console.log(data.fact);
};

//through promise chaining
// function getfacts(){
//     fetch(apiurl).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factpara.innerHTML =data.fact;
//     });
// }

// getfacts();
const getimage = async ()=>{
    console.log("fetching images..");
    let response = await fetch(caturl);
    let data = await response.json();
    img.src= data[0].url ;
  }
btn.addEventListener("click",getfacts);
btn.addEventListener("click",getimage);

