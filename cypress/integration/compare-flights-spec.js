import FlightsPage from '../page-objects/flights-page.js';

describe('Search for a flight', function () {
    it('visit kayak.com/flights', function () {
        const flightsPage = new FlightsPage();
        flightsPage.visitFlightsPage();
    });

    // it('type origin', function () {
    //     const flightsPage = new FlightsPage();
    //     flightsPage.typeOrigin('New York');
    // });

    // it('select single origin', function () {
    //     const flightsPage = new FlightsPage();
    //     flightsPage.selectSingleOrigin('New York');
    // })

    // it('type destination', function () {
    //     const flightsPage = new FlightsPage();
    //     flightsPage.typeDestination('Philadelphia');
    // });

    // it('select single destination', function () {
    //     const flightsPage = new FlightsPage();
    //     flightsPage.selectSingleDestination('Philadelphia');
    // });

    // it('set passengers', function () {
    //     const flightsPage = new FlightsPage();
    //     flightsPage.setPassengers({
    //         Adults: 2,
    //         Seniors: 1,
    //         Youth: 1,
    //         Child: 0,
    //         SeatInfant: 0,
    //         LapInfant: 0
    //     });
    // });

});