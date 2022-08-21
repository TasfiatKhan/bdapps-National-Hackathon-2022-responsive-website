
    $(document).on('ready', function() {

      $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,


        responsive: [
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }
          },
      ]
      });


    });
