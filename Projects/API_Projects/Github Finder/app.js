//Instantiate github class
const github = new Github();
//Init UI
const ui = new UI();

//search input
const searchUser = document.getElementById("searchUser");

// Search Input Event Listener
searchUser.addEventListener("keyup", (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
