// export interface Product {

//         itemId:number;
//         category:string;
//         subCategory:string;
//         description:string;
//         price: {pri:number,specification:string};
//         discount:number;
//         image:string,
        //  available:number
    
//     }


    export class Product{

      constructor (
        public itemId:number,
        public name:string,
        public category:string,
        public subCategory:string,
        public description:string,
        public price: {pri:number,specification?:string},
        public discount:number,
        public image:string,
        public available:number,

      ){}

    }

