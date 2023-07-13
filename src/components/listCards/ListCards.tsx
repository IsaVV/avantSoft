import {FlatList, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {UserInformation} from '../../resources/users/usersModel';

interface ListCardProps {
  users: UserInformation[];
}

const Separator = () => <View style={styles.separator} />;

const ListCards: FC<ListCardProps> = ({users}) => {
  const renderCardItem = (item: UserInformation) => {
    return (
      <View style={[styles.container, styles.shadowProp]}>
        <Text style={styles.userName} numberOfLines={1}>
          {item.name}
        </Text>
        <Separator />
        <Text style={styles.title}>Email</Text>
        <Text style={styles.text} numberOfLines={1}>
          {item.email}
        </Text>

        <View style={styles.containerAgeId}>
          <View>
            <Text style={styles.title}>Age</Text>
            <Text style={styles.text}>{item.age}</Text>
          </View>
          <View>
            <Text style={styles.title}>Id</Text>
            <Text style={styles.text}>{item.id}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={users}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
      horizontal
      scrollEventThrottle={16}
      decelerationRate="fast"
      renderItem={({item}) => <>{renderCardItem(item)}</>}
    />
  );
};

export default ListCards;
