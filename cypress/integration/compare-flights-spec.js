import FlightsPage from '../page-objects/flights-page.js';
import scenarios from '../fixtures/scenarios.json'


const flightsPage = new FlightsPage();

const flightsData = flightsPage.jsonToArray(scenarios);


before(() => {
    flightsPage.visitFlightsPage();
})

describe('User test data to search for a flight', () => {
    flightsData.forEach(({ OriginInput, OriginSelection, DestinationInput, DestinationSelection, Passengers, Departure, Arrival }) => {
        it('type origin', function () {
            cy.reload()
            flightsPage.typeOrigin(OriginInput);
        });

        it('select single origin', function () {
            flightsPage.selectSingleOrigin(OriginSelection);
        })

        it('type destination', function () {
            flightsPage.typeDestination(DestinationInput);
        });

        it('select single destination', function () {
            flightsPage.selectSingleDestination(DestinationSelection);
        });

        it('set passengers', function () {
            flightsPage.setPassengers({
                Adults: Passengers.Adults,
                Seniors: Passengers.Seniors,
                Youth: Passengers.Youth,
                Child: Passengers.Child,
                SeatInfant: Passengers.SeatInfant,
                LapInfant: Passengers.LapInfant
            });
        });

        it('set departure date and arrival date', function () {
            const month = "2022-01"
            const departureDate = Departure
            const arrivalDate = Arrival
            const dateObj = { month: month, departureDate: departureDate, arrivalDate: arrivalDate }

            flightsPage.openCalendar()
            flightsPage.selectDateRange(dateObj)
        });

        it('click search button', function () {
            flightsPage.clickSearchButton();
        });
    })
})


describe('Compare rates', function () {

    it('rates sections are visible', function () {
        flightsPage.isBestVisible()
        flightsPage.isCheapestVisible()
        flightsPage.isQuickestVisible()
    });

    it('get and compare rates', function () {
        const bestPrice = flightsPage.getBestPrice()
        const cheapestPrice = flightsPage.getCheapestPrice()
        const quickestDurationPrice = flightsPage.getQuickestDurationPrice()

        console.log(`Best price: ${bestPrice}`)
        // console.log(`Cheapest price: ${cheapestPrice}`)
        // console.log(`Quickest duration price: ${quickestDurationPrice}`)
    })
})
describe('toggle flight type', function () {
    it('toggle flight type and confirm the changes in search options', function () {
        flightsPage.toggleFlightType('Multi-city')
        flightsPage.countMultiCitySearchInputs()

    })

})
describe('Search for an airport by airport code', function () {
    it('search for an airport by airport code', function () {
        flightsPage.searchAirportByCodeOrPartialName('DXB', 'Dubai')
        cy.reload();
        flightsPage.searchAirportByCodeOrPartialName('Tokyo Ha', 'Haneda')

    })
})