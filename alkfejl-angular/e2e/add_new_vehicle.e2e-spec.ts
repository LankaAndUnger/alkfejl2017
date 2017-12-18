// import { browser, by, element } from 'protractor';
// import { getPath } from './getpath';
//
// describe('Login functionality', () => {
//   beforeEach(() => {
//     browser.get('/login');
//     element(by.css('input[type="text"]')).sendKeys('asd');
//     element(by.css('input[type="password"]')).sendKeys('asd123');
//     element(by.css('#Bejelentkezés')).click();
//     element(by.buttonText('Jármű hozzáadása')).click();
//   });
//
//   it('should navigate to the add vehicle page', () => {
//     // Elvárt eredmény
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for empty values', () => {
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for some empty values', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for negative vintage', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.css('#brand')).sendKeys('Honda');
//     element(by.css('#vintage')).sendKeys('-1');
//     element(by.css('#price')).sendKeys('5000');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for later vintage than current', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.css('#brand')).sendKeys('Honda');
//     element(by.css('#vintage')).sendKeys('2500');
//     element(by.css('#price')).sendKeys('5000');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for too short vintage', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.css('#brand')).sendKeys('Honda');
//     element(by.css('#vintage')).sendKeys('500');
//     element(by.css('#price')).sendKeys('5000');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for too long vintage', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.css('#brand')).sendKeys('Honda');
//     element(by.css('#vintage')).sendKeys('50000');
//     element(by.css('#price')).sendKeys('5000');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should fail for negative price', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.css('#brand')).sendKeys('Honda');
//     element(by.css('#vintage')).sendKeys('1999');
//     element(by.css('#price')).sendKeys('-1');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/addVehicle');
//   });
//
//   it('should pass for correct values', () => {
//     element(by.css('#plate')).sendKeys('XXD-123');
//     element(by.css('#accent')).sendKeys('Civic');
//     element(by.css('#brand')).sendKeys('Honda');
//     element(by.css('#vintage')).sendKeys('1999');
//     element(by.css('#price')).sendKeys('5000');
//     element(by.buttonText('Küldés')).click();
//     expect(getPath()).toEqual('/vehicle');
//
//   });
// });
