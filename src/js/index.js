$(document).ready(function() {
    $('.button-collapse').sideNav({
        closeOnClick: true
    });
  $('.nav-link').click(function() {
    $('#navbarNav1').removeClass('show');
  });
    Tu.t_scroll({
        't_element': ".display-1 .slideDown",
        't_duration': 0.1,
        't_delay': 0.5,
        't_function': 'ease-in'
    });
    Tu.t_scroll({
        't_element': '.lead .slideDown',
        't_duration': 1,
        't_delay': 2,
        't_function': 'ease-in'
    })
    Tu.t_scroll({
        't_element': '.lead .slideRight',
        't_duration': 1,
        't_delay': 2,
        't_function': 'ease-in'
    })
    Tu.t_scroll({
        't_element': '.lead .slideLeft',
        't_duration': 1,
        't_delay': 2,
        't_function': 'ease-in'
    })
    Tu.t_scroll({
        't_element': '.social .bounceIn',
        't_duration': 0.2,
        't_delay': 3,
        't_function': 'ease-in'
    })
    Tu.t_scroll({
        't_element': '.btns .slideRight',
        't_duration': 1,
        't_delay': 2,
        't_function': 'ease-in'
    })
    Tu.t_scroll({
        't_element': '.btns .slideLeft',
        't_duration': 1,
        't_delay': 2,
        't_function': 'ease-in'
    })

    /*
  linear
  ease
  ease-in
  ease-out
  ease-in-out
  step-start
  step-end
  initial
  inherit
    */
    new WOW().init();
    $(".button-collapse").sideNav();
});
