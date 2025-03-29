// document.getElementById("membershipForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Collect form data
//     const formData = new FormData(event.target);
//     const clientData = {
//       firstname: formData.get("firstname"),
//       lastname: formData.get("lastname"),
//       title: formData.get("title"),
//       email: formData.get("email"),
//       mobile: formData.get("mobile"),
//       description: formData.get("description"),
//       date: formData.get("date"),
//       membership: formData.get("membership"),
//     };
  
//     // Populate the dialog with the collected data
//     const dialogContent = document.getElementById("dialogContent");
//     dialogContent.innerHTML = `
//       <p>Firstname: ${clientData.firstname}</p>
//       <p>Lastname: ${clientData.lastname}</p>
//       <p>Title: ${clientData.title}</p>
//       <p>Email: ${clientData.email}</p>
//       <p>Mobile: ${clientData.mobile}</p>
//       <p>Description: ${clientData.description}</p>
//       <p>Date: ${clientData.date}</p>
//       <p>Membership: ${clientData.membership}</p>
//     `;
  
//     const dialogBox = document.getElementById("dialogBox");
//     dialogBox.showModal();
  
//     document.getElementById("closeBtn").addEventListener("click", function () {
//       dialogBox.close(); 
//     });
  
//     document.getElementById("proceedBtn").addEventListener("click", function () {
//       dialogBox.close();
//       window.location.href = "thankyou.html";
//     });
//   });