const chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

//================ ASSERTS ===============
describe('assert check', () => {

    let userName = 'Shamail';
    let list = {
        item:[{
            id: 1, name: 'Shamail'
        }],
        title: 'userlist'
    }
    it('check string', () => {
        assert.typeOf(userName, 'string', 'username is not a string');
    })

    it('equal match', () => {
        assert.equal(userName, 'Shamail', "username is not shamail");
    })

    it('check length', () => {
        assert.lengthOf(list.item, 1)
    })
});


//================ SHOULD ===============
describe('should check', () => {
    let userName = 'Shamail';
    let list = {
        item:[{
            id: 1, name: 'Shamail'
        }],
        title: 'userlist'
    }

    it('check string', () => {
        userName.should.be.a('string');
    })

    it('equal match', () => {
        userName.should.be.equal('Shamail', "username is not shamail");
    })

    it('check length', () => {
        list.should.have.property('item').with.lengthOf(1)
    })
})

//================ EXPECt ===============
describe('expect check', () => {
    let userName = 'Shamail';
    let list = {
        item:[{
            id: 1, name: 'Shamail'
        }],
        title: 'userlist'
    }

    it('check string', () => {
        expect(userName).to.be.a('string');
    })

    it('equal match', () => {
        expect(userName).to.be.equal('Shamail', "username is not shamail");
    })

    it('check length', () => {
        expect(userName).to.be.lengthOf(7);
    })

    it('check list item length', () => {
        expect(list).to.have.property('item').with.lengthOf(1)
    })

    it('api object keys', () => {
        expect(list).to.have.all.keys('item', 'title')
    })

 
})