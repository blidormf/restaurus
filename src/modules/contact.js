import bulliusCaesar from "../assets/images/bullius-caesar.png";
import "../styles/contact.css";

const contact = () => {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const photo = document.createElement('img');
    photo.setAttribute('src', bulliusCaesar);

    const details = document.createElement('div');
    details.classList.add('details');

    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = 'Bullius Caesar';

    const phone = document.createElement('p');
    phone.classList.add('detail');
    phone.textContent = 'Phone: 123-4567';

    const email = document.createElement('p');
    email.classList.add('detail');
    email.textContent = 'Email: bullius@restaurus.example.com';

    details.appendChild(name);
    details.appendChild(phone);
    details.appendChild(email);

    imgContainer.appendChild(photo);

    contactDiv.appendChild(details);
    contactDiv.appendChild(imgContainer);

    return contactDiv;
}

export default contact;