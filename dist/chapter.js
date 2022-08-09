function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { OrsParser } from "./ors-parser.js";
export { OrsChapter };
/*let doc = load chapter from legislature Site
doc.findAndReplace() <-- links
doc.parse(html)
doc.getAll(sections)
doc.createTOC()
doc.injectAnchors()
doc.toString()
doc.getSection(sectionNum)
doc.highlight(sectionNum)
*/
//import ors parser functions

var OrsChapter = /*#__PURE__*/function () {
  //class variables
  function OrsChapter(chapter) {
    _classCallCheck(this, OrsChapter);

    _defineProperty(this, "section", void 0);

    _defineProperty(this, "document", void 0);

    _defineProperty(this, "sectionTitles", {});

    _defineProperty(this, "sectionHeadings", {});

    this.chapter = chapter;
  }

  _createClass(OrsChapter, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var resp, buffer, decoder, html, parser, headings, i, boldParent, trimmed, strings, _chapter, section, key, val, numbers;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("index.php?chapter=" + this.chapter);

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.arrayBuffer();

              case 5:
                buffer = _context.sent;
                decoder = new TextDecoder("iso-8859-1");
                html = decoder.decode(buffer); //initialize the parser

                parser = new DOMParser();
                OrsParser.replaceAll(html), _readOnlyError("html"); //tell the parser to look for html

                this.doc = parser.parseFromString(html, "text/html"); //createa nodeList of all the <b> elements in the body

                headings = this.doc.querySelectorAll("b"); // console.log(headings);

                i = 0;

              case 13:
                if (!(i < headings.length)) {
                  _context.next = 28;
                  break;
                }

                boldParent = headings[i];
                trimmed = headings[i].textContent.trim();

                if (!(trimmed.indexOf("Note") === 0)) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("continue", 25);

              case 18:
                strings = trimmed.split("\n");
                _chapter = void 0, section = void 0, key = void 0, val = void 0;
                console.log(strings); // if array has oonly one element,
                // then we know this doesn't follow the traditional statute pattern.

                if (strings.length === 1) {
                  key = strings[0];
                  val = boldParent.nextSibling ? boldParent.nextSibling.textContent : "";
                } else {
                  // otherwise our normal case.
                  key = strings[0];
                  val = strings[1];
                  numbers = key.split('.');
                  _chapter = numbers[0];
                  section = numbers[1];
                }

                console.log(key);
                this.sectionTitles[parseInt(section)] = val;
                this.sectionHeadings[parseInt(section)] = boldParent;

              case 25:
                i++;
                _context.next = 13;
                break;

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "toString",
    value: function toString() {
      var serializer = new XMLSerializer();
      var subset = this.doc.querySelector(".WordSection1");
      return serializer.serializeToString(subset);
    }
  }, {
    key: "injectAnchors",
    value: function injectAnchors() {
      // Inserts anchors as div tags in the doc.
      for (var prop in this.sectionTitles) {
        var headingDiv = this.doc.createElement('div');
        headingDiv.setAttribute('id', prop);
        headingDiv.setAttribute('class', 'ocdla-heading');
        headingDiv.setAttribute('data-chapter', this.chapter);
        headingDiv.setAttribute('data-section', prop);
        var target = this.sectionHeadings[prop];
        target.parentNode.insertBefore(headingDiv, target);
      }
    }
  }, {
    key: "testToC",
    value: function testToC() {
      var network = load(this.chapter);
      return network.then(function (data) {
        var sections, elements, html;

        var _data = _slicedToArray(data, 3);

        sections = _data[0];
        elements = _data[1];
        html = _data[2];
        var volumes = ["Courts, Or. Rules of Civil Procedure", "Business Organizations, Commercial Code", "Landlord-Tenant, Domestic Relations, Probate", "Criminal Procedure, Crimes", "State Government, Government Procedures, Land Use", "Local Government, Pub. Employees, Elections", "Pub. Facilities & Finance", "Revenue & Taxation", "Education & Culture", "Highways, Military", "Juvenile Code, Human Services", "Pub. Health", "Housing, Environment", "Drugs & Alcohol, Fire Protection, Natural Resources", "Water Resources, Agriculture & Food", "Trade Practices, Labor & Employment", "Occupations", "Financial Institutions, Insurance", "Utilities, Vehicle Code, Watercraft, Aviation, Constitutions"];
        var options = volumes.map(function (v, index) {
          return "<option value=\"".concat(index + 1, "\">Volume ").concat(index + 1, " - ").concat(v, "</option>");
        });
        var optionsHtml = options.join("\n");
        var toc = [];

        for (var s in sections) {
          toc.push("<li><a href=\"#".concat(s, "\">").concat(s, " - ").concat(sections[s], "</a></li>"));
        }
      });
    }
  }, {
    key: "createToC",
    value: function createToC() {
      modal.show(); // Network call.

      var network = load(this.chapter, this.section);
      var chapter = new OrsChapter(this.chapter);
      return network.then(function (data) {
        var sections, elements, html;

        var _data2 = _slicedToArray(data, 3);

        sections = _data2[0];
        elements = _data2[1];
        html = _data2[2];
        var volumes = ["Courts, Or. Rules of Civil Procedure", "Business Organizations, Commercial Code", "Landlord-Tenant, Domestic Relations, Probate", "Criminal Procedure, Crimes", "State Government, Government Procedures, Land Use", "Local Government, Pub. Employees, Elections", "Pub. Facilities & Finance", "Revenue & Taxation", "Education & Culture", "Highways, Military", "Juvenile Code, Human Services", "Pub. Health", "Housing, Environment", "Drugs & Alcohol, Fire Protection, Natural Resources", "Water Resources, Agriculture & Food", "Trade Practices, Labor & Employment", "Occupations", "Financial Institutions, Insurance", "Utilities, Vehicle Code, Watercraft, Aviation, Constitutions"];
        var options = volumes.map(function (v, index) {
          return "<option value=\"".concat(index + 1, "\">Volume ").concat(index + 1, " - ").concat(v, "</option>");
        });
        var optionsHtml = options.join("\n");
        var toc = [];

        for (var s in sections) {
          toc.push("<li><a href=\"#".concat(s, "\">").concat(s, " - ").concat(sections[s], "</a></li>"));
        }

        window.location.hash = this.section;
        var nextSection = getNextSection(this.section);
        console.log(nextSection); //good luck :^) goal: do highlighting at level of object
        //OrsParser.highlight(chapter,section,nextSection.dataset.section);
      });
    }
  }, {
    key: "highlight",
    value: function highlight(section, endSection) {
      console.log(chapter);
      console.log(section);
      console.log(endSection);
      var range = this.doc.createRange();
      var firstNode = this.doc.getElementById(section);
      console.log(firstNode);
      var secondNode = this.doc.getElementById(endSection);
      console.log(secondNode);
      range.setStartBefore(firstNode);
      range.setEnd(secondNode.childNodes.length);
      console.log(range);
      var newParent = this.doc.createElement('div');
      newParent.setAttribute('style', 'background-color:yellow;'); //range.surroundContents(newParent);
    }
  }, {
    key: "getSection",
    value: function getSection(section) {//do we want to do sections inside this class? or do them in their own class?
    }
  }, {
    key: "getNextSection",
    value: function getNextSection(sectionNum) {
      var headings = this.doc.querySelectorAll('.ocdla-heading');
      var section = this.doc.getElementById(sectionNum);

      for (var i = 0; i < headings.length; i++) {
        if (headings.item(i) == section) {
          var nextSection = headings.item(i + 1);
          return nextSection;
        }
      }
    }
  }]);

  return OrsChapter;
}();