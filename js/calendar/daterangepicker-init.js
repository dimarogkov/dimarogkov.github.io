jQuery(function($) {

    'use strict';

    var $calendar = $('.calendar');

    /* datepicker */
    if ($calendar.length) {
        $calendar.each(function() {
            var $this = $(this);
            var dateFormatString = 'DD.MM.YYYY';
            var invalidDates = [
                // '21.03.2020',
                // '25.03.2020',
                // '06.03.2020'
            ];
            var minDate = $this.data('no-min-date') ? 0 : new Date(),
                // showDropdowns = $this.data('show-dropdowns') ? true : false,
                isInvalideDates = $this.data('no-invalid-dates') ? false : function(date){
                    for(var i = 0; i < invalidDates.length; i++){
                        if (date.format(dateFormatString) == invalidDates[i]) {
                            return true;
                        }
                    }
                };

            $this.daterangepicker({
                "singleDatePicker": true,
                autoUpdateInput: false,
                minDate: minDate,
                // showDropdowns: showDropdowns,
                "isInvalidDate" : isInvalideDates,
                // isInvalidDate: function(date) {
                //     return (date.day() == 0 || date.day() == 6);
                // },
                "locale": {
                    "format": dateFormatString,
                    "separator": " - ",
                    "applyLabel": "Застосувати",
                    "cancelLabel": "Відміна",
                    "fromLabel": "Від",
                    "toLabel": "До",
                    "customRangeLabel": "Свій",
                    "weekLabel": "Т",
                    "daysOfWeek": [
                        "Нд",
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб"
                    ],
                    "monthNames": [
                        "Січень",
                        "Лютий",
                        "Березень",
                        "Квітень",
                        "Травень",
                        "Червень",
                        "Липень",
                        "Серпень",
                        "Вересень",
                        "Жовтень",
                        "Листопад",
                        "Грудень"
                    ],
                    "firstDay": 1
                }
            });

            $this.on('apply.daterangepicker', function(ev, picker) {
                $(this).val(picker.startDate.format(dateFormatString));
                // $(this).closest('.input-wrapper').addClass('dirty');
                $(this).closest('.toggle-block').find('select').html('');
            });

            $this.on('show.daterangepicker', function(ev, picker) {
                var calendarWidth = $(this).outerWidth();
                $('.daterangepicker .drp-calendar').css({'width':calendarWidth});
                $('.daterangepicker').addClass('active');

                $(this).closest('.input-wrapper').addClass('active');
            });

            $this.on('hide.daterangepicker', function() {
                // $(this).closest('.input-wrapper').removeClass('active');
                $('.daterangepicker').removeClass('active');
            });
        });

    }
});