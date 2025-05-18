let  src="https://surjeet-food-ordering-system.netlify.app/img/Group%204.png";
  
function solve(){
    document.getElementsByClassName('hero-img')[0].style.display="none";
fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
.then((res) => res.json()) // res.json() returns a Promise
.then((data) => {

   
  const container = document.getElementById('dish');
   
console.log("value of data", data);
 data.map((item)=>{
 
 
  const div= document.createElement('div');
   
  div.innerHTML=  `
  <img src="${item.imgSrc}"   style="width:205px; height:115px;  border-radius:10px;margin:10px;">
   
  
   
`;
const div2=document.createElement('div');
const div3 =document.createElement('div');
div3.innerHTML=`<h3 style="color:white;margin:10px;">${item.name}</h3>
  <h3 style="color:white;margin:10px;">$${item.price} /-</h3>`
  const div4 = document.createElement('div');
  div4.innerHTML=` <img src="${src}" style="width:40px; height:40px;cursor:pointer;">`
  div2.appendChild(div3);
  div2.appendChild(div4);
  div2.style.cssText="display:flex;justify-content: space-between; margin:10px;"
  div.appendChild(div2);

  


 
  
  div.setAttribute("class","card")
   
  container.appendChild(div);
  
   

})


 
})
.catch((err) => {
console.log("err message", err);
});

}


solve();