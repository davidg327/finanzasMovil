import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles.ts';
import {useDispatch} from 'react-redux';
import { getNameUsers, getUsers } from "../../state/user/reducer.ts";
import {getExpense} from '../../state/expense/reducer.ts';
import HomeTemplate from '../../components/template/HomeTemplate';

const HomeScreen = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getExpense());
    dispatch(getNameUsers());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeTemplate />
    </SafeAreaView>
  );
};

export default HomeScreen;
