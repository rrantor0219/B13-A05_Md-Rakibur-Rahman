// login check

function loginUser(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "admin123"){
        localStorage.setItem("loggedIn","true");
        window.location.href = "index.html";
    }else{
        alert("Wrong username or password");
    }

}
// load issues

async function loadIssues(type="all"){

const res = await fetch(apiURL);
const data = await res.json();

let issues = data.data;

if(type === "open"){
issues = issues.filter(issue => issue.status === "open");
}

if(type === "closed"){
issues = issues.filter(issue => issue.status === "closed");
}

displayIssues(issues);

}
function changeTab(type,element){

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => tab.classList.remove("active"));

element.classList.add("active");

loadIssues(type);

}


// display cards

function displayIssues(issues){

const container = document.getElementById("issuesContainer");

container.innerHTML = "";

issues.forEach(issue => {

const card = document.createElement("div");

card.classList.add("card");

if(issue.status === "open"){
card.classList.add("open");
}else{
card.classList.add("closed");
}

card.innerHTML = `

<h4>${issue.title}</h4>
<p>${issue.description}</p>

<p>Status: ${issue.status}</p>
<p>Author: ${issue.author}</p>
<p>Priority: ${issue.priority}</p>
<p>Label: ${issue.label}</p>
<p>${issue.createdAt}</p>
`;

container.appendChild(card);

});

}

// load automatically

if(window.location.pathname.includes("index.html")){
loadIssues();
}
