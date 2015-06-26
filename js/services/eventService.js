define([ './module' ], function (services) {
    'use strict';

    services.factory('eventService', [ 'dateService', function (dateService) {

        /**
         * private function
         * @returns {Array}
         */
        var setToListEventsFromLocalStorage = function () {
            var list = [];
            var arrayData = JSON.parse(localStorage.getItem('events'));

            arrayData.forEach(function (item) {
                list.push(item);
            });

            return list;
        };

        return {
            listEvents: [],
            currentEvents: [],
            isChangeStorage: false,
            isFirstLoadingApp: true,

            defaultEvents: [
                {
                    start: new DayPilot.Date(dateService.today),
                    end: new DayPilot.Date(dateService.today),
                    id: DayPilot.guid(),
                    resource: "B",
                    text: "One-Day Event"
                }
            ],

            standardEvents: function () {
                var self = this;

                if (localStorage.length == 0) {
                    self.listEvents = self.defaultEvents;
                    self.currentEvents = self.defaultEvents;
                }
                else {
                    if (self.isFirstLoadingApp == true || self.isChangeStorage != false) {
                        self.listEvents = setToListEventsFromLocalStorage();
                        self.isFirstLoadingApp = false;
                        self.isChangeStorage = false;
                    }
                }

                return self.listEvents;
            },

            pushEvents: function (startDate, endDate, textEvent) {
                var self = this;

                self.currentEvents.push(
                    {
                        start: new DayPilot.Date(startDate),
                        end: new DayPilot.Date(endDate),
                        id: DayPilot.guid(),
                        text: textEvent
                    }
                );
            }
        };
    } ]);
});
