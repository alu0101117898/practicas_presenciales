/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * Se desarrolla la clase abstracta FilterList que contiene 
 * un atributo list de tipo number[] y un método abstracto 
 * filterList que recibe un parámetro de tipo función que retorna un booleano.
 */
export abstract class FilterList {

    protected list: number[];
    constructor(list: number[]) {
        this.list = list;
    }

    public run () {
        this.list = this.filterList((num) => num > 0);
        this.afterFilter();
        this.list = this.mapList((num) => num * 2);
        this.afterMap();
        this.reduceList(0);
        this.afterReduce();
    }
    
    /**
     * El método filterList recibe un parámetro de tipo función
     * y devuelve un array de números.
     * @param filter Parámetro de t
     * @returns 
     */
    protected filterList(filter: (num:number) => boolean): number[] {
        const filteredList: number[] = [];
        this.list.forEach((num) => {
            if (filter(num)) {
                filteredList.push(num);
            }
        });
        return filteredList;
    }

    /**
     * El método `mapList` recibe un parámetro de tipo función
     * y devuelve un array de números.
     * @param map Parámetro de tipo función que recibe un número y retorna un número.
     * @returns La lista de números mapeada.
     */
    protected mapList(map: (num:number) => number): number[] {
        const mappedList: number[] = [];
        this.list.forEach((num) => {
            mappedList.push(map(num));
        });
        return mappedList;
    }

    protected abstract reduceList(num:number): number;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected afterFilter(): void {}
    protected afterMap(): void {}
    protected afterReduce(): void {}
    
}
