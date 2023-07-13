import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Header from '../../components/header/Header';
import ListCards from '../../components/listCards/ListCards';
import useUsers from '../../resources/users/usersHook';
import Loader from '../../components/loader/Loader';
import {splitUsersIntoGroups} from '../../utils/usersUtils';

import styles from './styles';

function HomeScreen() {
  const {allUsers, loading, fetchAllUsers} = useUsers();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const usersGroups = splitUsersIntoGroups(allUsers, 10);

  return (
    <SafeAreaView style={styles.safeArea}>
      {!loading.fetchingUsers ? (
        <ScrollView>
          <Header />
          {usersGroups.map((group, index) => (
            <ListCards key={index} information={group} />
          ))}
        </ScrollView>
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;
