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

const apiURL = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

async function loadIssues(){

const res = await fetch(apiURL);
const data = await res.json();

displayIssues(data.data);

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
