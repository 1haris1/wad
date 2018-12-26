var profiles = [
    {
        name: "Muhammad Ali Jinnah",
        bMonth: "December",
        bDate: 25,
        bYear: 1876,
        title: "Founder Of Pakistan",
        imgSrc: "images/muhammad_ali.jpg",
        commentsArray: []
    },
    {
        name: "Imran Khan",
        bMonth: "October",
        bDate: 5,
        bYear: 1952,
        title: "Prime Minister Of Pakistan",
        imgSrc: "images/imran_khan.jpg",
        commentsArray: []
    },
    {
        name: "Hashir Umar",
        bMonth: "March",
        bDate: 19,
        bYear: 1997,
        title: "Student",
        imgSrc: "images/dummy_male.jpg",
        commentsArray: []
    },
];

var CurrentIndex = 0;

//Question 1
function  display() {
    var dpId = document.getElementById("dp");
    var nameId = document.getElementById("name");
    var dobId = document.getElementById("dob");
    var positionId = document.getElementById("position");

    dpId.src = profiles[CurrentIndex].imgSrc;
    nameId.innerText = profiles[CurrentIndex].name;
    dobId.innerHTML = "<b>Born: </b>" + profiles[CurrentIndex].bMonth + " " + profiles[CurrentIndex].bDate + ", " + profiles[CurrentIndex].bYear;
    positionId.innerHTML = "<em>" + profiles[CurrentIndex].title + "</em>"
    dp.src = profiles[CurrentIndex].imgSrc;

    viewComments();
}

function nextProfile() {

    if(CurrentIndex < profiles.length - 1) {
        CurrentIndex++;
    }
   else
        CurrentIndex = 0;

    display();
}

function prevProfile() {

    if(CurrentIndex > 0) {
        CurrentIndex--;
    }
    else
        CurrentIndex = profiles.length - 1;

    display();
}

//Question 2
function viewComments()
{
    var comments = document.getElementById("comment-list");
    comments.innerText = "";

    for (var i = profiles[CurrentIndex].commentsArray.length - 1; i >= 0 ; i--) {
        var createdElement =  "<div class='comment'>"+ profiles[CurrentIndex].commentsArray[i] +"</div>";
        comments.innerHTML += createdElement;
        //createdElement.classList.add("comment");
    }
}

function share() {

    var msg = document.getElementById("error");
    msg.style.display = "none";

    var commentId = document.getElementById("comment-area");
    var commentText = commentId.value.trim();

    if(commentText.length == 0)
    {
        msg.style.display = "Inline";
        document.getElementById("error").innerHTML = "Enter a valid comment!";
    }
    else
    {
        document.getElementById("comment-area").value = "";
        profiles[CurrentIndex].commentsArray.push(commentText);
        viewComments();
    }
}

display();