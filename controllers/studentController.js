class Student{
    constructor(){

    }

    home(type){
        let data = this.getInfo(type, 1);
        this.getInfo(type, 1);
        return data;
    }

    userId(){
        return 12;
    }

    getInfo(typr, status){
        return 10;
    }

    finalMarks(total){
        let external = this.getExternalMarks(total);
        let internal = this.getInternalMarks(total);
        let finalSum = external + internal + 10;

        return finalSum;

    }

    getExternalMarks(total){
        return total +1;
    }

    getInternalMarks(total){
        return total - 1;
    }
}

module.exports = Student;