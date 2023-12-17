function sendForm(event){
    let error = {};
    let address = event.target[6].value;

    if(address.length < 10){
        error.address = "Ваш адрес слишком короткий.";
        let addressField = document.getElementById("address-error");
        addressField.innerHTML = error.address;
        addressField.previousElementSibling.classList.add("error");
    }else{
        let addressField = document.getElementById("address-error");
        addressField.innerHTML = '';
        addressField.previousElementSibling.classList.remove("error");
    }
    let name = event.target[0].value;
    let nameTemplate = /^[А-Я][а-яА-Я\s]*[а-яА-Я]$/g;

    if(!nameTemplate.test(name)){
        error.name = "Введите корректное имя";
        let nameField = document.getElementById("name-error");
        nameField.innerHTML = error.name;
        nameField.previousElementSibling.classList.add("error");
    }else{
        let nameField = document.getElementById("name-error");
        nameField.innerHTML = '';
        nameField.previousElementSibling.classList.remove("error");
    }

    let phone = event.target[3].value;
    let phoneTemplate = /^\+375[0-9]{9}$/g;

    if(!phoneTemplate.test(phone)){
        error.phone = "Введите правильный номер телефона";
        let phoneField = document.getElementById("phone-error");
        phoneField.innerHTML = error.phone;
        phoneField.previousElementSibling.classList.add("error");
    }else{
        let phoneField = document.getElementById("phone-error");
        phoneField.innerHTML = '';
        phoneField.previousElementSibling.classList.remove("error");
    }

    let date = event.target[1].value;
    let gender = event.target[2].value;
    let email = event.target[3].value;
    let url = event.target[4].value;
    let errors = 0;

    for(key in error){
        errors++;
    }

    if(errors){
        return false;
    }else{
        let card = document.getElementsByClassName("card-list")[0];

        let now = new Date();
        let birthday = new Date(date);
        let age = now.getFullYear() - birthday.getFullYear();

        card.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card" draggable="true" ondragstart="startDrag(event) id = "user-${now-getMilliseconds()}">
                <img src="images/avatar.png" alt="">
                <div class="card-name">${name}</div>
                <div class="card-age">Возраст: ${age}</div>
                <button>Инфо</button>
            </div>`);
    }

    return false;
}

function startDrag(event){
    event.dataTransfer.setData("text/html", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}

function enterDrag(event){
    event.dataTransfer.dropEffect = "move";
    event.target.classList.add("active");
}

function leaveDrag(event){
    event.target.classList.remove("active");
}

function drop(event){
    let cart = document.getElementsByClassName("card-remove")[0];

    if(confirm("Вы действительно хотите удалить карточку?")){
        let element
    }
}