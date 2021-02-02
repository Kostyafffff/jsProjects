export const task2 = (str: string): string => {
   const arr = str.split('.');

   let counter = 0;
   let res = '';

   str.split('').forEach(it => {
       if( it === '.'){
           counter++;
       }
   })

   if(counter === 1) {
       res = arr[0].split('')
           .slice(arr[0].lastIndexOf('/')+ 1, arr[0].length)
           .join('');
   }

   if(counter === 2) {
       res = arr[1];
   }

   return res;
}
