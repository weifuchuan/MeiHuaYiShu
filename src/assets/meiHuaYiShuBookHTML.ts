export default `


<html class="cye-disabled cye-nm">

<head>
  <meta http-equiv=Content-Type content="text/html; charset=utf8">
  <style type=text/css>

    a{
      height:1.5em; 
      text-decoration: none;
    }

    h1,
    h2,
    h3 {
      text-align: center;
    }

    p {
      text-indent: 2em;
      line-height:150%;
    }

    /**
 * =============================================================================
 * ************   Button 按钮   ************
 * =============================================================================
 */

    /* 默认为 Flat 扁平按钮 */

    .mdui-btn,
    .mdui-fab {
      position: relative;
      display: inline-block;
      min-width: 88px;
      height: 36px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 16px;
      margin: 0;
      overflow: hidden;
      font-size: 14px;
      font-weight: 500;
      line-height: 36px;
      color: inherit;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      varter-spacing: 0.04em;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      zoom: 1;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background: transparent;
      border: none;
      border-radius: 2px;
      outline: none;
      -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
      will-change: box-shadow;
      -webkit-user-drag: none;
    }

    .mdui-btn:hover,
    .mdui-fab:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .mdui-btn:not(.mdui-ripple):active,
    .mdui-fab:not(.mdui-ripple):active {
      background-color: rgba(0, 0, 0, 0.165);
    }

    .mdui-btn[class*="mdui-color-"]:hover,
    .mdui-fab[class*="mdui-color-"]:hover {
      opacity: 0.87;
    }

    .mdui-btn:not(.mdui-ripple)[class*="mdui-color-"]:active,
    .mdui-fab:not(.mdui-ripple)[class*="mdui-color-"]:active {
      opacity: 0.76;
    }

    /* 按钮内的图标 */

    .mdui-btn .mdui-icon-left,
    .mdui-btn .mdui-icon-right,
    .mdui-btn .mdui-icon-left::before,
    .mdui-btn .mdui-icon-right::before {
      height: inherit;
      font-size: 1.3em;
      line-height: inherit;
    }

    .mdui-btn .mdui-icon-left {
      float: left;
      margin-right: 0.4em;
    }

    .mdui-btn .mdui-icon-right {
      float: right;
      margin-left: 0.4em;
    }

    input.mdui-btn[type="submit"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    /* Raised button 浮动按钮 */

    .mdui-btn-raised {
      -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .mdui-btn-raised:hover {
      -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .mdui-btn-raised:active {
      -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    /* 禁用按钮 */

    .mdui-btn[disabled],
    .mdui-fab[disabled],
    .mdui-btn[disabled]:hover,
    .mdui-fab[disabled]:hover,
    .mdui-btn[disabled]:active,
    .mdui-fab[disabled]:active,
    .mdui-btn[disabled]:focus,
    .mdui-fab[disabled]:focus {
      color: rgba(0, 0, 0, 0.26) !important;
      cursor: default !important;
      background-color: transparent !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      opacity: 1 !important;
    }

    .mdui-btn[disabled] .mdui-icon,
    .mdui-fab[disabled] .mdui-icon,
    .mdui-btn[disabled]:hover .mdui-icon,
    .mdui-fab[disabled]:hover .mdui-icon,
    .mdui-btn[disabled]:active .mdui-icon,
    .mdui-fab[disabled]:active .mdui-icon,
    .mdui-btn[disabled]:focus .mdui-icon,
    .mdui-fab[disabled]:focus .mdui-icon {
      color: rgba(0, 0, 0, 0.26) !important;
    }

    /* 禁用状态浮动按钮和浮动操作按钮 */

    .mdui-btn-raised[disabled],
    .mdui-fab[disabled],
    .mdui-btn-raised[disabled]:hover,
    .mdui-fab[disabled]:hover,
    .mdui-btn-raised[disabled]:active,
    .mdui-fab[disabled]:active,
    .mdui-btn-raised[disabled]:focus,
    .mdui-fab[disabled]:focus {
      background-color: rgba(0, 0, 0, 0.12) !important;
      -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    }

    /* 加粗按钮文本 */

    .mdui-btn-bold {
      font-weight: bold;
    }

    /* 图标按钮 */

    .mdui-btn-icon {
      width: 36px;
      min-width: 36px;
      height: 36px;
      padding: 0;
      margin-right: 0;
      margin-left: 0;
      overflow: hidden;
      font-size: 24px;
      line-height: normal;
      border-radius: 50%;
    }

    .mdui-btn-icon .mdui-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      line-height: 24px;
      -webkit-transform: translate(-12px, -12px);
      transform: translate(-12px, -12px);
    }

    .mdui-btn-icon.mdui-ripple {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    /* 按钮 100% 宽度 */

    .mdui-btn-block {
      display: block;
      width: 100%;
    }

    /* 密集型按钮 */

    .mdui-btn-dense {
      height: 32px;
      font-size: 13px;
      line-height: 32px;
    }

    .mdui-btn-dense.mdui-btn-icon {
      width: 32px;
      min-width: 32px;
    }

    /* 按钮组 */

    .mdui-btn-group {
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }

    .mdui-btn-group .mdui-btn {
      float: left;
      min-width: inherit;
      padding: 0 12px;
      color: rgba(0, 0, 0, 0.54);
      border-radius: 0;
    }

    .mdui-btn-group .mdui-btn:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      content: ' ';
      border-left: 1px solid transparent;
    }

    .mdui-btn-group .mdui-btn:first-child {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    .mdui-btn-group .mdui-btn:first-child:before {
      border-left: none;
    }

    .mdui-btn-group .mdui-btn:last-child {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }

    .mdui-btn-group .mdui-btn.mdui-btn-active {
      color: rgba(0, 0, 0, 0.87);
      background-color: rgba(0, 0, 0, 0.215);
    }

    .mdui-btn-group .mdui-btn.mdui-btn-active+.mdui-btn-active:before {
      border-left: 1px solid rgba(0, 0, 0, 0.145);
    }

    /**
 * =============================================================================
 * ************   Button dark   ************
 * =============================================================================
 */

    .mdui-theme-layout-dark .mdui-btn:hover,
    .mdui-theme-layout-dark .mdui-fab:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .mdui-theme-layout-dark .mdui-btn:not(.mdui-ripple):active,
    .mdui-theme-layout-dark .mdui-fab:not(.mdui-ripple):active {
      background-color: rgba(255, 255, 255, 0.165);
    }

    .mdui-theme-layout-dark .mdui-btn[class*="mdui-color-"]:hover,
    .mdui-theme-layout-dark .mdui-fab[class*="mdui-color-"]:hover {
      opacity: 0.87;
    }

    .mdui-theme-layout-dark .mdui-btn:not(.mdui-ripple)[class*="mdui-color-"]:active,
    .mdui-theme-layout-dark .mdui-fab:not(.mdui-ripple)[class*="mdui-color-"]:active {
      opacity: 0.76;
    }

    .mdui-theme-layout-dark .mdui-btn[disabled],
    .mdui-theme-layout-dark .mdui-fab[disabled],
    .mdui-theme-layout-dark .mdui-btn[disabled]:hover,
    .mdui-theme-layout-dark .mdui-fab[disabled]:hover,
    .mdui-theme-layout-dark .mdui-btn[disabled]:active,
    .mdui-theme-layout-dark .mdui-fab[disabled]:active,
    .mdui-theme-layout-dark .mdui-btn[disabled]:focus,
    .mdui-theme-layout-dark .mdui-fab[disabled]:focus {
      color: rgba(255, 255, 255, 0.3) !important;
      background-color: transparent !important;
    }

    .mdui-theme-layout-dark .mdui-btn[disabled] .mdui-icon,
    .mdui-theme-layout-dark .mdui-fab[disabled] .mdui-icon,
    .mdui-theme-layout-dark .mdui-btn[disabled]:hover .mdui-icon,
    .mdui-theme-layout-dark .mdui-fab[disabled]:hover .mdui-icon,
    .mdui-theme-layout-dark .mdui-btn[disabled]:active .mdui-icon,
    .mdui-theme-layout-dark .mdui-fab[disabled]:active .mdui-icon,
    .mdui-theme-layout-dark .mdui-btn[disabled]:focus .mdui-icon,
    .mdui-theme-layout-dark .mdui-fab[disabled]:focus .mdui-icon {
      color: rgba(255, 255, 255, 0.3) !important;
    }

    .mdui-theme-layout-dark .mdui-btn-raised[disabled],
    .mdui-theme-layout-dark .mdui-fab[disabled],
    .mdui-theme-layout-dark .mdui-btn-raised[disabled]:hover,
    .mdui-theme-layout-dark .mdui-fab[disabled]:hover,
    .mdui-theme-layout-dark .mdui-btn-raised[disabled]:active,
    .mdui-theme-layout-dark .mdui-fab[disabled]:active,
    .mdui-theme-layout-dark .mdui-btn-raised[disabled]:focus,
    .mdui-theme-layout-dark .mdui-fab[disabled]:focus {
      background-color: rgba(255, 255, 255, 0.12) !important;
    }

    /**
 * =============================================================================
 * ************   Fab 浮动操作按钮   ************
 * =============================================================================
 */

    /* 浮动操作按钮 */

    .mdui-fab {
      width: 56px;
      min-width: 56px;
      height: 56px;
      padding: 0 !important;
      margin: auto;
      overflow: hidden;
      font-size: 24px;
      line-height: normal !important;
      border-radius: 50%;
      -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    }

    .mdui-fab:hover {
      -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .mdui-fab:active {
      -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
      box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
    }

    .mdui-fab .mdui-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      margin-top: 16px;
      margin-left: 16px;
      line-height: 24px;
    }

    /* mini 型浮动操作按钮 */

    .mdui-fab-mini {
      width: 40px;
      min-width: 40px;
      height: 40px;
    }

    .mdui-fab-mini .mdui-icon {
      margin-top: 8px;
      margin-left: 8px;
    }

    /* 固定到右下角的 FAB 按钮 */

    .mdui-fab-fixed,
    .mdui-fab-wrapper {
      position: fixed !important;
      /* 手机平板上距离屏幕右下角 16px */
      right: 16px;
      bottom: 16px;
    }

    @media (min-width: 1024px) {
      .mdui-fab-fixed,
      .mdui-fab-wrapper {
        /* 电脑上距离屏幕右下角 24px */
        right: 24px;
        bottom: 24px;
      }
    }

    /* 含菜单的浮动操作按钮 */

    .mdui-fab-wrapper {
      position: relative;
      z-index: 4000;
      width: 56px;
      height: 56px;
      padding-top: 8px;
    }

    .mdui-fab-wrapper>.mdui-fab .mdui-icon:not(.mdui-fab-opened) {
      opacity: 1;
      -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: opacity, transform;
    }

    .mdui-fab-wrapper>.mdui-fab .mdui-icon.mdui-fab-opened {
      opacity: 0;
      -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: rotate(225deg);
      transform: rotate(225deg);
      will-change: opacity, transform;
    }

    .mdui-fab-wrapper>.mdui-fab.mdui-fab-opened .mdui-icon:not(.mdui-fab-opened) {
      opacity: 0;
      -webkit-transform: rotate(225deg);
      transform: rotate(225deg);
    }

    .mdui-fab-wrapper>.mdui-fab.mdui-fab-opened .mdui-icon.mdui-fab-opened {
      opacity: 1;
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    .mdui-fab-wrapper .mdui-fab-dial {
      position: absolute;
      right: 0;
      bottom: 64px;
      left: 0;
      height: 0;
      text-align: center;
      visibility: visible;
    }

    .mdui-fab-wrapper .mdui-fab-dial .mdui-fab {
      margin: 8px 0;
      opacity: 0;
      -webkit-transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    .mdui-fab-wrapper .mdui-fab-dial.mdui-fab-dial-show .mdui-fab {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    /* 添加类 .mdui-fab-hide 以动画的形式隐藏按钮 */

    .mdui-fab,
    .mdui-fab-mini,
    .mdui-fab-wrapper {
      -webkit-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.2s;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.2s;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), transform 0.2s;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), transform 0.2s, -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.2s;
      -webkit-transform: scale(1) translateZ(0);
      transform: scale(1) translateZ(0);
      will-change: transform;
    }

    .mdui-fab.mdui-fab-hide,
    .mdui-fab-mini.mdui-fab-hide,
    .mdui-fab-wrapper.mdui-fab-hide {
      -webkit-transform: scale(0) translateZ(0);
      transform: scale(0) translateZ(0);
    }

    /**
 * =============================================================================
 * ************   涟漪动画   ************
 * =============================================================================
 */

    .mdui-ripple {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Ripple */

    .mdui-ripple-wave {
      position: absolute !important;
      top: 0;
      left: 0;
      z-index: 1;
      padding: 0;
      margin: 0;
      font-size: 0;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      -webkit-transition-duration: 1400ms;
      transition-duration: 1400ms;
      -webkit-transform: translate3d(0px, 0px, 0) scale(0);
      transform: translate3d(0px, 0px, 0) scale(0);
    }

    /* 有背景色的默认使用白色涟漪 */

    .mdui-ripple[class*="mdui-color-"] .mdui-ripple-wave {
      background-color: rgba(255, 255, 255, 0.3);
    }

    /* 白色涟漪 */

    .mdui-ripple-white .mdui-ripple-wave {
      background-color: rgba(255, 255, 255, 0.3) !important;
    }

    /* 黑色涟漪 */

    .mdui-ripple-black .mdui-ripple-wave {
      background-color: rgba(0, 0, 0, 0.1) !important;
    }

    .mdui-ripple-wave-fill {
      opacity: 0.35;
      -webkit-transition-duration: 300ms;
      transition-duration: 300ms;
    }

    .mdui-ripple-wave-out {
      opacity: 0;
      -webkit-transition-duration: 600ms;
      transition-duration: 600ms;
    }

    /**
 * =============================================================================
 * ************   Ripple 颜色   ************
 * =============================================================================
 */

    .mdui-ripple-amber .mdui-ripple-wave {
      background-color: rgba(255, 193, 7, 0.3) !important;
    }

    .mdui-ripple-blue .mdui-ripple-wave {
      background-color: rgba(33, 150, 243, 0.3) !important;
    }

    .mdui-ripple-blue-grey .mdui-ripple-wave {
      background-color: rgba(96, 125, 139, 0.3) !important;
    }

    .mdui-ripple-brown .mdui-ripple-wave {
      background-color: rgba(121, 85, 72, 0.3) !important;
    }

    .mdui-ripple-cyan .mdui-ripple-wave {
      background-color: rgba(0, 188, 212, 0.3) !important;
    }

    .mdui-ripple-deep-orange .mdui-ripple-wave {
      background-color: rgba(255, 87, 34, 0.3) !important;
    }

    .mdui-ripple-deep-purple .mdui-ripple-wave {
      background-color: rgba(103, 58, 183, 0.3) !important;
    }

    .mdui-ripple-green .mdui-ripple-wave {
      background-color: rgba(76, 175, 80, 0.3) !important;
    }

    .mdui-ripple-grey .mdui-ripple-wave {
      background-color: rgba(158, 158, 158, 0.3) !important;
    }

    .mdui-ripple-indigo .mdui-ripple-wave {
      background-color: rgba(63, 81, 181, 0.3) !important;
    }

    .mdui-ripple-light-blue .mdui-ripple-wave {
      background-color: rgba(3, 169, 244, 0.3) !important;
    }

    .mdui-ripple-light-green .mdui-ripple-wave {
      background-color: rgba(139, 195, 74, 0.3) !important;
    }

    .mdui-ripple-lime .mdui-ripple-wave {
      background-color: rgba(205, 220, 57, 0.3) !important;
    }

    .mdui-ripple-orange .mdui-ripple-wave {
      background-color: rgba(255, 152, 0, 0.3) !important;
    }

    .mdui-ripple-pink .mdui-ripple-wave {
      background-color: rgba(233, 30, 99, 0.3) !important;
    }

    .mdui-ripple-purple .mdui-ripple-wave {
      background-color: rgba(156, 39, 176, 0.3) !important;
    }

    .mdui-ripple-red .mdui-ripple-wave {
      background-color: rgba(244, 67, 54, 0.3) !important;
    }

    .mdui-ripple-teal .mdui-ripple-wave {
      background-color: rgba(0, 150, 136, 0.3) !important;
    }

    .mdui-ripple-yellow .mdui-ripple-wave {
      background-color: rgba(255, 235, 59, 0.3) !important;
    }

    /**
 * =============================================================================
 * ************   Ripple dark   ************
 * =============================================================================
 */

    .mdui-theme-layout-dark .mdui-ripple-wave {
      background-color: rgba(255, 255, 255, 0.3);
    }

    /*# sourceMappingURL=/static/css/meihuayishu.a9b55c7.css.map*/
  </style>
</head>

<body lang=ZH-CN link=blue vlink=purple style="overflow:auto;">
  <div id=catalogue-box style="display:flex;  width: 100%;  height: 100%;  position: absolute;">
    <div id=catalogue style="flex:7; background-color: #fff; overflow:auto; ">
      <a href=#c0 style=padding-left:0em;display:block;>序</a>
      <a href=#c1 style=padding-left:0em;display:block;>象数义理篇之一</a>
      <a href=#c2 style=padding-left:2em;display:block;>周易卦数</a>
      <a href=#c3 style=padding-left:2em;display:block;>五行生克</a>
      <a href=#c4 style=padding-left:2em;display:block;>八宫所属五行</a>
      <a href=#c5 style=padding-left:2em;display:block;>卦气旺</a>
      <a href=#c6 style=padding-left:2em;display:block;>卦气衰</a>
      <a href=#c7 style=padding-left:2em;display:block;>十天干</a>
      <a href=#c8 style=padding-left:2em;display:block;>十二地支</a>
      <a href=#c9 style=padding-left:2em;display:block;>八卦象例</a>
      <a href=#c10 style=padding-left:2em;display:block;>占法</a>
      <a href=#c11 style=padding-left:2em;display:block;>玩法</a>
      <a href=#c12 style=padding-left:2em;display:block;>卦数起例</a>
      <a href=#c13 style=padding-left:2em;display:block;>爻以六除</a>
      <a href=#c14 style=padding-left:2em;display:block;>年月日时起例</a>
      <a href=#c15 style=padding-left:2em;display:block;>物数占</a>
      <a href=#c16 style=padding-left:2em;display:block;>声音占</a>
      <a href=#c17 style=padding-left:2em;display:block;>字占</a>
      <a href=#c18 style=padding-left:2em;display:block;>丈尺占</a>
      <a href=#c19 style=padding-left:2em;display:block;>尺寸占</a>
      <a href=#c20 style=padding-left:2em;display:block;>为人占</a>
      <a href=#c21 style=padding-left:2em;display:block;>自己占</a>
      <a href=#c22 style=padding-left:2em;display:block;>占动物</a>
      <a href=#c23 style=padding-left:2em;display:block;>占静物</a>
      <a href=#c24 style=padding-left:0em;display:block;>象数易理篇之二</a>
      <a href=#c25 style=padding-left:2em;display:block;>端法后天起卦之例</a>
      <a href=#c26 style=padding-left:2em;display:block;>八卦万物属类（并为上卦）</a>
      <a href=#c27 style=padding-left:2em;display:block;>八卦方位图</a>
      <a href=#c28 style=padding-left:2em;display:block;>观梅占（年月日时占例）</a>
      <a href=#c29 style=padding-left:2em;display:block;>牡丹占</a>
      <a href=#c30 style=padding-left:2em;display:block;>邻夜扣门借物占</a>
      <a href=#c31 style=padding-left:2em;display:block;>今日动静如何</a>
      <a href=#c32 style=padding-left:2em;display:block;>西林寺牌额占</a>
      <a href=#c33 style=padding-left:2em;display:block;>老人有忧色占</a>
      <a href=#c34 style=padding-left:2em;display:block;>少年有喜色占</a>
      <a href=#c35 style=padding-left:2em;display:block;>牛哀鸣占</a>
      <a href=#c36 style=padding-left:2em;display:block;>鸡悲鸣占</a>
      <a href=#c37 style=padding-left:2em;display:block;>枯枝坠地占</a>
      <a href=#c38 style=padding-left:2em;display:block;>风觉鸟占</a>
      <a href=#c39 style=padding-left:2em;display:block;>风觉占</a>
      <a href=#c40 style=padding-left:2em;display:block;>鸟占</a>
      <a href=#c41 style=padding-left:2em;display:block;>听声音占</a>
      <a href=#c42 style=padding-left:2em;display:block;>形物占</a>
      <a href=#c43 style=padding-left:2em;display:block;>验色占</a>
      <a href=#c44 style=padding-left:0em;display:block;>象数易理篇之三</a>
      <a href=#c45 style=padding-left:2em;display:block;>八卦所属内外动静之图</a>
      <a href=#c46 style=padding-left:2em;display:block;>八卦万物类占</a>
      <a href=#c47 style=padding-left:4em;display:block;>乾</a>
      <a href=#c48 style=padding-left:4em;display:block;>坤</a>
      <a href=#c49 style=padding-left:4em;display:block;>震</a>
      <a href=#c50 style=padding-left:4em;display:block;>巽</a>
      <a href=#c51 style=padding-left:4em;display:block;>坎</a>
      <a href=#c52 style=padding-left:4em;display:block;>离</a>
      <a href=#c53 style=padding-left:4em;display:block;>艮</a>
      <a href=#c54 style=padding-left:4em;display:block;>兑</a>
      <a href=#c55 style=padding-left:0em;display:block;>体用生克篇之一</a>
      <a href=#c56 style=padding-left:2em;display:block;>心易占卜玄机</a>
      <a href=#c57 style=padding-left:2em;display:block;>占卜总诀</a>
      <a href=#c58 style=padding-left:2em;display:block;>占卜论理诀</a>
      <a href=#c59 style=padding-left:2em;display:block;>先天后天论</a>
      <a href=#c60 style=padding-left:2em;display:block;>卦断遗论</a>
      <a href=#c61 style=padding-left:2em;display:block;>八卦心易体用诀</a>
      <a href=#c62 style=padding-left:2em;display:block;>体用总诀</a>
      <a href=#c63 style=padding-left:0em;display:block;>体用生克篇之二</a>
      <a href=#c64 style=padding-left:2em;display:block;>天时占第一</a>
      <a href=#c65 style=padding-left:2em;display:block;>人事占第二</a>
      <a href=#c66 style=padding-left:2em;display:block;>家宅占第三</a>
      <a href=#c67 style=padding-left:2em;display:block;>屋舍占第四</a>
      <a href=#c68 style=padding-left:2em;display:block;>婚姻占第五</a>
      <a href=#c69 style=padding-left:2em;display:block;>生产占第六</a>
      <a href=#c70 style=padding-left:2em;display:block;>饮食占第七</a>
      <a href=#c71 style=padding-left:2em;display:block;>求谋占第八</a>
      <a href=#c72 style=padding-left:2em;display:block;>求名占第九</a>
      <a href=#c73 style=padding-left:2em;display:block;>求财占第十</a>
      <a href=#c74 style=padding-left:2em;display:block;>交易占第十一</a>
      <a href=#c75 style=padding-left:2em;display:block;>出行占第十二</a>
      <a href=#c76 style=padding-left:2em;display:block;>行人占第十三</a>
      <a href=#c77 style=padding-left:2em;display:block;>谒见占第十四</a>
      <a href=#c78 style=padding-left:2em;display:block;>失物占第十五</a>
      <a href=#c79 style=padding-left:2em;display:block;>疾病占第十六</a>
      <a href=#c80 style=padding-left:2em;display:block;>官讼占第十七</a>
      <a href=#c81 style=padding-left:2em;display:block;>坟墓占第十八</a>
      <a href=#c82 style=padding-left:0em;display:block;>体用生克篇之三</a>
      <a href=#c83 style=padding-left:2em;display:block;>三要灵应篇</a>
      <a href=#c84 style=padding-left:4em;display:block;>序</a>
      <a href=#c85 style=padding-left:4em;display:block;>三要灵应篇</a>
      <a href=#c86 style=padding-left:0em;display:block;>体用生克篇之四</a>
      <a href=#c87 style=padding-left:2em;display:block;>十应奥论</a>
      <a href=#c88 style=padding-left:2em;display:block;>十应目论</a>
      <a href=#c89 style=padding-left:4em;display:block;>复明天时之应</a>
      <a href=#c90 style=padding-left:4em;display:block;>复明地理之应</a>
      <a href=#c91 style=padding-left:4em;display:block;>复明人事之应</a>
      <a href=#c92 style=padding-left:4em;display:block;>复明时令之应</a>
      <a href=#c93 style=padding-left:4em;display:block;>复明方卦之应</a>
      <a href=#c94 style=padding-left:4em;display:block;>复明动物之应</a>
      <a href=#c95 style=padding-left:4em;display:block;>复明静物之应</a>
      <a href=#c96 style=padding-left:4em;display:block;>复明言语之应</a>
      <a href=#c97 style=padding-left:4em;display:block;>复明声音之应</a>
      <a href=#c98 style=padding-left:4em;display:block;>复明五色之应</a>
      <a href=#c99 style=padding-left:2em;display:block;>遗论</a>
      <a href=#c100 style=padding-left:2em;display:block;>体用</a>
      <a href=#c101 style=padding-left:2em;display:block;>体用论</a>
      <a href=#c102 style=padding-left:2em;display:block;>衰旺论</a>
      <a href=#c103 style=padding-left:2em;display:block;>内外论</a>
      <a href=#c104 style=padding-left:2em;display:block;>动静</a>
      <a href=#c105 style=padding-left:2em;display:block;>向背</a>
      <a href=#c106 style=padding-left:2em;display:block;>静占</a>
      <a href=#c107 style=padding-left:0em;display:block;>体用生克篇之五</a>
      <a href=#c108 style=padding-left:2em;display:block;>观物洞玄歌</a>
      <a href=#c109 style=padding-left:2em;display:block;>起卦加数例</a>
      <a href=#c110 style=padding-left:2em;display:block;>屋宅之占诀</a>
      <a href=#c111 style=padding-left:2em;display:block;>器物占</a>
      <a href=#c112 style=padding-left:0em;display:block;>断占总诀篇之一</a>
      <a href=#c113 style=padding-left:2em;display:block;>观梅数诀</a>
      <a href=#c114 style=padding-left:4em;display:block;>序</a>
      <a href=#c115 style=padding-left:4em;display:block;>八卦定阴阳次序</a>
      <a href=#c116 style=padding-left:4em;display:block;>占卦诀</a>
      <a href=#c117 style=padding-left:4em;display:block;>体用互变之诀</a>
      <a href=#c118 style=padding-left:4em;display:block;>体用生克之诀</a>
      <a href=#c119 style=padding-left:4em;display:block;>体用衰旺之诀</a>
      <a href=#c120 style=padding-left:4em;display:block;>体用动静之诀</a>
      <a href=#c121 style=padding-left:4em;display:block;>占卜坐端之诀</a>
      <a href=#c122 style=padding-left:4em;display:block;>占卜克应之诀</a>
      <a href=#c123 style=padding-left:0em;display:block;>断占总诀篇之二</a>
      <a href=#c124 style=padding-left:2em;display:block;>万物赋</a>
      <a href=#c125 style=padding-left:2em;display:block;>饮食篇</a>
      <a href=#c126 style=padding-left:2em;display:block;>观物玄妙歌诀</a>
      <a href=#c127 style=padding-left:2em;display:block;>诸物响应歌</a>
      <a href=#c128 style=padding-left:0em;display:block;>断占总诀篇之三</a>
      <a href=#c129 style=padding-left:2em;display:block;>诸卦反对性情</a>
      <a href=#c130 style=padding-left:2em;display:block;>占物类例</a>
      <a href=#c131 style=padding-left:2em;display:block;>物数为体诀</a>
      <a href=#c132 style=padding-left:2em;display:block;>观物看变爻为主</a>
      <a href=#c133 style=padding-left:2em;display:block;>观物克应法</a>
      <a href=#c134 style=padding-left:2em;display:block;>观物趋时诀</a>
      <a href=#c135 style=padding-left:2em;display:block;>观物用《易》例</a>
      <a href=#c136 style=padding-left:2em;display:block;>万物戏验</a>
      <a href=#c137 style=padding-left:2em;display:block;>占卜十应诀</a>
      <a href=#c138 style=padding-left:0em;display:block;>字画指迷篇之一</a>
      <a href=#c139 style=padding-left:2em;display:block;>字画指迷篇序</a>
      <a href=#c140 style=padding-left:2em;display:block;>指迷赋</a>
      <a href=#c141 style=padding-left:2em;display:block;>玄黄克应歌</a>
      <a href=#c142 style=padding-left:2em;display:block;>玄黄叙</a>
      <a href=#c143 style=padding-left:2em;display:block;>玄黄歌</a>
      <a href=#c144 style=padding-left:2em;display:block;>花押赋</a>
      <a href=#c145 style=padding-left:2em;display:block;>探玄赋</a>
      <a href=#c146 style=padding-left:2em;display:block;>齐景至理论</a>
      <a href=#c147 style=padding-left:2em;display:block;>字画经验</a>
      <a href=#c148 style=padding-left:2em;display:block;>字体诗诀</a>
      <a href=#c149 style=padding-left:2em;display:block;>四季水笔</a>
      <a href=#c150 style=padding-left:2em;display:block;>画有阴阳</a>
      <a href=#c151 style=padding-left:2em;display:block;>八卦断</a>
      <a href=#c152 style=padding-left:2em;display:block;>相字心易</a>
      <a href=#c153 style=padding-left:2em;display:block;>辨字式</a>
      <a href=#c154 style=padding-left:0em;display:block;>字画指迷篇之二</a>
      <a href=#c155 style=padding-left:2em;display:block;>笔法筌蹄</a>
      <a href=#c156 style=padding-left:2em;display:block;>六神笔法</a>
      <a href=#c157 style=padding-left:2em;display:block;>六神主事</a>
      <a href=#c158 style=padding-left:2em;display:block;>玄黄笔法歌</a>
      <a href=#c159 style=padding-left:2em;display:block;>五行体格式</a>
      <a href=#c160 style=padding-left:2em;display:block;>时辰断</a>
      <a href=#c161 style=padding-left:2em;display:block;>起六神卦诀</a>
      <a href=#c162 style=padding-left:0em;display:block;>字画指迷篇之三</a>
      <a href=#c163 style=padding-left:2em;display:block;>辨别五行歌</a>
      <a href=#c164 style=padding-left:2em;display:block;>辨别六神歌</a>
      <a href=#c165 style=padding-left:2em;display:block;>五行并歌式</a>
      <a href=#c166 style=padding-left:0em;display:block;>拆字杂编篇之一</a>
      <a href=#c167 style=padding-left:2em;display:block;>五行全备</a>
      <a href=#c168 style=padding-left:2em;display:block;>六神形式</a>
      <a href=#c169 style=padding-left:2em;display:block;>八卦辨</a>
      <a href=#c170 style=padding-left:2em;display:block;>七言作用歌</a>
      <a href=#c171 style=padding-left:2em;display:block;>比例歌</a>
      <a href=#c172 style=padding-left:0em;display:block;>拆字杂编篇之二</a>
      <a href=#c173 style=padding-left:2em;display:block;>易理玄微</a>
      <a href=#c174 style=padding-left:2em;display:block;>断扇占</a>
      <a href=#c175 style=padding-left:2em;display:block;>买香占</a>
      <a href=#c176 style=padding-left:2em;display:block;>古人相字</a>
      <a href=#c177 style=padding-left:2em;display:block;>断富贵贫贱要诀</a>
      <a href=#c178 style=padding-left:0em;display:block;>拆字杂编篇之三</a>
      <a href=#c179 style=padding-left:2em;display:block;>五行四时旺相休囚例</a>
      <a href=#c180 style=padding-left:2em;display:block;>天干地支所属五行</a>
      <a href=#c181 style=padding-left:2em;display:block;>论八卦性情</a>
      <a href=#c182 style=padding-left:2em;display:block;>八卦取象</a>
      <a href=#c183 style=padding-left:2em;display:block;>六十甲子歌</a>
      <a href=#c184 style=padding-left:2em;display:block;>六十四卦次序</a>
      <a href=#c185 style=padding-left:2em;display:block;>《系辞》八卦类象歌</a>
      <a href=#c186 style=padding-left:2em;display:block;>八反格</a>
      <a href=#c187 style=padding-left:2em;display:block;>四言独步</a>
      <a href=#c188 style=padding-left:2em;display:block;>五言作用歌</a>
      <a href=#c189 style=padding-left:2em;display:block;>别理论</a>
      <a href=#c190 style=padding-left:2em;display:block;>六言剖断歌</a>
      <a href=#c191 style=padding-left:0em;display:block;>拆字杂编篇之四</a>
      <a href=#c192 style=padding-left:2em;display:block;>格物章</a>
      <a href=#c193 style=padding-left:2em;display:block;>物理论</a>
      <a href=#c194 style=padding-left:2em;display:block;>五行六神辨别篇</a>
      <a href=#c195 style=padding-left:2em;display:block;>金声章</a>
    </div>
    <div style="flex:3; background-color: #bbb;    opacity: 0.6;"></div>
  </div>
  <button id=catalogueBtn class="mdui-fab mdui-fab-fixed mdui-ripple">目录</button>

  <a name=c0></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <span style="font-family:宋体;mso-ascii-font-family:Cambria;mso-hansi-font-family:
Cambria">序</span>
    <span lang=EN-US style=font-size:16.0pt;line-height:171%>
      <o:p></o:p>
    </span>
  </h1>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">宋庆历中，康节邵先生隐处山林，冬不炉，夏不扇，盖心于《易》，忘乎其为寒暑也。犹以为未至，糊《易》于壁，心致而目玩焉，邃于《易》理，欲造《易》之数而未有征也。一日午睡，有鼠走而前，以所枕瓦投击之，鼠走而枕破。觉中有字，取视之：“此枕卖与贤人康节，某年月日某时击鼠枕破。”先生怪而询之陶家，其陶枕者曰：“昔一手执《周易》，憩坐举枕，其书此，必此老也。今不至久矣，吾能识其家。”先生偕陶往访焉，及门，则已不存矣。但遗书一册，谓其家人曰：“某年某月某日某时有一秀士至吾家，可以此书授之，能终吾身后事矣。”其家以书授先生，先生阅之，乃《易》之文，并有诀例。当推例演数，谓其人曰：“汝父存日有白金，置睡床西北窖中，可以营事。”其家如言，果得金。先生授书以归，后观梅以雀争胜，布算知次晚有邻人女折花坠伤其股，其卜盖始于此。后世相传，遂名《观梅数》。又后算落花之日，午时为马所践毁；又算西林寺额，知有阴人之祸。凡此皆所谓先天之数也。盖未得卦先得数也，以数起卦，故曰：“先天”。若夫见老人有忧色，卜而知老人有食鱼之祸；见少年有喜色，卜而知有币聘之喜；闻鸡鸣知鸡必烹；听牛鸣而知牛当杀，凡此皆后天之数也。盖未得数先得卦也，以卦起数，故曰：“后天”。一日，置一椅，以数推之，书椅底曰：“某年月日当为仙客坐破。”至期，果有道者来访，坐破其椅。仙客愧谢，先生曰：“物之成毁有数，岂足介意。且公神仙也，幸坐以示教。”因举椅下所书以验，道者愕然，趋起出，忽不见。乃知数之妙，虽鬼神莫逃，而况于人乎！况于物乎！</span>
  </p>
  <a name=c1></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218760>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">象数义理篇之一</span>
    </a>
  </h1>
  <a name=c2></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218761>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">周易卦数</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾一，兑二，离三，震四，巽五，坎六，艮七，坤八。</span>
  </p>
  <a name=c3></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218762>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五行生克</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">金生水，水生木，木生火，火生土，土生金。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">金克木，木克土，土克水，水克火，火克金。</span>
  </p>
  <a name=c4></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218763>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八宫所属五行</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾</span>
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☰</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">兑</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☱</span>
    <b style=mso-bidi-font-weight:normal>
      <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">金</span>
    </b>
    <span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">；坎</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☵</span>
    <b style=mso-bidi-font-weight:normal>
      <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">水</span>
    </b>
    <span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">；震</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☳</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>巽</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☴</span>
    <b style=mso-bidi-font-weight:normal>
      <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">木</span>
    </b>
    <span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">；离</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☲</span>
    <b style=mso-bidi-font-weight:normal>
      <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">火</span>
    </b>
    <span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">；坤</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☷</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>艮</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☶</span>
    <b style=mso-bidi-font-weight:normal>
      <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">土</span>
    </b>
    <span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">。</span>
  </p>
  <a name=c5></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218764>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">卦气旺</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">震巽木旺于春；离火旺于夏；乾兑金旺于秋；坎水旺于冬；坤艮旺于辰戌丑未月。</span>
  </p>
  <a name=c6></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218765>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">卦气衰</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">春坤艮；夏乾兑；秋震巽；冬离；辰戌丑未月坎。</span>
  </p>
  <a name=c7></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218766>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">十天干</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">甲乙东方木；丙丁南方火；戊己中央土；庚辛西方金；壬癸北方水。</span>
  </p>
  <a name=c8></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218767>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">十二地支</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>子</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>（</span>
    <span lang=EN-US>23-01</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">）</span>
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">水</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">鼠；
      <b style=mso-bidi-font-weight:normal>丑</b>（</span>
    <span lang=EN-US>01-03</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>）</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri">土</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">牛；
      <b style=mso-bidi-font-weight:normal>寅</b>（</span>
    <span lang=EN-US>03-05</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">）</span>
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">木</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">虎；
      <b style=mso-bidi-font-weight:normal>卯</b>（</span>
    <span lang=EN-US>05-07</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>）</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri">木</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">兔；</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>辰</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>（</span>
    <span lang=EN-US>07-09</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">）</span>
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">土</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">龙；
      <b style=mso-bidi-font-weight:normal>巳</b>（</span>
    <span lang=EN-US>09-11</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>）</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri">火</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">蛇；
      <b style=mso-bidi-font-weight:normal>午</b>（</span>
    <span lang=EN-US>11-13</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">）</span>
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">火</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">马；
      <b style=mso-bidi-font-weight:normal>未</b>（</span>
    <span lang=EN-US>13-15</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>）</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri">土</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">羊；</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>申</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>（</span>
    <span lang=EN-US>15-17</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">）</span>
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">金</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">猴；
      <b style=mso-bidi-font-weight:normal>酉</b>（</span>
    <span lang=EN-US>17-19</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>）</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri">金</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">鸡；
      <b style=mso-bidi-font-weight:normal>戌</b>（</span>
    <span lang=EN-US>19-21</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">）</span>
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">土</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">狗；
      <b style=mso-bidi-font-weight:normal>亥</b>（</span>
    <span lang=EN-US>21-23</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>）</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
Calibri">水</span>
    <span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-hansi-font-family:Calibri">猪。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c9></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218768>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦象例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☰</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">乾三连；</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☷</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>坤六断；</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☳</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>震仰盂；</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☶</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>艮覆碗。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☲</span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">离中虚；</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☵</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>坎中满；</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☱</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>兑上缺；</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">☴</span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>巽下断。</span>
  </p>
  <a name=c10></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218769>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占法</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">易中秘密穷天地，造化天机泄未然；中有神明司祸福，后来切莫教轻传。</span>
  </p>
  <a name=c11></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218770>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">玩法</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">一物从来有一身，一身还有一乾坤。能知万物备于我，肯把三才别立根。天向一中分造化，人于心上起经纶。仙人亦有两般话，道不虚传只在人。</span>
  </p>
  <a name=c12></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218771>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">卦数起例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">卦以八除，凡起卦不问数多少，即以八作卦数。过八数，即以八数退除，以零数作卦。如一八除不尽，再除二八、三八，直除尽八数，以零数作卦。如得八数整，即坤卦，更不必除也。</span>
  </p>
  <a name=c13></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218772>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">爻以六除</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡起动爻，以重卦总数除六，以零作动爻。如不满六，止用此数为动爻，不必再除。如过六数则除之，一六不尽，再除二六、三六，直除尽以零数作动爻。若一爻动，则看此一爻，是阳爻，则变阴爻，阴爻则变阳爻。取爻当以时加之。互卦只用八卦，不必用六十四卦重名互卦以重卦去了初爻及第六爻，以中间四爻分作两卦，看得何卦。又云：乾坤无互，互其变卦。</span>
  </p>
  <a name=c14></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218773>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">年月日时起例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">年月日为上卦，年月日加时总为下卦。又以年月日时总数取爻。如子年一数，丑年二数，直至亥年十二数。月如正月一数，直至十二月亦作十二数。日数，如初一一数，直至三十日为三十数。以上年月日共计几数，以八除之，以零数作上卦。时如子时一数，直亥时为十二数。就将年月日时数总计几数，以八除之，零数作下卦，就以除六数作动爻。</span>
  </p>
  <a name=c15></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218774>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">物数占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡见有可数之物，即以此数起作上卦，以时数配作下卦，即以卦数并时数，总除六，取动爻。</span>
  </p>
  <a name=c16></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218775>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">声音占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡闻声音，数得几数，起作上卦，加时数配作下卦。又以声音，如闻动物鸣叫之声，或闻人敲击之声，皆可作数起卦。</span>
  </p>
  <a name=c17></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218776>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡见字数，如停匀，即平分一半为上卦，一半为下卦，如字数不匀，即少一字为上卦，取“天轻清”之义；以多一字为下卦，取“地重浊”之义。一字占；一字为太极未判，如草书混沌不明，不可得卦。如楷书则取其字画，以左为阳画，右为阴画。居左者看几数，取为上卦；居右者看几数，取为下卦。又以一字之阴阳全画取爻。彳、丿，此为左者；一、乙、丶，此为右者。二字占；二字为两仪平分，以一字为上卦，以一字为下卦。三字占；三字为三才，以一字为上卦，二字为下卦。四字占；四字为四象，平分上下为卦。又四字以上下必数画数，只以平仄声音调之。平声为一数，上声为二数，去声为三数，入声为四数。五字占；五字为五行，以二字为上卦，三字为下卦。六字占；六字为六爻之集，平分上下为卦。七字占；七字为齐七政，以三字为上卦，四字为下卦。八字占；八字为八卦定位，平分上下为卦。九字占；九字为九畴之义，以四字为上卦，五字为下卦。十字占；十字为成数，平分上下为卦。十一字占；十一字以上至于百字，皆可起卦。但十一字以上，又不用平仄声音调之，止用字数。如字数均平，</span>
  </p>
  <a name=c18></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218777>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">丈尺占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">丈尺之物，以丈数为上卦，尺数为下卦，合丈尺之数取爻。寸数不用。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">则以半为上卦，以半为下卦，又合二卦总数取爻。</span>
  </p>
  <a name=c19></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218778>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">尺寸占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">以尺数为上卦，寸数为下卦。合尺寸之数加时数取爻。分数不用。</span>
  </p>
  <a name=c20></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218779>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">为人占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡为人占，其例不一，或听语声起卦，或观其人品，或取诸身，或取诸物，或因其服色、触其外物，或以年月日时，或以书写来意。右听其语声音，如或一句，即如其字数分之起卦。如说两句，即用先一句为上卦，后一句为下卦。语多，则但用初听一句，或未后所闻一句，余句不用。观其人品者，如老人为乾，少女为兑之类。观诸其身者，如头动为乾，足动为震，目动为离之类。取诸其物者，如人手中偶有何，如金玉及圆物之属为乾，土瓦及方物之属为坤之类。因其服色者，如其人青衣为震，赤衣为离之类。触其外物者，起卦之时，见水为坎卦，见火为离卦之类。年月日时，如望梅之类推之。书写来意者，其人来占，或写来意，则以其字占之。</span>
  </p>
  <a name=c21></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218780>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">自己占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡自己欲占，以年月日时，或闻有声音，或观当时有所触之外物，皆可起卦。以上三例与前章《为人占》法同。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c22></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218781>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占动物</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占群物之动不可起卦。如见一物则就此物为上卦，物来之方位为下卦，合物卦数及方位卦数加时数取爻。以此卦总断其物。如后天占牛鸣鸡叫之类。又凡牛马犬豕之类初生，则以初生年月日时占之。又或置买此物，亦可以初置买之时推之。</span>
  </p>
  <a name=c23></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218782>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占静物</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占静物，有如江河山石，不可起卦。若至屋宅树木之类，则屋宅初创之时，树木初置之时，皆可起卦。至于器，则置成之时可占，如枕椅之类是矣。作则无故不占。若《观梅》则见雀争枝坠地而占；《牡丹》则自有问而占；《茂树》则枝枯自坠而后占也。</span>
  </p>
  <a name=c24></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218783>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">象数易理篇之二</span>
    </a>
  </h1>
  <a name=c25></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218784>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">端法后天起卦之例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">（物卦起例）后天端法以物为上卦，以方位为下卦，合物卦之数与方位之数加时数以取动爻。</span>
  </p>
  <a name=c26></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218785>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦万物属类（并为上卦）</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>乾</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：天、父、老人、官贵、头、骨、马、金、宝珠、玉、木果、圆物、冠、镜、刚物、大赤色、水寒。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>坤</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：地、母、老妇、土、牛、釜、布帛、文章、舆、方物、柄、黄色、瓦器、腹、裳、黑色、黍稷、书、米、谷。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>震</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：雷、长男、足、发、龙、百虫、蹄、竹、萑苇、马鸣、弁足、颡、稼、乐器之类、草木、青碧绿色、树、木核、柴、蛇。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>巽</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：风、长女、僧尼、鸡、股、百禽、百草、臼、香气、臭、绳、眼、羽毛、帆、扇、枝叶之类、仙道、工匠、直物、工巧之器。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>坎</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：水、雨雪、工、豕、中男、沟渎、弓轮、耳、血、月、盗、宫律、栋、丛棘、狐、蒺藜、桎梏、水族、鱼、盐、酒醢、有核之物、黑色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>离</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：火、雉、日、目、电、霓、中女、甲胄、戈兵、文书、槁木、炉、鼍、龟、蟹、蚌、凡有壳之物、红赤紫色、花、文人、干燥物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>艮</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：山、土、少男、童子、狗、手、指、径路、门阙、果蓏、阍寺、鼠、虎、狐、黔喙之属、木生之物、藤生之瓜、鼻。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.1pt">
    <b style=mso-bidi-font-weight:normal>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>兑</span>
    </b>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>卦：泽、少女、巫、舌、妾、肺、羊、毁折之物、带口之器、属金者、废缺之物、奴仆婢。</span>
  </p>
  <a name=c27></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218786>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦方位图</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">右离南坎北、震东兑西、人则介乎其中。凡物之从花甲来，并起作下卦，加时取爻。</span>
  </p>
  <a name=c28></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218787>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观梅占（年月日时占例）</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">辰年十二月十七日申时，康节先生偶观梅，见二雀争枝坠地。先生曰：“不动不占，不因事不占。今二雀争枝坠地，怪也。”因占之：辰年五数，十二月十二数，十七日十七数，共三十四数，除四八三十二，得二，属兑，为上卦；加申时九数，总得四十三数，五八除四十，零得三数，为离，作下卦。又上下总四十三数，以六除，六七四十二，得一零为动爻。是为泽为革，初爻变咸，互见乾巽。断之曰：详此卦，明晚当有女子折花，园丁不知而逐之，女子失惊坠地，遂伤其股。右兑金为体，离火克之，互中巽木，复三起离火，则克体之卦气盛。兑为少女，因知女子被伤，而互中巽木，又逢乾金、兑金克之，则巽木被伤。而巽为股，故有伤股之应。幸变为艮土，兑金得生，知女子但被伤，而不至于凶危也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☱</span>
    <span style=font-family:宋体>兑</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;mso-bidi-font-family:
&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;
mso-bidi-font-family:&quot;Segoe UI Symbol&quot;">☰</span>
    <span style=font-family:宋体>乾</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;mso-bidi-font-family:
&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;
mso-bidi-font-family:&quot;Segoe UI Symbol&quot;">☱</span>
    <span style=font-family:宋体>兑</span>
    <span lang=EN-US style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;
mso-bidi-font-family:&quot;MS Gothic&quot;">
      <o:p></o:p>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☲离</span>
    <span style="font-family:&quot;MS Gothic&quot;;
mso-fareast-font-family:宋体;mso-bidi-font-family:&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;mso-bidi-font-family:
&quot;Segoe UI Symbol&quot;">☴</span>
    <span style=font-family:宋体>巽</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;mso-bidi-font-family:
&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;
mso-bidi-font-family:&quot;Segoe UI Symbol&quot;">☶</span>
    <span style=font-family:宋体>艮</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">革</span>
    <span lang=EN-US>
      <span style=mso-spacerun:yes>&nbsp;&nbsp; </span>
    </span>
    <span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri">姤</span>
    <span lang=EN-US>
      <span style=mso-spacerun:yes>&nbsp;&nbsp; </span>
    </span>
    <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>咸</span>
  </p>
  <a name=c29></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218788>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">牡丹占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巳年三月十日卯时，先生与客往司马公家共观牡丹，时值花开甚盛。客曰：“花盛如此，亦有数乎？”先生曰：“莫不有数。且因问而可以占矣。”遂占之：以巳年六数，三月三数，十六日十六数，总得二十五数，除三八二十四数，零一数为乾，为上卦；加卯时得四数，共得二十九数，又除三八二十四数，得零五为巽卦，作下卦，得天风姤。又以总计二十九数，以六除之，四六除二十四，得零五，爻动变鼎卦。互见重乾。遂与客曰：“怪哉！此花明日午时，当为马所践毁。”众客愕然，不信。次日午时，果有贵官观牡丹，二马相啮，群至花间弛骤，花尽为之践毁。断之曰：巽木为体，乾金克之，互卦又见重乾，克体之卦多矣，卦中无生意，固知牡丹必为践毁。所谓马者，乾为马也；午时者，离明之象，是以知之也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☰乾</span>
    <span style="font-family:&quot;MS Gothic&quot;;
mso-fareast-font-family:宋体;mso-bidi-font-family:&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;mso-bidi-font-family:
&quot;Segoe UI Symbol&quot;">☰</span>
    <span style=font-family:宋体>乾</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;mso-bidi-font-family:
&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;
mso-bidi-font-family:&quot;Segoe UI Symbol&quot;">☲</span>
    <span style=font-family:宋体>离</span>
    <span lang=EN-US style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;
mso-bidi-font-family:&quot;MS Gothic&quot;">
      <o:p></o:p>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:&quot;MS Gothic&quot;;
mso-bidi-font-family:&quot;MS Gothic&quot;">☴巽</span>
    <span style="font-family:&quot;MS Gothic&quot;;
mso-fareast-font-family:宋体;mso-bidi-font-family:&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;mso-bidi-font-family:
&quot;Segoe UI Symbol&quot;">☰</span>
    <span style=font-family:宋体>乾</span>
    <span style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;mso-bidi-font-family:
&quot;MS Gothic&quot;"></span>
    <span lang=EN-US style="font-family:&quot;Segoe UI Symbol&quot;,&quot;sans-serif&quot;;
mso-bidi-font-family:&quot;Segoe UI Symbol&quot;">☴</span>
    <span style=font-family:宋体>巽</span>
    <span lang=EN-US style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;
mso-bidi-font-family:&quot;MS Gothic&quot;">
      <o:p></o:p>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
&quot;MS Gothic&quot;;mso-hansi-font-family:&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">姤</span>
    <span lang=EN-US style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;
mso-bidi-font-family:&quot;MS Gothic&quot;">
      <span style=mso-spacerun:yes>&nbsp;&nbsp; </span>
    </span>
    <span style="font-family:宋体;mso-ascii-font-family:&quot;MS Gothic&quot;;mso-hansi-font-family:
&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">乾</span>
    <span lang=EN-US style="font-family:&quot;MS Gothic&quot;;mso-fareast-font-family:宋体;mso-bidi-font-family:
&quot;MS Gothic&quot;">
      <span style=mso-spacerun:yes>&nbsp;&nbsp; </span>
    </span>
    <span style="font-family:宋体;mso-ascii-font-family:&quot;MS Gothic&quot;;mso-hansi-font-family:
&quot;MS Gothic&quot;;mso-bidi-font-family:&quot;MS Gothic&quot;">鼎</span>
  </p>
  <a name=c30></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218789>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">邻夜扣门借物占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">冬夕酉时，先生方拥炉，有扣门者，初扣一声而止，继而又扣五声，且云借物。先生令勿言，令其子占之，试所借何物。以一声属乾为上卦，以五声属巽为下卦；又以一乾五巽共六数，加酉时十数，共得十六数，以六除之，二六一十二，得天风姤，第四爻动，变巽卦，互见重乾。卦中三乾金，二巽木，为金木之物也，又以乾金短而巽木长，是借斧也。子乃断曰：“金短木长者，器也。所借锄也。”先生曰：“非也，必斧也。”问之，果借斧。其子问何故。先生曰：“起数又须明理，以卦推之，斧亦可也，锄亦可也；以理推之，夕晚安用锄？必借斧。盖斧切于劈柴之用耳。”推数又须明理，为占卜之切要也。盖数不推理，是不得也，学数者志之。</span>
  </p>
  <a name=c31></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218790>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">今日动静如何</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">有客问曰：“今日动静如何？”遂将此六字占之。以平分“今日动”三字为上卦，“今”平声，一数；“日”入声，四数；“动”去声，三声，共得八数，得坤为上卦。以“静如何”为下卦，“静”去声，三数；“如”平声，一数；“何”平声，一数，共五数，得巽为下卦。又以八、五总为十三数，除二六一十二，零得一数。为地风升，初爻动，变泰卦，互见震兑。遂谓客曰：“今日有人相请，客不多，酒不醉，味至鸡黍而已。”至晚，果然。断曰：升者，有升阶之义，互震兑有东西席之分，卦中兑为口，坤为腹，为口腹之事，故知有人相请。客不多者，坤土独立，无同类之卦气也。酒不醉，卦中无坎。味止鸡黍者，坤为黍稷耳。盖卦无相生之义，故知酒不多，食品不丰也。</span>
  </p>
  <a name=c32></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218791>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">西林寺牌额占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">先生偶见西林寺之额，“林”无两钩，因占之。以“西”字七画为艮，作上卦；以“林”字八画为坤，作下卦；以上七画下八画总十五画，除二六一十二，零数得三，是山地剥卦；第三爻动，变艮；互见重坤。断曰：寺者，纯阳之所居。今卦得重阴之爻，而又有群阴剥阳之兆。详此则寺中当有阴人之祸。询之，果然。遂谓寺僧曰：“何添‘林’字钩？则自然无阴人之祸矣”。僧信然，即添‘林’字两钩，寺果无事。右纯阳之人所居，得纯阴之卦，故不吉。又有群阴肃阳之义，故有阴人之祸。若添“林”字两钩，则十画，除八得二，为兑卦，合上艮是山泽损；第五爻变动为中孚卦。互卦见坤震。损者益之始，用互具生体，为吉卦，可以得安矣。右以上并是先得数，以数起卦，所谓先天之数也。</span>
  </p>
  <a name=c33></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218792>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">老人有忧色占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">己丑日卯时，偶在途行，有老人往巽方，有忧色。问其何以有忧，曰：“无”。怪而占之，以老人属乾为上卦。巽方为下卦，是天风姤。又以乾一、巽五之数，加卯时四数，总十数，除六，得四为动爻，是为天风姤之九四。《易》曰：“包无鱼，凶。”是《易》辞不吉矣。以卦论之，巽木为体，乾金克之，互卦又见重乾，俱是克体，并无生气，且时在途行，其应速。遂以成卦之数中分而取其半，谓老人曰：“汝于五日内，谨慎出入，恐有重祸。”果于五日内，此老赴吉席，用鱼骨鲠而终。右凡占卜克应之期，看自己之动静，以决事之迟速。故行则应速，以遂成卦之数，中分而取其其半也。坐则事应于迟，当倍其成卦之数而定之也。立则半迟半速，止以成卦之数定之可也。虽然如是，又在变通。如占牡丹及观梅之类，则二花皆朝夕之故，岂特成数之久也。</span>
  </p>
  <a name=c34></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218793>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">少年有喜色占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">壬申日，午时，有少年从离方来，喜形于色，问有何喜，曰：“无”。遂占之，以少年属艮，当上卦，离为下卦，得山火贲。以艮七、离三加午时为七，总十七数，除十二，零五为动爻，是为贲之六五爻，曰：“贲于丘园，束帛戋戋，吉。”《易》辞已吉矣，卦则贲之家人，互见震坎；离为体，互变俱生之。断曰：子于十七日内必有聘币之喜。至期果然定亲。</span>
  </p>
  <a name=c35></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218794>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">牛哀鸣占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">癸卯日午时，有牛鸣于坎方，其声极悲。因占之。牛属坤，为上卦；坎方为下卦。坎六坤八加午时七数，共二十一数，除三六一十八，三爻动，得地水师之三爻，六三《易》辞曰：“师或舆尸，凶。”卦则师变升，互坤震；乃坤为体，互变俱克之，并无生气。断曰：此牛二十一曰内，必遭屠杀。后二十日，人果买此牛，杀以犒众。悉皆异之。</span>
  </p>
  <a name=c36></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218795>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">鸡悲鸣占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">甲申日卯时，有鸡鸣于乾方，声极悲怆，因占之。鸡属巽为上卦，乾方为下卦，得风天小畜，以巽五乾一，共六数，加卯时四数，总十数，除六，得四爻动，变乾，是为小畜之六四。《易》曰：“有孚血去，惕出。”以血推之，割鸡之义。卦则小畜之乾；互见离兑。乾金为体，离为克之。卦中巽木离火，有烹饪之象。断曰：此鸡十日当烹，果十日客至，有烹鸡之验。</span>
  </p>
  <a name=c37></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218796>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">枯枝坠地占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">戊子日辰时，偶行至中途，有树蔚然，无风，枯枝自坠落地于兑方。占之，槁木为离，作上卦，得火泽睽，以兑二、离三加辰时五数。总十数，除六，零四，变山泽损。是睽之九四，《易》曰：“睽孤，遇元夫。”卦中火泽睽变损；互见坎离，兑金为体，离火克之；且睽损卦名，俱有伤残之义。断曰：此树十日当伐，果十日伐树起公廨，而匠者适字元夫也。右以上诸占例，并是先得卦，以卦起数，所谓后天之数也。</span>
  </p>
  <a name=c38></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218797>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">风觉鸟占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">风觉鸟占者，谓见风而觉，见鸟而占也。然非风鸟二占，而谓风觉鸟占也。凡卦之寓物者，皆谓风觉鸟占。如“易数”总谓之“观梅之数”也。</span>
  </p>
  <a name=c39></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218798>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">风觉占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">风觉占者，谓其见风而觉也，见鸟而占也。凡见风起而欲占之，便看风从何方而来，以之起卦，又须审其时，察其色，以推其声势，然后可以断其吉凶。风从何方来者，如风从南方来者，为家人（南方属离火，合得风火家人卦）；东来者，为益卦之类。审其时者，春为发生各畅之风，夏为长养之风，秋为肃杀，冬为凛冽之类。察其色者，带埃烟云气，可见其色。黄者，祥瑞之气；青者，半凶半吉；白主刃；气黑昏者凶；赤色者灾；红紫者吉。辨其声势者，其风声如阵马主斗争，如被涛者有惊险，如悲咽者有忧虞，如奏乐者有喜事，如喧呼者主闹哄，如烈焰者有为警，其声洋洋而来，徐徐而去者，吉庆之兆也。</span>
  </p>
  <a name=c40></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218799>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">鸟占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">鸟占者，见鸟可占也。凡见鸟群，数其只数，看其方所，听其声音，辨其羽毛，皆可起数。又须审其名义，察其噪鸣，取其吉凶。见鸟而占，数其只数者，如一只属乾，二只属兑，三只属离。看其方向所者，即离南坎北之数。听其声音者，如鸟叫一声属乾，二声属兑，三声离之类，皆可起卦，听其声音者，夫鸣叫之喧啾者，主口舌；鸣叫悲咽者，主忧愁；鸣叫嘹亮者，主吉庆。此取断吉凶之声音也。察其名义者，如鸦报灾，鹊报喜，鸾鹤为祥瑞，鹗鹏为妖孽之类是也。</span>
  </p>
  <a name=c41></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218800>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">听声音占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音者，如静室无所见，但与耳中所闻起卦，或数其数，验其方所，或辨其物声，详其所属，皆可起卦。察其悲喜，助断吉凶。数其数目者，如一声属乾，二声属兑；验其方所者，离南坎北之类是也。如人语声及动物鸣叫之声，声自口出者，属兑；而静物扣击，属震，鼓拍槌敲，板木之声是也。金声属乾，钟声钲铎之声是也；火声属离，烈焰爆竹等声是也；土声属坤，筑基、杵垣、坡崩、山裂是也。此辨其物声，详其所属也。察其悲喜，助断吉凶者，如闻人语笑声，又说吉语娱笑者，有喜也；人悲泣声与怨声、愁语及骂詈、穷叹等声，不吉也。</span>
  </p>
  <a name=c42></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218801>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">形物占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">形物占者，凡见物形可以起卦。如物之圆者属乾，刚者属兑，方者属坤，柔者属巽，仰者属震，覆者属艮，长者属巽，中刚外柔者属坎，内柔外刚者属离，干燥枯槁者属离，有文采者亦属离。用障碍之势，物之破者属兑。</span>
  </p>
  <a name=c43></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218802>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">验色占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占色之青色，属震；红紫赤者，属离；黄色，属坤；白色者，属兑；黑色者，属坎之类是也。</span>
  </p>
  <a name=c44></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218803>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">象数易理篇之三</span>
    </a>
  </h1>
  <a name=c45></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218804>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦所属内外动静之图</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾：玄黄、大赤色、金玉、宝珠、镜、狮、圆物、木果、贵物、冠、象、马、天鹅、刚物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎：水带子、带核之物、豕、鱼、弓轮、水具、水中之物、盐、酒、黑色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">艮：土石、黄色、虎、狗、土中之物、瓜果、百禽、鼠、黔啄之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">震：竹木、青绿碧色、龙、蛇、萑苇、竹木乐器、草、蕃鲜之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巽：木、蛇、长物、青碧绿色、山木之禽鸟、香、鸡、直物、竹木之器、工巧之器。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离：火、文书、干戈、雉、龟、蟹、槁木、甲胄、螺、蚌、鳖、物赤色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坤：土、万物、五谷、柔物、丝棉、百禽、牛、布帛、舆、金、瓦器、黄色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">兑：金刃、金器、乐器、泽中之物、白色、有口缺之物、羊。</span>
  </p>
  <a name=c46></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218805>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦万物类占</span>
    </a>
  </h2>
  <a name=c47></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218806>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">乾</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">一。金。乾为天、天风姤、天山遯、天地否、风地观、山地剥、火地晋、火天大有。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：天、冰、雹、霰。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：西北方、京都、大郡、形胜之地、高亢之所。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：君父、大人、老人、长者、宦官、名人、公门人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：刚健勇武、果决、多动少静、高上下屈。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：首、骨、肺。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：秋、九十月之交、戌亥年月日时、五金年月日时。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物：马、天鹅、狮、象。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：金玉、宝珠、圆物、木果、刚物、冠、镜。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：公府、楼台、高堂、大厦、驿舍、西北向之居。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：秋占宅兴隆、夏占有祸、冬占冷落、春占吉利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：贵官之眷、有声名之家、秋占宜成、冬夏占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：马肉、珍味、多骨、肝肺、干肉、木果、诸物之首、圆物、辛辣之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：易生、秋占生贵子、夏占有损、坐宜向西北。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：有名、宜随朝内任、刑官、武职、掌权、宜向西北之任、天使、驿官。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：有成、利公门、宜动中有财、夏占不成、冬占多谋少遂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：宜金玉、宝珠、贵货、易成、夏占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：有财、金玉之利、公门中得财、秋占大利、夏占损财、冬占无财。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：利于出行、宜入京师、利西北之行、夏占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：利见大人、有德行之人、宜见官贵、可见。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：头面之疾、肺疾、筋骨疾、上焦病、夏占不安。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：健讼、有贵人助、秋占得胜、夏占失理。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓：宜向西北、宜乾山气脉、宜天穴、宜高、秋占出贵、夏占大凶。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：西北。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：大赤色、玄色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：带金傍者、商音、行一四九。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：一、四、九。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：辛、辣。</span>
  </p>
  <a name=c48></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218807>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">坤</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">八。土。坤为地、地雷复、地泽临、地天泰、雷天大壮、泽天夬、水天需、水地比。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：云阴、雾气。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：田野、乡里、平地、西南方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：老母、后母、农夫、乡人、众人、大腹人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：吝啬、柔顺、懦弱、众多。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：腹、脾、胃、肉。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：辰戌丑未月、未申年月日时、八五十月日。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：方物、柔物、布帛、丝绵、五谷、舆、斧、瓦器。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物：牛、百兽、为牝马。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：西南向、村居、田舍、短屋、土阶、仓库。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：安稳、多阴气、春占宅舍不安。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：牛肉、土中之物、甘味、野味、五谷之味、芋笋之物、腹脏之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：利于婚姻、宜税产之家、乡村之家、或寡妇之家、春占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：易产、春占难产、有损或不利于母、宜坐西南方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：有名、宜西南方、或教官、农官守土之职、春占虚名。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：宜利交易、宜田土交易、宜五谷利、贱货、重物、布帛、静中有财、春占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：有利、宜土中之利、贱货重物之利、静中得财、春占无财、多中取利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：利求谋、邻里求谋、静中求谋、春占少遂、或谋于妇人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：可行、宜西南行、宜往乡里行、宜陆行、春占不宜行。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：可见、利见乡人、宜见亲朋或阴人、春不宜见。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：腹疾、脾胃之病、饮食停伤、谷食不化。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：理顺、得众情、讼当解散。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：宫音、带土姓人、行位八五十。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：八、五、十。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：西南。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：甘。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：黄、黑。</span>
  </p>
  <a name=c49></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218808>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">震</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">四。木。震为雷、雷地豫、雷水解、雷风恒、地风升、水风井、泽风大过、泽雷随。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：雷。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：东方、树木、闹市、大途、竹林、草木茂盛之所。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：足、肝、发、声音。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：长男。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：起动、怒、虚惊、鼓噪、多动、少静。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：春三月、卯年月日时、四三八月日。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：木竹、萑苇、乐器（属竹木者）、花草繁鲜之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物：龙、蛇。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：东向之居、山木之处、楼阁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：宅中不时有虚惊、春占吉、秋占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：蹄、肉、山林野味、鲜肉、果酸味、菜蔬。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：可有成、声名之家、利长男之婚、秋占不宜婚。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：山林竹木之财、宜东方求财、动处求财、或山林竹木茶货之利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：有名、宜东方之任、施号发令之职、掌刑狱之官、有茶竹木税课之任、或闹市司货之职。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：虚惊、胎动不安、头胎必生男、生宜东向、秋占必有损。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：足疾、肝经之疾、惊怖不安。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：可望、可求、宜动中谋、秋占不遂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：利于成交、秋占难成、山林木竹茶货之利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：健讼、有虚惊、行移取勘反复。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：可见、宜见山林之人、利见宜有声名之人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：宜向利于东方、利山林之人、秋占不宜行，但恐虚惊。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓：利于东向、山林中穴、秋不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：角音、带木姓氏、行位四八三。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：四、八、三。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：东。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：酸味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：青、绿、碧。</span>
  </p>
  <a name=c50></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218809>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">巽</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五。木。巽为风、风天小畜、风火家人、风雷益、天雷无妄、火雷噬嗑、山雷颐、山风蛊。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：风。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：东南方之地、草木茂秀之所、花果菜园。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：长女、秀士、寡妇之人、山林仙道之人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：柔和、不定、鼓舞、利市三倍、进退不果。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：股肱、气、风疾。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：春夏之交、三五八之月日时、三月、辰巳年月日时。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：木香、绳、直物、长物、竹木、工巧之器。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物；鸡、百禽、山林中之禽虫。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：东南向之居、寺观楼园、山林之居。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：安稳利市、春占吉、秋占不安。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：鸡肉、山林之味、蔬菜、酸味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：可成、宜长女之婚、秋占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：易生、头胎产女、秋占损胎、宜向东南坐。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：有名、宜文职有风宪之力、宜入风宪、宜茶课竹木税货之职、宜东南之任。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：有利三倍、宜山林之利、秋占不吉、山林木货之类。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：可谋望、有财、可成、秋占多谋少遂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：可行、有出入之利、宜向东南行、秋占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：可见、利见山林之人、利见文人秀士。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：股肱之疾、风疾、肠疾、中风、寒邪、气疾。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：角音、草木傍之姓氏、行位五三八。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：宜和、恐遭风宪之责。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓；宜东南方向、山林之穴、多树木、秋占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：五、三、八。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：东南。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：酸味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：青绿、碧、洁白。</span>
  </p>
  <a name=c51></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218810>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">坎</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">六。水。坎为水、水泽节、水雷屯、水火既济、泽火革、雷火丰、地火明夷、地水师。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：雨、月、雪、霜、露。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：北方、江湖、溪涧、泉井、卑湿之地、沟渎池沼、凡有水处）。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：中男、江湖之人、舟人、盗贼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：险陷卑下、外示以柔、内存以刚、漂泊不成、随波逐流。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：耳、血、肾。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：冬十一月、子年月日时、一六之月日。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：水带子、带核之物、弓轮矫揉之物、酒器、水具。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物：豕、鱼、水中之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：向北之居、近水、水阁、江楼、茶酒肆、宅中湿地之处。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：豕肉、酒、冷味、海味、羹汤酸味、宿食、鱼、带血、淹藏、有带核之物、水中之物、多骨之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：不安、暗昧、防盗。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：利中男之婚、宜北方之姻、不利成婚、不可婚辰戌丑未月。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：难产有险、宜次胎、中男、辰戌丑未月有损、宜北向。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：艰难、恐有灾陷、宜北方之任、鱼盐河泊之职、酒兼醋。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：有失、宜水边财、恐有失陷、宜鱼盐、酒货之利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：不利成交、恐防失陷、宜水边交易、宜鱼盐酒货之交易、或点水人之交易。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：不宜谋望、不能成就、秋冬占可谋望。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：不宜远行、宜涉舟、宜北方之行、防盗、恐遇险阻陷溺之事。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：难见、宜见江湖之人、或有水傍姓氏之人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：耳痛、心疾、感寒、肾病、胃冷水泻、痼冷之病、血病。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：不利、有阴险、有失困讼、失陷。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓：宜北向之穴、近不旁之墓、不利葬。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：羽音、点水傍之姓氏、行位一六。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：一、六。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：北方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：咸酸。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：黑。</span>
  </p>
  <a name=c52></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218811>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">离</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">三。火。离为火、火山旅、火风鼎、火水未济、山水蒙、风水涣、天水讼、天火同人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：日、电、虹、霓、霞。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：南方、干亢之地、窑、灶、炉冶之所、刚爆厥地、其地面阳。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：中女、文人、大腹、目疾人、介胄之士。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事；文画之所、聪明才学、相见虚心、书事。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：目、心、上焦。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：夏五月、午火年月日时、三二七日。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：雉、龟、鳖、蟹、螺、蚌。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：南舍之居、阳明之宅、明窗、虚室。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：安稳、平善、冬占不安、克体主火灾。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：雉肉、煎炒、烧炙之物、干脯之类、热肉。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：不成、利中女之婚、夏占可成、冬占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：易生、产中女、科占有损、坐宜向南。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：有名、宜南方之职、文官之任、宜炉冶坑场之职。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：有财、宜南方求、有文书之财、冬占有失。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：可成、宜有文书之交易。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：可以谋望、宜文书之事。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行；可行、宜动向南方、就文书之行、冬占不宜行、不宜行舟。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：可见南方人、冬占不顺、秋见文书考察才士。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：易散、文书动、辞讼明辩。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：目疾、心疾、上焦、热病、夏占伏暑、时疫。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓：南方之墓、无树木之所阳穴、夏占出文人、冬占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：徵音、带火及立人傍姓氏、位行三二七。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：三、二、七。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：南。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：赤、紫、红。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：苦。</span>
  </p>
  <a name=c53></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218812>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">艮</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">七。土。艮为山、山火贲、山天大畜、山泽损、火泽睽、天泽履、风泽中孚、风山渐。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：云、雾、山岚。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：山、径路、近山城、丘陵、坟墓、东北方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：少男、闲人、山中人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：阻隔、宁静、进退不决、反背、止住、不见。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：手指、骨、鼻、背。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：冬春之月、十二月、丑寅年月日时、七五十月日。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：土石、瓜果、黄物、土中之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物：虎、狗、鼠、百兽、黔喙之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：安稳、诸事有阻、家人不睦、春占不安。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：东北方之居、山居、近石、近路之宅。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：土中物味、诸兽之肉、墓畔竹笋之属、野味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：阻隔难成、成亦迟、利少男童之婚、春占不利、宜对乡里婚。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：阻隔无名、宜东北方之任、宜上官山城之职。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：求财阻隔、宜山林中取财、春占不利、有损失。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：难产、有险阻之厄、宜向东北、春占有损。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：难成、有山林田土之交易、春占有失。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：阻隔难成、进退不决。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：不宜远行、有阻、宜近陆行。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：不可见、有阻、宜见山林之人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：手指之疾、脾胃之疾。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：贵人阻滞、未讼未解、牵连不决。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓：东北之穴、山中之穴、春占不利、近路边有石。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：宫音、带土字傍姓氏、行位五七十。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：五、七、十。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：东北方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：黄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：甘。</span>
  </p>
  <a name=c54></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218813>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">兑</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">二。金。兑为泽、泽水困、泽地萃、泽山咸、水山蹇、地山谦、雷山小过、雷泽归妹。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时：雨泽、新月、星。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：泽、水际、缺池、废井、山崩坡裂之地、其地为刚卤。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：少女、妾、歌妓、伶人、译人、巫师。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事：喜悦、口舌、谗毁、谤说、饮食。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：舌、口、肺、痰、涎。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时序：秋八月、酉年月日时、金年月日、二四九数月。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">静物：金刃、金类、乐器、缺器、废物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物：羊、泽中之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">屋舍：西向之居、近泽之居、败墙壁宅、户有损。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">家宅：不安、防口舌、秋占喜悦、夏占家宅有祸。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：不成、秋占可成、又喜、主成婚之吉、利婚少女、夏占不利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：不利、恐有损胎、或利生女、夏占不利、生宜向西。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名：难成、因名有损、利西之任、宜刑官、武职、伶官、译官。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求利：无利有损、财利主口舌、秋占有财喜、夏占破财。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行：不宜远行、防口舌、或损失、宜西行、秋占宜有利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易：不利、防口舌、有争竞、夏占不利、秋占有交易之财喜。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谋望：难成、谋中有损、秋占有喜、夏占不遂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谒见：利行西方见、有咒诅。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：口舌咽喉之疾、气逆喘疾、饮食不冫食。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坟墓：宜西向、防穴中有水、近泽之墓、夏占不宜、或葬废穴。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官讼：争论不已、曲直未决、因公有损、防刑、秋占为体得理胜讼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">姓字：商音、带口带金字傍姓氏、行位四二九。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数目：四、二、九。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">方道：西方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色：白。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：辛辣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">右万物之象，庶事之多，不止于此，占者宜各以其类而推之耳。</span>
  </p>
  <a name=c55></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218814>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用生克篇之一</span>
    </a>
  </h1>
  <a name=c56></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218815>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">心易占卜玄机</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天下之事有吉凶、托占以明其机。天下之理无形迹，假象以显其义。故乾有健之理，于马之类见之。然卦象一定不易之理，而无变通之道，不可也。易者，变易而已矣。至如今日观梅复得革兆，有女子折花，异日果有女子折花，可乎？今日算得姤兆，断为马所践，异日果为马所践毁，可乎？且兑之属非止女子，乾之属非止马。谓他人折花有毁，皆有切验之真，是必有属矣。嗟呼！占卜之道要变通。得变通之道者，在乎心易之妙耳。</span>
  </p>
  <a name=c57></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218816>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占卜总诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大抵占卜之法，成卦之后，先看《周易》爻辞，以断吉凶。如乾卦初九：“潜龙勿用”。则诸事未可为，宜隐伏之类。九二：“见龙在田，利见大人”。则宜谒见贵人之类。余皆仿此。次看卦之体用，以论五行生克。体用即动静之说，体为主，用为事应。用生体及比和则吉，体生用及克体则不吉。又次看克应。如闻吉说，见吉兆，则吉；闻凶说，见凶兆，则凶。见圆物，事易成；见缺物，事终毁之类。复验已身之动静。坐则事应迟，行则事应速；走则愈速，卧则愈迟之类。数者既备，可尽占卜之道。必须以易卦为主，克应次之。俱吉则大吉，俱凶则大凶。有凶有吉，则详审卦辞及克应体用之类，以断吉凶也。要在圆，机不可执。</span>
  </p>
  <a name=c58></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218817>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占卜论理诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">数说当也，必以理论之而后备。苟论数而不论理，则其一见，而不验矣。且如饮食得震，则震为龙，以理论之，龙非可取，当取鲤鱼之类代之。又以天时之得震，当有雷声。若冬占得震，以理论之，冬月岂有雷声，当有风撼震动之类。既知以上数条之诀，复明乎理，则占卜之道无余蕴矣。</span>
  </p>
  <a name=c59></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218818>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">先天后天论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">先天卦断吉凶，止以卦论，不甚用《易》之爻辞，后天则用爻辞，兼用卦辞，何也？盖先天者未得卦先得数，是未有《易》书，先有《易》理，辞前之《易》也，故不必用《易》书之辞，专以卦断。后天则以先得卦，必用卦画，辞后之《易》也，故用爻之辞兼《易》辞以断之也。又后天起卦，与先天不同，其数不一。今人多以坎一、坤二、震三、巽四、中五、乾六、兑七、艮八、离九，此数为用。盖圣人作《易》画卦，始以太极、两仪、四象、八卦加一倍数，自成乾一、兑二、离三、震四、巽五、中五、坎六、艮七、坤八，故占卜起卦，合以此数为用。又今人起后天卦，多不加时，得此一卦，止此一爻动，更无移易变通之道，故后天起卦定爻，必加时而后可。又先天之卦，定时应之期则取之卦气。如乾、兑，则应如庚辛及五金之日，或乾为戌亥之日时，兑为酉日时。如震巽当应于甲乙及五木之日，或震取卯，巽取辰之类。后天则以卦数加时数，总之而分行卧坐立之迟速，以为事应之期。卦数时类，应近而不能决诸远者，必合先后之卦数取决可也。又凡占卦中决断吉凶，其理洞见，止于全卦体用生克之理及参《易》辞，斯可也。今日以后天卦却于六十甲子之日，取其时方之魁、破、败、亡、灭迹等，以助决断。盖历象选时，并于《周易》不相涉，不可用也。</span>
  </p>
  <a name=c60></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218819>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">卦断遗论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占卜决断，固以体用为主，然有不拘体用者。如起例中“西林寺额”，得山地剥，体用互变俱比和，则为吉，而仍不吉，何也？盖寺者，纯阳人居之地，而群阴剥阳之义显然也。此理甚明，不必拘体用也。又若有人问“今日动静如何”，得地风升，初爻动，用克体卦，俱无饮食矣，而亦有人相请，虽饮食不丰而终有请，何也？此人当时，必有当日之应，又有如何二字带口，为重兑之义。又有用不生体，互变生之而吉者，若“少年有喜色”，占得山火贲是也。又有用不生体，互变俱克之而凶者，如“牛哀鸣占”，得地水师是也。盖少年有喜色，占则略知其有喜，而《易》辞又有“束帛戋戋”之吉，是两者俱吉，互变俱生，愈见其吉矣。虽用不生体，不吉，不为其害也。“牛鸣之哀”，则略知其有凶，而《易》爻复有“舆尸”之凶，互变俱克，愈见其凶，虽用爻不克，不能掩其凶也。盖用《易》断卦，当用理胜处验之，不可拘于执一也。</span>
  </p>
  <a name=c61></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218820>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦心易体用诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">心易之数，得之者众；体用之诀，有之者罕。余幼读《易》书，长参数学，始得心易卦数。初见起例，仅知占其吉凶，如以蠡测海，茫然无涯。后得智人，见授体用心易之诀，而后占事之诀，疑始有定。据验则验，如由基射箭，百发百中。其要在于分体用之卦，察其五行生克之理，而明乎吉凶悔吝之机也。于是易数之妙始见，而易道之卦义备矣。乃世有真实人，罕遇之耳。得此者，幸深秘之。</span>
  </p>
  <a name=c62></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218821>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用总诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">体用云者，如易卦具卜筮之道，则易卦为体，以卜筮用之。此所谓体用者，借体用二字以寓动静之卦，以分主客之兆，以为占例之准则也。大抵体用之说，体卦为主，用卦为事；互卦事之中间，刻应变卦为事之终应。体之卦气，宜盛不宜衰。盛者，如春震巽、秋乾兑、夏离、冬坎，四季之月坤艮是也。衰者，春坤艮、秋震巽、夏乾兑、冬离、四季之月坎是也。宜受他卦之生，不宜受他卦之克。他卦者，谓用、互、变也。生者，如乾兑金体，坤艮生之；坤艮土体，离火生之；离火体，震巽木生之。余皆仿此。克者，如金体火克，火体水克之类。体用之说，动静之机，八卦主宾，五行生克。体为己身之兆，用为应事之端。体宜受用卦之生，用宜见体卦之克。体盛则吉，体衰则凶。用克体固不宜，体生用亦非利。体党多而体势盛，用党多则体势衰。如卦体是金，而互变皆金，则是体之党多。如用卦是金，而互变皆金，则是用之党多。体生用为之泄气，如夏火逢土（亦泄气）。体用之间，比和则吉，互乃中间之应，变乃未后之期。故用吉变凶者，先吉后凶；用凶变吉者，先凶后吉。体克用，诸事吉；用克体，诸事凶。体生用有耗失之患，用生体有进益之喜；体用比和，则百事顺遂。又看全卦中有生体之卦，看是何卦：乾卦生体，则主公门中有喜益，或功名上有喜，或因官有财，或问讼得理，或有金宝之利，或老人上进财，或尊长惠送，或有官贵之喜。坤卦生体，主有田土之喜，或于田土进财，或得乡人之益，或得阴人之利，或有果谷之进，或有布帛之喜。震卦生体，则主山林之益，或因山林得财，或进东方之财，或因动中有喜，或木货交易之利，或因草木姓氏人称心。巽卦生体，亦主山林之益，或因山林得财，或于东南得财，或因草木人而进利，或以茶果得利，或茶果菜蔬馈送之喜。坎卦生体，有北方之喜，或受北方之财，或因水边人进，或因点水称心，或因鱼盐酒货文书交易之利，或有馈送鱼盐酒之喜。离卦生体，主有南方之财，或有文书之喜，或有炉冶场之利，或因火姓为而得财。艮卦生体，有东北方之财，或山田之喜，或因山林田土获财，或宫音带土姓人之财，物当安稳，事有终始。兑卦生体，有西方之财，或喜悦事，或食物玉金货利之源，或商音之人、或市口之人欣逢，或主宾之乐，或朋友讲习之喜。又看卦中有克体之卦者，看是何卦：乾卦克体，主有公事之扰，或门户之扰，或有财宝之失，或于金谷有损，或有怒于尊长，或得罪于贵人。坤卦克体，主有田土之扰，或于田土有损，或有小人之害，或有阴人之侵，或失布帛之财，或丧谷粟之利。震卦克体，主有虚惊，常多恐惧，或身心不能安静，或家宅见妖灾，或草木姓氏之人相侵，或于山林有所失。巽卦克体，亦有草木姓人相害，或于山林上生忧，谋事乃东南方之人，处家忌阴人小口之厄。坎卦克体，主有险陷之事，或寇盗之忧，或失意于水边人，或生灾于酒后，或点水人相害，或北方人见殃。离卦克体，主文书之扰，或失火之惊，或有南方之忧，或火姓人相侵。艮卦克体，诸事多连，百谋中阻，或有山林田土之失，或带土人相侵，防东北方之祸害，或忧坟墓不当安稳。兑卦克体，不利西方，主口舌事之纷争，或带口姓人侵欺，或有毁折之患，或因饮食而生忧愁。生克不逢，止随本卦而论之。</span>
  </p>
  <a name=c63></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218822>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用生克篇之二</span>
    </a>
  </h1>
  <a name=c64></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218823>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">天时占第一</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占天时，不分体用，全观诸卦，详推五行。离多主晴，坎多主雨；坤乃阴晦，乾多晴明。震多则春夏雷轰，巽多则四时风烈。艮多则久雨必晴，兑多则不雨亦阴。夏占离多而无坎，则亢旱炎炎；冬占坎多而无离，则雨雪飘飘。全观诸卦者，谓互变卦。五行谓离属火，主晴；坎为水，主雨。坤为地气，主阴；乾为天，主晴明。震为雷，巽为风。秋冬震多无制，亦有非常之雷；有巽佐之，则为风撼震动之应。艮为山云之气，若雨久，得艮则当止，艮者止也，亦土克水之义。兑为泽，不雨亦阴。夫以造化之辨固难测，理数之妙亦可凭。是以乾象乎天，四时晴明；坤体乎地，一气惨然。乾坤两同，晴雨时变；坤艮两并，阴晦不常。卜数有阳有阴，卦象有奇有偶。阴雨阳晴，奇偶暗重。坤为老阴之极，而久晴必雨；阴气汇散，而久雨必晴。若逢重坎重离，亦曰时晴时雨。坎为水必雨，离为火必晴。乾兑之金，秋高明清，冬雪凛冽。坤艮之土，春雨泽，夏炎蒸。《易》曰：“云从龙，风从虎”。又曰：“艮为云，巽为风”。艮巽重逢，风云际会，飞沙走石，蔽日藏山，不以四时，不必二用。坎在艮上，布雾兴云；若在兑上，凝霜作雪。乾兑为霜雪霰雹，离火为日电虹霓。离为电，震为雷，重会而雷电俱作；坎为雨，巽为风，相逢则风雨骤兴。震卦重逢，雷惊百里；坎爻迭见，润泽九垓。故卦体之两逢，亦爻象之总断。地天泰，水天需，昏蒙之象；天地否，水地比，黑暗之形。八纯离，夏必旱，四季皆晴；八纯坎，冬必寒，四时多雨。久雨不晴，逢艮则止；久晴不雨，得此亦然。又若水火既济，火水未济，四时不测风云；风泽中孚，泽风大过，三冬必然雨雪。水山蹇，山水蒙，百步必须执盖；地风升，风地观，四时不可行船。离在艮上，暮雨朝晴；离互艮宫，暮晴朝雨。巽坎互离，虹霞乃见；巽离互坎，造化亦同。又须推测四时，不可执迷一理。震离为电为雷，应在夏天；乾兑为霜为雪，验于冬月。天地之理大矣哉，理数之妙至矣哉。得斯文者，当敬宝之。</span>
  </p>
  <a name=c65></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218824>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">人事占第二</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事之占，详观体用。体卦为主，用卦为宾。用克体不宜，体克用则吉。用生体有进益之喜，体生用有耗失之患。体用比和，谋为吉利。更详观互卦变卦，以断吉凶。复究盛衰，以明休咎。人事之占，则以全体用总章，同决吉凶。若有生体之卦，即看该章八卦中生体之卦有何吉。又看克体之卦有何凶，即看前章克体之卦。卦无生克，只断本卦。</span>
  </p>
  <a name=c66></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218825>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">家宅占第三</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占家宅，以体为主，用为家宅。体克用，则家宅多吉；用克体，则家宅多凶。体生用，多耗散，或防失盗之忧；用生体，多进益，或有馈送之喜。体用比和，家宅安稳。如有生体之卦，即以前章人事占断之。</span>
  </p>
  <a name=c67></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218826>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">屋舍占第四</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占屋舍，以体为主，用为屋舍。体克用，居之吉；用克体，居之凶。体克用，主资财冷退；用生体，则门户兴隆，体用比和，自然安稳。</span>
  </p>
  <a name=c68></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218827>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">婚姻占第五</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占婚姻，以体为主，用为婚姻。用生体，婚易成，或因婚有得；体生用，婚难成，或因婚有失。体克用可成，但成之迟；用克体不可成，成亦有害。体用比和，婚姻吉利。占婚姻，体为所占之家，用为所婚之家。体卦旺，则此家门户盛；用卦旺，则彼家资盛。生体，则得婚姻之财，或彼有相就之意；体生，则无嫁奁之资，或此去求婚方谐。若体用比和，则彼此相就，良配无疑。乾端正而长；坎邪淫黑色，嫉妒奢侈；艮色黄多巧；震美貌难犯；巽发少稀疏，丑陋心贪；离短赤色，性不常；坤貌丑，大腹而黄；兑高长，语话喜悦，白色。</span>
  </p>
  <a name=c69></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218828>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">生产占第六</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占生产，以体为母，用为生。体用俱宜乘旺，不宜乘衰；宜相生，不宜相克。体克用，不利于子；用克体，不利于母。体克用而用卦衰，则子难产；用克体而体卦衰，则母难保。用生体，易于母；体生用，易于生。体用比和，生育顺快。若欲辨其男女，当于前卦审之。阳卦阳爻多者则生男，阴卦阴爻多者则生女。阴阳卦爻相杂，则察所占左右人之奇偶以证之。如欲决其日辰，则以用卦之气数参决之。日期，用卦之气数者，即看何为用卦，于八卦时序之类决之。</span>
  </p>
  <a name=c70></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218829>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">饮食占第七</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占饮食，以体为主，用为饮食。用生体，饮食必丰，体生用，饮食难就。体克用，则饮食有阻；用克体，饮食必无。体用比和，饮食丰足。又卦中有坎，则有酒；有兑，则有食；无坎无兑，则皆无。兑坎生身，酒肉醉饱。欲知所食何物，以饮食推之；欲知席上何人，以互卦人事推之。饮食人事类者，即前八卦内万物属类是也。</span>
  </p>
  <a name=c71></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218830>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">求谋占第八</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占求谋，以体为主，用为所谋之应。体克用，谋虽可成，但成迟；用克体，求谋不成，谋亦有害。用生体，不谋而成；体生用，则多谋少遂。体用比和，求谋称意。</span>
  </p>
  <a name=c72></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218831>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">求名占第九</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占求名，以体为主，用为名。体克用，名可成，但成迟；用克体，名不可成。体生用，名不可就，或因名有丧；用生体，名易成，或因名有得。体用比和，功名称意。欲知名成之日，生体之卦气详之。欲知职任之处，变卦之方道决之。若无克体之卦，则名易就，止看卦体时序之类，以定日期。若在任占卜，最忌见克体之卦。如卦有克体者，即居官见祸，轻则上责罚，重则削官退职。其日期克体之卦气者，于八卦万物所属时序类中断之。</span>
  </p>
  <a name=c73></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218832>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">求财占第十</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占求财，以体为主，以用为财。体克用有财，用克体无财。体生用，则有损耗之忧；用生体，则有进益之喜。体用比和，财利快意。欲知得财之日，生体之卦气定之；欲知破财之日，克体之卦气定之。又若卦中有体克用之卦，及生体之卦，则有财。此卦气即见财之日。若卦中有克体之卦，及体生用之卦，即破财。此卦气即破财之日。</span>
  </p>
  <a name=c74></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218833>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">交易占第十一</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占交易，以体为主，用为交易之应。体克用，交易成迟；用克体，不成。体生用难成，或因交易有失；用生体即成，成必有财。体用比和，交易易成。</span>
  </p>
  <a name=c75></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218834>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">出行占第十二</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占出行，以体为主，用为所行之应。体克用可行，所至多得意；用克体，出则有祸，体生用，出行有破耗之失；用生体，有意外之财。体用比和，出行顺利。又凡出行，体宜乘旺，诸卦宜生体。体卦乾震多主动，坤艮多主不动。巽宜舟行，离宜陆行。坎防失脱，兑主纷争之应也。</span>
  </p>
  <a name=c76></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218835>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">行人占第十三</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占行人，以体为主，用为行人。体克用，行人归迟；用克体，行人不归。体生用，行人未归；用生体，行人即归。体用比和，归期不日矣。又以用卦为行人之盈旺，逢生，在外顺快；逢衰受克，在外灾殃。震多不宁，艮多有阻，坎有险难，兑主纷争之应。</span>
  </p>
  <a name=c77></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218836>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">谒见占第十四</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占谒见，以体为主，用为所见之人。体克用可见，用克体不可见。体生用难见，见之而无益；用生体可见，见之且有得。体用比和，欢然相见。</span>
  </p>
  <a name=c78></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218837>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">失物占第十五</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占失物，以体为主，用为失物。体克用，可寻，迟得；用克体，不可寻。体生用，物难见；用生体，物易寻。体用比和，物不失矣。又以变卦为失物所在。如变是乾，则见于西北，或公廨楼阁之所，或金石之旁，或圆器之中，或高亢之地。变卦是坤，则觅于西南方，或田野之所，或仓廪之处，或稼穑之处，或土窖穴藏之所，或瓦器方器之中。震则寻于东方，或山林之所，或丛棘之内、钟鼓之旁，或闹市之地，或大途之所。巽则寻于东南方，或山林之所，或寺观之旁，或菜蔬之园，或舟车之间，或木器之内。坎则寻于北方，多藏于水边，或渠井沟溪之处，或酒醋之边，或鱼盐之地。离则寻于南方，或庖厨之间，或在明窗，或遗虚室，或在文书之侧，或在烟火之地。艮在东北方寻之，或山林之内，或近路边，或岩石旁，或藏土穴内。兑则寻于西方，或居泽畔，或败垣壁之内，或废井缺沼之中。</span>
  </p>
  <a name=c79></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218838>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">疾病占第十六</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占疾病，以体为病人，用为病症。体卦宜旺不宜衰。体宜逢生，不宜见克。用宜生体，不宜克体。是故体克用，病易安；体生用，病难愈。体克用者，勿药有喜；用克体者，虽药无功。若体逢克而乘旺，犹为庶几。体遇克而更衰，断无存日。欲知生中有救，生体之卦存焉。体生用者，迁延难好；用生体者，即愈。体用比和，疾病易安。若究和平之日，生体之卦决之。若详危厄之期，克体之卦定之。若论医药之属，当审生体之卦。如离卦生体，宜服热药；坎卦生体，宜服冷药。如艮温补，乾兑凉药是已。又有信鬼神之说，虽非《易》道，然不可谓《易》道之不该。姑以理推之。如卦有克体者，即可测其鬼神。乾卦克体，主有西北之神，或兵刀之鬼，或天行时气，或乘正之邪神。坤则西南之神，或旷野之鬼，或连亲之鬼，或水土里社之神，或犯方隅，或无主之祟。震则东方之神，或木下之神，或妖怪百端，或影响时见。巽则东方之神，或自缢戕生，或枷锁致命。坎则北方之鬼，或水旁之刘，或没溺而亡，或血疾之鬼。离则南方之鬼，或猛勇之神，或犯灶司，或得衍于香火，或焚烧之鬼，或遇热病而亡。艮则东北之神，或是山林之祟，或山魈木客，或土怪三精。兑则西方之神，或阵亡之鬼，或废疾之鬼，或刎颈戕生之鬼。卦中无克体之卦者，不必论之。又问：“乾上坤下，占病如何断？”尧夫曰：“乾上坤下，第一爻动，便是生体之义。变为震木，互见巽艮，俱是生成之义，是谓不灾，逢生之日即愈。”又曰：“第二爻动，如何？”曰：“是变为坎水，乃泄体败金之义。金入水乡，互见巽离，乃为风火扇炉，俱为克体之义。更看占时外应如何，即为焚尸之象，断之死无疑矣。以春夏秋冬四季推之，更见详理。”又曰：“第三爻动，坤变艮土，俱在生体之义，不问互卦，亦断其吉无疑。”又曰：“第四爻动，乾变巽木，金木俱有克体之义，互吉亦凶。木有扛尸之义，金为砖礅之推。是理必定之推，是埋尸必定之理。”又曰：“第五爻动，乾变离，反能生体，互变俱生体，是其吉无疑。更有吉兆则愈吉。凶则迟而忍死，其断明矣。”又曰：“第六爻动，乾变兑，则能泄体。互见巽艮，一凶一吉，其病非死必危。亦宜看兆吉凶，吉则言吉，凶则方凶。此断甚明。”余卦皆仿此断，则心易无不验矣。</span>
  </p>
  <a name=c80></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218839>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">官讼占第十七</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占官讼，以体为主，用为对辞之人与官讼之应。体卦宜旺，用卦宜衰。体宜用生，不宜生用；用宜生体，不宜克体。是故体克用者，己胜人；用克体者，人胜己。体生用，非为失理，或因官有所丧；用生体，不止得理，或因讼有所得。体用比和，官讼最吉，非但扶持之力，必有主和之义。</span>
  </p>
  <a name=c81></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218840>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">坟墓占第十八</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占坟墓，以体为主，用为坟墓，体克用，葬之吉；用克体，葬之凶。体生用，葬之主令退；用生体，葬之主兴隆，有荫益后嗣。体用比和，乃为吉地；大宜安葬，葬之吉昌。右用体之诀，始以十八章占例，以示后学之法则。然庶务之多，岂止十八占而已乎？乃大事之切要者，占者以类而推之可也。</span>
  </p>
  <a name=c82></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218841>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用生克篇之三</span>
    </a>
  </h1>
  <a name=c83></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218842>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">三要灵应篇</span>
    </a>
  </h2>
  <a name=c84></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218843>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">序</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">夫《易》者，性理之学也。性理具于人心者，当其方寸湛然，灵台皎洁，无一毫之干，无一尘之累。斯时也，性理具在，而易存吾心浑然。是《易》也，其先天之易也。及夫虑端一起，事根忽萌，物之著心，如云之蔽空，如尘之蒙镜。斯时也，汩没茫昧，而向之《易》存吾心者，泯焉尔。故三要之妙，在于运耳、目、心三者之虚灵，俾应于事物也。耳之聪，目之明，吾心实总乎聪明。盖事根于心，心该乎事。然事之未萌也，虽鬼神莫测其端，而吉凶祸福，无门可入。故先师曰：“思虑未动，鬼神不知，不由乎我，更由乎谁？”若夫事萌于心矣，鬼神知之矣。吉凶悔吝有其数，然吾预之知，何道与？必曰：求诸吾心易而已矣。于是寂然不动，静虑诚存，观变玩占，运乎三要。必使视之不见者，吾见之；听之不闻者，吾闻之。如形之见示，如音之见告。吾之璟然鉴之，则《易》之为卜筮之道，而《易》在吾心矣。三要不虚，而灵应之妙斯得也。是道也，寓至精至神之理，百姓日用而不知，安得圆机通三昧者，与之论此。先师刘先生，江夏人，号湛然子，得之王屋山人高处士云岩。宝庆四年，仲夏既望，清灵子朱虚拜首序。</span>
  </p>
  <a name=c85></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218844>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">三要灵应篇</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>三要者，运耳、目、心三者之要也。灵应者，灵妙而应验也。夫耳之于听、目之于视、心之于思，三者为人一身之要，而万物之理不出于视听之外。占决之际，寂闻澄虑，静观万物，而听其音，知吉凶，见其形之善恶，察其理之祸福，皆可为占卜之验。如谷之应声，如影之随形，灼然可见也。其理出于《周易》“远取诸物，近取诸身”之法。是编则出于先贤先师，采世俗之语为例。用之者鬼谷子、严君平、东方朔、诸葛孔明、郭璞、管辂、李淳风、袁天罡、皇甫真人、麻衣仙、陈希夷，继而得者邵康节、邵伯温、刘伯温、牛思晦、牛思继、高处士、刘湛然、富寿子、泰然子、朱清灵子。其年代相传不一，而不知其姓名者不与焉。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">原夫天高地厚，万物散殊，阴浊阳清，五气顺布，祸福莫逃乎数，吉凶皆有其机。人为万物之灵，心乃一身之主。目寓而为形于色，耳得而为音于声。三要总之，万物备矣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃天地万物之灵，而耳、目、心三者之要，故曰三要。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">是以遇吉兆而顺有吉，见凶兆而不免乎凶。物之圆者事成，缺者事败。此理断然，夫复何疑。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃占物克应，见吉则吉，遇凶则凶。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">是以云开见日，事必争辉，烟雾障空，物当失色，忽颠风而飘荡，遇震雷而虚惊。月忽当面，宜近清光；雨乍沾衣，可蒙恩泽。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃仰观天文，以验人事。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">重山为阻隔之际，重泽为浸润之深。水流而事通，土积而事滞。石乃坚心始得，沙乃放手即开。浪激主波涛之惊，坡崩主田土之失。旱沼之旁，心力俱竭；枯林之下，相貌皆衰。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃俯察地理，以验人事。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">适逢人口之来，实为事体之应。故荣宦显官，宜见其贵；富商大贾，可问乎财。儿童哭泣，忧子孙；吏卒叫嚣，忌官讼。二男二女，重婚之义；一僧一道，独处之端。妇人笑语，则阴喜相逢；女子牵连，则阴私见累。匠氏主门庭改换，宰夫则骨肉分离。逢猎者，得野外之财；见渔者，有水边之利。见妊妇，则事萌于内；遇瞽者，则虑根于心。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃人品之应，以验人事。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">至于摇手而莫为，或掉头而不肯。拭目而喷嚏者，方泣；搔首而弹垢者，有忧。足动者有行，交臂者有失。屈指者多阻节，嘘气者主悲忧。舌出掉者有是非，背相向者防闪赚。偶攘臂者争夺乃得；偶下膝者屈抑而求。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃近取诸身之应。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若逢童子授书，有词讼之端；主翁笞仆，防责罚之事。讲论经史，事体徒间于虚说；语歌词曲，谋为转见于悠扬。见赌博，主争斗之财；遇题写，主文书之事。偶携物者，受人提携；适挽手者，遇事牵连。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃人事之应。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">及夫舟楫在水，凭其接引而来；车马登途，藉之载而往。张弓挟矢者，必领荐；有箭无弓者，未可试。持刀执刃，须求快利之方；披甲操戈，可断刚强之柄。缫丝者，事务繁冗；围棋者，眼目众多。妆花刻果，终非结实之因；画影描形，皆为妆点之类。络绎将成，可以问职；笔墨俱在，可以求文。偶倾盖者，主退权；忽临镜者，主赴诏。抱贵器者，有非常之用；负大木者，有不小之财。升斗，宜量料而前；尺剪，可裁度以用。见蹴昀，有人拨剔；开锁钥，遇事疏通。逢补器，终久难坚；值磨镜，再成始得。玩斧磨钢者，迟钝得意；快刀砍木者，利器伤财。裁衣服者，破后方成；造瓦器者，成后乃破。弈棋者，取之以计；张网者，摸之以空。或持斧锯恐有伤，或涤壶觞恐有饮。或挥扇者有相招之义，或污衣者防谋害之侵。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃器物之应，即远取诸物之义。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">虽云草木之无情，亦于卜筮而有应。故芝兰为物之瑞，松柏为寿之坚。遇椿桧，则岁久年深；遇苗菰，则朝生暮死，占产占病，得之即死之兆。枝叶飘零当萎谢，根核流落主牵连。奇葩端的虚花，嘉果可以结实。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃草木之应。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">至于飞走，最有祯瑞。故乌鸦报灾，喜虫报喜。鸿雁主朋友之信，蛇虺防毒谋之害。鼠啮衣，有小口之灾；雀噪檐，有远行之至。犬斗恐招盗贼，鸡斗主有喧争。牵羊者，喜庆将临；骑马者，出入皆利。猿猴升木，身心不安；鲤鱼出水，变化不凡。绳拴马，疾病难安；架险禽，困人未脱。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃禽兽之应。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">酒乃忘忧之物，药乃怯病之方，故酒樽忽破，乐极生悲；医师道逢，难中有救。藤萝之类堪依倚，虎豹之象可施威。耕田锄地者，事势必翻；破竹剖竿者，事势必顺。春花秋月，虽无实而有景；夏棉冬葛，虽有用而背时。凉，扇多主弃损；晴，伞渐逢闲废。泡影电光，虚幻难信，蛛丝蚕茧，巧计方成。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃杂见观物之应。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若见物形，可知字体，故石逢皮则破，人傍木为休。笠飘水畔，泣字分明；火入山林，焚形可见。三女有奸私之扰，三牛有奔走之忧。一木两火，荣耀之光；一水四鱼，鳏寡之象。人继牛倒防失脱。人言犬中忧狱囚。一斗入空门者斗争，两丝挂白木者乐事。一人立门，诸事有闪；两人夹木，所问必来。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃拆字之应。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">复指物名，以叶音义。如见鹿可以问“禄”，见峰可以言“封”。犁主分离，桃主逃走。见李，问讼则得理；逢冠，问名则得官。鞋为百事和“谐”，盒则百事可“合”。难以详备，在于变通。右即物叶音之义。及夫在我之身，实为彼事之应。故我心忧者，彼事亦忧；我心乐者，彼事亦乐。我适闲，彼当从容；我值忙，彼当窘迫。右即自已之应，近取诸身之应。欲究观人之道，须详系《易》之辞。“将叛者其辞惭，将疑者其辞支。吉人之辞寡，躁人之辞多。诬善之人，其辞游；失其守者，其辞屈。”</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右乃一动一静之应，近取诸身之义。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">既推五行，须详八卦。卦吉而应吉终吉，卦凶而应凶终凶。卦应一吉一凶，事体半凶半吉。明生克之理，察动静之机，事事相关，物物相合。此五行八卦及克应动静之理。活法更存乎方寸，玄机又在于师传。纵万象之纷纭，惟一理而融贯。务要相机而发，须要临事而详。右言占卜之理，在人变通之妙。嗟夫！方朔覆射，知事物之隐微；诸葛马前，定吉凶于顷刻。皇甫坐端之妙，淳风鸟觉之占。虽所用之有殊。诚此理之无异。右言三要灵应妙处。可以契鬼神之妙，可以会蓍龟之灵。然人非三世，莫能造其玄；心非七窍，莫能悟其妙。故得其说者宜秘，非其人者莫传。轻泄天机，重遭阴谴。造之深，可以入道；用之久，可以通神。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右言灵应之妙，不可轻传妄授，宜秘之重之，以重斯道也。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <a name=c86></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218845>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用生克篇之四</span>
    </a>
  </h1>
  <a name=c87></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218846>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">十应奥论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">十应固出于三要，而妙乎三要。但以耳目所得，如见吉兆，而终须吉；若逢凶谶，不免乎凶，理之自然也。然以此而遇吉凶，亦有未然者也。黄金白银，为世之宝，三要得之必以为祥；十应之愉，遇金有不吉者。利刃锐兵，世谓凶器，三要得之，亦以为凶；十应之说，遇兵刃反有吉者。又若占产见少男，三要得之，得为生子之喜；十应见少男则凶。占病遇棺，三要占之必死，十应以为有生意。例多若此，是占卜者不可无失应也。</span>
  </p>
  <a name=c88></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218847>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">十应目论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">十应并以体卦为主，诸用卦为用。每以内分外体，用卦参看为妙。内卦不吉，而外卦又吉，可以解其不吉；内卦吉，而外卦不吉，反破其吉，若内外卦全吉，则断然吉；全凶，则断然凶。其内吉外凶，内凶外吉，又须详理以断吉凶，不胶柱鼓瑟也。外卦十应之目，则有天时、地理及写字等。其十一类之应，并以体卦为主，而随其所应，以为用也。</span>
  </p>
  <a name=c89></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218848>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明天时之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">如天无云翳，明朗之际，为乾之时，乾兑为体，则比和而吉；坎为体，则逢生而大吉；坤艮为体，则泄气；震巽为体，则见克而不吉矣。晴霁日中，为离之时，坤艮为体，则吉。雨雪为坎之时，震巽为体则吉，离为体则不吉。雷风为震巽之时，离为体则吉，坤艮为体则不吉。此天时之应也。</span>
  </p>
  <a name=c90></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218849>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明地理之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">茂树秀竹，为震之地，离与震巽为体则吉，坤艮为体则凶。江湖河池，川泽溪涧，为坎之地，震巽与坎为体则吉，而离为体则凶。窑灶之地为离，坤艮并离为体则吉，而乾兑为体则不吉。岩穴之地为艮，乾兑与坤艮为体则吉，坎为体则不吉。此地理之应也。</span>
  </p>
  <a name=c91></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218850>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明人事之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人事有论卦象五行者，有不论卦象五行者。论卦象，则老人属乾，老妇属坤，艮为少男，兑为少女之类。五行生克比和之理，与前天时地理之卦同断。其不分卦象五行者，则以人事之纷，了见杂出，有吉有凶，此应则随其吉凶而为之兆也。又观其事，则亦为某人。此人事之应也。</span>
  </p>
  <a name=c92></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218851>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明时令之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">时令不必论卦象，但详其令，月日值之。五行衰旺之气，旺者如寅卯月日则木旺；巳午之月日火旺；申酉之月日金旺；亥子之月日水旺；辰戌丑未之月日土旺。衰者如木旺则土衰，土旺则水衰，水旺则火衰，火旺则金衰，金旺则木衰。是故生体之卦气，宜值时之旺气，不宜衰气。如克体卦气，则宜乘衰，此时令之应也。</span>
  </p>
  <a name=c93></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218852>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明方卦之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">即分方之卦，如离南坎北，震东兑西，巽东南，艮东北，坤西南类也。论吉凶者，看来占之人在何方位，而以用卦参详。如坎为用卦，宜在坎与震巽之位，在离则不吉。离为用卦，宜在离与坤艮之位，在乾兑之位则不吉矣。盖宜在本卦之方，为用卦生之方，不宜受用卦克也。若夫气在之卦，所在之方，又当审之。如水从坎来，为坎卦气旺；水从坤艮来，则坎之卦气衰。火从南来，为离卦气旺；如从北来，则离卦之气衰。余皆仿此。大抵本卦之方，生为旺，受克为衰，宜以体卦参之。生体卦气，宜受旺方；克体卦气，宜受衰方。此方卦之应也。又震巽之方，不论坤艮；坤艮之方，不论坎；坎方，不论离；离方，不论乾；乾兑之方，不论震巽，以其寓卦，受方卦之克也。</span>
  </p>
  <a name=c94></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218853>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明动物之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">动物有论卦象者，乾为马，坤为牛，震为龙，巽为鸡，坎为豕，离为雉，艮为狗，兑为羊。又螺蚌龟鳖，为离之象；鱼类为坎之属。此动物之卦，以体详与。又不论卦象五行者，如乌鸦报灾，灵鹊报喜；鸿雁主有书信，蛇虫防有毒害；鸡唱为家音，马嘶为动意。此动物之应也。</span>
  </p>
  <a name=c95></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218854>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明静物之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器物之类，有论卦象者，如水属坎，火属离，木之气属震巽，金之气属乾兑，土之气属坤艮，其体卦要参详。其不分卦象者，但观其器物之兆，如物之圆者事成，器之缺者事败。又详其器物是何物，如笔砚主文书之事，袍笏主官职之事；樽俎之具有宴集，枷锁之具防官灾。百端不一，审其物器。此静物之应也。</span>
  </p>
  <a name=c96></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218855>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明言语之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">闻人言语，不论卦象，但详其所言之事绪而占卜之。应闻吉语则吉，闻凶语则凶。若闻闹丛言语喧集，难以决断。若定人少之处，或言语可辨其事绪，则审其所言何事，心领而意会之。如说朝廷迁选，可以求名；论江湖州郡，主出行；言争讼之事，主官司；言喜庆之事，利婚姻。事绪不一，随所闻而依之。此言语之应也。</span>
  </p>
  <a name=c97></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218856>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明声音之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">耳所闻之声音而论卦象，则雷为震，风声为巽，雨声为坎，水声为坎。鼓拍槌柝之声，出于木者，皆属震巽；钟馨铃铙之声，出于金者，皆属乾兑。此声音之论卦象，若为体参详决之。如闻声有欢笑之声，主有喜；悲愁之声，主有忧；歌唱之声，主快乐；怒号之声，主争喧。至若物声，则鸦报灾，鹊声传喜。鸿雁之声主远信，鸡凫之声为佳音。此类推声音之应也。</span>
  </p>
  <a name=c98></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218857>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">复明五色之应</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五色不论卦象，但以所见之色推五行。青碧绿色属木，红紫赤色属火，白属金，黑属水，黄属土。外应之五行，详于内卦之体用。生克比和，吉凶可见。此五色之应也。</span>
  </p>
  <a name=c99></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218858>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">遗论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">万物卦数，本由于《易》。今观此书，止五行生克之理，十应三要之诀，例不同《易》，何也？盖未有《易》书，先有易理。《易》书作于四圣之后，易理著于四圣之先。人心皆有易理，则于《易》也占卜无非用卦，卦即《易》也。若得《易》卦爻，观其爻辞卦，以断吉凶悔吝，更为妙也，未尝不用《易》。又观寓物卦数，起例之篇，止用内卦，不用外卦，何也？盖泛泛人起卦之诀，十应为传授之诀，若观梅卦例曰：“今日观梅得革，知女折花有伤股。明日观梅得革，亦谓女子折花，可乎？”占牡丹例曰：“今日算牡丹为马践毁，异日算牡丹亦为马践，可乎？”是必明其理，又如地风升卦，无饮食之兆，而知有人相请，此要外应决之。</span>
  </p>
  <a name=c100></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218859>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占卜成卦，即画成三重，本卦、互卦、变卦也。使于本卦分体用。此一体一用也。以卦五行明生克比和之理，此一用卦最切。看互卦变卦，互变亦用也，此内之体用也。又次看应卦亦用也，此合内外之体用也。然则不止一体一用，所谓体一用百也。生克即分，体用则论吉凶。生体则吉，克体则凶，比和则吉，不必论矣。生体多者则愈吉，克体多者愈凶。然此卦生体，诸卦又克此卦者，颇减速其吉。此卦克体，诸卦又有克此卦者，稍解其穷。有生此卦者吉，有克此卦者凶，此体用之生克也。然卦之生克有不论体用者，如占天时，有震则有雷，有巽则有风，逢坎则有雨，逢离则晴，此一定之理。又有不然者，如主卦中乾兑多，则震无雷，巽亦无风。又必有此诀也，皆隐然外卦之意。如观梅有女折花，算牡丹有马践，地风升有饮食兆，此又非外应之兆不能决也。</span>
  </p>
  <a name=c101></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218860>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">心易寓物之用，以体为主。然人知一体一用之常，不知一体百用之变并体之变。全卦为内，内亦不只一用，而互变皆用也。三要、十应之卦，外卦也。外亦不一，无非用也。学寓物者，得体用以为至术，十应则罕有之。后则三要以为全术，且谓体用自体用，三要自三要，遂以体用决吉凶，以三要为吉凶之兆，孰知三要、十应体用之致。呜呼！体用不可无三要，十应不可无体用。体用、三要、十应理无间然也。如此者，是为心易之全术，而可以尽占卜之道也。又如乾兑多，则巽无风；坤艮多，则坎无雨，坎多则离不晴。盖以乾兑之金克震巽之木，坤艮之土克坎水，坎水克离火也。此又须通变而推验之。又若占饮食，有坎则有酒，有兑则有食；如遇坤艮，则坎亦无酒；离值，则兑亦无食。余皆可以类推。故举此二类，为心易生克之例耳。</span>
  </p>
  <a name=c102></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218861>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">衰旺论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">既明生克，当看旺衰。旺者，如春震巽木，夏离火，秋乾兑金，冬坎水，四季之月坤艮土是也。衰者，如春坤艮，夏乾兑，秋震巽，冬离，四季之月坎是也。凡占卜体卦宜盛旺，气旺而又逢生则吉，衰遇克则凶。若体衰而逢克，则其凶甚矣；体衰而有生体之卦，则衰稍解。大抵体之卦宜旺，生体之卦气亦宜旺，克体之卦气宜衰。此心易论衰旺之诀也。</span>
  </p>
  <a name=c103></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218862>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">内外论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占卜，体用为内，诸用卦为外卦，此占卜之例也。诸应卦与三要之应，与十应之应，必合内外卦而断之也。苟不知合内外卦为断，谓体用自体用，三要、十应自三要、十应，如此则鲜见其有验者。然十应罕有知者。如前奥论云，金银为世宝，三要为吉者，若震巽为体，则金克木反为不吉。兵刃为世凶，三要为凶者，若坎为体则金生水，反为不凶。占产见男子，谓有生子兆，设坎为体，少男为艮土，土克水，产反不吉。占病见棺必死，若遇离体，则木生火而反吉。似此之类，则内卦不可无外卦，外卦不可无内卦。占卜之精者，无非合内外之道也。</span>
  </p>
  <a name=c104></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218863>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">动静</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占决，虽明动静之机，然有理之常，有事之变。阳动而阴静，一动一静者，理之发；此静而彼动，一静百动者，事之变也。天下之事物，纷纷群动，我则以一静而待之。事物之动，各有其端，我则以一静而测。不动不占，不因事不占。占卜之际，察其群物之事。物动而凶者，兆吾卦之凶；物动而吉者，兆吾卦之吉。然于闹喧市廛之地，人物杂扰，群物满前，何事拈何物为吉。吾占卜之应此，又推乎理而合其事。盖于群动之中，或观其身临吾耳目之近者，或以先见者，或以群事分明者，或以吾之一念所在者，此发占之所用。若求名，则于群物之中，或遇官府，或有文书及袍笏仪卫之物，则为得官之应。若求财利，则遇巨商富贾，或有钱宝货财之物，则厥为获财之应。若占讼事，而忽逢笞杖枷锁之具，则讼终不吉。占病而不见蓑麻棺椁之物者，病当无恙。凡此，所谓事事相关，物物相应，是以验吾占卦之切要也。至若坐则应迟，行则应速，走则愈速，卧则愈迟，此则察其动之端也。吾心本静，人来求占，起念以应之，即动也。以此动而测彼动，于此之念而求彼之验，诚而神知之。知此者，可以知动静之机矣。</span>
  </p>
  <a name=c105></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218864>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">向背</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占卜求应，必须审其向背。向者为事物之应，相向而来；背者为事物之应，相背而去也。如鸦报灾，鸦飞适来，其灾将至；鸦飞而去，则灾已过去也。如鹊报喜，鹊飞适来，其喜将至；鹊飞已去，则喜已过去也。至于外应之卦皆然。其克体之卦，器物方来，其祸将至；去则祸散。其生体之卦，器物方来则吉，去则吉已过去矣。其他应卦皆然。此为占卦向背，至当之理也。</span>
  </p>
  <a name=c106></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218865>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">静占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡应占在静室，无所闻见，则无外卦，即不论外卦。但以全卦年月日值五行衰旺之气，以体用决之。</span>
  </p>
  <a name=c107></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218866>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用生克篇之五</span>
    </a>
  </h1>
  <a name=c108></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218867>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观物洞玄歌</span>
    </a>
  </h2>
  <p class=MsoNoSpacing style=text-indent:21.0pt>
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>洞玄歌者，洞达玄妙之说也。此歌多为占宅气而发。昔牛思晦尝入人家，知其吉凶先兆。是故家之兴衰，必有祯祥妖巷之谶，识者鉴之，不识者昧之。故此歌发其蕴奥，皆量之必然者，切勿以浅近目之也。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">世间万物无非数，理在其中遇。吉凶悔吝有其机，祸福可先知。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五行金木水火土，生然先为主。青黄赤黑白五行，辨察要分明。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人家吉凶休以见，只向玄中判。入门辨察见闻时，于此察兴衰。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若遇宅气如春意，家宅生和气。若然冷落似秋时，从此渐衰微。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">自然馨香如兰室，福至无虚日。鸡豚猫犬秽薰腥，贫病至相侵。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">男妆女饰皆齐整，此去门风盛。家人垢面与蓬头，定见有悲忧。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">鬼啼妇叹情怀悄，祸害道阴小。老人无故泣双垂，不见日愁悲。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若见门前墙壁缺，家道中消歇。溜漕水势向门流，财帛永难收。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">忽然屋上生奇草，益荫人家好。门户幽爽绝尘埃，必定出高才。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">偶悬破履当门户，必有奴欺主。长长破碎左边门，断不利家君。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">遮门临井桃花艳，内有风情染。屋前屋后有高桐，离别主人翁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">进边倘种高梨树，长有离乡土。祠堂神主忽焚香，火厄恐相招。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">檐前瓦片当门坠，诸事愁崩破。若施破碗坑厕中，从此见贫穷。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">白昼不宜灯在地，死者还相继。公然鼠向日中来，不日耗资财。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">牝鸡早晚鸣伊喔，阴盛家消索。中堂犬吠立而啼，人眷有灾厄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">清晨鹊叫连声继，远行人将至。蟒蛇偶尔入人家，人病见妖邪。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">雀群争逐当门盛，口舌纷纷定。偶然鹏鸟叫当门，人口有灾连。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">入门若见有群羊，家主病瘟黄。舟船若安在平地，虽稳成淹滞。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">他家树荫过墙来，多得横来财。阶前石砌多残折，成事多衰灭。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">入门茶果应声来，中馈主家财。三餐时候炊烟早，勤俭渐基好。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">连宵宿火不成时，人散与财离。千门万户难详备，理在吾心地。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">斯文引路发先天，深奥入玄玄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span class=MsoSubtleEmphasis>
      <span style=font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri>右洞玄歌与灵应，同出而小异。彼篇多为占卜而诀，盖占卜之际，随所出所见，以为克应之兆。此歌则不特为占卜之事，一时而入人家，有此事必有此理，盖多寓观察之术也。然有数端，人家可得儆戒而趋避之，或可转祸为福。偶不知所因而宥于数中，俾吾见之，则善恶不逃乎明鉴矣。</span>
      <span lang=EN-US>
        <o:p></o:p>
      </span>
    </span>
  </p>
  <a name=c109></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218868>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">起卦加数例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">寅年十二月初一日午时，有数家起造，俱在邻市之间，有三家以此年月日时求占于先生。若同一卦，则吉凶莫辨矣。先生以各姓而加数，遂断之而皆验。盖三家求占，有田姓者，有王姓者，有韩姓者。若寅年三数，十二与一，共十六，加王姓四画，得二十数，除二八十六，得四，震为上卦。又加午时七数，总二十七数，除三八二十四，得三，离为下卦。二十七中除四六二十四，零三，为动爻，得丰变震，互见兑巽。其田姓加以田字六画，得水风井变升，互见闻兑。其韩姓加入二十一画之数，得益变中孚，互见艮坤。乃以各家之卦断之也。不特起屋之年月日时加姓也，凡冠婚及葬事，皆须加姓。然冠葬则加一姓可矣；若婚姻则男女大事，必加二姓方可。极北之人无姓，亦必有名，不辨其字，则数其声音。又无名，则随所寓也。</span>
  </p>
  <a name=c110></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218869>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">屋宅之占诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">寅年十二月初一日午时起屋者，其家田姓，其占水风井变地风升，互见离兑。巽木为体，用卦坎水生之。虽兑金克木，然得离火，火虽无气，终是制金。然有兑金，酉年月日亦当有损失之忧。亥子水年月日当有进益，或得水边之财，坎生体卦也。寅卯年当大快意，比和之气也。但家中必多口舌之聒，亦为兑也。木体近春，喜逢坎水，此居必然发旺。二十九后，此屋当毁。盖二十九年者，全卦六卦之成数也。若非有兑在中，虽再见二十九年，屋当无恙也。同时王姓之家起造，得雷火丰变震，互见兑巽。震木为体，离为用卦。兑为体之互，克体亦切，虽得离火制兑金，亦不纯美。用火泄体之气，破耗资财，每遇火年月日，主见此事；或因妇人而有损失，家中亦多女子是非。亥子寅卯之年月，却主进益钱财。盖震木为体，虽不见坎，终是利水年。生体之气不见，震巽亦逢寅卯，为体卦得局之时也。凡有震为巽，此居寅卯与木之气运年月，必大得意。亦主得长子之力，变重震也。二十二年后，为火所焚。韩姓之居，得益变中孚，互见艮坤，变兑克体，此居必有官讼，见于酉年月。申酉年连见病患。所喜用卦，其震与巽体比和，当见于寅卯年月。三十一年后，遇申酉年此居当毁。若非有兑，或有一坎，再见三十一年，此居亦无恙也。</span>
  </p>
  <a name=c111></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218870>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">器物占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大抵占器物，并不喜见兑卦，盖兑为毁折也。若坎为体，则见兑无伤。乾卦为体，亦无害。其余卦体，逢兑不久即破。木之器物，或震巽为体，见兑为用，必不禁耐用矣。破器之日，必申酉与卜年月日也。又畜养之物亦不宜乾兑克体。种植之物，乾兑克体必不成；即成亦被斧斤之厄。种植之物宜见坎也。又凡见器物，欲知其成毁，亦看卦体。无克者久长，体逢克者则不久。视其器物之气数可久者，以全卦之年数断之；不可久者，以月数断之；至速者，以日数断之也。</span>
  </p>
  <a name=c112></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218871>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">断占总诀篇之一</span>
    </a>
  </h1>
  <a name=c113></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218872>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观梅数诀</span>
    </a>
  </h2>
  <a name=c114></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218873>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">序</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">嗟乎！《易》岂易言哉！盖《易》之为书，至精微，至玄妙。然数者，不外乎《易》理也。有先天后天之殊，有叶音取音之辨。明忧虞得失之机，取互变迟速之应。数有前定，祸福难测，《易》理灼然可察。予求得先天、玄黄、灵应诸篇，外采《易》辞，曰观梅数诀，列图明五行生克衰旺之理，分例指示避凶趋吉之道，后学君子幸鉴焉。《易》辞曰：“易有太极，是生两仪，两仪生四象，四象生八卦，八卦生万物”，邵子曰：“一分为二，二分为四，四分为八”也。《说卦传》曰：“易逆数也”。邵子曰：“乾一、兑二、离三、震四、巽五、坎六、艮七、坤八”。自乾至坤，皆得未生之卦，若逆推，四时之比也。后天六十四卦仿此。</span>
  </p>
  <a name=c115></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218874>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦定阴阳次序</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾为父，震长男，坎中男，艮少男，坤为母，巽长女，离中女，兑少女。泽火革变泽山咸卦；离卦初爻阳动变阴，变艮卦。兑金为少女，离火克之，巽为股，乾金克之，曰伤股。得艮土生兑金，断曰“不至于死”。相生极美，比和次之，体用于变爻，作动静取之，动者为用，静者为体。若地雷复卦变地泽临，木是用爻，断出软物、文章之体也，将出是罗经。天泽履卦变乾卦，此断出是铁器之物，将出是剃刀也。泽火革变噬嗑卦，此卦乃用爻木，体火，夏火得旺，能出土必是土物也。归妹卦变火泽睽卦，用爻属木变火，体卦属金，四爻变卦成艮，土能生金，断出是铁。泽天夬卦变兑卦，此卦非金是石，断是破瓷碟也。泽火革卦变艮卦，本卦得泽火革，兑为少女，近物为口，远取羊。内离为中女，近目，远取雉。初爻变艮卦为土，土能生金，则扶起兑金之妹。次除去初爻，移上四爻，又成巽木，佐得伤股之灾，得初爻变艮土生兑金，是故有救而不至于死也。近取诸身，八卦为乾头、坤腹、震足、巽股、坎耳、离目、兑口、艮手。远取诸物，乾马、坤牛、震龙、巽鸡、坎豕、离雉、艮狗、兑羊。又天水讼卦变兑卦，欲要求财。盖卦是体生而乃泄己之气，其财空望。次得离卦属火，能克金，客来食去酒，反自消耗也。</span>
  </p>
  <a name=c116></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218875>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占卦诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">又如占卦而问吉事，则看卦中有生体之卦，则吉事应之必速。便看生体之卦，于八卦时序类决其日时。如生体是用卦，则事即成；就生体是互卦，则渐渐成；生体是变卦，则稍迟耳。若有生体之卦，又有克体之卦，则事有阻节，好中不足。便看克体卦气，阻于几日，若乾克体，阻一日，兑克体阻二日之类推之。如占吉事，无生体之卦，有克体之卦，则事不谐矣。无克体之卦，则吉事必可成就矣。又如占不吉之事，卦中有生体之卦，则有救而无害；无生体之卦，事必不吉矣。若以日期而论，看卦中有生体之卦，则事应于生体卦气之日；有克体之卦，则事败于克体卦气之日，要在活法取用也。</span>
  </p>
  <a name=c117></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218876>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用互变之诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大凡占卜，以体为其主，互用变皆为应卦。用最紧，互次之，变卦又次之。故曰：用为占之即应，互为中间之应，变为事占之终应，然互卦，则分其有体之互，有用之互。如体在上，则上互为体卦之互，下互为用之互；体卦在下，则下互为体之互，上互为用之互。体互最紧，用互次之。例如观梅恒卦，互兑乾，兑为体互，见女子折花。若乾为体互，则老人折花矣。盖兑乾皆克体，但取兑而不取乾，此体互用之分。大凡占卦，变卦克体，事于未后必有不吉；变生体及比和，则事事临终有吉利。此用互变之诀也。</span>
  </p>
  <a name=c118></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218877>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用生克之诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占卦即以卦分体用互变，即以五行之理断其吉凶。然生克之理，于内卦体用互变一定之生克。若外卦，则须明其真生真克之五行，以分轻重，则祸福立应。何也？假如乾兑之金为体，见火则克。然有真火之体，有火之形、色；真火能克金，形色则不能克。能克则不吉，不能克则不顺而已。盖见炉中火、窖灶之火，真火也；烈焰巨炷，真火也。乾兑为体，遇之不吉。若色之红紫，形之中虚，槁木之离，日灶之火，则火之形色，非真火之体，乾兑之金，不为深忌。又若一盏之灯，一炬之烛，虽曰真火，细微而轻，小不利耳。又若震巽之木体，遇金则克。然钗钏之金、金铂之金、成锭之银、杯盘之银与器之锡，琐屑之铜铁，皆金也。此等之金，岂能克木？木之所忌者，快刀锐刃、巨斧大锯，震巽之体值之，必有不吉。又若离火为体，见真水能克，然但见色之黑者，见全湿者，与夫血之类，皆坎之属，终忌之而不深害也。余卦为体所值，外应克者，皆以轻重断之。若夫生体之卦，亦当分辨。土与瓦器皆属坤土，金遇之土能生金，瓦不能生也。树木柴薪皆木也，离火值之，柴薪生火之捷；树木之未伐者，生火之迟也。木为体，真水生木之福重；如豕如血，虽坎之属，生木之类轻也。其余五行生克，并以类而推之。</span>
  </p>
  <a name=c119></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218878>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用衰旺之诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡体卦宜乘旺，克体之卦宜衰。盖体卦之气，如春木、夏火、秋金、冬水、四季之月土，此得令之卦，乘旺之气，虽有他卦克之，亦无大害。用互变卦乘旺皆吉，但不要克体之卦气旺，而体卦象衰，是不吉之占。占者有此，若问病必死，问讼必败。若非问病与讼而常占，则防有官病之事。未临其期，在于克体卦气之日月也。若体卦旺，而复有生体之卦，吉事之来可刻期而至矣。若内卦外卦有生体者众，体卦虽衰，亦无大害也。内外并无生体，虽体之卦党多，皆是衰卦，终不吉也。故体用之卦，必须详其盛衰也。</span>
  </p>
  <a name=c120></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218879>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">体用动静之诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">占卦体用互变既分，必以内外之卦察其动不动。不动不占亦不断，其吉凶悔吝生乎动也。夫体卦为静，互卦为静，用卦变卦则动也。此内卦之动静也。以外卦言之，方应之卦、天时地理之卦应皆静；若人事之应、器物之类则有动者矣。器物本静，人持其器物而来则动矣。若乾马坤牛，皆动者也。盖水之井沼、土之山岩，皆静者矣。人汲水担水而前，水之动也；又人持石负土而前，土之动也。于外卦之应，观其动而审其吉凶。动而吉者，应吉之速；动而凶者，应凶之速。不动而应者，吉凶未见也。此则外卦体用之动静也。若夫起卦之动静，亦以我之中静而观其动者而占之。如雀之争坠，如牛鸡之衰鸣，如枯木之坠，皆物之动者，我以静而占之也。又若我坐，则事应之迟；我行，而事应之速；我立，则半迟半速。此皆动静之理也。</span>
  </p>
  <a name=c121></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218880>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占卜坐端之诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坐端者，以我之所坐为中，八位列于八方，占卦决断之。须虚心待应，坐而端之，察其八卦八方应兆，以为占卜事端之应。随其方卦有生克之应者，以定所占之家吉凶也。如乾上有土生之，或乾宫有诸吉兆，则尊长老人分上见吉庆之事。若乾上有火克之，或有凶兆，则主长上老人有忧。坤上有火生之，或坤上有吉兆，则主老母亲分上，或主阴人有吉利之喜。坤宫见克，或有有凶兆，则主老母阴人有灾厄。震宫有水生之，及东方震宫有吉兆，则喜在长子长孙。见吉而或见凶，则长子长孙不利。坎宫宜见五金，及有吉利之谶，则喜在中男之位。若土克若见凶，则忧在中男矣。离宫喜木生之，或有可喜之应，则中女有喜。若遇克，或见凶，则中女有厄。艮为少男之位，宜火生之，见吉则少男有喜。若遇克，或见凶，则灾及少男。问产，必不育矣。兑为少女，土宜生之，见吉则少女有喜，或有欢悦之事。若问病，如乾卦受克，病在头；坤宫见克，病在腹推之。震足、巽股、离目、坎耳及血，艮手指、兑口齿，于其克者，定见其病。至于八端之中，有奇占巧卜者，则在乎人。此引其端为之例也。</span>
  </p>
  <a name=c122></a>
  <h3 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218881>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占卜克应之诀</span>
    </a>
  </h3>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">克应者，所谓克期应验也。占卜之道无此诀，则吉凶成败之事，不知应于何时，故克应为卦之切要也。然克则最难，有以数而克之者，有以理而克之者，皆要论也。以数而刻期，必详其理。如算屋宅之初创，男女之始婚，坟墓之方葬，器物之新置，俱以年月日时加事物之数而起卦。卦成则欲体用互变之中，视全卦之数，以为约定之期。如审其事端之迟速而刻之，如屋宅坟墓，永久者也。屋宅则以全卦之数克其期。如屋宅之终应，盖房屋有朽坏之期也。坟墓亦有时坏，然占墓但占吉凶，不计成败也。男女之婚，远亦不过数年、年内之事，全卦之数可决。又不如屋宅之久也。然婚姻亦不过卜其吉凶，不必刻其期也。若吉凶之期，但以生体及比和之年月为吉期，克体之年月为不吉之期也。器物之占，则金石之质终远，草木之质终不久也。远者以全卦之数为年期，近者以全卦之数为月期，又近者以全卦之数为日期也。如置砚，则全卦之数为岁计；笔墨亦可以全卦为岁计乎？笔墨之小者，以日计之可也。此器物刻期之占也。如先天观梅与牡丹二占，俱旦夕之事，故以卦理推，则不必决其远日也。如后天老人、少年、鸡、牛之占，以方卦物卦之数，合而计之。老、少、鸡、牛之占亦只可以日计也。若永远之占，则以日为月，以月为年矣。占者详吉，必又寻常之占事刻期，则于全卦中细观生体之卦为吉应之期。克体之卦为凶；凶应之期，远则以年，近则以月，又近则以日也。如问求名，则乾为体，看卦中有坤艮，则断其辰戌丑未之土月日，盖乾兑金体也。此为吉事之应。若问病而乾卦为体，见卦中有离，又看卦无坤艮及凶犯，则断其死于巳午火日。此克体为凶事之期也。又若问行人，以生体之日为归期；无生体比和之日，则归必迟。若此例者，具难尽载，学者审焉。</span>
  </p>
  <a name=c123></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218882>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">断占总诀篇之二</span>
    </a>
  </h1>
  <a name=c124></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218883>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">万物赋</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人禀阴阳，卦分先后。达时务者，近取诸身，远取诸物。观物理者，静则乎地，动则乎天。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">原夫万物有数，《易》数无穷。动静可知，不出于玄天之外；吉凶必见，莫逃乎爻象之中。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">未成卦以前，必虚心而求应；既成卦以后，观刻应以为断。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音言语，傍人谶兆，当遇形影往来，我心指实皆是。及其六爻以定，三才既生，始寻卦象之端，终测刻应之理。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">是以逢吉兆而终知有喜，见凶谶而不免乎凶。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">故欲知他人家之事，必须凭我耳目之闻见。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">未成卦而闻见之，乃已生之事；既定卦而观察之，乃未来之机。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">或闻何处喧闹，主有斗争；或逢此间笑语，必逢吉庆。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">见妇啼叹，其家阴小有灾；东至军来，必有官司词讼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">或逢枷锁，而枷锁临身；倘遇鞭杖，而鞭杖必至。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">讼若屠而负肉，此为骨肉有灾。倘逢血光，而又恐灾于兹畜。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">师巫药饵，病患临门。见讠皮则有犯家先，逢酒则欠神愿。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">阴人至，则女子有厄阳人至，则男子当灾。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">又须八卦中公，不可一例而论。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">卦吉而爻象又吉，祸患终无；卦凶而谶兆又凶，灾祸难免。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">披麻带孝，必然孝服临头；持杖而号，定主号泣满室。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">其人忧，终是为忧；其人喜，还须有喜。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">故当观色察形，以为决意断心。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">其或鼓乐声喧，又见酒杯器皿，若不迎婚嫁娶，定须会客宴酣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">欲知应在何日，须观爻象值数。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巽五日而坤八日，离三朝而坎六朝。又观远近克应，以断的实之相期。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">应远，则全卦相同；应近，而各时同断。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">假如天地否卦，上天一而下地八，设若泽火革卦，上兑二而下离三。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">依此推之，成无一失。此人物之兆，察之可推也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">及其鸟兽之应，仍验之有准。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">鹊噪而喜色已动，鸦鸣而祸事将来。牛犬之类，日辰不见，金日遇之，六畜有损。木日见猪，养猪必成。庚日见鸡鸣，丁日见羊过，此凶刃之杀。巳日值马来，壬日有猪过，此皆食禄之兆。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">见吉兆而百事亨通，逢凶谶而诸事阻滞。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">或若求财问利，须凭克应以言。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">柜箱为藏财之用，绳索为穿钱之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">逢金帛宝货之类，理必有成；遇刀刃剑具之器，损而无益。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">又看元卦，不可执一，逢财而有财，无财则无益。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡物成器，方系得全；缺损破碎，有之不足。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">或问婚姻，理亦相似。物团圆，指日可成；物破损，中途阻折。此又是一家闻奥。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">斯理明，成事昭然。逢柴炭主忧，折麦主悲，米必奇，豆必伤。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">未与鞋，万事和谐；棋与药，与人期约。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">斧锯必有修造，粮储必有远行。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">闻禽鸣，谋事虚说；听鼓声，交易空虚。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">拭目润睫，内有哭泣之事；持刃见血，外有蛊毒之谋。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">克应既明，饮食同断。见水为饮食酒汤，遇火为煎炮火高炙。见米为一饭之得，提壶为酌杯之礼。水乃鱼虾水中物味，土乃牛羊土内菜蔬。姜面为辛味辣羹，刀砧乃薰腥美味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">此三天之克应，万物之枢机。能达此者，尚其秘之。</span>
  </p>
  <a name=c125></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218884>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">饮食篇</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">夫乾之为象也，圆坚而味辛，取象乎卵，为牲之首，为马为猪，秋得之而食禄盛，夏得之则食禄衰。春为时新之物，果蔬菜之属；冬为冷物，隔宿之食。有坎，乃江湖海味；有水，而蔬果珍馐。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">艮为土物同烹，离乃火边煎炙。秋为蟹，春为马，凡内必多肉，其味必辛。盛有瓦器，伴有金樽。其于菜也为芹，其于物也带羽，克出生回，食必鹅鸭；生克出入，野菜无名。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坤其于坤也，远客至，故人来。所用必瓦器，所食米果之味。静则梨枣茄芋，动则鱼鲊鲜羊。无骨肉脯，杀亦为腌藏，亦为肚肠，遇客必妇人。克此必主口舌。克出生回，乃牲之味；克入生物，乃杂物之烹。见乾兑，细节薄披；见震巽，而新生旧煮。其色黑黄，其味甘甜。水火并之，蒸炊而已。四时皆为米麦之味，必带麻姜。仔细推详，必有验也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巽之为卦，主文书柬约之间，讲论之际，外客婚姻，故人旧交，或主远信近期。其色白青，其性曲直，其味酸，其象长。桃李木瓜，斋辣素食，为鱼为鸡，其豆其面。非济挚而得之，必锄掘而得之。有乾兑食之而致病，有坤得之非难。为炊炒菜蔬，离为炒茶，带坎于中，酒汤其食，其无生，半斋半薰。其在艮也，会邻里有贵人，食物不多，适口而已。其橘柚菜果蔬，斫伐之山林带节。虎狗兔鹿，渔捕网罗，米麻面麦，克入杂食，克出羊肉，克入口舌是非阴灾，极不可食。其味甘甜，其色玄黄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎为水象也，水近信至海内，味香有细鳞，或四足。凡曰水族，必可饮食也。或闻萧鼓之声，或在礼乐之所。其色黑，其味咸。克出饮酒，生回食钱。为豕、为目、为耳、为血。羹汤物味，酒食水酱。遇离而说文书，逢乾而为海味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">震之为卦，木属也。酒友疏狂，虚惊怪异。大树之果，园林之疏。其色青，其味酸，其数多，会客少。或有膻臭之气，或有异香之肴。同离多主盐茶，见坎或为盐腊。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离则文书交易，亲戚师儒。坐中多礼貌之人，筵中总英才之士。其物乃煎烤炙烧，其间或茶盐。白日之夕，虽之以烛。春夏之际，凡物带花。老人莫食，心事不宁。少者宜之，宜讲论即有益。为雉为蟹为蛇。色赤味苦，性热而气香。逢坎而酒有争，逢巽则炒菜而已。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">兑之为卦，其属白金，其味辛而色白。或远客暴至，或近交争。凡动物刃砧，凡味必有辛辣，凡包裹腌藏。其于暴食也，为芹、为菱；其于菜也，为葱、为韭。盛而有腥臭，旺而有羊鹅。坐间有僭越之人，或有歌娼之女。单则必然口舌，重则必然欢喜。生出多食，克出好事。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">夫算其饮食，必须察其动静，动则有，静则无。</span>
  </p>
  <a name=c126></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218885>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观物玄妙歌诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">观物戏验者，虽云无益于世，学者以此验数，而知圣人作《易》之灵耳。物之于世，必有数焉。故天圆地方，物之形也；天玄地黄，物之色也；天动地静，物之性也；天上地下，物之位也；乾刚坤柔，物之体也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">故乾之为卦，刚而圆，贵而坚。为金为玉，为赤为圆，为大为首，为上之果物。见兑为毁折，逢坎而沉溺，见离为炼锻之金。震为有动之物，巽为木果为圆。坤艮，土中之石，得火而成器。兑为剑锋之锐，秋得而价高，夏得之而衰矣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坤之为卦，其形直而方，其色黑而黄，为文为布，为舆为釜。其物象牛，其性恶动。得乾可圆可方，可贵可贱。震巽为长器，离为文章。兑为土中出之金，艮为带刚之土石也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">震之为卦，其色玄黄而多青，为木为声，为竹为萑苇，为蕃鲜及生形。上柔下刚，是性震动而可惊。得乾乃为声价之物，得兑为无用之木。见艮山林间之石，见坎有气之类。巽为有枝叶，见离为带花。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巽之为卦，其色白，其气香，为草木，为刚为柔。见离为文书，见兑乾为不用，乃遇金刀之物。坤艮为草木之类，坎兑为可食之物。为长为直，并震而春生夏长，草木之果蔬。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎之为卦，其色黑，亦可圆可方。物为柔为腐。内则刚物，得之卑湿之所，多为水中之物。见乾亦圆，见兑亦毁，又乃污湿。得震巽而可食。见离水火既济，假水而出，假火而成。又为滞于物，兑为带口也。震巽为带枝叶，为带花也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离之为卦也，其色黄而青，体燥，其性则上刚下柔。为山石之物，土瓦之类。小石与大山，为门途之处。为物见乾而刚，兑而毁折，坤而土块。巽为草之物，而震为木物类也。坎并为河岸之物，离并为瓦器。震巽并见，篱壁之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">兑之为卦，其色白，其性少柔而多刚，为毁折而不全，带口而圆。见乾先圆后缺，见艮则金石废器，见震巽为剥削之物，见坎为水之类。得乾而多刚，得坤而多柔。长于西泽之内，于水中之类，得柔而成器也。</span>
  </p>
  <a name=c127></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218886>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">诸物响应歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">混沌开辟立人极，吉凶响应尤难避。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">先贤遗下预知音，皇极观梅出周易。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">玄微浩瀚总无涯，各述繁言人莫记。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大抵体宜用卦生，旺相谋为总有益。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">比和为吉克为凶，生用亦为凶兆矣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">问雨天晴无坎兑，亢旱言之终则是。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天时连雨问晴明，艮离贲卦响应耳。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾明坤晦巽多风，震主雷霆定莫疑。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占人事体克用，诸事亨通须有幸。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">比和为妙克为凶，又看其中何卦证。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾主公门是老人，坤遇阴人曰土应。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">震为东方或山林，巽亦山林蔬果品。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎为北方并水姓，酒货鱼盐才取定。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离言文书炉冶利，亦曰南方颜色杂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">艮为东北山林财，兑曰西方喜悦是。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生体克用亦同方，编记以为诸事应。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡问家宅体为主，旺相须知进钱财。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生用须云耗散财，比和家世安居处。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">克体为凶决断之，生产以体为其母。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">两宜生旺不宜衰，奇偶之中察男女。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾卦为阳坤为阴，又有来人爻内取。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">阴多生女阳生男，此数分明具易理。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻生用必难成，比和克用大吉利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若问饮食用生体，必知肴馔丰厚喜。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生用克体饮食难，克用必无比和美。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎兑为酒震为鱼，八卦推求衰旺取。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求谋称意是比和，克用谋为迟可已。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求名克用名可求，生体比和俱可取。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">求财克用若有财，生体比和俱称意。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">交易生体及比和，有利必成无后虑。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">出行克用用生体，所至其方多得意。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎则乘舟离旱途，乾震动则坤艮止。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">行人克用必为迟，生体比和人即至。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">咸远恒迟升不回，艮阻坎险君须记。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若去谒人体克用，比和生体主相见。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">兑主外见讼不亲，乾利大人长者是。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">来问失物体克用，速可追寻依卦断。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">相生比和终可寻，兑临缺处并井畔。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离为冶炉及南方，坤主方器凭推看。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病最宜体旺相，克用易安药有效。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">比和凶则有救星，体卦受克为凶兆。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离宜服热坎服冷，坤土卦温补料亨。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">亦把鬼神卦象推，震主妖怪为状貌。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巽为自缢并锁枷，坤艮落水并血衄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占公讼用宜克，体卦旺相终得理。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">比和助解最为奇，非止全仗他人力。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若问墓穴在何地，坤则平阳巽林里。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾宜高葬艮临山，离近人烟兑兴废。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">比和生体宜葬之，克用尤为大吉利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">若人临问听旁言，笑语鸡鸣亦吉美。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">美物是为祥瑞推，略举片言通万类。</span>
  </p>
  <a name=c128></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218887>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">断占总诀篇之三</span>
    </a>
  </h1>
  <a name=c129></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218888>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">诸卦反对性情</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾刚坤柔反其义，比卦欢欣困忧虑。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">临逢百物观求之，蒙卦难明屯不失。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大畜其卦福之生，无妄若遇祸之始。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">升者去而不复回，萃者聚而终不去。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谦卦自尊豫怠人，震则动而艮则止。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">兑主外遇巽内藏，随前坎后偷安矣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">剥体消烂复自生，蛊改前非而已矣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">明夷内朗又逢伤，晋主外明并通理。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">益拟茂盛损象衰，咸速恒迟涣远遁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">同人内亲睽外疏，解卦从容蹇难启。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离文美丽艮光明，遯退回身姤相遇。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大有曰众丰曰多，坎卦履险震卦起。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">需则不进讼不宁，既济一定无后虑。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">未济之卦男之终，归妹之辞妇之始。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">否遭大往而小来，泰卦大来而小往。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">革去旧故鼎从新，小畜曰寡噬嗑食。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">旅羁其外大过颠，夬卦分明言快利。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">要将字字考精详，杂卦性情反对是。</span>
  </p>
  <a name=c130></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218889>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占物类例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡看物数，看成卦，观其爻辞。如得乾，曰：“潜龙勿用”，乃曰不可用之物，“见龙在田”，乃曰田中之物，“或跃在渊”，乃曰水中之物；“亢龙有悔”，乃废物也。如得坤之“直方大”，乃曰直而方大物器；“括囊无咎”，乃曰包囊之物；“黄裳元吉”，乃曰黄色衣服之类，“其色玄黄”。“困于石”，乃曰石物，或逢石而破；“困于株林”，乃曰木物。又言爻辞不言物类而不能决者，须以八卦所属之象察之。又诀：体用断物之妙，生克制化之妙，于诸诀中，此诀极为美验。其所诀以生体者，为可食之物；克体者，为可近人之秽物；体生者，为不成之器；体克者，为破碎损折之物；比和者，乃有用成器之物。又生体象者，为贵物；克体象者，为贱物；所泄为废物也。又诀：凡算此数，以体卦为主，看其刚柔。用卦看其有用无用。体生方园曲直，可作可用。如用生体，乃可食用。变互卦看其色与数目。此互卦决其物之数目也。如互见乾兑，决为一二之数；互见艮坤，为七八之数也。但互卦重乾、重艮、重坤、重坎、重离之属，皆是两件物。乘旺物数又多，衰而物少。离为中虚之物，或空手无物。又决物之数者，如互艮卦，先天七数，后天亦不出八数之外。</span>
  </p>
  <a name=c131></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218890>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">物数为体诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡算物数者，不但以体卦为体，凡卦之多者，皆可为体。如乾金多，而金为体则多刚。坤多，以土为体多柔。乾卦体卦，而用是乾，而互又是乾，固曰金为体而刚矣，便是圆健刚硬之物，非金非石，此为体矣。观物有体互变卦，并无生旺之气者，为不入五行之物，观物观爻。如八卦中阳爻多，乃多刚之物；阴爻多，乃多柔之物。又诀：观物变在五六爻，多是能飞动之物。</span>
  </p>
  <a name=c132></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218891>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观物看变爻为主</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡观物以变卦为主应，用之应验也。如得乾初爻动变为巽，乃金刀削过之木物；二爻动变为离，乃火中锻炼之金；三爻动变为兑，乃毁折五金之器，虽圆而破处多也。</span>
  </p>
  <a name=c133></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218892>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观物克应法</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡算物之成败，又看体卦克应如何。成卦未决之际，见有圆物相遇，即断是圆物；见有负土者过，即断土中之物，见刚健之物，即言刚健之物；见有柔腐之物，即言柔腐之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c134></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218893>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观物趋时诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡算物，趣时察理，无有不验，以春得震离为花，夏得震为有声之物，秋得兑为毁折成器之物，冬得坤为无用土物也。</span>
  </p>
  <a name=c135></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218894>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">观物用《易》例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">有人以笼盛物者，算得地天泰之初爻动变升，互见震兑。曰：“此必草木类，而生土中也。色青根黄，当连根之草木也”。盖爻辞曰：“拔茅茹，以其汇”。乃曰：“此乃乾根之草木也”。视之，乃草木连根，新采于土中也。互震为青色，兑为黄根也。又有以令钟覆物者，令占之，得火风鼎之雷风恒。乃曰：“此有身价气势之物，虽圆而今毁缺矣。其色白而可用”。盖其辞曰：“鼎玉铉，大吉”。互见乾兑，虽圆而毁也。开视之，乃玉绦环，果破矣。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c136></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218895>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">万物戏验</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡猜手中物，乾金为圆白之物，其色白，其性刚，为宝货之物，有气无价物。坎为黑色，性柔，近水之物。又艮为土中之物，瓦石之类。有气，为成器之物。其色黄，逢兑克柔；无气，折伤之物。又震巽为竹木，有气为有用之物，为可食之物；无气为竹木之属，可食当时之果物。色青，有气柔，无气刚。震巽遇坎为污湿物，或有气；如无气，为烂朽之木。离色赤，性柔，有水有木，而火焚之，必炭之类。有气，为价值可货之物。坤为土中之物，色黄而性温。兑为毁折之物，带口。凡占物，以春震巽、夏离、秋乾兑、冬坎，皆当以为可用之物，成器之物，否则，无用之物。值六虚冲破，则必无物而空手矣。断占总诀篇之四</span>
  </p>
  <a name=c137></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218896>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">占卜十应诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡占卜，以体卦为主，用为事应，固然矣。体卦既为主，用互变卦相应参看祸福。然今日得此一卦，体用互变中决之如此。明日复得此卦，体用一般，岂可又复以此诀之。然则，若体而可？必得十应之说而后可也。盖十应之说，有正应、互应、变应、方应、日应、刻应、外应、天时应、地理应、人事应，所谓有十应也。夫正应者，正卦之应也；互应者，互卦之应也；变应者，变卦之应也。此二卦之诀也，占者俱用之，以断吉凶矣。至于正应之理，人有不知者，故必得诸诀之用，卦无不验；不得此诀，此占卜吉凶，或验或不验矣。得此诀者，宜秘之。正应：正应者，即体用二卦决吉凶。互应：互应者，即互卦中决吉凶。变应：变应者，即变卦中决吉凶。方应：方应者，以体为主，看来占之人在何方位上，即看其所坐立之方位。宜生体卦，又宜与体比和，则吉；如克体卦则凶；如体卦生之，亦不吉矣。日应：日应者，以体卦为主，看所自占卦属何卦，及体卦与本日衰旺如何。盖卦宜生体，宜比和，不宜克体，亦不宜体卦生之也。本日所属卦气，如寅卯木，巳午火，申酉金，亥子水，辰戌丑未土也。刻应：刻应者，即三要之诀也。占卜之顷，随所闻所见吉凶之兆，以为吉凶之应。外应：外应者，外卦之应也。占卜之际，偶见外物之来者，即看其物属何卦。如火得离，水得坎之类。如见老人、马、金、玉、圆物，得乾；见老妇、牛、土、瓦物，得坤之类。又如见此者为外应之卦，并看其卦与体卦生克比和之理，以决吉凶。天时应：天时之应，占卜之际，晴明为离，雨雪为坎，风为巽，雷为震，如离为体，宜晴；坎为体，宜雨；巽卦为体，宜见；震为体，宜雷。木见雷为比和。参之生克，以定吉凶。地理应：地理之应，占卜之时，在竹林间，为震巽之地；在江河溪涧池沼之上，为坎；在五金之处，为乾兑乡；在窑灶、炉火之所，为离；在土、瓦之所，为坤艮。并为体卦，论生克比和之理以决之。人事应：人事之应，即三要中人事之克应也。盖占卜之际，偶遇人事之吉为吉，偶遇人事之凶为凶。如闻笑语，主有吉庆之事；遇哭泣，主有悲愁之事。又以人事之属于卦者论之。老人为乾，老妇为坤，少男为艮，少女为兑。并看此人事之卦，与体卦生克比和，以决吉凶。右十应之理，凡占卜之际，耳闻目见，以决吉凶，并以体卦为主，而详其生克比和之理。如占病症，互变中多有克体之卦，而本卦中又无生体之卦者，断不吉也。又看体之衰旺，若体旺，则庶几有望；体又衰，则无复生之理。如是，又看诸应有生体者，险中有救；又有克体，则不可望矣。其余占卜，并以类推之。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">卦应乾为天、为圆、为君、为父、为首、为玉、为金、为寒、为冰、为大赤、为马、为良马、为老马、为瘠马，为驳马；为木果。（《九家易》云：为龙、为直、为衣、为言。）如姤、遯、否、履、无妄、讼、同人七卦，乾在上，刚于外。如大有、泰、大壮、需、大畜、小畜七卦，乾在下，刚于内。乾坤刚柔，四发八变，惟六动随时有异，不拘于一乾，性温而刚直，偏位西北，不居子午，而居戌亥。附于礼法。则为刚善，为明。不随于礼法，则为刚恶，为凶暴。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：雷，老阳。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天气：寒。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：军、弓手、贼、强横、停尸。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：朝贵，盐司、太守、座主。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：顶、面颊、九页辅。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：刚健正直、尊重、好高、战吉。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：正清、商音。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">关升，义清。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：上卦为形象之家、下卦为强横之辈。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：手太阳脉弦紧、天威所罚、上壅目热、寒热。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">附药：丸子食物，饼子之赤者、手饼、馒头、荷包、猪头、脑骨头、羹、珍粉、馄饨。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：粟、粟、瓜、豆、龙眼、荔。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：雀、鹇、鹗、鹏、鹰（余备载于前）。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">衣服：赤玄色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：圆物盏、注子盘、水晶、玉环、定器、球。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：恩义交货，钱马之类。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：壬申。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：方圆形字、有头者、须旁八卦。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：二百一十六策。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百六十八。坤为地、为母、为布、为釜、为腹、为吝啬、为均、为牛、为子母牛、为大舆、为文、为众、为柄。其与地也为黑。坤上体矣外于八卦，柔在下，柔在内。坤厚，位居偏在西南申上。附于理法，则为圣贤；否则为邪荡。天文：雾、露、云、阴。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：郡国、宫阙、城邑、墙壁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：母、妻、儒、农、僧。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：奴婢藏在僻处。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：大臣，教官，考校文字。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生育：女、肥厚。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：顺缓不信事，顽钝无慈爱。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：宫音。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：迟滞、顽懦、悭吝、从容。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：手太阴候、腹痛、脾胃闭沉状。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">饮食：藜羹、烧熬冻物、鹅、鸭、肺。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">太牢饮食：饴糖。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五味：苦、辣、甘。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">果品：取物件。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">音信：顺遂可许为捷，应辰戌丑未月日。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财物：束修、抄题僧衣、布裳。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：富家、庄家、商家、丑拙性吝、大腹、壮、迟钝、面黄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：轿、车、瓦器、田具、沙器。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：牛、牝马、鸥、雀、鸦、鸽。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：圭、金、皿、牛旁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：癸酉。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：一百四十四。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：六百七十二。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">震为雷、为龙、为玄黄、为旉、为大涂、为长子、为足、为决躁、为苍莨竹、为萑苇。其于马也，为善鸣、为足、为作足、为的颡。其于稼也，为反生、其究为健、为蕃鲜（《九家易》云为王、为鹄、为鼓）。春夏性严刚直，众所钦服，秋冬刚而不威，不能制物。不好闲附，性偏。而偶附于理，则为威严；否则为躁暴。体用上卦为飞，下卦为走。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：雷、虹、霓、电。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：屋市宅、门户枋、方所、正东。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：商旅、将帅、工匠。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：东去、男人盗。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：临司、郡守、刑幕、巡检、法官。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生育：长男、转动、虚惊、怪异。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：始刚、故决断、急于动、故躁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：官宦家、技巧工、女容心神好、动静易转。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：上下角、上平声、三音七声。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">信音：所许不至。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：旧事重叠、有名无实。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：气积冷胃、四体劳倦、温冷伤食药、足太阳脉洪浮。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">宴会：酒会、玩赏、期集。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">食物：面食、包子、酒、时新之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：芋、小豆、稼、时新之果。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：蜂、蝶、白鹭、鹤。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：木器盘、竹器筐、算盘子、舟车、兵车、轿、器皿、瓶盏、瓯、乐器、鼓。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">衣物：裙腰带。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">缠带：绳、匹帛、青玄黄之绦。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：阴人取索竹木钱。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：卯。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：走、竹旁、立画偏。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">色：青、玄、黄。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：百六十八。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百四。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">巽为风、为长女、为绳直、为工、为白、为长、为高、为进退、为不果、为鱼、为鸡。其于人也，为寡发、为顺颡、为多白眼、为股、为近利市三倍。其究为躁卦（《九家易》云为扬、为鹳）。春秋有权，号令谋略；秋冬刚柔不一，与物为害。巽人也，凡事敢为不退避。巽阴赋、性偏。附于礼法，则为权谋；否则为奸邪。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：风。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：林苑、园囿。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：命妇、药婆、工术女。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：奴婢、商量取去、宜急来之。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：典狱、考校、干官、休究。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：耳、目、胆、发、命、口、肢。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生育：长女、胎月少、莹白。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：鄙野、悭吝、艰苦、号咷。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：命妇、宗室女、委望、进退。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：角音、角仄声、三声四声上下。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">信音：召命、报捷、辟差、举状。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：荐举、呈发、申审、号令、所命。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">病：手足厥会处之气候三十日、脉濡弱、饮食伤胃、宿酒痞膈、为臭、水谷不化。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">药：草药。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">宴会：家筵、客不齐。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：麻、粉、茶。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">食物：长面、粉羹、脍、鸡、鱼、肠、肚、酸汤、下卦为鹅鸭。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：竹木草具、绳、丝弦索、乐器。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：鸡、鹅、鸭、鱼、善鸣之虫禽、上卦飞、下卦走。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">衣物：衣、绳、丝。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">颜色：青绿、碧白、紫色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：利市喜羹、租钱、料钱、那兔。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：辛。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：草、木、竹旁。（丝、鱼、菜、舟、齿、足疾、大豆、辣）。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：百九十二。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百三十六。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">坎为水，为沟渎、为中男、为耳、为豕、为隐伏、为矫揉、为弓轮。其于人也，为加忧、为心病、为耳痛、为血痛、为血卦、为赤。其于马也，为美脊、为亟心、为下首、为薄蹄、为曳。其于舆也，为多眚、为通、为月、为盗。其于木也，为坚多心。春夏性险，不顾危亡，为事多暴；秋冬性静，先难后易。有谋略，有胆志。坎险维心亨内，主坎陷，赋性而居北。坎之体，隐伏之物。附于理法，为刚；否则，为险陷。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：月、虹、云、霜。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：海阔、水泉、沟渎、厕、方所下北、丘墓中、狐兔中。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：僧、道。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：乘便而来、脱头露尾、易败必获。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：漕运、钱粮漕官运属。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：发、膏、血。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生产：难产、中男、清秀。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：心机阴陷、智随方圆、委曲。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：富家、酒家、亲家用性。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：羽中上卦、羽平六声下卦。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">信音：反覆犹豫、小人欺诈、、狡狯、盗贼、狱讼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：足太阴之气，脉滑芤。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">附药：补肾药、或用酒水下。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">食物：酒、咸物、豕、鱼、海味、中硬之核、腰子。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：麦、枣、梅、李、桃、外柔内坚有核。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：鹿、豕、象、豚、狐、燕、螺。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：酒器、车轮、败车。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">衣物：青黑色。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：争讼之财和合打偏财。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：两头点水，全水、月、小弓之属。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：戌。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">色：黑皂、白。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：百六十八。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百零四。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">离为火、为日、为电、为中女、为甲胄、为戈兵。其于人也，为大腹、为目。为乾卦，为雉、为龟、为蟹、为赢、为蚌。其于木也，为科上槁（《九家易》云为牧牛。正沫做牝牛）。春夏性明，文彩为断。秋冬晦而不明，始终不决。离，丽也，明察于心。赋性直而居正南。附于礼法则为文明；否则为非也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：日、霞、电、晴。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：殿堂、中堂、檐、厨灶、方所正南。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：为将帅、兵戈、甲胄之士。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：妇人盗、从南方去。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：翰苑、教官、通判。任宜在南方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：三焦、小肠、目、心。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生育：次女、多性燥啼哭。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：聪明，见事明了。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">信音：朝信、文书、报捷、契券。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：忧疑、聒拓、喧哄、性急、虚忧。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：手足两君太阳明三相火，气燥、热疾、发狂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：凤有六彩、鳖、螺、蚌、蟹、鳌、蛤、赢、鹑、鹤、飞鸟、牝羊。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">食物：馄饨、蟹、鳖、蚌、介虫之属、中虚物、炙煎物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：谷实梁藕、外坚内柔之物、棘木之花叶枯枝。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：灯火之具、外坚内柔之物、屏幕、帘、旗帜、戈兵、、甲胄、盘、甑、瓶缴壁一应中虚之物、窑、灶、炉、冶、盒子、瓮、笼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：远旧取索意外之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：火、日旁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：巳。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：百九十二。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百六十三。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">艮为山、为少男、为手、为径路、为小石、为门阙、为果、为阍寺、为指、为狗（《汉上易》作豹、熊、虎之子）、为鼠、为黔喙之属。其于木也，为坚多节（《九家易》云为鼻、为肤、为皮革、为虎、为狐）。春夏性禀温和善，秋冬执滞不常，为事迟缓。艮止也，有刚有柔，民阳赋性偏而居东偏。附于理法为刚直；否则为顽梗。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：星、烟。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：山径、墙苍、丘园、门墙、阑、阍寺、宗庙、方所东北方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：阍寺仆隶、官僚、保人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：以下所使警迹人。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：山郡、无迁转。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：手指、鼻、肋、脾、胃。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生育：损胎、次男。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：濡滞多疑、优游、内刚中软。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：清上平一音十二音三声。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：反覆进退、去就多疑。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：手太阳、久患脾胃、股疾、脉沉伏。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">附药：湿土石药。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">宴会：常酣、宴饮、期集。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：豆、大小粟。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">食物：妆点之物、所食不一、酒酱、杂熬之物、冻物、杂羹、有汁物、鸭、鹅、甘味。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：牝牛、子母牛、鹄、鹘、鸦、鹊、雀、鹜、鸥、鼠。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：轿、舆、犁具、兵甲器、陶冶瓦器、锅釜、瓶、瓮、簋、伞、钱袋、磁器、踏蹬、螺、盒子、内柔外刚之物。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">衣物：黄裳、僧衣、黑皂、彩帛、袋布。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：丙。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：旧钱、置转货买田土、趁钱。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字：土、牛、田傍。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：百六十八。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百零四。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">兑为泽、为少女、为巫、为口舌、为毁折、为附决；其于地也，为刚为卤、为妾、为羊（《九家易》云为堂、为辅颊）。春夏性说好辨、秋冬好雄。兑，说也。邪言伪行，无所不为，附波逐流。附于理法，则和顺；否则邪伎淫滥。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天文：雨露、春雾、细雨、夏秋重雾、冬大雪、上为雨、下为露。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">地理：井、泉、泗泽、方所西方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">人物：先生、客人、巫匠、媒人、牙人、少女、妾娼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">官贵：学官、将帅、县令、考校、乐友、赴任西方。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凶盗：家使僮仆、藏于僻地。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">身体：口、肺、膀胱、大肠、辅颊、舌、太阳。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">生育：少女一胎、月不足、多奇异。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">性情：喜悦、口舌、多美。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">声音：商上、下商之浊四声。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">婚姻：平常之家、少女媚悦。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">信音：喜酉导丑时日至。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事意：唇吻、口舌、谗谤、相欺、争打妇人、暗昧。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">疾病：口痛、唇齿、咽喉、危困。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">附药：剉剂。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">宴会：讲书、会友、请先生、吟赏。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">食物：包子、有口舌物、糖饼、烧饼、肝肺。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">谷果：栗、黍、枣、李、胡桃、石榆。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禽兽：羔羊、鹿、猿、虎豹、豺、鹜、鱼。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">器用：席、铁、铜、钱、器皿、酒盏、瓶、瓯、有口器、或损缺。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">衣物：彩。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">财：束修、含水。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">禄：丁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字；家金、钓口旁。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">色：素白。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">策：一百九十二。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">轨：七百三十六。</span>
  </p>
  <a name=c138></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218897>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字画指迷篇之一</span>
    </a>
  </h1>
  <a name=c139></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218898>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字画指迷篇序</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">夫先天者，已露之机；后天者，未成之兆也。先天则有事，始占一事之吉凶；后天则有所未知，而出仓猝之顷，而休咎验焉。故先天为易测，后天为难测也。先天则有执着而成卦，后天触物即有卦。此全在人心神之所用也。其能推测之精，所用之活，则一事一物莫逃之数矣。我居者为中，现于前者为离，现于后者为坎；出于左者为震，出于右者为兑；在我左角者为艮，在我右角者为乾；左前角者为巽，右前角者为坤，此八卦位也。八方而定吉凶，立八卦而定克应；取时日而定吉凶，观变爻而定体用。故我坐，则其祸福应二卦成数之间；我立，则其祸福应于中分二卦之间。大抵坐则静，行则动，立则半动半静。静则应迟，动则应速。凡有触于我而有意，以为我之吉凶，则吉凶在我，应验在人意者，何如？盖八卦之画既定，六爻之断既明，仍余以生克之理，究以刑冲之蕴，成无一失矣。近取诸身，远取诸物，仍当以心求，不可以迹求，不可拘泥于物圆为天卦，物方为地卦。是为序。</span>
  </p>
  <a name=c140></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218899>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">指迷赋</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">尝闻相字，乃前贤妙术，古今秘文，为后学之成规。辩吉凶之易风，相人不如相字。即相其人，变化如神，精微入圣。自古结绳为政，如今花押成数。言心声也；字心画也。心形如笔，笔划一成，分八卦之休囚，定五行之贵贱，决平生之祸福，知目前之吉凶。富贵贫贱，荣枯得失，皆于笔划见之。或将吉为凶，或指凶为吉。先问人之五行，次看人之笔划。相生相旺则吉，相克相泄则凶。如此观之，成无一失。为官则笔满金鱼，致富则笔如宝库。一生狐独，见于字画之欹斜。半世贫穷，乃是笔端之愚浊。非夭即贱，三山削出，皆非显达之人；四大其亡，尽是寂寥之辈。父母俱存兮，乾坤笔肥；母早亡兮，坤笔乃破；父先逝兮，乾笔乃亏。坎是田园并祖宅，稳重加官。艮为男女及兄弟，不宜损折。兑土主妻宫之巧拙，离宫主禄之荣枯。震为长男，巽为驿马，乾离囚走，壬主竞争。震若勾尖，常招是非，妻定须离，若是圆静，禄官亦要清明。离位昏蒙，乃是剥官之杀。兑宫破碎，宜婚硬命之妻。金命相逢火笔，克陷妻儿。木命亦怕逢金，破财常有。水命不宜土笔，不见男儿。火命若见水笔，定生口舌。土命若见木笔，祖产自消。相生相旺皆吉，相克相刑定凶。举一隅自反，遇五行而相之。略说根源，以示后学。</span>
  </p>
  <a name=c141></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218900>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">玄黄克应歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">玄者，天也；黄者，地也；应者，克应之期也；天地造化，克应之谓也。其歌曰：凡是挥毫落楮时，便将吉凶此中推。忽听傍语如何说，便把斯言究隐微。倘是欢言多吉庆，若闻愁语见伤悲。听得鹊声云有喜，偶逢鸦叫祸无移。带花带酒忧还退，遇醢逢醯事转迷。更看来人何服色，五行深处说根基。有人抱得婴儿至，好把阴阳两字推。男人抱子占儿女，妇人抱子问熊罴。一女一子成好事，群阴相挽乃是非。若见女人携女子，阴私连累生官非。忽然写字宽衣带，诸事从今可解围。跛子瞽者持杖至，所谋蹇滞不能为。竹杖麻鞋防孝服，权衡柄印主操持。见菓断立能结果，逢衣须说问良医。若见丹青神鬼像，断化神鬼事相随。若画翎毛花果类，必然妆点事须知。有时击磬敲椎响，定有佳音早晚期。寺观铃铙钟鼓类，要知仙佛与禳祈。倘是携来鱼雁物，朋友音信写相思。逢梅可就娣媒动，见李公私理不亏。见肉定须忧骨肉，见梨只怕有分离。仕宦官员俄顷至，贵人相遇不移时。出笔拔毫通远信，笔头落地事皆迟。墨断须防田土散，财空写砚忽干池。犬吠如号忧哭泣，猫呼哀绝有人欺。贼盗将临休见鼠，喜人推动爱闻鸡。马嘶必定有人至，鹊噪还应远客归。字是朱笔忧血疾，不然火厄有忧危。楼上不宜书火字，木旁书古有枯枝。朱书更向炉边写，荧惑为灾信有之。破器偶来添砚水，切忧财耗物空虚。笔下忽然来喜字，分明吉庆喜无疑。若在右边须弄瓦，左边必定产男儿。叶上写来多怨望，花间书字色情迷。果树边旁能结果，竹间阻节事迟疑。晴宜书日雨宜水，夏火金秋总是时。更审事情分向背，玄黄克应细详推。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c142></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218901>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">玄黄叙</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">龟形未判，此为太古之淳风；鸟迹既分，爰识当时之制字。虽俱存于简牍，当深究其源流。成其始者，信不徒然，即其终者，岂无奥义！宝田曰“富”，分贝为“贫”。两“木”相并以成“林”，“每水”东归是为“海”。虽纷纷而莫述，即一一而可知。不惟徒羡于简编，亦可预占乎休咎。春蛇秋蚓，无非归笔下之功；白虎青龙，皆不离毫端之运。今生好癖，博学博文。少年与笔砚相亲，半世与《诗》《书》为侣。识鱼鲁之外，穷亥豕之讹，别贤愚之字。昭然与毫端，察祸福之机，了然于心目。鲜而当理，敢学说字与荆公；挟以动人，未逊后来之谢石。得失何劳于龟卜，依违须决于狐疑，岂徒笔下以推尊，亦至梦中而讲究。“刀悬梁上”后操刺史之权；“松出腹间”果至三公之位。皆前人之已验，非后学之私言。洞察其阴阳，深明乎爻象，则吉凶悔吝可知矣。</span>
  </p>
  <a name=c143></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218902>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">玄黄歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">大抵画乃由心出，以诚剖决要分明。出笔发毫逢定位，笔头若出干无成。墨断定知田土散，纸破须防不正人。犬吠一声防哭泣，鼠来又忌贼来侵。赤朱写字血光动，叶上书来有怨盟。忽见鸡鸣知可喜，人警梦觉事通灵。马嘶必有行人至，猫过须防不正人。船上不宜书火字，楼头亦忌有官刑。有时戏在炉中写，遇火焚烧忽不宁。破器莫教添砚水，定知财散更伶仃。笔下偶然蝇嘻至，分明六甲动阴人。在左定生男子兆，右至当为添女人。曾见人家轻薄辈，口中含饭问灾。直饶目下千般喜。也问刑徒法里寻。花下写来为色欲，女人情意喜相亲。花开花落寻灾福，刻应之时勿自盲。麒麟凤凰为吉兆，猪羊牛马是凡形。此际真搜玄妙理，其中然后有分明。应验只须勤记取，灾祥议论觉风生。</span>
  </p>
  <a name=c144></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218903>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">花押赋</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">夫押字者，人之心印也。古人以结绳为证，今人以押字为名。大凡穷通之理，皆与阴阳相应。先观五行之衰旺，次察六神之强盛。五行者，立木、卧土、勾金、点火、曲水之象。六神者，青龙、朱雀、螣蛇、玄武、勾陈、白虎之形。上大阔方，火乃发用；坚瘦兮，木乃生荣；金要方，水要圆，土要肥而木要正。故曰：炎炎火旺，玉堂拜相；洋洋水秀，金阙朝元；木盛兮，仁全义广；金旺兮，性急心刚；土薄而离巢破祖，土厚而福禄绵绵。故曰：少木多根根折挫；金少火多，两窟三窝。金斜而定然子少，木曲而中少财丰。盖画长兮，象天居上；土卧厚兮，象地居下。内木停兮，象人在于中央。三才全兮，如身居于大厦；无天有地兮，父早刑；有天无地兮，母早化；有木孤兮，昆弟难倚；天失兮，故基已罢；内实外虚兮，虽才高无成，外实内虚兮，终富厚而显赫。龙蟠古字，必有将相之权；不正偏斜，定是孤穷之客；螣蛇缠体，漂流成里之程；玄武克身，妨妻害子。身之土透天，常违父母之言，而有失史弟之礼。只将正印按五行，仔细推详，大小吉凶，搜六神而无不验矣。</span>
  </p>
  <a name=c145></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218904>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">探玄赋</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">且夫“天”字者，乃乾健也，君子体之。地字者，乃坤顺也，庶人宜之。君子书天，得其理也；庶人书地，亦合宜也。夏木春花，此乃敷荣之日；冬梅秋菊，正是开发之时。一有背违，宁无困顿。日字要看停午月来须问上弦。假如风雨，要逢长旺之时；若是雨霜，莫写火蒸之候。牡丹芍药，只是虚花；野杏山桃，皆为结实。森森松柏，终为梁栋之材；郁郁蓬蒿，不过园篱之物。书来风竹，判以清虚；写到桑蚕，归于饱暖。锣鸣炮响，可言声势之家；波滚船行，俱作飘流之士。鱼龙上达，犬豕下流。泉石烟霞，自为清贫之士；轩窗台榭，难言暗昧之徒。河海江山，所为广大，涧溪沼，作事卑微。灯烛书在夜间，自我耀彩；月星写于日午，定是埋光。椒桂芝兰，岂出常人之口；桑麻禾麦，决非上达之人。黄白青绿红，许以相逢艳冶；宫商角徵羽，言他会遇知音。剑戟戈矛，终归武士；琴出笔砚，乃是文人。问钱与贫，因见自谦之德；出富乃贵，已萌妄想之心。金玉珍珠，不过守财之辈；荣华显达，宜寻及第之方。恩情欢爱，既出笔端；淫荡痴迷，常眠花下。酒浆脍炙，哺啜者必常书之；福寿康宁，老大者多应写此。且如龙蟠虎踞，宁无变化之时；凤翥鸾翔，终有腾飞之日。体如鹭立，孤贫之士无疑；势如鸦飞，绕舌之徒可测。惊蛇失道，只寻入穴之谋；舞鹤离巢，自有冲霄之志。急如鹊跳，是子轻浮；缓似鹅行，斯人稳重。如篁翁郁，休言豁达之心；似水飘浮；未免萧条家道。或若炎炎之火，或如点点之云，一生喜怒无常，终生成败不保。风摇嫩竹，早年卓立难成；雨洗桃花，晚岁羁楼无倚。为人潇洒，乃如千树之江梅；赋性温柔，何异数株之岩柳。烟罗系树，卓立全倚他人；霜叶离柯，飘零不由乎自己。画似棱棱之枯木，孤苦伶仃；形如泛泛之浮萍，贫穷漂泊。无异岩之怪石，营生；有如耸拔之奇峰，孤高处世。金绳铁索，此非岩谷之幽人；玉树瑶琴，定是邦家之良佐。乱丝缠结，定知公事牵连；利刃交加，即是私家格角。撇如罗带，除遇阴人；捺似拖钩，刑伤及已。勾似锦靴，遭逢官贵；画成横枕，疾病临身。切忌横冲半断，不保荣身；仍嫌直落中枯，难言高寿。剔成新月，出门便见光辉；点作星飞，守旧宁无晦滞。至若挥毫带煞，秉生死之重权；落纸无成，作奔趋之贱役。起腾腾之秀气，主有文章；生凛凛之寒光，宁无声价。半浓半淡，作事多乖；倚东倚西，撑持不暇。字短则沉沦不显，字长则潦倒无成。拾后拈前，所为险阻；忘前顿后，举动趄。且如偃仰遇庶人，则成号泣；若是拘挛逢君子，乃是刑囚。君子必定飞腾，庶人必能勤苦。造其理也，即此推之。余向遇异人，曾授玄黄诸篇；今遇异翁，授此赋毕，问之曰：“愿得公之名姓。”公不答而去。</span>
  </p>
  <a name=c146></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218905>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">齐景至理论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天下之妙，无过一理。理既能明，在乎明学。学者穷究，莫难乎性。性既明达，其理昭然。显苍颉始制之时，观迹成象；以之运用，应变随机。且释老梵经，王勃佛记，迨今飞轮宝藏之内，既深且宁。非高士莫得而闻。何由睹之？其汉高有荥阳之围，以木生火，终不能灭。有人梦腹上生松，丝悬山下，后为幽州刺史。松为十八公，不十为卒。《春秋》说十四心为德。《国志》云：口在天上为吴。《晋书》：黄头小儿为恭。以人负吉为造。八女之解安乐山，两角女子绿衣裳，端坐太行邀君主，一正之月灭亡，正月也。郭璞云：永昌有昌之象，其后昌隆。罗，四维也。其偶如此。且人禀阴阳造化，凭五行妙思，一言一语，一动一静，然后挥毫落楮，点画勾拔，岂不从于善恶，得之于心，悬之于手。心正则笔正，心乱则笔乱；笔正则万物咸安，笔乱则千灾竞起。由是考之，其来有自。达者以理晓，昧者以字拘，难莫难于立意，贵于言辞。立意须在一门，言词务在必中。余幼亲师友，温故知新，志在进取场屋，为祖宗之光。遂乃屈身假道，每以诗酒自娱。渡江乘兴，偶信卜于岩谷，观溪山之清流，闻禽鸟之好音，殆非人世。忽见一人，道貌古怪，披头跣足，踞坐磐石之上。余由是坐之于侧，良久交谈之际，询余曰：“子非齐景乎？”余惊讶。预知姓名，疑其必异人也。遂答之曰：“然。”异人曰：“混沌既判，苍颉制字者，余也。自传书契于天下，天下大定。后登天为东华帝君。今居于此，乃东华洞天。余曾有奇篇，昔付谢石，今当付汝。今子之来。可熟记，速去，不然尘世更矣。”于是拜而受之，退而观其奥妙，乃《玄黄妙诀》神机解字之文。得其方妙，如谷之应声，善恶悉见，祸福显然，定生死于先知，决狐疑于预见。后之学者，幸珍贵之。</span>
  </p>
  <a name=c147></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218906>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字画经验</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">敷字：昔者任宰，请拆字，云此字十日内放笔。果以十日罢任。家字：凡人写此，家宅不宁。“空”字头，“豕”应在亥月者也。荆字：“艹”而刑，不利小人，大宜君子。砚字：有一字天出之乱尔，见明之兆。典字：曲折多，四七日有典进之兆，贵人必加官进禄，雅宜便，四十日有进纳之喜。果字：凡事善果披剃，盖口中无才，又云进小口。马字：昔有马雅官写马字无点，马无足不可动。来字：“来”带二人之才，皆未见信，行人未应，三人同来，财午未年发。葵字：逢春发生，又占名利逢癸可发。占病不宜，廿日有惊恐之兆。但字：如日初升，常人主孤，凡事未如意，十日身坦然。谦字：故人嫌，盖无廉耻，目下有事，多是非。亨字：高不高，了不了，须防小人，不足及外孝不祥。达字：廿日未达，即日并不须，少喜多忧。奇字：占婚奇偶未谐，应十日难，为兄弟事不全。俊字：一住一利，交友难为，父兄反复，文书千连变易，凶。常字：占病堂上人灾，有异姓异母，上有“堂”字头，下有“哭”字头。每字：昔曹石遣人相此字，异日必为人母，后果然。城字：逢丁戊日，六神动，忌。丁戊日田土不足，进力成功。池字：凡事拖延有日，逢地必利，盖添“虫”为“蛇”。春字：宋高宗写此字时，秦桧用事，相者云：“秦头太重，压日无光。”桧闻言，召而遣之。一字：土字一字王也。益字：有吏人书“益”字，廿八日有血光之厄。至期果然。田字：有人出此。相言：“直看是王，横看是王，必为大贵。</span>
  </p>
  <a name=c148></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218907>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字体诗诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">天字及二人，作事必有困；一天能庇盖，初主好安身。地字如多理，从此出他乡；心如蛇口毒，去就尽无妨。人字无凶祸，文书有人来；主人自卓立，凡事保和谐。金字得人力，屋下有多财；小人多不足，凡事要安排。木字人未到，初生六害临；未年财运好，切莫要休心。水字可求望，中妨有是非；文书中有救，出入总相宜。火字小人相，中人发大财；灾忧相见过，日下有人来。土字日下旺，田财尽见之；穿心多不足，骨内主分离。东字正好动，凡中早求人；牵连须有事，财禄自交欣。西字宜迁改，为事忌恶人；心情虽洒落，百事懒棲身。南字穿心重，还教骨肉轻；凡事却有幸，田土不安宁。比字本比和，不宜分彼此；欲休尚未休，问病必见死。身字主己事，侧伴更添弓；常藉人举荐，仍欣财禄丰。心字无非大，秋初阴小灾；小人多不足，夏见必灾来。头来须鄙衰，发可却近贵；要过子丑前，凡事皆顺利。病来如何疾，木命最非宜；过了丙丁日，方知定不危。言字如何拆，人来有信音。平生多计较，喜吉事应临。行字问出入，须知未可行；不如姑少待，方免有灾惊。到字若来推，出入尚颠倒；虽然吉未成，却于财上好。得来间日下，宁免带勾陈；凡事未分付，行人信不真。开字无分付，营谋尚未安；欲开开不得，进退两皆难。附在问行人，行人犹在路；为事却无凶，更喜有分付。事字事难了，更又带勾陈；手脚仍多犯，月中方可人。卜字求测事，停笔好推详；上下俱不足，所为宜不详。望字逢寅日，所谋应可成；主须不正当，却喜有功名。福字来求测，须防不足来；相连祸福迫，一口又兴灾。禄画有阴阳</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">长中有短，为阳为阴。短中有长，为阴中阳。粗细轻重，以此为例。阳中有阴，则佳，阴中有阳，反凶。壬字头画，是阳中有阴；任字头画，是阴中有阳。水笔不流，流则不佳。戴流珠，名瑛星，小人囚系。取福下至上一三，取祸上至下一三。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字无祖产，当知有五成；小人生不足，小口有灾惊。贵字多近贵，六六发田财；出入须无阻，宜防失落灾。用字主财用，有事必经州；谁识阴人事，性王并姓周。康字未康泰，宜防阴小灾；所为多不逮，财禄亦难来。宁字占家宅，家和人口增；财于中主发，目下尚伶仃。吉字来占问，反教吉又凶；因缘犹未就，作事每无终。宜字事且且，须知在目前；官非便了当，家下亦安然。似字众人事，所为应不成；独嫌人力短，从众则堪行。多字宜迁动，死中还得生；事成人侈靡，两日过方明。古字多还吉，难逃刑克灾；虽然似喜吉，口舌却终来。洪宜人共活，火命根基别；事还牵制多，应是离祖业。香字忌暗箭，木上是非来；十八二十八，好看音信回。清字贵人顺，财来蓄积盈；阴人是非事，不净更多年。虚惟头似虎，未免有虚惊；凡事亦可虑，仍防家不宁。远字事多达，行人有信音；为事既皆遂，喜吉又来临。同字如难测，商量亦未然；两旬事方足，尚恐不周员。众字人共事，亦多生是非；所为应不敛，小口有灾危。飞字须可喜，反复亦多非；意有飞腾象，求名事即宜。秀字多不实，无事亦孤刑；五五加一岁，还生事不宁。风字多无宁，逢秋愈不吉；疾多风癣攻，更防辰戌日。天字已成天，亦多吞噬心；事多蒙庇盖，行主二人临。元字二十日，所为应有成；平生刑克重，兀兀不安宁。秋字秋方吉，小人多是非；须知和气散，目下不为宜。申字是非长，道理亦有破；终然屈不伸，谋事难为祸。甲字利姓黄，求名黄甲宜；只愁田土上，还惹是和非。川字如来问，当知有重灾；仍防三十日，不足事还来。墟字若问事，虎头蛇尾惊；有人为遮盖，田土不安宁。辰字如写成，主有变化象；进退虽两难，功名却可望。青字事未顺，须知不静多；贵人仍不足，日久始安和。三字多迁改，为事亦无主；当知二生三，本申一生二。入如来问测，分字亦安让；凡事多费解，仍防公扰忧。字须有学识，初主似空虚；家下不了事，名因女子中。士为大夫体，未免犯穿心；括括是非散，番多吉来临。</span>
  </p>
  <a name=c149></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218908>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">四季水笔</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">春水昏浊，夏水枯固，秋水澄清，冬水凝结。水为财，忌居乾、兑、坎。了、乙、子、点不为杀，必为贵人。</span>
  </p>
  <a name=c150></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218909>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">画有阴阳</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">长中有短，为阳为阴。短中有长，为阴中阳。粗细轻重，以此为例。阳中有阴，则佳，阴中有阳，反凶。壬字头画，是阳中有阴；任字头画，是阴中有阳。水笔不流，流则不佳。戴流珠，名瑛星，小人囚系。取福下至上一三，取祸上至下一三。</span>
  </p>
  <a name=c151></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218910>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦断</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾宫笔法如鸡脚，父母初年早见伤；若不早年离侍下，也须报疾及为凶。坤宫属母着荣华，切忌勾陈杀带斜；一点定分荣禄位，一生富贵定堪夸。艮位排来兄弟宫，勾陈位笔性他凶；纵然不克并州破，也主参商吴楚中。巽宫带口子难逢，见子须知有克刑；饶君五个与三个，未免难为一个成。震位东方一位间，要他笔正莫凋残；若逢枯断须沾疾，腰脚交他不得安。离是南方火位居，看他一点定荣枯；若还圆净荣官禄，燥火炎炎定不愚。坎为财帛定卦位，水星笔横占他方；若见笔尖无大小，根基至老主荣昌。兑位西方太白间，只宜正直莫凋残；若然坑陷并尖缺，妻子骄奢保守难。</span>
  </p>
  <a name=c152></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218911>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">相字心易</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡写两字，只看一字。盖字多必乱。若谋事之类，亦必移时，方可再看。</span>
  </p>
  <a name=c153></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218912>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">辨字式</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">富人字，多稳重，无枯淡。贵人字，多清奇，长画肥大。贫人之字，多枯淡，无精神。贱人之字，多散乱，带空亡。百工之字，多桃。商字，多远迩。男子字，多开阔。妇人字，多逼侧。余皆浓淡肥瘦，斜正分明之类断之。</span>
  </p>
  <a name=c154></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218913>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字画指迷篇之二</span>
    </a>
  </h1>
  <a name=c155></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218914>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">笔法筌蹄</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡书字法，有浓淡肥瘦，长短阔狭，反复顺逆，曲直高低，大小软硬，开合清浊，虚实凹凸，平正斜侧，圆满直牵，明白轻快，稳重挑，勾挽破碎，枯稿尖削，倒乱鹘突，孤交加，肥满尖瘦，刚健精神，艳冶气势，衰弱小巧，软满老硬，骨棱草率，开合之分，各有一体，难以尽述。学者变化，知机其神。笔画歌笔画稳重，衣食丰隆。笔画平直，丰衣足食。笔画端定，衣禄铁定。笔画分明，决定前程。笔画圆净，富贵无并。笔画肥浓，富贵无穷。笔画洁净，功名可决。笔画轻快，诸事通泰。笔画刚健，力量识见，笔画精神，必有声名。笔画光发，荣显达。笔画气势，慷慨意志。笔画宽洪，逞英逞雄。笔画尖小，其人必了。笔画如线，有识有见。笔画似绳，一世平宁。笔画挑剔，好巧衣食。笔画乌梅，面相恢恢。笔画懒淡，兄弟离散。笔画分，破家必早。笔画弯曲，好巧百出。笔画迭荡，一生浮浪。笔画枯槁，财物虚耗。笔画糊涂，愚蠢无谋。笔画粘滞，是非招怪。笔画大小，有歉有好。笔画高低，说是说非。笔画淡泊，疮痍克剥。笔画反复，心常不足。笔画破碎，家事常退。笔画倚斜，飘泊生涯。笔画恶浊，无知无学。笔画如蛇，常不在宅。笔画偏侧，衣食断隔。笔似鼓槌，至老寒微。笔势如针，此人毒心。笔势勾斜，官事交加。笔势如勾，害人不休。笔势散乱，财谷绝断。笔格常奇，诀以别之。奴婢恰似霜天一叶飞，画如木檐两头垂。画轻点重君须记，画定前趋后拥儿。阴人阴人下笔意如何，只为多羞胆气虚。起处恰如争嘴样，却来下笔定徐徐。隔手隔手书来仔细详，见他纸墨字光芒。更看体骨苏黄格，淡有精神是贵朗。视势每遇人写来，必别是何字。如“天”字，乃是“夫”字及“失”之基址。女人写妨夫，男子写有失。象人凡字必别是何人写，亦象人而言，如“天”字，秀才问科第，今年尚未，当勉力读书，来年有名望及第；官员求官亦未，宜勉力政事，主来年得人荐举受恩；若庶人占之，病未安，用巫方愈；讼者未主费力，必被官劾断之。“天”加直成“未”，再加点成“来”，来力成其“刺”。有所喜如问财，见金宝偏旁及禾斗之类，决好。有所忌如问病见土木，及问讼见血井之类，皆凶。有所闻如问病忌闻悲泣声，占财不宜破碎声。有所见如“立”字见雨下或水声，则成“泣”字。又如“言”字见“大”成“狱”字，问疾讼皆忌之。以时而言如“草”、“木”字，春夏则生旺有财，秋冬则衰替多灾。风云气候之类亦然。以卦而断如“震”字，春则得时，冬则无气，皆以其卦言之。以禽兽而断如“牛”字，则为人劳苦，春夏劳苦，秋冬安逸。取类而言如“楼”字，笔画多，不可多解，以“楼”取义，乃“重屋”也，重屋拆开，乃千里尸至。问字人必有人死在外，尸至之事。以次而言如字先写笔画，喜则言吉，次则言凶，又次则言半凶半吉，以次加减，亦察人之气也。当添亦添且如官员写“尹”字，乃“君”字首断，其人必见上位，定不禄而还。以“君”无“口”故也。如书“君”字，乃是“郡”旁，其人当得郡。当减亦减如“树”字中有“吉”字，写得好者，则减去两边，只是言吉。笔画长短如“吉”字，上作“士”字，终作士人；如作“土”字，乃“口”在下，问病必久。若身命属木，自身无妨；屋下木土生，不过十日必亡。如“常”字，上作“小”字，只是主家内小口灾，不为大害；若上草作“小”，如此写乃是“灾”字头，中乃“门”字，下是“吊”字，主其人大灾患临头，吊客入门大凶。然亦须仔细，仍观人之气色，象人而言。如土人气色黑，恶其必退；若土命者必死，俱不过十日。偏旁侵客如“”字乃“家”头，如“”写，及是破家宅，无其家必退；如此“山”写，必兴门户，乃是“山”字形；如“山”有缺笔，乃是悬针之山，必大凶也。字画指迷如“人”字，正人作贵相；睡人作疾病；立人傍托人；双人傍作动人，其人逆多顺少；“从”作二人相从，“”作群党生事；“坐”人作阻隔，“更作闲作人。如“申”字，作破田煞，常人不辨破田之说，用“事”、“重”成之义也。如“田”字，藏器待时，头足有所争，争而有所私，忌田产不宁。如“”字，作横“山”，取之衣禄渐明矣，又作日间防破。如“黄”字，作“艹一”后，方得萌芽；又作“廿一”用，可喜也。又云：上有一堆草，中有一条梁，撑杀由八郎。如“言”字，有谋有信，取之如草之作木，取之心不定也。如“心”字，三点连珠，一勾新月，皆清奇之象。或竖心“性”、“情”，作“小”人之状，近身作“十”字，作穿心六害，取凡百孤独。如“寸”字，亦心也，一寸乃十分，为人有十分之望，谋望有分付也。又作“一十”取之。如“辛”字，乃六七日内见，立用于求远，作“六十一日”，或云：有辛相成也。问婚姻凡事写得相粘者，可成；又字画直落成双者，可成。字中间阔而不粘，及直横成双者，偏旁长短者不成。凡字写得脚匀齐者，皆“就”字；四齐者，尤“吉”字。上短下长者，日久方成。字乾上有破，父不从；坤宫破，母不从。左边长者，男家顺女家不肯；右边长者，女家顺男家未然。官事或见文字，或字脚“一”、“丿”、“乙”破碎，断有杖责。或见“牛”字，有牢狱之忧，土人大失。或木笔开口者，亦有杖责。字划散乱者易了。或有“丿”、“”长者、耸者，亦有杖刑。或见杖竹之类，亦有打兆。火命人写“水”字来问，必有官灾。或字有草头者，说草头姓，得力之类。疾病金笔多，心肺痰，脏腑疾，西方金神为祟。木笔多，心气疾，手足病，木神林坛为祟。水笔多，泻痢吐呕之症，水鬼为凶。火笔潮热，伤寒时行，火鬼为怪。又云四肢疼，时气疾病，火笔多者，病不死。土笔多，脾胃兼疮疾，客云伏尸鬼，疼痛之疾。土笔多者，病死字。凡有“疾”字、“虎”字头或两“口”字者，皆难救。六甲字凡有“喜”字、“吉”字体者，皆吉。字凡带白虎笔，难产，子必死。写得粘者，易产；字画纤断者，主有惊险。字有螣蛇笔者，主虚惊。字画直落成双者，女喜；成单者男喜。求谋凡事写得中间阔者，所谋无成。“谋”字写得相粘者，二十四五前成，盖有隔字体故也。“求”字来问者，木命人吉，土人不利。行人远信如“行”字写得脚短，二般齐者，人便至。字脚或不齐，行人皆不至。字画直落点多者，其人必陷身。字画少者，人便至。乃详字体格范。官贵凡事有二数，一点当先者，无阻，事济。所写之字相粘伶俐者，贵人顺。点多者事不成。失物凡字有“失”字体，则失物皆难觅。朱雀动，有口舌，日久难寻。金笔多，艮土有破，五金之物宜速寻。土笔多，坎上有破碎之物，在北方古井，或窑边及坑坎之所，瓦器覆藏，五日见。坤上有一钩者，乃奴婢偷去，不可取得。兑上不足，乃妻妾为脚带，金人将去。离上一划不完者，乃南方火命人将去，见官方，失物仍在。问寿字画写得长向瘦者，寿耐久。如肥壮者，耐老。若短促者，无寿。功名字有“贵”人头者，有功名。字体金笔多而端正，及木笔轻而长者，皆贵。行人“人”字潦倒，未动；写得“人”字起者，已动；人以“来”字问者，未至，“行”字问者，且待。凡字中有“言”字者，有信至，人未至也。反体“喜”字来问者，未可言喜，有“舌”字脚。有以“庆”字来问者，未可言庆，有“忧”字脚。“星”字来问者，日在上，星辰不见，问病必凶。大凡文人不可写“武”字，武人不可写“文”字，阴人不可写“阳”字，阳人不可写“阴”字。皆反常故也。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c156></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218915>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">六神笔法</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">“八”青龙木，“ㄨ”朱雀火。“ㄅ”勾陈土。“の”螣蛇无定位。白虎金。“厶”玄武水。蚕头燕额是青龙，两笔交加朱雀凶。玄武怕他枯笔断，勾陈回笔怕乾宫。螣蛇草笔重重带，白虎原来坤位逢。此是六神真数诀，前将断语未流通。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c157></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218916>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">六神主事</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">青龙主喜事，白虎主丧灾，朱雀主官司，勾陈主留连，螣蛇主妖怪，玄武主盗贼。六神都静，万事咸安。莫交一动之时，家长须忧不测。若非财散，必主刑囚狱讼。青龙形式“ヘ”、“丿”青龙要停匀，百事皆吉。青龙笔动喜还生，谋用营求事事通。人口增添财禄厚，主人日下尽亨通。朱雀形式朱雀临身文书动，主失财，有口舌，生横事，忌惹人，有忧惊之事。朱雀交加口舌多，令人家内不安和。若逢水命方无怪，他命逢时有怨疴。勾陈形式“勹”勾陈主惊忧之事，迟滞，忌土田官司，是非未决，并惹闲非。勾陈逢者事交加，谋事中间事事差。田宅官司多浇括，是非门内有喧哗。螣蛇形式“の”螣蛇主忧虑，梦不祥，作事多阻，有喧争，惹旧愁，宜守静。螣蛇遇者主惊虚，家宅逢之尽不宁。出入官谋宜慎取，免教仆马有灾形。白虎形式“几”白虎主有不祥之兆，产病有孝服，及官鬼，惹口舌，在囚狱。白虎逢之灾孝来，出门凡事不和谐。便防失脱家财损，足疾忧人百事乖。玄武形式“厶”玄武贵人华盖，主盗财，亦难寻。玄武动时主失脱，家宅流离慎方活。要防阴人有灾危，又至小人生拮括。笔画犯煞无风麟丁断伏口活法っ用煞日连图（带）曰隔伏丁欹伏っ衡伏っ悬针冲伏っ流金ㄟ活金伏曲曲伏死金活火厶死火螣蛇死土蛇土刀隔伏</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c158></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218917>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">玄黄笔法歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">丁反反旁无一好，十个十重灾；旁里推详看，临机数上排。廴走走远字如何，须防失脱多；若还来问病，死兆不安和。子系系绞同丝绊，干事主留连；却喜财公问，傍看日数言。阝卩附邑傍边事，当从左右推；兑宫知事定，震位事重为。灬二四点皆为火，逢寅过于通；若还书一画，百岁尽成空。亻彳卓立人傍字，谋为倚傍成；若还来问病，死去又逢生。之辶之绕身必动，看其内必凶；问病也须忌，其作却少通。弓弓伴休乾用，反处日难凭；先自无弦了，如何得箭行。山冗冗下灾祸字，占家更问官；更推从来用，凶吉就中看。人氵两点傍边字，还知凝滞攒；要问端的处，傍取吉凶看。吕叩双口相排立，因知恸哭声；各逢于戈日，亦主泪如倾。户尸户下尸不动，休来占病看；其余皆是吉，即断作平安。阝阜阜邑傍边字，当为仔细推；兑宫知事息，震位又重为。衣礼礼字傍边折，必定见生财；疋字如定见，须从人正来。月骨骨傍人有祸，囚狱一重来；门内生荆棘，施设不和谐。身自自家身傍限，分明身不全；有谋难得遂，即日是多煎。反定定绕自来看，身必有所定；吉凶意如何，相裹临时用。山山下灾祥字，占家宜用官；更推从西用，凶吉数中安。人欠欠字从西体，须知望用难；吹嘘无首尾，不用滞眉看。禾禾边山则刑，春季则为殃；夏日宜更改，人中好举扬。耳耳畔虽有纪，轻则是虚声；旺事宜重用，取谋合有成。</span>
  </p>
  <a name=c159></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218918>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五行体格式</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">水笔式水圆多性巧，浊者定昏迷；水泛为不定，己水走必东西。火笔式丶火重性不常，厶火燥见灾殃；彡火多攻心腹，乙火轻足衣粮。土笔式一土重根基好，一土轻离祖居；土滞破田宅，土定无虚图。金笔式口金方利身主，亻金重性多刚；金走为神动，已慷慨及门墙。木笔式木长性聪明，丨木短定功名。川木多才学敏，冫木斜废支撑。</span>
  </p>
  <a name=c160></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218919>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">时辰断</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">看字先须看时辰，时辰克应不相亲；时辰若遇生其用，作事何忧不趁心。此字中笔一要紧用也。</span>
  </p>
  <a name=c161></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218920>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">起六神卦诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">甲乙起青龙，丙丁起朱雀，戊日起勾陈，己日起螣蛇，庚辛起白虎，壬癸起玄武。附例：今以甲乙丙丁日附载为式，余仿此。六爻五爻四爻三爻二爻初爻甲乙日例：玄武白虎螣蛇勾陈朱雀青龙丙丁日例：青龙玄武白虎螣蛇勾陈朱雀</span>
  </p>
  <a name=c162></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218921>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">字画指迷篇之三</span>
    </a>
  </h1>
  <a name=c163></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218922>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">辨别五行歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">（一）横画连勾作上称；一挑一捺俱为金；撇长撇短皆为火；横直交加土最深；有直不斜方是木；学者方明正五行。（二）一点悬空土迸尘；三直相连化水名；孤直无依为冷木；腹中横短作囊金；点边得撇为炎火；五行变化在其中。（三）三横两短若无钩，乃是湿木水中流；两点如挑金在水，八字相须火可求；空云独作寒金断，好己心钩比木舟。（四）无钩之画土稍寒，直非端正木休参；围中横满无源水，口小金方莫错谈；四匡无风全五事，用心辨别莫迟难。（五）穿心捺撇火陶金，走之平稳水溶溶；直中一捺金伤木，踢起无尖不是金；数点笔连休作火，奇奇偶偶水源清。（六）无直无钩独有横，水用土化复何云；点挑撇捺同相聚，共总将来化土音；四点不连金化火。孤行一笔五行同。</span>
  </p>
  <a name=c164></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218923>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">辨别六神歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">蚕头燕额是青龙，失短交加朱雀神，弯弓斜月勾陈象，螣蛇长曲势如行，尾尖口阔为白虎，体态方尖玄武行，此即六神真妙诀，断事详占要认真。</span>
  </p>
  <a name=c165></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218924>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五行并歌式</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">木瘦金方水主肥，土形敦厚背如龟，上尖下阔名为火，字像人形一样推。木式丨：有直不斜方是木，即此是也。凡字有木，不偏不倚，始为木。若无依靠上下左右者，此系冷木。故云：“直无倚为冷木。”另作别看。三：此乃湿木也。歌曰：“三横两短又无钩，乃为湿木水中流。”此土化水也。如“聿”字下三横，“春”字上三横，皆为湿木。凡有钩之横，及三横不分短长者，皆非木也。乙：此舟船木也，象如勾陈属土。邵子云：“好把心钩比木舟。”故借作舟船木用。如占在水面土行等事，即作舟船木用。如占别用，论勾陈，仍作土看。在占者临时变化，切不可执一而论也。メ：此木被金伤也。一样属金，故云：“直中一捺金伤木”。凡占得此木，为用伤者，皆主不得其力也。干支辨直长为甲亦为寅，细短匀为乙木身。孤直心钩兼湿木，干支无位不须论。車：假如“车”字，中央一直，彻上彻下，强健无损，则属阳，所以为甲木寅木，余皆仿此。幸：如“幸”字，上一直下一直，皆短弱，属阴。所以作乙卯木论也。凡一直细弱，木健即长如“车”之直，亦作乙卯木看。其心钩舟船木，并三横两短木，一概不在干支论。因其不正故也。火式丿：撇长撇短皆为火，此式是也。ソ：点边得撇为炎火，此即是也。要一点紧紧相连，始合式。如不联属点，仍属火，非炎火看也。八：八字相须火可求，此余火也。如“八”字，捺长则一撇为火，一捺另作金看。灬：四点不连真化火，此真火也。如四点牵连不断，则属水，非火论也。干支辨撇长丙巳短为丁，午火同居短撇中。八字螣蛇兼四点，天干不合地支冲。庐：假如“庐”字撇长，则取为丙火巳火用。丙巳属阳，故用撇长者当之。余仿此。從：如“從”（从）字，撇多皆短，则取为丁火午火用，丁午属阴，故用短弱者当之。邵子之作，皆有深理存焉。余仿此。如“八”字、“四点”，皆火之余，俱不入干支论。土式フ：此“横画连勾作土称”是也。如用画无勾，直无撇捺相辅，此为寒土化水用，故无直无勾独有横。土寒化水，复何云也。如“二”字、“且”字、“竺”字之类也。如“血”字、“土”字，与直相连，仍作“土”看。十：歌云：“横直交加土最深”。即此是也。凡横画有一直在内为木，非深厚之土，不能培木，所以云“土最深”也。余仿此。丶：歌云：“一点悬空土进尘。”此乃沙尘土也。凡“求”字、“戈”字，未后一点，皆是。如“文”字、“童”字，当头一点属水，不在此论。“凉”字、“减”字，起头一点属水，不在此论。一：此无勾之画，为寒土。解见前。冫八：此点挑捺同相聚，其总将来化土音，作土看。干支辨横中有直戊居中，画短横轻作己身。未点勾陈皆丑未，长而粗者戊辰同。凖：假如“聿”字之类，第二画长，未后一画长，余画皆短，明长者为阳土用，短者为阴土用，必取横中有直者为凖。如无直者，及无依辅者，另看轻细，虽长亦作阴土。求：假如“求字之点，可用己土丑未用，其挑撇点捺，同柏聚无名之土，不入于干支之论也。金式√：歌云：“一挑一捺俱为金。”即此是也。挑起定要有锋尖，始为金。如踢起无尖，又非金看也。ヘ：捺要下垂始为金。如走之平平，又变水看矣，学者辨之，不可不明。口：“口小金方”。即此是也。如“因”字、“国”字、“匡”字，四匡大者皆非。目：歌曰：“腹中横短是囊金”。假如“目”字中两横短，而作囊内之金看；如两横长满者，乃国中横满无水，又不作“金”用也。如“目”中用两点非横者，亦是水非金也。余仿此。氵：此两点加挑，金在水，云金乃水中之金也。几：此空云独作寒金断，乃寒金也。ㄨ：穿心撇捺火陶金，此金在火中也。干支辨：口字为庚亦作申，挑从酉用捺从辛；空头顽钝囊金炒，不在干支数内寻。喜：假如“意”字，上下两口皆属阳，取其方正故也，俱为庚金申令用。扒：假如“扒”字，挑才一挑，取为酉用；八字一捺，取为辛用，因其偏隘，故作阴金用。余仿此。水式此“一点当头作水称”乃雨露水也。歌出邵子旧本。又云：“有点笔清皆作水”，云有点属水也。又“一点悬空土迸尘”，点在未后一点化水，解见前。四点相连，又化作火，亦见于前解也。川：此三直相连化水，取“川”字之义也。曰：此字中央一满画，乃无源之水也。如画短不满者，不是水，另作另看。辶：此走之平稳，水溶溶。捺之下垂，故作水看也。灬：此数点相连，野水也。即四点，笔迹不断，亦作水看。一：此土寒化水也。凡有依附者即非，仍作土看也。干支辨点在当头作癸称，腹中为子要分明；点足为人腰在亥，余皆野水不同群。文：假如“文”字一点，即为癸水，癸水乃雨露之源，因其在上故也。余仿此。月：假如“月”字，腹中之点即为子水，因其在内故也。凡“勺”字、“目”字、“等”字皆同用。余仿此。景：如“景”字，中央一点，乃亥水；下二点为壬水。故点足为壬，腰作亥，取江河在下义也。余仿此。</span>
  </p>
  <a name=c166></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218925>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">拆字杂编篇之一</span>
    </a>
  </h1>
  <a name=c167></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218926>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五行全备</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">一点一画五行全，试看首尾秘为占。点画若无疵笔露，功名发达享高年。如一点端正无破绽，鸦嘴等形，则是五行全，如不合式，仍属水，亦五行全。此象乃庖羲氏画卦之初，混元一气之数也。此太极未分时，亦五行全大之象也。口：歌曰：“四匡无风全五行”，是亦五行全也。如“出”字、“园”字之类，四匡紧紧不透风，乃是。如笔稀者，不是。口小者属金，亦不是。此地之象也。</span>
  </p>
  <a name=c168></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218927>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">六神形式</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">青龙：丿ヘ蚕头燕额是青龙。凡撇捺长而有头角之样，即作青龙。如撇短，则不足。如成青龙之式，不拘撇捺，皆化木。如无须角，虽长亦非青龙。朱雀：ㄨ尖短交加朱雀神。撇短而有尖嘴之形则为朱雀，主文书事，原属火，无化。螣蛇：乙乞螣蛇长，曲势如行，皆化火看，亦主文书及惊怪等。勾陈：ㄅ弯弓斜月色陈象。凡带长者是也。属土无化，主羁滞。白虎：兄几主尾尘口阔方为虎。口不开者非虎也。化作金用，主疾病，凶兆也。玄武：厶么云体态方尖玄武形。化木，主盗贼事，又主波浪险阻等事。</span>
  </p>
  <a name=c169></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218928>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦辨</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">口形为兑捺为乾，三画无伤乾亦然。三点同来方是坎，撇如双见作离占。土山居上名为艮，居下为坤不必言。蛇形孤撇皆从巽，云首龙头震占先。详明八卦知凶吉，学者参求理自全。贵神：中、上、贝、日、月、大、人。喜神：士、口、言、鸟。福神：不、田。（凡子孙动者，亦作福星看。）文星：二、ㄨ、曰、子。印星：Е、口、囗、子。马星：フ、灬、辶、走。禄神：甲禄在寅，乙禄在卯，丙戊禄在巳，丁己禄在午，庚禄在申，辛禄在酉，壬禄在亥，癸禄在子。（俱以占者辛庚本命，于求之笔画为准。如甲命人，即以字中长直为禄。余仿此）。会神：田、曰、云、禺。生神：一、丶、元、甲、子、初。（盖一者，数之始；元者，洪蒙之初；甲子者，乃干支之首。盖皆为生神之用也。）亡神：十、千、百、万、贞、亥、癸。（十、千、百、万皆数之终；贞乃元之尽；亥、癸是干支之末。故为亡神。）家神：宀、乇、火（灶神以四点同）、土（土者奥神是也）、堂（堂者，香火神是也）、水（水者，井神等，三点亦同用）。官符：宀、付、。文书：二、、丿、乙、朱雀、螣蛇皆是。灾煞（即病符）：巛、宀、火、广、丙、矢。（字中见“旧”、“太岁”亦为病符星。）天狗煞字中见太岁，前年干支是也。（如子午见戌，甲年见子，皆是。）科名星：未、斗（以本人年甲所属是科名。如甲乙以一直，丙人以一撇，皆科名也。余仿此。）丧门：白、氏、兄。空亡：即六甲空亡，“甲子旬中空戌亥”之类是也。（假如甲子旬中空占，即以腰间一点为亥空，以长画为戌空。余皆仿此。）宜神：子为财之宜神，鬼为父之宜神，兄为子之宜神，财为鬼之宜神，父为兄之宜神是也。忌神：子为鬼之忌神，鬼为兄之忌神，兄为财之忌神，财为父之忌神，父为子之忌神是也。主神：眼前小事日干寻，代友占亲看纳音；疾病官非祥本命，字中末笔主终身。（假如占眼前出行、求财等事，俱以日干生克字中笔画为主。如替人问事，以本日纳音为主。如疾病官非，又以本人年干为主。如占自己终身，俱以末后一笔为主。看生克衰旺而详占之。）用神：官鬼父母才兄子，据事参详要仔细；认定一笔作用神，此为相字真消息。（假如占功名用官鬼，占生意用财爻，据事而取用神，只以一笔为主，详其旺相休囚，以定吉凶。）</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c170></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218929>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">七言作用歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">用神加直五行真，谋望营为百事成；疾病官非兼口舌，纵逢凶处不成凶。（此金木水火土真字皆宜用，乃五行真也，诸事皆利。）年午所属是科名，未头皆为首占星；有此求名皆遂意，如无考试定成空。（凡占科名，必要科名入数，再兼官鬼文书动而旺相，功名可成。如无科名莫许。）求名之数禄神临，始断今科考事兴；若遇科名同在数，自然高荐遂平生。（禄神即甲禄在甲……是也。）有田有日会神兴，见客逢人不必寻；马星原是弯弓脚，四点原来用亦同。（凡谒贵、寻人、俱要会神；行人，俱要马星妙。）土头口体喜神俱，嫁娶婚姻百事宜；只怕重重见火土，许多克伐反非奇。（“土”属土，怕木；“口”属金，怕火。所以见木、土反非吉也。）笔清墨秀琢磨深，方正无偏必缙神；疾走龙蛇心志远，行藏慷慨立三公。又：字兼骨格有精神，窗下功夫用得深；笔迹丰肥金见火，诗书队里久陶镕。又：金木重重见贵神，笔挥清楚主聪明；耸直一行冲宝盖，富贵荣华日日新。又：方圆端正笔无尘，年入登科入翰林；只恐弱木逢金克，缠身疾病不明萌。又：木形之字有精神，可云发达耀门庭；火多年少心多燥，水盛为人智必清。又：一直居中勇更明，少年黾勉得功名；未笔再逢金土厚，当官享禄更廉明。又：笔端势小事无成，粗俗须知业不精；起头落笔如莺嘴，心里奸谋刻薄人。又：土形之字活而圆，用神清楚是英贤；笔底到头无间断，一家荣耀有余钱。又：字贬无神笔更联，公门吏卒度余年。勉强操觚无实学，欺人长者被人嫌。又：战兢惕厉若临渊，静里修持反有年；写笔果然无俗气，终须榜上有名填。又：日月当头笔迹强，精神骨格字无伤；国家梁柱何消息，更有奇衷佐圣疆。又：衣食身傍黑带浓，最嫌软弱与无神；字中人口如枯暗，莫待长年主恶终。又：下笔头高志必雄，落头不是正经人；尖头秃笔人无智，老死衙门不得名。又：一字忙忙写未全，有头无尾不须言；作事率然多失错，琢磨早失在当年。又：宁无骨格少精神，一生多耗病沉沉；问名带草索连就，满腹文章亦落空。又：草写香花定主贫，弱软干枯又苦辛；于中若是为官客，几日新鲜一量倾。</span>
  </p>
  <a name=c171></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218930>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">比例歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">（一）斗日来占事不差，无心书鬼状元家。功名第二推为政，舜字登科作探花。（二）辰时执笔若书才，大振声名事必来。正午书言真是许，水旁写半见泮开。（三）逢三书八事能成，照例推之理便通。申车不乱推联捷，数逢三一始为真。（四）二人同到读书余，一定其间事有徐。间失执金知是铁，始为一举反三隅。此例之类，不过详其理也，暂录四首，为后学之门，作仿此。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">西江月要见卦爻衰旺，端详其内章图，欲知事物识天机，细把《玄黄》篇记。临占观形察物，叶音即义断之。若逢王者世为奇，君免猜疑直示。</span>
  </p>
  <a name=c172></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218931>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">拆字杂编篇之二</span>
    </a>
  </h1>
  <a name=c173></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218932>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">易理玄微</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">昔李淳风见赤黑二马入河，人问二马何先起。有人演得离卦云：“离为火，火赤色，赤色先起。”李曰：“火未然，烟先发，黑马先起。”果然。</span>
  </p>
  <a name=c174></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218933>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">断扇占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">昔有一妇，其夫久客不归，因请李淳风先生求断易数。适值他出，问其子。其子见妇手中携一扇，其扇面忽然落地，因断曰：“骨肉分离，不得相见矣。”妇泣而归，恰路遇李淳风先生，妇诉其故，李断曰：“穿衣见父，脱衣见夫。不妨，尔夫今日必到。”将晚果然至家。可见各解不同，其断精微若此。</span>
  </p>
  <a name=c175></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218934>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">买香占</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">酉年八月二十五日午时，有杨客卖香。康节曰：“此香非沉。”客曰：“此香真不可及。”康节曰：“火中有木，水泽之木，非沉香也。恐是六阴之木，用汤煎煮之。”客怒而去。半月后，有宾朋至，云是清尾人，家做道场，沉香伪而不香，康节曰：“香是何人带来？但问其故，我已知之矣。”伯温令人去问，果是杨客。康节曰：“前日到门首，因观之。未问之前先失手，其香坠地。故取年月日时占之，得睽之噬嗑。睽下卦属兑，兑为泽；噬嗑下卦属震，震为木，乃水泽之木，即非沉香。睽卦上互得坎，坎为水；下互得离，离为火。上有水即汤。噬嗑卦上互见坎，坎为水；下互见艮，艮为山，中有水，亦象之象。此乃水泽久损污湿之木，以汤煮之。此理可晓。从此大小事，不可不较其时也。”</span>
  </p>
  <a name=c176></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218935>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">古人相字</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">昔谢石以折字名天下。宋高宗私行遇石，以杖于土上画一“一”字，令相之。石思之曰：“土上加一画，成‘王’字，必非庶人。”疑信之间，帝又画一“问”字，令相之。为田土所梗，两傍俱斜侧飘飞，石尤惊曰：“左看是‘君’字，右看是‘君’字，必是主上！”遂下拜。上曰：“毋多言。”石俯伏谢恩。帝因召官之。次日，召见偏殿，书一“春”字，命相。石奏曰：“秦头太重，压日无光。”上默然。时秦桧弄权，适忤桧，竟贬之边地。途中遇一女子，云能拆字。石怪曰：“世间复有如我拆之者乎？”遂书“谢”字，令相之。女曰：“不过一术士耳。”石曰：“何故？”女曰：“是寸言中立身尔。”石又书一“皮”字，令相。女曰：“石逢皮即破矣。”盖押石之卒即“皮”姓也。石大惊服。石曰：“吾亦能相字，汝可画字，吾相之。”女曰：“吾在此即字也，请相。”石曰：“人傍山立即‘仙’字，汝殆仙乎？”女笑而忽失。盖世有妙术，术有妙理，在人心耳。然数定固莫能逃也。石意不返。张乘槎善相字。浙江旧有“拱北楼”，王参政莅浙，改为“来道楼”。初揭扁，命槎相之。槎曰：“殃矣，尚何占哉？”是晚讣音果至。异日叩之故。槎曰：“未字之形，山者，墓所也；于二者，冢上树也；豆者，祭器也。其兆如此，忌非死乎？”刘尝心有所欲占，延槎而不言其事，但令射之，以验其术。槎曰：“书一字，方可占。”适有小学生在旁习字，正写《千字文》至“德建名立”一句。刘就指“德”字令占之。槎曰：“子欲占行人耳。”刘曰：“然，何时当至？”槎曰：“自今十四日必来。”刘曰：“恐事不了不肯来。”槎曰：“一心要行。”悉如所占。刘问故，槎曰：“‘德’字双立人，乃行人也。故知占行。有十四字头，故云十四日。其下又有一‘心’字形，故云一心要行也。”裴晋公征吴元济，掘地得一石，有字云：“鸡未肥，酒未熟。”相字者解曰：“‘鸡’未肥，无肉也，为‘己’；‘酒’未熟，无水也，酒去水为‘酉’。破贼在己酉。”果然。唐僖宗改为广明元年。相字者曰：“昔有一人自崖下出来，姓黄氏，左足踏日，右足踏月，自此天下被扰也。”是年黄巢在长安作乱，天下不安。宋太宗改元“太平兴国”。相字者曰：“‘太平’二字，乃一人六十寿也。”太宗果享年六十而崩。周尚干年终将换桃符，制十数联，皆不惬意。周梅坡扶箕降紫姑仙，得两句云：“门无公事往来少，家有阴功子孙多。”甚喜。大书于门。相字者曰：“每句用上三字，其兆不祥。”上句云‘门无公’，是年尚干卒于官，乃父致政亦卒，乃兄卒。俱无子。“门无公”、“家有阴”兆于先矣。</span>
  </p>
  <a name=c177></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218936>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">断富贵贫贱要诀</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">凡字写得健壮，其人必发大财，有田土好产。二画一点者，多贵为官食禄，不然，亦近贵。“才”字中或多了一画，一丿、一亦主横发财禄，多遇异贵，得成名利。或少了一画，一丿、一，其人破落弃祖，自立成败。如“名”、“目”字，写得如法，正当无缺折者，其人有名分。笔多清贵虚名。上笔多，富而贵。字中有画，当短而长，其人慷慨，会使钱近贵。字画直长而短，其人鄙吝，一钱不使。字有悬针或直落尖，皆刑六亲，伤害妻子。横画两头尖者伤妻。直落两头尖者伤子。字捩画少者孤，捩画不沾者亦孤，为僧或九流。如见十字两头尖者，穿心亦害刑妻子兄弟，骨肉皆空。字中点多者，主人淫滥漂荡，贪花好色，居止不定。十字下面脚不失者，晚得子力。如见上一画重者，平头杀，亦难为六亲；轻者，初年不足，中末如意。或点重者，为商旅发财，离乡失井，出外卓立。若水命、金命，见点画轻者，或早难有水灾；捩者，无安身之处，作事成败，主恶死不善终。直落多者，聪明机巧，为手艺之人。白手求财。画多者必有心胁脾胃之疾，木多有心气之疾，晚年见之。写“口”字，或四周有口开者，有口舌，旬日见之，或破财不足。“发”字头见者，未主发财。一字分作三截，上中下三主断之。“士”头“文”脚，主有文学。金笔灵或见于干戈字脚者，必是用武之士。凡妇人写来字，画不正者，必是偏室；或带三点，必有动意，如“三之类。凡写字之人，偶然出了笔头，此事破而无成。或近火旁写字，必心下不宁。或写字用破器添砚水，家破人亡。或写字时，犬来左右吠，不吉。或取纸来写，破碎者，主有口舌。或写字时猫叫，此人有添丁之喜。或扇上写来问，夏吉，冬不吉。如本命属金，金笔多者贵，土笔多者富。五行生克亦然，余仿此。</span>
  </p>
  <a name=c178></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218937>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">拆字杂编篇之三</span>
    </a>
  </h1>
  <a name=c179></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218938>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五行四时旺相休囚例</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">春夏秋冬四季之未</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">旺木火金水土</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">相火土水木金</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">休水木土金火</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">囚土金木火水</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">五行相生地支</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">木生在亥，火生在寅，金生在巳，水土长生居申。</span>
  </p>
  <a name=c180></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218939>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">天干地支所属五行</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">甲乙寅卯木，丙丁巳午属火，戊己辰戌丑未属土，庚申辛酉金，壬癸亥子属水。</span>
  </p>
  <a name=c181></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218940>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">论八卦性情</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾，健也；坤，顺也；震，起也；艮，止也；坎，陷也；离，丽也；兑，说也。巽，入也。</span>
  </p>
  <a name=c182></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218941>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八卦取象</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾为天，坤为地，震为雷，巽为风，坎为水，离为火，艮为山，兑为泽。</span>
  </p>
  <a name=c183></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218942>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">六十甲子歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">甲子乙丑海中金，丙寅丁卯炉中火，戊辰己巳大林木，庚午辛未路傍土，壬申癸酉剑锋金，甲戌乙亥山头火，丙子丁丑涧下水，戊寅己卯城头火，庚辰辛巳白腊金，壬午癸未杨柳木，甲申乙酉井泉水，丙戌丁亥屋上土，戊子己丑霹雳火，庚寅辛卯松柏木，壬辰癸巳长流水，甲午乙未沙中金，丙申丁酉山下火，戊戌己亥平地木，庚子辛丑壁上土，壬寅癸卯金传金，甲辰乙巳覆灯火，丙午丁未天河水，戊申己酉大驿土，庚戌辛亥钗钏金，壬子癸丑桑柘木，甲寅乙卯大溪水，丙辰丁巳沙中土，戊午己未天上火，庚申辛酉石榴木，壬戌癸亥大海水。</span>
  </p>
  <a name=c184></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218943>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">六十四卦次序</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾坤屯蒙需讼师，比小畜兮履泰否。同人大有谦豫随，蛊临观兮噬嗑贲。剥复无妄大畜颐，大过坎离三十备。咸恒屯兮及大壮，晋与明夷家人睽。蹇解损益夬姤萃，升困井革鼎震继。艮渐归妹丰旅巽，兑涣节兮中孚至。小过既济兼未济，是为下经三十四。</span>
  </p>
  <a name=c185></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218944>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">《系辞》八卦类象歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">乾为君兮首与马，卦属老阳体至刚。坎虽为耳又为豕，艮为手狗男之详。震卦但为龙与足，三卦皆名曰少阳。阳刚终极资阴济，造化因知不易量。坤为臣兮腹与牛，卦属老阴体至柔。离虽为目又为雉，兑为口羊女之流。巽卦但为鸡与股，少阴三卦皆相眸。阴柔终极资阳济，万象搜罗靡不同。</span>
  </p>
  <a name=c186></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218945>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">八反格</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">问喜何曾喜，问忧未必忧，问乐何曾乐，问愁何曾愁，问死何曾死（心怀死必活），问生不曾生，问官官不谐，见财财不成。</span>
  </p>
  <a name=c187></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218946>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">四言独步</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">看字之法，毫不可差，下笔是我，其余是他。子孙父母，官鬼妻财，兄弟之类，次叙安排。详占一事，先看用神，或强或弱，详断吉凶。用神健旺，事所必宜；用神衰弱，必失其机。字无用神，始推未笔。木笔参差，诸事不立。土头中贝，日月大人。字中有豫，便是贵人。贵人在爻，祸事必消，逢险可救，财利必招。左右有人，功名可许；笔法轩昂，上人荐举。求财取债，金忌多火；再逢夏月，本利消磨。五行俱全，人事宜然。用神清楚，妙不可言。相争词讼，字详结尾，两笔分明，胜负立剖；字可平分，讼不成凶；人居圈内，缧绁之中。青龙在数，求谋不误；若无水来，反为无助。玄武自来，水上生财，白虎同至，惹祸招灾。朱雀临头，文书已动，事在公门，不与人共。未勾叠叠，口舌重重；若无救助，毕竟成凶。水冷金寒，亲戚无缘；求谋未遂，作事迁延。五行正旺，财利可求；吉神相助，成事无忧。土内埋金，功名未遂；或者水多，前行可贵。人病在床，木被金伤；六神不动，毕竟无妨。字不出头，蹭蹬乖蹇；五行有效，渐渐可展。字无勾踢，人必平安；凶神乱动，好处成难。未后一笔，一身之原，如无破绽，福寿绵绵。一字联络，骨肉同门，孤悬一点，游子飘蓬。金得炉锤，方成器皿。木无金制，可曰愚农。木从土出，受人培植。水中浮木，波浪成风。落笔小心，做事斟酌；小心太过，为人刻薄。写来粗草，放荡之人。笔端熟溜，书记傭工。字法龙蛇，仕途已佳；秀而不俗，文章自广。风流笔法，好逞聪明；写来透古，腹内不空。墨迹滞涩，学问难誇。一笔无停，定是大家。灯前窗下，岁月蹉跎。禾麻菽麦，俱已发科。字无倚靠，不利六亲；字无筋节，事可让人。直仰两足，奔波劳碌；摆尾摇头，心满意足。字问日期，切勿妄许。有丁有日，类可说与。山曰草木，咸不宜冬。星辰日月，乃怕朦胧。真正五行，不怕相克，直如用神，求谋易得。笔法未全，作事多难。行人不至，音信杳然。水火多源，木枯无枝，子孙宗派，于此可思。终身事业，我即用神。生我者吉，克我者凶。字只两笔，寿年不一，有撇七二，无撇六一。字如三笔，亦各有数，常为十六，双为念五。无勾为变，有勾为常。依此立法，仔细推详。字不出头，寿增五岁；当头一点，须减三年。字若无钩，添九可求；字如无直，寿当增十。笔画过半，须知减点；一点三年，岁数可免，耳畔成三，口头除四，明彻斯传，始精相字。妙诀无多，功非一日，仔细详占，万无一失。</span>
  </p>
  <a name=c188></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218947>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五言作用歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">断事不可泥，变通方是道；细细察根源，始识先贤奥。十人写一字，字法各不同；一字占十事，情理自然别。六神无变乱，五行有假真；草木看时节，日月察晦明。字中有子孙，子孙必不少；详其盛与衰，便知贤不肖。我克不宜多，多必妻重娶，克我一般多，谐谐又可许。青龙值用神，万事皆无阻；若是无水泽，犹为受用苦。白虎值用神，吉事反成凶；官事必受害，疾病重沉沉。用神见朱雀，利于公门中；君子功名吉，小人口舌凶。用神见螣蛇，俱是文书动；功名眼下宜，富贵如春梦。未笔是青龙，万事不成凶；名利皆如意，行人在路中。未笔是朱雀，公事有着落；只恐闺门中，有病无良药。未笔是勾陈，淹留费苦心；行人音信杳，官讼混如尘。未笔是螣蛇，远客即来家；忧疑终不免，官讼苦嗟吁。未笔是白虎，疾病须忧苦；狱讼必牵缠，出往多拦阻。未笔是玄武，盗贼须提防；水土行人利，家中六畜康。未笔看五行，所用看六神；先定吉凶主，然后字中寻。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c189></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218948>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">别理论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">字义浑论，辩别之篇须下学；理研变化，至诚之道可前知。字同事不同，不宜此而宜彼；事同字亦同，攸变吉而变凶。设若中也者，天下之大本。问终身与昆仲无缘，信乎哉！人间之最要，欲要之于朋友更切。再如地天为泰，不遇阳间犹是否；雷火为丰，如逢阴极可云临。既虚矣，复反而为盈；既危矣，复还而安。时盛必衰，天地不逾其数；治极而乱，圣人能预为防。先则看其笔端，然后察其字义。须知字义古怪，学问宜深；笔走龙蛇，峥嵘已过。龙身草草，非正途显达之官；豹字昂昂，是执殳荷戈之职。志无心定，是漂蓬下士；斌不乱始，称文武全才。贝边月下定归期；足畔口头人必促。团团宝盖，多生富贵之家；济济冠裳，定是风云之客。无事生非因北字，有钱不享是亨来。合则婚事难成；力乃功名未妥。以他人问字，男女皆空；书本姓求官，声名远播。写“先”觅物终须失；写“望”造人定是亡。“马”字偏斜，惟恐落人之局；“口”头阔大，定招闲事之非。“青”字有人求作主，事万全于月；“妙”字一女欲于归，少亦可出闺门。“天”字相联，一对良缘先注定；“好”字相属，百年美眷预生成。“丁”、“寸”之字，皆“才”不足之形；“占”、“吉”之类，皆“告”不成之象。“香”开晨昏扬誉远，花占百事一番新。“小”为本之人，“大”是虚名之士。赤子依亲，是“每”一例可推；大人盖小，因“余”仿斯可断。具左一生多享福；空头半世受孤寒。“东西南北”，欲就其方；“左右中前”，乃择其地。一人傍立，求名是佐贰之官；一直居中，占身乃正途之士。草木逢春旺，鱼龙得水舒。“边”字走长人未到；“动”旁撇短舍去犹迟。“赤子”、“儿曹”之类，必利见大人；“公祖”、“父师”之称，则相逢贵人。“子”则立身无寸地；“永”如立志有衣冠。“操”为一品之才；“饮”定大人之食。“之”非出往必求财；“者”不呼虚定六畜。“奇”欲立而不可；“用”非走而不“通”。“口”居中，俨然一颗方印；“元”落后，前程可定魁名。体用昂昂，功名之客；性情亟亟，荼苦之儒。“朔邦”还未入朝廊；“田里”多应在乡党。活泼泼鸢鱼，是飞腾之象；乐滔滔凫鸟，为流荡之徒。川上皆圣贤游乐之余；周行是仕宦经田之道。“崔巍”远人犹在望。“平安”近事不能成。“日”小见天长；“心”粗知胆大。“归”则归兮归是止；“笑”如笑兮笑成悲。“国”字谓何？一口操戈在内；“尔”来何故？五人合伙同居。“火”字乃人在中央；一遇羊头为尽“美”；“天”字是人居其内；出头一日始逢“春”。以“余”字问，必有；以“有”字问，反无。“龙”虽在天在田，看笔迹如何布置；“师”既容民畜众，察精神始识兴衰。盖载有人，终享阜家福；伞带全备，定是极品官。有撇断为兄弟；无点莫问儿孙。“工”欲善其事而成其艺，“何”不见其人而亦可。“女子”并肩生意“好”；“色丝”同处病将亡。犯岁君之名，灾殃不小；书童问卜之日，财利可兴。理中变化深长，此乃规矩方圆之至；字里机关悠远，须认精粗化造之原。</span>
  </p>
  <a name=c190></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218949>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">六言剖断歌</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">事从天地之义，字乃圣贤之心。静里功夫细阅，其中奥理无穷。圆融莫测其辨，来去无阻其通。笔法先详衰旺，得意始定吉凶。乾枯软小为衰，清秀坚昂为旺。详其用神何如，吉凶自然的当。寿夭定于笔画，取其多寡为占。字如十笔以上，一笔管它六年；字如十笔以下，一笔定其九岁；若在五笔之间，一笔管十六年；笔画过之十五，两笔折作一笔；带草一笔相连，问寿只在目前笔迹清而拘束，必然游痒在学。笔端独而放荡，功名必无着落。写来笔法圆活，为人处世谦和。笔底停而又写，为人性慢心多。举笔茫无所措，胸中学问不大。若无写罢复描，行事可为斟酌。富贵出于精神，英雄定于骨格。未后一笔丰隆，到老人称有德。占妻先看其妻，占子先看其子；妻子察其旺衰，据理定其生死。父兄官灾狱讼，父兄要值空亡。如若父兄在数，父兄反见灾殃。一切谋望营求，字要察其虚实。有声无物为虚，有物可见是实。书出眼前之物，察其司重司轻。司重断为有用，司轻大事无成。纳采于归等事，更要加意推详。笔画计其单双，字义察其阴阳。假如子字求子，须防日建逢女。子日如画女子，婚姻百事皆订。一字笔画未全，万事不必开言。字中若有余笔，必须用心详占。先用五行工夫，后用增减字理。影响毫发无差，谬则难寻千里。学者变化细推，断事无不灵应。</span>
  </p>
  <a name=c191></a>
  <h1 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218950>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">拆字杂编篇之四</span>
    </a>
  </h1>
  <a name=c192></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218951>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">格物章</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">物格而后知至，本末须详；事来必先见诚，始终可断。细而长者，以一尺为百年，计分而知寿算；方而圆者，以千金比一两，度轻重以定枯荣。落手银圈，放荡终不改；出囊珠石，峥嵘自有时。石土不逢时，谓之无用；木金全失气，枉劳徒劳。执墨问功名，研究之夕，日见不足；端鼎比身命，近贵之体，一世非轻。腰下佩锥，所求皆遂；道傍叶核，百事无成。取草问营谋，逢春须茂盛；将银问财帛，有本恐消磨。素纨无诗，当推结识疏；牙签托人，毕竞不顾我。数珠团圆到底，夫妻儿女皆宜；木鱼振作不常，父母兄弟难合。力下行人来得快，笔占远处有施为。求子息圆者不宜空；占买卖长者终须折。衣衫则包藏骨肉，葬祭之事宜然；绦带必亲执肩躯，牵缠之争未免。舟车骡马，用之则行；婢仆鸡鸢，呼之便至。金扇之类，收有复展之期；烹调之物，死无再生之理。瓜果问事，破不重圆；棋子求占，散而又聚。荡尘理乱，无跧金篦牙签；释罪沉冤，俱是何章刀笔。壶是主人礼，则空而满，满而复空；镇为君子之防匙，则去而来，来而复去。文章书籍，非小人用之；筐筥梨耙，岂君子用之。惯执鞭所忻慕焉，富而必可求也；能弹琴复长啸耳，乐亦在其中乎。娱指悬匏，功名少待；折来垂柳，意兴多狂。竹杖笼头，节义一生无愧怍；木锥莺嘴，钻眉万物有刚强。手不释正业经书，自知道德修诸己；问不离九流艺术，意在干戈省厥躬。指庭前向日之花，倏忽坐间移影；点槛外敲风之竹，晨昏静里闻音。君子执笙簧，陶陶其乐，舌鼓终须不免；女人拈针线，刺刺不休，心牵毕竟难触。出匣图书行欲方，眼下可分玉石；执来宝剑心从利，手中立剖疑难。羽扇纶巾，须知人自山中去；奇珍异宝，可断人从海上来。百草可活人，不识者不可妄用；六经能裨世，未精者焉敢施为。指盂中之水，久不耗而则倾；顾冶内之金，须知积而有用。事非容易，一首词两下欣逢；学识渊源，几名话三生有幸。执金学道，借服为聚物之囊；割爱延师，重身如无价之宝。明心受业，既行束上之修；寄柬传言，莫废师尊之礼。斯其人也，斯其义也，可以为之。非其重焉，非其道焉，孰轻与尔。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c193></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218952>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">物理论</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">三才始判，八卦攸分，万物不离于五行，群生皆囿于二气。羲皇为文字之祖，苍颉肇书篆之端。鸟迹成章，不过象形会意；云龙结篆，传来竹简添书。秦汉而返，篆隶迭易。钟王既出，真草各名。其文则见于今，其义犹法千古。人备万物之一数，物物相通；字泄万人之寸心，人人各异欲穷吉凶之兆，先格物以致知。且云天为极大，能望而不能亲，毕竟虚空为体。海是最深，可观而不可测，由来消长有时。移山拔树莫如风，片纸遮窗可避；变谷迁陵惟是水，尺筒无底难充。小弹大盘，日之远近不辨；白衣苍狗，云之变化非常。雨本滋长禾苗，不及时人皆蹙额；雪能冻压草木，如适中人喜丰年。月行急疾映于江，莫向水中捞提；星布循环周八极，谁从天上推移？露可比恩，压浥行人多畏；霞虽似锦，膏盲隐士方宜。皓皓白秋阳，炎为再逢为亢害；涓涓冬月，寒水重见愈凄凉。顽金不惧洪炉，潦水须当提岸。雾气空濛推障碍，电光倏忽喻浮生。月下美人来，只恐到头来成梦；雪中寻客去，犹防中道而归。白露可以寄思，迅雷闻而必变。履霜为忧虑之渐，当慎始焉；临渊有战惕之心，保厥终矣。莫指，闺门之事不宜；霖雨既零，稼穑之家有望。阳春白雪，只属孤音；流水高山，难逢知己。至于岩岩山石，生民具瞻；滚滚源泉，圣贤所乐。瀑布奔冲难收拾，溪流湍激不平宁。风水所以行舟，水涌风狂舟必破；雨露虽能长物，雨零霜结物遭伤。社稷自有人求，关津诚为客阻。烟雾迷林中有见，江河出峡去无回。桃夭取妇相宜，未利于买僮置畜；杨柳送行可折，尤喜于赴试求名。松柏可问寿年，拟声名则飘香挺秀；丝罗可结姻好，比人品则倚势扳援，荷方出水，渐见舒张；梅可调羹，未免酸涩。李有道旁之苦，榄余齿末之甘。笔墨驱使，时日不长；盆盂装载，团圆不久。绠短汲深求未得，戈长力弱荷难成。屠刀割肉利为官，若问六亲多刑损。立刀剖瓜休作事，如占六甲即生男。无人棺椁必添丁，有印书函终见拆。等则骨贮匣中，纵有出时还须入；算盘则子盈目下，任凭拨乱却成行。瓦口虑其难全，杯亦防其有缺。席可捲虚，终归人下；伞能开口，定出人头。钧乃小去大来，樵则任重道远。素珠团聚，可串而成；蜡烛风流，不能久固。针线若还逢即合，锹锄如用必然翻。凿则损而为利，亦关人事之休咎，猢孙被系，还家终是无期；鹦鹉在囚，受困只因长舌。鹄乃随人饮啄，纵之仍入樊笼；马虽无胆驰驱，用之不离勒锁。鲤失江湖难变化，燕束堂屋转疑难。诉理伸冤，逢鸦不白；占身问寿，同鹤修龄。万物纷纭，理则难尽；诸人愿欲，志各不同。若执一端以断人，是犹柱鼓瑟；能反三隅而悟理，方称活法圆机。心同金鉴悬空，妍媸自别；智若玉川之入海，活泼自如。鬼谷子曰：“人动我静，人言我听。”旨哉斯语！胡可忽诸？</span>
  </p>
  <a name=c194></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218953>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">五行六神辨别篇</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">先以五行为主，次向字中详祸福。既将六神作用，方观笔迹察原因。生克不容情，莫以字音称独美。宜忌须着意，休将文义恃能言。勿以吉字言吉，当认吉中多忌煞；漫将凶字言凶，须详凶处有元神，假如青龙与白虎同行，求功名大得其宜。如庶人得之，反不免相争之咎。父母与妻子聚面，问赴选难从其志；若游子占之，又可能思远之忧。勾陈最忌小金连，惟恐事无间断；朱雀若逢傍水克，须防祸有牵缠。水在木中流，替人濯垢；木从水中出，脱体犹难。五行全不犯凶神，问自身德建名立；六神动再加吉将，若求官体贵身荣。旧事从新，朱腾双发动；倾家复创，金土两重临。微火鎔金，难成器皿；弱金克木，反自损伤。两济于人，要看水火会合；营谋于众，还求土木齐登。金多土多，非土不得；土厚财厚，无火不生。水冷木孤，弟只难靠；金寒土薄，祖业凋零。玄武形青龙得水，连登两榜；白虎尾朱雀衔金，位刘三公。玄武临渊，时中之雨化；青龙捧日，阙下之云腾。水非白而无源，金不秋而失气。有勾陈难结案头文，见朱雀想量堂上语。田下土溪，思远故里；月边水盛，意在归湖。玄武居中，出外不宜行陆路；勾陈定位，居官虽在又皇恩。白虎重重，不敢保今年无事；青龙两两，定不是今日燕居。字中见母母无忧，笔下从兄兄定在。水土形青龙翘首，何忧不得功名；木金相白虎当头，毕竟难逃灾害。重重金火不逢时，百事徒劳；叠叠青黄非见日，几番隆替。贵显招土木，万福皆隆；方体隐龙蛇，千祥并集。勾陈相合，主唇舌干戈之事；龙虎同行，风云际会之荣。玄武不过火，阴中不美；螣蛇无水渡，郊外生悲。纯土自能生官，福从天至；寒金不但无禄，灾自幽来。天贵专权，问功名自登黄甲；文书不动，赴场闱定值空亡。问子须求子在爻，占妻定要妻入数。笔迹孤寒金带水，六亲一个难招；字形丰满土生金，百岁百年易盛。看五行之旺相切记，卜词讼以官鬼为先；定六将之机微须知；占家宅以本命为主。五行俱有，凡谋皆遂；六神不动，万事咸宁。细玩辞占响影，无差毫发；密搜奥义规绳，不爽纤微。</span>
  </p>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span lang=EN-US>
      <o:p>&nbsp;</o:p>
    </span>
  </p>
  <a name=c195></a>
  <h2 style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;margin-left:
0cm">
    <a name=_Toc520218954>
      <span style="font-family:宋体;mso-ascii-font-family:
Cambria;mso-hansi-font-family:Cambria">金声章</span>
    </a>
  </h2>
  <p class=MsoNormal style="margin-top:7.8pt;margin-right:0cm;margin-bottom:7.8pt;
margin-left:0cm;text-indent:21.0pt">
    <span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-hansi-font-family:Calibri">混沌未开。一元含于太极无形之始；乾坤既判，万物成于文章著见之中。故未有其事，而先有象，可预得其体，而兆其来。所以苍颉制字，接云霞蝌斗之文；至圣著书，採随宜义理之用。一字之善，千古流传；半点之疵，万年不泯，君子哉非挥毫而莫辨；小人焉一执笔而即知。是以消长盛衰，困极而知变，吉凶祸福，至诚而见神。写来江汉秋阳，皓皓乎不可尚已；意在螽斯洗羽，绳绳兮与其宜焉。惟存好利喜施，则落笔终须各别；必欲离尘脱俗，而开首自是不同。若夫烟雾云霞，则聚散去来神变化；风雷日月，其盈虚消息妙裁成。鹦鹉等禽，人皆云其巧舌；虎豹之类。谁不惧其张威。生息蕃盛者，乃稼穑禾苗；与物浮沉者，是江河湖海。渊中鱼跃，水向东流何沮止；天上鸢飞，日从西落四时同。百兽俱胎孕而生，独报麟祥之喜；诸禽皆飞腾之物，只言凤德之衰。禽之鸣也噪也，有形小体大之分；兽之利也钝也，有轻清重浊之辨。香花灯烛，偏宜于朔望之时；铃铎鼓钟，独可见于晨昏之际。点点滴滴，万里征衫游子泪，层层叠叠，九行密线老人心。至于犬豕牛羊，叱之即便去；鸡鱼鹅鸭，欲用则不生。狐貉羔裘，无济于夏；红炉黑炭，偏喜于冬。幽林深圃夜无人，情不诬也；楼阁厅堂时有位，理之必然。琴书剑箱，可断儒生负腋；戏裘肥马，当推志士同袍。墨有渐减之虞，笔有久坚之弱。书成笔架，疑上悯山；写到砚池，寓中闷海。如在其上，秋到一天皆胶月；如在其下，春临遍地产黄金。挥出琵琶，到底是写怨之具；描来箫管，终须为耗气之端。假如云雨雾，皆时敝日之光，天正阴时原是吉；又若精气神，本是扶身之主，人来问病反为凶。水急流清，意偕游鱼濊濊；烟飞篆渺，心从云树茫茫。农家落笔，草盛田禾实不足；商者书篆，丝多交易乱如麻。紫鲛金章，无者不必写出；蜗名蝇利，有者即便书成。锁铃金汤，必任国家之重任；羽毛干戚，是祈海甸以清宁。挂锦扬帆，风顺之方必利；舒衾酒帐，雨到之候成欢。礼乐射御书数，如求一艺可执；孝友睦娴任，定其天事皆宜。草木逢雨时生而旺，要详春秋气候；轿马行际日近而远，亦揆寒暑光阴。试看画饼望梅，何止饥渴；镜花水月，竟是空虚。欲造字相之微，请明章中之理。</span>
  </p>

  <script type=text/javascript>
  window.onload = function () {
    var opened = false;
    var catalogueBox = document.getElementById('catalogue-box');
    var catalogueBtn = document.getElementById('catalogueBtn');
    var catalogue = document.getElementById('catalogue');

    var openCataBoxStyle = "  display:flex;  width: 100%;  height: 100%;  position: fixed; top:0;left:0;";   
    var closeCataBoxStyle = "    display:none;  ";
    catalogueBtn.onclick = function (e) {
      e.preventDefault();
      if (opened) {
        opened = false;
        catalogueBox.setAttribute('style', closeCataBoxStyle);
      } else {
        opened = true;
        catalogueBox.setAttribute('style', openCataBoxStyle);
      }
    };
    catalogueBox.onclick = function (e) {
      opened = false;
      catalogueBox.setAttribute('style', closeCataBoxStyle);
    };
    catalogue.onclick = function (e) {
      e.preventDefault();
    };
    var as = catalogue.children;
    function animateScroll(element, speed) {
      var body =document.getElementsByTagName('body')[0];
      var top = body.offsetTop + element.offsetTop;
      window.scrollTo(0, top);
    }
    for (var i = 0; i < as.length; i++) {
      as.item(i).onclick = function (name) {
        return function () {
          animateScroll(document.getElementsByName(name).item(0), 1000);
        }
      }(as.item(i).getAttribute('href').slice(1));
    }
  }
  </script>
    <!--
  <style>
    h1{
      font-size:3.5em;
    }
    h2{
      font-size:3em;
    }
    h3{
      font-size:2.5em;
    }
    p{
      font-size:2em;
    }

  </style>
  -->
</body>

</html>




`