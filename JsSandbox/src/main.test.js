const { fillTemplate } = require('./main')

describe('numPrettier(num, splitter)', () => {
    it('should return sum', () => {
        //Given
        const template = 'blah-blah-blah _x_ and again some cope of _y_ blah-blah';
        const values = [
                {
                    "name": "x",
                    "value": "hello"
                },
                {
                    "name": "y",
                    "value": "bye"
                }
        ];

        const expected = 'blah-blah-blah hello and again some cope of bye blah-blah';

        //When
        const actual = fillTemplate(template, values);

        //Then
        expect(actual).toEqual(expected);
    })

    it('should return call function', () => {
        //Given
        const utilObj = {
          hello(){
              console.log('aa');
          }
        };
        const targetObj = {"name":"Tom","id":"3"};
        const param = 'ID';

        //typeof Object.values(utilObj)[0] === function
   //     console.log(utilObj);
        for(let key in utilObj){
           if(typeof utilObj[key] === 'function'){
             utilObj[key].call(targetObj,param);
           }
        }
    })
})