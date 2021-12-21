import FlightsPage from '../page-objects/flights-page.js';

const flightsPage = new FlightsPage();


before(() => {
    flightsPage.visitFlightsPage();
})

// describe('Search for a flight', function () {

//     it('type origin', function () {
//         flightsPage.typeOrigin('New York');
//     });

//     it('select single origin', function () {
//         flightsPage.selectSingleOrigin('New York');
//     })

//     it('type destination', function () {
//         flightsPage.typeDestination('Philadelphia');
//     });

//     it('select single destination', function () {
//         flightsPage.selectSingleDestination('Philadelphia');
//     });

//     it('set passengers', function () {
//         flightsPage.setPassengers({
//             Adults: 2,
//             Seniors: 1,
//             Youth: 1,
//             Child: 0,
//             SeatInfant: 0,
//             LapInfant: 0
//         });
//     });

//     it('set departure date and arrival date', function () {
//         const month = "2022-01"
//         const departureDate = 'January 4, 2022'
//         const arrivalDate = 'January 7, 2022'
//         const dateObj = { month: month, departureDate: departureDate, arrivalDate: arrivalDate }

//         flightsPage.openCalendar()
//         flightsPage.selectDateRange(dateObj)
//     });

//     it('click search button', function () {
//         flightsPage.clickSearchButton();
//     });
// })
// describe('Compare rates', function () {

//     it('rates sections are visible', function () {
//         flightsPage.isBestVisible()
//         flightsPage.isCheapestVisible()
//         flightsPage.isQuickestVisible()
//     });

//     it('get and compare rates', function () {
//         const bestPrice = flightsPage.getBestPrice()
//         const cheapestPrice = flightsPage.getCheapestPrice()
//         const quickestDurationPrice = flightsPage.getQuickestDurationPrice()

//         console.log(`Best price: ${bestPrice}`)
//         // console.log(`Cheapest price: ${cheapestPrice}`)
//         // console.log(`Quickest duration price: ${quickestDurationPrice}`)
//     })
// })
describe('toggle flight type', function () {
    it('toggle flight type and confirm the changes in search options', function () {
        flightsPage.toggleFlightType('Multi-city')
        flightsPage.countMultiCitySearchInputs()

    })

})
// describe('Search for an airport by airport code', function () {
//     it('search for an airport by airport code', function () {
//         flightsPage.searchAirportByCodeOrPartialName('DXB', 'Dubai')
//         cy.reload();
//         flightsPage.searchAirportByCodeOrPartialName('Tokyo Ha', 'Haneda')

//     })
// })