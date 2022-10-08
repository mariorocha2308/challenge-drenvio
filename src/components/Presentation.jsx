import React from 'react';
import { Badge, Box, Text } from '@chakra-ui/react';

const Presentation = props => {

  return (  
    <Box pt='4rem' pl='2rem'>
      <Text fontWeight='black' fontSize='28'>{props.name}</Text>
      <Text fontWeight='bold' fontSize='18'>{props.email}</Text>
      <Badge p='2' mt='2' colorScheme='blue' variant='solid' w='rem'>{props.gender} {props.age} years</Badge>
    </Box>
  );
}

export default Presentation;