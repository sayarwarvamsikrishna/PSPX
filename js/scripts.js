
/*<!-- Aptrinsic Tag-->*/
/*PX Tag for JavaScript*/ /*Disable this if we are using the segment event capture, else events will be duplicated*/
/*----------------------------------------------------------------------------------------------------------------*/
// Global function to initialize Gainsight PX
var configtwo = { fullDomainCookie: true };
var configone = { filterUrls: ["*/About.HTML"], filterType: "mask" };
(function (n, t, a, e) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-BYULVZPG2ZQW-2", configone, configtwo)
/*Script for Login Validation */

// var configone={ filterUrls: ["*/About.HTML"], filterType: "mask"};
// (function(n,t,a,e,x){
//   var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
//   n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2",configone);

//  var configtwo={ fullDomainCookie: true};

// (function(n,t,a,e,x){
//   var i="aptrinsic";n[i]=n[i]||function(){ (n[i].q=n[i].q||[]).push(arguments)},
//   n[i].p = e; n[i].c = x; var r= t.createElement("script"); r.async=!0, r.src=a+"?a="+e; var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)}) (window, document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6WAJA3OATHHI-2",configtwo);

function callglobal()  //https://share.vidyard.com/watch/9DHjPPiqZQc7czUnjorcxA?
{
    aptrinsic('set', 'globalContext', { "TrailUser": true, "LoanAmount": 19000 });
}

function loadContactPage() {
    aptrinsic('set', 'globalContext', { "page": "Contactpage" });
}
function loadAboutusPage() {
    aptrinsic('set', 'globalContext', { "page": "AboutusPage" });
}

function showengagement(){
    aptrinsic('track', 'ID_Request', {"ID_required" : true }); 
}



function allowlogin(usermail) {
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
    var c;

    if (a != "") {
        if (a == "vamshiahead@gmail.com" || a == "vamshikrishnas007@gmail.com" || a == "vsayarwar@gainsight.com" || a == "demouser@gmail.com") {
            alert("valid User");
            b = a.substr(8, 5);
            var id = b;
            // var hash = CryptoJS.HmacSHA256(id, "9rmLVS939teSt3cILUccAPiqBBxSsQNmREc8CwpAj");

            /*<!-- Aptrinsic Tag-->*/
            aptrinsic('identify',
                {
                    //User Fields
                    "id": id, // Required for logged in app users
                    "email": a,
                    // "userHash": hash.toString()// optional transient for HMAC identification
                },

                {
                    //Account Fields
                    "id": myaccount.a1, //Required
                    "name": myaccount.a1,
                     // flat custom attributes
                });

            alert("Logged in user id :" + b);
            window.location = "https://sayarwarvamsikrishna.github.io/PSPX/Index.HTML";

        }
        else
            alert("Invalid User,enter \"demouser@gmail.com\"");
    }
    else
        alert("enter \"demouser@gmail.com\"");


    return b;
}

var counter = 0;

// Section - 1: Defining the purchse Process


var Productname = "Jeans";
var Productsize = "Medium";
var Productprice = "1800";
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', { detail: { itemName: this.Productname, itemSize: this.Productsize } })
let transactionsuccess = new CustomEvent('transactionsuccess', { detail: { Amountdeducted: this.Productprice, Paymentstatus: this.transactionStatus } })

//This will create a button on page Load
document.addEventListener('DOMContentLoaded', function () {
    let m = document.getElementById('paymentbutton');
    //let m = document.querySelector('main');
    addButton(m);
    m.addEventListener('click', function (ev) {

        addPaymentStatus(m);
    });

});

function addButton(parent) {
    let b = document.createElement('button');
    b.setAttribute("id", "Buynow");
    b.setAttribute("class", "btn btn-primary");
    b.textContent = "Pay Now";
    parent.appendChild(b);
    return b;
}

function addPaymentStatus(parent) {
    let p = document.createElement('p');
    p.textContent = "Donot Refresh..." + "  Transaction is in Progress...";
    p.setAttribute("id", "tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated', purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept, 3000);


}

function purchasedone(ev) {

    console.log(ev.type, ev.detail);
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', { itemName: ev.detail.itemName, itemSize: ev.detail.itemSize });
}

function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "Transaction Success";

}


function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', { Amountdeducted: ev1.detail.Amountdeducted, Paymentstatus: ev1.detail.Paymentstatus });
}



// Clearing cookies on the page load
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

function showKCB1() {
    aptrinsic('bot', 'start', { id: "3d8b06d9-06ea-4518-8ef2-78564a5a173e" }); // We can also specific ID

}
function showKCB2() {
    aptrinsic('bot', 'start', { id: "9ba7fb81-e8d1-4ec2-9b7c-36bf643e9981" }); // We can also specific ID

}


function captureonlyforsession() {
    var checkcookie = document.cookie.match('sid=([^;]*)');
    var getexistingcookieid = checkcookie && checkcookie[1];

    if (counter == 0) {
        for (counter = 0; counter < 1; counter++) {
            aptrinsic('track', 'Click captutre only for session', { sessionid: getexistingcookieid });
        }
        return counter;
    }

    else {
        console.log("Event already captured in this session, clear the session and give a try!")
    }


}
