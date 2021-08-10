import moment from 'moment';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Linking} from 'react-native';
import {connect} from 'react-redux';
import {CommitItem, CustomImage, EventInfoLine, LinkLine} from '../components';
import {IEvents, INavigation, IRootState} from '../interface';
import {Event} from '../models';
import {EventsLogRoutes} from '../navigation';

type StoreProps = {
  events: IEvents;
};

type DispatchProps = {};

type Props = StoreProps &
  DispatchProps &
  INavigation<EventsLogRoutes, 'DetailEventLog'>;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
    overflow: 'hidden',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const DetailScreen = ({events, navigation, route}: Props) => {
  const {id} = route.params;
  const [currentLog, setCurrentLog] = useState<null | Event>(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Event ${id}`,
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  useEffect(() => {
    const log = events.data.find(item => item.id === id);
    if (log) {
      setCurrentLog(log);
    }
  }, []);

  const linkAuthor = async () => {
    if (currentLog) {
      const url = currentLog.actor.url.replace(
        'api.github.com/users',
        'github.com',
      );
      await Linking.openURL(url);
    }
  };

  const linkRepo = async () => {
    if (currentLog) {
      const url = currentLog.repo.url.replace(
        'api.github.com/repos',
        'github.com',
      );
      await Linking.openURL(url);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {currentLog && (
        <>
          <EventInfoLine title="Event info">
            <Text>ID: {currentLog.id}</Text>
            <Text>
              Time:{moment(currentLog.created_at).format('DD.MM.YYYY HH:mm:ss')}
            </Text>
            <Text>Type: {currentLog.type}</Text>
          </EventInfoLine>
          <EventInfoLine title="Author">
            <LinkLine onPress={linkAuthor}>
              <View style={styles.authorContainer}>
                <View style={styles.imageContainer}>
                  <CustomImage url={currentLog.actor.avatar_url} />
                </View>
                <Text>{currentLog.actor.display_login}</Text>
              </View>
            </LinkLine>
          </EventInfoLine>
          <EventInfoLine title="Repository">
            <LinkLine onPress={linkRepo}>
              <Text>{currentLog.repo.name}</Text>
            </LinkLine>
          </EventInfoLine>
          {currentLog.payload.commits && (
            <EventInfoLine title="Commits">
              {currentLog.payload.commits.map((item: any) => {
                return <CommitItem item={item} key={item.sha} />;
              })}
            </EventInfoLine>
          )}
        </>
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state: IRootState): StoreProps => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
