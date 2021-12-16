import { useState } from "react";

import Confetti from "react-confetti";
import { Box, HStack } from "@chakra-ui/react";

const colors = ["orange", "red", "green", "blue", "yellow"];

export default function App() {
  const [expression, setExpression] = useState("");
  const [color, setColor] = useState("orange");
  const [noP, setNop] = useState(0);

  const Button = ({ children, e, clear, eq }) => {
    return (
      <Box
        w="full"
        p={6}
        bg={e ? `${color}.200` : "white"}
        rounded="lg"
        justifyContent="center"
        textAlign="center"
        fontSize="4xl"
        cursor="pointer"
        userSelect="none"
        borderWidth="1px"
        borderColor="blackAlpha.800"
        onClick={() => {
          if (eq) {
            setExpression(eval(expression));
            setNop(200);
            setTimeout(() => {
              setNop(0);
            }, 800);
            return;
          }
          if (clear) {
            setExpression("");
          } else setExpression(expression + children);
        }}
        _hover={{
          bg: `${color}.100`
        }}
      >
        {children}
      </Box>
    );
  };

  return (
    <Box overflow="hidden" h="100vh">
      <Box mt={12}>
        <Confetti numberOfPieces={noP} />
        <Box rounded="xl" maxW="lg" m="0 auto" p={8} bg="blackAlpha.800">
          <HStack mb={6}>
            {colors.map((c) => (
              <Box
                p={2}
                cursor="pointer"
                onClick={() => setColor(c)}
                rounded="full"
                bg={`${c}.200`}
                borderWidth="3px"
                borderColor={c === color ? "white" : "blackAlpha.800"}
              ></Box>
            ))}
          </HStack>

          <Box
            textAlign="center"
            fontSize="4xl"
            bg={`${color}.200`}
            rounded="xl"
            textColor="white"
            py={4}
            noOfLines={1}
          >
            {expression || "O.O"}
          </Box>

          <HStack mt={4} justifyContent="space-evenly">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button e>+</Button>
          </HStack>

          <HStack mt={4} justifyContent="space-evenly">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button e>-</Button>
          </HStack>

          <HStack mt={4} justifyContent="space-evenly">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button e>*</Button>
          </HStack>

          <HStack mt={4} justifyContent="space-evenly">
            <Button e clear>
              C
            </Button>
            <Button>0</Button>
            <Button e eq>
              =
            </Button>
            <Button e>/</Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
