//Spy is used to check for functions return values, arguments etc
let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
let Student = require('../controllers/studentController')

let studentObj = new Student();

describe('----------spyyy-------', () => {
    it('test user function', () => {
        expect(studentObj.userId()).to.be.equal(12);
    })

    // it('check function count', () => {
    //     let spyObject = sinon.spy(studentObj, 'getInfo')
    //     studentObj.home(5);
    //     expect(spyObject.calledTwice).to.be.true;
    // })

    it('function arguments check', () => {
        let spyObject = sinon.spy(studentObj, 'getInfo')
        studentObj.home(5);
        expect(spyObject.calledWith(5)).to.be.true;
    })
})


