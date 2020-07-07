import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from 'src/store/user/user.action';
import { IRootReducerState } from 'src/common/interface/reducer';
import { IUser } from 'src/store/user/user.interface';
import { GET_USERS } from './HomeQuery';
import { Homestyles } from './HomeStyle';
import { HomeScreenProps } from './HomePropsInterface';

const HomeScreen = (props: HomeScreenProps) => {
  /**
   * Query for all user
   */
  const { loading, data, error } = useQuery(GET_USERS);

  /**
   * Dispath for redux action
   */
  const dispatch = useDispatch();

  /**
   * Handle users from userReducer global redux state
   */
  const users: IUser[] = useSelector(
    (state: IRootReducerState) => state.userReducer.users,
  );

  React.useEffect(() => {
    dispatch(getAllUsers(data?.users));
  }, [data?.users]);

  return (
    <View style={Homestyles.screen}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error</Text>}
      {users &&
        users.map((user: IUser) => (
          <TouchableOpacity
            key={`user_${user._id}`}
            onPress={() => props.navigation.navigate('Details')}>
            <Text>{user.username}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default HomeScreen;
