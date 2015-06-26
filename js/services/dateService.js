define(['./module'], function (services) {
    'use strict';

    services.factory('dateService', [function() {

        /**
         * private variables
         * @type {string}
         */
        var today = moment().format('YYYY-MM-DDTHH:mm:ss');
        var momentDay = moment().format('E');
        var endDayNextWeek = parseInt(moment(today).format('E')) + 7;
        var previousDayFromTheCurrent = moment(today).format('E') - 1;

        /**
         * private function
         * @param offset
         * @returns {string}
         */
        var formattedDateWithOffset = function (offset) {
            return moment().day(offset).format('YYYY-MM-DDTHH:mm:ss')
        };

        return {
            today: today,
            currentDay: today,

            nextDay: function(){
                var self = this;
                if(momentDay < endDayNextWeek) {
                    var offset = parseInt(momentDay) + 1;
                    self.currentDay = formattedDateWithOffset(offset);
                    momentDay++;
                    $('#previousDay').removeAttr("disabled", "disabled");
                }
                else{
                    $('#nextDay').attr("disabled", "disabled");
                }
            },

            previousDay: function(){
                var self = this;
                if(momentDay != previousDayFromTheCurrent){
                    var offset = parseInt(momentDay);
                    self.currentDay = formattedDateWithOffset(offset);
                    momentDay--;
                    $('#nextDay').removeAttr("disabled", "disabled");
                }
                else{
                    $('#previousDay').attr("disabled", "disabled");
                }
            },

            converterDate: function(){
                var self = this;
                return moment(self.currentDay).format('LL');
            }

        };
    }]);
});
