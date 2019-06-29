const clubRow = document.querySelector(".clubrow"),
savebtn = document.querySelector("#savebtn");

let clubs = [];

function createClub( name, description, id, img ){
const clubObj = {
    name,
    description,
    id,
    img
}
clubs.push(clubObj);
//console.log(clubs);
var div1 = document.createElement("div");
div1.className="col-12 col-lg-6";

var div2 = document.createElement("div");
div2.className="single-blog-area mb-100 wow fadeInUp";
// div2.data-wow-delay = "500ms"; //에러남ㅠㅠ

var imgg = document.createElement("img");
if( id<=2 )
    imgg.src=`../img/theme-img/a${id}.jpg`; //이미 있는거
else
    imgg.src=img;

div2.appendChild(imgg);

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

var span = document.createElement("span");
// var i = document.createElement("i");
// i.className="fa fa-circle";
// i.aria-hidden ="true";
// span.appendChild(i);
div4.appendChild(span);

var a3 = document.createElement("a");
a3.appendChild(document.createTextNode("Art & Culture"));
div4.appendChild(a3);
div3.appendChild(div4);

var p = document.createElement("p");
p.appendChild(document.createTextNode(description));
div3.appendChild(p);
div2.appendChild(div3);
div1.appendChild(div2);
clubRow.appendChild(div1);
}

function handleClick(){
const inputClubName = document.querySelector("#club-name");
const inputClubSul = document.querySelector("#club-sul");
const inputClubImg = document.querySelector("#club-img");
createClub(inputClubName.value, inputClubSul.value, clubs.length+1, window.URL.createObjectURL(inputClubImg.files[0]));
}

function init(){
// var eximg = NEW image;
savebtn.addEventListener("click",handleClick);
createClub("Hogwarts","성균관대학교 중앙 마술동아리",1,`../img/theme-img/a1.jpg`);
createClub("SKKUO","SKKU Orchestra",2,`../img/theme-img/a2.jpg`);

}

init();
