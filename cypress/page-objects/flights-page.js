

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
    openDepartureCalendar(date) {
        cy.get('.cQtq.nth-child(1)').click()
        wait(2000)
    }
    openArrivalCalendar(date) {
        cy.get('.cQtq.nth-child(3)').click()
        wait(2000)
    }
    clickSearchButton() {
        cy.get('.Iqt3').click()
        wait(3000)
    }
    selectBest() {
        cy.get('#xySY-bestflight_aTab', { timeout: 5000 }).click()
    }
    selectCheapest() {
        cy.get('#xySY-price_aTab', { timeout: 5000 }).click()
    }
    selectQuickest() {
        cy.get('#xySY-duration_aTab', { timeout: 5000 }).click()
    }
    getBestPrice() {
        cy.get('#xySY-bestflight_aTab ~ span').then(($el) => {
            const price = $el.text()
            return price
        })
    }
    getCheapestPrice() {
        cy.get('#xySY-price_aTab ~ span ').then(($el) => {
            const price = $el.text()
            return price
        })
    }
    getQuickestDurationPrice() {
        cy.get('#xySY-duration_aTab ~ span ').then(($el) => {
            const price = $el.text()
            return price
        })
    }

}

export default FlightsPage