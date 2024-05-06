import React from "react";
import {
  FormErrorMessage,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export const Form: React.FC = () => {
  type FormState = {
    email: string;
    password: string;
    isEmailValid: boolean;
    isPasswordValid: boolean;
  };

  const [formState, setFormState] = React.useState<FormState>({
    email: "",
    password: "",
    isEmailValid: true,
    isPasswordValid: true,
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setFormState(prevState => ({
      ...prevState,
      email: emailValue,
      isEmailValid: /^\S+@\S+\.\S+$/.test(emailValue),
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setFormState(prevState => ({
      ...prevState,
      password: passwordValue,
      isPasswordValid: passwordValue.length >= 8,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.isEmailValid && formState.isPasswordValid) {
      console.log("Registration data:", {
        email: formState.email,
        password: formState.password,
      });
    }
  };

  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired isInvalid={!formState.isEmailValid}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formState.email}
            onChange={handleEmailChange}
          />
          {!formState.isEmailValid && (
            <FormErrorMessage>Enter a valid email.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={!formState.isPasswordValid}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formState.password}
            onChange={handlePasswordChange}
          />
          {!formState.isPasswordValid && (
            <FormErrorMessage>
              Password must be at least 8 characters long.
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          mt={4}
          isDisabled={!formState.isEmailValid || !formState.isPasswordValid}
        >
          Submit
        </Button>
      </form>
    </ChakraProvider>
  );
};
