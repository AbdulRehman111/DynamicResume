/**
 * Created by Abdul Rehman Hanif on 5/1/2020.
 */


 function submit(){
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let email = document.getElementById("con_email").value;


     let jobTitle = document.getElementById("job").value;

     let nearestOffice = document.getElementById("nearestOffice").value;
     let address = document.getElementById("add").value;
     let address2 = document.getElementById("add_2").value;
     let city = document.getElementById("city").value;
     let state = document.getElementById("state").value;
     let country = document.getElementById("country").value;
     let postCode = document.getElementById("postCode").value;
     let phone = document.getElementById("phone").value;
     let mobPhone = document.getElementById("mobPhone").value;
     let experience = document.getElementById("experience").value;
     let authCountries = document.getElementById("authCountries").value;
     let webSiteURL = document.getElementById("web").value;
     let adAge = document.getElementById("adAge").value;
     let readCheck = document.getElementById("check").checked;

     if (fName === '' || lName === '' || email === '' || nearestOffice == '' || address == '' || address2 == '' ||
         city == '' || state == '' || state == 'state' || country == '' || country == 'country' || postCode == '' || phone == '' || mobPhone == ''||
         adAge == ''||webSiteURL ==''|| authCountries == '' ||experience == '' )
     {
         alert('Please fill the required filed..');
         return false;
     }
     else if(readCheck == '' || readCheck == 'false'){
         alert('Please Read and agreed to the Terms and Conditions');
         return false;
     }

     sessionStorage.setItem('jobTitle', jobTitle);
     sessionStorage.setItem('city', city);
     sessionStorage.setItem('adAge', adAge);
     sessionStorage.setItem('webSiteURL', webSiteURL);
     sessionStorage.setItem('authCountries', authCountries);
     sessionStorage.setItem('experience', experience);
     sessionStorage.setItem('mobPhone', mobPhone);
     sessionStorage.setItem('phone', phone);
     sessionStorage.setItem('postCode', postCode);
     sessionStorage.setItem('country', country);
     sessionStorage.setItem('address2', address2);
     sessionStorage.setItem('address', address);
     sessionStorage.setItem('nearestOffice', nearestOffice);

     sessionStorage.setItem('state', state);

     sessionStorage.setItem('email',email);
     sessionStorage.setItem('fName',fName);
     sessionStorage.setItem('lName',lName);

     window.location.href = ('pages/ResumeTemplate/Resume.html');
}


 function openCity(evt, tabName) {
    //alert(tabName)
    if(tabName =='SignUp'){
        document.getElementById("enhance-btn").style.backgroundColor = "#ff4500";

    }else{
        document.getElementById("enhance-btn").style.backgroundColor = "#f1f1f1";
    }

    if(tabName == 'Continue'){
        var fName = document.getElementById("fname").value;
        var lName = document.getElementById("lname").value;
        var email = document.getElementById("con_email").value;

        if(fName === '' || lName === '' || email === ''){
            alert('Please fill the required filed..');
            return false;
        }
    } else if(tabName == 'submit'){

        var fName = document.getElementById("fname").value;
        var lName = document.getElementById("lname").value;
        var email = document.getElementById("con_email").value;
        var nearestOffice = document.getElementById("nearestOffice").value;
        var address = document.getElementById("add").value;
        var address2 = document.getElementById("add_2").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var country = document.getElementById("country").value;
        var postCode = document.getElementById("postCode").value;
        var phone = document.getElementById("phone").value;
        var mobPhone = document.getElementById("mobPhone").value;

        if(fName === '' || lName === '' || email === ''|| nearestOffice == '' ||address == ''|| address2 == '' ||
           city == '' || state =='' || state =='state'|| country == ''|| country == 'country'|| postCode == ''|| phone == ''|| mobPhone =='')
        {
            alert('Please fill the required filed..');
            return false;
        }
    }
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
 function openCity1(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}