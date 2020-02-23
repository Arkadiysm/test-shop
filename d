warning: LF will be replaced by CRLF in src/App.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/index.css.
The file will have its original line endings in your working directory
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex c9179ed..042debe 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -74,11 +74,14 @@[m [mclass App extends React.Component {[m
   handleSliderBtn = (direction) => (e) => {[m
     e.preventDefault();[m
     const {shiftSliderLeft, shiftSliderRight} = this.props;[m
[32m+[m
     switch(direction) {[m
[31m-      case 'left':[m
[31m-        return shiftSliderLeft();[m
[31m-      case 'right':[m
[31m-        return shiftSliderRight();[m
[32m+[m[32m      case 'left':[m[41m [m
[32m+[m[32m        return transitSlider(direction, shiftSliderLeft);[m[41m  [m
[32m+[m[32m      case 'right':[m[41m [m
[32m+[m[32m        return transitSlider(direction, shiftSliderRight);[m
[32m+[m[32m      default:[m[41m [m
[32m+[m[32m      return;[m
     }[m
   }[m
 [m
[36m@@ -116,5 +119,21 @@[m [mclass App extends React.Component {[m
   }[m
 }[m
 [m
[32m+[m[32mfunction transitSlider(direction, transit) {[m
[32m+[m[32m  const slider = [].slice.call(document.getElementsByClassName('goods'));[m
[32m+[m[32m  const sliderCls = "slider-translate-" + direction;[m
[32m+[m[32m  const opacitySliderNumber = direction === 'right'? 0: (slider.length - 1)[m[41m [m
[32m+[m
[32m+[m[32m  slider.map( (item) => item.classList.add(sliderCls) );[m
[32m+[m[32m  slider[opacitySliderNumber].classList.add("slider-opacity");[m
[32m+[m[41m  [m
[32m+[m[32m  return setTimeout([m
[32m+[m[32m    function(){[m
[32m+[m[32m      transit();[m
[32m+[m[32m      slider.map( (item) => item.classList.remove(sliderCls) );[m
[32m+[m[32m    }[m
[32m+[m[32m  , 500);[m
[32m+[m[32m}[m
[32m+[m
 export default connect(mapStateToProps, actionCreators)(App);[m
 [m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex ba342d4..b897be9 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -26,7 +26,7 @@[m [ma {[m
 }[m
 [m
 .hidden {[m
[31m-  display: none;[m
[32m+[m[32m  display: none !important;[m
 }[m
 [m
 .shadow {[m
[36m@@ -116,6 +116,8 @@[m [ma {[m
   align-items: center;[m
   transition-property: background-color;[m
   transition: .2s ease .1s;[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  z-index: 2;[m
 }[m
 [m
 .shop-window-btn:hover {[m
[36m@@ -154,6 +156,21 @@[m [ma {[m
   background-color: rgb(255, 255, 255);[m
 }[m
 [m
[32m+[m[32m.slider-translate-right {[m
[32m+[m[32m  transform: translateX(-365px);[m
[32m+[m[32m  transition: .4s ease;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.slider-translate-left {[m
[32m+[m[32m  transform: translateX(365px);[m
[32m+[m[32m  transition-property: transform;[m
[32m+[m[32m  transition: .4s ease;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.slider-opacity {[m
[32m+[m[32m  opacity: 0;[m
[32m+[m[32m}[m
[32m+[m
 .goods:hover {[m
   cursor: pointer;[m
 [m
