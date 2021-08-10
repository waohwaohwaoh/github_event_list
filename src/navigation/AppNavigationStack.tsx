import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DetailEventLogView, EventsLogView} from '../views';

const EventsLogStack = createNativeStackNavigator();

export const EventsStackScreens = () => (
    <EventsLogStack.Navigator>
        <EventsLogStack.Screen component={EventsLogView} name="EventsLog" options={{title: 'Events log'}}/>
        <EventsLogStack.Screen component={DetailEventLogView} name="DetailEventLog"/>
    </EventsLogStack.Navigator>
)