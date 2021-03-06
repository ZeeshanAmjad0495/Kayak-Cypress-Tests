const { _, $ } = Cypress


class FlightsPage {

    jsonToArray(json) {
        return Object.keys(json).map(key => json[key])
    }

    visitFlightsPage() {
        cy.visit('/')
    }
    clearOriginInput() {
        cy.get('.vvTc-item-icon').click({ force: true, multiple: true })
        cy.wait(2000)
    }

    typeOrigin(origin) {
        this.clearOriginInput()
        cy.get('.zEiP-origin > .d_E3 > .lNCO').should('have.text', 'From?').click({ force: true })
        cy.get('.k_my-input').type(origin, { force: true })
        cy.wait(3000)
    }

    selectSingleOrigin(origin) {
        let re = new RegExp(`\\b${origin}\\b`, 'gi')
        cy.get('.QHyi')
            .children()
            .contains(re)
            .click({ force: true, multiple: true })
    }

    typeDestination(destination) {
        cy.get('.zEiP-destination > .d_E3 > .lNCO').contains('To?').click({ force: true })
        cy.get('.k_my-input').type(destination)
        cy.wait(3000)
    }

    selectSingleDestination(destination) {
        let re = new RegExp(`\\b${destination}\\b`, 'gi')
        cy.get('.QHyi')
            .children()
            .contains(re)
            .click({ force: true, multiple: true })
    }

    setPassengers({ Adults, Seniors, Youth, Child, SeatInfant, LapInfant }) {

        cy.get(':nth-child(2) > .S9tW > .S9tW-title').click()
        cy.get('.UKFa-dropdownOptions').should('be.visible')


        _.times(Adults - 1, () => cy.get(':nth-child(1) > .bCGf > :nth-child(3)')
            .click()
        )

        _.times(Seniors, () => cy.get(':nth-child(3) > .bCGf > :nth-child(3)')
            .click()
        )

        _.times(Youth, () => cy.get(':nth-child(4) > .bCGf > :nth-child(3)')
            .click()
        )

        _.times(Child, () => cy.get(':nth-child(5) > .bCGf > :nth-child(3)')
            .click()
        )

        _.times(SeatInfant, () => cy.get(':nth-child(6) > .bCGf > :nth-child(3)')
            .click()
        )

        _.times(LapInfant, () => cy.get(':nth-child(7) > .bCGf > :nth-child(3)')
            .click()
        )

    }
    openCalendar(date) {
        cy.get(':nth-child(1) > .cQtq-date').click()
        cy.wait(2000)
    }

    selectDateRange({ month, arrivalDate, departureDate }) {
        cy.get(`[aria-label="${departureDate}"]`).click()
        cy.get(`[aria-label="${arrivalDate}"]`).click()
    }

    clickSearchButton() {
        cy.get('body').type('{esc}')
        cy.get('.zEiP-submit > .Iqt3').click()
        cy.wait(10000)
    }
    isBestVisible() {
        cy.get('span[class="_iM-"]').should('be.visible').and('contain', 'Best')
    }
    isCheapestVisible() {
        cy.get('span[class="_iM-"]').should('be.visible').and('contain', 'Cheapest')
    }
    isQuickestVisible() {
        cy.get('span[class="_iM-"]').should('be.visible').and('contain', 'Quickest')
    }
    getBestPrice() {
        cy.get('#PUkJ-bestflight_aTab').children().should('contain', /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/).then(($el) => {
            const price = $el.text()
            return price
        })
    }
    getCheapestPrice() {
        cy.get('#PUkJ-price_aTab').children().should('contain', /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/).then(($el) => {
            const price = $el.text()
            return price
        })
    }
    getQuickestDurationPrice() {
        cy.get('#PUkJ-duration_aTab').children().should('contain', /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/).then(($el) => {
            const price = $el.text()
            return price
        })
    }
    toggleFlightType(type) {
        cy.get('.zcIg > :nth-child(1) > .wIIH > .wIIH-handle > .wIIH-mod-alignment-left').click()
        cy.get(`.QHyi > [aria-label="${type}"]`).should('contain', type).click()
    }
    countMultiCitySearchInputs() {
        cy.get('.olmX-multicityContainer').children().should('have.class', 'zEiP-formBody').should('have.length', 4)
    }
    searchAirportByCodeOrPartialName(code, selection) {
        this.typeOrigin(code)
        this.selectSingleOrigin(selection)
    }

}

export default FlightsPage