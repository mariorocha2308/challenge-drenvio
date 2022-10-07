import React, { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

const Home = () => {

  const [input, setInput] = useState('')

  return (  
    <Box>
      <Text fontWeight='bold'>Hola</Text>
      <Input placeholder='large size' size='lg' onChange={(e) => setInput(e.target.value)}/>
      <Text fontWeight='bold'>{input}</Text>
    </Box>
  );
}

export default Home;