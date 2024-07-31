export type CustomNavigator = Navigator & {
  userLanguage: string;
};

export type Loading = "idle" | "loading" | "success" | "error";
