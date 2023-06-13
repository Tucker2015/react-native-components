export interface BottomSheetItem {
  /**
   * The title of the item.
   * @example 'Option 1'
   */
  title: string;
  /**
   * This function will be called when the item is pressed.
   * @example () => console.log('Option 1 pressed')
   */
  onPress: () => void;
  /**
   * The icon of the item.
   * @example <Icon name="check" />
   *
   */
  icon?: React.ReactNode;
}
export interface BottomSheetTypes {
  /**
   * The title of the bottom sheet.
   * @default undefined
   * @example 'Select an option'
   */
  title?: string;
  open: boolean;
  onClose: () => void;
  /**
   * The items to be shown in the bottom sheet.
   * @example [{ title: 'Option 1', onPress: () => console.log('Option 1 pressed') }]
   * @example [{ title: 'Option 1', onPress: () => console.log('Option 1 pressed') }, { title: 'Option 2', onPress: () => console.log('Option 2 pressed') }]
   *
   */
  items: BottomSheetItem[];
  /**
   * The background color of the bottom sheet.
   * @default 'hsl(218, 39%, 20%)'
   * @example '#000'
   * @example 'hsl(218, 39%, 20%)'
   * @example 'rgb(0, 0, 0)'
   */
  sheetBackgroundColor?: string;
  /**
   * The background color of the overlay.
   * @default 'rgba(0, 0, 0, 0.5)'
   * @example '#000'
   * @example 'hsl(218, 39%, 20%)'
   * @example 'rgba(0, 0, 0, 0.5)'
   */
  backgroundOverlayColor?: string;
  /**
   * The color of the text.
   * @default '#fff'
   * @example '#000'
   * @example 'hsl(218, 39%, 20%)'
   * @example 'rgb(0, 0, 0)'
   */
  textColor?: string;
  /**
   * If true, a cancel button will be shown at the bottom of the bottom sheet.
   * @default false
   */
  isCancelable?: boolean;
  /**
   * This function will be called when the cancel button is pressed.
   * @default undefined
   * @example () => console.log('Cancel button pressed')
   * @example () => { console.log('Cancel button pressed'); onClose(); }
   */
  onCancel?: () => void;
}
