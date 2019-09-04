const checkinput=()=>{
  let name = document.querySelector(".form-name").value;
  let message = document.querySelector(".form-msg").value;
  
  if (name.length < 4) {
      alert("Enter atleast four characters ")
  }
  if (message.length < 20 ) {
      alert("Enter atleast twenty characters ")
  }
  
}