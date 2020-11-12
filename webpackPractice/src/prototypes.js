class Component{
    constructor(name){
        this.name = name;
    }
}

class Menu extends Component{
    constructor(name,type){
        super(name);
        this.type = type;
        this.items = new Set();
    }

    saveItems(){
        return this.items.forEach(it => it.toString().toLocaleUpperCase());
    }

    add(elem){
        return this.items.add(elem.toLocaleUpperCase());
    }

    remove(elem){
        return this.items.forEach(it => it.toString().toLocaleUpperCase());
    }

    get len(){
        return this.itmes.size;
    }

    get fullName(){
        return `${this.type}_${this.name}`
    }

    set fullName(fullName){
        if(fullName.includes('_')){
            this.type = fullName.split('_')[0];
            this.name = fullName.split('_')[1];
        }
        else {
            this.name = fullName;
        }
    }
}
