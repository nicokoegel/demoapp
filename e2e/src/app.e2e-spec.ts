import { browser, by, element } from 'protractor';

describe('Taschenrechner App', () => {
  // sammeln der verwendeten Elemente der Webseite
  let param1 = element(by.id('param1'));
  let param2 = element(by.id('param2'));
  let operator = element(by.id('operator'));
  let btnBerechnen = element(by.id('btnBerechnen'));
  let result = element(by.id('result'));

  it('should open and calculate', () => {
    // öffen des Browser und Navigation zu dem lokal gestartetem Browser
    browser.get('http://localhost:4200/');
    // simuliseren von Tastatureingaben bei den Elementen
    param1.sendKeys(15);
    param2.sendKeys(3);
    // überprüfen ob '+' ausgewählt ist
    expect(operator.getText()).toContain('+');
    // Berechnung starten
    btnBerechnen.click();
    // Ergebnis überprüfen
    expect(result.getText()).toBe('18');
  });
});
