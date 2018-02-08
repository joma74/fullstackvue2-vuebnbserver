import { sfn } from "./store-function-names";
import { names } from "./router-names";
import models from "../../../types/vuebnb"

export interface VuebnbStoreState {
  saved: number[];
  listing_summaries: vuebnb.ServerSummaryListingModel[];
  listings: vuebnb.ServerListingModel[];
}

interface ToggleSavePayloadObject extends ToggleSavePayload {
  type: sfn.m_toggleSaved;
}

interface AddDataPayloadObject extends AddDataPayload {
  type: sfn.m_addData;
}

type PayloadObjects = ToggleSavePayloadObject | AddDataPayloadObject;

export interface ToggleSavePayload {
  id: number;
}

export interface AddDataPayload {
  data: vuebnb.ServerDataModel;
  routeName: names
}

type Payloads = ToggleSavePayload | AddDataPayload;

export declare interface VuebnbStoreMethods {
  commit(mutationMethods: sfn, payload: Payloads);
  commit(payloadObject: PayloadObjects);
}

export declare interface VuebnbStore extends VuebnbStoreMethods {
  state: VuebnbStoreState;
}
