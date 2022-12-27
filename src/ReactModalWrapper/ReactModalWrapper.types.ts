// Generated with util/create-component.js
import { ReactNode } from 'react';
export interface ReactModalWrapperProps {
  isOpen: boolean;
  closeModal: () => void;
  styles?: {
    overlay_bg_color?: string;
    content_top?: string;
    content_left?: string;
    content_right?: string;
    content_bottom?: string;
    content_border?: string;
    content_border_radius?: string;
    content_bg_color?: string;
    content_box_shadow?: string;
  };
  child: ReactNode;
  deps?: any;
}
