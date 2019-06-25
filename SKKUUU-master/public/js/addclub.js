const clubRow = document.querySelector(".clubrow"),
savebtn = document.querySelector("#savebtn");

let clubs = [];

function createClub( name, description, id){
const clubObj = {
    name,
    description,
    id
}
clubs.push(clubObj);
console.log(clubs);
var div1 = document.createElement("div");
div1.className="col-12 col-lg-6";

var div2 = document.createElement("div");
div2.className="single-blog-area mb-100 wow fadeInUp";
// div2.data-wow-delay = "500ms";

var img = document.createElement("img");
img.src=`../img/theme-img/a${id}.jpg`;
div2.appendChild(img);

var div3 = document.createElement("div");
div3.className="blog-content";

var a = document.createElement("a");
a.href="#";
a.className="blog-headline";

var h = document.createElement("h4");
h.appendChild(document.createTextNode(name));
a.appendChild(h);
div3.appendChild(a);

var div4 = document.createElement("div");
div4.className = "meta d-flex align-items-center";

var a2 = document.createElement("a");
a2.appendChild(document.createTextNode("Seoul/Suwon"));
div4.appendChild(a2);

var a3 = document.createElement("a");
a3.appendChild(document.createTextNode("Art & Culture"));
div4.appendChild(a3);
div3.appendChild(div4);

var p = document.createElement("p");
p.appendChild(document.createTextNode(clubObj.description));
div3.appendChild(p);
div2.appendChild(div3);
div1.appendChild(div2);
clubRow.appendChild(div1);
}

function handleClick(){
const inputClubName = document.querySelector("#club-name");
const inputClubSul = document.querySelector("#club-sul");
createClub(inputClubName.value, inputClubSul.value, clubs.length+1);
}

function init(){

createClub("Hogwarts","성균관대학교 중앙 마술동아리",1);
createClub("SKKUO","SKKU Orchestra",2);
savebtn.addEventListener("click",handleClick);

}

init();


// for( let i=0; i< clubs.length; i++){
//     console.log(clubs[i].name);
// }

// <!-- Single Blog Area -->
// <div class="col-12 col-lg-6">
//     <div class="single-blog-area mb-100 wow fadeInUp" data-wow-delay="500ms">
//         <img src="../img/theme-img/a2.jpg" alt="">
//         <!-- Blog Content -->
//         <div class="blog-content">
//             <a href="#" class="blog-headline">
//                 <h4>SKKUO</h4>
//             </a>
//             <div class="meta d-flex align-items-center">
//                 <a href="#">Seoul/Suwon</a>
//                 <span><i class="fa fa-circle" aria-hidden="true"></i></span>
//                 <a href="#">Art &amp; Culture</a>
//             </div>
//             <p>SKKU Orchestra<br>.</p>
//         </div>
//     </div>
// </div>