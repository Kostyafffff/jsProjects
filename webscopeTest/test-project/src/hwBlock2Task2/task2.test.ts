import {task2} from "./task2";

describe('hwBlock2Task2 tests', () =>{
    it.each`
        data                                        | expected
        ${'http://github.com/carbonfive/raygun'}    | ${'github'}
        ${'http://www.zombie-bites.com'}            | ${'zombie-bites'}
        ${'https://www.cnet.com'}                   | ${'cnet'}
    `('should return $expected', ({data, expected}) => {
        //When
        const actual = task2(data);

        //Then
        expect(actual).toEqual(expected);
    })
})
