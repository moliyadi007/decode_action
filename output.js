//Mon Sep 23 2024 11:42:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var r = ["url"];
function T(_0x18281d) {
  return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x1b2687) {
    return typeof _0x1b2687;
  } : function (_0x51e452) {
    return _0x51e452 && "function" == typeof Symbol && _0x51e452.constructor === Symbol && _0x51e452 !== Symbol.prototype ? "symbol" : typeof _0x51e452;
  })(_0x18281d);
}
function i(_0x2cc979, _0x5753f5) {
  if (null == _0x2cc979) {
    return {};
  }
  var _0x4404bf,
    _0x402d82 = a(_0x2cc979, _0x5753f5);
  if (Object.getOwnPropertySymbols) {
    for (var _0x312f7e = Object.getOwnPropertySymbols(_0x2cc979), _0x11b1bc = 0; _0x11b1bc < _0x312f7e.length; _0x11b1bc++) {
      _0x4404bf = _0x312f7e[_0x11b1bc];
      0 <= _0x5753f5.indexOf(_0x4404bf) || Object.prototype.propertyIsEnumerable.call(_0x2cc979, _0x4404bf) && (_0x402d82[_0x4404bf] = _0x2cc979[_0x4404bf]);
    }
  }
  return _0x402d82;
}
function a(_0x4521ab, _0x1e37fa) {
  if (null == _0x4521ab) {
    return {};
  }
  for (var _0x51289a, _0x5db568 = {}, _0x439065 = Object.keys(_0x4521ab), _0x91b8c6 = 0; _0x91b8c6 < _0x439065.length; _0x91b8c6++) {
    _0x51289a = _0x439065[_0x91b8c6];
    0 <= _0x1e37fa.indexOf(_0x51289a) || (_0x5db568[_0x51289a] = _0x4521ab[_0x51289a]);
  }
  return _0x5db568;
}
function s(_0x5e9fa9, _0x5615b0) {
  return F(_0x5e9fa9) || o(_0x5e9fa9, _0x5615b0) || c(_0x5e9fa9, _0x5615b0) || n();
}
function n() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function o(_0x1fc3ed, _0x5dead3) {
  var _0x51aa59 = null == _0x1fc3ed ? null : "undefined" != typeof Symbol && _0x1fc3ed[Symbol.iterator] || _0x1fc3ed["@@iterator"];
  if (null != _0x51aa59) {
    var _0x1c791c,
      _0x26cc35,
      _0x3c885e,
      _0x2fd7e8,
      _0x2fc61b = [],
      _0x568d5e = !0,
      _0x54bdb5 = !1;
    try {
      if (_0x3c885e = (_0x51aa59 = _0x51aa59.call(_0x1fc3ed)).next, 0 === _0x5dead3) {
        if (Object(_0x51aa59) !== _0x51aa59) {
          return;
        }
        _0x568d5e = !1;
      } else {
        for (; !(_0x568d5e = (_0x1c791c = _0x3c885e.call(_0x51aa59)).done) && (_0x2fc61b.push(_0x1c791c.value), _0x2fc61b.length !== _0x5dead3); _0x568d5e = !0) {}
      }
    } catch (_0x20fda0) {
      _0x54bdb5 = !0;
      _0x26cc35 = _0x20fda0;
    } finally {
      try {
        if (!_0x568d5e && null != _0x51aa59.return && (_0x2fd7e8 = _0x51aa59.return(), Object(_0x2fd7e8) !== _0x2fd7e8)) {
          return;
        }
      } finally {
        if (_0x54bdb5) {
          throw _0x26cc35;
        }
      }
    }
    return _0x2fc61b;
  }
}
function F(_0x2bd42a) {
  if (Array.isArray(_0x2bd42a)) {
    return _0x2bd42a;
  }
}
function u(_0x277d42, _0x230e84) {
  var _0x4aa444,
    _0x57ea88,
    _0x5f06b1,
    _0xc4ce13,
    _0x2a5537 = "undefined" != typeof Symbol && _0x277d42[Symbol.iterator] || _0x277d42["@@iterator"];
  if (_0x2a5537) {
    _0x57ea88 = !(_0x4aa444 = !0);
    return {
      s: function () {
        _0x2a5537 = _0x2a5537.call(_0x277d42);
      },
      n: function () {
        var _0xd64a00 = _0x2a5537.next();
        _0x4aa444 = _0xd64a00.done;
        return _0xd64a00;
      },
      e: function (_0x282010) {
        _0x57ea88 = !0;
        _0x5f06b1 = _0x282010;
      },
      f: function () {
        try {
          _0x4aa444 || null == _0x2a5537.return || _0x2a5537.return();
        } finally {
          if (_0x57ea88) {
            throw _0x5f06b1;
          }
        }
      }
    };
  }
  if (Array.isArray(_0x277d42) || (_0x2a5537 = c(_0x277d42)) || _0x230e84 && _0x277d42 && "number" == typeof _0x277d42.length) {
    _0x2a5537 && (_0x277d42 = _0x2a5537);
    _0xc4ce13 = 0;
    return {
      s: _0x230e84 = function () {},
      n: function () {
        return _0xc4ce13 >= _0x277d42.length ? {
          done: !0
        } : {
          done: !1,
          value: _0x277d42[_0xc4ce13++]
        };
      },
      e: function (_0x45e71a) {
        throw _0x45e71a;
      },
      f: _0x230e84
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function c(_0x58e0b2, _0x31458d) {
  var _0x1d0c15;
  if (_0x58e0b2) {
    return "string" == typeof _0x58e0b2 ? l(_0x58e0b2, _0x31458d) : "Map" === (_0x1d0c15 = "Object" === (_0x1d0c15 = Object.prototype.toString.call(_0x58e0b2).slice(8, -1)) && _0x58e0b2.constructor ? _0x58e0b2.constructor.name : _0x1d0c15) || "Set" === _0x1d0c15 ? Array.from(_0x58e0b2) : "Arguments" === _0x1d0c15 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1d0c15) ? l(_0x58e0b2, _0x31458d) : void 0;
  }
}
function l(_0xd54077, _0x46a68a) {
  (null == _0x46a68a || _0x46a68a > _0xd54077.length) && (_0x46a68a = _0xd54077.length);
  for (var _0x50ff7c = 0, _0xf4b3f6 = new Array(_0x46a68a); _0x50ff7c < _0x46a68a; _0x50ff7c++) {
    _0xf4b3f6[_0x50ff7c] = _0xd54077[_0x50ff7c];
  }
  return _0xf4b3f6;
}
function p(_0x55be03, _0x4f72f4) {
  var _0x2833d6,
    _0x4ae206 = Object.keys(_0x55be03);
  Object.getOwnPropertySymbols && (_0x2833d6 = Object.getOwnPropertySymbols(_0x55be03), _0x4f72f4 && (_0x2833d6 = _0x2833d6.filter(function (_0x5e92fd) {
    return Object.getOwnPropertyDescriptor(_0x55be03, _0x5e92fd).enumerable;
  })), _0x4ae206.push.apply(_0x4ae206, _0x2833d6));
  return _0x4ae206;
}
function U(_0x1fb223) {
  for (var _0x4d153b = 1; _0x4d153b < arguments.length; _0x4d153b++) {
    var _0x3e8e97 = null != arguments[_0x4d153b] ? arguments[_0x4d153b] : {};
    _0x4d153b % 2 ? p(Object(_0x3e8e97), !0).forEach(function (_0xd010e4) {
      h(_0x1fb223, _0xd010e4, _0x3e8e97[_0xd010e4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x1fb223, Object.getOwnPropertyDescriptors(_0x3e8e97)) : p(Object(_0x3e8e97)).forEach(function (_0x36920c) {
      Object.defineProperty(_0x1fb223, _0x36920c, Object.getOwnPropertyDescriptor(_0x3e8e97, _0x36920c));
    });
  }
  return _0x1fb223;
}
function h(_0x429b3d, _0x273799, _0x3c90db) {
  (_0x273799 = g(_0x273799)) in _0x429b3d ? Object.defineProperty(_0x429b3d, _0x273799, {
    value: _0x3c90db,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : _0x429b3d[_0x273799] = _0x3c90db;
  return _0x429b3d;
}
function f(_0x2cdb6c, _0x48e97a) {
  if (!(_0x2cdb6c instanceof _0x48e97a)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function d(_0x99d25c, _0x4177b8) {
  for (var _0x224cd1 = 0; _0x224cd1 < _0x4177b8.length; _0x224cd1++) {
    var _0x5334b9 = _0x4177b8[_0x224cd1];
    _0x5334b9.enumerable = _0x5334b9.enumerable || !1;
    _0x5334b9.configurable = !0;
    "value" in _0x5334b9 && (_0x5334b9.writable = !0);
    Object.defineProperty(_0x99d25c, g(_0x5334b9.key), _0x5334b9);
  }
}
function v(_0x519b94, _0x185892, _0x3b86f4) {
  _0x185892 && d(_0x519b94.prototype, _0x185892);
  _0x3b86f4 && d(_0x519b94, _0x3b86f4);
  Object.defineProperty(_0x519b94, "prototype", {
    writable: !1
  });
  return _0x519b94;
}
function g(_0x1bcd8e) {
  _0x1bcd8e = W(_0x1bcd8e, "string");
  return "symbol" == T(_0x1bcd8e) ? _0x1bcd8e : _0x1bcd8e + "";
}
function W(_0x3fd919, _0x9690c8) {
  if ("object" != T(_0x3fd919) || !_0x3fd919) {
    return _0x3fd919;
  }
  var _0x18a6a5 = _0x3fd919[Symbol.toPrimitive];
  if (void 0 === _0x18a6a5) {
    return ("string" === _0x9690c8 ? String : Number)(_0x3fd919);
  }
  _0x18a6a5 = _0x18a6a5.call(_0x3fd919, _0x9690c8 || "default");
  if ("object" != T(_0x18a6a5)) {
    return _0x18a6a5;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
function L() {
  L = function () {
    return _0x4010d2;
  };
  var _0x219ee7,
    _0x4010d2 = {},
    _0x59d466 = Object.prototype,
    _0x579e27 = _0x59d466.hasOwnProperty,
    _0x5b42d8 = Object.defineProperty || function (_0xab895a, _0x427d5b, _0x1cf345) {
      _0xab895a[_0x427d5b] = _0x1cf345.value;
    },
    _0x1daa7e = "function" == typeof Symbol ? Symbol : {},
    _0x47a8ea = _0x1daa7e.iterator || "@@iterator",
    _0x48cd76 = _0x1daa7e.asyncIterator || "@@asyncIterator",
    _0x4d5e4b = _0x1daa7e.toStringTag || "@@toStringTag";
  function _0x2a78b4(_0x1051b9, _0x1a2d70, _0x4a6192) {
    Object.defineProperty(_0x1051b9, _0x1a2d70, {
      value: _0x4a6192,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
    return _0x1051b9[_0x1a2d70];
  }
  try {
    _0x2a78b4({}, "");
  } catch (_0x1c733a) {
    _0x2a78b4 = function (_0x708bb3, _0x1ac657, _0x4856cc) {
      return _0x708bb3[_0x1ac657] = _0x4856cc;
    };
  }
  function _0x252d10(_0x5bb959, _0x3d0e39, _0x4f8e91, _0x32e9b0) {
    var _0x17fbff,
      _0x29a631,
      _0x3d6eda,
      _0x17218c,
      _0x3d0e39 = _0x3d0e39 && _0x3d0e39.prototype instanceof _0x221944 ? _0x3d0e39 : _0x221944,
      _0x3d0e39 = Object.create(_0x3d0e39.prototype),
      _0x32e9b0 = new _0x4bb2aa(_0x32e9b0 || []);
    _0x5b42d8(_0x3d0e39, "_invoke", {
      value: (_0x17fbff = _0x5bb959, _0x29a631 = _0x4f8e91, _0x3d6eda = _0x32e9b0, _0x17218c = _0x27821e, function (_0xccffcc, _0x2ffae5) {
        if (_0x17218c === _0x471dca) {
          throw Error("Generator is already running");
        }
        if (_0x17218c === _0x47b8b6) {
          if ("throw" === _0xccffcc) {
            throw _0x2ffae5;
          }
          return {
            value: _0x219ee7,
            done: !0
          };
        }
        for (_0x3d6eda.method = _0xccffcc, _0x3d6eda.arg = _0x2ffae5;;) {
          var _0x446c0c = _0x3d6eda.delegate;
          if (_0x446c0c) {
            _0x446c0c = function _0x1dd539(_0x7f2b, _0x393c83) {
              var _0x379d3f = _0x393c83.method,
                _0x5350cc = _0x7f2b.iterator[_0x379d3f];
              if (_0x5350cc === _0x219ee7) {
                _0x393c83.delegate = null;
                "throw" === _0x379d3f && _0x7f2b.iterator.return && (_0x393c83.method = "return", _0x393c83.arg = _0x219ee7, _0x1dd539(_0x7f2b, _0x393c83), "throw" === _0x393c83.method) || "return" !== _0x379d3f && (_0x393c83.method = "throw", _0x393c83.arg = new TypeError("The iterator does not provide a '" + _0x379d3f + "' method"));
                return _0x247048;
              }
              _0x379d3f = _0xcf5b63(_0x5350cc, _0x7f2b.iterator, _0x393c83.arg);
              if ("throw" === _0x379d3f.type) {
                _0x393c83.method = "throw";
                _0x393c83.arg = _0x379d3f.arg;
                _0x393c83.delegate = null;
                return _0x247048;
              }
              _0x5350cc = _0x379d3f.arg;
              return _0x5350cc ? _0x5350cc.done ? (_0x393c83[_0x7f2b.resultName] = _0x5350cc.value, _0x393c83.next = _0x7f2b.nextLoc, "return" !== _0x393c83.method && (_0x393c83.method = "next", _0x393c83.arg = _0x219ee7), _0x393c83.delegate = null, _0x247048) : _0x5350cc : (_0x393c83.method = "throw", _0x393c83.arg = new TypeError("iterator result is not an object"), _0x393c83.delegate = null, _0x247048);
            }(_0x446c0c, _0x3d6eda);
            if (_0x446c0c) {
              if (_0x446c0c === _0x247048) {
                continue;
              }
              return _0x446c0c;
            }
          }
          if ("next" === _0x3d6eda.method) {
            _0x3d6eda.sent = _0x3d6eda._sent = _0x3d6eda.arg;
          } else {
            if ("throw" === _0x3d6eda.method) {
              if (_0x17218c === _0x27821e) {
                throw _0x17218c = _0x47b8b6, _0x3d6eda.arg;
              }
              _0x3d6eda.dispatchException(_0x3d6eda.arg);
            } else {
              "return" === _0x3d6eda.method && _0x3d6eda.abrupt("return", _0x3d6eda.arg);
            }
          }
          _0x17218c = _0x471dca;
          _0x446c0c = _0xcf5b63(_0x17fbff, _0x29a631, _0x3d6eda);
          if ("normal" === _0x446c0c.type) {
            if (_0x17218c = _0x3d6eda.done ? _0x47b8b6 : _0x431726, _0x446c0c.arg === _0x247048) {
              continue;
            }
            return {
              value: _0x446c0c.arg,
              done: _0x3d6eda.done
            };
          }
          "throw" === _0x446c0c.type && (_0x17218c = _0x47b8b6, _0x3d6eda.method = "throw", _0x3d6eda.arg = _0x446c0c.arg);
        }
      })
    });
    return _0x3d0e39;
  }
  function _0xcf5b63(_0x2c8982, _0xc2561f, _0x27efde) {
    try {
      return {
        type: "normal",
        arg: _0x2c8982.call(_0xc2561f, _0x27efde)
      };
    } catch (_0x8f8834) {
      return {
        type: "throw",
        arg: _0x8f8834
      };
    }
  }
  _0x4010d2.wrap = _0x252d10;
  var _0x27821e = "suspendedStart",
    _0x431726 = "suspendedYield",
    _0x471dca = "executing",
    _0x47b8b6 = "completed",
    _0x247048 = {};
  function _0x221944() {}
  function _0x253f05() {}
  function _0x3b2e5f() {}
  var _0x1daa7e = {},
    _0x4bd106 = (_0x2a78b4(_0x1daa7e, _0x47a8ea, function () {
      return this;
    }), Object.getPrototypeOf),
    _0x4bd106 = _0x4bd106 && _0x4bd106(_0x4bd106(_0x5cde52([]))),
    _0x29310b = (_0x4bd106 && _0x4bd106 !== _0x59d466 && _0x579e27.call(_0x4bd106, _0x47a8ea) && (_0x1daa7e = _0x4bd106), _0x3b2e5f.prototype = _0x221944.prototype = Object.create(_0x1daa7e));
  function _0x118631(_0x30edfb) {
    ["next", "throw", "return"].forEach(function (_0x4ff0df) {
      _0x2a78b4(_0x30edfb, _0x4ff0df, function (_0xa78e7c) {
        return this._invoke(_0x4ff0df, _0xa78e7c);
      });
    });
  }
  function _0x4cbec2(_0x47d660, _0x2e1efd) {
    var _0x46fa3a;
    _0x5b42d8(this, "_invoke", {
      value: function (_0x41bae7, _0x231f2e) {
        function _0x58796d() {
          return new _0x2e1efd(function (_0x46c043, _0x3567d3) {
            !function _0x5b2102(_0x59523c, _0x1ea43b, _0x184cc6, _0xa2aa65) {
              var _0x32ec48,
                _0x59523c = _0xcf5b63(_0x47d660[_0x59523c], _0x47d660, _0x1ea43b);
              if ("throw" !== _0x59523c.type) {
                return (_0x1ea43b = (_0x32ec48 = _0x59523c.arg).value) && "object" == T(_0x1ea43b) && _0x579e27.call(_0x1ea43b, "__await") ? _0x2e1efd.resolve(_0x1ea43b.__await).then(function (_0x7b11f) {
                  _0x5b2102("next", _0x7b11f, _0x184cc6, _0xa2aa65);
                }, function (_0x42fa21) {
                  _0x5b2102("throw", _0x42fa21, _0x184cc6, _0xa2aa65);
                }) : _0x2e1efd.resolve(_0x1ea43b).then(function (_0x30b9e3) {
                  _0x32ec48.value = _0x30b9e3;
                  _0x184cc6(_0x32ec48);
                }, function (_0x5addbd) {
                  return _0x5b2102("throw", _0x5addbd, _0x184cc6, _0xa2aa65);
                });
              }
              _0xa2aa65(_0x59523c.arg);
            }(_0x41bae7, _0x231f2e, _0x46c043, _0x3567d3);
          });
        }
        return _0x46fa3a = _0x46fa3a ? _0x46fa3a.then(_0x58796d, _0x58796d) : _0x58796d();
      }
    });
  }
  function _0x595727(_0x2f85fd) {
    var _0x1ad4ea = {
      tryLoc: _0x2f85fd[0],
      catchLoc: _0x2f85fd[1],
      finallyLoc: _0x2f85fd[2],
      afterLoc: _0x2f85fd[3]
    };
    1 in _0x2f85fd;
    2 in _0x2f85fd;
    this.tryEntries.push(_0x1ad4ea);
  }
  function _0x36ef10(_0x275803) {
    var _0x49cfb5 = _0x275803.completion || {};
    _0x49cfb5.type = "normal";
    delete _0x49cfb5.arg;
    _0x275803.completion = _0x49cfb5;
  }
  function _0x4bb2aa(_0xb06849) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    _0xb06849.forEach(_0x595727, this);
    this.reset(!0);
  }
  function _0x5cde52(_0x2e40dc) {
    if (_0x2e40dc || "" === _0x2e40dc) {
      var _0x44e03f,
        _0x96a4ed = _0x2e40dc[_0x47a8ea];
      if (_0x96a4ed) {
        return _0x96a4ed.call(_0x2e40dc);
      }
      if ("function" == typeof _0x2e40dc.next) {
        return _0x2e40dc;
      }
      if (!isNaN(_0x2e40dc.length)) {
        _0x44e03f = -1;
        return (_0x96a4ed = function _0x5c4f37() {
          for (; ++_0x44e03f < _0x2e40dc.length;) {
            if (_0x579e27.call(_0x2e40dc, _0x44e03f)) {
              _0x5c4f37.value = _0x2e40dc[_0x44e03f];
              _0x5c4f37.done = !1;
              return _0x5c4f37;
            }
          }
          _0x5c4f37.value = _0x219ee7;
          _0x5c4f37.done = !0;
          return _0x5c4f37;
        }).next = _0x96a4ed;
      }
    }
    throw new TypeError(T(_0x2e40dc) + " is not iterable");
  }
  _0x5b42d8(_0x29310b, "constructor", {
    value: _0x253f05.prototype = _0x3b2e5f,
    configurable: !0
  });
  _0x5b42d8(_0x3b2e5f, "constructor", {
    value: _0x253f05,
    configurable: !0
  });
  _0x253f05.displayName = _0x2a78b4(_0x3b2e5f, _0x4d5e4b, "GeneratorFunction");
  _0x4010d2.isGeneratorFunction = function (_0x2e3325) {
    _0x2e3325 = "function" == typeof _0x2e3325 && _0x2e3325.constructor;
    return !!_0x2e3325 && (_0x2e3325 === _0x253f05 || "GeneratorFunction" === (_0x2e3325.displayName || _0x2e3325.name));
  };
  _0x4010d2.mark = function (_0x517200) {
    Object.setPrototypeOf ? Object.setPrototypeOf(_0x517200, _0x3b2e5f) : (_0x517200.__proto__ = _0x3b2e5f, _0x2a78b4(_0x517200, _0x4d5e4b, "GeneratorFunction"));
    _0x517200.prototype = Object.create(_0x29310b);
    return _0x517200;
  };
  _0x4010d2.awrap = function (_0x151734) {
    return {
      __await: _0x151734
    };
  };
  _0x118631(_0x4cbec2.prototype);
  _0x2a78b4(_0x4cbec2.prototype, _0x48cd76, function () {
    return this;
  });
  _0x4010d2.AsyncIterator = _0x4cbec2;
  _0x4010d2.async = function (_0x15a7cf, _0x195154, _0x488865, _0x24f142, _0x73d38) {
    void 0 === _0x73d38 && (_0x73d38 = Promise);
    var _0x5e2cc8 = new _0x4cbec2(_0x252d10(_0x15a7cf, _0x195154, _0x488865, _0x24f142), _0x73d38);
    return _0x4010d2.isGeneratorFunction(_0x195154) ? _0x5e2cc8 : _0x5e2cc8.next().then(function (_0x4e4d9e) {
      return _0x4e4d9e.done ? _0x4e4d9e.value : _0x5e2cc8.next();
    });
  };
  _0x118631(_0x29310b);
  _0x2a78b4(_0x29310b, _0x4d5e4b, "Generator");
  _0x2a78b4(_0x29310b, _0x47a8ea, function () {
    return this;
  });
  _0x2a78b4(_0x29310b, "toString", function () {
    return "[object Generator]";
  });
  _0x4010d2.keys = function (_0x2211ec) {
    var _0x5f19e3,
      _0x2e512f = Object(_0x2211ec),
      _0xd59095 = [];
    for (_0x5f19e3 in _0x2e512f) _0xd59095.push(_0x5f19e3);
    _0xd59095.reverse();
    return function _0x1bb2d7() {
      for (; _0xd59095.length;) {
        var _0x1a4000 = _0xd59095.pop();
        if (_0x1a4000 in _0x2e512f) {
          _0x1bb2d7.value = _0x1a4000;
          _0x1bb2d7.done = !1;
          return _0x1bb2d7;
        }
      }
      _0x1bb2d7.done = !0;
      return _0x1bb2d7;
    };
  };
  _0x4010d2.values = _0x5cde52;
  _0x4bb2aa.prototype = {
    constructor: _0x4bb2aa,
    reset: function (_0x101720) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x219ee7, this.done = !1, this.delegate = null, this.method = "next", this.arg = _0x219ee7, this.tryEntries.forEach(_0x36ef10), !_0x101720) {
        for (var _0xba645f in this) "t" === _0xba645f.charAt(0) && _0x579e27.call(this, _0xba645f) && !isNaN(+_0xba645f.slice(1)) && (this[_0xba645f] = _0x219ee7);
      }
    },
    stop: function () {
      this.done = !0;
      var _0x13ac4f = this.tryEntries[0].completion;
      if ("throw" === _0x13ac4f.type) {
        throw _0x13ac4f.arg;
      }
      return this.rval;
    },
    dispatchException: function (_0xab2c4c) {
      if (this.done) {
        throw _0xab2c4c;
      }
      var _0x31ef52 = this;
      function _0x6d15(_0x50368b, _0x39443b) {
        _0x48245b.type = "throw";
        _0x48245b.arg = _0xab2c4c;
        _0x31ef52.next = _0x50368b;
        _0x39443b && (_0x31ef52.method = "next", _0x31ef52.arg = _0x219ee7);
        return !!_0x39443b;
      }
      for (var _0x492644 = this.tryEntries.length - 1; 0 <= _0x492644; --_0x492644) {
        var _0x799de = this.tryEntries[_0x492644],
          _0x48245b = _0x799de.completion;
        if ("root" === _0x799de.tryLoc) {
          return _0x6d15("end");
        }
        if (_0x799de.tryLoc <= this.prev) {
          var _0x5d6820 = _0x579e27.call(_0x799de, "catchLoc"),
            _0x1f1623 = _0x579e27.call(_0x799de, "finallyLoc");
          if (_0x5d6820 && _0x1f1623) {
            if (this.prev < _0x799de.catchLoc) {
              return _0x6d15(_0x799de.catchLoc, !0);
            }
            if (this.prev < _0x799de.finallyLoc) {
              return _0x6d15(_0x799de.finallyLoc);
            }
          } else {
            if (_0x5d6820) {
              if (this.prev < _0x799de.catchLoc) {
                return _0x6d15(_0x799de.catchLoc, !0);
              }
            } else {
              if (!_0x1f1623) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < _0x799de.finallyLoc) {
                return _0x6d15(_0x799de.finallyLoc);
              }
            }
          }
        }
      }
    },
    abrupt: function (_0x5cbf7f, _0x2f6a51) {
      for (var _0x566922 = this.tryEntries.length - 1; 0 <= _0x566922; --_0x566922) {
        var _0x2dfac3 = this.tryEntries[_0x566922];
        if (_0x2dfac3.tryLoc <= this.prev && _0x579e27.call(_0x2dfac3, "finallyLoc") && this.prev < _0x2dfac3.finallyLoc) {
          var _0x25bddb = _0x2dfac3;
          break;
        }
      }
      var _0x5d98a7 = (_0x25bddb = _0x25bddb && ("break" === _0x5cbf7f || "continue" === _0x5cbf7f) && _0x25bddb.tryLoc <= _0x2f6a51 && _0x2f6a51 <= _0x25bddb.finallyLoc ? null : _0x25bddb) ? _0x25bddb.completion : {};
      _0x5d98a7.type = _0x5cbf7f;
      _0x5d98a7.arg = _0x2f6a51;
      return _0x25bddb ? (this.method = "next", this.next = _0x25bddb.finallyLoc, _0x247048) : this.complete(_0x5d98a7);
    },
    complete: function (_0x3dad44, _0x32c0ab) {
      if ("throw" === _0x3dad44.type) {
        throw _0x3dad44.arg;
      }
      "break" === _0x3dad44.type || "continue" === _0x3dad44.type ? this.next = _0x3dad44.arg : "return" === _0x3dad44.type ? (this.rval = this.arg = _0x3dad44.arg, this.method = "return", this.next = "end") : "normal" === _0x3dad44.type && _0x32c0ab && (this.next = _0x32c0ab);
      return _0x247048;
    },
    finish: function (_0x41c4fd) {
      for (var _0x4c6352 = this.tryEntries.length - 1; 0 <= _0x4c6352; --_0x4c6352) {
        var _0x22e28c = this.tryEntries[_0x4c6352];
        if (_0x22e28c.finallyLoc === _0x41c4fd) {
          this.complete(_0x22e28c.completion, _0x22e28c.afterLoc);
          _0x36ef10(_0x22e28c);
          return _0x247048;
        }
      }
    },
    catch: function (_0x2ff642) {
      for (var _0x5cca70 = this.tryEntries.length - 1; 0 <= _0x5cca70; --_0x5cca70) {
        var _0x2f7724,
          _0x1f9c57,
          _0x2df461 = this.tryEntries[_0x5cca70];
        if (_0x2df461.tryLoc === _0x2ff642) {
          "throw" === (_0x2f7724 = _0x2df461.completion).type && (_0x1f9c57 = _0x2f7724.arg, _0x36ef10(_0x2df461));
          return _0x1f9c57;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (_0x455dbd, _0x4eeffb, _0x177d69) {
      this.delegate = {
        iterator: _0x5cde52(_0x455dbd),
        resultName: _0x4eeffb,
        nextLoc: _0x177d69
      };
      "next" === this.method && (this.arg = _0x219ee7);
      return _0x247048;
    }
  };
  return _0x4010d2;
}
function y(_0x48b703, _0x14ada4, _0x173f2b, _0x48117e, _0xdb161d, _0x426689, _0x33a70b) {
  try {
    var _0xd00bc2 = _0x48b703[_0x426689](_0x33a70b),
      _0x1c0a1b = _0xd00bc2.value;
  } catch (_0xe488f) {
    return void _0x173f2b(_0xe488f);
  }
  _0xd00bc2.done ? _0x14ada4(_0x1c0a1b) : Promise.resolve(_0x1c0a1b).then(_0x48117e, _0xdb161d);
}
function m(_0x4b9e77) {
  return function () {
    var _0x2d37db = this,
      _0x56ba4f = arguments;
    return new Promise(function (_0x54d5a2, _0x5eb015) {
      var _0x45df6a = _0x4b9e77.apply(_0x2d37db, _0x56ba4f);
      function _0x261c20(_0x51fa67) {
        y(_0x45df6a, _0x54d5a2, _0x5eb015, _0x261c20, _0xbe928f, "next", _0x51fa67);
      }
      function _0xbe928f(_0xe4ac57) {
        y(_0x45df6a, _0x54d5a2, _0x5eb015, _0x261c20, _0xbe928f, "throw", _0xe4ac57);
      }
      _0x261c20(void 0);
    });
  };
}
var b = require("axios"),
  x = new at("叮叮联盟阅读"),
  J = (tt(), "V1.00"),
  w = "ddlmyd",
  k = ["\n", "&"],
  N = (x.isNode() ? process.env[w] : x.getdata(w)) || "",
  _ = (x.isNode() ? process.env.wxpusherAppToken : x.getdata("wxpusherAppToken")) || "",
  $ = (x.isNode() ? process.env.wxpusherTopicId : x.getdata("wxpusherTopicId")) || "",
  S = [],
  z = 0,
  A = 14,
  O = require("jimp"),
  H = require("jsqr"),
  D = require("qrcode"),
  G = require("path"),
  j = "https://fastly.jsdelivr.net/gh/";
function X() {
  return e.apply(this, arguments);
}
function e() {
  return (e = m(L().mark(function _0x5adb42() {
    var _0x2455f2;
    return L().wrap(function (_0x198396) {
      for (;;) {
        switch (_0x198396.prev = _0x198396.next) {
          case 0:
            _0x198396.prev = 0;
            _0x198396.next = 3;
            return b.get(j + "Huansheng1/my-qinglong-js@main/announce.txt", {
              timeout: 60000,
              validateStatus: function () {
                return !0;
              }
            });
          case 3:
            _0x2455f2 = _0x198396.sent;
            console.log(_0x2455f2.data || "广告区域（预留）: 啦啦啦~啦啦啦~，我是卖广告的小行家");
            _0x198396.next = 10;
            break;
          case 7:
            _0x198396.prev = 7;
            _0x198396.t0 = _0x198396.catch(0);
            console.log("获取公告失败: ".concat(_0x198396.t0.message));
          case 10:
          case "end":
            return _0x198396.stop();
        }
      }
    }, _0x5adb42, null, [[0, 7]]);
  }))).apply(this, arguments);
}
function Q() {
  return E.apply(this, arguments);
}
function E() {
  return (E = m(L().mark(function _0x2f91b9() {
    var _0x4f1afc,
      _0x45c605,
      _0x415780,
      _0x3b6af0 = arguments;
    return L().wrap(function (_0x35b08e) {
      for (;;) {
        switch (_0x35b08e.prev = _0x35b08e.next) {
          case 0:
            _0x4f1afc = 0 < _0x3b6af0.length && void 0 !== _0x3b6af0[0] ? _0x3b6af0[0] : "Huansheng1/my-qinglong-js@main/README.md";
            _0x45c605 = 1 < _0x3b6af0.length && void 0 !== _0x3b6af0[1] ? _0x3b6af0[1] : 20000;
            _0x4f1afc = "".concat(j).concat(_0x4f1afc);
            _0x35b08e.prev = 3;
            _0x35b08e.next = 6;
            return b.get(_0x4f1afc, {
              timeout: _0x45c605,
              validateStatus: function (_0x8ee91b) {
                return 200 <= _0x8ee91b && _0x8ee91b < 300;
              }
            });
          case 6:
            _0x4f1afc = _0x35b08e.sent;
            _0x45c605 = /版本号：V\s*(['"`])([\d.]+)\1/;
            _0x415780 = _0x4f1afc.data.match(_0x45c605);
            _0x415780 = _0x415780 ? _0x415780[2] : "";
            console.log("当前版本:[".concat(J || "未知", "]>>>>>云端☁️版本:[").concat(_0x415780 || "未知", "]"));
            return _0x35b08e.abrupt("return", _0x415780);
          case 14:
            _0x35b08e.prev = 14;
            _0x35b08e.t0 = _0x35b08e.catch(3);
            console.error("拉取仓库最新版本脚本失败: ".concat(_0x35b08e.t0.message.replace(j + "Huansheng1/my-qinglong-js@main/", "")));
            return _0x35b08e.abrupt("return", null);
          case 18:
          case "end":
            return _0x35b08e.stop();
        }
      }
    }, _0x2f91b9, null, [[3, 14]]);
  }))).apply(this, arguments);
}
function B(_0x3e9d36, _0x113048, _0x39cf44) {
  for (var _0x2c1201, _0x1eecaa, _0x220042 = 3 < arguments.length && void 0 !== arguments[3] && arguments[3], _0x523dc3 = [], _0x2ffc2a = _0x3e9d36.indexOf(_0x113048); -1 !== _0x2ffc2a && -1 !== (_0x1eecaa = (_0x2c1201 = _0x3e9d36.slice(_0x2ffc2a + _0x113048.length)).indexOf(_0x39cf44)) && (_0x523dc3.push(_0x2c1201.slice(0, _0x1eecaa)), _0x220042);) {
    _0x2ffc2a = (_0x3e9d36 = _0x2c1201.slice(_0x1eecaa + _0x39cf44.length)).indexOf(_0x113048);
  }
  return _0x220042 ? _0x523dc3 : _0x523dc3[0] || "";
}
function C(_0x5cd3b8) {
  function _0x190be2() {
    return (_0x190be2 = m(L().mark(function _0x455d21(_0x4b0cde) {
      var _0x22399b, _0x115092;
      return L().wrap(function (_0x7e91aa) {
        for (;;) {
          switch (_0x7e91aa.prev = _0x7e91aa.next) {
            case 0:
              if (_0x22399b = null, _0x4b0cde.startsWith("data:image/") && (_0x22399b = _0x4b0cde.split(",")[1]), null != _0x4b0cde && _0x4b0cde.includes(";base64,")) {
                _0x7e91aa.next = 8;
                break;
              }
              _0x7e91aa.next = 5;
              return O.read(_0x4b0cde);
            case 5:
              _0x7e91aa.t0 = _0x7e91aa.sent;
              _0x7e91aa.next = 11;
              break;
            case 8:
              _0x7e91aa.next = 10;
              return O.read(Buffer.from(_0x22399b, "base64"));
            case 10:
              _0x7e91aa.t0 = _0x7e91aa.sent;
            case 11:
              if (_0x115092 = _0x7e91aa.t0, _0x115092 = H(_0x115092.bitmap.data, _0x115092.bitmap.width, _0x115092.bitmap.height)) {
                return _0x7e91aa.abrupt("return", _0x115092.data);
              }
              _0x7e91aa.next = 17;
              break;
            case 17:
              throw new Error("无法从图片中解析二维码");
            case 18:
            case "end":
              return _0x7e91aa.stop();
          }
        }
      }, _0x455d21);
    }))).apply(this, arguments);
  }
  return function () {
    return _0x190be2.apply(this, arguments);
  }(_0x5cd3b8);
}
var K = "api.jiudingliliang.com",
  Z = function () {
    return v(function _0x204c31(_0x488022) {
      f(this, _0x204c31);
      this.wxpusherAppToken = _;
      this.wxpusherTopicId = $;
      this.disabledReadJob = !1;
      this.index = ++z;
      this.valid = !1;
      var _0x53892b = null == _0x488022 ? void 0 : _0x488022.split("#");
      switch (null == _0x53892b ? void 0 : _0x53892b.length) {
        case 1:
          this.activedAuthToken = _0x53892b[0];
          break;
        case 3:
          this.activedAuthToken = _0x53892b[0];
          this.wxpusherAppToken = _0x53892b[1];
          this.wxpusherTopicId = _0x53892b[2];
          break;
        default:
          console.log("[".concat(this.index, "] 参数错误，请检查参数是否正确"));
      }
    }, [{
      key: "taskApi",
      value: (_0x2c12ac = m(L().mark(function _0x2b73d8(_0x1a8e9e, _0xbd3ea2, _0xd0cb03, _0xa2615b) {
        var _0x130c5b,
          _0x24e818,
          _0x38c439,
          _0x403fa8,
          _0x46a162 = arguments;
        return L().wrap(function (_0x5cdc62) {
          for (;;) {
            switch (_0x5cdc62.prev = _0x5cdc62.next) {
              case 0:
                _0x130c5b = 4 < _0x46a162.length && void 0 !== _0x46a162[4] ? _0x46a162[4] : {};
                _0x38c439 = 5 < _0x46a162.length && void 0 !== _0x46a162[5] ? _0x46a162[5] : 3;
                _0x5cdc62.prev = 2;
                _0x130c5b = {
                  url: _0xd0cb03,
                  headers: U({
                    Host: K,
                    Connection: "keep-alive",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090b19) XWEB/9129 Flue",
                    "Content-Type": "application/json;charset=UTF-8",
                    Accept: "*/*",
                    Origin: "http://niskeacuy.roboathena.cn",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "http://niskeacuy.roboathena.cn/",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  }, _0x130c5b),
                  timeout: 60000
                };
                this.activedAuthToken && (_0x130c5b.headers.Authorization = "Bearer " + (null == (_0x24e818 = this.activedAuthToken) ? void 0 : _0x24e818.replace("Bearer ", "")));
                _0xa2615b && (_0x130c5b.body = _0xa2615b);
                _0x24e818 = _0x38c439;
              case 7:
                if (0 < _0x24e818) {
                  _0x5cdc62.prev = 8;
                  _0x5cdc62.next = 11;
                  return it(_0xbd3ea2, _0x130c5b);
                }
                _0x5cdc62.next = 36;
                break;
              case 11:
                if ((_0x403fa8 = _0x5cdc62.sent).resp && 200 <= _0x403fa8.resp.statusCode && _0x403fa8.resp.statusCode < 400) {
                  if (_0x403fa8.resp.body) {
                    return _0x5cdc62.abrupt("return", JSON.parse(_0x403fa8.resp.body) || _0x403fa8.resp.body);
                  }
                  _0x5cdc62.next = 17;
                } else {
                  _0x5cdc62.next = 21;
                }
                break;
              case 17:
                console.log("[".concat(_0x1a8e9e, "]请求异常，服务器没返回任何数据~"));
                return _0x5cdc62.abrupt("return", "");
              case 19:
                _0x5cdc62.next = 25;
                break;
              case 21:
                if (console.log("请求出现未知错误：".concat(_0x403fa8.err || "Invalid status code")), 1 < _0x24e818) {
                  _0x24e818--;
                  return _0x5cdc62.abrupt("continue", 7);
                }
                _0x5cdc62.next = 25;
                break;
              case 25:
                return _0x5cdc62.abrupt("return", null == (_0x38c439 = _0x403fa8.resp) ? void 0 : _0x38c439.body);
              case 28:
                if (_0x5cdc62.prev = 28, _0x5cdc62.t0 = _0x5cdc62.catch(8), console.log("[".concat(_0x1a8e9e, "]请求出现未知异常："), _0x5cdc62.t0), 1 < _0x24e818) {
                  _0x24e818--;
                  return _0x5cdc62.abrupt("continue", 7);
                }
                _0x5cdc62.next = 34;
                break;
              case 34:
                _0x5cdc62.next = 7;
                break;
              case 36:
                _0x5cdc62.next = 41;
                break;
              case 38:
                _0x5cdc62.prev = 38;
                _0x5cdc62.t1 = _0x5cdc62.catch(2);
                console.log("[".concat(_0x1a8e9e, "]请求出现未知异常："), _0x5cdc62.t1);
              case 41:
              case "end":
                return _0x5cdc62.stop();
            }
          }
        }, _0x2b73d8, this, [[2, 38], [8, 28]]);
      })), function (_0x7b6cc2, _0x586e63, _0x22e0fe, _0x241629) {
        return _0x2c12ac.apply(this, arguments);
      })
    }, {
      key: "getUserInfo",
      value: (_0x1aa170 = m(L().mark(function _0x2b491d() {
        var _0x39c1a0 = this;
        return L().wrap(function (_0x41a188) {
          for (;;) {
            switch (_0x41a188.prev = _0x41a188.next) {
              case 0:
                _0x41a188.prev = 0;
                return _0x41a188.abrupt("return", this.taskApi("getUserInfo", "post", "https://api.jiudingliliang.com/user/info", "{}").then(function () {
                  var _0x429e84 = m(L().mark(function _0x21794a(_0x3ba1a5) {
                    var _0xa68c63;
                    return L().wrap(function (_0x22e675) {
                      for (;;) {
                        switch (_0x22e675.prev = _0x22e675.next) {
                          case 0:
                            if (10000 == (null == _0x3ba1a5 ? void 0 : _0x3ba1a5.code)) {
                              _0x39c1a0.balance = (null == _0x3ba1a5 || null == (_0xa68c63 = _0x3ba1a5.result) ? void 0 : _0xa68c63.balanceCash) || 0;
                              x.logAndNotify("账号[".concat(_0x39c1a0.index, "] 查询个人信息成功，账号余额 ").concat(_0x39c1a0.balance || 0, "，账号名 ").concat((null == _0x3ba1a5 || null == (_0xa68c63 = _0x3ba1a5.result) ? void 0 : _0xa68c63.nickname) || "-"));
                              _0x39c1a0.valid = !0;
                              return _0x22e675.abrupt("return", !0);
                            }
                            _0x22e675.next = 7;
                            break;
                          case 7:
                            x.logAndNotify("账号[".concat(_0x39c1a0.index, "] - 查询个人信息失败：").concat((null == _0x3ba1a5 ? void 0 : _0x3ba1a5.msg) || JSON.stringify(_0x3ba1a5)));
                            _0x39c1a0.valid = !1;
                            return _0x22e675.abrupt("return", !1);
                          case 10:
                          case "end":
                            return _0x22e675.stop();
                        }
                      }
                    }, _0x21794a);
                  }));
                  return function (_0x25beb2) {
                    return _0x429e84.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x41a188.prev = 8;
                _0x41a188.t0 = _0x41a188.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 查询个人信息失败：") + (null === _0x41a188.t0 || void 0 === _0x41a188.t0 ? void 0 : _0x41a188.t0.message));
              case 11:
              case "end":
                return _0x41a188.stop();
            }
          }
        }, _0x2b491d, this, [[0, 8]]);
      })), function () {
        return _0x1aa170.apply(this, arguments);
      })
    }, {
      key: "getReadQr",
      value: (_0x40a547 = m(L().mark(function _0x271240() {
        var _0x43ca37,
          _0x4dc236 = this;
        return L().wrap(function (_0x2d32e8) {
          for (;;) {
            switch (_0x2d32e8.prev = _0x2d32e8.next) {
              case 0:
                _0x2d32e8.prev = 0;
                _0x43ca37 = JSON.stringify({
                  route: "/pages/read/read"
                });
                return _0x2d32e8.abrupt("return", this.taskApi("getReadQr", "post", "https://api.jiudingliliang.com/task/read-batch", _0x43ca37, {
                  Accept: "*/*"
                }).then(function () {
                  var _0xace49d = m(L().mark(function _0x34fb4d(_0x25b82a) {
                    var _0x53992d;
                    return L().wrap(function (_0x5a072d) {
                      for (;;) {
                        switch (_0x5a072d.prev = _0x5a072d.next) {
                          case 0:
                            if (10000 == (null == _0x25b82a ? void 0 : _0x25b82a.code)) {
                              _0x53992d = null == _0x25b82a || null == (_0x53992d = _0x25b82a.result) ? void 0 : _0x53992d.qrcode;
                              x.logAndNotify("账号[".concat(_0x4dc236.index, "] 获取到阅读二维码成功"));
                              return _0x5a072d.abrupt("return", _0x53992d);
                            }
                            _0x5a072d.next = 6;
                            break;
                          case 6:
                            x.logAndNotify("账号[".concat(_0x4dc236.index, "] - 获取阅读二维码失败：").concat((null == _0x25b82a ? void 0 : _0x25b82a.msg) || JSON.stringify(_0x25b82a)));
                            return _0x5a072d.abrupt("return", !1);
                          case 8:
                          case "end":
                            return _0x5a072d.stop();
                        }
                      }
                    }, _0x34fb4d);
                  }));
                  return function (_0xa9c824) {
                    return _0xace49d.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x2d32e8.prev = 8;
                _0x2d32e8.t0 = _0x2d32e8.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 获取阅读链接失败：") + (null === _0x2d32e8.t0 || void 0 === _0x2d32e8.t0 ? void 0 : _0x2d32e8.t0.message));
              case 11:
              case "end":
                return _0x2d32e8.stop();
            }
          }
        }, _0x271240, this, [[0, 8]]);
      })), function () {
        return _0x40a547.apply(this, arguments);
      })
    }, {
      key: "checkin",
      value: (_0x3b6168 = m(L().mark(function _0x294704() {
        var _0x3a1224,
          _0x137818 = this;
        return L().wrap(function (_0x59abc2) {
          for (;;) {
            switch (_0x59abc2.prev = _0x59abc2.next) {
              case 0:
                _0x59abc2.prev = 0;
                _0x3a1224 = JSON.stringify({});
                return _0x59abc2.abrupt("return", this.taskApi("checkin", "post", "https://api.jiudingliliang.com/task/checkin", _0x3a1224, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x1c37aa = m(L().mark(function _0x34e673(_0x595e61) {
                    return L().wrap(function (_0x4eec0e) {
                      for (;;) {
                        switch (_0x4eec0e.prev = _0x4eec0e.next) {
                          case 0:
                            if (10000 == (null == _0x595e61 ? void 0 : _0x595e61.code)) {
                              x.logAndNotify("账号[".concat(_0x137818.index, "] 签到成功"));
                              return _0x4eec0e.abrupt("return", !0);
                            }
                            _0x4eec0e.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x137818.index, "] - 签到失败：").concat((null == _0x595e61 ? void 0 : _0x595e61.msg) || JSON.stringify(_0x595e61)));
                            return _0x4eec0e.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x4eec0e.stop();
                        }
                      }
                    }, _0x34e673);
                  }));
                  return function (_0x3a7737) {
                    return _0x1c37aa.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x59abc2.prev = 8;
                _0x59abc2.t0 = _0x59abc2.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 签到失败：") + (null === _0x59abc2.t0 || void 0 === _0x59abc2.t0 ? void 0 : _0x59abc2.t0.message));
              case 11:
              case "end":
                return _0x59abc2.stop();
            }
          }
        }, _0x294704, this, [[0, 8]]);
      })), function () {
        return _0x3b6168.apply(this, arguments);
      })
    }, {
      key: "getPostInfo",
      value: (_0x1c8bb2 = m(L().mark(function _0x4901c8() {
        var _0x54477e,
          _0x328e50 = this;
        return L().wrap(function (_0x10aaf8) {
          for (;;) {
            switch (_0x10aaf8.prev = _0x10aaf8.next) {
              case 0:
                _0x10aaf8.prev = 0;
                _0x54477e = JSON.stringify({
                  bn: this.bn,
                  k: this.k
                });
                return _0x10aaf8.abrupt("return", this.taskApi("getPostInfo", "post", "https://api.jiudingliliang.com/task/read-article", _0x54477e, (h(h(h(h(h(h(h(h(h(h(_0x54477e = {
                  Host: this.readHost,
                  Accept: "*/*"
                }, "Host", "api.jiudingliliang.com"), "Connection", "keep-alive"), "User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090b19) XWEB/9129 Flue"), "Content-Type", "application/json;charset=UTF-8"), "Accept", "*/*"), "Origin", "http://d9skfg1gis.ekmwpp.cn"), "Sec-Fetch-Site", "cross-site"), "Sec-Fetch-Mode", "cors"), "Sec-Fetch-Dest", "empty"), "Referer", "http://d9skfg1gis.ekmwpp.cn/"), h(h(_0x54477e, "Accept-Encoding", "gzip, deflate, br"), "Accept-Language", "zh-CN,zh;q=0.9"))).then(function () {
                  var _0x374df3 = m(L().mark(function _0x5387d5(_0x1d4f69) {
                    var _0x2c4c99, _0x3587d2, _0x473a0d, _0x1a65b8, _0x17019c;
                    return L().wrap(function (_0x4c46a1) {
                      for (;;) {
                        switch (_0x4c46a1.prev = _0x4c46a1.next) {
                          case 0:
                            if ("success" != (null == _0x1d4f69 ? void 0 : _0x1d4f69.msg)) {
                              _0x4c46a1.next = 34;
                            } else {
                              if (x.logAndNotify("账号[".concat(_0x328e50.index, "] 获取本轮第[").concat((null == _0x1d4f69 || null == (_0x2c4c99 = _0x1d4f69.result) ? void 0 : _0x2c4c99.readingNumber) || 1, "]篇待阅读文章成功 ，本轮总文章数 ").concat((null == _0x1d4f69 || null == (_0x2c4c99 = _0x1d4f69.result) ? void 0 : _0x2c4c99.totalReading) || "-")), _0x473a0d = null == _0x1d4f69 || null == (_0x473a0d = _0x1d4f69.result) || null == (_0x473a0d = _0x473a0d.articleUrl) ? void 0 : _0x473a0d.includes("__biz="), _0x328e50.k = null == _0x1d4f69 || null == (_0x3587d2 = _0x1d4f69.result) ? void 0 : _0x3587d2.k, _0x328e50.bn = null == _0x1d4f69 || null == (_0x3587d2 = _0x1d4f69.result) ? void 0 : _0x3587d2.batchNumber, _0x473a0d) {
                                _0x4c46a1.next = 8;
                                return x.wait(200);
                              }
                              _0x4c46a1.next = 13;
                            }
                            break;
                          case 8:
                            x.logAndNotify("账号[".concat(_0x328e50.index, "] 模拟阅读 ").concat(A / 2, "秒……"));
                            _0x4c46a1.next = 11;
                            return x.wait(2000 * Math.random() + 500 * A);
                          case 11:
                            _0x4c46a1.next = 19;
                            break;
                          case 13:
                            _0x4c46a1.next = 15;
                            return _0x328e50.wxpusherSend(null == _0x1d4f69 || null == (_0x1a65b8 = _0x1d4f69.result) ? void 0 : _0x1a65b8.articleUrl);
                          case 15:
                            if (_0x4c46a1.sent) {
                              _0x4c46a1.next = 17;
                              break;
                            }
                            return _0x4c46a1.abrupt("return", !1);
                          case 17:
                            _0x4c46a1.next = 19;
                            return x.wait(2000 * Math.random() + 1000 * A);
                          case 19:
                            _0x4c46a1.prev = 19;
                            _0x4c46a1.next = 22;
                            return _0x328e50.readCompleted();
                          case 22:
                            _0x17019c = _0x4c46a1.sent;
                            _0x4c46a1.next = 25;
                            return x.wait(1000 * Math.random());
                          case 25:
                            return _0x4c46a1.abrupt("return", _0x17019c);
                          case 28:
                            _0x4c46a1.prev = 28;
                            _0x4c46a1.t0 = _0x4c46a1.catch(19);
                            console.log("账号[".concat(_0x328e50.index, "] 完成阅读失败："), _0x4c46a1.t0);
                            return _0x4c46a1.abrupt("return", null);
                          case 32:
                            _0x4c46a1.next = 40;
                            break;
                          case 34:
                            if (3 == (null == _0x1d4f69 ? void 0 : _0x1d4f69.code)) {
                              x.logAndNotify("账号[".concat(_0x328e50.index, "] 已阅读完毕该轮，开始结算……"));
                              return _0x4c46a1.abrupt("return", !1);
                            }
                            _0x4c46a1.next = 39;
                            break;
                          case 39:
                            x.logAndNotify("账号[".concat(_0x328e50.index, "] - 获取文章信息失败：").concat((null == _0x1d4f69 ? void 0 : _0x1d4f69.msg) || JSON.stringify(_0x1d4f69)));
                          case 40:
                          case "end":
                            return _0x4c46a1.stop();
                        }
                      }
                    }, _0x5387d5, null, [[19, 28]]);
                  }));
                  return function (_0xe73ea4) {
                    return _0x374df3.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x10aaf8.prev = 8;
                _0x10aaf8.t0 = _0x10aaf8.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] 获取文章信息失败：") + (null === _0x10aaf8.t0 || void 0 === _0x10aaf8.t0 ? void 0 : _0x10aaf8.t0.message));
              case 11:
              case "end":
                return _0x10aaf8.stop();
            }
          }
        }, _0x4901c8, this, [[0, 8]]);
      })), function () {
        return _0x1c8bb2.apply(this, arguments);
      })
    }, {
      key: "wxpusherSend",
      value: (_0x48dcdc = m(L().mark(function _0x28c8d6(_0x3cf6d9) {
        var _0xeda19,
          _0x5644e8 = this;
        return L().wrap(function (_0x1e4f46) {
          for (;;) {
            switch (_0x1e4f46.prev = _0x1e4f46.next) {
              case 0:
                _0x1e4f46.prev = 0;
                _0xeda19 = JSON.stringify(h(h(h({
                  appToken: this.wxpusherAppToken,
                  summary: "叮叮联盟阅读阅读",
                  contentType: 2,
                  topicIds: [this.wxpusherTopicId || "11686"]
                }, "contentType", 2), "url", _0x3cf6d9), "content", "<body onload=\"window.location.href='".concat(_0x3cf6d9, "'\">出现检测文章！！！\n<a style='padding:10px;color:red;font-size:20px;' href='").concat(_0x3cf6d9, "'>正在自动跳转中，如果没反应，请点击我打开待检测文章</a>\n请尽快点击链接完成阅读</body>")));
                return _0x1e4f46.abrupt("return", this.taskApi("wxpusherSend", "post", "http://wxpusher.zjiecode.com/api/send/message", _0xeda19, {
                  Host: "wxpusher.zjiecode.com",
                  "Content-Type": "application/json",
                  Accept: "*/*",
                  Referer: "http://wxpusher.zjiecode.com/"
                }).then(function () {
                  var _0x2a10c7 = m(L().mark(function _0x296e0c(_0x6c424f) {
                    return L().wrap(function (_0x66547c) {
                      for (;;) {
                        switch (_0x66547c.prev = _0x66547c.next) {
                          case 0:
                            if (1000 === (null == _0x6c424f ? void 0 : _0x6c424f.code)) {
                              x.logAndNotify("账号[".concat(_0x5644e8.index, "] 推送检测文章成功，请在 ").concat(A, " 秒内点击"));
                              return _0x66547c.abrupt("return", !0);
                            }
                            _0x66547c.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x5644e8.index, "] 推送检测文章失败：").concat((null == _0x6c424f ? void 0 : _0x6c424f.msg) || JSON.stringify(_0x6c424f)));
                          case 6:
                          case "end":
                            return _0x66547c.stop();
                        }
                      }
                    }, _0x296e0c);
                  }));
                  return function (_0x262dfa) {
                    return _0x2a10c7.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x1e4f46.prev = 8;
                _0x1e4f46.t0 = _0x1e4f46.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] 推送检测文章失败：") + (null === _0x1e4f46.t0 || void 0 === _0x1e4f46.t0 ? void 0 : _0x1e4f46.t0.message));
              case 11:
              case "end":
                return _0x1e4f46.stop();
            }
          }
        }, _0x28c8d6, this, [[0, 8]]);
      })), function (_0xe43d3d) {
        return _0x48dcdc.apply(this, arguments);
      })
    }, {
      key: "readCompleted",
      value: (_0x74937b = m(L().mark(function _0x9153af() {
        var _0x59590b,
          _0xc62182 = this;
        return L().wrap(function (_0x53fcac) {
          for (;;) {
            switch (_0x53fcac.prev = _0x53fcac.next) {
              case 0:
                _0x53fcac.prev = 0;
                _0x59590b = JSON.stringify({
                  bn: this.bn,
                  k: this.k
                });
                return _0x53fcac.abrupt("return", this.taskApi("readRecord", "post", "https://api.jiudingliliang.com/task/read-article-completed", _0x59590b, (h(h(h(h(h(h(h(h(h(h(_0x59590b = {
                  Host: this.readHost,
                  Accept: "*/*"
                }, "Host", "api.jiudingliliang.com"), "Connection", "keep-alive"), "User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090b19) XWEB/9129 Flue"), "Content-Type", "application/json;charset=UTF-8"), "Accept", "*/*"), "Origin", "http://d9skfg1gis.ekmwpp.cn"), "Sec-Fetch-Site", "cross-site"), "Sec-Fetch-Mode", "cors"), "Sec-Fetch-Dest", "empty"), "Referer", "http://d9skfg1gis.ekmwpp.cn/"), h(h(_0x59590b, "Accept-Encoding", "gzip, deflate, br"), "Accept-Language", "zh-CN,zh;q=0.9"))).then(function () {
                  var _0x331573 = m(L().mark(function _0x1a3a89(_0x4bf04f) {
                    var _0x5e324c, _0x2cb131, _0x4260e2, _0x27db20;
                    return L().wrap(function (_0x41262d) {
                      for (;;) {
                        switch (_0x41262d.prev = _0x41262d.next) {
                          case 0:
                            if ("success" != (null == _0x4bf04f ? void 0 : _0x4bf04f.msg)) {
                              _0x41262d.next = 9;
                            } else {
                              if (_0xc62182.k = null == _0x4bf04f || null == (_0x5e324c = _0x4bf04f.result) ? void 0 : _0x5e324c.k, x.logAndNotify("账号[".concat(_0xc62182.index, "] 阅读文章成功，当前阅读进度：[").concat((null == _0x4bf04f || null == (_0x5e324c = _0x4bf04f.result) ? void 0 : _0x5e324c.readingNumber) || 1, "]/[").concat((null == _0x4bf04f || null == (_0x2cb131 = _0x4bf04f.result) ? void 0 : _0x2cb131.totalReading) || "-", "]")), null != _0x4bf04f && null != (_0x2cb131 = _0x4bf04f.result) && _0x2cb131.isFinished) {
                                x.logAndNotify("账号[".concat(_0xc62182.index, "] 已阅读完毕该轮，开始结算……"));
                                return _0x41262d.abrupt("return", !1);
                              }
                              _0x41262d.next = 6;
                            }
                            break;
                          case 6:
                            return _0x41262d.abrupt("return", !0);
                          case 9:
                            if (_0x27db20 = (null == _0x4bf04f ? void 0 : _0x4bf04f.msg) || JSON.stringify(_0x4bf04f), x.logAndNotify("账号[".concat(_0xc62182.index, "] - 阅读第").concat((null == _0x4bf04f || null == (_0x4260e2 = _0x4bf04f.result) ? void 0 : _0x4260e2.readingNumber) || "-", "篇文章失败：").concat(_0x27db20)), null != _0x27db20 && _0x27db20.includes("请求太快，请稍后")) {
                              _0x41262d.next = 14;
                              return x.wait(2000 * Math.random() + 6000);
                            }
                            _0x41262d.next = 17;
                            break;
                          case 14:
                            _0x41262d.next = 16;
                            return _0xc62182.readCompleted();
                          case 16:
                            return _0x41262d.abrupt("return", _0x41262d.sent);
                          case 17:
                          case "end":
                            return _0x41262d.stop();
                        }
                      }
                    }, _0x1a3a89);
                  }));
                  return function (_0x2f76d1) {
                    return _0x331573.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x53fcac.prev = 8;
                _0x53fcac.t0 = _0x53fcac.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] 阅读文章失败：") + (null === _0x53fcac.t0 || void 0 === _0x53fcac.t0 ? void 0 : _0x53fcac.t0.msg));
              case 11:
              case "end":
                return _0x53fcac.stop();
            }
          }
        }, _0x9153af, this, [[0, 8]]);
      })), function () {
        return _0x74937b.apply(this, arguments);
      })
    }, {
      key: "withdrawList",
      value: (_0x5df446 = m(L().mark(function _0x4b345c() {
        var _0x3a3239,
          _0x21fca9 = this;
        return L().wrap(function (_0x32b3a6) {
          for (;;) {
            switch (_0x32b3a6.prev = _0x32b3a6.next) {
              case 0:
                _0x32b3a6.prev = 0;
                _0x3a3239 = JSON.stringify({});
                return _0x32b3a6.abrupt("return", this.taskApi("withdrawList", "post", "https://api.jiudingliliang.com/user/withdraw", _0x3a3239, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x2f0c9c = m(L().mark(function _0x3cc308(_0x3663db) {
                    var _0x1bc1d3, _0x2431f1, _0xccc37;
                    return L().wrap(function (_0x17dfc7) {
                      for (;;) {
                        switch (_0x17dfc7.prev = _0x17dfc7.next) {
                          case 0:
                            if (10000 != (null == _0x3663db ? void 0 : _0x3663db.code)) {
                              _0x17dfc7.next = 12;
                            } else {
                              if (x.logAndNotify("账号[".concat(_0x21fca9.index, "] 当前余额 ").concat((null == _0x3663db || null == (_0x1bc1d3 = _0x3663db.result) ? void 0 : _0x1bc1d3.amount) || 0, "元 距离下一个提现[").concat((null == _0x3663db || null == (_0x1bc1d3 = _0x3663db.result) || null == (_0x1bc1d3 = _0x1bc1d3.transfer) || null == (_0x1bc1d3 = _0x1bc1d3[0]) ? void 0 : _0x1bc1d3.m) || 0, "元]还差 ").concat((null == _0x3663db || null == (_0x2431f1 = _0x3663db.result) ? void 0 : _0x2431f1.need) || 0, "元")), Number((null == _0x3663db || null == (_0x2431f1 = _0x3663db.result) ? void 0 : _0x2431f1.amount) || 0) >= Number((null == _0x3663db || null == (_0xccc37 = _0x3663db.result) || null == (_0xccc37 = _0xccc37.transfer) || null == (_0xccc37 = _0xccc37[0]) ? void 0 : _0xccc37.m) || 0)) {
                                x.logAndNotify("账号[".concat(_0x21fca9.index, "] - 提现准备中……"));
                                _0x17dfc7.next = 6;
                                return _0x21fca9.transferRecord();
                              }
                              _0x17dfc7.next = 9;
                            }
                            break;
                          case 6:
                            _0x17dfc7.next = 8;
                            return _0x21fca9.transfer(Number(null == _0x3663db || null == (_0xccc37 = _0x3663db.result) || null == (_0xccc37 = _0xccc37.transfer) || null == (_0xccc37 = _0xccc37[0]) ? void 0 : _0xccc37.m));
                          case 8:
                          case 9:
                            return _0x17dfc7.abrupt("return", !0);
                          case 12:
                            x.logAndNotify("账号[".concat(_0x21fca9.index, "] - 获取提现选项失败：").concat((null == _0x3663db ? void 0 : _0x3663db.msg) || JSON.stringify(_0x3663db)));
                            return _0x17dfc7.abrupt("return", !1);
                          case 14:
                          case "end":
                            return _0x17dfc7.stop();
                        }
                      }
                    }, _0x3cc308);
                  }));
                  return function (_0x2fcaff) {
                    return _0x2f0c9c.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x32b3a6.prev = 8;
                _0x32b3a6.t0 = _0x32b3a6.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 获取提现选项失败：") + (null === _0x32b3a6.t0 || void 0 === _0x32b3a6.t0 ? void 0 : _0x32b3a6.t0.message));
              case 11:
              case "end":
                return _0x32b3a6.stop();
            }
          }
        }, _0x4b345c, this, [[0, 8]]);
      })), function () {
        return _0x5df446.apply(this, arguments);
      })
    }, {
      key: "transferRecord",
      value: (_0xdde8a0 = m(L().mark(function _0x49773c() {
        var _0x22fd36,
          _0x7c0c39 = this;
        return L().wrap(function (_0x2085f9) {
          for (;;) {
            switch (_0x2085f9.prev = _0x2085f9.next) {
              case 0:
                _0x2085f9.prev = 0;
                _0x22fd36 = JSON.stringify({
                  rid: 0
                });
                return _0x2085f9.abrupt("return", this.taskApi("transferRecord", "post", "https://api.jiudingliliang.com/user/transfer-record", _0x22fd36, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x5a5cd8 = m(L().mark(function _0x2e7841(_0x1e85d3) {
                    return L().wrap(function (_0x5d678a) {
                      for (;;) {
                        switch (_0x5d678a.prev = _0x5d678a.next) {
                          case 0:
                            if (10000 == (null == _0x1e85d3 ? void 0 : _0x1e85d3.code)) {
                              x.logAndNotify("账号[".concat(_0x7c0c39.index, "] 提现准备成功"));
                              return _0x5d678a.abrupt("return", !0);
                            }
                            _0x5d678a.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x7c0c39.index, "] - 提现准备失败：").concat((null == _0x1e85d3 ? void 0 : _0x1e85d3.msg) || JSON.stringify(_0x1e85d3)));
                            return _0x5d678a.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x5d678a.stop();
                        }
                      }
                    }, _0x2e7841);
                  }));
                  return function (_0xa6205) {
                    return _0x5a5cd8.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x2085f9.prev = 8;
                _0x2085f9.t0 = _0x2085f9.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 提现准备失败：") + (null === _0x2085f9.t0 || void 0 === _0x2085f9.t0 ? void 0 : _0x2085f9.t0.message));
              case 11:
              case "end":
                return _0x2085f9.stop();
            }
          }
        }, _0x49773c, this, [[0, 8]]);
      })), function () {
        return _0xdde8a0.apply(this, arguments);
      })
    }, {
      key: "transfer",
      value: (_0x1c2747 = m(L().mark(function _0x5b5285(_0x4423eb) {
        var _0x3bc783,
          _0x22cc3d = this;
        return L().wrap(function (_0x371915) {
          for (;;) {
            switch (_0x371915.prev = _0x371915.next) {
              case 0:
                _0x371915.prev = 0;
                _0x3bc783 = JSON.stringify({
                  amount: _0x4423eb
                });
                return _0x371915.abrupt("return", this.taskApi("transfer", "post", "https://api.jiudingliliang.com/user/transfer", _0x3bc783, {
                  Accept: "*/*"
                }).then(function () {
                  var _0x69a614 = m(L().mark(function _0x1e207c(_0x3b4f73) {
                    var _0x422789;
                    return L().wrap(function (_0x3e6294) {
                      for (;;) {
                        switch (_0x3e6294.prev = _0x3e6294.next) {
                          case 0:
                            if (10000 == (null == _0x3b4f73 ? void 0 : _0x3b4f73.code)) {
                              x.logAndNotify("账号[".concat(_0x22cc3d.index, "] ").concat((null == _0x3b4f73 || null == (_0x422789 = _0x3b4f73.result) ? void 0 : _0x422789.title) || "提现成功"));
                              return _0x3e6294.abrupt("return", !0);
                            }
                            _0x3e6294.next = 5;
                            break;
                          case 5:
                            x.logAndNotify("账号[".concat(_0x22cc3d.index, "] - 提现失败：").concat((null == _0x3b4f73 ? void 0 : _0x3b4f73.msg) || JSON.stringify(_0x3b4f73)));
                            return _0x3e6294.abrupt("return", !1);
                          case 7:
                          case "end":
                            return _0x3e6294.stop();
                        }
                      }
                    }, _0x1e207c);
                  }));
                  return function (_0x4c4f45) {
                    return _0x69a614.apply(this, arguments);
                  };
                }()));
              case 8:
                _0x371915.prev = 8;
                _0x371915.t0 = _0x371915.catch(0);
                x.logAndNotify("账号[".concat(this.index, "] - 提现失败：") + (null === _0x371915.t0 || void 0 === _0x371915.t0 ? void 0 : _0x371915.t0.message));
              case 11:
              case "end":
                return _0x371915.stop();
            }
          }
        }, _0x5b5285, this, [[0, 8]]);
      })), function (_0x1b77d1) {
        return _0x1c2747.apply(this, arguments);
      })
    }, {
      key: "doTask",
      value: (_0x2fd8b7 = m(L().mark(function _0x3b72c1() {
        var _0xaa04ef, _0x5531e5, _0x274f5c;
        return L().wrap(function (_0x499c47) {
          for (;;) {
            switch (_0x499c47.prev = _0x499c47.next) {
              case 0:
                _0x499c47.prev = 0;
                _0x499c47.next = 3;
                return this.getReadQr();
              case 3:
                if (_0xaa04ef = _0x499c47.sent) {
                  _0x499c47.next = 7;
                  return C(_0xaa04ef);
                }
                _0x499c47.next = 21;
                break;
              case 7:
                if (_0x274f5c = _0x499c47.sent, this.bn = null == (_0xaa04ef = new URL(_0x274f5c)) || null == (_0xaa04ef = _0xaa04ef.searchParams) ? void 0 : _0xaa04ef.get("bn"), this.k = null == (_0x5531e5 = new URL(_0x274f5c)) || null == (_0x5531e5 = _0x5531e5.searchParams) ? void 0 : _0x5531e5.get("k"), !this.bn || !this.k) {
                  _0x499c47.next = 20;
                  break;
                }
              case 11:
                _0x499c47.next = 13;
                return this.getPostInfo();
              case 13:
                if (_0x499c47.sent) {
                  _0x499c47.next = 16;
                  return x.wait(2000 * Math.random());
                }
                _0x499c47.next = 18;
                break;
              case 16:
                _0x499c47.next = 11;
                break;
              case 18:
                _0x499c47.next = 21;
                break;
              case 20:
                x.logAndNotify("账号[".concat(this.index, "] 跳转获取文章页面失败：").concat(_0x274f5c));
              case 21:
                _0x499c47.next = 23;
                return x.wait(2000 * Math.random() + 200);
              case 23:
                _0x499c47.next = 25;
                return this.checkin();
              case 25:
                _0x499c47.next = 27;
                return x.wait(2000 * Math.random() + 200);
              case 27:
                _0x499c47.next = 29;
                return this.withdrawList();
              case 29:
                _0x499c47.next = 34;
                break;
              case 31:
                _0x499c47.prev = 31;
                _0x499c47.t0 = _0x499c47.catch(0);
                x.logAndNotify("\n账号[".concat(this.index, "] 执行任务失败：") + (null === _0x499c47.t0 || void 0 === _0x499c47.t0 ? void 0 : _0x499c47.t0.message));
              case 34:
              case "end":
                return _0x499c47.stop();
            }
          }
        }, _0x3b72c1, this, [[0, 31]]);
      })), function () {
        return _0x2fd8b7.apply(this, arguments);
      })
    }]);
    var _0x2fd8b7, _0x1c2747, _0xdde8a0, _0x5df446, _0x74937b, _0x48dcdc, _0x1c8bb2, _0x3b6168, _0x40a547, _0x1aa170, _0x2c12ac;
  }();
function tt() {
  x.isNode() && (process.on("uncaughtException", function (_0x33f04c) {
    var _0x377685;
    "MODULE_NOT_FOUND" === _0x33f04c.code ? (_0x377685 = _0x33f04c.message.split("'")[1]).startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 ".concat(_0x377685, " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！")) : console.log("缺少依赖，请安装 ".concat(_0x377685, " 库： ").concat(_0x377685, " \n 什么？不会？v我50我教你！")) : console.log("发生错误：" + _0x33f04c.message);
  }), process.on("unhandledRejection", function (_0x83311) {
    var _0x2e719c,
      _0xa3ddfd = _0x83311.stack.split("\n");
    1 < _0xa3ddfd.length ? (_0xa3ddfd = _0xa3ddfd[1].match(/\((.*):(\d+):(\d+)\)/)) && (_0x2e719c = _0xa3ddfd[1], _0xa3ddfd = _0xa3ddfd[2], console.log("程序执行出现异常，错误信息：" + _0x83311.message + "，错误发生在 ".concat(_0x2e719c, " 的第 ").concat(_0xa3ddfd, " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"))) : console.log("发生错误：" + _0x83311.message);
  }));
}
function et() {
  return M.apply(this, arguments);
}
function M() {
  return (M = m(L().mark(function _0x420497() {
    var _0xf22e58, _0x24df44;
    return L().wrap(function (_0x1fa96b) {
      for (;;) {
        switch (_0x1fa96b.prev = _0x1fa96b.next) {
          case 0:
            _0x1fa96b.next = 2;
            return b.get("https://api.jiudingliliang.com/domain/temp", {
              params: {
                mid: 1770365
              },
              headers: {
                Connection: "keep-alive",
                "Content-Type": "application/json;charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36",
                Accept: "*/*",
                Origin: "http://xuw6q.lmqk.cn",
                Referer: "http://xuw6q.lmqk.cn/index.html?mid=1770365"
              }
            });
          case 2:
            if (null != (_0xf22e58 = _0x1fa96b.sent) && null != (_0x24df44 = _0xf22e58.data) && null != (_0x24df44 = _0x24df44.result) && _0x24df44.host) {
              _0x24df44 = C(null == _0xf22e58 || null == (_0x24df44 = _0xf22e58.data) || null == (_0x24df44 = _0x24df44.result) ? void 0 : _0x24df44.host);
              return _0x1fa96b.abrupt("return", _0x24df44);
            }
            _0x1fa96b.next = 8;
            break;
          case 8:
            console.log("获取项目最新入口地址失败~".concat((null == _0xf22e58 || null == (_0x24df44 = _0xf22e58.data) ? void 0 : _0x24df44.msg) || ""));
          case 9:
          case "end":
            return _0x1fa96b.stop();
        }
      }
    }, _0x420497);
  }))).apply(this, arguments);
}
function nt(_0x23aebf) {
  return R.apply(this, arguments);
}
function R() {
  return (R = m(L().mark(function _0x1c7f32(_0x19c846) {
    var _0x22e3bc;
    return L().wrap(function (_0x272fc3) {
      for (;;) {
        switch (_0x272fc3.prev = _0x272fc3.next) {
          case 0:
            _0x272fc3.prev = 0;
            _0x272fc3.next = 3;
            return D.toString(_0x19c846, {
              errorCorrectionLevel: "H",
              type: "terminal",
              small: !0
            });
          case 3:
            _0x22e3bc = _0x272fc3.sent;
            return _0x272fc3.abrupt("return", _0x22e3bc);
          case 7:
            _0x272fc3.prev = 7;
            _0x272fc3.t0 = _0x272fc3.catch(0);
            return _0x272fc3.abrupt("return", "");
          case 10:
          case "end":
            return _0x272fc3.stop();
        }
      }
    }, _0x1c7f32, null, [[0, 7]]);
  }))).apply(this, arguments);
}
function rt() {
  return I.apply(this, arguments);
}
function I() {
  return (I = m(L().mark(function _0x5d1614() {
    var _0x562b68, _0xc4d0d3, _0x255927;
    return L().wrap(function (_0x3375f4) {
      for (;;) {
        switch (_0x3375f4.prev = _0x3375f4.next) {
          case 0:
            _0x562b68 = G.basename(__filename);
            console.log("======== ▷ 开始启动脚本 ◁ ========\n当前脚本：".concat(_0x562b68, " 🤪"));
            _0x3375f4.next = 4;
            return X();
          case 4:
            _0x3375f4.next = 6;
            return Q("Huansheng1/my-qinglong-js@main/".concat(_0x562b68));
          case 6:
            _0x3375f4.next = 8;
            return et();
          case 8:
            _0xc4d0d3 = (_0xc4d0d3 = _0x3375f4.sent) || "http://18xtnta.weddlmm.online?mid=1770365";
            _0x3375f4.next = 12;
            return nt(_0xc4d0d3);
          case 12:
            _0x255927 = _0x3375f4.sent;
            _0x255927 = _0x255927 ? "".concat(_0xc4d0d3, "\n使用手机扫码：\n").concat(_0x255927) : "".concat(_0xc4d0d3);
            x.logAndNotify("\n活动入口[打不开，可用浏览器打开]：".concat(_0x255927, "\n\n=============================================================\n"));
            x.wait(100);
          case 16:
          case "end":
            return _0x3375f4.stop();
        }
      }
    }, _0x5d1614);
  }))).apply(this, arguments);
}
function ot() {
  return P.apply(this, arguments);
}
function P() {
  return (P = m(L().mark(function _0x1bca5c() {
    var _0xa54a9b, _0x4db7a5, _0x3effd7, _0xd220aa, _0x53f223, _0x5708ad;
    return L().wrap(function (_0x18bddd) {
      for (;;) {
        switch (_0x18bddd.prev = _0x18bddd.next) {
          case 0:
            if (!N) {
              _0x18bddd.next = 25;
              break;
            }
            _0xa54a9b = k[0];
            _0x4db7a5 = u(k);
            _0x18bddd.prev = 3;
            _0x4db7a5.s();
          case 5:
            if ((_0x3effd7 = _0x4db7a5.n()).done) {
              _0x18bddd.next = 12;
            } else {
              if (_0x3effd7 = _0x3effd7.value, -1 < N.indexOf(_0x3effd7)) {
                _0xa54a9b = _0x3effd7;
                return _0x18bddd.abrupt("break", 12);
              }
              _0x18bddd.next = 10;
            }
            break;
          case 10:
            _0x18bddd.next = 5;
            break;
          case 12:
            _0x18bddd.next = 17;
            break;
          case 14:
            _0x18bddd.prev = 14;
            _0x18bddd.t0 = _0x18bddd.catch(3);
            _0x4db7a5.e(_0x18bddd.t0);
          case 17:
            _0x18bddd.prev = 17;
            _0x4db7a5.f();
            return _0x18bddd.finish(17);
          case 20:
            _0xd220aa = u(N.split(_0xa54a9b));
            try {
              for (_0xd220aa.s(); !(_0x53f223 = _0xd220aa.n()).done;) {
                (_0x5708ad = _0x53f223.value) && S.push(new Z(_0x5708ad));
              }
            } catch (_0x10435d) {
              _0xd220aa.e(_0x10435d);
            } finally {
              _0xd220aa.f();
            }
            userCount = S.length;
            _0x18bddd.next = 27;
            break;
          case 25:
            console.log("未找到 配置信息，请检查是否配置 变量：", w);
            return _0x18bddd.abrupt("return");
          case 27:
            console.log("共找到".concat(userCount, "个账号"));
            return _0x18bddd.abrupt("return", !0);
          case 29:
          case "end":
            return _0x18bddd.stop();
        }
      }
    }, _0x1bca5c, null, [[3, 14, 17, 20]]);
  }))).apply(this, arguments);
}
function it(_0x50590e, _0x2c08e5) {
  return q.apply(this, arguments);
}
function q() {
  return (q = m(L().mark(function _0x5ea827(_0x47a78c, _0x404a60) {
    return L().wrap(function (_0x4ace23) {
      for (;;) {
        switch (_0x4ace23.prev = _0x4ace23.next) {
          case 0:
            httpErr = null;
            httpReq = null;
            httpResp = null;
            return _0x4ace23.abrupt("return", new Promise(function (_0x5d57a4) {
              x.send(_0x47a78c, _0x404a60, function () {
                var _0x3ee0f1 = m(L().mark(function _0x2539c8(_0x3d4806, _0x146fc2, _0x3b3c8d) {
                  return L().wrap(function (_0x34dab5) {
                    for (;;) {
                      switch (_0x34dab5.prev = _0x34dab5.next) {
                        case 0:
                          httpErr = _0x3d4806;
                          httpReq = _0x146fc2;
                          httpResp = _0x3b3c8d;
                          _0x5d57a4({
                            err: _0x3d4806,
                            req: _0x146fc2,
                            resp: _0x3b3c8d
                          });
                        case 2:
                        case "end":
                          return _0x34dab5.stop();
                      }
                    }
                  }, _0x2539c8);
                }));
                return function (_0xa67111, _0x5b9f4f, _0x3a8a03) {
                  return _0x3ee0f1.apply(this, arguments);
                };
              }());
            }));
          case 2:
          case "end":
            return _0x4ace23.stop();
        }
      }
    }, _0x5ea827);
  }))).apply(this, arguments);
}
function at(_0x22a883, _0x4b2f59) {
  "undefined" != typeof process && -1 < JSON.stringify(process.env).indexOf("GITHUB") && process.exit(0);
  return new (function () {
    return v(function _0x24b7e2(_0x3baa7d, _0x13efd9) {
      f(this, _0x24b7e2);
      this.name = _0x3baa7d;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x13efd9);
      console.log("".concat(this.name, " 开始运行：\n"));
    }, [{
      key: "isNode",
      value: function () {
        return "undefined" != typeof module && !!module.exports;
      }
    }, {
      key: "isQuanX",
      value: function () {
        return "undefined" != typeof $task;
      }
    }, {
      key: "isSurge",
      value: function () {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }, {
      key: "isLoon",
      value: function () {
        return "undefined" != typeof $loon;
      }
    }, {
      key: "getdata",
      value: function (_0xb974f9) {
        var _0x3f3849 = this.getval(_0xb974f9);
        if (/^@/.test(_0xb974f9)) {
          var _0x520a04 = s(/^@(.*?)\.(.*?)$/.exec(_0xb974f9), 3),
            _0x1cf2c1 = _0x520a04[1],
            _0x520a04 = _0x520a04[2],
            _0x1cf2c1 = _0x1cf2c1 ? this.getval(_0x1cf2c1) : "";
          if (_0x1cf2c1) {
            try {
              var _0x248860 = JSON.parse(_0x1cf2c1),
                _0x3f3849 = _0x248860 ? this.lodash_get(_0x248860, _0x520a04, "") : _0x3f3849;
            } catch (_0x17cca4) {
              _0x3f3849 = "";
            }
          }
        }
        return _0x3f3849;
      }
    }, {
      key: "setdata",
      value: function (_0x46b263, _0x233d92) {
        var _0x5323b1 = !1;
        if (/^@/.test(_0x233d92)) {
          var _0x124358 = s(/^@(.*?)\.(.*?)$/.exec(_0x233d92), 3),
            _0x4b00c0 = _0x124358[1],
            _0x124358 = _0x124358[2],
            _0x558c45 = this.getval(_0x4b00c0),
            _0x558c45 = _0x4b00c0 ? "null" === _0x558c45 ? null : _0x558c45 || "{}" : "{}";
          try {
            var _0x4d62ff = JSON.parse(_0x558c45);
            this.lodash_set(_0x4d62ff, _0x124358, _0x46b263);
            _0x5323b1 = this.setval(JSON.stringify(_0x4d62ff), _0x4b00c0);
          } catch (_0x2da234) {
            _0x558c45 = {};
            this.lodash_set(_0x558c45, _0x124358, _0x46b263);
            _0x5323b1 = this.setval(JSON.stringify(_0x558c45), _0x4b00c0);
          }
        } else {
          _0x5323b1 = this.setval(_0x46b263, _0x233d92);
        }
        return _0x5323b1;
      }
    }, {
      key: "getval",
      value: function (_0x3bbf4f) {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3bbf4f) : this.isQuanX() ? $prefs.valueForKey(_0x3bbf4f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3bbf4f]) : this.data && this.data[_0x3bbf4f] || null;
      }
    }, {
      key: "setval",
      value: function (_0x5557da, _0x2d69e1) {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x5557da, _0x2d69e1) : this.isQuanX() ? $prefs.setValueForKey(_0x5557da, _0x2d69e1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2d69e1] = _0x5557da, this.writedata(), !0) : this.data && this.data[_0x2d69e1] || null;
      }
    }, {
      key: "send",
      value: function (_0x8d456e, _0x3412ca) {
        var _0x454a21,
          _0x5ad2be = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {};
        "get" != _0x8d456e && "post" != _0x8d456e && "put" != _0x8d456e && "delete" != _0x8d456e ? console.log("无效的http方法：".concat(_0x8d456e)) : ("get" == _0x8d456e && _0x3412ca.headers ? (delete _0x3412ca.headers["Content-Type"], delete _0x3412ca.headers["Content-Length"]) : _0x3412ca.body && _0x3412ca.headers && (_0x3412ca.headers["Content-Type"] || (_0x3412ca.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x3412ca.headers = _0x3412ca.headers || {}, Object.assign(_0x3412ca.headers, {
          "X-Surge-Skip-Scripting": !1
        })), _0x454a21 = {
          method: _0x8d456e,
          url: _0x3412ca.url,
          headers: _0x3412ca.headers,
          timeout: _0x3412ca.timeout,
          data: _0x3412ca.body
        }, "get" == _0x8d456e && delete _0x454a21.data, $axios(_0x454a21).then(function (_0x2b7bdd) {
          var _0x9564bf = _0x2b7bdd.status,
            _0x41933a = _0x2b7bdd.request,
            _0x5aea9b = _0x2b7bdd.headers,
            _0x2b7bdd = _0x2b7bdd.data;
          _0x5ad2be(null, _0x41933a, {
            statusCode: _0x9564bf,
            headers: _0x5aea9b,
            body: _0x2b7bdd
          });
        }).catch(function (_0x4d589e) {
          return console.log(_0x4d589e);
        })) : this.isQuanX() ? (_0x3412ca.method = _0x8d456e.toUpperCase(), this.isNeedRewrite && (_0x3412ca.opts = _0x3412ca.opts || {}, Object.assign(_0x3412ca.opts, {
          hints: !1
        })), $task.fetch(_0x3412ca).then(function (_0x39be2b) {
          var _0x3fddc8 = _0x39be2b.statusCode,
            _0x4bdaeb = _0x39be2b.request,
            _0x40639a = _0x39be2b.headers,
            _0x39be2b = _0x39be2b.body;
          _0x5ad2be(null, _0x4bdaeb, {
            statusCode: _0x3fddc8,
            headers: _0x40639a,
            body: _0x39be2b
          });
        }, function (_0x4ca468) {
          return _0x5ad2be(_0x4ca468);
        })) : this.isNode() && (this.got = this.got || require("got"), _0x454a21 = _0x3412ca.url, _0x3412ca = i(_0x3412ca, r), this.instance = this.got.extend({
          followRedirect: !1
        }), this.instance[_0x8d456e](_0x454a21, _0x3412ca).then(function (_0x233ab0) {
          var _0x266622 = _0x233ab0.statusCode,
            _0x403532 = _0x233ab0.request,
            _0x5b079c = _0x233ab0.headers,
            _0x233ab0 = _0x233ab0.body;
          _0x5ad2be(null, _0x403532, {
            statusCode: _0x266622,
            headers: _0x5b079c,
            body: _0x233ab0
          });
        }, function (_0x3e1c5b) {
          var _0x41da20 = _0x3e1c5b.message,
            _0x3f5f75 = _0x3e1c5b.request,
            _0x3e1c5b = _0x3e1c5b.response;
          _0x5ad2be(_0x41da20, _0x3f5f75, _0x3e1c5b);
        })));
      }
    }, {
      key: "time",
      value: function (_0x102955) {
        var _0x4d27a4,
          _0x2799b7 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
          _0x2799b7 = _0x2799b7 ? new Date(_0x2799b7) : new Date(),
          _0x5a2e06 = {
            "M+": _0x2799b7.getMonth() + 1,
            "d+": _0x2799b7.getDate(),
            "h+": _0x2799b7.getHours(),
            "m+": _0x2799b7.getMinutes(),
            "s+": _0x2799b7.getSeconds(),
            "q+": Math.floor((_0x2799b7.getMonth() + 3) / 3),
            S: _0x2799b7.getMilliseconds()
          };
        for (_0x4d27a4 in /(y+)/.test(_0x102955) && (_0x102955 = _0x102955.replace(RegExp.$1, (_0x2799b7.getFullYear() + "").substr(4 - RegExp.$1.length))), _0x5a2e06) new RegExp("(" + _0x4d27a4 + ")").test(_0x102955) && (_0x102955 = _0x102955.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5a2e06[_0x4d27a4] : ("00" + _0x5a2e06[_0x4d27a4]).substr(("" + _0x5a2e06[_0x4d27a4]).length)));
        return _0x102955;
      }
    }, {
      key: "showmsg",
      value: (_0x1cd04d = m(L().mark(function _0x382493() {
        var _0xf55281, _0x26c9bf;
        return L().wrap(function (_0x1cf9ef) {
          for (;;) {
            switch (_0x1cf9ef.prev = _0x1cf9ef.next) {
              case 0:
                if (this.notifyStr) {
                  _0x1cf9ef.next = 2;
                  break;
                }
                return _0x1cf9ef.abrupt("return");
              case 2:
                if (_0xf55281 = this.name + " 运行通知\n\n" + this.notifyStr, x.isNode()) {
                  _0x26c9bf = require("./sendNotify");
                  console.log("\n============== 推送 ==============");
                  _0x1cf9ef.next = 8;
                  return _0x26c9bf.sendNotify(this.name, _0xf55281);
                }
                _0x1cf9ef.next = 10;
                break;
              case 8:
                _0x1cf9ef.next = 11;
                break;
              case 10:
                this.msg(_0xf55281);
              case 11:
              case "end":
                return _0x1cf9ef.stop();
            }
          }
        }, _0x382493, this);
      })), function () {
        return _0x1cd04d.apply(this, arguments);
      })
    }, {
      key: "logAndNotify",
      value: function (_0x4e349e) {
        console.log(_0x4e349e);
        this.notifyStr += _0x4e349e;
        this.notifyStr += "\n";
      }
    }, {
      key: "logAndNotifyWithTime",
      value: function (_0x4d4ab5) {
        _0x4d4ab5 = "[" + this.time("hh:mm:ss.S") + "]" + _0x4d4ab5;
        console.log(_0x4d4ab5);
        this.notifyStr += _0x4d4ab5;
        this.notifyStr += "\n";
      }
    }, {
      key: "logWithTime",
      value: function (_0x35982f) {
        console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x35982f);
      }
    }, {
      key: "msg",
      value: function () {
        function _0x26316e(_0x572040) {
          return _0x572040 && ("string" == typeof _0x572040 ? _0x46a2eb.isLoon() ? _0x572040 : _0x46a2eb.isQuanX() ? {
            "open-url": _0x572040
          } : _0x46a2eb.isSurge() ? {
            url: _0x572040
          } : void 0 : "object" == T(_0x572040) ? _0x46a2eb.isLoon() ? {
            openUrl: _0x572040.openUrl || _0x572040.url || _0x572040["open-url"],
            mediaUrl: _0x572040.mediaUrl || _0x572040["media-url"]
          } : _0x46a2eb.isQuanX() ? {
            "open-url": _0x572040["open-url"] || _0x572040.url || _0x572040.openUrl,
            "media-url": _0x572040["media-url"] || _0x572040.mediaUrl
          } : _0x46a2eb.isSurge() ? {
            url: _0x572040.url || _0x572040.openUrl || _0x572040["open-url"]
          } : void 0 : void 0);
        }
        var _0x46a2eb = this,
          _0x3c933e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t,
          _0x53b74f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          _0x27730e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
          _0x3d8a62 = 3 < arguments.length ? arguments[3] : void 0,
          _0x3d8a62 = (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3c933e, _0x53b74f, _0x27730e, _0x26316e(_0x3d8a62)) : this.isQuanX() && $notify(_0x3c933e, _0x53b74f, _0x27730e, _0x26316e(_0x3d8a62))), ["", "============== 系统通知 =============="]);
        _0x3d8a62.push(_0x3c933e);
        _0x53b74f && _0x3d8a62.push(_0x53b74f);
        _0x27730e && _0x3d8a62.push(_0x27730e);
        console.log(_0x3d8a62.join("\n"));
      }
    }, {
      key: "getMin",
      value: function (_0x2abca3, _0x3a32b9) {
        return _0x2abca3 < _0x3a32b9 ? _0x2abca3 : _0x3a32b9;
      }
    }, {
      key: "getMax",
      value: function (_0x4b6bf0, _0x36663f) {
        return _0x4b6bf0 < _0x36663f ? _0x36663f : _0x4b6bf0;
      }
    }, {
      key: "padStr",
      value: function (_0x442721, _0x6cc761) {
        for (var _0x3273d7 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "0", _0x442721 = String(_0x442721), _0x4f7619 = _0x6cc761 > _0x442721.length ? _0x6cc761 - _0x442721.length : 0, _0x447349 = "", _0x1793c7 = 0; _0x1793c7 < _0x4f7619; _0x1793c7++) {
          _0x447349 += _0x3273d7;
        }
        return _0x447349 += _0x442721;
      }
    }, {
      key: "json2str",
      value: function (_0x1f9e0b, _0x174cdb) {
        var _0x435b47,
          _0x14380a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          _0x33a6ce = [],
          _0x26255e = u(Object.keys(_0x1f9e0b).sort());
        try {
          for (_0x26255e.s(); !(_0x435b47 = _0x26255e.n()).done;) {
            var _0xa48f39 = _0x435b47.value,
              _0x37e7f8 = _0x1f9e0b[_0xa48f39];
            _0x37e7f8 && _0x14380a && (_0x37e7f8 = encodeURIComponent(_0x37e7f8));
            _0x33a6ce.push(_0xa48f39 + "=" + _0x37e7f8);
          }
        } catch (_0x24689e) {
          _0x26255e.e(_0x24689e);
        } finally {
          _0x26255e.f();
        }
        return _0x33a6ce.join(_0x174cdb);
      }
    }, {
      key: "str2json",
      value: function (_0x2b7b11) {
        var _0x37f6dd,
          _0x1034af = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          _0x2fdc83 = {},
          _0x3cc18c = u(_0x2b7b11.split("&"));
        try {
          for (_0x3cc18c.s(); !(_0x37f6dd = _0x3cc18c.n()).done;) {
            var _0x5366ff,
              _0xa78d90,
              _0x5ce97b,
              _0x3f0769 = _0x37f6dd.value;
            _0x3f0769 && -1 != (_0x5366ff = _0x3f0769.indexOf("=")) && (_0xa78d90 = _0x3f0769.substr(0, _0x5366ff), _0x5ce97b = _0x3f0769.substr(_0x5366ff + 1), _0x1034af && (_0x5ce97b = decodeURIComponent(_0x5ce97b)), _0x2fdc83[_0xa78d90] = _0x5ce97b);
          }
        } catch (_0x49cce2) {
          _0x3cc18c.e(_0x49cce2);
        } finally {
          _0x3cc18c.f();
        }
        return _0x2fdc83;
      }
    }, {
      key: "randomString",
      value: function (_0x51f594) {
        for (var _0x51d4ae = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "abcdef0123456789", _0x46f4ce = "", _0x2ad841 = 0; _0x2ad841 < _0x51f594; _0x2ad841++) {
          _0x46f4ce += _0x51d4ae.charAt(Math.floor(Math.random() * _0x51d4ae.length));
        }
        return _0x46f4ce;
      }
    }, {
      key: "randomList",
      value: function (_0x4d4ad4) {
        return _0x4d4ad4[Math.floor(Math.random() * _0x4d4ad4.length)];
      }
    }, {
      key: "wait",
      value: function (_0x48f6e3) {
        return new Promise(function (_0x33e8fc) {
          return setTimeout(_0x33e8fc, _0x48f6e3);
        });
      }
    }, {
      key: "done",
      value: function () {
        var _0x428e32 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          _0xbb1542 = (new Date().getTime() - this.startTime) / 1000;
        console.log("\n".concat(this.name, " 运行结束，共运行了 ").concat(_0xbb1542, " 秒！"));
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x428e32);
      }
    }]);
    var _0x1cd04d;
  }())(_0x22a883, _0x4b2f59);
}
m(L().mark(function t() {
  var _0x16e3d4, _0x508809, _0xb93579, _0x912d8f, _0x4d22b4;
  return L().wrap(function (_0x119329) {
    for (;;) {
      switch (_0x119329.prev = _0x119329.next) {
        case 0:
          _0x119329.next = 2;
          return rt();
        case 2:
          _0x119329.next = 4;
          return ot();
        case 4:
          if (_0x119329.sent) {
            _0x119329.next = 6;
            break;
          }
          return _0x119329.abrupt("return");
        case 6:
          console.log("\n================ 开始执行 ================");
          _0x16e3d4 = 0;
          _0x508809 = S;
        case 8:
          if (_0x16e3d4 < _0x508809.length) {
            _0xb93579 = _0x508809[_0x16e3d4];
            _0x119329.next = 12;
            return _0xb93579.getUserInfo();
          }
          _0x119329.next = 15;
          break;
        case 12:
          _0x16e3d4++;
          _0x119329.next = 8;
          break;
        case 15:
          if (!(0 < (_0xb93579 = null == S ? void 0 : S.filter(function (_0x49c13c) {
            return null == _0x49c13c ? void 0 : _0x49c13c.valid;
          })).length)) {
            _0x119329.next = 37;
            break;
          }
          console.log("\n================ 任务队列构建完毕 ================");
          _0x912d8f = u(_0xb93579);
          _0x119329.prev = 19;
          _0x912d8f.s();
        case 21:
          if ((_0x4d22b4 = _0x912d8f.n()).done) {
            _0x119329.next = 27;
            break;
          }
          _0x4d22b4 = _0x4d22b4.value;
          _0x119329.next = 25;
          return _0x4d22b4.doTask();
        case 25:
          _0x119329.next = 21;
          break;
        case 27:
          _0x119329.next = 32;
          break;
        case 29:
          _0x119329.prev = 29;
          _0x119329.t0 = _0x119329.catch(19);
          _0x912d8f.e(_0x119329.t0);
        case 32:
          _0x119329.prev = 32;
          _0x912d8f.f();
          return _0x119329.finish(32);
        case 35:
          _0x119329.next = 38;
          break;
        case 37:
          console.log("\n============== 幻生提示：无可用账号，请检查配置 ============");
        case 38:
          _0x119329.next = 40;
          return x.showmsg();
        case 40:
        case "end":
          return _0x119329.stop();
      }
    }
  }, t, null, [[19, 29, 32, 35]]);
}))().catch(function (_0x42e6b2) {
  return console.log(_0x42e6b2);
}).finally(function () {
  return x.done();
});