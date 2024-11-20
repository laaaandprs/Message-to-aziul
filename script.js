      //message 
    $("#messageState").on("change", () => {
        $(".message").removeClass("openNor closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Abrindo");
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("fechando");
        }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if ($(this).hasClass("closeNor"))
            $(this).addClass("closed");
        $(this).removeClass("openNor closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if (!$(this).hasClass("closeHer"))
            $(this).addClass("openedHer beating");
        else
            $(this).addClass("no-anim").removeClass("beating");
        $(this).removeClass("openHer closeHer");
    });
        //image slider
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slides img');
        
        function showSlide(n) {
            if (n >= slides.length) {
                slideIndex = 0;
            } else if (n < 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex = n;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[slideIndex].style.display = 'block';
        }

        function changeSlide(n) {
            showSlide(slideIndex += n);
        }

        // Initially display the first slide
        showSlide(slideIndex);