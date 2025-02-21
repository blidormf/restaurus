import bullEatingImage from "../assets/images/bull-eating.png";
import "../styles/home.css";

const home = () => {
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    const heroHeading = document.createElement('h1');
    heroHeading.classList.add('hero-heading');
    heroHeading.textContent = "We. Feed. Bulls.";

    const subtext = document.createElement('p');
    subtext.classList.add('subtext');
    subtext.textContent = 'We understand that bulls are not just livestock; they are magnificent creatures deserving of the best. Our mission is to create a menu that caters specifically to their dietary needs while ensuring they enjoy every bite. We source only the freshest, organic ingredients, handpicked from local farms, to create meals that are both nutritious and delicious.';

    const heroImgContainer = document.createElement('div');
    heroImgContainer.classList.add('hero-img-container');

    const heroImage = document.createElement('img')
    heroImage.classList.add('hero-img');
    heroImage.setAttribute('src', bullEatingImage);

    heroText.appendChild(heroHeading);
    heroText.appendChild(subtext);

    heroImgContainer.appendChild(heroImage)

    hero.appendChild(heroText);
    hero.appendChild(heroImgContainer)

    homeDiv.appendChild(hero);

    return homeDiv;
}

export default home;