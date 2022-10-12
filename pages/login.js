import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEyeSlash, FaEye, FaEnvelope} from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react"
import {useRouter} from "next/router";
import { BiCool } from "react-icons/bi";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {


const router = useRouter()
const [showPassword, setShowPassword] = useState(false);

const [username, setUser] = useState('');
const [password, setPassword] = useState('');
const [loginError, setLoginError] = useState('');

const handleLogin = (event) => {
event.preventDefault();
event.stopPropagation();

signIn("credentials", {
    username, password, callbackUrl: `${window.location.origin}/dashboard`, redirect: false }
).then(function(result){
    if (result.error !== null)
    {
      console.log(result);
        if (result.status === 401)
        {
            setLoginError("Your username/password combination was incorrect. Please try again");
        }
        else
        {
            setLoginError(result.error);
        }
    }
    else
    {
        router.push(result.url);
    }
});
}

const handleShowClick = () => setShowPassword(!showPassword);


  return (

    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      //bg='whiteAlpha.900'
      backdropFilter='blur(5px)'
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2" 
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" icon={<BiCool fontSize='3.5rem' />} />
        <Heading color="teal.400">Bem-vindo! </Heading>
        <Box minW={{ base: "90%", md: "468px" }} >
        {loginError}
          <form onSubmit={handleLogin}> 
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="teal"
              borderRadius='lg' 
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                  color="whiteAlpha.900"
                    pointerEvents="none"
                    children={<FaEnvelope color="whiteAlpha.900" />}
                  />
                  <Input type="text" placeholder="Username" _placeholder={{ opacity: 0.7, color: 'whiteAlpha.900' }} value={username} onChange={(e) => setUser(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="whiteAlpha.900"
                    children={<CFaLock color="whiteAplha.900" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha" _placeholder={{ opacity: 0.7, color: 'whiteAlpha.900' }}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="3.5rem">
                    <Button h="1.5rem" size="sm" onClick={handleShowClick} color="gray">
                      {showPassword ? <FaEye/> : <FaEyeSlash/> }
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color="white" textAlign="right">
                  <Link>esqueceu a senha?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius='lg' 
                type="submit"
                variant="solid"
                colorScheme="green"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Novo aqui?{" "}
        <Link color="yellow.100" href="/register">
          Registrar
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
