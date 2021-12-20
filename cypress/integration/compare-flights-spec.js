import FlightsPage from '../page-objects/flights-page.js';

const flightsPage = new FlightsPage();

describe('Search for a flight', function () {
    it('visit kayak.com/flights', function () {
        flightsPage.visitFlightsPage();
    });

    it('type origin', function () {
        flightsPage.typeOrigin('New York');
    });

    it('select single origin', function () {
        flightsPage.selectSingleOrigin('New York');
    })

    it('type destination', function () {
        flightsPage.typeDestination('Philadelphia');
    });

    it('select single destination', function () {
        flightsPage.selectSingleDestination('Philadelphia');
    });

    it('set passengers', function () {
        flightsPage.setPassengers({
            Adults: 2,
            Seniors: 1,
            Youth: 1,
            Child: 0,
            SeatInfant: 0,
            LapInfant: 0
        });
    });

    it('set departure date and arrival date', function () {
        const month = "2022-01"
        const departureDate = 'January 4, 2022'
        const arrivalDate = 'January 7, 2022'
        const dateObj = { month: month, departureDate: departureDate, arrivalDate: arrivalDate }

        flightsPage.openCalendar()
        flightsPage.selectDateRange(dateObj)
    });

    it('click search button', function () {
        flightsPage.clickSearchButton();
    });
});