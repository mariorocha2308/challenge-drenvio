import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomUserQuery } from '../redux/rootCreators'

import Portada from '../components/Portada'
import Presentation from '../components/Presentation';
import Details from '../components/Details'

const Profile = () => {

  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.rootSlice)

  useEffect(() => {
    dispatch(getRandomUserQuery())
  }, [])

  return (  
    <Box color='blackAlpha.800' fontFamily='Poppins' maxWidth='1200px' margin='auto' userSelect='none'>
      <Portada 
        avatar={profile?.picture?.large} 
        userName={profile?.login?.username}
      />

      <Presentation 
        name={`${profile?.name?.title} ${profile?.name?.first} ${profile?.name?.last}`} 
        email={profile?.email} 
        gender={profile?.gender} 
        age={profile?.dob?.age}
      />

      <Details 
        phone={profile?.phone} 
        birthday={profile?.dob?.date} 
        registered={profile?.registered?.date} 
        street={`${profile?.location?.street?.name}, ${profile?.location?.street?.number}`} 
        location={`${profile?.location?.state}, ${profile?.location?.city}, ${profile?.location?.country}`}
      />
    </Box>
  );
}

export default Profile;