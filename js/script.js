const handleSubmit = (e) => {
    e.preventDefault();
    const clientEmail = document.getElementById("email").value;

    console.log(clientEmail);
    window.alert("Obrigado por se cadastrar!");
    let data ={
        clientEmail,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
};

document.getElementById("myForm").addEventListener("submit", handleSubmit);


