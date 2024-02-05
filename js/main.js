(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    

    //Akagera Destination START

    // Define the image URLs
    var images = [
        "img/akagera.jpg",
        "img/akagera1.jpg",
        "img/akagera3.jpg",
        "img/akagera4.jpg",
        "img/akagera5.jpg"
    ];

    var flashElement = document.getElementById("virunga-flash");
    var imageIndex = 1; // Start with the second image

    // Preload the images
    function preloadImages() {
        for (var i = 0; i < images.length; i++) {
            var img = new Image();
            img.src = images[i];
        }
    }

    function fadeOut() {
        flashElement.style.opacity = 0;
    }

    function fadeIn() {
        flashElement.innerHTML = `
            <img class="img-fluid" src="${images[imageIndex]}" alt="">
        `;

        flashElement.style.opacity = 1;

        imageIndex++;
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
    }

    // Set the initial image
    flashElement.innerHTML = `
        <img class="img-fluid" src="${images[0]}" alt="">
    `;

    // Preload the images
    preloadImages();

    // Set the interval for fading images (in milliseconds)
    setInterval(function() {
        fadeOut();
        setTimeout(fadeIn, 500); // Adjust the duration of the fade (in milliseconds) as needed
    }, 6000); // Change the image every 5 seconds

    //Akagera Destination END

    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);




// Start Date and Time START

  // Get the start date input element
    const startDate = document.getElementById("start-date");
    const now = new Date().toISOString().split("T")[0];
    startDate.min = now;

    // Add an event listener to update the minimum value of the end date input element when the start date changes
    startDate.addEventListener("change", function() {
        const endDate = document.getElementById("end-date");
        endDate.min = startDate.value;
    });

// Start Date and Time END






// Destinations (Other)   

   function handleSelectChange() {
        var selectElement = document.getElementById('select1');
        var selectedValue = selectElement.value;

        if (selectedValue === 'other') {
            // Display the message for "Other" option
            document.getElementById('other-message').style.display = 'block';
        } else {
            // Hide the message if any other option is selected
            document.getElementById('other-message').style.display = 'none';
        }
    }

    // Add event listener to the select element
    document.getElementById('select1').addEventListener('change', handleSelectChange);

  // Destinations End 




  // Array of country names (Nationality) START
    const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
"Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
"Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
"Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

    // Get the nationality select element
    const nationalitySelect = document.getElementById("nationality");

    // Populate the select element with country options
    countries.forEach(country => {
        const option = document.createElement("option");
        option.text = country;
        nationalitySelect.add(option);
    }); 

    // Array of country names (Nationality) END




    //Newsletter START

    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.getElementById('subscribeButton');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    subscribeButton.addEventListener('click', () => {
        if (emailInput.value.trim() === '') {
            errorMessage.textContent = 'Please enter an email address.';
            errorMessage.classList.remove('d-none');
            successMessage.classList.add('d-none');
        } else if (!isValidEmail(emailInput.value)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.classList.remove('d-none');
            successMessage.classList.add('d-none');
        } else {
            // Simulate sending the email and show success message after a delay
            errorMessage.classList.add('d-none');
            successMessage.classList.remove('d-none');
            emailInput.value = '';
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 6000); // Show success message for 3 seconds
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    //Newsletter END


    //POPULAR DESTINATION SLIDESHOW

    //AKAGERA START

     // Define the image URLs and corresponding captions
    var images = [
        {
            src: "img/akagera.jpg",
            caption: "Akagera"
        },
        {
            src: "img/akagera1.jpg",
            caption: "Akagera"
        },
        {
            src: "img/akagera3.jpg",
            caption: "Akagera"
        },
        {
            src: "img/akagera4.jpg",
            caption: "Akagera"
        },
        {
            src: "img/akagera5.jpg",
            caption: "Akagera"
        }
    ];

    var flashElement = document.getElementById("virunga-flash");
    var imageIndex = 1; // Start with the second image

    // Preload the images
    function preloadImages() {
        for (var i = 0; i < images.length; i++) {
            var img = new Image();
            img.src = images[i].src;
        }
    }

    function fadeOut() {
        flashElement.style.opacity = 0;
    }

    function fadeIn() {
        flashElement.innerHTML = `
            <img class="img-fluid" src="${images[imageIndex].src}" alt="">
            <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">${images[imageIndex].caption}</div>
        `;

        flashElement.style.opacity = 1;

        imageIndex++;
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
    }

    //AKAGERA END

    // Set the initial image
    flashElement.innerHTML = `
        <img class="img-fluid" src="${images[0].src}" alt="">
        <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">${images[0].caption}</div>
    `;

    // Preload the images
    preloadImages();

    // Set the interval for fading images (in milliseconds)
    setInterval(function() {
        fadeOut();
        setTimeout(fadeIn, 500); // Adjust the duration of the fade (in milliseconds) as needed
    }, 6000); // Change the image every 5 seconds

