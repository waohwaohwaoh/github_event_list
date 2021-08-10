import { Event } from "../models";

export interface IEvents {
    data: Event[],
    loading: boolean,
    error: any
}