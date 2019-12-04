// Create name as h1
var h = document.createElement('h1');
var t = document.createTextNode('Austin Chandler');
h.appendChild(t);
document.getElementById('myName').appendChild(h);

// Formatting h1 tag
document.querySelector('h1').style.color = 'red';
document.querySelector('h1').style.fontFamily = 'Tahoma';
document.querySelector('h1').style.textAlign = 'center';

// Line break
document.body.appendChild(document.createElement("br"));

// Create course and section number as h2
var h_2 = document.createElement('h2');
var t_2 = document.createTextNode('WEB 115 - Section 0001');
h_2.appendChild(t_2);
document.getElementById('course').appendChild(h_2);

// Formatting h2 tag
document.querySelector('h2').style.color = 'red';
document.querySelector('h2').style.fontFamily = 'Garamond';
document.querySelector('h2').style.fontStyle = 'italic';
document.querySelector('h2').style.textAlign = 'center';

// Centering "Build your Resume"
document.getElementById('h1Resume').style.textAlign = 'center';

// Creating the myWindow() function
function myWindow() {
    let popup = window.open("popupWindow.html", "_blank", "height=500", "width=550", "left=100", "top=100", "resizable=yes", "scrollbars=yes",
    "toolbar=yes", "menubar=no", "location=no", "directories=no", "status=yes");

    // Email Validation
    var email = document.getElementById('email').value;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(email)) {
        var isEmail = true;
    } else {
        var isEmail = false;
    }

    // Resume output based on email validation
    if (isEmail == true) {
        // Display resume
        popup.onload = function() {
            // Name
            var name = document.getElementById('fullName').value;
            popup.document.getElementById('name').innerHTML = name;
    
            // Address and phone number
            var address = document.getElementById('address').value;
            var phoneNum = document.getElementById('phoneNum').value;
            popup.document.getElementById('address/phone').innerHTML = address + ' / ' + phoneNum;
    
            // Career objectives
            var careerObj = document.getElementById('objectives').value;
            popup.document.getElementById('objectivesText').innerHTML = careerObj;
    
            // Personal information
            var personalInfo = document.getElementById('info').value;
            popup.document.getElementById('personalInfoText').innerHTML = personalInfo;
    
            // Educational Background
            var eduBkg = document.getElementById('eduBackground').value;
            popup.document.getElementById('eduBkgText').innerHTML = eduBkg;
            
            // Employment Date and details 1
            var input1 = document.getElementById('entryDate1').value;
            var input2 = document.getElementById('exitDate1').value;
            popup.document.getElementById('date1').innerHTML = input1 + ' - ' + input2;

            var EmploymentDetails1 = document.getElementById('recentEmploymentDetails1').value;
            popup.document.getElementById('employmentDetails1').innerHTML = EmploymentDetails1;

            // Employment Date and details 2
            var input1 = document.getElementById('entryDate2').value;
            var input2 = document.getElementById('exitDate2').value;
            popup.document.getElementById('date2').innerHTML = input1 + ' - ' + input2;

            var EmploymentDetails2 = document.getElementById('recentEmploymentDetails2').value;
            popup.document.getElementById('employmentDetails2').innerHTML = EmploymentDetails2;

            // Employment Date and details 3
            var input1 = document.getElementById('entryDate3').value;
            var input2 = document.getElementById('exitDate3').value;
            popup.document.getElementById('date3').innerHTML = input1 + ' - ' + input2;

            var EmploymentDetails3 = document.getElementById('recentEmploymentDetails3').value;
            popup.document.getElementById('employmentDetails3').innerHTML = EmploymentDetails3;

            // Employment Date and details 4
            var input1 = document.getElementById('entryDate4').value;
            var input2 = document.getElementById('exitDate4').value;
            popup.document.getElementById('date4').innerHTML = input1 + ' - ' + input2;

            var EmploymentDetails4 = document.getElementById('recentEmploymentDetails4').value;
            popup.document.getElementById('employmentDetails4').innerHTML = EmploymentDetails4;
    
            // Business References
            var busRef = document.getElementById('busRef').value;
            popup.document.getElementById('businessRef').innerHTML = "Business References"
            popup.document.getElementById('businessRefDetails').innerHTML = busRef;
        }
    } else {
        popup.onload = function() {
            popup.document.write("Email invalid. Try again.");
        }
    }
}