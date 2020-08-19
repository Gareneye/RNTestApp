import { BaseScreenProps } from 'modules/shared/screens/BaseScreen';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { L10n } from 'resources';
import { Fonts } from 'resources/Fonts';
import { testAction } from 'store/Actions';
import { RootState } from 'store/RootState';
import { Navigator, RouteName } from 'utilities/Navigator';

const connector = connect(
  (state: RootState) => ({
    testValue: state.testBranch.title,
  }),
  {
    testTrigger: (value: string) => testAction(value),
  },
);

type Props = {};

export const HomeScreen = connector(
  (props: Props & BaseScreenProps<typeof connector>) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.wrapper}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Hey guys!</Text>
                <TouchableOpacity
                  onPress={() => Navigator.navigate(RouteName.DetailsScreen)}>
                  <Text style={styles.sectionDescription}>
                    Welcome in
                    <Text style={styles.highlight}> Pannoire Starter</Text>
                    {L10n.testKey({ value: 'Binded!' })}
                    Text from store {props.testValue}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => props.testTrigger(`Test date: ${new Date()}`)}>
                  <Text style={styles.sectionDescription}>Change Value</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>My contact:</Text>
                <Text style={styles.sectionDescription}>blogokodzie.pl</Text>
                <Text style={styles.sectionDescription}>blogokodzie.pl</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    ...Fonts.body15,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
