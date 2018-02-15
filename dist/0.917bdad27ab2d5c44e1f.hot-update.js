webpackHotUpdate(0,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProjectFiles = function (_React$Component) {\n  _inherits(ProjectFiles, _React$Component);\n\n  function ProjectFiles(props) {\n    _classCallCheck(this, ProjectFiles);\n\n    var _this = _possibleConstructorReturn(this, (ProjectFiles.__proto__ || Object.getPrototypeOf(ProjectFiles)).call(this, props));\n\n    _this.state = {\n      files: []\n    };\n\n    _this.loadFiles = _this.loadFiles.bind(_this);\n    _this.handleChange = _this.handleChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(ProjectFiles, [{\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      var key = event.target.name;\n      var val = event.target.value;\n      var obj = {};\n      obj[key] = val;\n      this.setState(obj);\n    }\n  }, {\n    key: \"loadFiles\",\n    value: function loadFiles() {}\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadFiles();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n\n      var renderFiles = this.state.files.map(function (file, i) {\n        return _react2.default.createElement(\n          \"div\",\n          { className: \"file-tile\", key: i },\n          _react2.default.createElement(\"img\", { src: \"\" }),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"file-tile-name\" },\n            \" \"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"file-tile-desc\" },\n            \" \"\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"file-tile-users\" },\n            \" \"\n          )\n        );\n      });\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"projectfiles-show\" },\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\n            \"form\",\n            { onSubmit: this.submitFile },\n            _react2.default.createElement(\n              \"label\",\n              null,\n              \" Select file \"\n            ),\n            _react2.default.createElement(\"input\", { name: \"myFile\", type: \"file\" }),\n            _react2.default.createElement(\n              \"label\",\n              null,\n              \" Name \"\n            ),\n            _react2.default.createElement(\"input\", { name: \"name\", type: \"text\", onChange: this.handleChange }),\n            _react2.default.createElement(\n              \"label\",\n              null,\n              \" Description \"\n            ),\n            _react2.default.createElement(\"input\", { name: \"description\", type: \"text\", onChange: this.handleChange }),\n            _react2.default.createElement(\n              \"label\",\n              null,\n              \" Filetype \"\n            ),\n            _react2.default.createElement(\"input\", { name: \"filetype\", type: \"text\", onChange: this.handleChange }),\n            _react2.default.createElement(\n              \"button\",\n              { type: \"submit\" },\n              \" Add File \"\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"renderfiles-show\" },\n          renderFiles\n        )\n      );\n    }\n  }]);\n\n  return ProjectFiles;\n}(_react2.default.Component);\n\nvar _default = ProjectFiles;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(ProjectFiles, \"ProjectFiles\", \"/Users/johnmauran/Challenges/webpack3_react/app/components/ProjectFiles.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/johnmauran/Challenges/webpack3_react/app/components/ProjectFiles.js\");\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1Byb2plY3RGaWxlcy5qcz8wZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFByb2plY3RGaWxlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZXM6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5sb2FkRmlsZXMgPSB0aGlzLmxvYWRGaWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCl7XG4gICAgdmFyIGtleSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHZhciB2YWwgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICB2YXIgb2JqID0ge31cbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHRoaXMuc2V0U3RhdGUoIG9iaiApO1xuXG4gIH1cblxuICBsb2FkRmlsZXMoKXtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmxvYWRGaWxlcygpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICB2YXIgcmVuZGVyRmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzLm1hcCgoZmlsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtdGlsZVwiIGtleT17aX0+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXRpbGUtbmFtZVwiPiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtdGlsZS1kZXNjXCI+IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS10aWxlLXVzZXJzXCI+IDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdGZpbGVzLXNob3dcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGaWxlfT5cbiAgICAgICAgICA8bGFiZWw+IFNlbGVjdCBmaWxlIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm15RmlsZVwiIHR5cGU9XCJmaWxlXCIvPlxuICAgICAgICAgIDxsYWJlbD4gTmFtZSA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPGxhYmVsPiBEZXNjcmlwdGlvbiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxsYWJlbD4gRmlsZXR5cGUgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZmlsZXR5cGVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4gQWRkIEZpbGUgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW5kZXJmaWxlcy1zaG93XCI+XG4gICAgICAgICAge3JlbmRlckZpbGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RmlsZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvUHJvamVjdEZpbGVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTs7O0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFkQTtBQW1CQTs7OztBQTVEQTtBQUNBO0FBOERBOzs7Ozs7Ozs7QUEvREE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///559\n");

/***/ })

})