webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\QSS\\Desktop\\Projects\\NextJs\\small project\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var DUMMY_MEETUPS = [{
  id: "s0",
  title: "falana",
  image: "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
  address: "sdkjfhsdjk nsd lsdhklsjkl",
  description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd"
}, {
  id: "s1",
  title: "falana",
  image: "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
  address: "sdkjfhsdjk nsd lsdhklsjkl",
  description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd"
}, {
  id: "s2",
  title: "falana",
  image: "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
  address: "sdkjfhsdjk nsd lsdhklsjkl",
  description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd"
}, {
  id: "s3",
  title: "falana",
  image: "https://images.unsplash.com/photo-1668349619928-042d19735493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
  address: "sdkjfhsdjk nsd lsdhklsjkl",
  description: "sadhaskjh sjafhsdfkhskjdhsjkdfhsjkd"
}];

var HomePage = function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 10
  }, _this);
}; // export async function getServerSideProps(context) {
//   const { req, res } = context;
//   console.log("req, res");
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }


_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0IiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLFFBRlQ7QUFHRUMsT0FBSyxFQUNILHlLQUpKO0FBS0VDLFNBQU8sRUFBRSwyQkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQURvQixFQVNwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsUUFGVDtBQUdFQyxPQUFLLEVBQ0gseUtBSko7QUFLRUMsU0FBTyxFQUFFLDJCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVG9CLEVBaUJwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsUUFGVDtBQUdFQyxPQUFLLEVBQ0gseUtBSko7QUFLRUMsU0FBTyxFQUFFLDJCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBakJvQixFQXlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLFFBRlQ7QUFHRUMsT0FBSyxFQUNILHlLQUpKO0FBS0VDLFNBQU8sRUFBRSwyQkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQXpCb0IsQ0FBdEI7O0FBbUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxFQUFELENBRHhCO0FBQUEsTUFDbkJDLGFBRG1CO0FBQUEsTUFDSkMsZ0JBREk7O0FBRTFCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsb0JBQWdCLENBQUNWLGFBQUQsQ0FBaEI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVPLEtBQUssQ0FBQ0s7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FORCxDLENBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FqQk1OLFE7O0tBQUFBLFE7O0FBNkJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjkwNzY3YWFiNGFlYWZlMjk1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcInMwXCIsXHJcbiAgICB0aXRsZTogXCJmYWxhbmFcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjY4MzQ5NjE5OTI4LTA0MmQxOTczNTQ5Mz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeGxaR2wwYjNKcFlXd3RabVZsWkh3MWZIeDhaVzU4TUh4OGZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTYwXCIsXHJcbiAgICBhZGRyZXNzOiBcInNka2pmaHNkamsgbnNkIGxzZGhrbHNqa2xcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInNhZGhhc2tqaCBzamFmaHNkZmtoc2tqZGhzamtkZmhzamtkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJzMVwiLFxyXG4gICAgdGl0bGU6IFwiZmFsYW5hXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTY2ODM0OTYxOTkyOC0wNDJkMTk3MzU0OTM/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHhsWkdsMGIzSnBZV3d0Wm1WbFpIdzFmSHg4Wlc1OE1IeDhmSHclM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MDAmcT02MFwiLFxyXG4gICAgYWRkcmVzczogXCJzZGtqZmhzZGprIG5zZCBsc2Roa2xzamtsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJzYWRoYXNramggc2phZmhzZGZraHNramRoc2prZGZoc2prZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiczJcIixcclxuICAgIHRpdGxlOiBcImZhbGFuYVwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2NjgzNDk2MTk5MjgtMDQyZDE5NzM1NDkzP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4bFpHbDBiM0pwWVd3dFptVmxaSHcxZkh4OFpXNThNSHg4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9NjBcIixcclxuICAgIGFkZHJlc3M6IFwic2RramZoc2RqayBuc2QgbHNkaGtsc2prbFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwic2FkaGFza2poIHNqYWZoc2Rma2hza2pkaHNqa2RmaHNqa2RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInMzXCIsXHJcbiAgICB0aXRsZTogXCJmYWxhbmFcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjY4MzQ5NjE5OTI4LTA0MmQxOTczNTQ5Mz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeGxaR2wwYjNKcFlXd3RabVZsWkh3MWZIeDhaVzU4TUh4OGZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTYwXCIsXHJcbiAgICBhZGRyZXNzOiBcInNka2pmaHNkamsgbnNkIGxzZGhrbHNqa2xcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInNhZGhhc2tqaCBzamFmaHNkZmtoc2tqZGhzamtkZmhzamtkXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICBjb25zdCB7IHJlcSwgcmVzIH0gPSBjb250ZXh0O1xyXG4vLyAgIGNvbnNvbGUubG9nKFwicmVxLCByZXNcIik7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgTW9uZ29DbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=