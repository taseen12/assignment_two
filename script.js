document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const names = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const book = document.getElementById("book").value ; 
    const quantity = parseInt(document.getElementById("quantity").value) ; 

    if (names === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Hello (${names}) .
    We got your order of (${quantity}) pieces of (${book}) book . 
    After checking  we will get back to you in your given email (${email}) `);
});


