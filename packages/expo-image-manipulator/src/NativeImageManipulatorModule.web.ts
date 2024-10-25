import { NativeModule } from 'expo';
import { registerWebModule } from 'expo-modules-core';
import { SharedRef } from 'expo-modules-core/types';

import ImageManipulatorContext from './web/ImageManipulatorContext.web';
import ImageManipulatorImageRef from './web/ImageManipulatorImageRef.web';
import { loadImageAsync } from './web/utils.web';

class ImageManipulator extends NativeModule {
  Context = ImageManipulatorContext;
  Image = ImageManipulatorImageRef;

  manipulate(source: string | SharedRef<'image'>): ImageManipulatorContext {
    return new ImageManipulatorContext(() => {
      if (typeof source === 'string') {
        return loadImageAsync(source);
      } else if (source instanceof ImageManipulatorImageRef) {
        return loadImageAsync(source.uri);
      }
      throw new Error(`Source not supported: ${source}`);
    });
  }
}

export default registerWebModule(ImageManipulator);
