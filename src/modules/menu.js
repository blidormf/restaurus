import "../styles/menu.css";
import grassSvg from "../assets/images/grass.svg";

const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    const htmlColors = [
        "Aqua",
        "Black",
        "Blue",
        "Fuchsia",
        "Green",
        "Lime",
        "Maroon",
        "Navy",
        "Olive",
        "Purple",
        "Red",
        "Silver",
        "Teal",
        "White",
        "Yellow",
        "AliceBlue",
        "AntiqueWhite",
        "Coral",
        "DarkCyan",
        "DarkGoldenRod",
        "LightCoral",
        "MediumSeaGreen",
        "SlateBlue",
        "Tomato"
    ];

    for (let color of htmlColors) {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.textContent = `${color} Grass`;
        div.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;

        const svgObject = document.createElement('object');
        svgObject.setAttribute('data', grassSvg);
        svgObject.setAttribute('type', 'image/svg+xml');
        svgObject.classList.add('grass-svg');


        svgObject.addEventListener('load', () => {
            const svgDoc = svgObject.contentDocument;
            const path = svgDoc.querySelector('path');
            if (path) {
                path.setAttribute('fill', color);
            } else {
                console.error('No <path> element found in the SVG.');
            }
        });

        div.appendChild(svgObject);
        menuDiv.appendChild(div);
    }

    return menuDiv;
}

export default menu;