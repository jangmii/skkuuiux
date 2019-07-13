const clubTab1 =document.querySelector(".club-form-tab-1"),
    btns = clubTab1.querySelectorAll(".btn"),
    inputForm = clubTab1.querySelectorAll(".form-control"),
    h4 = clubTab1.querySelector("h4"),
    p = clubTab1.querySelector("p"),
    savebtn = btns[0], 
    updatebtn = btns[1];

const clubIntro = document.querySelector(".single-course-intro"),
    clubImage = document.querySelector(".clubimg");

const clubMemvers = document.querySelector(".clubMember");


clubObj = {
    'title' : "성동일을 소개하겠습니다",
    'description' : "안녕하세요! 인문사회과학캠퍼스 제 38대 동아리연합회, 성균관대 동아리를 하나로! 성동일(成동一)입니다. 동아리연합회는 성균관대 소속 63개 중앙 동아리를 관리하고 각 동아리들의 활동의 지원하는 일을 하고 있습니다. 여러 동아리들에 관심 있는 학우들에게 어떤 동아리가 있는지 홍보하고 알리기 위해 매년 초에 중앙동아리를 소개하는 동아리 홍보 책자를 만들고 있습니다. 또한 중앙동아리원들의 화합과 발전을 위하여 중앙 동아리원들을 대상으로 동아리 대표자캠프, 동아리의 밤 등 다양한 행사를 개최합니다. 학생회관 사용이나 중앙동아리 활동 등에 대해 궁금한 점이 있으면 학생회관 401호의 문을 두드려 주세요!",
    'mainImage' : "../img/bg-img/likelion.jpg",
    'members' : {
        "동아리 회장":"이유림 경제(17)",
        "동아리 부회장":"아이린 벨벳(10)",
        "동아리 홍보부장":"아이유 카카오M(12)",
        "동아리 총무":"아이유 카카오M(12)"
    }
}

function hideForm(){ 
    inputForm[0].style="display: none";
    inputForm[1].style="display: none";
    savebtn.style="display: none";
    h4.style="display:block;"
    p.style="display:inline-block;"
    updatebtn.style="display: inline-block";
}
function showForm(){ 
    inputForm[0].value=clubObj.title;
    inputForm[1].value=clubObj.description;
    
    inputForm[0].style="display: inline-block";
    inputForm[1].style="display: inline-block";
    savebtn.style="display: inline-block";

    h4.style="display:none;"
    p.style="display:none;"
    updatebtn.style="display: none";
}
function saveClub(){
    clubObj.title=inputForm[0].value;
    clubObj.description=inputForm[1].value;
    h4.innerHTML=clubObj.title;
    p.innerHTML= clubObj.description;
    clubIntro.style="background-image: url("+clubObj.mainImage+")";
    hideForm();
}
function updateClub(){
    showForm();
}

function init(){
    showForm();
    savebtn.addEventListener("click",saveClub);
    updatebtn.addEventListener("click",updateClub);
}

init()