import React, {useRef, useEffect, ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import BottomSheet from 'react-native-raw-bottom-sheet';

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
    <ScrollView>
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
          container: styles.container,
          draggableIcon: [styles.DraglbleIcon, draggableIcon],
        }}>
        <>
          {!closeOnDragDown && <View style={styles.dragFromTopOnly} />}
          <View style={[styles.sheetView, childrenContainerStyle]}>
            {children}
          </View>
        </>
      </BottomSheet>
    </ScrollView>
  );
};

export default CustomBottomSheet;
