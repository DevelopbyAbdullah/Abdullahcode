function focus() {
    document.getElementById("name").style.backgroundColor = "lime";
};
$(function () {
    $('#myButton').floatingWhatsApp({
        phone: '+923137323866',
        popupMessage: 'Hello, how can we help you?',
        message: "Welcome",
        showPopup: true,
        showOnIE: false,
        headerTitle: 'Welcome!',
        headerColor: 'crimson',
        backgroundColor: 'crimson',
        buttonImage: '<img src="whatsapp.svg" />'
    });
});

// document.getElementsByClassName("side").onclick =abc;//
function abc() {
    document.getElementById("side").classList.toggle("sidea")
}

// document.getElementById("but").addEventListener("click", function () {
//     document.getElementById("but").style.display = "none";
// });




