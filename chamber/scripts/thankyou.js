function displayclientData() {
    const getclientInfo = window.location.search;
    console.log(getclientInfo);

    const retrieveData = new URLSearchParams(getclientInfo);

    const clientInfo = {
        firstname: retrieveData.get('firstname'),
        lastname: retrieveData.get('lastname'),
        title: retrieveData.get('title'),
        email: retrieveData.get('email'),
        mobile: retrieveData.get('mobile'),
        business: retrieveData.get('bname'),
        membership: retrieveData.get('membership'),
        description: retrieveData.get('description'),
        date: retrieveData.get('date'),
    };

    const thankyouContainer = document.querySelector("#thank-you");
    thankyouContainer.innerHTML = "";

    thankyouContainer.innerHTML = `
        <p><strong>Firstname:</strong> ${clientInfo.firstname}</p>
        <p><strong>Lastname:</strong> ${clientInfo.lastname}</p>
        <p><strong>Title:</strong> ${clientInfo.title}</p>
        <p><strong>Email:</strong> ${clientInfo.email}</p>
        <p><strong>Business:</strong> ${clientInfo.business}</p>
        <p><strong>Mobile:</strong> ${clientInfo.mobile}</p>
        <p><strong>Description:</strong> ${clientInfo.description}</p>
        <p><strong>Date:</strong> ${clientInfo.date}</p>
        <p><strong>Membership:</strong> ${clientInfo.membership}</p>
        <h2>Hi ${clientInfo.firstname} ${clientInfo.lastname} You have been registered successfully!</h2>
        <a href="index.html" id="goBack">go to homepage</a>

    `;
}

displayclientData();