// Slider 1
const slider1 = {
    currentIndex: 0,
    element: document.querySelector('.MP_slider'),

    nextSlide: function () {
        let slidesToShow = 6; // Default number of slides to show
        let movementDistance = 3; // Default movement distance

        if (window.innerWidth < 1600 && window.innerWidth >= 500) {
            slidesToShow = 7; // Adjust for screen width between 500px and 1600px
            movementDistance = 3.05; // Adjust movement distance  "Pc skjerm"
        } else if (window.innerWidth < 500) {
            slidesToShow = 1; // Adjust for screen width less than 500px
            movementDistance = 0.5; // Adjust movement distance
        }

        if (this.currentIndex < this.element.children.length - slidesToShow) {
            this.currentIndex += movementDistance; 
        } else {
            this.currentIndex = 0;
        }
        this.updateSliderTransition();
    },

    prevSlide: function () {
        let slidesToShow = 6; // Default number of slides to show
        let movementDistance = 3; // Default movement distance

        if (window.innerWidth < 1600 && window.innerWidth >= 500) {
            slidesToShow = 5; // Adjust for screen width between 500px and 1600px
            movementDistance = 3.05; // Adjust movement distance  "Pc skjerm"
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

document.querySelector('.MPprev').addEventListener('click', slider1.prevSlide.bind(slider1));
document.querySelector('.MPnext').addEventListener('click', slider1.nextSlide.bind(slider1));
