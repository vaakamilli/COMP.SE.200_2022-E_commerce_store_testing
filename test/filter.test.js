import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect
const workers = [{ 'worker': 'john', 'working': true, 'id': '1', 'hoursWorkedThisWeek': 9 }, 
{ 'worker': 'jack',   'working': false, 'id': '2', 'hoursWorkedThisWeek': 4 }, 
{ 'worker': 'timothy', 'working': true, 'id': '3', 'hoursWorkedThisWeek': 21 }, 
{ 'worker': 'harry', 'working': false, 'id': '4', 'hoursWorkedThisWeek': 2 }]

describe("Filter", () => {
    it("Filter out all workers who are not working", () =>{
        expect(filter(workers, ({ working }) => working)).to.deep.equal([{ 'worker': 'john', 'working': true, 'id': '1', 'hoursWorkedThisWeek': 9 },
        { 'worker': 'timothy', 'working': true, 'id': '3', 'hoursWorkedThisWeek': 21 }])
    });
    it("Find worker whose id is 4", () =>{
        expect(filter(workers, ({ id }) => id == '4')).to.deep.equal([{ 'worker': 'harry', 'working': false, 'id': '4', 'hoursWorkedThisWeek': 2 }])
    });
    it("Find worker named Timothy", () =>{
        expect(filter(workers, ({ worker }) => worker == 'timothy')).to.deep.equal([{ 'worker': 'timothy', 'working': true, 'id': '3', 'hoursWorkedThisWeek': 21 }])
    });
    it("Filter out workers who have worked for more than 20 hours this week", () =>{
        expect(filter(workers, ({ hoursWorkedThisWeek }) => hoursWorkedThisWeek <= 20)).to.deep.equal([{ 'worker': 'john', 'working': true, 'id': '1', 'hoursWorkedThisWeek': 9 }, 
        { 'worker': 'jack',   'working': false, 'id': '2', 'hoursWorkedThisWeek': 4 }, { 'worker': 'harry', 'working': false, 'id': '4', 'hoursWorkedThisWeek': 2 }])
    });
    it("Search for a worker who is not present in the array", () =>{
        expect(filter(workers, ({ worker }) => worker == 'emma')).to.deep.equal([[]])
    });
   })