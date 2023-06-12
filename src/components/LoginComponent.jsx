import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Text,
  VStack,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ShadowBox from "./ShadowBox";
import "../assets/css/loging.css";

const LoginForm = ({setShowLoginForm}) => {
  const { handleSubmit, errors, register } = useForm();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleClick = () => setShow(!show);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSwitchToLogin = () => {
    setShowLoginForm(false);
  };

  const onSubmit = async () => {
    if (email.length === 0 || password.length === 0) {
      alert("please fill all data");
      return;
    }
    const data = {
      email,
      password,
      rememberMe,
    };

    console.log("Form data", data);
  };

  const columnCount = useBreakpointValue({ base: 1, md: 2 });

  return (
    <ShadowBox>
      <Text fontSize="4xl" color="white">
        TO DO LIST
      </Text>
      <Text fontSize="6xl"  width="100%" color="white">
        It's nice to have you back
      </Text>
      <Text mb="8px" mt={4} color="white">
        USERNAME
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          type="email"
          placeholder="Email"
          bg="white"
          value={email}
          onChange={handleEmailChange}
        />
      </InputGroup>
      <div>
        <Text mb="8px" mt={4} color="white">
          PASSWORD
        </Text>
        <InputGroup size="md" mt={2}>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            bg="white"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <HStack spacing={4} mt={4} flexWrap="wrap">
        <VStack
          align={columnCount === 2 ? "start" : "center"}
          flex={columnCount === 2 ? "0 0 auto" : "1"}
        >
          <Checkbox
            colorScheme="white"
            isChecked={rememberMe}
            onChange={handleRememberMeChange}
            mt={2}
            color="white"
          >
            Remember Me
          </Checkbox>
          <Link href="#" color="white" mt={2}>
            Forgot Password
          </Link>
        </VStack>
        <Spacer />
        <Button
          bg="black"
          color="white"
          variant="solid"
          mt={2}
          onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
      </HStack>
      <Button
        bg="transparent"
        color="white"
        variant="link"
        mt={4}
        onClick={handleSwitchToLogin}>
        Dont have an account ? Sign up
      </Button>
    </ShadowBox>
  );
};

export default LoginForm;
