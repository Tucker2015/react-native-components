import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, BottomSheet } from 'react-native-components';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const list = [
    {
      title: 'Home Screen',
      onPress: () => console.log('5 minutes'),
      icon: <IonIcons name="home" size={20} color="#fff" />,
    },
    {
      title: 'Settings',
      onPress: () => console.log('10 minutes'),
      icon: <IonIcons name="settings" size={20} color="#fff" />,
    },
    {
      title: 'Utilities',
      onPress: () => console.log('15 minutes'),
      icon: <IonIcons name="cog" size={20} color="#fff" />,
    },
  ];

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} title="Button" />
      <BottomSheet
        title="Set a timer"
        isCancelable
        onCancel={() => {
          console.log('Cancel');
          setVisible(false);
        }}
        titleFontSize={20}
        itemFontSize={16}
        sheetBackgroundColor="hsl(218, 39%, 40%)"
        backgroundOverlayColor="rgba(0, 0, 0, 0.3)"
        open={visible}
        onClose={() => setVisible(false)}
        items={list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    fontSize: 20,
    color: '#fff',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
