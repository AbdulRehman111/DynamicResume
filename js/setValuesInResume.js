/**
 * Created by hp8570 on 5/2/2020.
 */


function appendValuesInResume() {
    let profilePic = sessionStorage.getItem('profilePic');
    let firstName = sessionStorage.getItem('fName');
    let lastName = sessionStorage.getItem('lName');
    let email = sessionStorage.getItem('email');
    let mobPhone = sessionStorage.getItem('mobPhone');
    let address = sessionStorage.getItem('address');
    let address2 = sessionStorage.getItem('address2');
    let webURL = sessionStorage.getItem('webSiteURL');
    let jobTitle = sessionStorage.getItem('jobTitle');
    let telePhone = sessionStorage.getItem('phone');
    let postCode = sessionStorage.getItem('postCode');
    let country = sessionStorage.getItem('country');
    let experience = sessionStorage.getItem('experience');
    let nearestOffice = sessionStorage.getItem('nearestOffice');
    let state = sessionStorage.getItem('state');
    let authCountries = sessionStorage.getItem('authCountries');
    let adAge = sessionStorage.getItem('adAge');

    document.getElementById("profilePic").src = profilePic;
    document.getElementById("showFirtName").innerHTML = firstName;
    document.getElementById("showLastName").innerHTML = lastName
    document.getElementById("email").innerHTML = email;
    document.getElementById("mobileNo").innerHTML = mobPhone;
    document.getElementById("address").innerHTML = address;
    document.getElementById("address2").innerHTML = address2;
    document.getElementById("webSite").innerHTML = webURL;
    document.getElementById("jobTitle").innerHTML = jobTitle;
    document.getElementById("phoneNo").innerHTML = telePhone;
    document.getElementById("postCode").innerHTML = postCode;

    document.getElementById("state").innerHTML = state;
    document.getElementById("country").innerHTML = country;
    //
    //document.getElementById("experience").innerHTML = experience;
    //document.getElementById("nearestOffice").innerHTML = nearestOffice;
    //document.getElementById("authCountries").innerHTML = authCountries;
    //document.getElementById("adAge").innerHTML = adAge;

}

appendValuesInResume();

