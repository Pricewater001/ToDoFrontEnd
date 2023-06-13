import React, { useState } from "react";
import {
  useToast,
  Button,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBreakpointValue,
  Checkbox,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ShadowBox from "./ShadowBox";
import "../assets/css/loging.css";

const Signup = ({ setShowLoginForm }) => {
  const { handleSubmit, errors, register } = useForm();
  const [rememberMe, setRememberMe] = useState(false);
  const columnCount = useBreakpointValue({ base: 1, md: 2 });
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordMatch = password === confirmPassword;

  const handleSwitchToLogin = () => {
    setShowLoginForm(true);
  };

  const onSubmit = async () => {
    if(!email){
      toast({
        title: 'Error',
        description: "Please Enter a valid Email",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return;
    }
    if(!password){
      toast({
        title: 'Error',
        description: "Please Enter a valid password",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return;
    }
  
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: "The passwords do not match",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return;
    }
    const data = {
      email,
      password,
      confirmPassword,
      rememberMe
    };

    console.log("Form data", data);
  };

  return (
    <ShadowBox>
      <Text fontSize="4xl" color="white">
        TO DO LIST
      </Text>
      <Text fontSize="6xl" width="100%" color="white">
        {" "}
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
        </InputGroup>

        <Text mb="8px" mt={4} color="white">
          CONFIRM PASSWORD
        </Text>
        <InputGroup size="md" mt={2}>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            isInvalid={!isPasswordMatch}
            bg="white"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        {password && confirmPassword && !isPasswordMatch && (
          <div style={{ color: "red" }}>Passwords do not match</div>
        )}
      </div>
      <HStack spacing={4} mt={4} flexWrap={{ base: "wrap", md: "nowrap" }}>
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
          onClick={handleSubmit(onSubmit)}
        >
          Sign up
        </Button>
      </HStack>
      <Button
        bg="transparent"
        color="white"
        variant="link"
        // width="100%"
        mt={4}
        onClick={handleSwitchToLogin}
      >
        Already have an account? Log in
      </Button>
    </ShadowBox>
  );
};

export default Signup;
