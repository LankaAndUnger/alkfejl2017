import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Login functionality', () => {
  beforeEach(() => {
    browser.get('/registration');
  });

  it('should navigate to the registration page', () => {
    // Elvárt eredmény
    expect(getPath()).toEqual('/registration');
  });

  it('should fail to register with empty credentials', () => {
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });

  it('should fail to register with username-in-use', () => {
    element(by.css('#username')).sendKeys('asd');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('06701234567');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });

  it('should fail to register with invalid lastname', () => {
    element(by.css('#username')).sendKeys('testuser');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('06701234567');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
  
  it('should fail to register with invalid first name', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('06701234567');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
  
  it('should fail to register with invalid email - attempt 1', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('06701234567');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
    
    it('should fail to register with invalid email - attempt 2', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('06701234567');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
    
    it('should fail to register with invalid phone number - attempt 1', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
  
  it('should fail to register with invalid phone number - attempt 2', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('0699243253453453');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
  
  it('should fail to register with invalid phone number - attempt 3', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#phoneNumber')).sendKeys('0670334');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
    
    it('should fail to register with invalid address', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#phoneNumber')).sendKeys('06701112233');
    element(by.css('#Regisztráció')).click();
    expect(getPath()).toEqual('/registration');
  });
  
  it('should accept with valid credentials', () => {
    element(by.css('#username')).sendKeys('valami');
    element(by.css('#lastName')).sendKeys('Gipsz');
    element(by.css('#firstName')).sendKeys('Jakab');
    element(by.css('#email')).sendKeys('notexisting@email.com');
    element(by.css('#password')).sendKeys('valami');
    element(by.css('#phoneNumber')).sendKeys('06701112233');
    element(by.css('#address')).sendKeys('Budapest');
    element(by.css('#Regisztráció')).click();
    expect(browser.navigate('/registration'));
  });
});
