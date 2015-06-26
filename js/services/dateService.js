define(['./module'], function (services) {
    'use strict';

    services.factory('dateService', [function() {

        var today = moment().format('YYYY-MM-DDTHH:mm:ss');
        var momentDay = moment().format('E');

        return {
            today: today,
            currentDay: today,
            listEvents: [],
            currentEvents: [],
            isChangeStorage: false,
            isStart: true,

            nextDay: function(){
                var self = this;
                if(momentDay < parseInt(moment(today).format('E')) + 7) {
                    var offset = parseInt(momentDay) + 1;
                    self.currentDay = moment().day(offset).format('YYYY-MM-DDTHH:mm:ss');
                    momentDay++;
                    //$('#previousDay').removeAttr("class", "disable");
                    $('#previousDay').removeAttr("disabled", "disabled");
                }
                else{
                    //$('#nextDay').attr("class", "disable");
                    $('#nextDay').attr("disabled", "disabled");
                }
            },

            previousDay: function(){
                var self = this;
                if(momentDay != moment(today).format('E') - 1){
                    var offset = parseInt(momentDay);
                    self.currentDay = moment().day(offset).format('YYYY-MM-DDTHH:mm:ss');
                    momentDay--;
                    //$('#nextDay').removeAttr("class", "disable");
                    $('#nextDay').removeAttr("disabled", "disabled");
                }
                else{
                    //$('#previousDay').attr("class", "disable");
                    $('#previousDay').attr("disabled", "disabled");
                }
            },

            defaultEvents: [
                {
                    start: new DayPilot.Date(today),
                    end: new DayPilot.Date(today),
                    id: DayPilot.guid(),
                    resource: "B",
                    text: "One-Day Event"
                }
            ],

            standardEvents: function(){
                var self = this;
                if(localStorage.length == 0) {
                    self.listEvents = self.defaultEvents;
                    self.currentEvents = self.defaultEvents;
                }
                else{
                    if (self.isChangeStorage  != false || self.isStart == true) {
                        self.listEvents = [];
                        var arrayData = JSON.parse(localStorage.getItem('events'));
                        arrayData.forEach(function(item){
                            self.listEvents.push(item);
                        });
                        self.isStart = false;
                        self.isChangeStorage = false;
                    }
                }
                return self.listEvents;
            },

            converterDate: function(){
                var self = this;
                return moment(self.currentDay).format('LL');
            }
        };
    }]);
});
