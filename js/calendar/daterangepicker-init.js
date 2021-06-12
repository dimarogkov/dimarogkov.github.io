jQuery(function($) {

    'use strict';

    var $calendar = $('.calendar');

    /* datepicker */
    if ($calendar.length) {
        $calendar.each(function() {
            var $this = $(this);
            var dateFormatString = 'DD.MM.YYYY';
            var invalidDates = [
            ];
            var minDate = $this.data('no-min-date') ? 0 : new Date(),
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
                "isInvalidDate" : isInvalideDates,
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
                $(this).closest('.toggle-block').find('select').html('');
            });

            $this.on('show.daterangepicker', function(ev, picker) {
                var calendarWidth = $(this).outerWidth();
                $('.daterangepicker .drp-calendar').css({'width':calendarWidth});
                $('.daterangepicker').addClass('active');

                $(this).closest('.input-wrapper').addClass('active');
            });

            $this.on('hide.daterangepicker', function() {
                $('.daterangepicker').removeClass('active');
            });
        });

    }
});