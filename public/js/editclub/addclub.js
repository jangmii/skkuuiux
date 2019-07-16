const clubRow = document.querySelector(".clubrow"),
savebtn = document.querySelector("#savebtn"),
deletebtn = document.querySelector(".deletebtn");

let clubs = [];

function createClub( name, description, id, img ){
const clubObj = {
    name,
    description,
    id,
    img
}
clubs.push(clubObj);

var div1 = document.createElement("div");
div1.className="col-12 col-lg-6";

var div2 = document.createElement("div");
div2.className="single-blog-area mb-100 wow fadeInUp";
 div2.dataWowDelay = "500ms"; 

var i2 = document.createElement("i");
i2.className=("updatebtn fas fa-pen");
i2.style="margin: 3% 0 0 90%";
i2.setAttribute('onclick','window.location.href="../single-course11.html"');
div2.appendChild(i2);

var i = document.createElement("i");
i.className=("deletebtn fas fa-times");
i.style="margin: 3% 0 0 3%";
i.addEventListener("click",deleteClub);
div2.appendChild(i);

var imgg = document.createElement("img");
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
var i = document.createElement("i");
i.className="fa fa-circle";
i.ariaHidden ="true";
span.appendChild(i);
div4.appendChild(span);

var a3 = document.createElement("a");
a3.appendChild(document.createTextNode("Art & Culture"));
div4.appendChild(a3);
div3.appendChild(div4);

var p = document.createElement("p");
p.appendChild(document.createTextNode(description));
p.style="display: inline-block;";
div3.appendChild(p);

var button3 = document.createElement("button");
button3.type="button";
button3.className="btn btn-outline-success";
button3.style="maring-left:20%; display: inline-block;";
button3.appendChild(document.createTextNode("MESSAGE"));
div3.appendChild(button3);

div2.appendChild(div3);
div1.appendChild(div2);
div1.id = id;
clubRow.appendChild(div1);
}

function handleClick(){
    const inputClubName = document.querySelector("#club-name");
    const inputClubSul = document.querySelector("#club-sul");
    const inputClubImg = document.querySelector("#club-img");
    createClub(inputClubName.value, inputClubSul.value, clubs.length+1, window.URL.createObjectURL(inputClubImg.files[0]));
}

function deleteClub(event){
    const btn = event.target;
    const parent = btn.parentNode.parentNode;
    clubRow.removeChild(parent);
    const cleanClubs = clubs.filter(function(club){
        return club.id !== parseInt(parent.id);
    });
    clubs = cleanClubs;
}


function init(){

createClub("Hogwarts","성균관대학교 중앙 마술동아리",1,`../img/theme-img/a1.jpg`);
createClub("SKKUO","SKKU Orchestra",2,`../img/theme-img/a2.jpg`);
savebtn.addEventListener("click",handleClick);
deletebtn.addEventListener("click",deleteClub);
// updatebtn.addEventListener("click",updateClub);
}

init();
