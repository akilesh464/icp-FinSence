import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'addComplaint' : ActorMethod<[string, string], boolean>,
  'getComplaintCount' : ActorMethod<[], bigint>,
  'getData' : ActorMethod<[], Array<Array<string>>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
