import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {IEvents, IRootState, IEventsAction, INavigation} from '../interface';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eventsAction} from '../actions';
import {EventsLogRoutes} from '../navigation';
import {Event} from '../models';
import {EventItem, IconButton} from '../components';
import {useInterval} from '../utils/customHooks';
import {useIsFocused} from '@react-navigation/native';

type StoreProps = {
  events: IEvents;
};

type DispatchProps = {
  eventsActions: IEventsAction;
};

type Props = StoreProps &
  DispatchProps &
  INavigation<EventsLogRoutes, 'EventsLog'>;

const styles = StyleSheet.create({
  contentList: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  preloaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const EventsLog = ({eventsActions, events, navigation}: Props) => {
  const [refreshKey, setRefreshKey] = useState(new Date().getTime());
  const [requestTimeout, setRequestTimeout] = useState<number>(15000);
  const timeout = useRef<any>(null);
  const isFocused = useIsFocused();
  const getList = () => {
    setRequestTimeout(15000);
    eventsActions.getEventList();
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getList();
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    timeout.current = setTimeout(() => setRequestTimeout(0), requestTimeout);
    return () => clearTimeout(timeout.current);
  }, [events.data]);
  useEffect(() => {
    if (!isFocused) {
      if(requestTimeout === 0){
        setRequestTimeout(15000);
      } else {
        clearTimeout(timeout.current)
      }
      
    }
  }, [isFocused]);
  useInterval(getList, isFocused ? refreshKey : null);
  const onRefresh = () => {
    getList();
    setRefreshKey(new Date().getTime());
  };

  const goToDetail = useCallback((id: string) => {
    navigation.navigate('DetailEventLog', {id});
  }, []);
  const renderItem = useCallback(
    ({item}: {item: Event}) => {
      return <EventItem item={item} onPress={goToDetail} />;
    },
    [events.data],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <View style={styles.container}>
      {requestTimeout === 0 && (
        <View style={{alignItems: 'center', paddingVertical: 8}}>
          <IconButton onPress={onRefresh} />
        </View>
      )}
      {events.loading ? (
        <View style={styles.preloaderContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={events.data}
          contentContainerStyle={styles.contentList}
          renderItem={renderItem}
          maxToRenderPerBatch={20}
          initialNumToRender={10}
          windowSize={15}
          updateCellsBatchingPeriod={55}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state: IRootState): StoreProps => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  eventsActions: bindActionCreators(eventsAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsLog);
