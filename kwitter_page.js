//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBClJkLiFFuBQ3EOasKe5Tf7YUNoqJWrt4",
    authDomain: "project-kwitter-71fa2.firebaseapp.com",
    databaseURL: "https://project-kwitter-71fa2-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-71fa2",
    storageBucket: "project-kwitter-71fa2.appspot.com",
    messagingSenderId: "959576000647",
    appId: "1:959576000647:web:482d6e7df0dd4d09019022",
    measurementId: "G-JD4YC2JTPY"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
             
function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
} 

function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
       });
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
} 