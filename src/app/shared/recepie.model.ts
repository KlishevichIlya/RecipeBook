import {Ingredient} from "./ingredient.model";

export class Recepie{

    constructor(public id: number, public name: string, public description: string,
                public imagePath: string, public ingredients: Ingredient[]) {

    }
}
