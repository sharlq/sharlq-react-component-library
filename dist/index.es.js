import React, { useState } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css$2 = ".sharlq-button{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:5px;cursor:pointer;display:inline-block;line-height:1;color:#fff;background-color:#1ea7fd;font-size:14px;padding:11px 20px}";
styleInject(css$2);

const Button = ({
  label,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['sharlq-button']
  }, props), label);
};

var css$1 = ".select-module_categoryes__2YRih{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;display:flex;align-items:center;justify-items:center;flex-direction:column;min-height:150px}.select-module_categoryes__2YRih .select-module_dropDownList__2mtJK{cursor:pointer;padding-left:5px;margin-top:2vh;height:26px;min-width:150px!important;background:#fff;border:1px solid rgba(0,0,0,.3);border-radius:5px;display:flex;justify-content:space-between;align-items:center}.select-module_categoryes__2YRih .select-module_dropDownList__2mtJK svg{align-self:center;padding-right:5px}.select-module_categoryes__2YRih .select-module_dropDownListItems__ZcdKy{padding-top:5px;padding-left:5px;padding-bottom:5px;position:relative;top:-4px;overflow:hidden;z-index:1;background:#fff;width:155px;border:1px solid rgba(0,0,0,.3);border-top:none;border-radius:5px;border-top-left-radius:0;border-top-right-radius:0}.select-module_categoryes__2YRih .select-module_dropDownListItems__ZcdKy li{cursor:pointer;padding-left:5px;list-style:none}.select-module_categoryes__2YRih .select-module_dropDownListItems__ZcdKy li:hover{background:#f5f5f5}";
var styles = {"categoryes":"select-module_categoryes__2YRih","dropDownList":"select-module_dropDownList__2mtJK","dropDownListItems":"select-module_dropDownListItems__ZcdKy"};
styleInject(css$1);

const error = () => {
  throw new Error("add a function that activates when pressing list item");
};

const Select = ({
  title = "Select From",
  items = ["firstItem", "secondItem", "thirdItem"],
  onItem = error,
  width = "175px"
}) => {
  const categoriesItems = items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    onClick: () => onItem(i)
  }, i));
  console.log(categoriesItems);

  const handleOpenCategoriesList = () => {
    setOpen(prev => !prev);
  };

  const onBlurCategoriesList = () => {
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.categoryes
  }, /*#__PURE__*/React.createElement("div", {
    key: "controls2",
    onBlur: () => onBlurCategoriesList(),
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.dropDownList,
    style: {
      width: width
    },
    onClick: () => handleOpenCategoriesList()
  }, /*#__PURE__*/React.createElement("p", null, title), /*#__PURE__*/React.createElement("svg", {
    height: "20px",
    viewBox: "0 0 320 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: styles.dropDownListItems,
    style: {
      width: width
    }
  }, categoriesItems)));
};

var css = ".card{position:relative;margin:.25em;margin-top:2.5em;width:18vw;height:25vw;box-shadow:1px 0 7px rgba(0,0,0,.1),-1px 0 7px rgba(0,0,0,.1)}.img-container{width:100%;height:15vw;overflow:hidden;display:flex;justify-content:center}.img-container .img{max-width:100%;height:inherit}.card-body{padding:10px}";
styleInject(css);

const Card = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, children);
};

const CardBody = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, children);
};

const CardImg = ({
  src,
  alt
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "img-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    className: "img",
    alt: alt
  }));
};

export { Button, Card, CardBody, CardImg, Select };
