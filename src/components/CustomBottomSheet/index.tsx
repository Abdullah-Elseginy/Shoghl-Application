import React, {useRef, useEffect, ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import BottomSheet from 'react-native-raw-bottom-sheet';
import { COLORS, hp, wp } from '../../constants';


interface CustomBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  height: number;
  childrenContainerStyle?: any;
  dragFromTopOnly?: boolean;
  draggableIcon?: any;
  closeOnDragDown?: boolean;
  closeOnPressMask?: boolean;
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  height,
  childrenContainerStyle,
  dragFromTopOnly,
  draggableIcon,
  closeOnDragDown = true,
  closeOnPressMask = true,
}) => {
  const bottomSheetRef = useRef();

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.open();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  return (
    <BottomSheet
      draggable
      ref={bottomSheetRef}
      height={height}
      duration={50}
      closeOnDragDown={closeOnDragDown}
      closeOnPressMask={closeOnPressMask}
      onClose={onClose}
      animationType="fade"
      dragFromTopOnly={dragFromTopOnly}
      customStyles={{
        container: {
          borderTopLeftRadius: wp(5),
          borderTopRightRadius: wp(5),
        },
        draggableIcon: [
          {
            backgroundColor: COLORS.black,
            width: wp(40),
            marginTop:hp(3)
          },
          draggableIcon,
        ],
      }}>
      <>
        {!closeOnDragDown && <View style={styles.dragFromTopOnly} />}
        <View style={[styles.sheetView, childrenContainerStyle]}>
          {children}
        </View>
      </>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
