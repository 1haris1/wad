var profiles = [
    {
        name: "Muhammad Ali Jinnah",
        dob: "December 25, 1876",
        position: "Founder of Pakistan",
        dp: "images/muhammad_ali.jpg",
        comments : []
    },
    {
        name: "Imran Khan",
        dob: "October 5, 1952",
        position: "Prime Minister of Pakistan",
        dp: "images/imran_khan.jpg",
        comments : []
    }
];
var currentProfile = 0;
displayProfile(currentProfile);
function postComment() {
    var comment = document.getElementById("comment-area");
    if(comment.value.trim().length>0) {
        document.getElementById("comment-msg").innerHTML = "";
        this.profiles[currentProfile].comments.push(comment.value);
        comment.value = "";
        displayProfile(currentProfile);
    }
    else {
        document.getElementById("comment-msg").innerHTML = "Enter a valid comment"
        document.getElementById("comment-msg").style.color = "red";
    }
}
function displayProfile(n) {
    if(n >= profiles.length)
        currentProfile = 0;
    if(n < 0)
        currentProfile = profiles.length-1;
    document.getElementById('dp').src = profiles[currentProfile].dp;
    document.getElementById('name').innerText = profiles[currentProfile].name;
    document.getElementById('dob').innerHTML = '<b>Born: </b>'+profiles[currentProfile].dob;
    document.getElementById('position').innerHTML = '<b><i>'+profiles[currentProfile].position+'</b></i>';
    var commentList = document.getElementById('comment-list');
    commentList.innerHTML = "";
    for(var i=profiles[currentProfile].comments.length-1;i>=0;i--) {
        var div = document.createElement('div');
        div.classList.add("comment");
        div.innerHTML = profiles[currentProfile].comments[i];
        commentList.appendChild(div);
    }
}
function switchProfile(n) {
    currentProfile += n;
    displayProfile(currentProfile);
}