//Stub is used to check for functions return values, arguments etc
let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
let Student = require('../controllers/studentController')

let studentObj = new Student();

describe('----------stub------------', () => {

    it('function arguments check', () => {
        let stub = sinon.stub(studentObj, 'getExternalMarks')

        stub.withArgs(40).returns(5);
        expect(studentObj.finalMarks(40)).to.be.equal(54);
    })
})


