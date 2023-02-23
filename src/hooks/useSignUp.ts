import { useState } from "react";
import { NextApiRequest, NextApiResponse } from "next";

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUp = async (username: string, password: string, passwordConfirmation: string) => {
    setIsLoading(true);

  }
  return { signUp, isLoading}
}