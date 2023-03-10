function getData(uId, callback) {
    setTimeout(() => {
      console.log("Fetched the data!");
      callback("skc@gmail.com");
    }, 4000);
  }
  
  console.log("start");
  getData("skc", function(email) {
    console.log("Email id of the user id is: " + email);
  });
  console.log("end");