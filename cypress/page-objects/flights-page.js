

const { _, $ } = Cypress


class FlightsPage {

    visitFlightsPage() {
        cy.visit('/')
    }

    typeOrigin(origin) {
        cy.get('.vvTc-item-close').click({ multiple: true })
        cy.get('.zEiP-origin > .d_E3 > .lNCO').should('have.text', 'From?').click({ force: true })
        cy.get('.k_my-input').type(origin)
        cy.wait(3000)
    }

    selectSingleOrigin(origin) {
        cy.get('.QHyi-mod-focused')
            .should('contain', origin)
            .click({ force: true })
    }

    typeDestination(destination) {
        cy.get('.zEiP-destination > .d_E3 > .lNCO').should('have.text', 'To?').click({ force: true })
        cy.get('.k_my-input').type(destination)
        cy.wait(3000)
    }

    selectSingleDestination(destination) {
        cy.get('.QHyi-mod-focused')
            .should('contain', destination)
            .click({ force: true })
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
        cy.get(`[data-month=${month}] > .onx_-days > [aria-label="${departureDate}"]`).click()
        cy.get(`[data-month=${month}] > .onx_-days > [aria-label="${arrivalDate}"]`).click()
    }

    clickSearchButton() {
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
        cy.get('.js-price').then(($el) => {
            const price = $el.text()
            return price
        })
    }
    getCheapestPrice() {
        cy.get('#ZxNX-price_aTab > ._iKN > .js-sort-tab-row > :nth-child(1) > ._id7 > .js-label').then(($el) => {
            const price = $el.text()
            return price
        })
    }
    getQuickestDurationPrice() {
        cy.get('#Tevn-duration_aTab > ._iKN > .js-sort-tab-row > :nth-child(1) > ._id7 > .js-label').then(($el) => {
            const price = $el.text()
            return price
        })
    }
    toggleFlightType(type) {
        cy.get('.zcIg > :nth-child(1) > .wIIH > .wIIH-handle > .wIIH-mod-alignment-left').click()
        cy.get(`.QHyi > [aria-label="${type}"]`).should('contain', type).click()
    }
    countSearchInputs(type) {
        cy.get('.zEiP').children().should('have.class', 'olmX-multicityContainer')
    }
}

export default FlightsPage