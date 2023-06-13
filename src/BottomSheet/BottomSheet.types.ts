export interface BottomSheetItem {
  title: string;
  onPress: () => void;
}

export interface BottomSheetTypes {
  title: string;
  open: boolean;
  onClose: () => void;
  items: BottomSheetItem[];
  sheetBackgroundColor?: string;
  backgroundOverlayColor?: string;
  textColor?: string;
  isCancelable?: boolean;
  onCancel?: () => void;
}
