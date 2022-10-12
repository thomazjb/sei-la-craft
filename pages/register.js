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
import { BiCool } from "react-icons/bi";
import axios from "axios";
import {useRouter} from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEnvelope = chakra(FaEnvelope);
  

const Register = () => {
  const { data: session, status } = useSession()
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const registerUser = async (event) => {
    event.preventDefault()
    
    const data = {
        name: name,
        username: username,
        email: email,
        password: password
    }

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    
    await axios.post('/api/register', data, axiosConfig);
    signIn("credentials", {
        username, password, callbackUrl: `${window.location.origin}/dashboard`, redirect: false }
    ).then(function(result) {
        router.push(result.url)
    }).catch(err => {
        alert("Falha ao se registrar: " + err.toString())
    });
  }

  const handleShowClick = () => setShowPassword(!showPassword);

  return (

    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
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
        <Heading color="teal.400">Registre-se </Heading>
        <Box minW={{ base: "90%", md: "468px" }} >
          <form onSubmit={registerUser}>
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
                    children={<CFaUserAlt color="whiteAlpha.900" />}
                  />
                  <Input type="text" placeholder="Nome" _placeholder={{ opacity: 0.7, color: 'whiteAlpha.900' }} value={name} onChange={(e) => setName(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                  color="whiteAlpha.900"
                    pointerEvents="none"
                    children={<CFaUserAlt color="whiteAlpha.900" />}
                  />
                  <Input type="text" placeholder="Username" _placeholder={{ opacity: 0.7, color: 'whiteAlpha.900' }} value={username} onChange={(e) => setUsername(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                  color="whiteAlpha.900"
                    pointerEvents="none"
                    children={<CFaEnvelope color="whiteAlpha.900" />}
                  />
                  <Input type="email" placeholder="Email" _placeholder={{ opacity: 0.7, color: 'whiteAlpha.900' }} value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    value={password} onChange={(e) => setPassword(e.target.value)} />
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
                Registrar
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Ja possui uma conta?{" "}
        <Link color="yellow.100" href="/login">
          Logar
        </Link>
      </Box>
    </Flex>
  );
};

export default Register;
