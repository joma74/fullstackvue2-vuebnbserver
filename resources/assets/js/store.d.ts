import { sfn } from "./store-function-names";

export interface VuebnbStoreState {
  saved: number[];
}

interface ToggleSavePayloadObject extends ToggleSavePayload {
  type: sfn.m_toggleSaved;
}

type PayloadObjects = ToggleSavePayloadObject;

export interface ToggleSavePayload {
  id: number;
}

type Payloads = ToggleSavePayload;

export declare interface VuebnbStoreMethods {
  commit(mutationMethods: sfn, payload: Payloads);
  commit(payloadObject: PayloadObjects);
}

export declare interface VuebnbStore extends VuebnbStoreMethods {
  state: VuebnbStoreState;
}
