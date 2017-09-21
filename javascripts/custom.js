


$(document).ready(function () {
    var win_w = $('.body-wrap').width();

    $('select.btc_neo__block').chosen({
      inherit_select_classes : true,
      width: ''
    }).ready(function(e){
      $(".chosen-results").wrap("<div class='chosen-results_wrap'></div>");
      $('.chosen-results_wrap').mCustomScrollbar();
      $('.chosen-search input').attr('placeholder', 'Search');
    });

    $('.gamburger').click(function(){
      $(this).toggleClass('open');
      $('.gamburger__content').toggleClass('open');
      return false;
    });

    $('.gamburger__close').click(function(){
      $('.gamburger').toggleClass('open');
      $('.gamburger__content').toggleClass('open');
      return false;
    });

    $('.history__table').mCustomScrollbar();
    $('.orders__table').mCustomScrollbar();
    $('.chat__content').mCustomScrollbar();
    $('.btc_neo__result').mCustomScrollbar();
    // $('.btc_neo .chosen-drop').mCustomScrollbar();


    if (win_w < 960) {
      $('.accordion .accordion__text').slideUp(); 
      $('.accordion .accordion__item').removeClass('open');
    }

    $('.accordion .accordion__head').click(function(){
      if (win_w < 960) {
        var arrord_click_this = $(this).closest('.accordion__item');
        if (arrord_click_this.hasClass('open')) {
          arrord_click_this.removeClass('open').find('.accordion__text').slideUp();
        }
        else{
          $(this).closest('.accordion').find('.accordion__item').each(function(){
            if ($(this) != arrord_click_this) {
              $(this).removeClass('open').find('.accordion__text').slideUp();
          }});
          arrord_click_this.addClass('open').find('.accordion__text').slideDown();
        }
        return false;
      }
    });

    $('.lang__item').click(function(){
      $('.lang__wrap').toggleClass('open');
      $('.lang__dropdown').toggle();

      return false;
    });
    $('.sell__check').click(function(){
      $(this).toggleClass('active');
      return false;
    });

    $('.person__name').click(function(){
      $('.person__menu').toggle();

      return false;
    });

    $('.lang').click(function(){
      var lang = $(this).attr('for');
      $('.lang').removeClass('active');
      $(this).addClass('active');
      $('.lang__item').removeClass('active');
      $(lang).addClass('active');
      $('.lang__wrap').toggleClass('open');
      $('.lang__dropdown').toggle();

      return false;
    });




    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
     
      var mydata = [
        [new Date(2017, 1, 1, 18, 00, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 8, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 18, 05, 0, 0), 31, 38, 55, 66, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 31, 38, 55, 66, '1.1308')],
        [new Date(2017, 1, 1, 18, 10, 0, 0), 50, 55, 77, 80, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 50, 55, 77, 80, '1.1308')],
        [new Date(2017, 1, 1, 18, 30, 0, 0), 77, 77, 66, 50, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', false, 77, 77, 66, 50, '1.1308')],
        [new Date(2017, 1, 1, 18, 45, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 19, 00, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 19, 05, 0, 0), 31, 38, 55, 66, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 31, 38, 55, 66, '1.1308')],
        [new Date(2017, 1, 1, 19, 10, 0, 0), 50, 55, 77, 80, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 50, 55, 77, 80, '1.1308')],
        [new Date(2017, 1, 1, 19, 30, 0, 0), 77, 77, 66, 50, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', false, 77, 77, 66, 50, '1.1308')],
        [new Date(2017, 1, 1, 19, 45, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 20, 00, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 20, 05, 0, 0), 31, 38, 55, 66, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 31, 38, 55, 66, '1.1308')],
        [new Date(2017, 1, 1, 20, 10, 0, 0), 50, 55, 77, 80, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 50, 55, 77, 80, '1.1308')],
        [new Date(2017, 1, 1, 20, 30, 0, 0), 77, 77, 66, 50, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', false, 77, 77, 66, 50, '1.1308')],
        [new Date(2017, 1, 1, 20, 45, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 21, 00, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
        [new Date(2017, 1, 1, 21, 05, 0, 0), 31, 38, 55, 66, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 31, 38, 55, 66, '1.1308')],
        [new Date(2017, 1, 1, 21, 10, 0, 0), 50, 55, 77, 80, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 50, 55, 77, 80, '1.1308')],
        [new Date(2017, 1, 1, 21, 30, 0, 0), 77, 77, 66, 50, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', false, 77, 77, 66, 50, '1.1308')],
        [new Date(2017, 1, 1, 21, 45, 0, 0), 20, 28, 38, 45, createCustomHTMLContent('Tuesday, Sep, 12, 01:41:13.353', true, 20, 28, 38, 45, '1.1308')],
      ];
      var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Low Err');
        data.addColumn('number', 'Low');
        data.addColumn('number', 'High');
        data.addColumn('number', 'High Err');

        data.addColumn({
          type: 'string',
          role: 'tooltip',
          p: {
            html:true
          }
        });

      data.addRows(mydata);
      
      var options = {
        legend:'none',
        chartArea: {
          left: 50,
          top: 20
        },
        width: '100%',
        hAxis: {
          gridlines: {
            count: -1,
            units: {
              days: {format: ['MMM dd']},
              hours: {format: ['HH:mm', 'ha']},
            }
          }
        },
        tooltip:{
          isHtml: true
        },
        candlestick: {
          fallingColor: {  strokeWidth: 0, fill: '#d25e6e' }, 
          risingColor: { strokeWidth: 0, fill: '#4db1db' } 
        }
      };

      var chart = new google.visualization.CandlestickChart(document.getElementById('graph_1'));

      chart.draw(data, options);
    }

    function createCustomHTMLContent(cust_day, cust_type, cust_open, cust_high, cust_low, cust_close, cust_vol) {
      var cust_type_col = '#d25e6e';
      if (cust_type) {cust_type_col = '#4db1db'}
      return '<div class="tooltip">' +
      '<div class="tooltip__day">' + cust_day + ' <div/>' +
      '<div class="tooltip__type"><span style="background:' + cust_type_col + '"></span> Price <div/>'+
      '<div class="tooltip__text">Open: ' + cust_open + ' <div/>' +
      '<div class="tooltip__text">High: ' + cust_high + ' <div/>' +
      '<div class="tooltip__text">Low: ' + cust_low + ' <div/>' +
      '<div class="tooltip__text">Close: ' + cust_close + ' <div/>' +
      '<div class="tooltip__vol">Voluem: ' + cust_vol + ' <div/>';
    }



    

    $(document).click(function(event) {
     
      if (!$(event.target).closest(".menu__wrap").length){
        $('.gamburger').removeClass('open');
        $('.gamburger__content').removeClass('open');
      }
      if (!$(event.target).closest(".lang__wrap").length){
        $('.lang__wrap').removeClass('open');
        $('.lang__dropdown').fadeOut();
      }
      if (!$(event.target).closest(".person").length){
        $('.person__menu').fadeOut();
      }
    });

    $(window).resize(function(){
      win_w = $('.container').width();
      $('.gamburger').removeClass('open');
      $('.gamburger__content').removeClass('open');

      if (win_w < 960) {
        $('.accordion .accordion__text').slideUp(); 
        $('.accordion .accordion__item').removeClass('open');
      }

      else{
        $('.accordion .accordion__text').slideDown(); 
        $('.accordion .accordion__item').addClass('open');
      }

    });


  }
);