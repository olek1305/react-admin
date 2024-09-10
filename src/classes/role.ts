export class Role {
    id: number;
    name: string;
    permisisons: Permissions[];

    constructor(id: number = 0, name: string = "", permisisons: any[] = []) {
        this.id = id;
        this.name = name;
        this.permisisons = permisisons;
    }
}