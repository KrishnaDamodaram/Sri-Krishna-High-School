 const carousel = document.getElementById('carousel-container');
        const items = Array.from(carousel.querySelectorAll('.carousel-item'));
        const indicators = Array.from(carousel.querySelectorAll('.carousel-indicators button'));
        const prevBtn = carousel.querySelector('[data-slide="prev"]');
        const nextBtn = carousel.querySelector('[data-slide="next"]');

        let currentIndex = 0;
        let intervalId;
        const slideInterval = 5000; // 5 seconds

        // Function to update the carousel display
        const showSlide = (index) => {
            // Handle wrapping around
            if (index >= items.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = items.length - 1;
            } else {
                currentIndex = index;
            }
            
            // Hide all items and deactivate all indicators
            items.forEach(item => item.classList.add('opacity-0'));
            indicators.forEach(indicator => indicator.classList.remove('opacity-100'));
            
            // Show the current item and activate its indicator
            items[currentIndex].classList.remove('opacity-0');
            indicators[currentIndex].classList.add('opacity-100');
        };
        
        // Function to start the automatic sliding
        const startAutoSlide = () => {
            intervalId = setInterval(() => {
                showSlide(currentIndex + 1);
            }, slideInterval);
        };

        // Event listener for the "Next" button
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });

        // Event listener for the "Previous" button
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });

        // Event listener for the indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Pause auto-sliding on hover
        carousel.addEventListener('mouseover', () => {
            clearInterval(intervalId);
        });
        
        // Resume auto-sliding on mouse leave
        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });

        // Initial setup
        showSlide(currentIndex);
        startAutoSlide();