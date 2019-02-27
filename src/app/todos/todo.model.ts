export class Todo {
    public desc: string;
    public isDone: boolean;

    constructor (desc: string, isDone: boolean){
        this.desc = desc;
        this.isDone = isDone;
    }
}