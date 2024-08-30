const section= document.querySelector("section"); 
const blogs=JSON.parse(localStorage.getItem("blogs")) || [];
const body = document.querySelector("body");
const theme =document.querySelector("#theme");
let image =document.querySelector("#image");
function loadBlogs(){
    section.textContent="";

    /*
         <article>
                 <h3>blog title</h3>
                 <hr>
                 <p class="sentence">this is first blog</p>

                 <p>Posted By: <span>Matt</span></p>
            </article>
*/

//  first iteration
section.innerHTML=`<article>
                 <h3>${blogs[0].title}</h3>
                 <hr>
                 <p class="sentence">${blogs[0].content}</p>

                 <p>Posted By: <span>${blogs[0].username}</span></p>
            </article>`

 section.innerHTML +=`<article>
                 <h3>${blogs[1].title}</h3>
                 <hr>
                 <p class="sentence">${blogs[1].content}</p>

                 <p>Posted By: <span>${blogs[1].username}</span></p>
            </article>`

//   let article = document.createElement("article");
//   let h3 = document.createElement("h3");
//   let hr= document.createElement("hr");
//   let pSentence= document.createElement("p");
//   let pPost= document.createElement("p");
//   h3.textContent=blogs[0].title;
//   pSentence.classList.add("sentence");
//   pSentence.textContent=blogs[0].content;
//   pPost.innerHTML="Posted By: <span>" + blogs[0].username+"</span>";
//   article.appendChild(h3);
//   article.appendChild(hr);
//   article.appendChild(pSentence);
//   article.appendChild( pPost);
//   section.appendChild(article);


// second iteration

// article = document.createElement("article");
// h3 = document.createElement("h3");
// hr= document.createElement("hr");
// pSentence= document.createElement("p");
// pPost= document.createElement("p");
// h3.textContent=blogs[1].title;
// pSentence.classList.add("sentence");
// pSentence.textContent=blogs[1].content;
// pPost.innerHTML="Posted By: <span>" + blogs[1].username+"</span>";
// article.appendChild(h3);
// article.appendChild(hr);
// article.appendChild(pSentence);
// article.appendChild( pPost);
// section.appendChild(article);




// const body = document.querySelector("body");
// const theme =document.querySelector("#theme");
// let image =document.querySelector("#image");

let mode = "light";

// Listen for a click event on toggle switch
theme.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    body.setAttribute("class", "dark");
    image.src=image.dataset.moon;
    image.dataset.status="dark"
  }
  // If mode is light, apply dark background
  else {
    mode = "light";
    body.setAttribute("class", "light");
    image.src=image.dataset.sun;
    image.dataset.status="dark"
  }
});

}

loadBlogs();