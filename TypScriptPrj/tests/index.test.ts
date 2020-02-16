import "jest";
import { mult } from "../src";
describe('should  sum', () => {
      it('should return sum',  () => {
          //Given
            const a = mult(1, 2);
            console.log(a);
            expect(mult( 1 , 2)).toEqual(2);
      })
});