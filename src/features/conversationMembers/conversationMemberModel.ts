import { AppState } from "main/storeTypes";
import { createSelector } from "reselect";
import { createChannelMembersReducer } from "pubnub-redux";

export type MembershipHash = { [id: string]: { id: string }[] };

export interface ConversationMembers {
  [conversationId: string]: string[];
}

const getByConversationIdSlice = (state: AppState) => state.conversationMembers;

export const getUsersByConversationId = createSelector(
  [getByConversationIdSlice],
  (users: { byId: MembershipHash }) => {
    return users.byId;
  }
);

const ConversationMembersStateReducer = createChannelMembersReducer();

export { ConversationMembersStateReducer };
