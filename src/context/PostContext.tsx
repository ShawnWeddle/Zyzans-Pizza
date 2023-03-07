import { createContext, useReducer } from "react";
import type { PostDocument, UnoccupiedPostType } from "../data/data";
import { basePostArray } from "../data/data";

export const PostContext = createContext<ContextType | null>(null);

type ContextType = {
  postState: {
    windowMode: string;
    activePost: PostDocument | UnoccupiedPostType;
    posts: (PostDocument | UnoccupiedPostType)[];
  };
  postDispatch: React.Dispatch<{
    type: string;
    payload: {
      windowMode: string;
      activePost: PostDocument | UnoccupiedPostType;
      posts: (PostDocument | UnoccupiedPostType)[];
    };
  }>;
};

type PostContextProviderProps = {
  children: React.ReactNode;
};

type PostReducerState = {
  windowMode: string;
  activePost: PostDocument | UnoccupiedPostType;
  posts: (PostDocument | UnoccupiedPostType)[];
};
type PostReducerAction = {
  type: string;
  payload: {
    windowMode: string;
    activePost: PostDocument | UnoccupiedPostType;
    posts: (PostDocument | UnoccupiedPostType)[];
  };
};

export const postReducer = (
  state: PostReducerState,
  action: PostReducerAction
) => {
  switch (action.type) {
    case "CHANGE-WINDOW-MODE":
      state.windowMode = action.payload.windowMode;
      return state;
    default:
      return state;
  }
};

export const PostContextProvider = ({ children }: PostContextProviderProps) => {
  const [postState, postDispatch] = useReducer(postReducer, {
    windowMode: "CLOSED",
    activePost: { _id: "NoID", username: "", message: "", location: -1 },
    posts: basePostArray(),
  });

  return (
    <PostContext.Provider value={{ postState, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};
