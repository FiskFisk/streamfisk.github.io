// Slider 2
const slider2 = {
    currentIndex: 0,
    element: document.querySelector('.Hits_slider'),

    nextSlide: function () {
        let slidesToShow = 2; // Default number of slides to show
        let movementDistance = 1.01; // Default movement distance

        if (window.innerWidth < 2199 && window.innerWidth >= 501) {
            slidesToShow = 1; // Adjust for screen width between 500px and 1600px
            movementDistance = 1.01; // Adjust movement distance  "Pc skjerm"
        } else if (window.innerWidth < 500) {
            slidesToShow = 1; // Adjust for screen width less than 500px
            movementDistance = 0; // Adjust movement distance
        }

        if (this.currentIndex < this.element.children.length - slidesToShow) {
            this.currentIndex += movementDistance; 
        } else {
            this.currentIndex = 0;
        }
        this.updateSliderTransition();
    },

    prevSlide: function () {
        let slidesToShow = 4; // Default number of slides to show
        let movementDistance = 1.2; // Default movement distance

        if (window.innerWidth < 1600 && window.innerWidth >= 500) {
            slidesToShow = 1; // Adjust for screen width between 500px and 1600px
            movementDistance = 1.01; // Adjust movement distance  "Pc skjerm"
        } else if (window.innerWidth < 500) {
            slidesToShow = 1; // Adjust for screen width less than 500px
            movementDistance = 0.5; // Adjust movement distance
        }

        if (this.currentIndex > 0) {
            this.currentIndex -= movementDistance; 
        } else {
            this.currentIndex = this.element.children.length - slidesToShow;
        }
        this.updateSliderTransition();
    },

    updateSliderTransition: function () {
        const offset = -this.currentIndex * this.element.children[0].offsetWidth;
        this.element.style.transition = 'transform 0.5s ease'; 
        this.element.style.transform = `translateX(${offset}px)`;

       
        this.element.addEventListener('transitionend', () => {
            this.element.style.transition = '';
        }, { once: true }); // Remove event listener after it's triggered once
    }
};

document.querySelector('.Hitsprev').addEventListener('click', slider2.prevSlide.bind(slider2));
document.querySelector('.Hitsnext').addEventListener('click', slider2.nextSlide.bind(slider2));
