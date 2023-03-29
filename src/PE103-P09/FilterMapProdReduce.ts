import { FilterList } from "./FilterListBase";

/**
 * Se desarrolla la clase FilterMapAddReduce que extiende de la clase FilterList.
 * Esta clase contiene un método abstracto reduceList que recibe un parámetro de tipo número.
 * @param list Parámetro de tipo número.
 * @returns La lista de números reducida.
 */
export class FilterMapProdReduce extends FilterList {
    constructor(list: number[]) {
        super(list);
    }

    protected reduceList(num: number): number {
        let acc: number = num;
        this.list.forEach((num) => {
            acc = acc * num;
        });
        return acc;
    }

    protected afterFilter(): void {
        console.log("Resultado de la lista filtrada: " + this.list);
    }

    protected afterMap(): void {
        console.log("Resultado de la lista mapeada: " + this.list);
    }

    protected afterReduce(): void {
        console.log("Resultado de la lista reducida: " + this.list);
    }
}