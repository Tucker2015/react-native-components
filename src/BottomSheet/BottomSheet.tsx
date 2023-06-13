import {
  View,
  Text,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import type { BottomSheetTypes } from './BottomSheet.types';

// Some constants for better readability
const defaultSheetBackgroundColor = 'hsl(218, 39%, 20%)';
const defaultBackgroundOverlayColor = 'rgba(17, 25, 39, 0.1)';
const defaultTextColor = '#fff';
const windowHeight = Dimensions.get('window').height;

export const BottomSheet = ({
  open,
  isCancelable = false,
  onClose,
  onCancel,
  title,
  items = [], // Handle edge case where items is not provided
  sheetBackgroundColor = defaultSheetBackgroundColor,
  backgroundOverlayColor = defaultBackgroundOverlayColor,
  textColor = defaultTextColor,
}: BottomSheetTypes) => {
  const [visible, setVisible] = useState(open);
  const [animation, setAnimation] = useState(new Animated.Value(windowHeight));

  const handlePressOutside = () => {
    if (onClose) {
      onClose();
      setAnimation(new Animated.Value(windowHeight));
    }
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: open ? 0 : windowHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setVisible(open);
  }, [open, animation]);

  const coloredTextStyles = [styles.text, { color: textColor }]; // Combine styles that use textColor

  return (
    <Modal visible={visible} transparent animationType="none">
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: backgroundOverlayColor,
            transform: [{ translateY: animation }],
          },
        ]}
        onTouchEnd={handlePressOutside}
      >
        <View
          style={[styles.sheet, { backgroundColor: sheetBackgroundColor }]}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <Text style={coloredTextStyles}>{title}</Text>
          <View style={[styles.divider, { backgroundColor: textColor }]} />
          <View>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <Text
                  style={styles.itemText}
                  onPress={() => {
                    if (item.onPress) {
                      item.onPress();
                      handlePressOutside();
                    }
                  }}
                >
                  {item.title}
                </Text>
                {index < items.length - 1 && (
                  <View
                    style={[styles.divider, { backgroundColor: textColor }]}
                  />
                )}
              </React.Fragment>
            ))}
            {isCancelable && (
              <React.Fragment>
                <View
                  style={[styles.divider, { backgroundColor: textColor }]}
                />
                <Text style={coloredTextStyles} onPress={onCancel}>
                  Cancel
                </Text>
              </React.Fragment>
            )}
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  divider: {
    height: 1,
    marginVertical: 14,
  },
  sheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    paddingBottom: 32,
  },
  itemText: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});