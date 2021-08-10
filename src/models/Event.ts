
export class Event{
    readonly id: string;
    readonly actor: any;
    readonly created_at: string;
    readonly payload: any;
    readonly visible: boolean;
    readonly repo: any;
    readonly type: string;
    constructor(
        id: string,
        actor: any,
        created_at: string,
        payload: any,
        visible: boolean,
        repo: any,
        type: string
    ){
        this.id = id,
        this.actor = actor,
        this.created_at = created_at,
        this.payload = payload,
        this.visible = visible,
        this.repo = repo,
        this.type = type
    }
}