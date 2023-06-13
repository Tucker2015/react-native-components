# react-native-components

A set of React Native Components

## Installation

With NPM

```sh
npm install @kevtucker/react-native-components
```

With Yarn

```sh
yarn add @kevtucker/react-native-components
```

## Usage

```js
import { BottomSheet } from '@kevtucker/react-native-components';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  const list = [
    {
      title: 'Item 1',
      onPress: () => console.log('Item 1 pressed'),
    },
    {
      title: 'Item 2',
      onPress: () => console.log('Item 2 pressed'),
    },
    {
      title: 'Item 3',
      onPress: () => console.log('Item 3 pressed'),
    },
  ];

  return (
    <BottomSheet
      title="Set a timer"
      isCancelable
      onCancel={() => console.log('Cancel pressed')}
      sheetBackgroundColor="hsl(218, 39%, 40%)"
      backgroundOverlayColor="rgba(0, 0, 0, 0.3)"
      open={visible}
      onClose={() => setVisible(false)}
      items={list}
    />
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
