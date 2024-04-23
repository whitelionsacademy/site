import React, { useEffect } from "react";
import Events from "./gallerypage/LandingEvents.js"
import Competition from "./gallerypage/Competition.js"
import Exhibit from "./gallerypage/Exhibition.js"
import ContactSe from "./gallerypage/ContactSe.js"
import "./gallerypage.css"


function Gallerypage() {

    useEffect(() => {

        const images = document.querySelectorAll('.gallery-imagela');
        const popup = document.getElementById('popup');
        const closePopup = document.getElementById('closePopup');
        const popupImage = document.getElementById('popupImage');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let currentImageIndex = 0;

        images.forEach((image, index) => {
            image.addEventListener('click', () => {
                currentImageIndex = index;
                popupImage.src = image.src;
                popup.style.display = 'flex';
            });
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        prevBtn.addEventListener('click', () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                popupImage.src = images[currentImageIndex].src;
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentImageIndex < images.length - 1) {
                currentImageIndex++;
                popupImage.src = images[currentImageIndex].src;
            }
        });

        return () => {
            images.forEach((image) => 
            {
                image.removeEventListener('click', () => { });
            });
            closePopup.removeEventListener('click', () => { });
            prevBtn.removeEventListener('click', () => { });
            nextBtn.removeEventListener('click', () => { });
        };

    }, []);

    return (
        <div>
            <Events />
            <Competition />
            <Exhibit />
            <ContactSe />
        </div>
    );



}
export default Gallerypage;