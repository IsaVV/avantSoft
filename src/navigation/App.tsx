import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import UserProvider from '../resources/users/usersProvider';

export default function App() {
  return (
    <UserProvider>
      <HomeScreen />
    </UserProvider>
  );
}
