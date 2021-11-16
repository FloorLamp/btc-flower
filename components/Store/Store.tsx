import { HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import React, { createContext, useContext, useReducer } from "react";
import { defaultAgent } from "../../lib/canisters";

export type State = {
  agent: HttpAgent;
  isAuthed: boolean;
  principal: Principal | null;
  showLoginModal: boolean;
};

export const INITIAL_MOCK_STATE = {
  active: true,
  events: { events: [], count: BigInt(0) },
  art: [],
  status: {
    status: {
      owner: null,
      offerValue: 1,
      offerTimestamp: BigInt(0),
      isForeclosed: false,
    },
    details: null,
    projectId: "0",
    owner: null,
  },
  now: BigInt(0),
};

const initialState: State = {
  agent: defaultAgent,
  isAuthed: false,
  principal: null,
  showLoginModal: false,
};

type Action =
  | {
      type: "SET_AGENT";
      agent: HttpAgent | null;
      isAuthed?: boolean;
    }
  | {
      type: "SET_PRINCIPAL";
      principal: Principal;
    }
  | {
      type: "SET_LOGIN_MODAL";
      open: boolean;
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_AGENT":
      const agent = action.agent || defaultAgent;
      return {
        ...state,
        agent,
        isAuthed: !!action.isAuthed,
      };
    case "SET_PRINCIPAL":
      return {
        ...state,
        principal: action.principal,
      };
    case "SET_LOGIN_MODAL":
      return {
        ...state,
        showLoginModal: action.open,
      };
  }
};

const Context = createContext({
  state: initialState,
  dispatch: (_: Action) => null,
});

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a CountProvider");
  }
  return context;
};

export const useLoginModal = () => {
  const context = useGlobalContext();
  return [
    context.state.showLoginModal,
    (open: boolean) => context.dispatch({ type: "SET_LOGIN_MODAL", open }),
  ] as const;
};

export const useSetAgent = () => {
  const { dispatch } = useGlobalContext();

  return async ({
    agent,
    isAuthed,
  }: {
    agent: HttpAgent;
    isAuthed?: boolean;
  }) => {
    dispatch({ type: "SET_AGENT", agent, isAuthed });
    if (isAuthed) {
      const principal = await agent.getPrincipal();
      console.log("authed", principal.toText());

      dispatch({
        type: "SET_PRINCIPAL",
        principal,
      });
    } else {
      dispatch({ type: "SET_PRINCIPAL", principal: null });
    }
  };
};

export default Store;
