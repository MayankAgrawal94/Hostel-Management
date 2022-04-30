process.env.enableJest = true

const testing = require('../server');

const testCase1 = {
    test_data: [
        "init 12",
        "reg 1 B V",
        "reg 2 A V",
        "reg 3 A V",
        "reg 4 B NV",
        "reg 5 B V",
        "reg 6 A NV",
        "reg 7 A V",
        "reg 8 A NV",
        "reg 9 B NV",
        "reg 10 B V",
        "reg 11 A NV",
        "reg 12 B NV",
        "fin"
    ],
    result: {"BV":[1,5,10], "AV":[2,3,7], "BNV":[4,9,12], "ANV":[6,8,11], "NA":[]}
}

const testCase2 = {
    test_data: [
        "init 12",
        "reg 1 B V",
        "reg 2 A V",
        "reg 3 A V",
        "reg 4 B NV",
        "reg 5 B V",
        "reg 6 A NV",
        "reg 8 A NV",
        "reg 9 B NV",
        "reg 7 A V",
        "reg 10 B V",
        "reg 11 A NV",
        "reg 12 B NV",
        "reg 13 A NV",
        "fin"
    ],
    result: {"BV":[1,5,10], "AV":[2,3,7], "BNV":[4,9,12], "ANV":[6,8,11], "NA":[13]}
}

test('Test case 1', () => {
    testing( testCase1.test_data, function(TEST_CB){
        expect( TEST_CB ).toMatchObject( testCase1.result );
    })
});

test('Test case 2', () => {
    testing( testCase2.test_data, function(TEST_CB){
        expect( TEST_CB ).toMatchObject( testCase2.result );
    })
});