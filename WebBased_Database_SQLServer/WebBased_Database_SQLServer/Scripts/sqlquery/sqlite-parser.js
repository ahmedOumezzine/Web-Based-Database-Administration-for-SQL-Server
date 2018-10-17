﻿/*!
 * sqlite-parser-demo - v1.0.0
 * @copyright 2015-2017 Code School (http://codeschool.com)
 * @author Nick Wronski <nick@javascript.com>
 */
require = function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    "./streaming": [function (a, b, c) {
        "use strict";

        function d(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        c.SqliteParserTransform = function a(b) {
            throw d(this, a), new Error("SqliteParserTransform is not available in this environment")
        }, c.SingleNodeTransform = function a(b) {
            throw d(this, a), new Error("SingleNodeTransform is not available in this environment")
        }
    }, {}],
    1: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            function c() {
                this.constructor = a
            }
            c.prototype = b.prototype, a.prototype = new c
        }

        function e(a, b, c, d) {
            this.message = a, this.expected = b, this.found = c, this.location = d, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
        }

        function f() {
            this.indentLevel = 0
        }

        function g(a, b) {
            function c(a, b) {
                return {
                    type: "literal",
                    text: a,
                    ignoreCase: b
                }
            }

            function d(a, b, c) {
                return {
                    type: "class",
                    parts: a,
                    inverted: b,
                    ignoreCase: c
                }
            }

            function g() {
                return {
                    type: "any"
                }
            }

            function i() {
                return {
                    type: "end"
                }
            }

            function j(a) {
                return {
                    type: "other",
                    description: a
                }
            }

            function k(b) {
                var c, d = K[b];
                if (d) return d;
                for (c = b - 1; !K[c];) c--;
                for (d = K[c], d = {
                    line: d.line,
                    column: d.column
                }; c < b;) 10 === a.charCodeAt(c) ? (d.line++ , d.column = 1) : d.column++ , c++;
                return K[b] = d, d
            }

            function l(a, b) {
                var c = k(a),
                    d = k(b);
                return {
                    start: {
                        offset: a,
                        line: c.line,
                        column: c.column
                    },
                    end: {
                        offset: b,
                        line: d.line,
                        column: d.column
                    }
                }
            }

            function m(a) {
                I < L || (I > L && (L = I, M = []), M.push(a))
            }

            function n(a, b, c) {
                return new e(e.buildMessage(a, b), a, b, c)
            }

            function o(a) {
                return a.split("").map(function (a) {
                    return a.charCodeAt(0) - 32
                })
            }

            function p(b) {
                var c, d = H[b],
                    e = 0,
                    f = [],
                    g = d.length,
                    h = [],
                    i = [],
                    j = I;
                R.trace({
                    type: "rule.enter",
                    rule: P[b],
                    description: Q[b],
                    location: l(j, j)
                });
                var k = 545 * I + b,
                    n = O[k];
                if (n) return I = n.nextPos, n.result !== D ? R.trace({
                    type: "rule.match",
                    rule: P[b],
                    description: Q[b],
                    result: n.result,
                    location: l(j, I)
                }) : R.trace({
                    type: "rule.fail",
                    rule: P[b],
                    description: Q[b],
                    location: l(j, j)
                }), n.result;
                for (; ;) {
                    for (; e < g;) switch (d[e]) {
                        case 0:
                            i.push(G[d[e + 1]]), e += 2;
                            break;
                        case 1:
                            i.push(void 0), e++;
                            break;
                        case 2:
                            i.push(null), e++;
                            break;
                        case 3:
                            i.push(D), e++;
                            break;
                        case 4:
                            i.push([]), e++;
                            break;
                        case 5:
                            i.push(I), e++;
                            break;
                        case 6:
                            i.pop(), e++;
                            break;
                        case 7:
                            I = i.pop(), e++;
                            break;
                        case 8:
                            i.length -= d[e + 1], e += 2;
                            break;
                        case 9:
                            i.splice(-2, 1), e++;
                            break;
                        case 10:
                            i[i.length - 2].push(i.pop()), e++;
                            break;
                        case 11:
                            i.push(i.splice(i.length - d[e + 1], d[e + 1])), e += 2;
                            break;
                        case 12:
                            i.push(a.substring(i.pop(), I)), e++;
                            break;
                        case 13:
                            h.push(g), f.push(e + 3 + d[e + 1] + d[e + 2]), i[i.length - 1] ? (g = e + 3 + d[e + 1], e += 3) : (g = e + 3 + d[e + 1] + d[e + 2], e += 3 + d[e + 1]);
                            break;
                        case 14:
                            h.push(g), f.push(e + 3 + d[e + 1] + d[e + 2]), i[i.length - 1] === D ? (g = e + 3 + d[e + 1], e += 3) : (g = e + 3 + d[e + 1] + d[e + 2], e += 3 + d[e + 1]);
                            break;
                        case 15:
                            h.push(g), f.push(e + 3 + d[e + 1] + d[e + 2]), i[i.length - 1] !== D ? (g = e + 3 + d[e + 1], e += 3) : (g = e + 3 + d[e + 1] + d[e + 2], e += 3 + d[e + 1]);
                            break;
                        case 16:
                            i[i.length - 1] !== D ? (h.push(g), f.push(e), g = e + 2 + d[e + 1], e += 2) : e += 2 + d[e + 1];
                            break;
                        case 17:
                            h.push(g), f.push(e + 3 + d[e + 1] + d[e + 2]), a.length > I ? (g = e + 3 + d[e + 1], e += 3) : (g = e + 3 + d[e + 1] + d[e + 2], e += 3 + d[e + 1]);
                            break;
                        case 18:
                            h.push(g), f.push(e + 4 + d[e + 2] + d[e + 3]), a.substr(I, G[d[e + 1]].length) === G[d[e + 1]] ? (g = e + 4 + d[e + 2], e += 4) : (g = e + 4 + d[e + 2] + d[e + 3], e += 4 + d[e + 2]);
                            break;
                        case 19:
                            h.push(g), f.push(e + 4 + d[e + 2] + d[e + 3]), a.substr(I, G[d[e + 1]].length).toLowerCase() === G[d[e + 1]] ? (g = e + 4 + d[e + 2], e += 4) : (g = e + 4 + d[e + 2] + d[e + 3], e += 4 + d[e + 2]);
                            break;
                        case 20:
                            h.push(g), f.push(e + 4 + d[e + 2] + d[e + 3]), G[d[e + 1]].test(a.charAt(I)) ? (g = e + 4 + d[e + 2], e += 4) : (g = e + 4 + d[e + 2] + d[e + 3], e += 4 + d[e + 2]);
                            break;
                        case 21:
                            i.push(a.substr(I, d[e + 1])), I += d[e + 1], e += 2;
                            break;
                        case 22:
                            i.push(G[d[e + 1]]), I += G[d[e + 1]].length, e += 2;
                            break;
                        case 23:
                            i.push(D), 0 === N && m(G[d[e + 1]]), e += 2;
                            break;
                        case 24:
                            J = i[i.length - 1 - d[e + 1]], e += 2;
                            break;
                        case 25:
                            J = I, e++;
                            break;
                        case 26:
                            c = d.slice(e + 4, e + 4 + d[e + 3]).map(function (a) {
                                return i[i.length - 1 - a]
                            }), i.splice(i.length - d[e + 2], d[e + 2], G[d[e + 1]].apply(null, c)), e += 4 + d[e + 3];
                            break;
                        case 27:
                            i.push(p(d[e + 1])), e += 2;
                            break;
                        case 28:
                            N++ , e++;
                            break;
                        case 29:
                            N-- , e++;
                            break;
                        default:
                            throw new Error("Invalid opcode: " + d[e] + ".")
                    }
                    if (!(h.length > 0)) break;
                    g = h.pop(), e = f.pop()
                }
                return O[k] = {
                    nextPos: I,
                    result: i[0]
                }, i[0] !== D ? R.trace({
                    type: "rule.match",
                    rule: P[b],
                    description: Q[b],
                    result: i[0],
                    location: l(j, I)
                }) : R.trace({
                    type: "rule.fail",
                    rule: P[b],
                    description: Q[b],
                    location: l(j, j)
                }), i[0]
            }

            function q(a) {
                return r(a) ? Array.isArray(a) ? a : [a] : []
            }

            function r(a) {
                return null != a
            }

            function s(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ",
                    c = a.filter(function (a) {
                        return r(a)
                    }).reduce(function (a, c) {
                        return "" + a + x(c) + b
                    }, "");
                return c.trim()
            }

            function t(a) {
                return s(a, "")
            }

            function u(a) {
                return s(a).toLowerCase()
            }

            function v(a) {
                return a.filter(function (a) {
                    return r(a)
                }).reduce(function (a, b) {
                    return a.concat(b)
                }, [])
            }

            function w(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "'",
                    c = new RegExp(b + "{2}", "g");
                return x(a).replace(c, b)
            }

            function x() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return q(a).join("")
            }

            function y(a) {
                return x(a).trim()
            }

            function z(a) {
                return y(a).toLowerCase()
            }

            function A(a) {
                return Array.isArray(a) && a.length > 0 && r(a[0])
            }

            function B(a, b) {
                return b.reduce(function (a, b) {
                    var c = h(b, 4),
                        d = (c[0], c[1]),
                        e = (c[2], c[3]);
                    return {
                        type: "expression",
                        format: "binary",
                        variant: "operation",
                        operation: z(d),
                        left: a,
                        right: e
                    }
                }, a)
            }
            b = void 0 !== b ? b : {};
            var C, D = {},
                E = {
                    start: 0,
                    start_streaming: 1
                },
                F = 0,
                G = [function (a) {
                    return a
                }, function (a, b) {
                    return {
                        type: "statement",
                        variant: "list",
                        statement: v([a, b])
                    }
                }, function (a) {
                    return a
                }, j("Type Definition"), function (a, b) {
                    return Object.assign(a, b)
                }, function (a) {
                    return {
                        type: "datatype",
                        variant: a[0],
                        affinity: a[1]
                    }
                }, j("Custom Datatype Name"), function (a, b) {
                    var c = u([a, b]),
                        d = "numeric";
                    return /int/i.test(c) ? d = "integer" : /char|clob|text/i.test(c) ? d = "text" : /blob/i.test(c) ? d = "blob" : /real|floa|doub/i.test(c) && (d = "real"), {
                        type: "datatype",
                        variant: c,
                        affinity: d
                    }
                }, /^[\t ]/, d(["\t", " "], !1, !1), function (a) {
                    return a
                }, j("Type Definition Arguments"), function (a, b) {
                    return {
                        args: {
                            type: "expression",
                            variant: "list",
                            expression: v([a, b])
                        }
                    }
                }, function (a) {
                    return a
                }, j("Null Literal"), function (a) {
                    return {
                        type: "literal",
                        variant: "null",
                        value: z(a)
                    }
                }, j("Date Literal"), function (a) {
                    return {
                        type: "literal",
                        variant: "date",
                        value: z(a)
                    }
                }, j("String Literal"), function (a, b) {
                    return {
                        type: "literal",
                        variant: "text",
                        value: b
                    }
                }, j("Single-quoted String Literal"), function (a) {
                    return w(a, "'")
                }, "''", c("''", !1), /^[^']/, d(["'"], !0, !1), j("Blob Literal"), /^[x]/i, d(["x"], !1, !0), function (a) {
                    return {
                        type: "literal",
                        variant: "blob",
                        value: a
                    }
                }, function (a) {
                    return {
                        type: "literal",
                        variant: "text",
                        value: a
                    }
                }, j("Number Sign"), function (a, b) {
                    return r(a) && (b.value = t([a, b.value])), b
                }, function (a, b) {
                    return {
                        type: "literal",
                        variant: "decimal",
                        value: t([a, b])
                    }
                }, j("Decimal Literal"), function (a, b) {
                    return t([a, b])
                }, function (a, b) {
                    return t([a, b])
                }, j("Decimal Literal Exponent"), "e", c("E", !0), /^[+\-]/, d(["+", "-"], !1, !1), function (a, b, c) {
                    return t([a, b, c])
                }, j("Hexidecimal Literal"), "0x", c("0x", !0), function (a, b) {
                    return {
                        type: "literal",
                        variant: "hexidecimal",
                        value: t([a, b])
                    }
                }, /^[0-9a-f]/i, d([
                    ["0", "9"],
                    ["a", "f"]
                ], !1, !0), /^[0-9]/, d([
                    ["0", "9"]
                ], !1, !1), j("Bind Parameter"), function (a) {
                    return Object.assign({
                        type: "variable"
                    }, a)
                }, j("Numbered Bind Parameter"), function (a, b) {
                    return {
                        format: "numbered",
                        name: t([a, b])
                    }
                }, /^[1-9]/, d([
                    ["1", "9"]
                ], !1, !1), function (a, b) {
                    return t([a, b])
                }, j("Named Bind Parameter"), /^[:@]/, d([":", "@"], !1, !1), function (a, b) {
                    return {
                        format: "named",
                        name: t([a, b])
                    }
                }, j("TCL Bind Parameter"), "$", c("$", !1), ":", c(":", !1), function (a, b, c) {
                    return Object.assign({
                        format: "tcl",
                        name: t([a, b])
                    }, c)
                }, function (a) {
                    return {
                        suffix: a
                    }
                }, j("EXISTS Expression"), function (a, b) {
                    return r(a) ? {
                        type: "expression",
                        format: "unary",
                        variant: "exists",
                        expression: b,
                        operator: z(a)
                    } : b
                }, j("EXISTS Keyword"), function (a, b) {
                    return u([a, b])
                }, j("RAISE Expression"), function (a, b) {
                    return Object.assign({
                        type: "expression",
                        format: "unary",
                        variant: z(a),
                        expression: b
                    }, b)
                }, j("RAISE Expression Arguments"), function (a) {
                    return Object.assign({
                        type: "error"
                    }, a)
                }, j("IGNORE Keyword"), function (a) {
                    return {
                        action: z(a)
                    }
                }, function (a, b) {
                    return {
                        action: z(a),
                        message: b
                    }
                }, function (a) {
                    return a
                }, function (a, b) {
                    return Object.assign(b, {
                        expression: a
                    })
                }, function (a, b) {
                    return {
                        type: "expression",
                        format: "unary",
                        variant: "operation",
                        expression: b,
                        operator: z(a)
                    }
                }, j("COLLATE Expression"), function (a) {
                    return Object.assign({
                        type: "expression",
                        format: "unary",
                        variant: "operation",
                        operator: "collate"
                    }, a)
                }, function (a, b) {
                    return B(a, b)
                }, function (a) {
                    return [null, a, null, {
                        type: "literal",
                        variant: "null",
                        value: "null"
                    }]
                }, "not ", c("NOT ", !0), "null", c("NULL", !0), function () {
                    return "not"
                }, function () {
                    return "is"
                }, j("CAST Expression"), function (a, b, c) {
                    return {
                        type: "expression",
                        format: "unary",
                        variant: z(a),
                        expression: b,
                        as: c
                    }
                }, j("Type Alias"), function (a) {
                    return a
                }, j("CASE Expression"), function (a, b, c, d) {
                    return Object.assign({
                        type: "expression",
                        variant: z(a),
                        expression: v([c, d])
                    }, b)
                }, function (a) {
                    return {
                        discriminant: a
                    }
                }, j("WHEN Clause"), function (a, b, c) {
                    return {
                        type: "condition",
                        variant: z(a),
                        condition: b,
                        consequent: c
                    }
                }, j("ELSE Clause"), function (a, b) {
                    return {
                        type: "condition",
                        variant: z(a),
                        consequent: b
                    }
                }, function (a, b) {
                    return Object.assign(b, {
                        left: a
                    })
                }, j("Comparison Expression"), function (a, b, c, d) {
                    return Object.assign({
                        type: "expression",
                        format: "binary",
                        variant: "operation",
                        operation: u([a, b]),
                        right: c
                    }, d)
                }, j("ESCAPE Expression"), function (a, b) {
                    return {
                        escape: b
                    }
                }, j("BETWEEN Expression"), function (a, b, c) {
                    return {
                        type: "expression",
                        format: "binary",
                        variant: "operation",
                        operation: u([a, b]),
                        right: c
                    }
                }, function (a, b) {
                    return B(a, [b])
                }, function (a) {
                    return z(a)
                }, j("IN Expression"), function (a, b, c) {
                    return {
                        type: "expression",
                        format: "binary",
                        variant: "operation",
                        operation: u([a, b]),
                        right: c
                    }
                }, function (a) {
                    return a
                }, j("Expression List"), function (a) {
                    return {
                        type: "expression",
                        variant: "list",
                        expression: r(a) ? a : []
                    }
                }, function (a, b) {
                    return v([a, b])
                }, j("Function Call"), function (a, b) {
                    return Object.assign({
                        type: "function",
                        name: a
                    }, b)
                }, j("Function Call Arguments"), function (a) {
                    return {
                        args: {
                            type: "identifier",
                            variant: "star",
                            name: a
                        }
                    }
                }, function (a, b) {
                    return !r(a) || b.expression.length > 0
                }, function (a, b) {
                    return {
                        args: Object.assign(b, a)
                    }
                }, function (a) {
                    return {
                        filter: z(a)
                    }
                }, j("Error Message"), function (a) {
                    return a
                }, j("Statement"), function (a, b) {
                    return Object.assign(b, a)
                }, j("QUERY PLAN"), function (a, b) {
                    return {
                        explain: r(a)
                    }
                }, j("QUERY PLAN Keyword"), function (a, b) {
                    return u([a, b])
                }, j("END Transaction Statement"), function (a, b) {
                    return {
                        type: "statement",
                        variant: "transaction",
                        action: "commit"
                    }
                }, j("BEGIN Transaction Statement"), function (a, b, c, d) {
                    return Object.assign({
                        type: "statement",
                        variant: "transaction",
                        action: "begin"
                    }, b, d)
                }, function (a) {
                    return a
                }, function (a) {
                    return {
                        defer: z(a)
                    }
                }, j("ROLLBACK Statement"), function (a, b) {
                    return Object.assign({
                        type: "statement",
                        variant: "transaction",
                        action: "rollback"
                    }, b)
                }, j("TO Clause"), function (a) {
                    return {
                        savepoint: a
                    }
                }, function (a) {
                    return z(a)
                }, j("SAVEPOINT Statement"), function (a, b) {
                    return {
                        type: "statement",
                        variant: a,
                        target: b
                    }
                }, j("RELEASE Statement"), function (a, b, c) {
                    return {
                        type: "statement",
                        variant: z(a),
                        target: c
                    }
                }, j("ALTER TABLE Statement"), function (a, b, c) {
                    return Object.assign({
                        type: "statement",
                        variant: z(a),
                        target: b
                    }, c)
                }, j("ALTER TABLE Keyword"), function (a, b) {
                    return u([a, b])
                }, j("RENAME TO Keyword"), function (a, b) {
                    return {
                        action: z(a),
                        name: b
                    }
                }, j("ADD COLUMN Keyword"), function (a, b) {
                    return {
                        action: z(a),
                        definition: b
                    }
                }, function (a, b) {
                    return Object.assign(b, a)
                }, j("WITH Clause"), function (a, b, c) {
                    var d = {
                        variant: r(b) ? "recursive" : "common"
                    };
                    return A(c) && (c = c.map(function (a) {
                        return Object.assign(a, d)
                    })), {
                            with: c
                        }
                }, function (a, b) {
                    return v([a, b])
                }, j("Common Table Expression"), function (a, b) {
                    return Object.assign({
                        type: "expression",
                        format: "table",
                        variant: "common",
                        target: a
                    }, b)
                }, function (a) {
                    return {
                        expression: a
                    }
                }, function (a, b) {
                    return Object.assign(b, a)
                }, j("ATTACH Statement"), function (a, b, c, d) {
                    return {
                        type: "statement",
                        variant: z(a),
                        target: d,
                        attach: c
                    }
                }, j("DETACH Statement"), function (a, b, c) {
                    return {
                        type: "statement",
                        variant: z(a),
                        target: c
                    }
                }, j("VACUUM Statement"), function (a, b) {
                    return Object.assign({
                        type: "statement",
                        variant: "vacuum"
                    }, b)
                }, function (a) {
                    return {
                        target: a
                    }
                }, j("ANALYZE Statement"), function (a, b) {
                    return Object.assign({
                        type: "statement",
                        variant: z(a)
                    }, b)
                }, function (a) {
                    return {
                        target: a.name
                    }
                }, j("REINDEX Statement"), function (a) {
                    return {
                        target: a.name
                    }
                }, j("PRAGMA Statement"), function (a, b, c) {
                    return {
                        type: "statement",
                        variant: z(a),
                        target: b,
                        args: {
                            type: "expression",
                            variant: "list",
                            expression: c
                        }
                    }
                }, function (a) {
                    return a
                }, function (a) {
                    return /^(yes|no|on|off|false|true|0|1)$/i.test(a)
                }, function (a) {
                    return {
                        type: "literal",
                        variant: "boolean",
                        normalized: /^(yes|on|true|1)$/i.test(a) ? "1" : "0",
                        value: a
                    }
                }, function (a) {
                    return z(a)
                }, function (a) {
                    return {
                        type: "identifier",
                        variant: "name",
                        name: a
                    }
                }, j("SELECT Statement"), function (a, b, c) {
                    return Object.assign(a, b, c)
                }, j("ORDER BY Clause"), function (a) {
                    return {
                        order: a.result
                    }
                }, j("LIMIT Clause"), function (a, b, c) {
                    return {
                        limit: Object.assign({
                            type: "expression",
                            variant: "limit",
                            start: b
                        }, c)
                    }
                }, j("OFFSET Clause"), function (a, b) {
                    return {
                        offset: b
                    }
                }, function (a, b) {
                    return A(b) ? {
                        type: "statement",
                        variant: "compound",
                        statement: a,
                        compound: b
                    } : a
                }, j("Union Operation"), function (a, b) {
                    return {
                        type: "compound",
                        variant: a,
                        statement: b
                    }
                }, function (a, b, c, d) {
                    return Object.assign({
                        type: "statement",
                        variant: "select"
                    }, a, b, c, d)
                }, j("SELECT Results Clause"), function (a, b) {
                    return Object.assign({
                        result: b
                    }, a)
                }, j("SELECT Results Modifier"), function (a) {
                    return {
                        distinct: !0
                    }
                }, function (a) {
                    return {}
                }, j("FROM Clause"), function (a, b) {
                    return {
                        from: b
                    }
                }, j("WHERE Clause"), function (a, b) {
                    return {
                        where: q(b)
                    }
                }, j("GROUP BY Clause"), function (a, b, c) {
                    return Object.assign({
                        group: b
                    }, c)
                }, j("HAVING Clause"), function (a, b) {
                    return {
                        having: b
                    }
                }, function (a, b) {
                    return {
                        type: "identifier",
                        variant: "star",
                        name: t([a, b])
                    }
                }, function (a, b) {
                    return t([a, b])
                }, function (a, b) {
                    return Object.assign(a, b)
                }, function (a, b) {
                    return A(b) ? {
                        type: "map",
                        variant: "join",
                        source: a,
                        map: b
                    } : a
                }, function (a, b) {
                    return Object.assign(a, b)
                }, j("CROSS JOIN Operation"), function (a) {
                    return {
                        type: "join",
                        variant: "cross join",
                        source: a
                    }
                }, j("JOIN Operation"), function (a, b) {
                    return {
                        type: "join",
                        variant: z(a),
                        source: b
                    }
                }, function (a, b, c) {
                    return Object.assign({
                        type: "function",
                        variant: "table",
                        name: a,
                        args: b
                    }, c)
                }, j("Qualified Table"), function (a, b) {
                    return Object.assign(a, b)
                }, j("Qualified Table Identifier"), function (a, b) {
                    return Object.assign(a, b)
                }, j("Qualfied Table Index"), function (a, b) {
                    return {
                        index: b
                    }
                }, function (a, b) {
                    return {
                        index: u([a, b])
                    }
                }, j("SELECT Source"), function (a, b) {
                    return Object.assign(a, b)
                }, j("Subquery"), function (a, b) {
                    return Object.assign(a, b)
                }, j("Alias"), function (a, b) {
                    return {
                        alias: b
                    }
                }, j("JOIN Operator"), function (a, b, c) {
                    return u([a, b, c])
                }, function (a, b) {
                    return u([a, b])
                }, function (a) {
                    return z(a)
                }, j("JOIN Constraint"), function (a) {
                    return {
                        constraint: Object.assign({
                            type: "constraint",
                            variant: "join"
                        }, a)
                    }
                }, j("Join ON Clause"), function (a, b) {
                    return {
                        format: z(a),
                        on: b
                    }
                }, j("Join USING Clause"), function (a, b) {
                    return {
                        format: z(a),
                        using: b
                    }
                }, j("VALUES Clause"), function (a, b) {
                    return {
                        type: "statement",
                        variant: "select",
                        result: b
                    }
                }, function (a, b) {
                    return {
                        result: v([a, b])
                    }
                }, function (a) {
                    return a
                }, j("Ordering Expression"), function (a, b) {
                    return r(b) ? Object.assign({
                        type: "expression",
                        variant: "order",
                        expression: a
                    }, b) : a
                }, j("Star"), j("Fallback Type"), j("INSERT Statement"), function (a, b) {
                    return Object.assign({
                        type: "statement",
                        variant: "insert"
                    }, a, b)
                }, j("INSERT Keyword"), function (a, b) {
                    return Object.assign({
                        action: z(a)
                    }, b)
                }, j("REPLACE Keyword"), function (a) {
                    return {
                        action: z(a)
                    }
                }, j("INSERT OR Modifier"), function (a, b) {
                    return {
                        or: z(b)
                    }
                }, function (a, b) {
                    return Object.assign({
                        into: a
                    }, b)
                }, j("INTO Clause"), function (a, b) {
                    return b
                }, j("INTO Keyword"), function (a) {
                    return {
                        result: a
                    }
                }, j("Column List"), function (a, b) {
                    return {
                        columns: v([a, b])
                    }
                }, function (a) {
                    return a
                }, j("Column Name"), function (a) {
                    return {
                        type: "identifier",
                        variant: "column",
                        name: a
                    }
                }, function (a, b) {
                    return b
                }, j("VALUES Keyword"), function (a, b) {
                    return v([a, b])
                }, j("Wrapped Expression List"), function (a) {
                    return a
                }, j("DEFAULT VALUES Clause"), function (a, b) {
                    return {
                        type: "values",
                        variant: "default"
                    }
                }, j("Compound Operator"), j("UNION Operator"), function (a, b) {
                    return u([a, b])
                }, function (a) {
                    return a
                }, j("UPDATE Statement"), function (a, b, c, d, e, f, g) {
                    return Object.assign({
                        type: "statement",
                        variant: a,
                        into: c
                    }, b, d, e, f, g)
                }, j("UPDATE Keyword"), j("UPDATE OR Modifier"), function (a) {
                    return {
                        or: z(a)
                    }
                }, j("SET Clause"), function (a) {
                    return {
                        set: a
                    }
                }, j("Column Assignment"), function (a, b) {
                    return {
                        type: "assignment",
                        target: a,
                        value: b
                    }
                }, j("DELETE Statement"), function (a, b, c, d, e) {
                    return Object.assign({
                        type: "statement",
                        variant: a,
                        from: b
                    }, c, d, e)
                }, j("DELETE Keyword"), j("CREATE Statement"), j("CREATE TABLE Statement"), function (a, b, c, d) {
                    return Object.assign({
                        type: "statement",
                        name: c
                    }, a, d, b)
                }, function (a, b, c) {
                    return Object.assign({
                        variant: a,
                        format: z(c)
                    }, b)
                }, function (a) {
                    return {
                        temporary: r(a)
                    }
                }, j("IF NOT EXISTS Modifier"), function (a, b, c) {
                    return {
                        condition: q({
                            type: "condition",
                            variant: z(a),
                            condition: {
                                type: "expression",
                                variant: z(c),
                                operator: u([b, c])
                            }
                        })
                    }
                }, j("Table Definition"), function (a, b, c) {
                    return Object.assign({
                        definition: v([a, b])
                    }, c)
                }, function (a, b) {
                    return {
                        optimization: [{
                            type: "optimization",
                            value: u([a, b])
                        }]
                    }
                }, function (a) {
                    return a
                }, j("Column Definition"), function (a, b, c) {
                    return Object.assign({
                        type: "definition",
                        variant: "column",
                        name: a,
                        definition: r(c) ? c : []
                    }, b)
                }, j("Column Datatype"), function (a) {
                    return {
                        datatype: a
                    }
                }, j("Column Constraint"), function (a, b, c) {
                    return Object.assign(b, a)
                }, function (a) {
                    return a[a.length - 1]
                }, j("CONSTRAINT Name"), function (a) {
                    return {
                        name: a
                    }
                }, j("FOREIGN KEY Column Constraint"), function (a) {
                    return Object.assign({
                        variant: "foreign key"
                    }, a)
                }, j("PRIMARY KEY Column Constraint"), function (a, b, c, d) {
                    return Object.assign(a, c, b, d)
                }, j("PRIMARY KEY Keyword"), function (a, b) {
                    return {
                        type: "constraint",
                        variant: u([a, b])
                    }
                }, j("AUTOINCREMENT Keyword"), function (a) {
                    return {
                        autoIncrement: !0
                    }
                }, function (a, b) {
                    return Object.assign({
                        type: "constraint",
                        variant: a
                    }, b)
                }, j("UNIQUE Column Constraint"), j("NULL Column Constraint"), function (a, b) {
                    return u([a, b])
                }, j("CHECK Column Constraint"), j("DEFAULT Column Constraint"), function (a, b) {
                    return {
                        type: "constraint",
                        variant: z(a),
                        value: b
                    }
                }, j("COLLATE Column Constraint"), function (a) {
                    return {
                        type: "constraint",
                        variant: "collate",
                        collate: a
                    }
                }, j("Table Constraint"), function (a, b, c) {
                    return Object.assign({
                        type: "definition",
                        variant: "constraint"
                    }, b, a)
                }, j("CHECK Table Constraint"), function (a) {
                    return {
                        definition: q(a)
                    }
                }, j("PRIMARY KEY Table Constraint"), function (a, b, c) {
                    return {
                        definition: q(Object.assign(a, c, b[1])),
                        columns: b[0]
                    }
                }, function (a) {
                    return {
                        type: "constraint",
                        variant: z(a)
                    }
                }, function (a, b) {
                    return u([a, b])
                }, j("UNIQUE Keyword"), function (a) {
                    return z(a)
                }, function (a, b) {
                    return [a].concat(b)
                }, function (a) {
                    return a.map(function (a) {
                        var b = h(a, 1),
                            c = b[0];
                        return c
                    })
                }, function (a) {
                    var b = a.find(function (a) {
                        var b = h(a, 2),
                            c = (b[0], b[1]);
                        return r(c)
                    });
                    return [a.map(function (a) {
                        var b = h(a, 2),
                            c = b[0];
                        b[1];
                        return c
                    }), b ? b[1] : null]
                }, j("Indexed Column"), function (a, b, c) {
                    var d = a;
                    return r(b) && (d = Object.assign({
                        type: "expression",
                        variant: "order",
                        expression: a
                    }, b)), [d, c]
                }, j("Collation"), function (a) {
                    return {
                        collate: q(a)
                    }
                }, j("Column Direction"), function (a) {
                    return {
                        direction: z(a)
                    }
                }, function (a, b) {
                    return {
                        conflict: z(b)
                    }
                }, j("ON CONFLICT Keyword"), function (a, b) {
                    return u([a, b])
                }, function (a, b) {
                    return {
                        type: "constraint",
                        variant: z(a),
                        expression: b
                    }
                }, j("FOREIGN KEY Table Constraint"), function (a, b, c) {
                    return Object.assign({
                        definition: q(Object.assign(a, c))
                    }, b)
                }, j("FOREIGN KEY Keyword"), function (a, b) {
                    return {
                        type: "constraint",
                        variant: u([a, b])
                    }
                }, function (a, b, c) {
                    return Object.assign({
                        type: "constraint"
                    }, a, b, c)
                }, j("REFERENCES Clause"), function (a, b) {
                    return {
                        references: b
                    }
                }, function (a, b) {
                    return {
                        action: v([a, b])
                    }
                }, j("FOREIGN KEY Action Clause"), function (a, b, c) {
                    return {
                        type: "action",
                        variant: z(a),
                        action: z(c)
                    }
                }, j("FOREIGN KEY Action"), function (a, b) {
                    return u([a, b])
                }, function (a) {
                    return z(a)
                }, function (a, b) {
                    return u([a, b])
                }, function (a, b) {
                    return {
                        type: "action",
                        variant: z(a),
                        action: b
                    }
                }, j("DEFERRABLE Clause"), function (a, b, c) {
                    return {
                        defer: u([a, b, c])
                    }
                }, function (a, b) {
                    return u([a, b])
                }, function (a) {
                    return {
                        definition: q(a)
                    }
                }, j("CREATE INDEX Statement"), function (a, b, c, d, e) {
                    return Object.assign({
                        type: "statement",
                        target: c,
                        on: d
                    }, a, b, e)
                }, function (a, b, c) {
                    return Object.assign({
                        variant: z(a),
                        format: z(c)
                    }, b)
                }, function (a) {
                    return {
                        unique: !0
                    }
                }, j("ON Clause"), function (a, b, c) {
                    return {
                        type: "identifier",
                        variant: "expression",
                        format: "table",
                        name: b.name,
                        columns: c
                    }
                }, j("CREATE TRIGGER Statement"), function (a, b, c, d, e, f, g, h) {
                    return Object.assign({
                        type: "statement",
                        target: c,
                        on: e,
                        event: d,
                        by: r(f) ? f : "row",
                        action: q(h)
                    }, a, b, g)
                }, function (a, b, c) {
                    return Object.assign({
                        variant: z(a),
                        format: z(c)
                    }, b)
                }, j("Conditional Clause"), function (a, b) {
                    return Object.assign({
                        type: "event"
                    }, a, b)
                }, function (a) {
                    return {
                        occurs: z(a)
                    }
                }, function (a, b) {
                    return u([a, b])
                }, j("Conditional Action"), function (a) {
                    return {
                        event: z(a)
                    }
                }, function (a, b) {
                    return {
                        event: z(a),
                        of: b
                    }
                }, function (a, b) {
                    return b
                }, "statement", c("STATEMENT", !0), function (a, b, c) {
                    return z(c)
                }, function (a, b) {
                    return {
                        when: b
                    }
                }, j("Actions Clause"), function (a, b, c) {
                    return b
                }, function (a) {
                    return a
                }, j("CREATE VIEW Statement"), function (a, b, c, d) {
                    return Object.assign({
                        type: "statement",
                        target: c,
                        result: d
                    }, a, b)
                }, function (a, b) {
                    return Object.assign({
                        type: "identifier",
                        variant: "expression",
                        format: "view",
                        name: a.name,
                        columns: []
                    }, b)
                }, function (a, b, c) {
                    return Object.assign({
                        variant: z(a),
                        format: z(c)
                    }, b)
                }, j("CREATE VIRTUAL TABLE Statement"), function (a, b, c, d) {
                    return Object.assign({
                        type: "statement",
                        target: c,
                        result: d
                    }, a, b)
                }, function (a, b, c) {
                    return {
                        variant: z(a),
                        format: z(b)
                    }
                }, function (a, b) {
                    return Object.assign({
                        type: "module",
                        variant: "virtual",
                        name: a
                    }, b)
                }, j("Module Arguments"), function (a) {
                    return {
                        args: {
                            type: "expression",
                            variant: "list",
                            expression: r(a) ? a : []
                        }
                    }
                }, function (a, b) {
                    return v([a, b]).filter(function (a) {
                        return r(a)
                    })
                }, function (a) {
                    return a
                }, j("DROP Statement"), function (a, b) {
                    return Object.assign({
                        type: "statement",
                        target: Object.assign(b, {
                            variant: a.format
                        })
                    }, a)
                }, j("DROP Keyword"), function (a, b, c) {
                    return Object.assign({
                        variant: z(a),
                        format: b,
                        condition: []
                    }, c)
                }, j("DROP Type"), j("IF EXISTS Keyword"), function (a, b) {
                    return {
                        condition: [{
                            type: "condition",
                            variant: z(a),
                            condition: {
                                type: "expression",
                                variant: z(b),
                                operator: z(b)
                            }
                        }]
                    }
                }, j("Or"), j("Add"), j("Subtract"), j("Multiply"), j("Divide"), j("Modulo"), j("Shift Left"), j("Shift Right"), j("Logical AND"), j("Logical OR"), j("Less Than"), j("Greater Than"), j("Less Than Or Equal"), j("Greater Than Or Equal"), j("Equal"), j("Not Equal"), j("IS"), function (a, b) {
                    return u([a, b])
                }, j("Identifier"), j("Database Identifier"), function (a) {
                    return {
                        type: "identifier",
                        variant: "database",
                        name: a
                    }
                }, j("Function Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "function",
                        name: t([a, b])
                    }
                }, j("Table Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "table",
                        name: t([a, b])
                    }
                }, function (a, b) {
                    return t([a, b])
                }, j("Column Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "column",
                        name: t([a, b])
                    }
                }, function () {
                    return ""
                }, function (a, b) {
                    return t([a, b])
                }, j("Collation Identifier"), function (a) {
                    return {
                        type: "identifier",
                        variant: "collation",
                        name: a
                    }
                }, j("Savepoint Identifier"), function (a) {
                    return {
                        type: "identifier",
                        variant: "savepoint",
                        name: a
                    }
                }, j("Index Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "index",
                        name: t([a, b])
                    }
                }, j("Trigger Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "trigger",
                        name: t([a, b])
                    }
                }, j("View Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "view",
                        name: t([a, b])
                    }
                }, j("Pragma Identifier"), function (a, b) {
                    return {
                        type: "identifier",
                        variant: "pragma",
                        name: t([a, b])
                    }
                }, j("CTE Identifier"), function (a) {
                    return a
                }, function (a, b) {
                    return Object.assign({
                        type: "identifier",
                        variant: "expression",
                        format: "table",
                        name: a.name,
                        columns: []
                    }, b)
                }, j("Table Constraint Identifier"), function (a) {
                    return {
                        type: "identifier",
                        variant: "constraint",
                        format: "table",
                        name: a
                    }
                }, j("Column Constraint Identifier"), function (a) {
                    return {
                        type: "identifier",
                        variant: "constraint",
                        format: "column",
                        name: a
                    }
                }, j("Datatype Name"), function (a) {
                    return [a, "text"]
                }, function (a) {
                    return [a, "real"]
                }, function (a) {
                    return [a, "numeric"]
                }, function (a) {
                    return [a, "integer"]
                }, function (a) {
                    return [a, "none"]
                }, j("TEXT Datatype Name"), "n", c("N", !0), "var", c("VAR", !0), "char", c("CHAR", !0), "tiny", c("TINY", !0), "medium", c("MEDIUM", !0), "long", c("LONG", !0), "text", c("TEXT", !0), "clob", c("CLOB", !0), j("REAL Datatype Name"), "float", c("FLOAT", !0), "real", c("REAL", !0), j("DOUBLE Datatype Name"), "double", c("DOUBLE", !0), "precision", c("PRECISION", !0), function (a, b) {
                    return t([a, b])
                }, j("NUMERIC Datatype Name"), "numeric", c("NUMERIC", !0), "decimal", c("DECIMAL", !0), "boolean", c("BOOLEAN", !0), "date", c("DATE", !0), "time", c("TIME", !0), "stamp", c("STAMP", !0), "string", c("STRING", !0), j("INTEGER Datatype Name"), "int", c("INT", !0), "2", c("2", !1), "4", c("4", !1), "8", c("8", !1), "eger", c("EGER", !0), "big", c("BIG", !0), "small", c("SMALL", !0), "floating", c("FLOATING", !0), "point", c("POINT", !0), function (a, b) {
                    return t([a, b])
                }, j("BLOB Datatype Name"), "blob", c("BLOB", !0), /^[a-z0-9$_]/i, d([
                    ["a", "z"],
                    ["0", "9"], "$", "_"
                ], !1, !0), "\\u", c("\\u", !1), /^[a-f0-9]/i, d([
                    ["a", "f"],
                    ["0", "9"]
                ], !1, !0), function (a, b) {
                    return t([a, b]).toLowerCase()
                }, function (a) {
                    return z(a)
                }, g(), function (a) {
                    return y(a)
                }, /^[ \t]/, d([" ", "\t"], !1, !1), '"', c('"', !1), '""', c('""', !1), /^[^"]/, d(['"'], !0, !1), function (a) {
                    return w(a, '"')
                }, "'", c("'", !1), function (a) {
                    return w(a, "'")
                }, "`", c("`", !1), "``", c("``", !1), /^[^`]/, d(["`"], !0, !1), function (a) {
                    return w(a, "`")
                }, j("Open Bracket"), "[", c("[", !1), j("Close Bracket"), "]", c("]", !1), j("Open Parenthesis"), "(", c("(", !1), j("Close Parenthesis"), ")", c(")", !1), j("Comma"), ",", c(",", !1), j("Period"), ".", c(".", !1), j("Asterisk"), "*", c("*", !1), j("Question Mark"), "?", c("?", !1), j("Single Quote"), j("Double Quote"), j("Backtick"), j("Tilde"), "~", c("~", !1), j("Plus"), "+", c("+", !1), j("Minus"), "-", c("-", !1), "=", c("=", !1), j("Ampersand"), "&", c("&", !1), j("Pipe"), "|", c("|", !1), "%", c("%", !1), "<", c("<", !1), ">", c(">", !1), j("Exclamation"), "!", c("!", !1), j("Semicolon"), ";", c(";", !1), j("Colon"), j("Forward Slash"), "/", c("/", !1), j("Backslash"), "\\", c("\\", !1), "abort", c("ABORT", !0), "action", c("ACTION", !0), "add", c("ADD", !0), "after", c("AFTER", !0), "all", c("ALL", !0), "alter", c("ALTER", !0), "analyze", c("ANALYZE", !0), "and", c("AND", !0), "as", c("AS", !0), "asc", c("ASC", !0), "attach", c("ATTACH", !0), "autoincrement", c("AUTOINCREMENT", !0), "before", c("BEFORE", !0), "begin", c("BEGIN", !0), "between", c("BETWEEN", !0), "by", c("BY", !0), "cascade", c("CASCADE", !0), "case", c("CASE", !0), "cast", c("CAST", !0), "check", c("CHECK", !0), "collate", c("COLLATE", !0), "column", c("COLUMN", !0), "commit", c("COMMIT", !0), "conflict", c("CONFLICT", !0), "constraint", c("CONSTRAINT", !0), "create", c("CREATE", !0), "cross", c("CROSS", !0), "current_date", c("CURRENT_DATE", !0), "current_time", c("CURRENT_TIME", !0), "current_timestamp", c("CURRENT_TIMESTAMP", !0), "database", c("DATABASE", !0), "default", c("DEFAULT", !0), "deferrable", c("DEFERRABLE", !0), "deferred", c("DEFERRED", !0), "delete", c("DELETE", !0), "desc", c("DESC", !0), "detach", c("DETACH", !0), "distinct", c("DISTINCT", !0), "drop", c("DROP", !0), "each", c("EACH", !0), "else", c("ELSE", !0), "end", c("END", !0), "escape", c("ESCAPE", !0), "except", c("EXCEPT", !0), "exclusive", c("EXCLUSIVE", !0), "exists", c("EXISTS", !0), "explain", c("EXPLAIN", !0), "fail", c("FAIL", !0), "for", c("FOR", !0), "foreign", c("FOREIGN", !0), "from", c("FROM", !0), "full", c("FULL", !0), "glob", c("GLOB", !0), "group", c("GROUP", !0), "having", c("HAVING", !0), "if", c("IF", !0), "ignore", c("IGNORE", !0), "immediate", c("IMMEDIATE", !0), "in", c("IN", !0), "index", c("INDEX", !0), "indexed", c("INDEXED", !0), "initially", c("INITIALLY", !0), "inner", c("INNER", !0), "insert", c("INSERT", !0), "instead", c("INSTEAD", !0), "intersect", c("INTERSECT", !0), "into", c("INTO", !0), "is", c("IS", !0), "isnull", c("ISNULL", !0), "join", c("JOIN", !0), "key", c("KEY", !0), "left", c("LEFT", !0), "like", c("LIKE", !0), "limit", c("LIMIT", !0), "match", c("MATCH", !0), "natural", c("NATURAL", !0), "no", c("NO", !0), "not", c("NOT", !0), "notnull", c("NOTNULL", !0), "of", c("OF", !0), "offset", c("OFFSET", !0), "on", c("ON", !0), "or", c("OR", !0), "order", c("ORDER", !0), "outer", c("OUTER", !0), "plan", c("PLAN", !0), "pragma", c("PRAGMA", !0), "primary", c("PRIMARY", !0), "query", c("QUERY", !0), "raise", c("RAISE", !0), "recursive", c("RECURSIVE", !0), "references", c("REFERENCES", !0), "regexp", c("REGEXP", !0), "reindex", c("REINDEX", !0), "release", c("RELEASE", !0), "rename", c("RENAME", !0), "replace", c("REPLACE", !0), "restrict", c("RESTRICT", !0), "right", c("RIGHT", !0), "rollback", c("ROLLBACK", !0), "row", c("ROW", !0), "rowid", c("ROWID", !0), "savepoint", c("SAVEPOINT", !0), "select", c("SELECT", !0), "set", c("SET", !0), "table", c("TABLE", !0), "temp", c("TEMP", !0), "temporary", c("TEMPORARY", !0), "then", c("THEN", !0), "to", c("TO", !0), "transaction", c("TRANSACTION", !0), "trigger", c("TRIGGER", !0), "union", c("UNION", !0), "unique", c("UNIQUE", !0), "update", c("UPDATE", !0), "using", c("USING", !0), "vacuum", c("VACUUM", !0), "values", c("VALUES", !0), "view", c("VIEW", !0), "virtual", c("VIRTUAL", !0), "when", c("WHEN", !0), "where", c("WHERE", !0), "with", c("WITH", !0), "without", c("WITHOUT", !0), function (a) {
                    return z(a)
                }, function () {
                    return null
                }, j("Line Comment"), "--", c("--", !1), /^[\n\v\f\r]/, d(["\n", "\v", "\f", "\r"], !1, !1), j("Block Comment"), "/*", c("/*", !1), "*/", c("*/", !1), /^[\n\v\f\r\t ]/, d(["\n", "\v", "\f", "\r", "\t", " "], !1, !1), j("Whitespace"), "__TODO__", c("__TODO__", !1)],
                H = [o("%;ȿ/H#;#/?$;\".\" &\"/1$;#/($8$: $!!)($'#(#'#(\"'#&'#"), o("%;ȿ/C#;#/:$;x/1$;#/($8$: $!!)($'#(#'#(\"'#&'#"), o("%;x/B#;ȿ/9$$;%0#*;%&/)$8#:!#\"\" )(#'#(\"'#&'#"), o("$;Ƴ0#*;Ƴ&"), o("$;Ƴ/&#0#*;Ƴ&&&#"), o("%;$/:#;x/1$;ȿ/($8#:\"#!!)(#'#(\"'#&'#"), o('<%;\'.# &;(/@#;ȿ/7$;*." &"/)$8#:$#"" )(#\'#("\'#&\'#=." 7#'), o("%;Ƌ/' 8!:%!! )"), o('<%;ƕ/9#$;)0#*;)&/)$8":\'""! )("\'#&\'#=." 7&'), o('%4(""5!7)/1#;Ɨ/($8":*"! )("\'#&\'#'), o("<%;Ơ/R#;5/I$;ȿ/@$;+.\" &\"/2$;ơ/)$8%:,%\"#!)(%'#($'#(#'#(\"'#&'#=.\" 7+"), o("%;Ƣ/C#;ȿ/:$;5/1$;ȿ/($8$:-$!!)($'#(#'#(\"'#&'#"), o(";5.; &;6.5 &;2./ &;-.) &;..# &;/"), o('<%;Ȇ/1#;ȿ/($8":/"!!)("\'#&\'#=." 7.'), o('<%;ǒ.) &;ǔ.# &;Ǔ/1#;ȿ/($8":1"!!)("\'#&\'#=." 70'), o('<%;4." &"/2#;0/)$8":3""! )("\'#&\'#=." 72'), o("<%;Ʀ/A#$;10#*;1&/1$;Ʀ/($8#:5#!!)(#'#(\"'#&'#=.\" 74"), o('26""6677.) &48""5!79'), o('<%4;""5!7</1#;0/($8":="! )("\'#&\'#=." 7:'), o("%;Ɨ.# &;ƛ/' 8!:>!! )"), o('<%;ƪ.# &;ƫ/\' 8!:"!! )=." 7?'), o('%;4." &"/2#;6/)$8":@""! )("\'#&\'#'), o(";<.# &;7"), o('%;8/7#;;." &"/)$8":A""! )("\'#&\'#'), o('<;9.# &;:=." 7B'), o('%$;>/&#0#*;>&&&#/7#;:." &"/)$8":C""! )("\'#&\'#'), o('%;ƣ/9#$;>0#*;>&/)$8":D""! )("\'#&\'#'), o('<%3F""5!7G/T#4H""5!7I." &"/@$$;>/&#0#*;>&&&#/*$8#:J##"! )(#\'#("\'#&\'#=." 7E'), o('<%3L""5"7M/?#$;=/&#0#*;=&&&#/)$8":N""! )("\'#&\'#=." 7K'), o('4O""5!7P'), o('4Q""5!7R'), o("<%;@.) &;B.# &;C/' 8!:T!! )=.\" 7S"), o('<%;ƥ/@#;A." &"/2$;ȿ/)$8#:V#""!)(#\'#("\'#&\'#=." 7U'), o('%4W""5!7X/9#$;>0#*;>&/)$8":Y""! )("\'#&\'#'), o('<%4[""5!7\\/H#$;Ɠ/&#0#*;Ɠ&&&#/2$;ȿ/)$8#:]#""!)(#\'#("\'#&\'#=." 7Z'), o('<%2_""6_7`/o#$;Ɠ.) &2a""6a7b/2#0/*;Ɠ.) &2a""6a7b&&&#/A$;ȿ/8$;D." &"/*$8$:c$##" )($\'#(#\'#("\'#&\'#=." 7^'), o('%;ƛ/1#;ȿ/($8":d"!!)("\'#&\'#'), o('<%;F." &"/;#;ȿ/2$;/)$8#:f#"" )(#\'#("\'#&\'#=." 7e'), o('<%;k." &"/;#;Ǥ/2$;ȿ/)$8#:h#""!)(#\'#("\'#&\'#=." 7g'), o("<%;ȑ/_#;ȿ/V$;Ơ/M$;ȿ/D$;H/;$;ȿ/2$;ơ/)$8':j'\"&\")(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7i"), o("<%;I.# &;J/' 8!:l!! )=.\" 7k"), o("<%;ǯ/' 8!:n!! )=.\" 7m"), o("%;ț.) &;Ʒ.# &;Ǧ/M#;ȿ/D$;Ƣ/;$;ȿ/2$;w/)$8%:o%\"$ )(%'#($'#(#'#(\"'#&'#"), o(";?./ &;t.) &;,.# &;Ž"), o("%;Ơ/L#;ȿ/C$;o/:$;ȿ/1$;ơ/($8%:p%!\")(%'#($'#(#'#(\"'#&'#"), o(";L.; &;E.5 &;_./ &;a.) &;G.# &;K"), o("%;M/;#;ȿ/2$;Q/)$8#:q#\"\" )(#'#(\"'#&'#.# &;M"), o("%;P/A#;ȿ/8$;N.# &;o/)$8#:r#\"\" )(#'#(\"'#&'#.# &;N"), o(";Ʃ.U &;ƫ.O &;ƪ.I &%%;k/8#%<;Ǥ=.##&&!&'#/#$+\")(\"'#&'#/\"!&,)"), o("<%;ĭ/' 8!:t!! )=.\" 7s"), o("%;O/#$%;ȿ/>#;Ŧ/5$;ȿ/,$;O/#$+$)($'#(#'#(\"'#&'#0H*%;ȿ/>#;Ŧ/5$;ȿ/,$;O/#$+$)($'#(#'#(\"'#&'#&/)$8\":u\"\"! )(\"'#&'#"), o("%;R/#$%;ȿ/>#;T/5$;ȿ/,$;R/#$+$)($'#(#'#(\"'#&'#0H*%;ȿ/>#;T/5$;ȿ/,$;R/#$+$)($'#(#'#(\"'#&'#&/)$8\":u\"\"! )(\"'#&'#"), o(";ũ.) &;Ū.# &;ū"), o("%;S/#$%;ȿ/>#;V/5$;ȿ/,$;S/#$+$)($'#(#'#(\"'#&'#0H*%;ȿ/>#;V/5$;ȿ/,$;S/#$+$)($'#(#'#(\"'#&'#&/)$8\":u\"\"! )(\"'#&'#"), o(";ŧ.# &;Ũ"), o("%;U/#$%;ȿ/>#;X/5$;ȿ/,$;U/#$+$)($'#(#'#(\"'#&'#0H*%;ȿ/>#;X/5$;ȿ/,$;U/#$+$)($'#(#'#(\"'#&'#&/)$8\":u\"\"! )(\"'#&'#"), o(";Ŭ.U &;ŭ.O &;Ů.I &%%;ů/8#%<;ů=.##&&!&'#/#$+\")(\"'#&'#/\"!&,)"), o("%;W/#$%;ȿ/>#;Z/5$;ȿ/,$;W/#$+$)($'#(#'#(\"'#&'#0H*%;ȿ/>#;Z/5$;ȿ/,$;W/#$+$)($'#(#'#(\"'#&'#&/)$8\":u\"\"! )(\"'#&'#"), o(";Ų.{ &;ų.u &%%;Ű/8#%<;X=.##&&!&'#/#$+\")(\"'#&'#/\"!&,).I &%%;ű/8#%<;X=.##&&!&'#/#$+\")(\"'#&'#/\"!&,)"), o('%;Y/9#$;\\0#*;\\&/)$8":u""! )("\'#&\'#'), o("%;ȿ/1#;]/($8\":v\"! )(\"'#&'#.H &%;ȿ/>#;^/5$;ȿ/,$;Y/#$+$)($'#(#'#(\"'#&'#"), o('%3w""5$7x/?#;ȿ/6$3y""5$7z/\'$8#:{# )(#\'#("\'#&\'#.? &%;ǻ/& 8!:|! ).. &%;ȅ/& 8!:{! )'), o(";ŷ./ &;ŵ.) &;Ŷ.# &;Ŵ"), o("<%;ǉ/i#;ȿ/`$;Ơ/W$;o/N$;ȿ/E$;`/<$;ȿ/3$;ơ/*$8(:~(#'$\")(('#(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7}"), o("<%;ƿ/:#;ȿ/1$;&/($8#:#! )(#'#(\"'#&'#=.\" 7"), o("<%;ǈ/#;ȿ/$;b.\" &\"/|$;ȿ/s$$;c/&#0#*;c&&&#/]$;ȿ/T$;d.\" &\"/F$;ȿ/=$;Ǡ/4$;ȿ/+$8*:*$)'%#)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7"), o("%%<;Ȱ=.##&&!&'#/1#;o/($8\":\"! )(\"'#&'#"), o("<%;Ȱ/i#;ȿ/`$;o/W$;ȿ/N$;Ȥ/E$;ȿ/<$;o/3$;ȿ/*$8(:(#'%!)(('#(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7"), o("<%;ǟ/D#;ȿ/;$;o/2$;ȿ/)$8$:$\"#!)($'#(#'#(\"'#&'#=.\" 7"), o("%;[/;#;ȿ/2$;f/)$8#:#\"\" )(#'#(\"'#&'#.# &;["), o(";l.) &;i.# &;g"), o('<%;k." &"/o#;ǿ./ &;ǫ.) &;Ȕ.# &;ȁ/T$;ȿ/K$;o/B$;ȿ/9$;h." &"/+$8&:&$%$" )(&\'#(%\'#($\'#(#\'#("\'#&\'#=." 7'), o("<%;ǡ/D#;ȿ/;$;o/2$;ȿ/)$8$:$\"#!)($'#(#'#(\"'#&'#=.\" 7"), o('<%;k." &"/E#;ǅ/<$;ȿ/3$;j/*$8$:$##" )($\'#(#\'#("\'#&\'#=." 7'), o("%;e/W#%;ȿ/>#;ƾ/5$;ȿ/,$;e/#$+$)($'#(#'#(\"'#&'#/)$8\":\"\"! )(\"'#&'#"), o('%;Ȅ/1#;ȿ/($8":"!!)("\'#&\'#'), o('<%;k." &"/E#;Ǳ/<$;ȿ/3$;m/*$8$:$##" )($\'#(#\'#("\'#&\'#=." 7'), o(";n.# &;Ż"), o("%;Ơ/I#;.# &;q/:$;ȿ/1$;ơ/($8$:$!\")($'#(#'#(\"'#&'#"), o("%;e/#$%;ȿ/>#;p/5$;ȿ/,$;e/#$+$)($'#(#'#(\"'#&'#0H*%;ȿ/>#;p/5$;ȿ/,$;e/#$+$)($'#(#'#(\"'#&'#&/)$8\":u\"\"! )(\"'#&'#"), o(";ƾ.# &;Ȋ"), o('<%;r." &"/1#;ȿ/($8":"!!)("\'#&\'#=." 7'), o("%;o/B#;ȿ/9$$;s0#*;s&/)$8#:#\"\" )(#'#(\"'#&'#"), o("%;Ƣ/:#;o/1$;ȿ/($8#:#!!)(#'#(\"'#&'#"), o("<%;ź/[#;ȿ/R$;Ơ/I$;u.\" &\"/;$;ȿ/2$;ơ/)$8&:&\"%\")(&'#(%'#($'#(#'#(\"'#&'#=.\" 7"), o('<%;Û/\' 8!:!! ).V &%;v." &"/G#;q/>$9: "! -""&!&#/)$8#:#""!)(#\'#("\'#&\'#=." 7'), o('%;ǜ.# &;ƻ/1#;ȿ/($8":"!!)("\'#&\'#'), o("<%;//' 8!:!! )=.\" 7"), o('<%;y." &"/;#;{/2$;ȿ/)$8#:¡#""!)(#\'#("\'#&\'#=." 7 '), o('<%;ǥ/@#;ȿ/7$;z." &"/)$8#:£#"" )(#\'#("\'#&\'#=." 7¢'), o("<%;Ȑ/D#;ȿ/;$;ȍ/2$;ȿ/)$8$:¥$\"#!)($'#(#'#(\"'#&'#=.\" 7¤"), o(";.S &;û.M &;Ţ.G &;}.A &;|.; &;.5 &;./ &;.) &;.# &;"), o('<%;Ǎ.# &;Ǡ/@#;ȿ/7$;~." &"/)$8#:§#"" )(#\'#("\'#&\'#=." 7¦'), o('<%;Ǆ/^#;ȿ/U$;." &"/G$;~." &"/9$;." &"/+$8%:©%$$"! )(%\'#($\'#(#\'#("\'#&\'#=." 7¨'), o('%;Ȧ/1#;ȿ/($8":ª"!!)("\'#&\'#'), o('%;ǘ.) &;ǰ.# &;ǣ/1#;ȿ/($8":«"!!)("\'#&\'#'), o('<%;ț/N#;ȿ/E$;~." &"/7$;." &"/)$8$:­$"# )($\'#(#\'#("\'#&\'#=." 7¬'), o('<%%;ȥ/,#;ȿ/#$+")("\'#&\'#." &"/?#;." &"/1$;/($8#:p#! )(#\'#("\'#&\'#=." 7®'), o('%;Ƃ/1#;ȿ/($8":¯"!!)("\'#&\'#'), o('%;Ȟ/1#;ȿ/($8":°"!!)("\'#&\'#'), o('<%;/2#;/)$8":²""! )("\'#&\'#=." 7±'), o("<%;Ȗ/J#;ȿ/A$;.\" &\"/3$;/*$8$:´$##! )($'#(#'#(\"'#&'#=.\" 7³"), o("<%;/N#;Ż/E$;ȿ/<$;/3$;ȿ/*$8%:¶%#$#!)(%'#($'#(#'#(\"'#&'#=.\" 7µ"), o("<%;Ƽ/D#;ȿ/;$;ȡ/2$;ȿ/)$8$:¸$\"#!)($'#(#'#(\"'#&'#=.\" 7·"), o(";.# &;"), o("<%;ȗ/M#;ȿ/D$;ȥ/;$;ȿ/2$;Ż/)$8%:º%\"$ )(%'#($'#(#'#(\"'#&'#=.\" 7¹"), o('<%;ƹ/I#;ȿ/@$;." &"/2$;Č/)$8$:¼$"# )($\'#(#\'#("\'#&\'#=." 7»'), o('%;ǌ/1#;ȿ/($8":°"!!)("\'#&\'#'), o('%;/2#;§/)$8":½""! )("\'#&\'#'), o('<%;." &"/1#;ȿ/($8":*"!!)("\'#&\'#=." 7¾'), o("%;Ȳ/J#;ȿ/A$;.\" &\"/3$;/*$8$:¿$##! )($'#(#'#(\"'#&'#"), o('%;Ȓ/1#;ȿ/($8":°"!!)("\'#&\'#'), o("%;/B#;ȿ/9$$;0#*;&/)$8#:À#\"\" )(#'#(\"'#&'#"), o("%;Ƣ/:#;/1$;ȿ/($8#:#!!)(#'#(\"'#&'#"), o('<%;Ƈ/2#;/)$8":Â""! )("\'#&\'#=." 7Á'), o("%;ƿ/:#;ȿ/1$;/($8#:Ã#! )(#'#(\"'#&'#"), o("%;Ơ/C#;/:$;ȿ/1$;ơ/($8$: $!\")($'#(#'#(\"'#&'#"), o('%;/2#;¨/)$8":Ä""! )("\'#&\'#'), o(";.; &;.5 &;./ &;.) &;.# &; "), o("<%;ǁ/#;ȿ/$%;Ǖ/,#;ȿ/#$+\")(\"'#&'#.\" &\"/a$;o/X$;ȿ/O$;ƿ/F$;ȿ/=$;/4$;ȿ/+$8):Æ)$(&%!)()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7Å"), o(";Ź.) &;-.# &;?"), o("<%;Ǜ/f#;ȿ/]$%;Ǖ/,#;ȿ/#$+\")(\"'#&'#.\" &\"/<$;/3$;ȿ/*$8%:È%#$\"!)(%'#($'#(#'#(\"'#&'#=.\" 7Ç"), o('<%;Ȭ/@#;ȿ/7$;." &"/)$8#:Ê#"" )(#\'#("\'#&\'#=." 7É'), o('%;Ź/1#;ȿ/($8":Ë"!!)("\'#&\'#'), o('<%;ƽ/@#;ȿ/7$;." &"/)$8#:Í#"" )(#\'#("\'#&\'#=." 7Ì'), o('%;Ż.) &;ƃ.# &;Ź/1#;ȿ/($8":Î"!!)("\'#&\'#'), o('<%;ȕ/I#;ȿ/@$;." &"/2$;ȿ/)$8$:Í$"#!)($\'#(#\'#("\'#&\'#=." 7Ï'), o('%;Ż.) &;ƃ.# &;Ɓ/1#;ȿ/($8":Ð"!!)("\'#&\'#'), o("<%;Ȏ/S#;ȿ/J$;Ɔ/A$;ȿ/8$;¡.\" &\"/*$8%:Ò%#$\" )(%'#($'#(#'#(\"'#&'#=.\" 7Ñ"), o("%;Ơ/C#;¢/:$;ȿ/1$;ơ/($8$:Ó$!\")($'#(#'#(\"'#&'#.D &%;Ƭ/:#;¢/1$;ȿ/($8#:Ó#!!)(#'#(\"'#&'#"), o(";¤.) &;£.# &;¦"), o(";5.) &;/.# &;3"), o('%;¥/<#9:Ô ! -""&!&#/($8":Õ"!!)("\'#&\'#'), o("%$;Ɠ/&#0#*;Ɠ&&&#/' 8!:Ö!! )"), o("%;¥/' 8!:×!! )"), o(";¨./ &;Ý.) &;ò.# &;ù"), o('<%;®/X#;ȿ/O$;©." &"/A$;ȿ/8$;ª." &"/*$8%:Ù%#$" )(%\'#($\'#(#\'#("\'#&\'#=." 7Ø'), o("<%;ȋ/L#;ȿ/C$;ǆ/:$;ȿ/1$;Ø/($8%:Û%! )(%'#($'#(#'#(\"'#&'#=.\" 7Ú"), o("<%;Ȁ/S#;ȿ/J$;o/A$;ȿ/8$;«.\" &\"/*$8%:Ý%#$\" )(%'#($'#(#'#(\"'#&'#=.\" 7Ü"), o('<%;¬/2#;o/)$8":ß""! )("\'#&\'#=." 7Þ'), o(";­.# &;Ƣ"), o('%;Ȉ/1#;ȿ/($8":°"!!)("\'#&\'#'), o("%;°/B#;ȿ/9$$;¯0#*;¯&/)$8#:à#\"\" )(#'#(\"'#&'#"), o("<%;ï/D#;ȿ/;$;°/2$;ȿ/)$8$:â$\"#!)($'#(#'#(\"'#&'#=.\" 7á"), o(";±.# &;×"), o('%;²/U#;¸." &"/G$;¹." &"/9$;º." &"/+$8$:ã$$#"! )($\'#(#\'#("\'#&\'#'), o('<%;ȟ/R#;ȿ/I$;³." &"/;$;ȿ/2$;¶/)$8%:å%"" )(%\'#($\'#(#\'#("\'#&\'#=." 7ä'), o('<;´.# &;µ=." 7æ'), o('%;ǜ/1#;ȿ/($8":ç"!!)("\'#&\'#'), o('%;ƻ/1#;ȿ/($8":è"!!)("\'#&\'#'), o("%;¼/B#;ȿ/9$$;·0#*;·&/)$8#:À#\"\" )(#'#(\"'#&'#"), o("%;Ƣ/:#;¼/1$;ȿ/($8#:-#!!)(#'#(\"'#&'#"), o("<%;ǩ/D#;ȿ/;$;À/2$;ȿ/)$8$:ê$\"#!)($'#(#'#(\"'#&'#=.\" 7é"), o("<%;ȱ/D#;ȿ/;$;o/2$;ȿ/)$8$:ì$\"#!)($'#(#'#(\"'#&'#=.\" 7ë"), o("<%;Ǭ/e#;ȿ/\\$;ǆ/S$;ȿ/J$;q/A$;ȿ/8$;».\" &\"/*$8':î'#&\" )(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7í"), o("<%;ǭ/D#;ȿ/;$;o/2$;ȿ/)$8$:ð$\"#!)($'#(#'#(\"'#&'#=.\" 7ï"), o(";½.# &;¿"), o('%;¾." &"/2#;Û/)$8":ñ""! )("\'#&\'#'), o('%;ƕ/2#;ƣ/)$8":ò""! )("\'#&\'#'), o('%;o/@#;ȿ/7$;Í." &"/)$8#:ó#"" )(#\'#("\'#&\'#'), o("%;Ä/B#;ȿ/9$$;Á0#*;Á&/)$8#:ô#\"\" )(#'#(\"'#&'#"), o('%;Â.# &;Ã/7#;Ô." &"/)$8":õ""! )("\'#&\'#'), o("<%;Ƣ/:#;Ä/1$;ȿ/($8#:÷#!!)(#'#(\"'#&'#=.\" 7ö"), o("<%;Î/D#;ȿ/;$;Ä/2$;ȿ/)$8$:ù$\"#!)($'#(#'#(\"'#&'#=.\" 7ø"), o(";Ë.5 &;?./ &;Å.) &;Æ.# &;Ì"), o("%;ź/S#;ȿ/J$;í/A$;ȿ/8$;Í.\" &\"/*$8%:ú%#$\" )(%'#($'#(#'#(\"'#&'#"), o('<%;Ç/@#;ȿ/7$;È." &"/)$8#:ü#"" )(#\'#("\'#&\'#=." 7û'), o('<%;Ż/@#;ȿ/7$;Í." &"/)$8#:þ#"" )(#\'#("\'#&\'#=." 7ý'), o('<;É.# &;Ê=." 7ÿ'), o("%;ǳ/V#;ȿ/M$;ǆ/D$;ȿ/;$;ƃ/2$;ȿ/)$8&:Ā&\"%!)(&'#(%'#($'#(#'#(\"'#&'#"), o("%;k/;#;ǳ/2$;ȿ/)$8#:ā#\"\"!)(#'#(\"'#&'#"), o("<%;Ơ/R#;À/I$;ȿ/@$;ơ/7$;Í.\" &\"/)$8%:ă%\"# )(%'#($'#(#'#(\"'#&'#=.\" 7Ă"), o('<%;/7#;Í." &"/)$8":ą""! )("\'#&\'#=." 7Ą'), o('<%%;ƿ/Q#%%<;Ɠ.# &;ȶ=.##&&!&\'#/,#;ȿ/#$+")("\'#&\'#/#$+")("\'#&\'#." &"/;#;ƕ/2$;ȿ/)$8#:ć#""!)(#\'#("\'#&\'#=." 7Ć'), o('<%;Ï." &"/J#;ȿ/A$;Ð." &"/3$;Ǽ/*$8$:ĉ$##! )($\'#(#\'#("\'#&\'#=." 7Ĉ'), o('%;Ȃ/1#;ȿ/($8":"!!)("\'#&\'#'), o(";Ñ.# &;Ó"), o('%;Ǿ.) &;Ț.# &;Ǫ/@#;ȿ/7$;Ò." &"/)$8#:Ċ#"" )(#\'#("\'#&\'#'), o('%;Ȍ/1#;ȿ/($8":ċ"!!)("\'#&\'#'), o('%;ǵ.# &;Ǒ/1#;ȿ/($8":ċ"!!)("\'#&\'#'), o('<%;Õ.# &;Ö/1#;ȿ/($8":č"!!)("\'#&\'#=." 7Č'), o('<%;ȉ/;#;ȿ/2$;o/)$8#:ď#"" )(#\'#("\'#&\'#=." 7Ď'), o('<%;ȫ/;#;ȿ/2$;æ/)$8#:đ#"" )(#\'#("\'#&\'#=." 7Đ'), o('<%;ȭ/;#;ȿ/2$;ë/)$8#:ē#"" )(#\'#("\'#&\'#=." 7Ē'), o("%;Ú/B#;ȿ/9$$;Ù0#*;Ù&/)$8#:Ĕ#\"\" )(#'#(\"'#&'#"), o("%;Ƣ/:#;Ú/1$;ȿ/($8#:ĕ#!!)(#'#(\"'#&'#"), o('<%;o/@#;ȿ/7$;į." &"/)$8#:ė#"" )(#\'#("\'#&\'#=." 7Ė'), o('<;Ƥ=." 7Ę'), o('<;Ș.5 &;ț./ &;Ʒ.) &;Ǧ.# &;ǯ=." 7ę'), o('<%;Þ/;#;ȿ/2$;â/)$8#:ě#"" )(#\'#("\'#&\'#=." 7Ě'), o(";ß.# &;à"), o('<%;Ƕ/@#;ȿ/7$;á." &"/)$8#:ĝ#"" )(#\'#("\'#&\'#=." 7Ĝ'), o('<%;Ș/1#;ȿ/($8":ğ"!!)("\'#&\'#=." 7Ğ'), o('<%;Ȋ/;#;ȿ/2$;Ü/)$8#:ġ#"" )(#\'#("\'#&\'#=." 7Ġ'), o('%;ã/2#;å/)$8":Ģ""! )("\'#&\'#'), o('<%;ä/2#;Ƈ/)$8":Ĥ""! )("\'#&\'#=." 7ģ'), o('<%;ǹ/,#;ȿ/#$+")("\'#&\'#=." 7ĥ'), o('<%;é.) &;.# &;î/1#;ȿ/($8":Ħ"!!)("\'#&\'#=." 7Ē'), o("<%;Ơ/T#;è/K$;ȿ/B$$;ç0#*;ç&/2$;ơ/)$8%:Ĩ%\"#!)(%'#($'#(#'#(\"'#&'#=.\" 7ħ"), o("%;Ƣ/:#;è/1$;ȿ/($8#:ĩ#!!)(#'#(\"'#&'#"), o("<%;Ÿ/' 8!:ī!! )=.\" 7Ī"), o('<%;ê/2#;ë/)$8":Ĭ""! )("\'#&\'#=." 7Ē'), o('<%;ȭ/1#;ȿ/($8":°"!!)("\'#&\'#=." 7ĭ'), o("%;í/B#;ȿ/9$$;ì0#*;ì&/)$8#:Į#\"\" )(#'#(\"'#&'#"), o("%;Ƣ/:#;í/1$;ȿ/($8#:#!!)(#'#(\"'#&'#"), o("<%;Ơ/C#;q/:$;ȿ/1$;ơ/($8$:İ$!\")($'#(#'#(\"'#&'#=.\" 7į"), o('<%;ǖ/;#;ȿ/2$;ȭ/)$8#:Ĳ#"" )(#\'#("\'#&\'#=." 7ı'), o("<%;ð.) &;Ǹ.# &;Ǣ/' 8!:°!! )=.\" 7ĳ"), o('<%;Ȩ/@#;ȿ/7$;ñ." &"/)$8#:ĵ#"" )(#\'#("\'#&\'#=." 7Ĵ'), o('%;ƻ/1#;ȿ/($8":Ķ"!!)("\'#&\'#'), o("<%;ó/#;ô.\" &\"/|$;Æ/s$;ȿ/j$;õ/a$;¹.\" &\"/S$;©.\" &\"/E$;ȿ/<$;ª.\" &\"/.$8):ĸ)'('&$#\" )()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7ķ"), o('<%;Ȫ/1#;ȿ/($8":°"!!)("\'#&\'#=." 7Ĺ'), o("<%;Ȋ/C#;ȿ/:$;Ü/1$;ȿ/($8$:Ļ$!!)($'#(#'#(\"'#&'#=.\" 7ĺ"), o("<%;Ƞ/C#;ȿ/:$;ö/1$;ȿ/($8$:Ľ$!!)($'#(#'#(\"'#&'#=.\" 7ļ"), o('%;ø/9#$;÷0#*;÷&/)$8":Į""! )("\'#&\'#'), o("%;ȿ/:#;Ƣ/1$;ø/($8#:ĩ#! )(#'#(\"'#&'#"), o("<%;Ž/M#;ȿ/D$;Ƭ/;$;o/2$;ȿ/)$8%:Ŀ%\"$!)(%'#($'#(#'#(\"'#&'#=.\" 7ľ"), o('<%;ú/h#;Æ/_$;ȿ/V$;¹." &"/H$;©." &"/:$;ª." &"/,$8&:Ł&%%$"! )(&\'#(%\'#($\'#(#\'#("\'#&\'#=." 7ŀ'), o("<%;Ǚ/C#;ȿ/:$;ǩ/1$;ȿ/($8$:°$!#)($'#(#'#(\"'#&'#=.\" 7ł"), o('<;ý.5 &;þ./ &;ÿ.) &;Ā.# &;ā=." 7Ń'), o('%;ǐ/1#;ȿ/($8":°"!!)("\'#&\'#'), o("%%<%;ü/>#;ǲ./ &;ȧ.) &;Ȯ.# &;ȯ/#$+\")(\"'#&'#=.##&&!&'#/1#;Ă/($8\":ĩ\"! )(\"'#&'#"), o("%%<%;ü/>#;ȡ./ &;ȧ.) &;Ȯ.# &;ȯ/#$+\")(\"'#&'#=.##&&!&'#/1#;Ń/($8\":ĩ\"! )(\"'#&'#"), o("%%<%;ü/>#;ȡ./ &;ǲ.) &;Ȯ.# &;ȯ/#$+\")(\"'#&'#=.##&&!&'#/1#;Ň/($8\":ĩ\"! )(\"'#&'#"), o("%%<%;ü/>#;ȡ./ &;ǲ.) &;ȧ.# &;ȯ/#$+\")(\"'#&'#=.##&&!&'#/1#;Ŗ/($8\":ĩ\"! )(\"'#&'#"), o("%%<%;ü/>#;ȡ./ &;ǲ.) &;ȧ.# &;Ȯ/#$+\")(\"'#&'#=.##&&!&'#/1#;Ś/($8\":ĩ\"! )(\"'#&'#"), o("<%;ă/T#;ą.\" &\"/F$;Ż/=$;ȿ/4$;Ć/+$8%:Ņ%$$#\" )(%'#($'#(#'#(\"'#&'#=.\" 7ń"), o("%;ü/J#;Ą.\" &\"/<$;ȡ/3$;ȿ/*$8$:ņ$##\"!)($'#(#'#(\"'#&'#"), o('%;ȣ.# &;Ȣ/1#;ȿ/($8":Ň"!!)("\'#&\'#'), o("<%;Ǯ/N#;ȿ/E$;k/<$;Ǥ/3$;ȿ/*$8%:ŉ%#$\"!)(%'#($'#(#'#(\"'#&'#=.\" 7ň"), o(";ć.# &;ł"), o("<%;Ơ/Z#;ĉ/Q$$;ċ0#*;ċ&/A$;ơ/8$;Ĉ.\" &\"/*$8%:ŋ%##\" )(%'#($'#(#'#(\"'#&'#=.\" 7Ŋ"), o("%;ȳ/D#;ȿ/;$;ȝ/2$;ȿ/)$8$:Ō$\"#!)($'#(#'#(\"'#&'#"), o("%;Č/B#;ȿ/9$$;Ċ0#*;Ċ&/)$8#:Į#\"\" )(#'#(\"'#&'#"), o("%;Ƣ/:#;Č/1$;ȿ/($8#:ª#!!)(#'#(\"'#&'#"), o('%;Ƣ." &"/1#;Ġ/($8":ō"! )("\'#&\'#'), o('<%;č/O#;ȿ/F$;Ď." &"/8$;ď." &"/*$8$:ŏ$##! )($\'#(#\'#("\'#&\'#=." 7Ŏ'), o("%;ƕ/=#%<;ȿ=/##&'!&&#/($8\":p\"!!)(\"'#&'#.\\ &%%<;Ď.) &;đ.# &;Ġ=.##&&!&'#/:#;ȿ/1$;Ƙ/($8#:p#! )(#'#(\"'#&'#"), o('<%;&/1#;ȿ/($8":ő"!!)("\'#&\'#=." 7Ő'), o("%;đ/B#$;Đ0#*;Đ&/2$;ȿ/)$8#:Į#\"\"!)(#'#(\"'#&'#"), o('%;ȿ/1#;đ/($8":ĩ"! )("\'#&\'#'), o('<%;Ē." &"/A#;Ĕ/8$;Ē." &"/*$8#:œ##"! )(#\'#("\'#&\'#=." 7Œ'), o("%$;ē/&#0#*;ē&&&#/' 8!:Ŕ!! )"), o("<%;Ǐ/C#;ȿ/:$;ƕ/1$;ȿ/($8$:Ŗ$!!)($'#(#'#(\"'#&'#=.\" 7ŕ"), o(";Ė.; &;ę.5 &;Ĝ./ &;ĝ.) &;ğ.# &;ĕ"), o("<%;ĵ/' 8!:Ř!! )=.\" 7ŗ"), o('<%;ė/U#;į." &"/G$;İ." &"/9$;Ę." &"/+$8$:Ś$$#"! )($\'#(#\'#("\'#&\'#=." 7ř'), o("<%;ȏ.# &;Ȏ/D#;ȿ/;$;ǽ/2$;ȿ/)$8$:Ŝ$\"#!)($'#(#'#(\"'#&'#=.\" 7ś"), o('<%;ǂ/1#;ȿ/($8":Ş"!!)("\'#&\'#=." 7ŝ'), o('%;Ě/@#;İ." &"/2$;ȿ/)$8#:ş#""!)(#\'#("\'#&\'#'), o('<%;ě.# &;ȩ/1#;ȿ/($8":ċ"!!)("\'#&\'#=." 7Š'), o('<%;k." &"/2#;Ȇ/)$8":Ţ""! )("\'#&\'#=." 7š'), o('<;Ĳ=." 7ţ'), o("<%;ǖ/D#;ȿ/;$;Ğ/2$;ȿ/)$8$:ť$\"#!)($'#(#'#(\"'#&'#=.\" 7Ť"), o(";L./ &;5.) &;,.# &;3"), o("<%;ĭ/' 8!:ŧ!! )=.\" 7Ŧ"), o('<%;Ē." &"/J#;ġ/A$;ȿ/8$;Ē." &"/*$8$:ũ$##" )($\'#(#\'#("\'#&\'#=." 7Ũ'), o(";ĳ.) &;ģ.# &;Ģ"), o("<%;Ĳ/' 8!:ū!! )=.\" 7Ū"), o("<%;Ĥ/J#;ȿ/A$;ĩ/8$;İ.\" &\"/*$8$:ŭ$##! )($'#(#'#(\"'#&'#=.\" 7Ŭ"), o('%;ĥ.# &;Ħ/1#;ȿ/($8":Ů"!!)("\'#&\'#'), o('<%;ȏ/;#;ȿ/2$;ǽ/)$8#:ů#"" )(#\'#("\'#&\'#=." 7ś'), o("<%;ȩ/' 8!:ű!! )=.\" 7Ű"), o("%;Ơ/T#;ī/K$;ȿ/B$$;Ī0#*;Ī&/2$;ơ/)$8%:Ų%\"#!)(%'#($'#(#'#(\"'#&'#"), o("%;ħ/' 8!:ų!! )"), o("%;ħ/' 8!:Ŵ!! )"), o("%;Ƣ/:#;ī/1$;ȿ/($8#:ĩ#!!)(#'#(\"'#&'#"), o('<%;Ĭ/O#;ȿ/F$;į." &"/8$;Ę." &"/*$8$:Ŷ$##! )($\'#(#\'#("\'#&\'#=." 7ŵ'), o("%;è/\\#%<%;ȿ/8#;Ƴ.) &;ơ.# &;į/#$+\")(\"'#&'#=/##&'!&&#/($8\":p\"!!)(\"'#&'#.# &;o"), o("<%$;Į/&#0#*;Į&&&#/' 8!:Ÿ!! )=.\" 7ŷ"), o("%;ǋ/C#;ȿ/:$;Ɓ/1$;ȿ/($8$:p$!!)($'#(#'#(\"'#&'#"), o('<%;ǀ.# &;ǚ/1#;ȿ/($8":ź"!!)("\'#&\'#=." 7Ź'), o("%;ı/;#;Ü/2$;ȿ/)$8#:Ż#\"\"!)(#'#(\"'#&'#"), o("<%;ȉ/D#;ȿ/;$;ǎ/2$;ȿ/)$8$:Ž$\"#!)($'#(#'#(\"'#&'#=.\" 7ż"), o("%;Ǌ/;#;ȿ/2$;L/)$8#:ž#\"\" )(#'#(\"'#&'#"), o("<%;Ĵ/E#;æ/<$;ĵ/3$;ȿ/*$8$:ƀ$##\"!)($'#(#'#(\"'#&'#=.\" 7ſ"), o("<%;Ǩ/D#;ȿ/;$;ǽ/2$;ȿ/)$8$:Ƃ$\"#!)($'#(#'#(\"'#&'#=.\" 7Ɓ"), o('%;Ķ/F#;ķ." &"/8$;ŀ." &"/*$8#:ƃ##"! )(#\'#("\'#&\'#'), o("<%;ȓ/D#;ȿ/;$;Ƈ/2$;ȿ/)$8$:ƅ$\"#!)($'#(#'#(\"'#&'#=.\" 7Ƅ"), o("%;Ĺ/B#;ȿ/9$$;ĸ0#*;ĸ&/)$8#:Ɔ#\"\" )(#'#(\"'#&'#"), o('%;Ĺ/1#;ȿ/($8":Ķ"!!)("\'#&\'#'), o('<;ĺ.# &;Ŀ=." 7Ƈ'), o("%;ȉ/T#;ȿ/K$;Ǚ.# &;Ȫ/<$;ȿ/3$;Ļ/*$8%:ƈ%#$\" )(%'#($'#(#'#(\"'#&'#"), o('<;ļ.) &;Ľ.# &;ľ=." 7Ɖ'), o("%;Ƞ/J#;ȿ/A$;Ȇ.# &;ǖ/2$;ȿ/)$8$:Ɗ$\"#!)($'#(#'#(\"'#&'#"), o('%;Ǉ.# &;ș/1#;ȿ/($8":Ƌ"!!)("\'#&\'#'), o("%;ȃ/D#;ȿ/;$;Ƹ/2$;ȿ/)$8$:ƌ$\"#!)($'#(#'#(\"'#&'#"), o("%;ȁ/D#;ȿ/;$;ƕ/2$;ȿ/)$8$:ƍ$\"#!)($'#(#'#(\"'#&'#"), o('<%;k." &"/J#;Ǘ/A$;ȿ/8$;Ł." &"/*$8$:Ə$##" )($\'#(#\'#("\'#&\'#=." 7Ǝ'), o("%;Ǵ/J#;ȿ/A$;ǘ.# &;ǰ/2$;ȿ/)$8$:Ɛ$\"#!)($'#(#'#(\"'#&'#"), o("%;ř/' 8!:Ƒ!! )"), o("<%;ń/c#;ą.\" &\"/U$;ƃ/L$;ȿ/C$;ņ/:$;¹.\" &\"/,$8&:Ɠ&%%$#! )(&'#(%'#($'#(#'#(\"'#&'#=.\" 7ƒ"), o("%;ü/J#;Ņ.\" &\"/<$;ǲ/3$;ȿ/*$8$:Ɣ$##\"!)($'#(#'#(\"'#&'#"), o('%;ȩ/1#;ȿ/($8":ƕ"!!)("\'#&\'#'), o("<%;ȉ/N#;ȿ/E$;Ż/<$;ȿ/3$;Ĩ/*$8%:Ɨ%#$\" )(%'#($'#(#'#(\"'#&'#=.\" 7Ɩ"), o("<%;ň/¦#;ą.\" &\"/$;Ƅ.\" &\"/$;ȿ/$;ŉ/x$;ȉ/o$;ȿ/f$;Ż/]$;ȿ/T$;ő.\" &\"/F$;Œ.\" &\"/8$;œ//$8,:ƙ,(+*)'$\"! )(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7Ƙ"), o("%;ü/J#;Ą.\" &\"/<$;ȧ/3$;ȿ/*$8$:ƚ$##\"!)($'#(#'#(\"'#&'#"), o('<%;Ŋ." &"/2#;Ō/)$8":Ɯ""! )("\'#&\'#=." 7ƛ'), o('%;ǃ.) &;ƺ.# &;ŋ/1#;ȿ/($8":Ɲ"!!)("\'#&\'#'), o("%;Ƿ/;#;ȿ/2$;ȇ/)$8#:ƞ#\"\" )(#'#(\"'#&'#"), o('<;ō.# &;Ŏ=." 7Ɵ'), o('%;Ǚ.# &;Ƕ/1#;ȿ/($8":Ơ"!!)("\'#&\'#'), o('%;Ȫ/@#;ȿ/7$;ŏ." &"/)$8#:ơ#"" )(#\'#("\'#&\'#'), o("%;ȇ/;#;ȿ/2$;Ő/)$8#:Ƣ#\"\" )(#'#(\"'#&'#"), o("%;è/B#;ȿ/9$$;ç0#*;ç&/)$8#:Į#\"\" )(#'#(\"'#&'#"), o("%;ǧ/c#;ȿ/Z$;Ǟ/Q$;ȿ/H$;Ȝ.) &3ƣ\"\"5)7Ƥ/3$;ȿ/*$8&:ƥ&#%#!)(&'#(%'#($'#(#'#(\"'#&'#"), o("<%;Ȱ/D#;ȿ/;$;o/2$;ȿ/)$8$:Ʀ$\"#!)($'#(#'#(\"'#&'#=.\" 7"), o("<%;Ǆ/W#;ȿ/N$;Ŕ/E$;ȿ/<$;Ǡ/3$;ȿ/*$8&:ƨ&#%#!)(&'#(%'#($'#(#'#(\"'#&'#=.\" 7Ƨ"), o("%$;ŕ/&#0#*;ŕ&&&#/' 8!:Ʃ!! )"), o("%;/:#;ȿ/1$;$/($8#:\"#!\")(#'#(\"'#&'#"), o("<%;Ř/T#;ą.\" &\"/F$;ŗ/=$;ȿ/4$;ř/+$8%:ƫ%$$#\" )(%'#($'#(#'#(\"'#&'#=.\" 7ƪ"), o("%;ƅ/;#;ȿ/2$;æ/)$8#:Ƭ#\"\" )(#'#(\"'#&'#.# &;ƅ"), o("%;ü/J#;Ą.\" &\"/<$;Ȯ/3$;ȿ/*$8$:ƭ$##\"!)($'#(#'#(\"'#&'#"), o("%;ƿ/D#;ȿ/;$;¨/2$;ȿ/)$8$:Ĭ$\"#!)($'#(#'#(\"'#&'#"), o("<%;ś/f#;ą.\" &\"/X$;Ż/O$;ȿ/F$;ȫ/=$;ȿ/4$;Ŝ/+$8':Ư'$&%$ )(''#(&'#(%'#($'#(#'#(\"'#&'#=.\" 7Ʈ"), o("%;ü/N#;ȯ/E$;ȿ/<$;ȡ/3$;ȿ/*$8%:ư%#$#!)(%'#($'#(#'#(\"'#&'#"), o('%;Ɨ/@#;ȿ/7$;ŝ." &"/)$8#:Ʊ#"" )(#\'#("\'#&\'#'), o("<%;Ơ/Z#;ȿ/Q$;Ş.\" &\"/C$;ȿ/:$;ơ/1$;ȿ/($8&:Ƴ&!#)(&'#(%'#($'#(#'#(\"'#&'#=.\" 7Ʋ"), o('%;Š/9#$;ş0#*;ş&/)$8":ƴ""! )("\'#&\'#'), o("%;ȿ/H#;Ƣ/?$;ȿ/6$;Š.\" &\"/($8$:Ƶ$! )($'#(#'#(\"'#&'#"), o("%%<%;ƕ/;#;ȿ/2$;&.# &;đ/#$+#)(#'#(\"'#&'#=.##&&!&'#/:#;o/1$;ȿ/($8#:İ#!!)(#'#(\"'#&'#.x &%;š/n#%%<;Ɠ=.##&&!&'#/,#;ȿ/#$+\")(\"'#&'#/F$;Ď.\" &\"/8$;ď.\" &\"/*$8$:ŏ$##! )($'#(#'#(\"'#&'#"), o(";ƕ.# &;Ƙ"), o('<%;ţ/;#;Ż/2$;ȿ/)$8#:Ʒ#""!)(#\'#("\'#&\'#=." 7ƶ'), o("<%;ǝ/J#;ȿ/A$;Ť/8$;ť.\" &\"/*$8$:ƹ$##! )($'#(#'#(\"'#&'#=.\" 7Ƹ"), o('<%;ȡ./ &;ǲ.) &;ȧ.# &;Ȯ/1#;ȿ/($8":ċ"!!)("\'#&\'#=." 7ƺ'), o("<%;Ǯ/D#;ȿ/;$;Ǥ/2$;ȿ/)$8$:Ƽ$\"#!)($'#(#'#(\"'#&'#=.\" 7ƻ"), o('<%;Ʈ/,#;Ʈ/#$+")("\'#&\'#=." 7ƽ'), o('<;ƪ=." 7ƾ'), o('<;ƫ=." 7ƿ'), o('<;Ƥ=." 7ǀ'), o('<;Ƶ=." 7ǁ'), o('<;Ư=." 7ǂ'), o('<%;ư/,#;ư/#$+")("\'#&\'#=." 7ǃ'), o('<%;Ʊ/,#;Ʊ/#$+")("\'#&\'#=." 7Ǆ'), o('<;ƭ=." 7ǅ'), o('<;Ʈ=." 7ǆ'), o('<;ư=." 7Ǉ'), o('<;Ʊ=." 7ǈ'), o('<%;ư/,#;Ƭ/#$+")("\'#&\'#=." 7ǉ'), o('<%;Ʊ/,#;Ƭ/#$+")("\'#&\'#=." 7Ǌ'), o('<%;Ƭ/1#;Ƭ." &"/#$+")("\'#&\'#=." 7ǋ'), o('<%;Ʋ/,#;Ƭ/#$+")("\'#&\'#=." 7ǌ'), o('<%;ư/,#;Ʊ/#$+")("\'#&\'#=." 7ǌ'), o('<%;Ǻ/@#;ȿ/7$;k." &"/)$8#:ǎ#"" )(#\'#("\'#&\'#=." 7Ǎ'), o('<;ƕ.# &;Ƙ=." 7Ǐ'), o("<%;Ÿ/' 8!:Ǒ!! )=.\" 7ǐ"), o('<%;ż." &"/2#;Ÿ/)$8":Ǔ""! )("\'#&\'#=." 7ǒ'), o('<%;ż." &"/2#;Ÿ/)$8":Ǖ""! )("\'#&\'#=." 7ǔ'), o('%;Ÿ/2#;ƣ/)$8":ǖ""! )("\'#&\'#'), o('<%;ſ.) &;ƀ.# &;ž/2#;Ÿ/)$8":ǘ""! )("\'#&\'#=." 7Ǘ'), o("%;ȿ/& 8!:Ǚ! )"), o('%;ż/2#;ƀ/)$8":ǚ""! )("\'#&\'#'), o('%;Ÿ/2#;ƣ/)$8":D""! )("\'#&\'#'), o("<%;Ÿ/' 8!:ǜ!! )=.\" 7Ǜ"), o("<%;Ÿ/' 8!:Ǟ!! )=.\" 7ǝ"), o('<%;ż." &"/2#;Ÿ/)$8":Ǡ""! )("\'#&\'#=." 7ǟ'), o('<%;ż." &"/2#;Ÿ/)$8":Ǣ""! )("\'#&\'#=." 7ǡ'), o('<%;ż." &"/2#;Ÿ/)$8":Ǥ""! )("\'#&\'#=." 7ǣ'), o('<%;ż." &"/2#;Ÿ/)$8":Ǧ""! )("\'#&\'#=." 7ǥ'), o('<%;ƈ.# &;Ż/1#;ȿ/($8":Ǩ"!!)("\'#&\'#=." 7ǧ'), o("%;Ż/;#;ȿ/2$;æ/)$8#:ǩ#\"\" )(#'#(\"'#&'#"), o("<%;Ÿ/' 8!:ǫ!! )=.\" 7Ǫ"), o("<%;Ÿ/' 8!:ǭ!! )=.\" 7Ǭ"), o('<%;ƌ/=#%<;Ɠ=.##&&!&\'#/($8":ǯ"!!)("\'#&\'#.Å &%;ƍ/=#%<;Ɠ=.##&&!&\'#/($8":ǰ"!!)("\'#&\'#. &%;Ə/=#%<;Ɠ=.##&&!&\'#/($8":Ǳ"!!)("\'#&\'#.q &%;Ɛ/=#%<;Ɠ=.##&&!&\'#/($8":ǲ"!!)("\'#&\'#.G &%;ƒ/=#%<;Ɠ=.##&&!&\'#/($8":ǳ"!!)("\'#&\'#=." 7Ǯ'), o('<%%3ǵ""5!7Ƕ." &"/F#3Ƿ""5#7Ǹ." &"/2$3ǹ""5$7Ǻ/#$+#)(#\'#("\'#&\'#.k &%3ǻ""5$7Ǽ.5 &3ǽ""5&7Ǿ.) &3ǿ""5$7Ȁ." &"/2#3ȁ""5$7Ȃ/#$+")("\'#&\'#.) &3ȃ""5$7Ȅ/\' 8!:ċ!! )=." 7Ǵ'), o('<%;Ǝ.5 &3Ȇ""5%7ȇ.) &3Ȉ""5$7ȉ/\' 8!:ċ!! )=." 7ȅ'), o('<%3ȋ""5&7Ȍ/i#%$4(""5!7)/,#0)*4(""5!7)&&&#/2#3ȍ""5)7Ȏ/#$+")("\'#&\'#." &"/)$8":ȏ""! )("\'#&\'#=." 7Ȋ'), o('<%3ȑ""5\'7Ȓ. &3ȓ""5\'7Ȕ. &3ȕ""5\'7Ȗ.} &%3ȗ""5$7Ș/7#3ș""5$7Ț." &"/#$+")("\'#&\'#.S &%3ș""5$7Ț/7#3ț""5%7Ȝ." &"/#$+")("\'#&\'#.) &3ȝ""5&7Ȟ/\' 8!:ċ!! )=." 7Ȑ'), o('<%%3Ƞ""5#7ȡ/V#2Ȣ""6Ȣ7ȣ.A &2Ȥ""6Ȥ7ȥ.5 &2Ȧ""6Ȧ7ȧ.) &3Ȩ""5$7ȩ/#$+")("\'#&\'#.q &%3Ȫ""5#7ȫ.A &3ǽ""5&7Ǿ.5 &3Ȭ""5%7ȭ.) &3ǻ""5$7Ǽ." &"/2#3Ƞ""5#7ȡ/#$+")("\'#&\'#.# &;Ƒ/\' 8!:ċ!! )=." 7ȟ'), o('%3Ȯ""5(7ȯ/d#%$4(""5!7)/,#0)*4(""5!7)&&&#/2#3Ȱ""5%7ȱ/#$+")("\'#&\'#/)$8":Ȳ""! )("\'#&\'#'), o('<%3ȴ""5$7ȵ/\' 8!:ċ!! )=." 7ȳ'), o('4ȶ""5!7ȷ'), o('%2ȸ""6ȸ7ȹ/K#$4Ⱥ""5!7Ȼ/,#0)*4Ⱥ""5!7Ȼ&&&#/)$8":ȼ""! )("\'#&\'#'), o(";Ɩ.# &;Ɨ"), o(";ƙ./ &;Ɲ.) &;ƛ.# &;Ɯ"), o("%%<;ȴ.# &;>=.##&&!&'#/J#$;Ɣ.# &;Ɠ/,#0)*;Ɣ.# &;Ɠ&&&#/($8\":Ö\"! )(\"'#&'#"), o("%%<;ȶ.# &;>=.##&&!&'#/J#$;Ɣ.# &;Ɠ/,#0)*;Ɣ.# &;Ɠ&&&#/($8\":Ƚ\"! )(\"'#&'#"), o("%;ƞ/#;ȿ/$%$%%<;ƚ=.##&&!&'#/1#1\"\"5!7Ⱦ/#$+\")(\"'#&'#0G*%%<;ƚ=.##&&!&'#/1#1\"\"5!7Ⱦ/#$+\")(\"'#&'#&/\"!&,)/1$;ƚ/($8$:ȿ$!!)($'#(#'#(\"'#&'#"), o('%$4ɀ""5!7Ɂ0)*4ɀ""5!7Ɂ&/5#;Ɵ/,$;ȿ/#$+#)(#\'#("\'#&\'#'), o('%2ɂ""6ɂ7Ƀ/k#$2Ʉ""6Ʉ7Ʌ.) &4Ɇ""5!7ɇ05*2Ʉ""6Ʉ7Ʌ.) &4Ɇ""5!7ɇ&/7$2ɂ""6ɂ7Ƀ/($8#:Ɉ#!!)(#\'#("\'#&\'#'), o('%2ɉ""6ɉ7Ɋ/k#$26""6677.) &48""5!7905*26""6677.) &48""5!79&/7$2ɉ""6ɉ7Ɋ/($8#:ɋ#!!)(#\'#("\'#&\'#'), o('%2Ɍ""6Ɍ7ɍ/k#$2Ɏ""6Ɏ7ɏ.) &4ɐ""5!7ɑ05*2Ɏ""6Ɏ7ɏ.) &4ɐ""5!7ɑ&/7$2Ɍ""6Ɍ7ɍ/($8#:ɒ#!!)(#\'#("\'#&\'#'), o('<%2ɔ""6ɔ7ɕ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɓ'), o('<%2ɗ""6ɗ7ɘ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɖ'), o('<%2ɚ""6ɚ7ɛ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ə'), o('<%2ɝ""6ɝ7ɞ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɜ'), o('<%2ɠ""6ɠ7ɡ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɟ'), o('<%2ɣ""6ɣ7ɤ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɢ'), o('<%2ɦ""6ɦ7ɧ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɥ'), o('<%2ɩ""6ɩ7ɪ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɨ'), o('<%2ɉ""6ɉ7Ɋ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɫ'), o('<%2ɂ""6ɂ7Ƀ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɬ'), o('<%2Ɍ""6Ɍ7ɍ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɭ'), o('<%2ɯ""6ɯ7ɰ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɮ'), o('<%2ɲ""6ɲ7ɳ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɱ'), o('<%2ɵ""6ɵ7ɶ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɴ'), o('<%2ɷ""6ɷ7ɸ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ǋ'), o('<%2ɺ""6ɺ7ɻ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɹ'), o('<%2ɽ""6ɽ7ɾ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ɼ'), o('<%2ɿ""6ɿ7ʀ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ǂ'), o('<%2ʁ""6ʁ7ʂ/1#;ȿ/($8":""!!)("\'#&\'#=." 7Ǉ'), o('<%2ʃ""6ʃ7ʄ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ǈ'), o('<%2ʆ""6ʆ7ʇ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ʅ'), o('<%2ʉ""6ʉ7ʊ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ʈ'), o('<%2a""6a7b/1#;ȿ/($8":""!!)("\'#&\'#=." 7ʋ'), o('<%2ʍ""6ʍ7ʎ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ʌ'), o('<%2ʐ""6ʐ7ʑ/1#;ȿ/($8":""!!)("\'#&\'#=." 7ʏ'), o('%3ʒ""5%7ʓ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʔ""5&7ʕ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʖ""5#7ʗ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʘ""5%7ʙ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʚ""5#7ʛ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʜ""5%7ʝ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3ʞ\"\"5'7ʟ/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3ʠ""5#7ʡ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʢ""5"7ʣ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʤ""5#7ʥ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʦ""5&7ʧ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʨ""5-7ʩ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʪ""5&7ʫ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʬ""5%7ʭ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3ʮ\"\"5'7ʯ/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3ʰ""5"7ʱ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3ʲ\"\"5'7ʳ/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3ʴ""5$7ʵ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʶ""5$7ʷ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʸ""5%7ʹ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3ʺ\"\"5'7ʻ/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3ʼ""5&7ʽ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʾ""5&7ʿ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˀ""5(7ˁ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˂""5*7˃/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˄""5&7˅/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˆ""5%7ˇ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˈ""5,7ˉ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˊ""5,7ˋ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˌ""517ˍ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˎ""5(7ˏ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3ː\"\"5'7ˑ/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3˒""5*7˓/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˔""5(7˕/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˖""5&7˗/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˘""5$7˙/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˚""5&7˛/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˜""5(7˝/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˞""5$7˟/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˠ""5$7ˡ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˢ""5$7ˣ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˤ""5#7˥/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˦""5&7˧/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˨""5&7˩/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˪""5)7˫/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ˬ""5&7˭/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3ˮ\"\"5'7˯/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3˰""5$7˱/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˲""5#7˳/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3˴\"\"5'7˵/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3˶""5$7˷/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˸""5$7˹/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˺""5$7˻/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˼""5%7˽/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3˾""5&7˿/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̀""5"7́/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̂""5&7̃/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̄""5)7̅/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̆""5"7̇/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̈""5%7̉/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3̊\"\"5'7̋/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3̌""5)7̍/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̎""5%7̏/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̐""5&7̑/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3̒\"\"5'7̓/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3̔""5)7̕/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̖""5$7̗/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̘""5"7̙/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̚""5&7̛/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̜""5$7̝/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̞""5#7̟/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̠""5$7̡/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̢""5$7̣/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̤""5%7̥/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̦""5%7̧/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3̨\"\"5'7̩/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3̪""5"7̫/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̬""5#7̭/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3̮\"\"5'7̯/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3y""5$7z/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̰""5"7̱/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̲""5&7̳/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̴""5"7̵/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̶""5"7̷/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̸""5%7̹/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̺""5%7̻/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̼""5$7̽/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̾""5&7̿/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3̀\"\"5'7́/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3͂""5%7̓/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3̈́""5%7ͅ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͆""5)7͇/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͈""5*7͉/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͊""5&7͋/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3͌\"\"5'7͍/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o("%3͎\"\"5'7͏/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3͐""5&7͑/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3͒\"\"5'7͓/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3͔""5(7͕/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͖""5%7͗/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͘""5(7͙/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͚""5#7͛/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͜""5%7͝/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͞""5)7͟/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͠""5&7͡/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͢""5#7ͣ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͤ""5%7ͥ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͦ""5$7ͧ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͨ""5)7ͩ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͪ""5$7ͫ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͬ""5"7ͭ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͮ""5+7ͯ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3Ͱ\"\"5'7ͱ/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3Ͳ""5%7ͳ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ʹ""5&7͵/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3Ͷ""5&7ͷ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3͸""5%7͹/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͺ""5&7ͻ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3ͼ""5&7ͽ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3;""5$7Ϳ/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3΀\"\"5'7΁/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o('%3΂""5$7΃/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3΄""5%7΅/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o('%3Ά""5$7·/8#%<;Ɠ=.##&&!&\'#/#$+")("\'#&\'#'), o("%3Έ\"\"5'7Ή/8#%<;Ɠ=.##&&!&'#/#$+\")(\"'#&'#"), o("%;ȵ/' 8!:Ί!! )"), o(";Ʒ.˹ &;Ƹ.˳ &;ƹ.˭ &;ƺ.˧ &;ƻ.ˡ &;Ƽ.˛ &;ƽ.˕ &;ƾ.ˏ &;ƿ.ˉ &;ǀ.˃ &;ǁ.ʽ &;ǂ.ʷ &;ǃ.ʱ &;Ǆ.ʫ &;ǅ.ʥ &;ǆ.ʟ &;Ǉ.ʙ &;ǈ.ʓ &;ǉ.ʍ &;Ǌ.ʇ &;ǋ.ʁ &;ǌ.ɻ &;Ǎ.ɵ &;ǎ.ɯ &;Ǐ.ɩ &;ǐ.ɣ &;Ǒ.ɝ &;ǒ.ɗ &;Ǔ.ɑ &;ǔ.ɋ &;Ǖ.Ʌ &;ǖ.ȿ &;Ǘ.ȹ &;ǘ.ȳ &;Ǚ.ȭ &;ǚ.ȧ &;Ǜ.ȡ &;ǜ.ț &;ǝ.ȕ &;Ǟ.ȏ &;ǟ.ȉ &;Ǡ.ȃ &;ǡ.ǽ &;Ǣ.Ƿ &;ǣ.Ǳ &;Ǥ.ǫ &;ǥ.ǥ &;Ǧ.ǟ &;ǧ.Ǚ &;Ǩ.Ǔ &;ǩ.Ǎ &;Ǫ.Ǉ &;ǫ.ǁ &;Ǭ.ƻ &;ǭ.Ƶ &;Ǯ.Ư &;ǯ.Ʃ &;ǰ.ƣ &;Ǳ.Ɲ &;ǲ.Ɨ &;ǳ.Ƒ &;Ǵ.Ƌ &;ǵ.ƅ &;Ƕ.ſ &;Ƿ.Ź &;Ǹ.ų &;ǹ.ŭ &;Ǻ.ŧ &;ǻ.š &;Ǽ.ś &;ǽ.ŕ &;Ǿ.ŏ &;ǿ.ŉ &;Ȁ.Ń &;ȁ.Ľ &;Ȃ.ķ &;ȃ.ı &;Ȅ.ī &;ȅ.ĥ &;Ȇ.ğ &;ȇ.ę &;Ȉ.ē &;ȉ.č &;Ȋ.ć &;ȋ.ā &;Ȍ.û &;ȍ.õ &;Ȏ.ï &;ȏ.é &;Ȑ.ã &;ȑ.Ý &;Ȓ.× &;ȓ.Ñ &;Ȕ.Ë &;ȕ.Å &;Ȗ.¿ &;ȗ.¹ &;Ș.³ &;ș.­ &;Ț.§ &;ț.¡ &;Ȝ. &;Ȟ. &;ȟ. &;Ƞ. &;ȡ. &;ȣ.} &;Ȥ.w &;ȥ.q &;Ȧ.k &;ȧ.e &;Ȩ._ &;ȩ.Y &;Ȫ.S &;ȫ.M &;Ȭ.G &;ȭ.A &;Ȯ.; &;ȯ.5 &;Ȱ./ &;ȱ.) &;Ȳ.# &;ȳ"), o(";ƹ.ŧ &;ƻ.š &;Ƽ.ś &;ƾ.ŕ &;ƿ.ŏ &;ǂ.ŉ &;ǅ.Ń &;ǈ.Ľ &;Ǌ.ķ &;ǋ.ı &;Ǎ.ī &;Ǐ.ĥ &;ǐ.ğ &;ǖ.ę &;Ǘ.ē &;Ǚ.č &;ǜ.ć &;ǝ.ā &;ǟ.û &;ǡ.õ &;Ǣ.ï &;Ǥ.é &;Ǩ.ã &;ǩ.Ý &;Ǭ.× &;ǭ.Ñ &;Ǳ.Ë &;ǲ.Å &;Ƕ.¿ &;Ǹ.¹ &;ǹ.³ &;Ǻ.­ &;ǻ.§ &;Ǽ.¡ &;Ȁ. &;Ȅ. &;ȅ. &;Ȇ. &;ȉ. &;Ȋ.} &;ȋ.w &;ȏ.q &;ȓ.k &;ȟ.e &;Ƞ._ &;ȡ.Y &;Ȥ.S &;ȥ.M &;Ȧ.G &;Ȩ.A &;ȩ.; &;Ȫ.5 &;ȫ./ &;ȭ.) &;Ȱ.# &;ȱ"), o(";ȸ.. &%;ȹ/& 8!:΋! )"), o('<%2΍""6΍7Ύ/#$%%<4Ώ""5!7ΐ=.##&&!&\'#/1#1""5!7Ⱦ/#$+")("\'#&\'#0M*%%<4Ώ""5!7ΐ=.##&&!&\'#/1#1""5!7Ⱦ/#$+")("\'#&\'#&/#$+")("\'#&\'#=." 7Ό'), o("<%;Ⱥ/5#;Ⱦ/,$;Ȼ/#$+#)(#'#(\"'#&'#=.\" 7Α"), o('2Β""6Β7Γ'), o('2Δ""6Δ7Ε'), o('$%%<;Ȼ.# &;Ⱥ=.##&&!&\'#/1#1""5!7Ⱦ/#$+")("\'#&\'#/P#0M*%%<;Ȼ.# &;Ⱥ=.##&&!&\'#/1#1""5!7Ⱦ/#$+")("\'#&\'#&&&#'), o(";ȼ.# &;ȹ"), o('%;Ƚ/K#$4Ζ""5!7Η.# &;Ƚ0/*4Ζ""5!7Η.# &;Ƚ&/#$+")("\'#&\'#'), o('<%$4Ζ""5!7Η.# &;ȷ0/*4Ζ""5!7Η.# &;ȷ&/\' 8!:-!! )=." 7Θ'), o('2Ι""6Ι7Κ')],
                I = 0,
                J = 0,
                K = [{
                    line: 1,
                    column: 1
                }],
                L = 0,
                M = [],
                N = 0,
                O = {},
                P = ["start", "start_streaming", "stmt_list", "semi_optional", "semi_required", "stmt_list_tail", "type_definition", "type_definition_types", "datatype_custom", "datatype_word_tail", "type_definition_args", "definition_args_loop", "literal_value", "literal_null", "literal_date", "literal_string", "literal_string_single", "literal_string_schar", "literal_blob", "literal_text", "number_sign", "literal_number_signed", "literal_number", "literal_number_decimal", "number_decimal_node", "number_decimal_full", "number_decimal_fraction", "number_decimal_exponent", "literal_number_hex", "number_hex", "number_digit", "bind_parameter", "bind_parameter_numbered", "bind_number_id", "bind_parameter_named", "bind_parameter_tcl", "tcl_suffix", "expression_exists", "expression_exists_ne", "expression_raise", "expression_raise_args", "raise_args_ignore", "raise_args_message", "expression_root", "expression_wrapped", "expression_recur", "expression_unary_collate", "expression_unary", "expression_unary_op", "expression_collate", "expression_concat", "expression_multiply", "expression_multiply_op", "expression_add", "expression_add_op", "expression_shift", "expression_shift_op", "expression_compare", "expression_compare_op", "expression_equiv", "expression_equiv_tails", "expression_equiv_null_op", "expression_equiv_op", "expression_cast", "type_alias", "expression_case", "case_expression", "expression_case_when", "expression_case_else", "expression_postfix", "expression_postfix_tail", "expression_like", "expression_escape", "expression_between", "expression_between_tail", "expression_is_not", "expression_in", "expression_in_target", "expression_list_or_select", "expression", "expression_and_op", "expression_list", "expression_list_loop", "expression_list_rest", "function_call", "function_call_args", "args_list_distinct", "error_message", "stmt", "stmt_modifier", "modifier_query", "stmt_nodes", "stmt_commit", "stmt_begin", "commit_transaction", "stmt_begin_modifier", "stmt_rollback", "rollback_savepoint", "savepoint_name", "savepoint_alt", "stmt_savepoint", "stmt_release", "stmt_alter", "alter_start", "alter_action", "alter_action_rename", "alter_action_add", "action_add_modifier", "stmt_crud", "stmt_core_with", "clause_with", "clause_with_recursive", "clause_with_tables", "clause_with_loop", "expression_cte", "select_alias", "select_wrapped", "stmt_select_full", "stmt_sqlite", "stmt_attach", "attach_arg", "stmt_detach", "stmt_vacuum", "vacuum_target", "stmt_analyze", "analyze_arg", "stmt_reindex", "reindex_arg", "stmt_pragma", "pragma_expression", "pragma_value", "pragma_value_literal", "pragma_value_bool", "pragma_bool_id", "pragma_value_name", "stmt_crud_types", "stmt_select", "stmt_core_order", "stmt_core_limit", "stmt_core_limit_offset", "limit_offset_variant", "limit_offset_variant_name", "select_loop", "select_loop_union", "select_parts", "select_parts_core", "select_core_select", "select_modifier", "select_modifier_distinct", "select_modifier_all", "select_target", "select_target_loop", "select_core_from", "stmt_core_where", "select_core_group", "select_core_having", "select_node", "select_node_star", "select_node_star_qualified", "select_node_aliased", "select_source", "source_loop_tail", "select_cross_clause", "select_join_clause", "table_or_sub", "table_or_sub_func", "table_qualified", "table_qualified_id", "table_or_sub_index_node", "index_node_indexed", "index_node_none", "table_or_sub_sub", "table_or_sub_select", "alias", "join_operator", "join_operator_natural", "join_operator_types", "operator_types_hand", "types_hand_outer", "operator_types_misc", "join_condition", "join_condition_on", "join_condition_using", "select_parts_values", "stmt_core_order_list", "stmt_core_order_list_loop", "stmt_core_order_list_item", "select_star", "stmt_fallback_types", "stmt_insert", "insert_keyword", "insert_keyword_ins", "insert_keyword_repl", "insert_keyword_mod", "insert_target", "insert_into", "insert_into_start", "insert_results", "loop_columns", "loop_column_tail", "loop_name", "insert_value", "insert_value_start", "insert_values_list", "insert_values_loop", "expression_list_wrapped", "insert_default", "operator_compound", "compound_union", "compound_union_all", "stmt_update", "update_start", "update_fallback", "update_set", "update_columns", "update_columns_tail", "update_column", "stmt_delete", "delete_start", "stmt_create", "create_start", "create_table_only", "create_index_only", "create_trigger_only", "create_view_only", "create_virtual_only", "create_table", "create_table_start", "create_core_tmp", "create_core_ine", "create_table_source", "table_source_def", "source_def_rowid", "source_def_loop", "source_def_tail", "source_tbl_loop", "source_def_column", "source_def_name", "column_type", "column_constraints", "column_constraint_tail", "column_constraint", "constraint_name", "constraint_name_loop", "column_constraint_types", "column_constraint_foreign", "column_constraint_primary", "col_primary_start", "col_primary_auto", "column_constraint_null", "constraint_null_types", "constraint_null_value", "column_constraint_check", "column_constraint_default", "column_default_values", "column_constraint_collate", "table_constraint", "table_constraint_types", "table_constraint_check", "table_constraint_primary", "primary_start", "primary_start_normal", "primary_start_unique", "primary_columns", "primary_columns_index", "primary_columns_table", "primary_column_tail", "primary_column", "primary_column_types", "column_collate", "column_collate_loop", "primary_column_dir", "primary_conflict", "primary_conflict_start", "constraint_check", "table_constraint_foreign", "foreign_start", "foreign_clause", "foreign_references", "foreign_actions", "foreign_actions_tail", "foreign_action", "foreign_action_on", "action_on_action", "on_action_set", "on_action_cascade", "on_action_none", "foreign_action_match", "foreign_deferrable", "deferrable_initially", "table_source_select", "create_index", "create_index_start", "index_unique", "index_on", "create_trigger", "create_trigger_start", "trigger_conditions", "trigger_apply_mods", "trigger_apply_instead", "trigger_do", "trigger_do_on", "trigger_do_update", "do_update_of", "do_update_columns", "trigger_foreach", "trigger_when", "trigger_action", "action_loop", "action_loop_stmt", "create_view", "id_view_expression", "create_view_start", "create_as_select", "create_virtual", "create_virtual_start", "virtual_module", "virtual_args", "virtual_args_loop", "virtual_args_tail", "virtual_arg_types", "virtual_column_name", "stmt_drop", "drop_start", "drop_types", "drop_ie", "binary_concat", "binary_plus", "binary_minus", "binary_multiply", "binary_divide", "binary_mod", "binary_left", "binary_right", "binary_and", "binary_or", "binary_lt", "binary_gt", "binary_lte", "binary_gte", "binary_equal", "binary_notequal_a", "binary_notequal_b", "binary_lang_isnt", "id_name", "id_database", "id_function", "id_table", "id_table_qualified", "id_column", "column_unqualified", "column_qualifiers", "id_column_qualified", "id_collation", "id_savepoint", "id_index", "id_trigger", "id_view", "id_pragma", "id_cte", "id_table_expression", "id_constraint_table", "id_constraint_column", "datatype_types", "datatype_text", "datatype_real", "datatype_real_double", "datatype_numeric", "datatype_integer", "datatype_integer_fp", "datatype_none", "name_char", "unicode_char", "name", "name_quoted", "name_unquoted", "name_reserved", "name_bracketed", "bracket_terminator", "name_dblquoted", "name_sglquoted", "name_backticked", "sym_bopen", "sym_bclose", "sym_popen", "sym_pclose", "sym_comma", "sym_dot", "sym_star", "sym_quest", "sym_sglquote", "sym_dblquote", "sym_backtick", "sym_tilde", "sym_plus", "sym_minus", "sym_equal", "sym_amp", "sym_pipe", "sym_mod", "sym_lt", "sym_gt", "sym_excl", "sym_semi", "sym_colon", "sym_fslash", "sym_bslash", "ABORT", "ACTION", "ADD", "AFTER", "ALL", "ALTER", "ANALYZE", "AND", "AS", "ASC", "ATTACH", "AUTOINCREMENT", "BEFORE", "BEGIN", "BETWEEN", "BY", "CASCADE", "CASE", "CAST", "CHECK", "COLLATE", "COLUMN", "COMMIT", "CONFLICT", "CONSTRAINT", "CREATE", "CROSS", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "DATABASE", "DEFAULT", "DEFERRABLE", "DEFERRED", "DELETE", "DESC", "DETACH", "DISTINCT", "DROP", "EACH", "ELSE", "END", "ESCAPE", "EXCEPT", "EXCLUSIVE", "EXISTS", "EXPLAIN", "FAIL", "FOR", "FOREIGN", "FROM", "FULL", "GLOB", "GROUP", "HAVING", "IF", "IGNORE", "IMMEDIATE", "IN", "INDEX", "INDEXED", "INITIALLY", "INNER", "INSERT", "INSTEAD", "INTERSECT", "INTO", "IS", "ISNULL", "JOIN", "KEY", "LEFT", "LIKE", "LIMIT", "MATCH", "NATURAL", "NO", "NOT", "NOTNULL", "NULL", "OF", "OFFSET", "ON", "OR", "ORDER", "OUTER", "PLAN", "PRAGMA", "PRIMARY", "QUERY", "RAISE", "RECURSIVE", "REFERENCES", "REGEXP", "REINDEX", "RELEASE", "RENAME", "REPLACE", "RESTRICT", "RIGHT", "ROLLBACK", "ROW", "ROWID", "SAVEPOINT", "SELECT", "SET", "TABLE", "TEMP", "TEMPORARY", "THEN", "TO", "TRANSACTION", "TRIGGER", "UNION", "UNIQUE", "UPDATE", "USING", "VACUUM", "VALUES", "VIEW", "VIRTUAL", "WHEN", "WHERE", "WITH", "WITHOUT", "reserved_words", "reserved_word_list", "reserved_critical_list", "comment", "comment_line", "comment_block", "comment_block_start", "comment_block_end", "comment_block_body", "block_body_nodes", "comment_block_feed", "o", "_TODO_"],
                Q = [null, null, null, null, null, null, "Type Definition", null, "Custom Datatype Name", null, "Type Definition Arguments", null, null, "Null Literal", "Date Literal", "String Literal", "Single-quoted String Literal", null, "Blob Literal", null, "Number Sign", null, null, null, "Decimal Literal", null, null, "Decimal Literal Exponent", "Hexidecimal Literal", null, null, "Bind Parameter", "Numbered Bind Parameter", null, "Named Bind Parameter", "TCL Bind Parameter", null, "EXISTS Expression", "EXISTS Keyword", "RAISE Expression", "RAISE Expression Arguments", "IGNORE Keyword", null, null, null, null, null, null, null, "COLLATE Expression", null, null, null, null, null, null, null, null, null, null, null, null, null, "CAST Expression", "Type Alias", "CASE Expression", null, "WHEN Clause", "ELSE Clause", null, null, "Comparison Expression", "ESCAPE Expression", "BETWEEN Expression", null, null, "IN Expression", null, null, null, null, "Expression List", null, null, "Function Call", "Function Call Arguments", null, "Error Message", "Statement", "QUERY PLAN", "QUERY PLAN Keyword", null, "END Transaction Statement", "BEGIN Transaction Statement", null, null, "ROLLBACK Statement", "TO Clause", null, null, "SAVEPOINT Statement", "RELEASE Statement", "ALTER TABLE Statement", "ALTER TABLE Keyword", null, "RENAME TO Keyword", "ADD COLUMN Keyword", null, null, "WITH Clause", null, null, null, null, "Common Table Expression", null, null, null, null, "ATTACH Statement", null, "DETACH Statement", "VACUUM Statement", null, "ANALYZE Statement", null, "REINDEX Statement", null, "PRAGMA Statement", null, null, null, null, null, null, null, "SELECT Statement", "ORDER BY Clause", "LIMIT Clause", "OFFSET Clause", null, null, null, "Union Operation", null, null, "SELECT Results Clause", "SELECT Results Modifier", null, null, null, null, "FROM Clause", "WHERE Clause", "GROUP BY Clause", "HAVING Clause", null, null, null, null, null, null, "CROSS JOIN Operation", "JOIN Operation", null, null, "Qualified Table", "Qualified Table Identifier", "Qualfied Table Index", null, null, "SELECT Source", "Subquery", "Alias", "JOIN Operator", null, null, null, null, null, "JOIN Constraint", "Join ON Clause", "Join USING Clause", "VALUES Clause", null, null, "Ordering Expression", "Star", "Fallback Type", "INSERT Statement", null, "INSERT Keyword", "REPLACE Keyword", "INSERT OR Modifier", null, "INTO Clause", "INTO Keyword", "VALUES Clause", "Column List", null, "Column Name", "VALUES Clause", "VALUES Keyword", null, null, "Wrapped Expression List", "DEFAULT VALUES Clause", "Compound Operator", "UNION Operator", null, "UPDATE Statement", "UPDATE Keyword", "UPDATE OR Modifier", "SET Clause", null, null, "Column Assignment", "DELETE Statement", "DELETE Keyword", "CREATE Statement", null, null, null, null, null, null, "CREATE TABLE Statement", null, null, "IF NOT EXISTS Modifier", null, "Table Definition", null, null, null, null, "Column Definition", null, "Column Datatype", null, null, "Column Constraint", null, "CONSTRAINT Name", null, "FOREIGN KEY Column Constraint", "PRIMARY KEY Column Constraint", "PRIMARY KEY Keyword", "AUTOINCREMENT Keyword", null, "UNIQUE Column Constraint", "NULL Column Constraint", "CHECK Column Constraint", "DEFAULT Column Constraint", null, "COLLATE Column Constraint", "Table Constraint", null, "CHECK Table Constraint", "PRIMARY KEY Table Constraint", null, "PRIMARY KEY Keyword", "UNIQUE Keyword", null, null, null, null, "Indexed Column", null, "Collation", null, "Column Direction", null, "ON CONFLICT Keyword", null, "FOREIGN KEY Table Constraint", "FOREIGN KEY Keyword", null, "REFERENCES Clause", null, null, "FOREIGN KEY Action Clause", null, "FOREIGN KEY Action", null, null, null, null, "DEFERRABLE Clause", null, null, "CREATE INDEX Statement", null, null, "ON Clause", "CREATE TRIGGER Statement", null, "Conditional Clause", null, null, "Conditional Action", null, null, null, null, null, "WHEN Clause", "Actions Clause", null, null, "CREATE VIEW Statement", null, null, null, "CREATE VIRTUAL TABLE Statement", null, null, "Module Arguments", null, null, null, null, "DROP Statement", "DROP Keyword", "DROP Type", "IF EXISTS Keyword", "Or", "Add", "Subtract", "Multiply", "Divide", "Modulo", "Shift Left", "Shift Right", "Logical AND", "Logical OR", "Less Than", "Greater Than", "Less Than Or Equal", "Greater Than Or Equal", "Equal", "Not Equal", "Not Equal", "IS", "Identifier", "Database Identifier", "Function Identifier", "Table Identifier", null, "Column Identifier", null, null, null, "Collation Identifier", "Savepoint Identifier", "Index Identifier", "Trigger Identifier", "View Identifier", "Pragma Identifier", "CTE Identifier", null, "Table Constraint Identifier", "Column Constraint Identifier", "Datatype Name", "TEXT Datatype Name", "REAL Datatype Name", "DOUBLE Datatype Name", "NUMERIC Datatype Name", "INTEGER Datatype Name", null, "BLOB Datatype Name", null, null, null, null, null, null, null, null, null, null, null, "Open Bracket", "Close Bracket", "Open Parenthesis", "Close Parenthesis", "Comma", "Period", "Asterisk", "Question Mark", "Single Quote", "Double Quote", "Backtick", "Tilde", "Plus", "Minus", "Equal", "Ampersand", "Pipe", "Modulo", "Less Than", "Greater Than", "Exclamation", "Semicolon", "Colon", "Forward Slash", "Backslash", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Line Comment", "Block Comment", null, null, null, null, null, "Whitespace", null],
                R = "tracer" in b ? b.tracer : new f;
            if ("startRule" in b) {
                if (!(b.startRule in E)) throw new Error("Can't start parsing from rule \"" + b.startRule + '".');
                F = E[b.startRule]
            }
            if (C = p(F), C !== D && I === a.length) return C;
            throw C !== D && I < a.length && m(i()), n(M, L < a.length ? a.charAt(L) : null, L < a.length ? l(L, L + 1) : l(L, L))
        }
        var h = function () {
            function a(a, b) {
                var c = [],
                    d = !0,
                    e = !1,
                    f = void 0;
                try {
                    for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
                } catch (a) {
                    e = !0, f = a
                } finally {
                    try {
                        !d && h.return && h.return()
                    } finally {
                        if (e) throw f
                    }
                }
                return c
            }
            return function (b, c) {
                if (Array.isArray(b)) return b;
                if (Symbol.iterator in Object(b)) return a(b, c);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
        d(e, Error), e.buildMessage = function (a, b) {
            function c(a) {
                return a.charCodeAt(0).toString(16).toUpperCase()
            }

            function d(a) {
                return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (a) {
                    return "\\x0" + c(a)
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (a) {
                    return "\\x" + c(a)
                })
            }

            function e(a) {
                return a.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (a) {
                    return "\\x0" + c(a)
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (a) {
                    return "\\x" + c(a)
                })
            }

            function f(a) {
                return i[a.type](a)
            }

            function g(a) {
                var b, c, d = a.map(f);
                if (d.sort(), d.length > 0) {
                    for (b = 1, c = 1; b < d.length; b++) d[b - 1] !== d[b] && (d[c] = d[b], c++);
                    d.length = c
                }
                switch (d.length) {
                    case 1:
                        return d[0];
                    case 2:
                        return d[0] + " or " + d[1];
                    default:
                        return d.slice(0, -1).join(", ") + ", or " + d[d.length - 1]
                }
            }

            function h(a) {
                return a ? '"' + d(a) + '"' : "end of input"
            }
            var i = {
                literal: function (a) {
                    return '"' + d(a.text) + '"'
                },
                class: function (a) {
                    var b = a.parts.map(function (a) {
                        return Array.isArray(a) ? e(a[0]) + "-" + e(a[1]) : e(a)
                    });
                    return "[" + (a.inverted ? "^" : "") + b + "]"
                },
                any: function (a) {
                    return "any character"
                },
                end: function (a) {
                    return "end of input"
                },
                other: function (a) {
                    return a.description
                }
            };
            return "Expected " + g(a) + " but " + h(b) + " found."
        }, f.prototype.trace = function (a) {
            function b(a) {
                function b(a, b) {
                    var c, d = "";
                    for (c = 0; c < b; c++) d += a;
                    return d
                }

                function d(a, c) {
                    return a + b(" ", c - a.length)
                }
                "object" === ("undefined" == typeof console ? "undefined" : i(console)) && console.log(a.location.start.line + ":" + a.location.start.column + "-" + a.location.end.line + ":" + a.location.end.column + " " + d(a.type, 10) + " " + b("  ", c.indentLevel) + a.rule)
            }
            var c = this;
            switch (a.type) {
                case "rule.enter":
                    b(a), this.indentLevel++;
                    break;
                case "rule.match":
                    this.indentLevel-- , b(a);
                    break;
                case "rule.fail":
                    this.indentLevel-- , b(a);
                    break;
                default:
                    throw new Error("Invalid event type: " + a.type + ".")
            }
        }, b.exports = {
            SyntaxError: e,
            DefaultTracer: f,
            parse: g
        }
    }, {}],
    2: [function (a, b, c) {
        "use strict";

        function d(a, b) {
            for (var c = a.length - 1; c >= 0; c -= 1)
                if (b(a[c])) return c;
            return -1
        }

        function e(a, b) {
            for (var c = a.length, d = 0; d < c; d += 1)
                if (!b(a[d])) return a.slice(0, d);
            return a
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        });
        c.Tracer = function () {
            function a() {
                return this instanceof a ? (this.events = [], this.indentation = 0, this.whitespaceRule = /(^whitespace)|(char$)|(^[oe]$)|(^sym\_)/i, this.statementRule = /Statement$/i, void (this.firstNodeRule = /(Statement|Clause)$/i)) : new a
            }
            return a.prototype.trace = function (a) {
                var b, c, e = this;
                switch (a.indentation = this.indentation, a.type) {
                    case "rule.enter":
                        this.events.push(a), this.indentation += 1;
                        break;
                    case "rule.match":
                        this.indentation -= 1;
                        break;
                    case "rule.fail":
                        b = d(this.events, function (b) {
                            var c = b.rule;
                            return c === a.rule
                        }), c = d(this.events, function (a) {
                            return !e.whitespaceRule.test(a.rule)
                        }), (e.whitespaceRule.test(a.rule) || b === c) && this.events.splice(b, 1), this.indentation -= 1
                }
            }, a.prototype.smartError = function (a) {
                var b, c, d, f, g, h = this,
                    i = {
                        indentation: -1
                    },
                    j = !1,
                    k = 0,
                    l = this.events.filter(function (a) {
                        return null != a.description && !h.whitespaceRule.test(a.rule)
                    }).reverse();
                return d = e(l, function (a) {
                    if (/^(sym\_semi)$/i.test(a.rule) && (k += 1), k > 1) return !1;
                    if (j) {
                        if (/^(stmt)$/i.test(a.rule)) return j = !0, !0
                    } else a.indentation > i.indentation ? i = a : j = !0;
                    return !0
                }), d.length && (c = i.location, g = d.find(function (a) {
                    return h.firstNodeRule.test(a.description) && a.description !== i.description && a.indentation !== i.indentation
                }), f = null != g ? this.statementRule.test(i.description) && this.statementRule.test(g.description) ? g.description : i.description + " (" + g.description + ")" : i.description, b = "Syntax error found near " + f, Object.assign(a, {
                    message: b,
                    location: c
                })), a
            }, a
        }()
    }, {}],
    3: [function (a, b, c) {
        function d(a, b, c) {
            var d;
            return function () {
                var e = this,
                    f = arguments,
                    g = function () {
                        d = null, c || a.apply(e, f)
                    },
                    h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        }

        function e() {
            o.textContent = "Syntax Tree", n.className = "right"
        }

        function f(a, b) {
            n.className = "alert right", o.textContent = b
        }

        function g(a) {
            return function (b) {
                e(), a.setValue(h(b)), l(a)
            }
        }

        function h(a) {
            return JSON.stringify(a, null, "\t")
        }

        function i(a, b) {
            var c = g(b);
            return function () {
                sqliteParser(a.getValue(), function (a, d) {
                    if (a) {
                        var e = null != a.location ? "[" + a.location.start.line + ", " + a.location.start.column + "] " : "";
                        return void f(b, e + a.message)
                    }
                    c(d)
                })
            }
        }

        function j(a) {
            window.localStorage && window.localStorage.setItem("sqlite-parser-demo", JSON.stringify({
                sql: a
            }))
        }

        function k(a) {
            if (window.localStorage) try {
                var b = JSON.parse(window.localStorage.getItem("sqlite-parser-demo"));
                b && null != b.sql && a.setValue(b.sql)
            } catch (a) { }
        }

        function l(a) {
            return a.execCommand("selectAll"), a.execCommand("indentAuto"), a.setCursor({
                line: 0,
                ch: 0
            }), a
        }
        var m = a("codemirror"),
            sqliteParser = a("sqlite-parser");
        a("foldgutter"), a("brace-fold"), a("panel"), a("mode-javascript"), a("mode-sql");
        const n = document.getElementById("ast"),
            o = document.getElementById("ast-header"),
            p = document.getElementById("sql-text"),
            q = document.getElementById("ast-text");
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("container").className = "";
            var a = {
                lineNumbers: !0,
                theme: "monokai",
                lineWrapping: !0,
                tabSize: 4,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
            },
                b = m.fromTextArea(p, Object.assign({
                    mode: "text/x-plsql"
                }, a)),
                c = m.fromTextArea(q, Object.assign({
                    mode: "application/ld+json",
                    foldGutter: !0,
                    readOnly: !0
                }, a)),
                e = d(i(b, c), 250);
            b.on("change", e), k(b), e(), window.onbeforeunload = function () {
                var a = b.getValue();
                "" !== a.trim() && j(a)
            }
        })
    }, {
        "brace-fold": "brace-fold",
        codemirror: "codemirror",
        foldgutter: "foldgutter",
        "mode-javascript": "mode-javascript",
        "mode-sql": "mode-sql",
        panel: "panel",
        "sqlite-parser": "sqlite-parser"
    }],
    "brace-fold": [function (a, b, c) {
        ! function (d) {
            "object" == typeof c && "object" == typeof b ? d(a("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], d) : d(CodeMirror)
        }(function (a) {
            "use strict";
            a.registerHelper("fold", "brace", function (b, c) {
                function d(d) {
                    for (var h = c.ch, i = 0; ;) {
                        var j = h <= 0 ? -1 : g.lastIndexOf(d, h - 1);
                        if (j != -1) {
                            if (1 == i && j < c.ch) break;
                            if (e = b.getTokenTypeAt(a.Pos(f, j + 1)), !/^(comment|string)/.test(e)) return j + 1;
                            h = j - 1
                        } else {
                            if (1 == i) break;
                            i = 1, h = g.length
                        }
                    }
                }
                var e, f = c.line,
                    g = b.getLine(f),
                    h = "{",
                    i = "}",
                    j = d("{");
                if (null == j && (h = "[", i = "]", j = d("[")), null != j) {
                    var k, l, m = 1,
                        n = b.lastLine();
                    a: for (var o = f; o <= n; ++o)
                        for (var p = b.getLine(o), q = o == f ? j : 0; ;) {
                            var r = p.indexOf(h, q),
                                s = p.indexOf(i, q);
                            if (r < 0 && (r = p.length), s < 0 && (s = p.length), q = Math.min(r, s), q == p.length) break;
                            if (b.getTokenTypeAt(a.Pos(o, q + 1)) == e)
                                if (q == r)++m;
                                else if (!--m) {
                                    k = o, l = q;
                                    break a
                                } ++q
                        }
                    if (null != k && (f != k || l != j)) return {
                        from: a.Pos(f, j),
                        to: a.Pos(k, l)
                    }
                }
            }), a.registerHelper("fold", "import", function (b, c) {
                function d(c) {
                    if (c < b.firstLine() || c > b.lastLine()) return null;
                    var d = b.getTokenAt(a.Pos(c, 1));
                    if (/\S/.test(d.string) || (d = b.getTokenAt(a.Pos(c, d.end + 1))), "keyword" != d.type || "import" != d.string) return null;
                    for (var e = c, f = Math.min(b.lastLine(), c + 10); e <= f; ++e) {
                        var g = b.getLine(e),
                            h = g.indexOf(";");
                        if (h != -1) return {
                            startCh: d.end,
                            end: a.Pos(e, h)
                        }
                    }
                }
                var e, f = c.line,
                    g = d(f);
                if (!g || d(f - 1) || (e = d(f - 2)) && e.end.line == f - 1) return null;
                for (var h = g.end; ;) {
                    var i = d(h.line + 1);
                    if (null == i) break;
                    h = i.end
                }
                return {
                    from: b.clipPos(a.Pos(f, g.startCh + 1)),
                    to: h
                }
            }), a.registerHelper("fold", "include", function (b, c) {
                function d(c) {
                    if (c < b.firstLine() || c > b.lastLine()) return null;
                    var d = b.getTokenAt(a.Pos(c, 1));
                    return /\S/.test(d.string) || (d = b.getTokenAt(a.Pos(c, d.end + 1))), "meta" == d.type && "#include" == d.string.slice(0, 8) ? d.start + 8 : void 0
                }
                var e = c.line,
                    f = d(e);
                if (null == f || null != d(e - 1)) return null;
                for (var g = e; ;) {
                    var h = d(g + 1);
                    if (null == h) break;
                    ++g
                }
                return {
                    from: a.Pos(e, f + 1),
                    to: b.clipPos(a.Pos(g))
                }
            })
        })
    }, {
        "../../lib/codemirror": "codemirror"
    }],
    codemirror: [function (a, b, c) {
        ! function (a) {
            if ("object" == typeof c && "object" == typeof b) b.exports = a();
            else {
                if ("function" == typeof define && define.amd) return define([], a);
                (this || window).CodeMirror = a()
            }
        }(function () {
            "use strict";

            function a(c, d) {
                if (!(this instanceof a)) return new a(c, d);
                this.options = d = d ? Me(d) : {}, Me(bg, d, !1), n(d);
                var e = d.value;
                "string" == typeof e && (e = new zg(e, d.mode, null, d.lineSeparator)), this.doc = e;
                var f = new a.inputStyles[d.inputStyle](this),
                    g = this.display = new b(c, e, f);
                g.wrapper.CodeMirror = this, j(this), h(this), d.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), d.autofocus && !Ef && g.input.focus(), r(this), this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: !1,
                    cutIncoming: !1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new Ee,
                    keySeq: null,
                    specialChars: null
                };
                var i = this;
                uf && vf < 11 && setTimeout(function () {
                    i.display.input.reset(!0)
                }, 20), Rb(this), Ye(), vb(this), this.curOp.forceUpdate = !0, Yd(this, e), d.autofocus && !Ef || i.hasFocus() ? setTimeout(Ne(rc, this), 20) : sc(this);
                for (var k in cg) cg.hasOwnProperty(k) && cg[k](this, d[k], dg);
                w(this), d.finishInit && d.finishInit(this);
                for (var l = 0; l < hg.length; ++l) hg[l](this);
                xb(this), wf && d.lineWrapping && "optimizelegibility" == getComputedStyle(g.lineDiv).textRendering && (g.lineDiv.style.textRendering = "auto")
            }

            function b(a, b, c) {
                var d = this;
                this.input = c, d.scrollbarFiller = Re("div", null, "CodeMirror-scrollbar-filler"), d.scrollbarFiller.setAttribute("cm-not-content", "true"), d.gutterFiller = Re("div", null, "CodeMirror-gutter-filler"), d.gutterFiller.setAttribute("cm-not-content", "true"), d.lineDiv = Re("div", null, "CodeMirror-code"), d.selectionDiv = Re("div", null, null, "position: relative; z-index: 1"), d.cursorDiv = Re("div", null, "CodeMirror-cursors"), d.measure = Re("div", null, "CodeMirror-measure"), d.lineMeasure = Re("div", null, "CodeMirror-measure"), d.lineSpace = Re("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv], null, "position: relative; outline: none"), d.mover = Re("div", [Re("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative"), d.sizer = Re("div", [d.mover], "CodeMirror-sizer"), d.sizerWidth = null, d.heightForcer = Re("div", null, null, "position: absolute; height: " + Kg + "px; width: 1px;"), d.gutters = Re("div", null, "CodeMirror-gutters"), d.lineGutter = null, d.scroller = Re("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll"), d.scroller.setAttribute("tabIndex", "-1"), d.wrapper = Re("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror"), uf && vf < 8 && (d.gutters.style.zIndex = -1, d.scroller.style.paddingRight = 0), wf || rf && Ef || (d.scroller.draggable = !0), a && (a.appendChild ? a.appendChild(d.wrapper) : a(d.wrapper)), d.viewFrom = d.viewTo = b.first, d.reportedViewFrom = d.reportedViewTo = b.first, d.view = [], d.renderedView = null, d.externalMeasured = null, d.viewOffset = 0, d.lastWrapHeight = d.lastWrapWidth = 0, d.updateLineNumbers = null, d.nativeBarWidth = d.barHeight = d.barWidth = 0, d.scrollbarsClipped = !1, d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null, d.alignWidgets = !1, d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null, d.maxLine = null, d.maxLineLength = 0, d.maxLineChanged = !1, d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null, d.shift = !1, d.selForContextMenu = null, d.activeTouch = null, c.init(d)
            }

            function c(b) {
                b.doc.mode = a.getMode(b.options, b.doc.modeOption), d(b)
            }

            function d(a) {
                a.doc.iter(function (a) {
                    a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null)
                }), a.doc.frontier = a.doc.first, Na(a, 100), a.state.modeGen++ , a.curOp && Kb(a)
            }

            function e(a) {
                a.options.lineWrapping ? (_g(a.display.wrapper, "CodeMirror-wrap"), a.display.sizer.style.minWidth = "", a.display.sizerWidth = null) : ($g(a.display.wrapper, "CodeMirror-wrap"), m(a)), g(a), Kb(a), ib(a), setTimeout(function () {
                    s(a)
                }, 100)
            }

            function f(a) {
                var b = tb(a.display),
                    c = a.options.lineWrapping,
                    d = c && Math.max(5, a.display.scroller.clientWidth / ub(a.display) - 3);
                return function (e) {
                    if (wd(a.doc, e)) return 0;
                    var f = 0;
                    if (e.widgets)
                        for (var g = 0; g < e.widgets.length; g++) e.widgets[g].height && (f += e.widgets[g].height);
                    return c ? f + (Math.ceil(e.text.length / d) || 1) * b : f + b
                }
            }

            function g(a) {
                var b = a.doc,
                    c = f(a);
                b.iter(function (a) {
                    var b = c(a);
                    b != a.height && ae(a, b)
                })
            }

            function h(a) {
                a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), ib(a)
            }

            function i(a) {
                j(a), Kb(a), setTimeout(function () {
                    v(a)
                }, 20)
            }

            function j(a) {
                var b = a.display.gutters,
                    c = a.options.gutters;
                Se(b);
                for (var d = 0; d < c.length; ++d) {
                    var e = c[d],
                        f = b.appendChild(Re("div", null, "CodeMirror-gutter " + e));
                    "CodeMirror-linenumbers" == e && (a.display.lineGutter = f, f.style.width = (a.display.lineNumWidth || 1) + "px")
                }
                b.style.display = d ? "" : "none", k(a)
            }

            function k(a) {
                var b = a.display.gutters.offsetWidth;
                a.display.sizer.style.marginLeft = b + "px"
            }

            function l(a) {
                if (0 == a.height) return 0;
                for (var b, c = a.text.length, d = a; b = pd(d);) {
                    var e = b.find(0, !0);
                    d = e.from.line, c += e.from.ch - e.to.ch
                }
                for (d = a; b = qd(d);) {
                    var e = b.find(0, !0);
                    c -= d.text.length - e.from.ch, d = e.to.line, c += d.text.length - e.to.ch
                }
                return c
            }

            function m(a) {
                var b = a.display,
                    c = a.doc;
                b.maxLine = Zd(c, c.first), b.maxLineLength = l(b.maxLine), b.maxLineChanged = !0, c.iter(function (a) {
                    var c = l(a);
                    c > b.maxLineLength && (b.maxLineLength = c, b.maxLine = a)
                })
            }

            function n(a) {
                var b = He(a.gutters, "CodeMirror-linenumbers");
                b == -1 && a.lineNumbers ? a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]) : b > -1 && !a.lineNumbers && (a.gutters = a.gutters.slice(0), a.gutters.splice(b, 1))
            }

            function o(a) {
                var b = a.display,
                    c = b.gutters.offsetWidth,
                    d = Math.round(a.doc.height + Sa(a.display));
                return {
                    clientHeight: b.scroller.clientHeight,
                    viewHeight: b.wrapper.clientHeight,
                    scrollWidth: b.scroller.scrollWidth,
                    clientWidth: b.scroller.clientWidth,
                    viewWidth: b.wrapper.clientWidth,
                    barLeft: a.options.fixedGutter ? c : 0,
                    docHeight: d,
                    scrollHeight: d + Ua(a) + b.barHeight,
                    nativeBarWidth: b.nativeBarWidth,
                    gutterWidth: c
                }
            }

            function p(a, b, c) {
                this.cm = c;
                var d = this.vert = Re("div", [Re("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                    e = this.horiz = Re("div", [Re("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                a(d), a(e), Fg(d, "scroll", function () {
                    d.clientHeight && b(d.scrollTop, "vertical")
                }), Fg(e, "scroll", function () {
                    e.clientWidth && b(e.scrollLeft, "horizontal")
                }), this.checkedZeroWidth = !1, uf && vf < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            }

            function q() { }

            function r(b) {
                b.display.scrollbars && (b.display.scrollbars.clear(), b.display.scrollbars.addClass && $g(b.display.wrapper, b.display.scrollbars.addClass)), b.display.scrollbars = new a.scrollbarModel[b.options.scrollbarStyle](function (a) {
                    b.display.wrapper.insertBefore(a, b.display.scrollbarFiller), Fg(a, "mousedown", function () {
                        b.state.focused && setTimeout(function () {
                            b.display.input.focus()
                        }, 0)
                    }), a.setAttribute("cm-not-content", "true")
                }, function (a, c) {
                    "horizontal" == c ? fc(b, a) : ec(b, a)
                }, b), b.display.scrollbars.addClass && _g(b.display.wrapper, b.display.scrollbars.addClass)
            }

            function s(a, b) {
                b || (b = o(a));
                var c = a.display.barWidth,
                    d = a.display.barHeight;
                t(a, b);
                for (var e = 0; e < 4 && c != a.display.barWidth || d != a.display.barHeight; e++) c != a.display.barWidth && a.options.lineWrapping && F(a), t(a, o(a)), c = a.display.barWidth, d = a.display.barHeight
            }

            function t(a, b) {
                var c = a.display,
                    d = c.scrollbars.update(b);
                c.sizer.style.paddingRight = (c.barWidth = d.right) + "px", c.sizer.style.paddingBottom = (c.barHeight = d.bottom) + "px", c.heightForcer.style.borderBottom = d.bottom + "px solid transparent", d.right && d.bottom ? (c.scrollbarFiller.style.display = "block", c.scrollbarFiller.style.height = d.bottom + "px", c.scrollbarFiller.style.width = d.right + "px") : c.scrollbarFiller.style.display = "", d.bottom && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (c.gutterFiller.style.display = "block", c.gutterFiller.style.height = d.bottom + "px", c.gutterFiller.style.width = b.gutterWidth + "px") : c.gutterFiller.style.display = ""
            }

            function u(a, b, c) {
                var d = c && null != c.top ? Math.max(0, c.top) : a.scroller.scrollTop;
                d = Math.floor(d - Ra(a));
                var e = c && null != c.bottom ? c.bottom : d + a.wrapper.clientHeight,
                    f = ce(b, d),
                    g = ce(b, e);
                if (c && c.ensure) {
                    var h = c.ensure.from.line,
                        i = c.ensure.to.line;
                    h < f ? (f = h, g = ce(b, de(Zd(b, h)) + a.wrapper.clientHeight)) : Math.min(i, b.lastLine()) >= g && (f = ce(b, de(Zd(b, i)) - a.wrapper.clientHeight), g = i)
                }
                return {
                    from: f,
                    to: Math.max(g, f + 1)
                }
            }

            function v(a) {
                var b = a.display,
                    c = b.view;
                if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
                    for (var d = y(b) - b.scroller.scrollLeft + a.doc.scrollLeft, e = b.gutters.offsetWidth, f = d + "px", g = 0; g < c.length; g++)
                        if (!c[g].hidden) {
                            a.options.fixedGutter && (c[g].gutter && (c[g].gutter.style.left = f), c[g].gutterBackground && (c[g].gutterBackground.style.left = f));
                            var h = c[g].alignable;
                            if (h)
                                for (var i = 0; i < h.length; i++) h[i].style.left = f
                        }
                    a.options.fixedGutter && (b.gutters.style.left = d + e + "px")
                }
            }

            function w(a) {
                if (!a.options.lineNumbers) return !1;
                var b = a.doc,
                    c = x(a.options, b.first + b.size - 1),
                    d = a.display;
                if (c.length != d.lineNumChars) {
                    var e = d.measure.appendChild(Re("div", [Re("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                        f = e.firstChild.offsetWidth,
                        g = e.offsetWidth - f;
                    return d.lineGutter.style.width = "", d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g) + 1, d.lineNumWidth = d.lineNumInnerWidth + g, d.lineNumChars = d.lineNumInnerWidth ? c.length : -1,
                        d.lineGutter.style.width = d.lineNumWidth + "px", k(a), !0
                }
                return !1
            }

            function x(a, b) {
                return String(a.lineNumberFormatter(b + a.firstLineNumber))
            }

            function y(a) {
                return a.scroller.getBoundingClientRect().left - a.sizer.getBoundingClientRect().left
            }

            function z(a, b, c) {
                var d = a.display;
                this.viewport = b, this.visible = u(d, a.doc, b), this.editorIsHidden = !d.wrapper.offsetWidth, this.wrapperHeight = d.wrapper.clientHeight, this.wrapperWidth = d.wrapper.clientWidth, this.oldDisplayWidth = Va(a), this.force = c, this.dims = H(a), this.events = []
            }

            function A(a) {
                var b = a.display;
                !b.scrollbarsClipped && b.scroller.offsetWidth && (b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth, b.heightForcer.style.height = Ua(a) + "px", b.sizer.style.marginBottom = -b.nativeBarWidth + "px", b.sizer.style.borderRightWidth = Ua(a) + "px", b.scrollbarsClipped = !0)
            }

            function B(a, b) {
                var c = a.display,
                    d = a.doc;
                if (b.editorIsHidden) return Mb(a), !1;
                if (!b.force && b.visible.from >= c.viewFrom && b.visible.to <= c.viewTo && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo) && c.renderedView == c.view && 0 == Qb(a)) return !1;
                w(a) && (Mb(a), b.dims = H(a));
                var e = d.first + d.size,
                    f = Math.max(b.visible.from - a.options.viewportMargin, d.first),
                    g = Math.min(e, b.visible.to + a.options.viewportMargin);
                c.viewFrom < f && f - c.viewFrom < 20 && (f = Math.max(d.first, c.viewFrom)), c.viewTo > g && c.viewTo - g < 20 && (g = Math.min(e, c.viewTo)), Mf && (f = ud(a.doc, f), g = vd(a.doc, g));
                var h = f != c.viewFrom || g != c.viewTo || c.lastWrapHeight != b.wrapperHeight || c.lastWrapWidth != b.wrapperWidth;
                Pb(a, f, g), c.viewOffset = de(Zd(a.doc, c.viewFrom)), a.display.mover.style.top = c.viewOffset + "px";
                var i = Qb(a);
                if (!h && 0 == i && !b.force && c.renderedView == c.view && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo)) return !1;
                var j = Ue();
                return i > 4 && (c.lineDiv.style.display = "none"), I(a, c.updateLineNumbers, b.dims), i > 4 && (c.lineDiv.style.display = ""), c.renderedView = c.view, j && Ue() != j && j.offsetHeight && j.focus(), Se(c.cursorDiv), Se(c.selectionDiv), c.gutters.style.height = c.sizer.style.minHeight = 0, h && (c.lastWrapHeight = b.wrapperHeight, c.lastWrapWidth = b.wrapperWidth, Na(a, 400)), c.updateLineNumbers = null, !0
            }

            function C(a, b) {
                for (var c = b.viewport, d = !0;
                    (d && a.options.lineWrapping && b.oldDisplayWidth != Va(a) || (c && null != c.top && (c = {
                        top: Math.min(a.doc.height + Sa(a.display) - Wa(a), c.top)
                    }), b.visible = u(a.display, a.doc, c), !(b.visible.from >= a.display.viewFrom && b.visible.to <= a.display.viewTo))) && B(a, b); d = !1) {
                    F(a);
                    var e = o(a);
                    Ia(a), s(a, e), E(a, e)
                }
                b.signal(a, "update", a), a.display.viewFrom == a.display.reportedViewFrom && a.display.viewTo == a.display.reportedViewTo || (b.signal(a, "viewportChange", a, a.display.viewFrom, a.display.viewTo), a.display.reportedViewFrom = a.display.viewFrom, a.display.reportedViewTo = a.display.viewTo)
            }

            function D(a, b) {
                var c = new z(a, b);
                if (B(a, c)) {
                    F(a), C(a, c);
                    var d = o(a);
                    Ia(a), s(a, d), E(a, d), c.finish()
                }
            }

            function E(a, b) {
                a.display.sizer.style.minHeight = b.docHeight + "px", a.display.heightForcer.style.top = b.docHeight + "px", a.display.gutters.style.height = b.docHeight + a.display.barHeight + Ua(a) + "px"
            }

            function F(a) {
                for (var b = a.display, c = b.lineDiv.offsetTop, d = 0; d < b.view.length; d++) {
                    var e, f = b.view[d];
                    if (!f.hidden) {
                        if (uf && vf < 8) {
                            var g = f.node.offsetTop + f.node.offsetHeight;
                            e = g - c, c = g
                        } else {
                            var h = f.node.getBoundingClientRect();
                            e = h.bottom - h.top
                        }
                        var i = f.line.height - e;
                        if (e < 2 && (e = tb(b)), (i > .001 || i < -.001) && (ae(f.line, e), G(f.line), f.rest))
                            for (var j = 0; j < f.rest.length; j++) G(f.rest[j])
                    }
                }
            }

            function G(a) {
                if (a.widgets)
                    for (var b = 0; b < a.widgets.length; ++b) a.widgets[b].height = a.widgets[b].node.parentNode.offsetHeight
            }

            function H(a) {
                for (var b = a.display, c = {}, d = {}, e = b.gutters.clientLeft, f = b.gutters.firstChild, g = 0; f; f = f.nextSibling, ++g) c[a.options.gutters[g]] = f.offsetLeft + f.clientLeft + e, d[a.options.gutters[g]] = f.clientWidth;
                return {
                    fixedPos: y(b),
                    gutterTotalWidth: b.gutters.offsetWidth,
                    gutterLeft: c,
                    gutterWidth: d,
                    wrapperWidth: b.wrapper.clientWidth
                }
            }

            function I(a, b, c) {
                function d(b) {
                    var c = b.nextSibling;
                    return wf && Ff && a.display.currentWheelTarget == b ? b.style.display = "none" : b.parentNode.removeChild(b), c
                }
                for (var e = a.display, f = a.options.lineNumbers, g = e.lineDiv, h = g.firstChild, i = e.view, j = e.viewFrom, k = 0; k < i.length; k++) {
                    var l = i[k];
                    if (l.hidden);
                    else if (l.node && l.node.parentNode == g) {
                        for (; h != l.node;) h = d(h);
                        var m = f && null != b && b <= j && l.lineNumber;
                        l.changes && (He(l.changes, "gutter") > -1 && (m = !1), J(a, l, j, c)), m && (Se(l.lineNumber), l.lineNumber.appendChild(document.createTextNode(x(a.options, j)))), h = l.node.nextSibling
                    } else {
                        var n = R(a, l, j, c);
                        g.insertBefore(n, h)
                    }
                    j += l.size
                }
                for (; h;) h = d(h)
            }

            function J(a, b, c, d) {
                for (var e = 0; e < b.changes.length; e++) {
                    var f = b.changes[e];
                    "text" == f ? N(a, b) : "gutter" == f ? P(a, b, c, d) : "class" == f ? O(b) : "widget" == f && Q(a, b, d)
                }
                b.changes = null
            }

            function K(a) {
                return a.node == a.text && (a.node = Re("div", null, null, "position: relative"), a.text.parentNode && a.text.parentNode.replaceChild(a.node, a.text), a.node.appendChild(a.text), uf && vf < 8 && (a.node.style.zIndex = 2)), a.node
            }

            function L(a) {
                var b = a.bgClass ? a.bgClass + " " + (a.line.bgClass || "") : a.line.bgClass;
                if (b && (b += " CodeMirror-linebackground"), a.background) b ? a.background.className = b : (a.background.parentNode.removeChild(a.background), a.background = null);
                else if (b) {
                    var c = K(a);
                    a.background = c.insertBefore(Re("div", null, b), c.firstChild)
                }
            }

            function M(a, b) {
                var c = a.display.externalMeasured;
                return c && c.line == b.line ? (a.display.externalMeasured = null, b.measure = c.measure, c.built) : Md(a, b)
            }

            function N(a, b) {
                var c = b.text.className,
                    d = M(a, b);
                b.text == b.node && (b.node = d.pre), b.text.parentNode.replaceChild(d.pre, b.text), b.text = d.pre, d.bgClass != b.bgClass || d.textClass != b.textClass ? (b.bgClass = d.bgClass, b.textClass = d.textClass, O(b)) : c && (b.text.className = c)
            }

            function O(a) {
                L(a), a.line.wrapClass ? K(a).className = a.line.wrapClass : a.node != a.text && (a.node.className = "");
                var b = a.textClass ? a.textClass + " " + (a.line.textClass || "") : a.line.textClass;
                a.text.className = b || ""
            }

            function P(a, b, c, d) {
                if (b.gutter && (b.node.removeChild(b.gutter), b.gutter = null), b.gutterBackground && (b.node.removeChild(b.gutterBackground), b.gutterBackground = null), b.line.gutterClass) {
                    var e = K(b);
                    b.gutterBackground = Re("div", null, "CodeMirror-gutter-background " + b.line.gutterClass, "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px; width: " + d.gutterTotalWidth + "px"), e.insertBefore(b.gutterBackground, b.text)
                }
                var f = b.line.gutterMarkers;
                if (a.options.lineNumbers || f) {
                    var e = K(b),
                        g = b.gutter = Re("div", null, "CodeMirror-gutter-wrapper", "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px");
                    if (a.display.input.setUneditable(g), e.insertBefore(g, b.text), b.line.gutterClass && (g.className += " " + b.line.gutterClass), !a.options.lineNumbers || f && f["CodeMirror-linenumbers"] || (b.lineNumber = g.appendChild(Re("div", x(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.display.lineNumInnerWidth + "px"))), f)
                        for (var h = 0; h < a.options.gutters.length; ++h) {
                            var i = a.options.gutters[h],
                                j = f.hasOwnProperty(i) && f[i];
                            j && g.appendChild(Re("div", [j], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[i] + "px; width: " + d.gutterWidth[i] + "px"))
                        }
                }
            }

            function Q(a, b, c) {
                b.alignable && (b.alignable = null);
                for (var d, e = b.node.firstChild; e; e = d) {
                    var d = e.nextSibling;
                    "CodeMirror-linewidget" == e.className && b.node.removeChild(e)
                }
                S(a, b, c)
            }

            function R(a, b, c, d) {
                var e = M(a, b);
                return b.text = b.node = e.pre, e.bgClass && (b.bgClass = e.bgClass), e.textClass && (b.textClass = e.textClass), O(b), P(a, b, c, d), S(a, b, d), b.node
            }

            function S(a, b, c) {
                if (T(a, b.line, b, c, !0), b.rest)
                    for (var d = 0; d < b.rest.length; d++) T(a, b.rest[d], b, c, !1)
            }

            function T(a, b, c, d, e) {
                if (b.widgets)
                    for (var f = K(c), g = 0, h = b.widgets; g < h.length; ++g) {
                        var i = h[g],
                            j = Re("div", [i.node], "CodeMirror-linewidget");
                        i.handleMouseEvents || j.setAttribute("cm-ignore-events", "true"), U(i, j, c, d), a.display.input.setUneditable(j), e && i.above ? f.insertBefore(j, c.gutter || c.text) : f.appendChild(j), ye(i, "redraw")
                    }
            }

            function U(a, b, c, d) {
                if (a.noHScroll) {
                    (c.alignable || (c.alignable = [])).push(b);
                    var e = d.wrapperWidth;
                    b.style.left = d.fixedPos + "px", a.coverGutter || (e -= d.gutterTotalWidth, b.style.paddingLeft = d.gutterTotalWidth + "px"), b.style.width = e + "px"
                }
                a.coverGutter && (b.style.zIndex = 5, b.style.position = "relative", a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
            }

            function V(a) {
                return Nf(a.line, a.ch)
            }

            function W(a, b) {
                return Of(a, b) < 0 ? b : a
            }

            function X(a, b) {
                return Of(a, b) < 0 ? a : b
            }

            function Y(a) {
                a.state.focused || (a.display.input.focus(), rc(a))
            }

            function Z(a, b, c, d, e) {
                var f = a.doc;
                a.display.shift = !1, d || (d = f.sel);
                var g = a.state.pasteIncoming || "paste" == e,
                    h = f.splitLines(b),
                    i = null;
                if (g && d.ranges.length > 1)
                    if (Pf && Pf.text.join("\n") == b) {
                        if (d.ranges.length % Pf.text.length == 0) {
                            i = [];
                            for (var j = 0; j < Pf.text.length; j++) i.push(f.splitLines(Pf.text[j]))
                        }
                    } else h.length == d.ranges.length && (i = Ie(h, function (a) {
                        return [a]
                    }));
                for (var j = d.ranges.length - 1; j >= 0; j--) {
                    var k = d.ranges[j],
                        l = k.from(),
                        m = k.to();
                    k.empty() && (c && c > 0 ? l = Nf(l.line, l.ch - c) : a.state.overwrite && !g ? m = Nf(m.line, Math.min(Zd(f, m.line).text.length, m.ch + Ge(h).length)) : Pf && Pf.lineWise && Pf.text.join("\n") == b && (l = m = Nf(l.line, 0)));
                    var n = a.curOp.updateInput,
                        o = {
                            from: l,
                            to: m,
                            text: i ? i[j % i.length] : h,
                            origin: e || (g ? "paste" : a.state.cutIncoming ? "cut" : "+input")
                        };
                    Ac(a.doc, o), ye(a, "inputRead", a, o)
                }
                b && !g && _(a, b), Mc(a), a.curOp.updateInput = n, a.curOp.typing = !0, a.state.pasteIncoming = a.state.cutIncoming = !1
            }

            function $(a, b) {
                var c = a.clipboardData && a.clipboardData.getData("Text");
                if (c) return a.preventDefault(), b.isReadOnly() || b.options.disableInput || Eb(b, function () {
                    Z(b, c, 0, null, "paste")
                }), !0
            }

            function _(a, b) {
                if (a.options.electricChars && a.options.smartIndent)
                    for (var c = a.doc.sel, d = c.ranges.length - 1; d >= 0; d--) {
                        var e = c.ranges[d];
                        if (!(e.head.ch > 100 || d && c.ranges[d - 1].head.line == e.head.line)) {
                            var f = a.getModeAt(e.head),
                                g = !1;
                            if (f.electricChars) {
                                for (var h = 0; h < f.electricChars.length; h++)
                                    if (b.indexOf(f.electricChars.charAt(h)) > -1) {
                                        g = Oc(a, e.head.line, "smart");
                                        break
                                    }
                            } else f.electricInput && f.electricInput.test(Zd(a.doc, e.head.line).text.slice(0, e.head.ch)) && (g = Oc(a, e.head.line, "smart"));
                            g && ye(a, "electricInput", a, e.head.line)
                        }
                    }
            }

            function aa(a) {
                for (var b = [], c = [], d = 0; d < a.doc.sel.ranges.length; d++) {
                    var e = a.doc.sel.ranges[d].head.line,
                        f = {
                            anchor: Nf(e, 0),
                            head: Nf(e + 1, 0)
                        };
                    c.push(f), b.push(a.getRange(f.anchor, f.head))
                }
                return {
                    text: b,
                    ranges: c
                }
            }

            function ba(a, b) {
                a.setAttribute("autocorrect", "off"), a.setAttribute("autocapitalize", "off"), a.setAttribute("spellcheck", !!b)
            }

            function ca(a) {
                this.cm = a, this.prevInput = "", this.pollingFast = !1, this.polling = new Ee, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
            }

            function da() {
                var a = Re("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                    b = Re("div", [a], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return wf ? a.style.width = "1000px" : a.setAttribute("wrap", "off"), Df && (a.style.border = "1px solid black"), ba(a), b
            }

            function ea(a) {
                this.cm = a, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ee, this.gracePeriod = !1
            }

            function fa(a, b) {
                var c = _a(a, b.line);
                if (!c || c.hidden) return null;
                var d = Zd(a.doc, b.line),
                    e = Ya(c, d, b.line),
                    f = ee(d),
                    g = "left";
                if (f) {
                    var h = lf(f, b.ch);
                    g = h % 2 ? "right" : "left"
                }
                var i = cb(e.map, b.ch, g);
                return i.offset = "right" == i.collapse ? i.end : i.start, i
            }

            function ga(a, b) {
                return b && (a.bad = !0), a
            }

            function ha(a, b, c) {
                var d;
                if (b == a.display.lineDiv) {
                    if (d = a.display.lineDiv.childNodes[c], !d) return ga(a.clipPos(Nf(a.display.viewTo - 1)), !0);
                    b = null, c = 0
                } else
                    for (d = b; ; d = d.parentNode) {
                        if (!d || d == a.display.lineDiv) return null;
                        if (d.parentNode && d.parentNode == a.display.lineDiv) break
                    }
                for (var e = 0; e < a.display.view.length; e++) {
                    var f = a.display.view[e];
                    if (f.node == d) return ia(f, b, c)
                }
            }

            function ia(a, b, c) {
                function d(b, c, d) {
                    for (var e = -1; e < (k ? k.length : 0); e++)
                        for (var f = e < 0 ? j.map : k[e], g = 0; g < f.length; g += 3) {
                            var h = f[g + 2];
                            if (h == b || h == c) {
                                var i = be(e < 0 ? a.line : a.rest[e]),
                                    l = f[g] + d;
                                return (d < 0 || h != b) && (l = f[g + (d ? 1 : 0)]), Nf(i, l)
                            }
                        }
                }
                var e = a.text.firstChild,
                    f = !1;
                if (!b || !Xg(e, b)) return ga(Nf(be(a.line), 0), !0);
                if (b == e && (f = !0, b = e.childNodes[c], c = 0, !b)) {
                    var g = a.rest ? Ge(a.rest) : a.line;
                    return ga(Nf(be(g), g.text.length), f)
                }
                var h = 3 == b.nodeType ? b : null,
                    i = b;
                for (h || 1 != b.childNodes.length || 3 != b.firstChild.nodeType || (h = b.firstChild, c && (c = h.nodeValue.length)); i.parentNode != e;) i = i.parentNode;
                var j = a.measure,
                    k = j.maps,
                    l = d(h, i, c);
                if (l) return ga(l, f);
                for (var m = i.nextSibling, n = h ? h.nodeValue.length - c : 0; m; m = m.nextSibling) {
                    if (l = d(m, m.firstChild, 0)) return ga(Nf(l.line, l.ch - n), f);
                    n += m.textContent.length
                }
                for (var o = i.previousSibling, n = c; o; o = o.previousSibling) {
                    if (l = d(o, o.firstChild, -1)) return ga(Nf(l.line, l.ch + n), f);
                    n += o.textContent.length
                }
            }

            function ja(a, b, c, d, e) {
                function f(a) {
                    return function (b) {
                        return b.id == a
                    }
                }

                function g(b) {
                    if (1 == b.nodeType) {
                        var c = b.getAttribute("cm-text");
                        if (null != c) return "" == c && (c = b.textContent.replace(/\u200b/g, "")), void (h += c);
                        var k, l = b.getAttribute("cm-marker");
                        if (l) {
                            var m = a.findMarks(Nf(d, 0), Nf(e + 1, 0), f(+l));
                            return void (m.length && (k = m[0].find()) && (h += $d(a.doc, k.from, k.to).join(j)))
                        }
                        if ("false" == b.getAttribute("contenteditable")) return;
                        for (var n = 0; n < b.childNodes.length; n++) g(b.childNodes[n]);
                        /^(pre|div|p)$/i.test(b.nodeName) && (i = !0)
                    } else if (3 == b.nodeType) {
                        var o = b.nodeValue;
                        if (!o) return;
                        i && (h += j, i = !1), h += o
                    }
                }
                for (var h = "", i = !1, j = a.doc.lineSeparator(); g(b), b != c;) b = b.nextSibling;
                return h
            }

            function ka(a, b) {
                this.ranges = a, this.primIndex = b
            }

            function la(a, b) {
                this.anchor = a, this.head = b
            }

            function ma(a, b) {
                var c = a[b];
                a.sort(function (a, b) {
                    return Of(a.from(), b.from())
                }), b = He(a, c);
                for (var d = 1; d < a.length; d++) {
                    var e = a[d],
                        f = a[d - 1];
                    if (Of(f.to(), e.from()) >= 0) {
                        var g = X(f.from(), e.from()),
                            h = W(f.to(), e.to()),
                            i = f.empty() ? e.from() == e.head : f.from() == f.head;
                        d <= b && --b, a.splice(--d, 2, new la(i ? h : g, i ? g : h))
                    }
                }
                return new ka(a, b)
            }

            function na(a, b) {
                return new ka([new la(a, b || a)], 0)
            }

            function oa(a, b) {
                return Math.max(a.first, Math.min(b, a.first + a.size - 1))
            }

            function pa(a, b) {
                if (b.line < a.first) return Nf(a.first, 0);
                var c = a.first + a.size - 1;
                return b.line > c ? Nf(c, Zd(a, c).text.length) : qa(b, Zd(a, b.line).text.length)
            }

            function qa(a, b) {
                var c = a.ch;
                return null == c || c > b ? Nf(a.line, b) : c < 0 ? Nf(a.line, 0) : a
            }

            function ra(a, b) {
                return b >= a.first && b < a.first + a.size
            }

            function sa(a, b) {
                for (var c = [], d = 0; d < b.length; d++) c[d] = pa(a, b[d]);
                return c
            }

            function ta(a, b, c, d) {
                if (a.cm && a.cm.display.shift || a.extend) {
                    var e = b.anchor;
                    if (d) {
                        var f = Of(c, e) < 0;
                        f != Of(d, e) < 0 ? (e = c, c = d) : f != Of(c, d) < 0 && (c = d)
                    }
                    return new la(e, c)
                }
                return new la(d || c, c)
            }

            function ua(a, b, c, d) {
                Aa(a, new ka([ta(a, a.sel.primary(), b, c)], 0), d)
            }

            function va(a, b, c) {
                for (var d = [], e = 0; e < a.sel.ranges.length; e++) d[e] = ta(a, a.sel.ranges[e], b[e], null);
                var f = ma(d, a.sel.primIndex);
                Aa(a, f, c)
            }

            function wa(a, b, c, d) {
                var e = a.sel.ranges.slice(0);
                e[b] = c, Aa(a, ma(e, a.sel.primIndex), d)
            }

            function xa(a, b, c, d) {
                Aa(a, na(b, c), d)
            }

            function ya(a, b, c) {
                var d = {
                    ranges: b.ranges,
                    update: function (b) {
                        this.ranges = [];
                        for (var c = 0; c < b.length; c++) this.ranges[c] = new la(pa(a, b[c].anchor), pa(a, b[c].head))
                    },
                    origin: c && c.origin
                };
                return Ig(a, "beforeSelectionChange", a, d), a.cm && Ig(a.cm, "beforeSelectionChange", a.cm, d), d.ranges != b.ranges ? ma(d.ranges, d.ranges.length - 1) : b
            }

            function za(a, b, c) {
                var d = a.history.done,
                    e = Ge(d);
                e && e.ranges ? (d[d.length - 1] = b, Ba(a, b, c)) : Aa(a, b, c)
            }

            function Aa(a, b, c) {
                Ba(a, b, c), le(a, a.sel, a.cm ? a.cm.curOp.id : NaN, c)
            }

            function Ba(a, b, c) {
                (Ce(a, "beforeSelectionChange") || a.cm && Ce(a.cm, "beforeSelectionChange")) && (b = ya(a, b, c));
                var d = c && c.bias || (Of(b.primary().head, a.sel.primary().head) < 0 ? -1 : 1);
                Ca(a, Ea(a, b, d, !0)), c && c.scroll === !1 || !a.cm || Mc(a.cm)
            }

            function Ca(a, b) {
                b.equals(a.sel) || (a.sel = b, a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0, Be(a.cm)), ye(a, "cursorActivity", a))
            }

            function Da(a) {
                Ca(a, Ea(a, a.sel, null, !1), Mg)
            }

            function Ea(a, b, c, d) {
                for (var e, f = 0; f < b.ranges.length; f++) {
                    var g = b.ranges[f],
                        h = b.ranges.length == a.sel.ranges.length && a.sel.ranges[f],
                        i = Ga(a, g.anchor, h && h.anchor, c, d),
                        j = Ga(a, g.head, h && h.head, c, d);
                    (e || i != g.anchor || j != g.head) && (e || (e = b.ranges.slice(0, f)), e[f] = new la(i, j))
                }
                return e ? ma(e, b.primIndex) : b
            }

            function Fa(a, b, c, d, e) {
                var f = Zd(a, b.line);
                if (f.markedSpans)
                    for (var g = 0; g < f.markedSpans.length; ++g) {
                        var h = f.markedSpans[g],
                            i = h.marker;
                        if ((null == h.from || (i.inclusiveLeft ? h.from <= b.ch : h.from < b.ch)) && (null == h.to || (i.inclusiveRight ? h.to >= b.ch : h.to > b.ch))) {
                            if (e && (Ig(i, "beforeCursorEnter"), i.explicitlyCleared)) {
                                if (f.markedSpans) {
                                    --g;
                                    continue
                                }
                                break
                            }
                            if (!i.atomic) continue;
                            if (c) {
                                var j, k = i.find(d < 0 ? 1 : -1);
                                if ((d < 0 ? i.inclusiveRight : i.inclusiveLeft) && (k = Ha(a, k, -d, k && k.line == b.line ? f : null)), k && k.line == b.line && (j = Of(k, c)) && (d < 0 ? j < 0 : j > 0)) return Fa(a, k, b, d, e)
                            }
                            var l = i.find(d < 0 ? -1 : 1);
                            return (d < 0 ? i.inclusiveLeft : i.inclusiveRight) && (l = Ha(a, l, d, l.line == b.line ? f : null)), l ? Fa(a, l, b, d, e) : null
                        }
                    }
                return b
            }

            function Ga(a, b, c, d, e) {
                var f = d || 1,
                    g = Fa(a, b, c, f, e) || !e && Fa(a, b, c, f, !0) || Fa(a, b, c, -f, e) || !e && Fa(a, b, c, -f, !0);
                return g ? g : (a.cantEdit = !0, Nf(a.first, 0))
            }

            function Ha(a, b, c, d) {
                return c < 0 && 0 == b.ch ? b.line > a.first ? pa(a, Nf(b.line - 1)) : null : c > 0 && b.ch == (d || Zd(a, b.line)).text.length ? b.line < a.first + a.size - 1 ? Nf(b.line + 1, 0) : null : new Nf(b.line, b.ch + c)
            }

            function Ia(a) {
                a.display.input.showSelection(a.display.input.prepareSelection())
            }

            function Ja(a, b) {
                for (var c = a.doc, d = {}, e = d.cursors = document.createDocumentFragment(), f = d.selection = document.createDocumentFragment(), g = 0; g < c.sel.ranges.length; g++)
                    if (b !== !1 || g != c.sel.primIndex) {
                        var h = c.sel.ranges[g];
                        if (!(h.from().line >= a.display.viewTo || h.to().line < a.display.viewFrom)) {
                            var i = h.empty();
                            (i || a.options.showCursorWhenSelecting) && Ka(a, h.head, e), i || La(a, h, f)
                        }
                    }
                return d
            }

            function Ka(a, b, c) {
                var d = ob(a, b, "div", null, null, !a.options.singleCursorHeightPerLine),
                    e = c.appendChild(Re("div", " ", "CodeMirror-cursor"));
                if (e.style.left = d.left + "px", e.style.top = d.top + "px", e.style.height = Math.max(0, d.bottom - d.top) * a.options.cursorHeight + "px", d.other) {
                    var f = c.appendChild(Re("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    f.style.display = "", f.style.left = d.other.left + "px", f.style.top = d.other.top + "px", f.style.height = .85 * (d.other.bottom - d.other.top) + "px"
                }
            }

            function La(a, b, c) {
                function d(a, b, c, d) {
                    b < 0 && (b = 0), b = Math.round(b), d = Math.round(d), h.appendChild(Re("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? k - a : c) + "px; height: " + (d - b) + "px"))
                }

                function e(b, c, e) {
                    function f(c, d) {
                        return nb(a, Nf(b, c), "div", l, d)
                    }
                    var h, i, l = Zd(g, b),
                        m = l.text.length;
                    return bf(ee(l), c || 0, null == e ? m : e, function (a, b, g) {
                        var l, n, o, p = f(a, "left");
                        if (a == b) l = p, n = o = p.left;
                        else {
                            if (l = f(b - 1, "right"), "rtl" == g) {
                                var q = p;
                                p = l, l = q
                            }
                            n = p.left, o = l.right
                        }
                        null == c && 0 == a && (n = j), l.top - p.top > 3 && (d(n, p.top, null, p.bottom), n = j, p.bottom < l.top && d(n, p.bottom, null, l.top)), null == e && b == m && (o = k), (!h || p.top < h.top || p.top == h.top && p.left < h.left) && (h = p), (!i || l.bottom > i.bottom || l.bottom == i.bottom && l.right > i.right) && (i = l), n < j + 1 && (n = j), d(n, l.top, o - n, l.bottom)
                    }), {
                            start: h,
                            end: i
                        }
                }
                var f = a.display,
                    g = a.doc,
                    h = document.createDocumentFragment(),
                    i = Ta(a.display),
                    j = i.left,
                    k = Math.max(f.sizerWidth, Va(a) - f.sizer.offsetLeft) - i.right,
                    l = b.from(),
                    m = b.to();
                if (l.line == m.line) e(l.line, l.ch, m.ch);
                else {
                    var n = Zd(g, l.line),
                        o = Zd(g, m.line),
                        p = sd(n) == sd(o),
                        q = e(l.line, l.ch, p ? n.text.length + 1 : null).end,
                        r = e(m.line, p ? 0 : null, m.ch).start;
                    p && (q.top < r.top - 2 ? (d(q.right, q.top, null, q.bottom), d(j, r.top, r.left, r.bottom)) : d(q.right, q.top, r.left - q.right, q.bottom)), q.bottom < r.top && d(j, q.bottom, null, r.top)
                }
                c.appendChild(h)
            }

            function Ma(a) {
                if (a.state.focused) {
                    var b = a.display;
                    clearInterval(b.blinker);
                    var c = !0;
                    b.cursorDiv.style.visibility = "", a.options.cursorBlinkRate > 0 ? b.blinker = setInterval(function () {
                        b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden"
                    }, a.options.cursorBlinkRate) : a.options.cursorBlinkRate < 0 && (b.cursorDiv.style.visibility = "hidden")
                }
            }

            function Na(a, b) {
                a.doc.mode.startState && a.doc.frontier < a.display.viewTo && a.state.highlight.set(b, Ne(Oa, a))
            }

            function Oa(a) {
                var b = a.doc;
                if (b.frontier < b.first && (b.frontier = b.first), !(b.frontier >= a.display.viewTo)) {
                    var c = +new Date + a.options.workTime,
                        d = jg(b.mode, Qa(a, b.frontier)),
                        e = [];
                    b.iter(b.frontier, Math.min(b.first + b.size, a.display.viewTo + 500), function (f) {
                        if (b.frontier >= a.display.viewFrom) {
                            var g = f.styles,
                                h = f.text.length > a.options.maxHighlightLength,
                                i = Id(a, f, h ? jg(b.mode, d) : d, !0);
                            f.styles = i.styles;
                            var j = f.styleClasses,
                                k = i.classes;
                            k ? f.styleClasses = k : j && (f.styleClasses = null);
                            for (var l = !g || g.length != f.styles.length || j != k && (!j || !k || j.bgClass != k.bgClass || j.textClass != k.textClass), m = 0; !l && m < g.length; ++m) l = g[m] != f.styles[m];
                            l && e.push(b.frontier), f.stateAfter = h ? d : jg(b.mode, d)
                        } else f.text.length <= a.options.maxHighlightLength && Kd(a, f.text, d), f.stateAfter = b.frontier % 5 == 0 ? jg(b.mode, d) : null;
                        if (++b.frontier, +new Date > c) return Na(a, a.options.workDelay), !0
                    }), e.length && Eb(a, function () {
                        for (var b = 0; b < e.length; b++) Lb(a, e[b], "text")
                    })
                }
            }

            function Pa(a, b, c) {
                for (var d, e, f = a.doc, g = c ? -1 : b - (a.doc.mode.innerMode ? 1e3 : 100), h = b; h > g; --h) {
                    if (h <= f.first) return f.first;
                    var i = Zd(f, h - 1);
                    if (i.stateAfter && (!c || h <= f.frontier)) return h;
                    var j = Pg(i.text, null, a.options.tabSize);
                    (null == e || d > j) && (e = h - 1, d = j)
                }
                return e
            }

            function Qa(a, b, c) {
                var d = a.doc,
                    e = a.display;
                if (!d.mode.startState) return !0;
                var f = Pa(a, b, c),
                    g = f > d.first && Zd(d, f - 1).stateAfter;
                return g = g ? jg(d.mode, g) : kg(d.mode), d.iter(f, b, function (c) {
                    Kd(a, c.text, g);
                    var h = f == b - 1 || f % 5 == 0 || f >= e.viewFrom && f < e.viewTo;
                    c.stateAfter = h ? jg(d.mode, g) : null, ++f
                }), c && (d.frontier = f), g
            }

            function Ra(a) {
                return a.lineSpace.offsetTop
            }

            function Sa(a) {
                return a.mover.offsetHeight - a.lineSpace.offsetHeight
            }

            function Ta(a) {
                if (a.cachedPaddingH) return a.cachedPaddingH;
                var b = Te(a.measure, Re("pre", "x")),
                    c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle,
                    d = {
                        left: parseInt(c.paddingLeft),
                        right: parseInt(c.paddingRight)
                    };
                return isNaN(d.left) || isNaN(d.right) || (a.cachedPaddingH = d), d
            }

            function Ua(a) {
                return Kg - a.display.nativeBarWidth
            }

            function Va(a) {
                return a.display.scroller.clientWidth - Ua(a) - a.display.barWidth
            }

            function Wa(a) {
                return a.display.scroller.clientHeight - Ua(a) - a.display.barHeight
            }

            function Xa(a, b, c) {
                var d = a.options.lineWrapping,
                    e = d && Va(a);
                if (!b.measure.heights || d && b.measure.width != e) {
                    var f = b.measure.heights = [];
                    if (d) {
                        b.measure.width = e;
                        for (var g = b.text.firstChild.getClientRects(), h = 0; h < g.length - 1; h++) {
                            var i = g[h],
                                j = g[h + 1];
                            Math.abs(i.bottom - j.bottom) > 2 && f.push((i.bottom + j.top) / 2 - c.top)
                        }
                    }
                    f.push(c.bottom - c.top)
                }
            }

            function Ya(a, b, c) {
                if (a.line == b) return {
                    map: a.measure.map,
                    cache: a.measure.cache
                };
                for (var d = 0; d < a.rest.length; d++)
                    if (a.rest[d] == b) return {
                        map: a.measure.maps[d],
                        cache: a.measure.caches[d]
                    };
                for (var d = 0; d < a.rest.length; d++)
                    if (be(a.rest[d]) > c) return {
                        map: a.measure.maps[d],
                        cache: a.measure.caches[d],
                        before: !0
                    }
            }

            function Za(a, b) {
                b = sd(b);
                var c = be(b),
                    d = a.display.externalMeasured = new Ib(a.doc, b, c);
                d.lineN = c;
                var e = d.built = Md(a, d);
                return d.text = e.pre, Te(a.display.lineMeasure, e.pre), d
            }

            function $a(a, b, c, d) {
                return bb(a, ab(a, b), c, d)
            }

            function _a(a, b) {
                if (b >= a.display.viewFrom && b < a.display.viewTo) return a.display.view[Nb(a, b)];
                var c = a.display.externalMeasured;
                return c && b >= c.lineN && b < c.lineN + c.size ? c : void 0
            }

            function ab(a, b) {
                var c = be(b),
                    d = _a(a, c);
                d && !d.text ? d = null : d && d.changes && (J(a, d, c, H(a)), a.curOp.forceUpdate = !0), d || (d = Za(a, b));
                var e = Ya(d, b, c);
                return {
                    line: b,
                    view: d,
                    rect: null,
                    map: e.map,
                    cache: e.cache,
                    before: e.before,
                    hasHeights: !1
                }
            }

            function bb(a, b, c, d, e) {
                b.before && (c = -1);
                var f, g = c + (d || "");
                return b.cache.hasOwnProperty(g) ? f = b.cache[g] : (b.rect || (b.rect = b.view.text.getBoundingClientRect()), b.hasHeights || (Xa(a, b.view, b.rect), b.hasHeights = !0), f = eb(a, b, c, d), f.bogus || (b.cache[g] = f)), {
                    left: f.left,
                    right: f.right,
                    top: e ? f.rtop : f.top,
                    bottom: e ? f.rbottom : f.bottom
                }
            }

            function cb(a, b, c) {
                for (var d, e, f, g, h = 0; h < a.length; h += 3) {
                    var i = a[h],
                        j = a[h + 1];
                    if (b < i ? (e = 0, f = 1, g = "left") : b < j ? (e = b - i, f = e + 1) : (h == a.length - 3 || b == j && a[h + 3] > b) && (f = j - i, e = f - 1, b >= j && (g = "right")), null != e) {
                        if (d = a[h + 2], i == j && c == (d.insertLeft ? "left" : "right") && (g = c), "left" == c && 0 == e)
                            for (; h && a[h - 2] == a[h - 3] && a[h - 1].insertLeft;) d = a[(h -= 3) + 2], g = "left";
                        if ("right" == c && e == j - i)
                            for (; h < a.length - 3 && a[h + 3] == a[h + 4] && !a[h + 5].insertLeft;) d = a[(h += 3) + 2], g = "right";
                        break
                    }
                }
                return {
                    node: d,
                    start: e,
                    end: f,
                    collapse: g,
                    coverStart: i,
                    coverEnd: j
                }
            }

            function db(a, b) {
                var c = Tf;
                if ("left" == b)
                    for (var d = 0; d < a.length && (c = a[d]).left == c.right; d++);
                else
                    for (var d = a.length - 1; d >= 0 && (c = a[d]).left == c.right; d--);
                return c
            }

            function eb(a, b, c, d) {
                var e, f = cb(b.map, c, d),
                    g = f.node,
                    h = f.start,
                    i = f.end,
                    j = f.collapse;
                if (3 == g.nodeType) {
                    for (var k = 0; k < 4; k++) {
                        for (; h && Qe(b.line.text.charAt(f.coverStart + h));)--h;
                        for (; f.coverStart + i < f.coverEnd && Qe(b.line.text.charAt(f.coverStart + i));)++i;
                        if (e = uf && vf < 9 && 0 == h && i == f.coverEnd - f.coverStart ? g.parentNode.getBoundingClientRect() : db(Tg(g, h, i).getClientRects(), d), e.left || e.right || 0 == h) break;
                        i = h, h -= 1, j = "right"
                    }
                    uf && vf < 11 && (e = fb(a.display.measure, e))
                } else {
                    h > 0 && (j = d = "right");
                    var l;
                    e = a.options.lineWrapping && (l = g.getClientRects()).length > 1 ? l["right" == d ? l.length - 1 : 0] : g.getBoundingClientRect()
                }
                if (uf && vf < 9 && !h && (!e || !e.left && !e.right)) {
                    var m = g.parentNode.getClientRects()[0];
                    e = m ? {
                        left: m.left,
                        right: m.left + ub(a.display),
                        top: m.top,
                        bottom: m.bottom
                    } : Tf
                }
                for (var n = e.top - b.rect.top, o = e.bottom - b.rect.top, p = (n + o) / 2, q = b.view.measure.heights, k = 0; k < q.length - 1 && !(p < q[k]); k++);
                var r = k ? q[k - 1] : 0,
                    s = q[k],
                    t = {
                        left: ("right" == j ? e.right : e.left) - b.rect.left,
                        right: ("left" == j ? e.left : e.right) - b.rect.left,
                        top: r,
                        bottom: s
                    };
                return e.left || e.right || (t.bogus = !0), a.options.singleCursorHeightPerLine || (t.rtop = n, t.rbottom = o), t
            }

            function fb(a, b) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !af(a)) return b;
                var c = screen.logicalXDPI / screen.deviceXDPI,
                    d = screen.logicalYDPI / screen.deviceYDPI;
                return {
                    left: b.left * c,
                    right: b.right * c,
                    top: b.top * d,
                    bottom: b.bottom * d
                }
            }

            function gb(a) {
                if (a.measure && (a.measure.cache = {}, a.measure.heights = null, a.rest))
                    for (var b = 0; b < a.rest.length; b++) a.measure.caches[b] = {}
            }

            function hb(a) {
                a.display.externalMeasure = null, Se(a.display.lineMeasure);
                for (var b = 0; b < a.display.view.length; b++) gb(a.display.view[b])
            }

            function ib(a) {
                hb(a), a.display.cachedCharWidth = a.display.cachedTextHeight = a.display.cachedPaddingH = null, a.options.lineWrapping || (a.display.maxLineChanged = !0), a.display.lineNumChars = null
            }

            function jb() {
                return window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }

            function kb() {
                return window.pageYOffset || (document.documentElement || document.body).scrollTop
            }

            function lb(a, b, c, d) {
                if (b.widgets)
                    for (var e = 0; e < b.widgets.length; ++e)
                        if (b.widgets[e].above) {
                            var f = zd(b.widgets[e]);
                            c.top += f, c.bottom += f
                        }
                if ("line" == d) return c;
                d || (d = "local");
                var g = de(b);
                if ("local" == d ? g += Ra(a.display) : g -= a.display.viewOffset, "page" == d || "window" == d) {
                    var h = a.display.lineSpace.getBoundingClientRect();
                    g += h.top + ("window" == d ? 0 : kb());
                    var i = h.left + ("window" == d ? 0 : jb());
                    c.left += i, c.right += i
                }
                return c.top += g, c.bottom += g, c
            }

            function mb(a, b, c) {
                if ("div" == c) return b;
                var d = b.left,
                    e = b.top;
                if ("page" == c) d -= jb(), e -= kb();
                else if ("local" == c || !c) {
                    var f = a.display.sizer.getBoundingClientRect();
                    d += f.left, e += f.top
                }
                var g = a.display.lineSpace.getBoundingClientRect();
                return {
                    left: d - g.left,
                    top: e - g.top
                }
            }

            function nb(a, b, c, d, e) {
                return d || (d = Zd(a.doc, b.line)), lb(a, d, $a(a, d, b.ch, e), c)
            }

            function ob(a, b, c, d, e, f) {
                function g(b, g) {
                    var h = bb(a, e, b, g ? "right" : "left", f);
                    return g ? h.left = h.right : h.right = h.left, lb(a, d, h, c)
                }

                function h(a, b) {
                    var c = i[b],
                        d = c.level % 2;
                    return a == cf(c) && b && c.level < i[b - 1].level ? (c = i[--b], a = df(c) - (c.level % 2 ? 0 : 1), d = !0) : a == df(c) && b < i.length - 1 && c.level < i[b + 1].level && (c = i[++b], a = cf(c) - c.level % 2, d = !1), d && a == c.to && a > c.from ? g(a - 1) : g(a, d)
                }
                d = d || Zd(a.doc, b.line), e || (e = ab(a, d));
                var i = ee(d),
                    j = b.ch;
                if (!i) return g(j);
                var k = lf(i, j),
                    l = h(j, k);
                return null != hh && (l.other = h(j, hh)), l
            }

            function pb(a, b) {
                var c = 0,
                    b = pa(a.doc, b);
                a.options.lineWrapping || (c = ub(a.display) * b.ch);
                var d = Zd(a.doc, b.line),
                    e = de(d) + Ra(a.display);
                return {
                    left: c,
                    right: c,
                    top: e,
                    bottom: e + d.height
                }
            }

            function qb(a, b, c, d) {
                var e = Nf(a, b);
                return e.xRel = d, c && (e.outside = !0), e
            }

            function rb(a, b, c) {
                var d = a.doc;
                if (c += a.display.viewOffset, c < 0) return qb(d.first, 0, !0, -1);
                var e = ce(d, c),
                    f = d.first + d.size - 1;
                if (e > f) return qb(d.first + d.size - 1, Zd(d, f).text.length, !0, 1);
                b < 0 && (b = 0);
                for (var g = Zd(d, e); ;) {
                    var h = sb(a, g, e, b, c),
                        i = qd(g),
                        j = i && i.find(0, !0);
                    if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0)) return h;
                    e = be(g = j.to.line)
                }
            }

            function sb(a, b, c, d, e) {
                function f(d) {
                    var e = ob(a, Nf(c, d), "line", b, j);
                    return h = !0, g > e.bottom ? e.left - i : g < e.top ? e.left + i : (h = !1, e.left)
                }
                var g = e - de(b),
                    h = !1,
                    i = 2 * a.display.wrapper.clientWidth,
                    j = ab(a, b),
                    k = ee(b),
                    l = b.text.length,
                    m = ef(b),
                    n = ff(b),
                    o = f(m),
                    p = h,
                    q = f(n),
                    r = h;
                if (d > q) return qb(c, n, r, 1);
                for (; ;) {
                    if (k ? n == m || n == nf(b, m, 1) : n - m <= 1) {
                        var s = d < o || d - o <= q - d ? m : n,
                            t = s == m ? p : r,
                            u = d - (s == m ? o : q);
                        if (r && !k && !/\s/.test(b.text.charAt(s)) && u > 0 && s < b.text.length && j.view.measure.heights.length > 1) {
                            var v = bb(a, j, s, "right");
                            g <= v.bottom && g >= v.top && Math.abs(d - v.right) < u && (t = !1, s++ , u = d - v.right)
                        }
                        for (; Qe(b.text.charAt(s));)++s;
                        var w = qb(c, s, t, u < -1 ? -1 : u > 1 ? 1 : 0);
                        return w
                    }
                    var x = Math.ceil(l / 2),
                        y = m + x;
                    if (k) {
                        y = m;
                        for (var z = 0; z < x; ++z) y = nf(b, y, 1)
                    }
                    var A = f(y);
                    A > d ? (n = y, q = A, (r = h) && (q += 1e3), l = x) : (m = y, o = A, p = h, l -= x)
                }
            }

            function tb(a) {
                if (null != a.cachedTextHeight) return a.cachedTextHeight;
                if (null == Qf) {
                    Qf = Re("pre");
                    for (var b = 0; b < 49; ++b) Qf.appendChild(document.createTextNode("x")), Qf.appendChild(Re("br"));
                    Qf.appendChild(document.createTextNode("x"))
                }
                Te(a.measure, Qf);
                var c = Qf.offsetHeight / 50;
                return c > 3 && (a.cachedTextHeight = c), Se(a.measure), c || 1
            }

            function ub(a) {
                if (null != a.cachedCharWidth) return a.cachedCharWidth;
                var b = Re("span", "xxxxxxxxxx"),
                    c = Re("pre", [b]);
                Te(a.measure, c);
                var d = b.getBoundingClientRect(),
                    e = (d.right - d.left) / 10;
                return e > 2 && (a.cachedCharWidth = e), e || 10
            }

            function vb(a) {
                a.curOp = {
                    cm: a,
                    viewChanged: !1,
                    startHeight: a.doc.height,
                    forceUpdate: !1,
                    updateInput: null,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++Vf
                }, Uf ? Uf.ops.push(a.curOp) : a.curOp.ownsGroup = Uf = {
                    ops: [a.curOp],
                    delayedCallbacks: []
                }
            }

            function wb(a) {
                var b = a.delayedCallbacks,
                    c = 0;
                do {
                    for (; c < b.length; c++) b[c].call(null);
                    for (var d = 0; d < a.ops.length; d++) {
                        var e = a.ops[d];
                        if (e.cursorActivityHandlers)
                            for (; e.cursorActivityCalled < e.cursorActivityHandlers.length;) e.cursorActivityHandlers[e.cursorActivityCalled++].call(null, e.cm)
                    }
                } while (c < b.length)
            }

            function xb(a) {
                var b = a.curOp,
                    c = b.ownsGroup;
                if (c) try {
                    wb(c)
                } finally {
                        Uf = null;
                        for (var d = 0; d < c.ops.length; d++) c.ops[d].cm.curOp = null;
                        yb(c)
                    }
            }

            function yb(a) {
                for (var b = a.ops, c = 0; c < b.length; c++) zb(b[c]);
                for (var c = 0; c < b.length; c++) Ab(b[c]);
                for (var c = 0; c < b.length; c++) Bb(b[c]);
                for (var c = 0; c < b.length; c++) Cb(b[c]);
                for (var c = 0; c < b.length; c++) Db(b[c])
            }

            function zb(a) {
                var b = a.cm,
                    c = b.display;
                A(b), a.updateMaxLine && m(b), a.mustUpdate = a.viewChanged || a.forceUpdate || null != a.scrollTop || a.scrollToPos && (a.scrollToPos.from.line < c.viewFrom || a.scrollToPos.to.line >= c.viewTo) || c.maxLineChanged && b.options.lineWrapping, a.update = a.mustUpdate && new z(b, a.mustUpdate && {
                    top: a.scrollTop,
                    ensure: a.scrollToPos
                }, a.forceUpdate)
            }

            function Ab(a) {
                a.updatedDisplay = a.mustUpdate && B(a.cm, a.update)
            }

            function Bb(a) {
                var b = a.cm,
                    c = b.display;
                a.updatedDisplay && F(b), a.barMeasure = o(b), c.maxLineChanged && !b.options.lineWrapping && (a.adjustWidthTo = $a(b, c.maxLine, c.maxLine.text.length).left + 3, b.display.sizerWidth = a.adjustWidthTo, a.barMeasure.scrollWidth = Math.max(c.scroller.clientWidth, c.sizer.offsetLeft + a.adjustWidthTo + Ua(b) + b.display.barWidth), a.maxScrollLeft = Math.max(0, c.sizer.offsetLeft + a.adjustWidthTo - Va(b))), (a.updatedDisplay || a.selectionChanged) && (a.preparedSelection = c.input.prepareSelection(a.focus))
            }

            function Cb(a) {
                var b = a.cm;
                null != a.adjustWidthTo && (b.display.sizer.style.minWidth = a.adjustWidthTo + "px", a.maxScrollLeft < b.doc.scrollLeft && fc(b, Math.min(b.display.scroller.scrollLeft, a.maxScrollLeft), !0), b.display.maxLineChanged = !1);
                var c = a.focus && a.focus == Ue() && (!document.hasFocus || document.hasFocus());
                a.preparedSelection && b.display.input.showSelection(a.preparedSelection, c), (a.updatedDisplay || a.startHeight != b.doc.height) && s(b, a.barMeasure), a.updatedDisplay && E(b, a.barMeasure), a.selectionChanged && Ma(b), b.state.focused && a.updateInput && b.display.input.reset(a.typing), c && Y(a.cm)
            }

            function Db(a) {
                var b = a.cm,
                    c = b.display,
                    d = b.doc;
                if (a.updatedDisplay && C(b, a.update), null == c.wheelStartX || null == a.scrollTop && null == a.scrollLeft && !a.scrollToPos || (c.wheelStartX = c.wheelStartY = null), null == a.scrollTop || c.scroller.scrollTop == a.scrollTop && !a.forceScroll || (d.scrollTop = Math.max(0, Math.min(c.scroller.scrollHeight - c.scroller.clientHeight, a.scrollTop)), c.scrollbars.setScrollTop(d.scrollTop), c.scroller.scrollTop = d.scrollTop), null == a.scrollLeft || c.scroller.scrollLeft == a.scrollLeft && !a.forceScroll || (d.scrollLeft = Math.max(0, Math.min(c.scroller.scrollWidth - c.scroller.clientWidth, a.scrollLeft)), c.scrollbars.setScrollLeft(d.scrollLeft), c.scroller.scrollLeft = d.scrollLeft, v(b)), a.scrollToPos) {
                    var e = Ic(b, pa(d, a.scrollToPos.from), pa(d, a.scrollToPos.to), a.scrollToPos.margin);
                    a.scrollToPos.isCursor && b.state.focused && Hc(b, e)
                }
                var f = a.maybeHiddenMarkers,
                    g = a.maybeUnhiddenMarkers;
                if (f)
                    for (var h = 0; h < f.length; ++h) f[h].lines.length || Ig(f[h], "hide");
                if (g)
                    for (var h = 0; h < g.length; ++h) g[h].lines.length && Ig(g[h], "unhide");
                c.wrapper.offsetHeight && (d.scrollTop = b.display.scroller.scrollTop), a.changeObjs && Ig(b, "changes", b, a.changeObjs), a.update && a.update.finish()
            }

            function Eb(a, b) {
                if (a.curOp) return b();
                vb(a);
                try {
                    return b()
                } finally {
                    xb(a)
                }
            }

            function Fb(a, b) {
                return function () {
                    if (a.curOp) return b.apply(a, arguments);
                    vb(a);
                    try {
                        return b.apply(a, arguments)
                    } finally {
                        xb(a)
                    }
                }
            }

            function Gb(a) {
                return function () {
                    if (this.curOp) return a.apply(this, arguments);
                    vb(this);
                    try {
                        return a.apply(this, arguments)
                    } finally {
                        xb(this)
                    }
                }
            }

            function Hb(a) {
                return function () {
                    var b = this.cm;
                    if (!b || b.curOp) return a.apply(this, arguments);
                    vb(b);
                    try {
                        return a.apply(this, arguments)
                    } finally {
                        xb(b)
                    }
                }
            }

            function Ib(a, b, c) {
                this.line = b, this.rest = td(b), this.size = this.rest ? be(Ge(this.rest)) - c + 1 : 1, this.node = this.text = null, this.hidden = wd(a, b)
            }

            function Jb(a, b, c) {
                for (var d, e = [], f = b; f < c; f = d) {
                    var g = new Ib(a.doc, Zd(a.doc, f), f);
                    d = f + g.size, e.push(g)
                }
                return e
            }

            function Kb(a, b, c, d) {
                null == b && (b = a.doc.first), null == c && (c = a.doc.first + a.doc.size), d || (d = 0);
                var e = a.display;
                if (d && c < e.viewTo && (null == e.updateLineNumbers || e.updateLineNumbers > b) && (e.updateLineNumbers = b), a.curOp.viewChanged = !0, b >= e.viewTo) Mf && ud(a.doc, b) < e.viewTo && Mb(a);
                else if (c <= e.viewFrom) Mf && vd(a.doc, c + d) > e.viewFrom ? Mb(a) : (e.viewFrom += d, e.viewTo += d);
                else if (b <= e.viewFrom && c >= e.viewTo) Mb(a);
                else if (b <= e.viewFrom) {
                    var f = Ob(a, c, c + d, 1);
                    f ? (e.view = e.view.slice(f.index), e.viewFrom = f.lineN, e.viewTo += d) : Mb(a)
                } else if (c >= e.viewTo) {
                    var f = Ob(a, b, b, -1);
                    f ? (e.view = e.view.slice(0, f.index), e.viewTo = f.lineN) : Mb(a)
                } else {
                    var g = Ob(a, b, b, -1),
                        h = Ob(a, c, c + d, 1);
                    g && h ? (e.view = e.view.slice(0, g.index).concat(Jb(a, g.lineN, h.lineN)).concat(e.view.slice(h.index)), e.viewTo += d) : Mb(a)
                }
                var i = e.externalMeasured;
                i && (c < i.lineN ? i.lineN += d : b < i.lineN + i.size && (e.externalMeasured = null))
            }

            function Lb(a, b, c) {
                a.curOp.viewChanged = !0;
                var d = a.display,
                    e = a.display.externalMeasured;
                if (e && b >= e.lineN && b < e.lineN + e.size && (d.externalMeasured = null), !(b < d.viewFrom || b >= d.viewTo)) {
                    var f = d.view[Nb(a, b)];
                    if (null != f.node) {
                        var g = f.changes || (f.changes = []);
                        He(g, c) == -1 && g.push(c)
                    }
                }
            }

            function Mb(a) {
                a.display.viewFrom = a.display.viewTo = a.doc.first, a.display.view = [], a.display.viewOffset = 0
            }

            function Nb(a, b) {
                if (b >= a.display.viewTo) return null;
                if (b -= a.display.viewFrom, b < 0) return null;
                for (var c = a.display.view, d = 0; d < c.length; d++)
                    if (b -= c[d].size, b < 0) return d
            }

            function Ob(a, b, c, d) {
                var e, f = Nb(a, b),
                    g = a.display.view;
                if (!Mf || c == a.doc.first + a.doc.size) return {
                    index: f,
                    lineN: c
                };
                for (var h = 0, i = a.display.viewFrom; h < f; h++) i += g[h].size;
                if (i != b) {
                    if (d > 0) {
                        if (f == g.length - 1) return null;
                        e = i + g[f].size - b, f++
                    } else e = i - b;
                    b += e, c += e
                }
                for (; ud(a.doc, c) != c;) {
                    if (f == (d < 0 ? 0 : g.length - 1)) return null;
                    c += d * g[f - (d < 0 ? 1 : 0)].size, f += d
                }
                return {
                    index: f,
                    lineN: c
                }
            }

            function Pb(a, b, c) {
                var d = a.display,
                    e = d.view;
                0 == e.length || b >= d.viewTo || c <= d.viewFrom ? (d.view = Jb(a, b, c), d.viewFrom = b) : (d.viewFrom > b ? d.view = Jb(a, b, d.viewFrom).concat(d.view) : d.viewFrom < b && (d.view = d.view.slice(Nb(a, b))), d.viewFrom = b, d.viewTo < c ? d.view = d.view.concat(Jb(a, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, Nb(a, c)))), d.viewTo = c
            }

            function Qb(a) {
                for (var b = a.display.view, c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.hidden || e.node && !e.changes || ++c
                }
                return c
            }

            function Rb(a) {
                function b() {
                    e.activeTouch && (f = setTimeout(function () {
                        e.activeTouch = null
                    }, 1e3), g = e.activeTouch, g.end = +new Date)
                }

                function c(a) {
                    if (1 != a.touches.length) return !1;
                    var b = a.touches[0];
                    return b.radiusX <= 1 && b.radiusY <= 1
                }

                function d(a, b) {
                    if (null == b.left) return !0;
                    var c = b.left - a.left,
                        d = b.top - a.top;
                    return c * c + d * d > 400
                }
                var e = a.display;
                Fg(e.scroller, "mousedown", Fb(a, Wb)), uf && vf < 11 ? Fg(e.scroller, "dblclick", Fb(a, function (b) {
                    if (!Ae(a, b)) {
                        var c = Vb(a, b);
                        if (c && !_b(a, b) && !Ub(a.display, b)) {
                            Cg(b);
                            var d = a.findWordAt(c);
                            ua(a.doc, d.anchor, d.head)
                        }
                    }
                })) : Fg(e.scroller, "dblclick", function (b) {
                    Ae(a, b) || Cg(b)
                }), Kf || Fg(e.scroller, "contextmenu", function (b) {
                    tc(a, b)
                });
                var f, g = {
                    end: 0
                };
                Fg(e.scroller, "touchstart", function (b) {
                    if (!Ae(a, b) && !c(b)) {
                        clearTimeout(f);
                        var d = +new Date;
                        e.activeTouch = {
                            start: d,
                            moved: !1,
                            prev: d - g.end <= 300 ? g : null
                        }, 1 == b.touches.length && (e.activeTouch.left = b.touches[0].pageX, e.activeTouch.top = b.touches[0].pageY)
                    }
                }), Fg(e.scroller, "touchmove", function () {
                    e.activeTouch && (e.activeTouch.moved = !0)
                }), Fg(e.scroller, "touchend", function (c) {
                    var f = e.activeTouch;
                    if (f && !Ub(e, c) && null != f.left && !f.moved && new Date - f.start < 300) {
                        var g, h = a.coordsChar(e.activeTouch, "page");
                        g = !f.prev || d(f, f.prev) ? new la(h, h) : !f.prev.prev || d(f, f.prev.prev) ? a.findWordAt(h) : new la(Nf(h.line, 0), pa(a.doc, Nf(h.line + 1, 0))), a.setSelection(g.anchor, g.head), a.focus(), Cg(c)
                    }
                    b()
                }), Fg(e.scroller, "touchcancel", b), Fg(e.scroller, "scroll", function () {
                    e.scroller.clientHeight && (ec(a, e.scroller.scrollTop), fc(a, e.scroller.scrollLeft, !0), Ig(a, "scroll", a))
                }), Fg(e.scroller, "mousewheel", function (b) {
                    gc(a, b)
                }), Fg(e.scroller, "DOMMouseScroll", function (b) {
                    gc(a, b)
                }), Fg(e.wrapper, "scroll", function () {
                    e.wrapper.scrollTop = e.wrapper.scrollLeft = 0
                }), e.dragFunctions = {
                    enter: function (b) {
                        Ae(a, b) || Eg(b)
                    },
                    over: function (b) {
                        Ae(a, b) || (cc(a, b), Eg(b))
                    },
                    start: function (b) {
                        bc(a, b)
                    },
                    drop: Fb(a, ac),
                    leave: function (b) {
                        Ae(a, b) || dc(a)
                    }
                };
                var h = e.input.getField();
                Fg(h, "keyup", function (b) {
                    oc.call(a, b)
                }), Fg(h, "keydown", Fb(a, mc)), Fg(h, "keypress", Fb(a, pc)), Fg(h, "focus", function (b) {
                    rc(a, b)
                }), Fg(h, "blur", function (b) {
                    sc(a, b)
                })
            }

            function Sb(b, c, d) {
                var e = d && d != a.Init;
                if (!c != !e) {
                    var f = b.display.dragFunctions,
                        g = c ? Fg : Hg;
                    g(b.display.scroller, "dragstart", f.start), g(b.display.scroller, "dragenter", f.enter), g(b.display.scroller, "dragover", f.over), g(b.display.scroller, "dragleave", f.leave), g(b.display.scroller, "drop", f.drop)
                }
            }

            function Tb(a) {
                var b = a.display;
                b.lastWrapHeight == b.wrapper.clientHeight && b.lastWrapWidth == b.wrapper.clientWidth || (b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null, b.scrollbarsClipped = !1, a.setSize())
            }

            function Ub(a, b) {
                for (var c = ve(b); c != a.wrapper; c = c.parentNode)
                    if (!c || 1 == c.nodeType && "true" == c.getAttribute("cm-ignore-events") || c.parentNode == a.sizer && c != a.mover) return !0
            }

            function Vb(a, b, c, d) {
                var e = a.display;
                if (!c && "true" == ve(b).getAttribute("cm-not-content")) return null;
                var f, g, h = e.lineSpace.getBoundingClientRect();
                try {
                    f = b.clientX - h.left, g = b.clientY - h.top
                } catch (a) {
                    return null
                }
                var i, j = rb(a, f, g);
                if (d && 1 == j.xRel && (i = Zd(a.doc, j.line).text).length == j.ch) {
                    var k = Pg(i, i.length, a.options.tabSize) - i.length;
                    j = Nf(j.line, Math.max(0, Math.round((f - Ta(a.display).left) / ub(a.display)) - k))
                }
                return j
            }

            function Wb(a) {
                var b = this,
                    c = b.display;
                if (!(Ae(b, a) || c.activeTouch && c.input.supportsTouch())) {
                    if (c.shift = a.shiftKey, Ub(c, a)) return void (wf || (c.scroller.draggable = !1, setTimeout(function () {
                        c.scroller.draggable = !0
                    }, 100)));
                    if (!_b(b, a)) {
                        var d = Vb(b, a);
                        switch (window.focus(), we(a)) {
                            case 1:
                                b.state.selectingText ? b.state.selectingText(a) : d ? Xb(b, a, d) : ve(a) == c.scroller && Cg(a);
                                break;
                            case 2:
                                wf && (b.state.lastMiddleDown = +new Date), d && ua(b.doc, d), setTimeout(function () {
                                    c.input.focus()
                                }, 20), Cg(a);
                                break;
                            case 3:
                                Kf ? tc(b, a) : qc(b)
                        }
                    }
                }
            }

            function Xb(a, b, c) {
                uf ? setTimeout(Ne(Y, a), 0) : a.curOp.focus = Ue();
                var d, e = +new Date;
                Sf && Sf.time > e - 400 && 0 == Of(Sf.pos, c) ? d = "triple" : Rf && Rf.time > e - 400 && 0 == Of(Rf.pos, c) ? (d = "double", Sf = {
                    time: e,
                    pos: c
                }) : (d = "single", Rf = {
                    time: e,
                    pos: c
                });
                var f, g = a.doc.sel,
                    h = Ff ? b.metaKey : b.ctrlKey;
                a.options.dragDrop && bh && !a.isReadOnly() && "single" == d && (f = g.contains(c)) > -1 && (Of((f = g.ranges[f]).from(), c) < 0 || c.xRel > 0) && (Of(f.to(), c) > 0 || c.xRel < 0) ? Yb(a, b, c, h) : Zb(a, b, c, d, h)
            }

            function Yb(a, b, c, d) {
                var e = a.display,
                    f = +new Date,
                    g = Fb(a, function (h) {
                        wf && (e.scroller.draggable = !1), a.state.draggingText = !1, Hg(document, "mouseup", g), Hg(e.scroller, "drop", g), Math.abs(b.clientX - h.clientX) + Math.abs(b.clientY - h.clientY) < 10 && (Cg(h), !d && +new Date - 200 < f && ua(a.doc, c), wf || uf && 9 == vf ? setTimeout(function () {
                            document.body.focus(), e.input.focus()
                        }, 20) : e.input.focus())
                    });
                wf && (e.scroller.draggable = !0), a.state.draggingText = g, g.copy = Ff ? b.altKey : b.ctrlKey, e.scroller.dragDrop && e.scroller.dragDrop(), Fg(document, "mouseup", g), Fg(e.scroller, "drop", g)
            }

            function Zb(a, b, c, d, e) {
                function f(b) {
                    if (0 != Of(q, b))
                        if (q = b, "rect" == d) {
                            for (var e = [], f = a.options.tabSize, g = Pg(Zd(j, c.line).text, c.ch, f), h = Pg(Zd(j, b.line).text, b.ch, f), i = Math.min(g, h), n = Math.max(g, h), o = Math.min(c.line, b.line), p = Math.min(a.lastLine(), Math.max(c.line, b.line)); o <= p; o++) {
                                var r = Zd(j, o).text,
                                    s = Qg(r, i, f);
                                i == n ? e.push(new la(Nf(o, s), Nf(o, s))) : r.length > s && e.push(new la(Nf(o, s), Nf(o, Qg(r, n, f))))
                            }
                            e.length || e.push(new la(c, c)), Aa(j, ma(m.ranges.slice(0, l).concat(e), l), {
                                origin: "*mouse",
                                scroll: !1
                            }), a.scrollIntoView(b)
                        } else {
                            var t = k,
                                u = t.anchor,
                                v = b;
                            if ("single" != d) {
                                if ("double" == d) var w = a.findWordAt(b);
                                else var w = new la(Nf(b.line, 0), pa(j, Nf(b.line + 1, 0)));
                                Of(w.anchor, u) > 0 ? (v = w.head, u = X(t.from(), w.anchor)) : (v = w.anchor, u = W(t.to(), w.head))
                            }
                            var e = m.ranges.slice(0);
                            e[l] = new la(pa(j, u), v), Aa(j, ma(e, l), Ng)
                        }
                }

                function g(b) {
                    var c = ++s,
                        e = Vb(a, b, !0, "rect" == d);
                    if (e)
                        if (0 != Of(e, q)) {
                            a.curOp.focus = Ue(), f(e);
                            var h = u(i, j);
                            (e.line >= h.to || e.line < h.from) && setTimeout(Fb(a, function () {
                                s == c && g(b)
                            }), 150)
                        } else {
                            var k = b.clientY < r.top ? -20 : b.clientY > r.bottom ? 20 : 0;
                            k && setTimeout(Fb(a, function () {
                                s == c && (i.scroller.scrollTop += k, g(b))
                            }), 50)
                        }
                }

                function h(b) {
                    a.state.selectingText = !1, s = 1 / 0, Cg(b), i.input.focus(), Hg(document, "mousemove", t), Hg(document, "mouseup", v), j.history.lastSelOrigin = null
                }
                var i = a.display,
                    j = a.doc;
                Cg(b);
                var k, l, m = j.sel,
                    n = m.ranges;
                if (e && !b.shiftKey ? (l = j.sel.contains(c), k = l > -1 ? n[l] : new la(c, c)) : (k = j.sel.primary(), l = j.sel.primIndex), Gf ? b.shiftKey && b.metaKey : b.altKey) d = "rect", e || (k = new la(c, c)), c = Vb(a, b, !0, !0), l = -1;
                else if ("double" == d) {
                    var o = a.findWordAt(c);
                    k = a.display.shift || j.extend ? ta(j, k, o.anchor, o.head) : o
                } else if ("triple" == d) {
                    var p = new la(Nf(c.line, 0), pa(j, Nf(c.line + 1, 0)));
                    k = a.display.shift || j.extend ? ta(j, k, p.anchor, p.head) : p
                } else k = ta(j, k, c);
                e ? l == -1 ? (l = n.length, Aa(j, ma(n.concat([k]), l), {
                    scroll: !1,
                    origin: "*mouse"
                })) : n.length > 1 && n[l].empty() && "single" == d && !b.shiftKey ? (Aa(j, ma(n.slice(0, l).concat(n.slice(l + 1)), 0), {
                    scroll: !1,
                    origin: "*mouse"
                }), m = j.sel) : wa(j, l, k, Ng) : (l = 0, Aa(j, new ka([k], 0), Ng), m = j.sel);
                var q = c,
                    r = i.wrapper.getBoundingClientRect(),
                    s = 0,
                    t = Fb(a, function (a) {
                        we(a) ? g(a) : h(a)
                    }),
                    v = Fb(a, h);
                a.state.selectingText = v, Fg(document, "mousemove", t), Fg(document, "mouseup", v)
            }

            function $b(a, b, c, d) {
                try {
                    var e = b.clientX,
                        f = b.clientY
                } catch (a) {
                    return !1
                }
                if (e >= Math.floor(a.display.gutters.getBoundingClientRect().right)) return !1;
                d && Cg(b);
                var g = a.display,
                    h = g.lineDiv.getBoundingClientRect();
                if (f > h.bottom || !Ce(a, c)) return ue(b);
                f -= h.top - g.viewOffset;
                for (var i = 0; i < a.options.gutters.length; ++i) {
                    var j = g.gutters.childNodes[i];
                    if (j && j.getBoundingClientRect().right >= e) {
                        var k = ce(a.doc, f),
                            l = a.options.gutters[i];
                        return Ig(a, c, a, k, l, b), ue(b)
                    }
                }
            }

            function _b(a, b) {
                return $b(a, b, "gutterClick", !0)
            }

            function ac(a) {
                var b = this;
                if (dc(b), !Ae(b, a) && !Ub(b.display, a)) {
                    Cg(a), uf && (Wf = +new Date);
                    var c = Vb(b, a, !0),
                        d = a.dataTransfer.files;
                    if (c && !b.isReadOnly())
                        if (d && d.length && window.FileReader && window.File)
                            for (var e = d.length, f = Array(e), g = 0, h = function (a, d) {
                                if (!b.options.allowDropFileTypes || He(b.options.allowDropFileTypes, a.type) != -1) {
                                    var h = new FileReader;
                                    h.onload = Fb(b, function () {
                                        var a = h.result;
                                        if (/[\x00-\x08\x0e-\x1f]{2}/.test(a) && (a = ""), f[d] = a, ++g == e) {
                                            c = pa(b.doc, c);
                                            var i = {
                                                from: c,
                                                to: c,
                                                text: b.doc.splitLines(f.join(b.doc.lineSeparator())),
                                                origin: "paste"
                                            };
                                            Ac(b.doc, i), za(b.doc, na(c, ag(i)))
                                        }
                                    }), h.readAsText(a)
                                }
                            }, i = 0; i < e; ++i) h(d[i], i);
                        else {
                            if (b.state.draggingText && b.doc.sel.contains(c) > -1) return b.state.draggingText(a), void setTimeout(function () {
                                b.display.input.focus()
                            }, 20);
                            try {
                                var f = a.dataTransfer.getData("Text");
                                if (f) {
                                    if (b.state.draggingText && !b.state.draggingText.copy) var j = b.listSelections();
                                    if (Ba(b.doc, na(c, c)), j)
                                        for (var i = 0; i < j.length; ++i) Gc(b.doc, "", j[i].anchor, j[i].head, "drag");
                                    b.replaceSelection(f, "around", "paste"), b.display.input.focus()
                                }
                            } catch (a) { }
                        }
                }
            }

            function bc(a, b) {
                if (uf && (!a.state.draggingText || +new Date - Wf < 100)) return void Eg(b);
                if (!Ae(a, b) && !Ub(a.display, b) && (b.dataTransfer.setData("Text", a.getSelection()), b.dataTransfer.effectAllowed = "copyMove", b.dataTransfer.setDragImage && !Af)) {
                    var c = Re("img", null, null, "position: fixed; left: 0; top: 0;");
                    c.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", zf && (c.width = c.height = 1, a.display.wrapper.appendChild(c), c._top = c.offsetTop), b.dataTransfer.setDragImage(c, 0, 0), zf && c.parentNode.removeChild(c)
                }
            }

            function cc(a, b) {
                var c = Vb(a, b);
                if (c) {
                    var d = document.createDocumentFragment();
                    Ka(a, c, d), a.display.dragCursor || (a.display.dragCursor = Re("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), a.display.lineSpace.insertBefore(a.display.dragCursor, a.display.cursorDiv)), Te(a.display.dragCursor, d)
                }
            }

            function dc(a) {
                a.display.dragCursor && (a.display.lineSpace.removeChild(a.display.dragCursor), a.display.dragCursor = null)
            }

            function ec(a, b) {
                Math.abs(a.doc.scrollTop - b) < 2 || (a.doc.scrollTop = b, rf || D(a, {
                    top: b
                }), a.display.scroller.scrollTop != b && (a.display.scroller.scrollTop = b), a.display.scrollbars.setScrollTop(b), rf && D(a), Na(a, 100))
            }

            function fc(a, b, c) {
                (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth), a.doc.scrollLeft = b, v(a), a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b), a.display.scrollbars.setScrollLeft(b))
            }

            function gc(a, b) {
                var c = Zf(b),
                    d = c.x,
                    e = c.y,
                    f = a.display,
                    g = f.scroller,
                    h = g.scrollWidth > g.clientWidth,
                    i = g.scrollHeight > g.clientHeight;
                if (d && h || e && i) {
                    if (e && Ff && wf) a: for (var j = b.target, k = f.view; j != g; j = j.parentNode)
                        for (var l = 0; l < k.length; l++)
                            if (k[l].node == j) {
                                a.display.currentWheelTarget = j;
                                break a
                            }
                    if (d && !rf && !zf && null != Yf) return e && i && ec(a, Math.max(0, Math.min(g.scrollTop + e * Yf, g.scrollHeight - g.clientHeight))), fc(a, Math.max(0, Math.min(g.scrollLeft + d * Yf, g.scrollWidth - g.clientWidth))), (!e || e && i) && Cg(b), void (f.wheelStartX = null);
                    if (e && null != Yf) {
                        var m = e * Yf,
                            n = a.doc.scrollTop,
                            o = n + f.wrapper.clientHeight;
                        m < 0 ? n = Math.max(0, n + m - 50) : o = Math.min(a.doc.height, o + m + 50), D(a, {
                            top: n,
                            bottom: o
                        })
                    }
                    Xf < 20 && (null == f.wheelStartX ? (f.wheelStartX = g.scrollLeft, f.wheelStartY = g.scrollTop, f.wheelDX = d, f.wheelDY = e, setTimeout(function () {
                        if (null != f.wheelStartX) {
                            var a = g.scrollLeft - f.wheelStartX,
                                b = g.scrollTop - f.wheelStartY,
                                c = b && f.wheelDY && b / f.wheelDY || a && f.wheelDX && a / f.wheelDX;
                            f.wheelStartX = f.wheelStartY = null, c && (Yf = (Yf * Xf + c) / (Xf + 1), ++Xf)
                        }
                    }, 200)) : (f.wheelDX += d, f.wheelDY += e))
                }
            }

            function hc(a, b, c) {
                if ("string" == typeof b && (b = lg[b], !b)) return !1;
                a.display.input.ensurePolled();
                var d = a.display.shift,
                    e = !1;
                try {
                    a.isReadOnly() && (a.state.suppressEdits = !0), c && (a.display.shift = !1), e = b(a) != Lg
                } finally {
                    a.display.shift = d, a.state.suppressEdits = !1
                }
                return e
            }

            function ic(a, b, c) {
                for (var d = 0; d < a.state.keyMaps.length; d++) {
                    var e = ng(b, a.state.keyMaps[d], c, a);
                    if (e) return e
                }
                return a.options.extraKeys && ng(b, a.options.extraKeys, c, a) || ng(b, a.options.keyMap, c, a)
            }

            function jc(a, b, c, d) {
                var e = a.state.keySeq;
                if (e) {
                    if (og(b)) return "handled";
                    $f.set(50, function () {
                        a.state.keySeq == e && (a.state.keySeq = null, a.display.input.reset())
                    }), b = e + " " + b
                }
                var f = ic(a, b, d);
                return "multi" == f && (a.state.keySeq = b), "handled" == f && ye(a, "keyHandled", a, b, c), "handled" != f && "multi" != f || (Cg(c), Ma(a)), e && !f && /\'$/.test(b) ? (Cg(c), !0) : !!f
            }

            function kc(a, b) {
                var c = pg(b, !0);
                return !!c && (b.shiftKey && !a.state.keySeq ? jc(a, "Shift-" + c, b, function (b) {
                    return hc(a, b, !0)
                }) || jc(a, c, b, function (b) {
                    if ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) return hc(a, b)
                }) : jc(a, c, b, function (b) {
                    return hc(a, b)
                }))
            }

            function lc(a, b, c) {
                return jc(a, "'" + c + "'", b, function (b) {
                    return hc(a, b, !0)
                })
            }

            function mc(a) {
                var b = this;
                if (b.curOp.focus = Ue(), !Ae(b, a)) {
                    uf && vf < 11 && 27 == a.keyCode && (a.returnValue = !1);
                    var c = a.keyCode;
                    b.display.shift = 16 == c || a.shiftKey;
                    var d = kc(b, a);
                    zf && (_f = d ? c : null, !d && 88 == c && !eh && (Ff ? a.metaKey : a.ctrlKey) && b.replaceSelection("", null, "cut")), 18 != c || /\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className) || nc(b)
                }
            }

            function nc(a) {
                function b(a) {
                    18 != a.keyCode && a.altKey || ($g(c, "CodeMirror-crosshair"), Hg(document, "keyup", b), Hg(document, "mouseover", b))
                }
                var c = a.display.lineDiv;
                _g(c, "CodeMirror-crosshair"), Fg(document, "keyup", b), Fg(document, "mouseover", b)
            }

            function oc(a) {
                16 == a.keyCode && (this.doc.sel.shift = !1), Ae(this, a)
            }

            function pc(a) {
                var b = this;
                if (!(Ub(b.display, a) || Ae(b, a) || a.ctrlKey && !a.altKey || Ff && a.metaKey)) {
                    var c = a.keyCode,
                        d = a.charCode;
                    if (zf && c == _f) return _f = null, void Cg(a);
                    if (!zf || a.which && !(a.which < 10) || !kc(b, a)) {
                        var e = String.fromCharCode(null == d ? c : d);
                        lc(b, a, e) || b.display.input.onKeyPress(a)
                    }
                }
            }

            function qc(a) {
                a.state.delayingBlurEvent = !0, setTimeout(function () {
                    a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1, sc(a))
                }, 100)
            }

            function rc(a, b) {
                a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1), "nocursor" != a.options.readOnly && (a.state.focused || (Ig(a, "focus", a, b), a.state.focused = !0, _g(a.display.wrapper, "CodeMirror-focused"), a.curOp || a.display.selForContextMenu == a.doc.sel || (a.display.input.reset(), wf && setTimeout(function () {
                    a.display.input.reset(!0)
                }, 20)), a.display.input.receivedFocus()), Ma(a))
            }

            function sc(a, b) {
                a.state.delayingBlurEvent || (a.state.focused && (Ig(a, "blur", a, b), a.state.focused = !1, $g(a.display.wrapper, "CodeMirror-focused")), clearInterval(a.display.blinker), setTimeout(function () {
                    a.state.focused || (a.display.shift = !1)
                }, 150))
            }

            function tc(a, b) {
                Ub(a.display, b) || uc(a, b) || Ae(a, b, "contextmenu") || a.display.input.onContextMenu(b)
            }

            function uc(a, b) {
                return !!Ce(a, "gutterContextMenu") && $b(a, b, "gutterContextMenu", !1)
            }

            function vc(a, b) {
                if (Of(a, b.from) < 0) return a;
                if (Of(a, b.to) <= 0) return ag(b);
                var c = a.line + b.text.length - (b.to.line - b.from.line) - 1,
                    d = a.ch;
                return a.line == b.to.line && (d += ag(b).ch - b.to.ch), Nf(c, d)
            }

            function wc(a, b) {
                for (var c = [], d = 0; d < a.sel.ranges.length; d++) {
                    var e = a.sel.ranges[d];
                    c.push(new la(vc(e.anchor, b), vc(e.head, b)))
                }
                return ma(c, a.sel.primIndex)
            }

            function xc(a, b, c) {
                return a.line == b.line ? Nf(c.line, a.ch - b.ch + c.ch) : Nf(c.line + (a.line - b.line), a.ch)
            }

            function yc(a, b, c) {
                for (var d = [], e = Nf(a.first, 0), f = e, g = 0; g < b.length; g++) {
                    var h = b[g],
                        i = xc(h.from, e, f),
                        j = xc(ag(h), e, f);
                    if (e = h.to, f = j, "around" == c) {
                        var k = a.sel.ranges[g],
                            l = Of(k.head, k.anchor) < 0;
                        d[g] = new la(l ? j : i, l ? i : j)
                    } else d[g] = new la(i, i)
                }
                return new ka(d, a.sel.primIndex)
            }

            function zc(a, b, c) {
                var d = {
                    canceled: !1,
                    from: b.from,
                    to: b.to,
                    text: b.text,
                    origin: b.origin,
                    cancel: function () {
                        this.canceled = !0
                    }
                };
                return c && (d.update = function (b, c, d, e) {
                    b && (this.from = pa(a, b)), c && (this.to = pa(a, c)), d && (this.text = d), void 0 !== e && (this.origin = e)
                }), Ig(a, "beforeChange", a, d), a.cm && Ig(a.cm, "beforeChange", a.cm, d), d.canceled ? null : {
                    from: d.from,
                    to: d.to,
                    text: d.text,
                    origin: d.origin
                }
            }

            function Ac(a, b, c) {
                if (a.cm) {
                    if (!a.cm.curOp) return Fb(a.cm, Ac)(a, b, c);
                    if (a.cm.state.suppressEdits) return
                }
                if (!(Ce(a, "beforeChange") || a.cm && Ce(a.cm, "beforeChange")) || (b = zc(a, b, !0))) {
                    var d = Lf && !c && id(a, b.from, b.to);
                    if (d)
                        for (var e = d.length - 1; e >= 0; --e) Bc(a, {
                            from: d[e].from,
                            to: d[e].to,
                            text: e ? [""] : b.text
                        });
                    else Bc(a, b)
                }
            }

            function Bc(a, b) {
                if (1 != b.text.length || "" != b.text[0] || 0 != Of(b.from, b.to)) {
                    var c = wc(a, b);
                    je(a, b, c, a.cm ? a.cm.curOp.id : NaN), Ec(a, b, c, fd(a, b));
                    var d = [];
                    Xd(a, function (a, c) {
                        c || He(d, a.history) != -1 || (te(a.history, b), d.push(a.history)), Ec(a, b, null, fd(a, b))
                    })
                }
            }

            function Cc(a, b, c) {
                if (!a.cm || !a.cm.state.suppressEdits || c) {
                    for (var d, e = a.history, f = a.sel, g = "undo" == b ? e.done : e.undone, h = "undo" == b ? e.undone : e.done, i = 0; i < g.length && (d = g[i], c ? !d.ranges || d.equals(a.sel) : d.ranges); i++);
                    if (i != g.length) {
                        for (e.lastOrigin = e.lastSelOrigin = null; d = g.pop(), d.ranges;) {
                            if (me(d, h), c && !d.equals(a.sel)) return void Aa(a, d, {
                                clearRedo: !1
                            });
                            f = d
                        }
                        var j = [];
                        me(f, h), h.push({
                            changes: j,
                            generation: e.generation
                        }), e.generation = d.generation || ++e.maxGeneration;
                        for (var k = Ce(a, "beforeChange") || a.cm && Ce(a.cm, "beforeChange"), i = d.changes.length - 1; i >= 0; --i) {
                            var l = d.changes[i];
                            if (l.origin = b, k && !zc(a, l, !1)) return void (g.length = 0);
                            j.push(ge(a, l));
                            var m = i ? wc(a, l) : Ge(g);
                            Ec(a, l, m, hd(a, l)), !i && a.cm && a.cm.scrollIntoView({
                                from: l.from,
                                to: ag(l)
                            });
                            var n = [];
                            Xd(a, function (a, b) {
                                b || He(n, a.history) != -1 || (te(a.history, l), n.push(a.history)), Ec(a, l, null, hd(a, l))
                            })
                        }
                    }
                }
            }

            function Dc(a, b) {
                if (0 != b && (a.first += b, a.sel = new ka(Ie(a.sel.ranges, function (a) {
                    return new la(Nf(a.anchor.line + b, a.anchor.ch), Nf(a.head.line + b, a.head.ch))
                }), a.sel.primIndex), a.cm)) {
                    Kb(a.cm, a.first, a.first - b, b);
                    for (var c = a.cm.display, d = c.viewFrom; d < c.viewTo; d++) Lb(a.cm, d, "gutter")
                }
            }

            function Ec(a, b, c, d) {
                if (a.cm && !a.cm.curOp) return Fb(a.cm, Ec)(a, b, c, d);
                if (b.to.line < a.first) return void Dc(a, b.text.length - 1 - (b.to.line - b.from.line));
                if (!(b.from.line > a.lastLine())) {
                    if (b.from.line < a.first) {
                        var e = b.text.length - 1 - (a.first - b.from.line);
                        Dc(a, e), b = {
                            from: Nf(a.first, 0),
                            to: Nf(b.to.line + e, b.to.ch),
                            text: [Ge(b.text)],
                            origin: b.origin
                        }
                    }
                    var f = a.lastLine();
                    b.to.line > f && (b = {
                        from: b.from,
                        to: Nf(f, Zd(a, f).text.length),
                        text: [b.text[0]],
                        origin: b.origin
                    }), b.removed = $d(a, b.from, b.to), c || (c = wc(a, b)), a.cm ? Fc(a.cm, b, d) : Ud(a, b, d), Ba(a, c, Mg)
                }
            }

            function Fc(a, b, c) {
                var d = a.doc,
                    e = a.display,
                    g = b.from,
                    h = b.to,
                    i = !1,
                    j = g.line;
                a.options.lineWrapping || (j = be(sd(Zd(d, g.line))), d.iter(j, h.line + 1, function (a) {
                    if (a == e.maxLine) return i = !0, !0
                })), d.sel.contains(b.from, b.to) > -1 && Be(a), Ud(d, b, c, f(a)), a.options.lineWrapping || (d.iter(j, g.line + b.text.length, function (a) {
                    var b = l(a);
                    b > e.maxLineLength && (e.maxLine = a, e.maxLineLength = b, e.maxLineChanged = !0, i = !1)
                }), i && (a.curOp.updateMaxLine = !0)), d.frontier = Math.min(d.frontier, g.line), Na(a, 400);
                var k = b.text.length - (h.line - g.line) - 1;
                b.full ? Kb(a) : g.line != h.line || 1 != b.text.length || Td(a.doc, b) ? Kb(a, g.line, h.line + 1, k) : Lb(a, g.line, "text");
                var m = Ce(a, "changes"),
                    n = Ce(a, "change");
                if (n || m) {
                    var o = {
                        from: g,
                        to: h,
                        text: b.text,
                        removed: b.removed,
                        origin: b.origin
                    };
                    n && ye(a, "change", a, o), m && (a.curOp.changeObjs || (a.curOp.changeObjs = [])).push(o)
                }
                a.display.selForContextMenu = null
            }

            function Gc(a, b, c, d, e) {
                if (d || (d = c), Of(d, c) < 0) {
                    var f = d;
                    d = c, c = f
                }
                "string" == typeof b && (b = a.splitLines(b)), Ac(a, {
                    from: c,
                    to: d,
                    text: b,
                    origin: e
                })
            }

            function Hc(a, b) {
                if (!Ae(a, "scrollCursorIntoView")) {
                    var c = a.display,
                        d = c.sizer.getBoundingClientRect(),
                        e = null;
                    if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1), null != e && !Cf) {
                        var f = Re("div", "​", null, "position: absolute; top: " + (b.top - c.viewOffset - Ra(a.display)) + "px; height: " + (b.bottom - b.top + Ua(a) + c.barHeight) + "px; left: " + b.left + "px; width: 2px;");
                        a.display.lineSpace.appendChild(f), f.scrollIntoView(e), a.display.lineSpace.removeChild(f)
                    }
                }
            }

            function Ic(a, b, c, d) {
                null == d && (d = 0);
                for (var e = 0; e < 5; e++) {
                    var f = !1,
                        g = ob(a, b),
                        h = c && c != b ? ob(a, c) : g,
                        i = Kc(a, Math.min(g.left, h.left), Math.min(g.top, h.top) - d, Math.max(g.left, h.left), Math.max(g.bottom, h.bottom) + d),
                        j = a.doc.scrollTop,
                        k = a.doc.scrollLeft;
                    if (null != i.scrollTop && (ec(a, i.scrollTop), Math.abs(a.doc.scrollTop - j) > 1 && (f = !0)), null != i.scrollLeft && (fc(a, i.scrollLeft), Math.abs(a.doc.scrollLeft - k) > 1 && (f = !0)), !f) break
                }
                return g
            }

            function Jc(a, b, c, d, e) {
                var f = Kc(a, b, c, d, e);
                null != f.scrollTop && ec(a, f.scrollTop), null != f.scrollLeft && fc(a, f.scrollLeft)
            }

            function Kc(a, b, c, d, e) {
                var f = a.display,
                    g = tb(a.display);
                c < 0 && (c = 0);
                var h = a.curOp && null != a.curOp.scrollTop ? a.curOp.scrollTop : f.scroller.scrollTop,
                    i = Wa(a),
                    j = {};
                e - c > i && (e = c + i);
                var k = a.doc.height + Sa(f),
                    l = c < g,
                    m = e > k - g;
                if (c < h) j.scrollTop = l ? 0 : c;
                else if (e > h + i) {
                    var n = Math.min(c, (m ? k : e) - i);
                    n != h && (j.scrollTop = n)
                }
                var o = a.curOp && null != a.curOp.scrollLeft ? a.curOp.scrollLeft : f.scroller.scrollLeft,
                    p = Va(a) - (a.options.fixedGutter ? f.gutters.offsetWidth : 0),
                    q = d - b > p;
                return q && (d = b + p), b < 10 ? j.scrollLeft = 0 : b < o ? j.scrollLeft = Math.max(0, b - (q ? 0 : 10)) : d > p + o - 3 && (j.scrollLeft = d + (q ? 0 : 10) - p), j
            }

            function Lc(a, b, c) {
                null == b && null == c || Nc(a), null != b && (a.curOp.scrollLeft = (null == a.curOp.scrollLeft ? a.doc.scrollLeft : a.curOp.scrollLeft) + b), null != c && (a.curOp.scrollTop = (null == a.curOp.scrollTop ? a.doc.scrollTop : a.curOp.scrollTop) + c)
            }

            function Mc(a) {
                Nc(a);
                var b = a.getCursor(),
                    c = b,
                    d = b;
                a.options.lineWrapping || (c = b.ch ? Nf(b.line, b.ch - 1) : b, d = Nf(b.line, b.ch + 1)), a.curOp.scrollToPos = {
                    from: c,
                    to: d,
                    margin: a.options.cursorScrollMargin,
                    isCursor: !0
                }
            }

            function Nc(a) {
                var b = a.curOp.scrollToPos;
                if (b) {
                    a.curOp.scrollToPos = null;
                    var c = pb(a, b.from),
                        d = pb(a, b.to),
                        e = Kc(a, Math.min(c.left, d.left), Math.min(c.top, d.top) - b.margin, Math.max(c.right, d.right), Math.max(c.bottom, d.bottom) + b.margin);
                    a.scrollTo(e.scrollLeft, e.scrollTop)
                }
            }

            function Oc(a, b, c, d) {
                var e, f = a.doc;
                null == c && (c = "add"), "smart" == c && (f.mode.indent ? e = Qa(a, b) : c = "prev");
                var g = a.options.tabSize,
                    h = Zd(f, b),
                    i = Pg(h.text, null, g);
                h.stateAfter && (h.stateAfter = null);
                var j, k = h.text.match(/^\s*/)[0];
                if (d || /\S/.test(h.text)) {
                    if ("smart" == c && (j = f.mode.indent(e, h.text.slice(k.length), h.text), j == Lg || j > 150)) {
                        if (!d) return;
                        c = "prev"
                    }
                } else j = 0, c = "not";
                "prev" == c ? j = b > f.first ? Pg(Zd(f, b - 1).text, null, g) : 0 : "add" == c ? j = i + a.options.indentUnit : "subtract" == c ? j = i - a.options.indentUnit : "number" == typeof c && (j = i + c), j = Math.max(0, j);
                var l = "",
                    m = 0;
                if (a.options.indentWithTabs)
                    for (var n = Math.floor(j / g); n; --n) m += g, l += "\t";
                if (m < j && (l += Fe(j - m)), l != k) return Gc(f, l, Nf(b, 0), Nf(b, k.length), "+input"), h.stateAfter = null, !0;
                for (var n = 0; n < f.sel.ranges.length; n++) {
                    var o = f.sel.ranges[n];
                    if (o.head.line == b && o.head.ch < k.length) {
                        var m = Nf(b, k.length);
                        wa(f, n, new la(m, m));
                        break
                    }
                }
            }

            function Pc(a, b, c, d) {
                var e = b,
                    f = b;
                return "number" == typeof b ? f = Zd(a, oa(a, b)) : e = be(b), null == e ? null : (d(f, e) && a.cm && Lb(a.cm, e, c), f)
            }

            function Qc(a, b) {
                for (var c = a.doc.sel.ranges, d = [], e = 0; e < c.length; e++) {
                    for (var f = b(c[e]); d.length && Of(f.from, Ge(d).to) <= 0;) {
                        var g = d.pop();
                        if (Of(g.from, f.from) < 0) {
                            f.from = g.from;
                            break
                        }
                    }
                    d.push(f)
                }
                Eb(a, function () {
                    for (var b = d.length - 1; b >= 0; b--) Gc(a.doc, "", d[b].from, d[b].to, "+delete");
                    Mc(a)
                })
            }

            function Rc(a, b, c, d, e) {
                function f() {
                    var b = h + c;
                    return !(b < a.first || b >= a.first + a.size) && (h = b, k = Zd(a, b))
                }

                function g(a) {
                    var b = (e ? nf : of)(k, i, c, !0);
                    if (null == b) {
                        if (a || !f()) return !1;
                        i = e ? (c < 0 ? ff : ef)(k) : c < 0 ? k.text.length : 0
                    } else i = b;
                    return !0
                }
                var h = b.line,
                    i = b.ch,
                    j = c,
                    k = Zd(a, h);
                if ("char" == d) g();
                else if ("column" == d) g(!0);
                else if ("word" == d || "group" == d)
                    for (var l = null, m = "group" == d, n = a.cm && a.cm.getHelper(b, "wordChars"), o = !0; !(c < 0) || g(!o); o = !1) {
                        var p = k.text.charAt(i) || "\n",
                            q = Oe(p, n) ? "w" : m && "\n" == p ? "n" : !m || /\s/.test(p) ? null : "p";
                        if (!m || o || q || (q = "s"), l && l != q) {
                            c < 0 && (c = 1, g());
                            break
                        }
                        if (q && (l = q), c > 0 && !g(!o)) break
                    }
                var r = Ga(a, Nf(h, i), b, j, !0);
                return Of(b, r) || (r.hitSide = !0), r
            }

            function Sc(a, b, c, d) {
                var e, f = a.doc,
                    g = b.left;
                if ("page" == d) {
                    var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                        i = Math.max(h - .5 * tb(a.display), 3);
                    e = (c > 0 ? b.bottom : b.top) + c * i
                } else "line" == d && (e = c > 0 ? b.bottom + 3 : b.top - 3);
                for (; ;) {
                    var j = rb(a, g, e);
                    if (!j.outside) break;
                    if (c < 0 ? e <= 0 : e >= f.height) {
                        j.hitSide = !0;
                        break
                    }
                    e += 5 * c
                }
                return j
            }

            function Tc(b, c, d, e) {
                a.defaults[b] = c, d && (cg[b] = e ? function (a, b, c) {
                    c != dg && d(a, b, c)
                } : d)
            }

            function Uc(a) {
                for (var b, c, d, e, f = a.split(/-(?!$)/), a = f[f.length - 1], g = 0; g < f.length - 1; g++) {
                    var h = f[g];
                    if (/^(cmd|meta|m)$/i.test(h)) e = !0;
                    else if (/^a(lt)?$/i.test(h)) b = !0;
                    else if (/^(c|ctrl|control)$/i.test(h)) c = !0;
                    else {
                        if (!/^s(hift)$/i.test(h)) throw new Error("Unrecognized modifier name: " + h);
                        d = !0
                    }
                }
                return b && (a = "Alt-" + a), c && (a = "Ctrl-" + a), e && (a = "Cmd-" + a), d && (a = "Shift-" + a), a
            }

            function Vc(a) {
                return "string" == typeof a ? mg[a] : a
            }

            function Wc(a, b, c, d, e) {
                if (d && d.shared) return Xc(a, b, c, d, e);
                if (a.cm && !a.cm.curOp) return Fb(a.cm, Wc)(a, b, c, d, e);
                var f = new sg(a, e),
                    g = Of(b, c);
                if (d && Me(d, f, !1), g > 0 || 0 == g && f.clearWhenEmpty !== !1) return f;
                if (f.replacedWith && (f.collapsed = !0, f.widgetNode = Re("span", [f.replacedWith], "CodeMirror-widget"), d.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"), d.insertLeft && (f.widgetNode.insertLeft = !0)), f.collapsed) {
                    if (rd(a, b.line, b, c, f) || b.line != c.line && rd(a, c.line, b, c, f)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    Mf = !0
                }
                f.addToHistory && je(a, {
                    from: b,
                    to: c,
                    origin: "markText"
                }, a.sel, NaN);
                var h, i = b.line,
                    j = a.cm;
                if (a.iter(i, c.line + 1, function (a) {
                    j && f.collapsed && !j.options.lineWrapping && sd(a) == j.display.maxLine && (h = !0), f.collapsed && i != b.line && ae(a, 0), cd(a, new _c(f, i == b.line ? b.ch : null, i == c.line ? c.ch : null)), ++i
                }), f.collapsed && a.iter(b.line, c.line + 1, function (b) {
                    wd(a, b) && ae(b, 0)
                }), f.clearOnEnter && Fg(f, "beforeCursorEnter", function () {
                    f.clear()
                }), f.readOnly && (Lf = !0, (a.history.done.length || a.history.undone.length) && a.clearHistory()), f.collapsed && (f.id = ++rg, f.atomic = !0), j) {
                    if (h && (j.curOp.updateMaxLine = !0), f.collapsed) Kb(j, b.line, c.line + 1);
                    else if (f.className || f.title || f.startStyle || f.endStyle || f.css)
                        for (var k = b.line; k <= c.line; k++) Lb(j, k, "text");
                    f.atomic && Da(j.doc), ye(j, "markerAdded", j, f)
                }
                return f
            }

            function Xc(a, b, c, d, e) {
                d = Me(d), d.shared = !1;
                var f = [Wc(a, b, c, d, e)],
                    g = f[0],
                    h = d.widgetNode;
                return Xd(a, function (a) {
                    h && (d.widgetNode = h.cloneNode(!0)), f.push(Wc(a, pa(a, b), pa(a, c), d, e));
                    for (var i = 0; i < a.linked.length; ++i)
                        if (a.linked[i].isParent) return;
                    g = Ge(f)
                }), new tg(f, g)
            }

            function Yc(a) {
                return a.findMarks(Nf(a.first, 0), a.clipPos(Nf(a.lastLine())), function (a) {
                    return a.parent
                })
            }

            function Zc(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = d.find(),
                        f = a.clipPos(e.from),
                        g = a.clipPos(e.to);
                    if (Of(f, g)) {
                        var h = Wc(a, f, g, d.primary, d.primary.type);
                        d.markers.push(h), h.parent = d
                    }
                }
            }

            function $c(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b],
                        d = [c.primary.doc];
                    Xd(c.primary.doc, function (a) {
                        d.push(a)
                    });
                    for (var e = 0; e < c.markers.length; e++) {
                        var f = c.markers[e];
                        He(d, f.doc) == -1 && (f.parent = null, c.markers.splice(e--, 1))
                    }
                }
            }

            function _c(a, b, c) {
                this.marker = a, this.from = b, this.to = c
            }

            function ad(a, b) {
                if (a)
                    for (var c = 0; c < a.length; ++c) {
                        var d = a[c];
                        if (d.marker == b) return d
                    }
            }

            function bd(a, b) {
                for (var c, d = 0; d < a.length; ++d) a[d] != b && (c || (c = [])).push(a[d]);
                return c
            }

            function cd(a, b) {
                a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b], b.marker.attachLine(a)
            }

            function dd(a, b, c) {
                if (a)
                    for (var d, e = 0; e < a.length; ++e) {
                        var f = a[e],
                            g = f.marker,
                            h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                        if (h || f.from == b && "bookmark" == g.type && (!c || !f.marker.insertLeft)) {
                            var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                            (d || (d = [])).push(new _c(g, f.from, i ? null : f.to))
                        }
                    }
                return d
            }

            function ed(a, b, c) {
                if (a)
                    for (var d, e = 0; e < a.length; ++e) {
                        var f = a[e],
                            g = f.marker,
                            h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                        if (h || f.from == b && "bookmark" == g.type && (!c || f.marker.insertLeft)) {
                            var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                            (d || (d = [])).push(new _c(g, i ? null : f.from - b, null == f.to ? null : f.to - b))
                        }
                    }
                return d
            }

            function fd(a, b) {
                if (b.full) return null;
                var c = ra(a, b.from.line) && Zd(a, b.from.line).markedSpans,
                    d = ra(a, b.to.line) && Zd(a, b.to.line).markedSpans;
                if (!c && !d) return null;
                var e = b.from.ch,
                    f = b.to.ch,
                    g = 0 == Of(b.from, b.to),
                    h = dd(c, e, g),
                    i = ed(d, f, g),
                    j = 1 == b.text.length,
                    k = Ge(b.text).length + (j ? e : 0);
                if (h)
                    for (var l = 0; l < h.length; ++l) {
                        var m = h[l];
                        if (null == m.to) {
                            var n = ad(i, m.marker);
                            n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e
                        }
                    }
                if (i)
                    for (var l = 0; l < i.length; ++l) {
                        var m = i[l];
                        if (null != m.to && (m.to += k), null == m.from) {
                            var n = ad(h, m.marker);
                            n || (m.from = k, j && (h || (h = [])).push(m))
                        } else m.from += k, j && (h || (h = [])).push(m)
                    }
                h && (h = gd(h)), i && i != h && (i = gd(i));
                var o = [h];
                if (!j) {
                    var p, q = b.text.length - 2;
                    if (q > 0 && h)
                        for (var l = 0; l < h.length; ++l) null == h[l].to && (p || (p = [])).push(new _c(h[l].marker, null, null));
                    for (var l = 0; l < q; ++l) o.push(p);
                    o.push(i)
                }
                return o
            }

            function gd(a) {
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    null != c.from && c.from == c.to && c.marker.clearWhenEmpty !== !1 && a.splice(b--, 1)
                }
                return a.length ? a : null
            }

            function hd(a, b) {
                var c = pe(a, b),
                    d = fd(a, b);
                if (!c) return d;
                if (!d) return c;
                for (var e = 0; e < c.length; ++e) {
                    var f = c[e],
                        g = d[e];
                    if (f && g) a: for (var h = 0; h < g.length; ++h) {
                        for (var i = g[h], j = 0; j < f.length; ++j)
                            if (f[j].marker == i.marker) continue a;
                        f.push(i)
                    } else g && (c[e] = g)
                }
                return c
            }

            function id(a, b, c) {
                var d = null;
                if (a.iter(b.line, c.line + 1, function (a) {
                    if (a.markedSpans)
                        for (var b = 0; b < a.markedSpans.length; ++b) {
                            var c = a.markedSpans[b].marker;
                            !c.readOnly || d && He(d, c) != -1 || (d || (d = [])).push(c)
                        }
                }), !d) return null;
                for (var e = [{
                    from: b,
                    to: c
                }], f = 0; f < d.length; ++f)
                    for (var g = d[f], h = g.find(0), i = 0; i < e.length; ++i) {
                        var j = e[i];
                        if (!(Of(j.to, h.from) < 0 || Of(j.from, h.to) > 0)) {
                            var k = [i, 1],
                                l = Of(j.from, h.from),
                                m = Of(j.to, h.to);
                            (l < 0 || !g.inclusiveLeft && !l) && k.push({
                                from: j.from,
                                to: h.from
                            }), (m > 0 || !g.inclusiveRight && !m) && k.push({
                                from: h.to,
                                to: j.to
                            }), e.splice.apply(e, k), i += k.length - 1
                        }
                    }
                return e
            }

            function jd(a) {
                var b = a.markedSpans;
                if (b) {
                    for (var c = 0; c < b.length; ++c) b[c].marker.detachLine(a);
                    a.markedSpans = null
                }
            }

            function kd(a, b) {
                if (b) {
                    for (var c = 0; c < b.length; ++c) b[c].marker.attachLine(a);
                    a.markedSpans = b
                }
            }

            function ld(a) {
                return a.inclusiveLeft ? -1 : 0
            }

            function md(a) {
                return a.inclusiveRight ? 1 : 0
            }

            function nd(a, b) {
                var c = a.lines.length - b.lines.length;
                if (0 != c) return c;
                var d = a.find(),
                    e = b.find(),
                    f = Of(d.from, e.from) || ld(a) - ld(b);
                if (f) return -f;
                var g = Of(d.to, e.to) || md(a) - md(b);
                return g ? g : b.id - a.id
            }

            function od(a, b) {
                var c, d = Mf && a.markedSpans;
                if (d)
                    for (var e, f = 0; f < d.length; ++f) e = d[f], e.marker.collapsed && null == (b ? e.from : e.to) && (!c || nd(c, e.marker) < 0) && (c = e.marker);
                return c
            }

            function pd(a) {
                return od(a, !0)
            }

            function qd(a) {
                return od(a, !1)
            }

            function rd(a, b, c, d, e) {
                var f = Zd(a, b),
                    g = Mf && f.markedSpans;
                if (g)
                    for (var h = 0; h < g.length; ++h) {
                        var i = g[h];
                        if (i.marker.collapsed) {
                            var j = i.marker.find(0),
                                k = Of(j.from, c) || ld(i.marker) - ld(e),
                                l = Of(j.to, d) || md(i.marker) - md(e);
                            if (!(k >= 0 && l <= 0 || k <= 0 && l >= 0) && (k <= 0 && (i.marker.inclusiveRight && e.inclusiveLeft ? Of(j.to, c) >= 0 : Of(j.to, c) > 0) || k >= 0 && (i.marker.inclusiveRight && e.inclusiveLeft ? Of(j.from, d) <= 0 : Of(j.from, d) < 0))) return !0
                        }
                    }
            }

            function sd(a) {
                for (var b; b = pd(a);) a = b.find(-1, !0).line;
                return a
            }

            function td(a) {
                for (var b, c; b = qd(a);) a = b.find(1, !0).line, (c || (c = [])).push(a);
                return c
            }

            function ud(a, b) {
                var c = Zd(a, b),
                    d = sd(c);
                return c == d ? b : be(d)
            }

            function vd(a, b) {
                if (b > a.lastLine()) return b;
                var c, d = Zd(a, b);
                if (!wd(a, d)) return b;
                for (; c = qd(d);) d = c.find(1, !0).line;
                return be(d) + 1
            }

            function wd(a, b) {
                var c = Mf && b.markedSpans;
                if (c)
                    for (var d, e = 0; e < c.length; ++e)
                        if (d = c[e], d.marker.collapsed) {
                            if (null == d.from) return !0;
                            if (!d.marker.widgetNode && 0 == d.from && d.marker.inclusiveLeft && xd(a, b, d)) return !0
                        }
            }

            function xd(a, b, c) {
                if (null == c.to) {
                    var d = c.marker.find(1, !0);
                    return xd(a, d.line, ad(d.line.markedSpans, c.marker))
                }
                if (c.marker.inclusiveRight && c.to == b.text.length) return !0;
                for (var e, f = 0; f < b.markedSpans.length; ++f)
                    if (e = b.markedSpans[f], e.marker.collapsed && !e.marker.widgetNode && e.from == c.to && (null == e.to || e.to != c.from) && (e.marker.inclusiveLeft || c.marker.inclusiveRight) && xd(a, b, e)) return !0
            }

            function yd(a, b, c) {
                de(b) < (a.curOp && a.curOp.scrollTop || a.doc.scrollTop) && Lc(a, null, c)
            }

            function zd(a) {
                if (null != a.height) return a.height;
                var b = a.doc.cm;
                if (!b) return 0;
                if (!Xg(document.body, a.node)) {
                    var c = "position: relative;";
                    a.coverGutter && (c += "margin-left: -" + b.display.gutters.offsetWidth + "px;"), a.noHScroll && (c += "width: " + b.display.wrapper.clientWidth + "px;"), Te(b.display.measure, Re("div", [a.node], null, c))
                }
                return a.height = a.node.parentNode.offsetHeight
            }

            function Ad(a, b, c, d) {
                var e = new ug(a, c, d),
                    f = a.cm;
                return f && e.noHScroll && (f.display.alignWidgets = !0), Pc(a, b, "widget", function (b) {
                    var c = b.widgets || (b.widgets = []);
                    if (null == e.insertAt ? c.push(e) : c.splice(Math.min(c.length - 1, Math.max(0, e.insertAt)), 0, e), e.line = b, f && !wd(a, b)) {
                        var d = de(b) < a.scrollTop;
                        ae(b, b.height + zd(e)), d && Lc(f, null, e.height), f.curOp.forceUpdate = !0
                    }
                    return !0
                }), e
            }

            function Bd(a, b, c, d) {
                a.text = b, a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null), null != a.order && (a.order = null), jd(a), kd(a, c);
                var e = d ? d(a) : 1;
                e != a.height && ae(a, e)
            }

            function Cd(a) {
                a.parent = null, jd(a)
            }

            function Dd(a, b) {
                if (a)
                    for (; ;) {
                        var c = a.match(/(?:^|\s+)line-(background-)?(\S+)/);
                        if (!c) break;
                        a = a.slice(0, c.index) + a.slice(c.index + c[0].length);
                        var d = c[1] ? "bgClass" : "textClass";
                        null == b[d] ? b[d] = c[2] : new RegExp("(?:^|s)" + c[2] + "(?:$|s)").test(b[d]) || (b[d] += " " + c[2])
                    }
                return a
            }

            function Ed(b, c) {
                if (b.blankLine) return b.blankLine(c);
                if (b.innerMode) {
                    var d = a.innerMode(b, c);
                    return d.mode.blankLine ? d.mode.blankLine(d.state) : void 0
                }
            }

            function Fd(b, c, d, e) {
                for (var f = 0; f < 10; f++) {
                    e && (e[0] = a.innerMode(b, d).mode);
                    var g = b.token(c, d);
                    if (c.pos > c.start) return g
                }
                throw new Error("Mode " + b.name + " failed to advance stream.")
            }

            function Gd(a, b, c, d) {
                function e(a) {
                    return {
                        start: l.start,
                        end: l.pos,
                        string: l.current(),
                        type: f || null,
                        state: a ? jg(g.mode, k) : k
                    }
                }
                var f, g = a.doc,
                    h = g.mode;
                b = pa(g, b);
                var i, j = Zd(g, b.line),
                    k = Qa(a, b.line, c),
                    l = new qg(j.text, a.options.tabSize);
                for (d && (i = []);
                    (d || l.pos < b.ch) && !l.eol();) l.start = l.pos, f = Fd(h, l, k), d && i.push(e(!0));
                return d ? i : e()
            }

            function Hd(a, b, c, d, e, f, g) {
                var h = c.flattenSpans;
                null == h && (h = a.options.flattenSpans);
                var i, j = 0,
                    k = null,
                    l = new qg(b, a.options.tabSize),
                    m = a.options.addModeClass && [null];
                for ("" == b && Dd(Ed(c, d), f); !l.eol();) {
                    if (l.pos > a.options.maxHighlightLength ? (h = !1, g && Kd(a, b, d, l.pos), l.pos = b.length, i = null) : i = Dd(Fd(c, l, d, m), f), m) {
                        var n = m[0].name;
                        n && (i = "m-" + (i ? n + " " + i : n))
                    }
                    if (!h || k != i) {
                        for (; j < l.start;) j = Math.min(l.start, j + 5e3), e(j, k);
                        k = i
                    }
                    l.start = l.pos
                }
                for (; j < l.pos;) {
                    var o = Math.min(l.pos, j + 5e3);
                    e(o, k), j = o
                }
            }

            function Id(a, b, c, d) {
                var e = [a.state.modeGen],
                    f = {};
                Hd(a, b.text, a.doc.mode, c, function (a, b) {
                    e.push(a, b)
                }, f, d);
                for (var g = 0; g < a.state.overlays.length; ++g) {
                    var h = a.state.overlays[g],
                        i = 1,
                        j = 0;
                    Hd(a, b.text, h.mode, !0, function (a, b) {
                        for (var c = i; j < a;) {
                            var d = e[i];
                            d > a && e.splice(i, 1, a, e[i + 1], d), i += 2, j = Math.min(a, d)
                        }
                        if (b)
                            if (h.opaque) e.splice(c, i - c, a, "cm-overlay " + b), i = c + 2;
                            else
                                for (; c < i; c += 2) {
                                    var f = e[c + 1];
                                    e[c + 1] = (f ? f + " " : "") + "cm-overlay " + b
                                }
                    }, f)
                }
                return {
                    styles: e,
                    classes: f.bgClass || f.textClass ? f : null
                }
            }

            function Jd(a, b, c) {
                if (!b.styles || b.styles[0] != a.state.modeGen) {
                    var d = Qa(a, be(b)),
                        e = Id(a, b, b.text.length > a.options.maxHighlightLength ? jg(a.doc.mode, d) : d);
                    b.stateAfter = d, b.styles = e.styles, e.classes ? b.styleClasses = e.classes : b.styleClasses && (b.styleClasses = null), c === a.doc.frontier && a.doc.frontier++
                }
                return b.styles
            }

            function Kd(a, b, c, d) {
                var e = a.doc.mode,
                    f = new qg(b, a.options.tabSize);
                for (f.start = f.pos = d || 0, "" == b && Ed(e, c); !f.eol();) Fd(e, f, c), f.start = f.pos
            }

            function Ld(a, b) {
                if (!a || /^\s*$/.test(a)) return null;
                var c = b.addModeClass ? xg : wg;
                return c[a] || (c[a] = a.replace(/\S+/g, "cm-$&"))
            }

            function Md(a, b) {
                var c = Re("span", null, null, wf ? "padding-right: .1px" : null),
                    d = {
                        pre: Re("pre", [c], "CodeMirror-line"),
                        content: c,
                        col: 0,
                        pos: 0,
                        cm: a,
                        trailingSpace: !1,
                        splitSpaces: (uf || wf) && a.getOption("lineWrapping")
                    };
                b.measure = {};
                for (var e = 0; e <= (b.rest ? b.rest.length : 0); e++) {
                    var f, g = e ? b.rest[e - 1] : b.line;
                    d.pos = 0, d.addToken = Od, _e(a.display.measure) && (f = ee(g)) && (d.addToken = Qd(d.addToken, f)), d.map = [];
                    var h = b != a.display.externalMeasured && be(g);
                    Sd(g, d, Jd(a, g, h)), g.styleClasses && (g.styleClasses.bgClass && (d.bgClass = We(g.styleClasses.bgClass, d.bgClass || "")), g.styleClasses.textClass && (d.textClass = We(g.styleClasses.textClass, d.textClass || ""))), 0 == d.map.length && d.map.push(0, 0, d.content.appendChild($e(a.display.measure))), 0 == e ? (b.measure.map = d.map, b.measure.cache = {}) : ((b.measure.maps || (b.measure.maps = [])).push(d.map), (b.measure.caches || (b.measure.caches = [])).push({}))
                }
                if (wf) {
                    var i = d.content.lastChild;
                    (/\bcm-tab\b/.test(i.className) || i.querySelector && i.querySelector(".cm-tab")) && (d.content.className = "cm-tab-wrap-hack")
                }
                return Ig(a, "renderLine", a, b.line, d.pre), d.pre.className && (d.textClass = We(d.pre.className, d.textClass || "")), d
            }

            function Nd(a) {
                var b = Re("span", "•", "cm-invalidchar");
                return b.title = "\\u" + a.charCodeAt(0).toString(16), b.setAttribute("aria-label", b.title), b
            }

            function Od(a, b, c, d, e, f, g) {
                if (b) {
                    var h = a.splitSpaces ? Pd(b, a.trailingSpace) : b,
                        i = a.cm.state.specialChars,
                        j = !1;
                    if (i.test(b))
                        for (var k = document.createDocumentFragment(), l = 0; ;) {
                            i.lastIndex = l;
                            var m = i.exec(b),
                                n = m ? m.index - l : b.length - l;
                            if (n) {
                                var o = document.createTextNode(h.slice(l, l + n));
                                uf && vf < 9 ? k.appendChild(Re("span", [o])) : k.appendChild(o), a.map.push(a.pos, a.pos + n, o), a.col += n, a.pos += n
                            }
                            if (!m) break;
                            if (l += n + 1, "\t" == m[0]) {
                                var p = a.cm.options.tabSize,
                                    q = p - a.col % p,
                                    o = k.appendChild(Re("span", Fe(q), "cm-tab"));
                                o.setAttribute("role", "presentation"), o.setAttribute("cm-text", "\t"), a.col += q
                            } else if ("\r" == m[0] || "\n" == m[0]) {
                                var o = k.appendChild(Re("span", "\r" == m[0] ? "␍" : "␤", "cm-invalidchar"));
                                o.setAttribute("cm-text", m[0]), a.col += 1
                            } else {
                                var o = a.cm.options.specialCharPlaceholder(m[0]);
                                o.setAttribute("cm-text", m[0]), uf && vf < 9 ? k.appendChild(Re("span", [o])) : k.appendChild(o), a.col += 1
                            }
                            a.map.push(a.pos, a.pos + 1, o), a.pos++
                        } else {
                        a.col += b.length;
                        var k = document.createTextNode(h);
                        a.map.push(a.pos, a.pos + b.length, k), uf && vf < 9 && (j = !0), a.pos += b.length
                    }
                    if (a.trailingSpace = 32 == h.charCodeAt(b.length - 1), c || d || e || j || g) {
                        var r = c || "";
                        d && (r += d), e && (r += e);
                        var s = Re("span", [k], r, g);
                        return f && (s.title = f), a.content.appendChild(s)
                    }
                    a.content.appendChild(k)
                }
            }

            function Pd(a, b) {
                if (a.length > 1 && !/  /.test(a)) return a;
                for (var c = b, d = "", e = 0; e < a.length; e++) {
                    var f = a.charAt(e);
                    " " != f || !c || e != a.length - 1 && 32 != a.charCodeAt(e + 1) || (f = " "), d += f, c = " " == f
                }
                return d
            }

            function Qd(a, b) {
                return function (c, d, e, f, g, h, i) {
                    e = e ? e + " cm-force-border" : "cm-force-border";
                    for (var j = c.pos, k = j + d.length; ;) {
                        for (var l = 0; l < b.length; l++) {
                            var m = b[l];
                            if (m.to > j && m.from <= j) break
                        }
                        if (m.to >= k) return a(c, d, e, f, g, h, i);
                        a(c, d.slice(0, m.to - j), e, f, null, h, i), f = null, d = d.slice(m.to - j), j = m.to
                    }
                }
            }

            function Rd(a, b, c, d) {
                var e = !d && c.widgetNode;
                e && a.map.push(a.pos, a.pos + b, e), !d && a.cm.display.input.needsContentAttribute && (e || (e = a.content.appendChild(document.createElement("span"))), e.setAttribute("cm-marker", c.id)), e && (a.cm.display.input.setUneditable(e), a.content.appendChild(e)), a.pos += b, a.trailingSpace = !1
            }

            function Sd(a, b, c) {
                var d = a.markedSpans,
                    e = a.text,
                    f = 0;
                if (d)
                    for (var g, h, i, j, k, l, m, n = e.length, o = 0, p = 1, q = "", r = 0; ;) {
                        if (r == o) {
                            i = j = k = l = h = "", m = null, r = 1 / 0;
                            for (var s, t = [], u = 0; u < d.length; ++u) {
                                var v = d[u],
                                    w = v.marker;
                                "bookmark" == w.type && v.from == o && w.widgetNode ? t.push(w) : v.from <= o && (null == v.to || v.to > o || w.collapsed && v.to == o && v.from == o) ? (null != v.to && v.to != o && r > v.to && (r = v.to, j = ""), w.className && (i += " " + w.className), w.css && (h = (h ? h + ";" : "") + w.css), w.startStyle && v.from == o && (k += " " + w.startStyle), w.endStyle && v.to == r && (s || (s = [])).push(w.endStyle, v.to), w.title && !l && (l = w.title), w.collapsed && (!m || nd(m.marker, w) < 0) && (m = v)) : v.from > o && r > v.from && (r = v.from)
                            }
                            if (s)
                                for (var u = 0; u < s.length; u += 2) s[u + 1] == r && (j += " " + s[u]);
                            if (!m || m.from == o)
                                for (var u = 0; u < t.length; ++u) Rd(b, 0, t[u]);
                            if (m && (m.from || 0) == o) {
                                if (Rd(b, (null == m.to ? n + 1 : m.to) - o, m.marker, null == m.from), null == m.to) return;
                                m.to == o && (m = !1)
                            }
                        }
                        if (o >= n) break;
                        for (var x = Math.min(n, r); ;) {
                            if (q) {
                                var y = o + q.length;
                                if (!m) {
                                    var z = y > x ? q.slice(0, x - o) : q;
                                    b.addToken(b, z, g ? g + i : i, k, o + z.length == r ? j : "", l, h)
                                }
                                if (y >= x) {
                                    q = q.slice(x - o), o = x;
                                    break
                                }
                                o = y, k = ""
                            }
                            q = e.slice(f, f = c[p++]), g = Ld(c[p++], b.cm.options)
                        }
                    } else
                    for (var p = 1; p < c.length; p += 2) b.addToken(b, e.slice(f, f = c[p]), Ld(c[p + 1], b.cm.options))
            }

            function Td(a, b) {
                return 0 == b.from.ch && 0 == b.to.ch && "" == Ge(b.text) && (!a.cm || a.cm.options.wholeLineUpdateBefore)
            }

            function Ud(a, b, c, d) {
                function e(a) {
                    return c ? c[a] : null
                }

                function f(a, c, e) {
                    Bd(a, c, e, d), ye(a, "change", a, b)
                }

                function g(a, b) {
                    for (var c = a, f = []; c < b; ++c) f.push(new vg(j[c], e(c), d));
                    return f
                }
                var h = b.from,
                    i = b.to,
                    j = b.text,
                    k = Zd(a, h.line),
                    l = Zd(a, i.line),
                    m = Ge(j),
                    n = e(j.length - 1),
                    o = i.line - h.line;
                if (b.full) a.insert(0, g(0, j.length)), a.remove(j.length, a.size - j.length);
                else if (Td(a, b)) {
                    var p = g(0, j.length - 1);
                    f(l, l.text, n), o && a.remove(h.line, o), p.length && a.insert(h.line, p)
                } else if (k == l)
                    if (1 == j.length) f(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n);
                    else {
                        var p = g(1, j.length - 1);
                        p.push(new vg(m + k.text.slice(i.ch), n, d)), f(k, k.text.slice(0, h.ch) + j[0], e(0)), a.insert(h.line + 1, p)
                    } else if (1 == j.length) f(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), e(0)), a.remove(h.line + 1, o);
                else {
                    f(k, k.text.slice(0, h.ch) + j[0], e(0)), f(l, m + l.text.slice(i.ch), n);
                    var p = g(1, j.length - 1);
                    o > 1 && a.remove(h.line + 1, o - 1), a.insert(h.line + 1, p)
                }
                ye(a, "change", a, b)
            }

            function Vd(a) {
                this.lines = a, this.parent = null;
                for (var b = 0, c = 0; b < a.length; ++b) a[b].parent = this, c += a[b].height;
                this.height = c
            }

            function Wd(a) {
                this.children = a;
                for (var b = 0, c = 0, d = 0; d < a.length; ++d) {
                    var e = a[d];
                    b += e.chunkSize(), c += e.height, e.parent = this
                }
                this.size = b, this.height = c, this.parent = null
            }

            function Xd(a, b, c) {
                function d(a, e, f) {
                    if (a.linked)
                        for (var g = 0; g < a.linked.length; ++g) {
                            var h = a.linked[g];
                            if (h.doc != e) {
                                var i = f && h.sharedHist;
                                c && !i || (b(h.doc, i), d(h.doc, a, i))
                            }
                        }
                }
                d(a, null, !0)
            }

            function Yd(a, b) {
                if (b.cm) throw new Error("This document is already in use.");
                a.doc = b, b.cm = a, g(a), c(a), a.options.lineWrapping || m(a), a.options.mode = b.modeOption, Kb(a)
            }

            function Zd(a, b) {
                if (b -= a.first, b < 0 || b >= a.size) throw new Error("There is no line " + (b + a.first) + " in the document.");
                for (var c = a; !c.lines;)
                    for (var d = 0; ; ++d) {
                        var e = c.children[d],
                            f = e.chunkSize();
                        if (b < f) {
                            c = e;
                            break
                        }
                        b -= f
                    }
                return c.lines[b]
            }

            function $d(a, b, c) {
                var d = [],
                    e = b.line;
                return a.iter(b.line, c.line + 1, function (a) {
                    var f = a.text;
                    e == c.line && (f = f.slice(0, c.ch)), e == b.line && (f = f.slice(b.ch)), d.push(f), ++e
                }), d
            }

            function _d(a, b, c) {
                var d = [];
                return a.iter(b, c, function (a) {
                    d.push(a.text)
                }), d
            }

            function ae(a, b) {
                var c = b - a.height;
                if (c)
                    for (var d = a; d; d = d.parent) d.height += c
            }

            function be(a) {
                if (null == a.parent) return null;
                for (var b = a.parent, c = He(b.lines, a), d = b.parent; d; b = d, d = d.parent)
                    for (var e = 0; d.children[e] != b; ++e) c += d.children[e].chunkSize();
                return c + b.first
            }

            function ce(a, b) {
                var c = a.first;
                a: do {
                    for (var d = 0; d < a.children.length; ++d) {
                        var e = a.children[d],
                            f = e.height;
                        if (b < f) {
                            a = e;
                            continue a
                        }
                        b -= f, c += e.chunkSize()
                    }
                    return c
                } while (!a.lines);
                for (var d = 0; d < a.lines.length; ++d) {
                    var g = a.lines[d],
                        h = g.height;
                    if (b < h) break;
                    b -= h
                }
                return c + d
            }

            function de(a) {
                a = sd(a);
                for (var b = 0, c = a.parent, d = 0; d < c.lines.length; ++d) {
                    var e = c.lines[d];
                    if (e == a) break;
                    b += e.height
                }
                for (var f = c.parent; f; c = f, f = c.parent)
                    for (var d = 0; d < f.children.length; ++d) {
                        var g = f.children[d];
                        if (g == c) break;
                        b += g.height
                    }
                return b
            }

            function ee(a) {
                var b = a.order;
                return null == b && (b = a.order = ih(a.text)), b
            }

            function fe(a) {
                this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = a || 1
            }

            function ge(a, b) {
                var c = {
                    from: V(b.from),
                    to: ag(b),
                    text: $d(a, b.from, b.to)
                };
                return ne(a, c, b.from.line, b.to.line + 1), Xd(a, function (a) {
                    ne(a, c, b.from.line, b.to.line + 1)
                }, !0), c
            }

            function he(a) {
                for (; a.length;) {
                    var b = Ge(a);
                    if (!b.ranges) break;
                    a.pop()
                }
            }

            function ie(a, b) {
                return b ? (he(a.done), Ge(a.done)) : a.done.length && !Ge(a.done).ranges ? Ge(a.done) : a.done.length > 1 && !a.done[a.done.length - 2].ranges ? (a.done.pop(), Ge(a.done)) : void 0
            }

            function je(a, b, c, d) {
                var e = a.history;
                e.undone.length = 0;
                var f, g = +new Date;
                if ((e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastModTime > g - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0))) && (f = ie(e, e.lastOp == d))) {
                    var h = Ge(f.changes);
                    0 == Of(b.from, b.to) && 0 == Of(b.from, h.to) ? h.to = ag(b) : f.changes.push(ge(a, b))
                } else {
                    var i = Ge(e.done);
                    for (i && i.ranges || me(a.sel, e.done), f = {
                        changes: [ge(a, b)],
                        generation: e.generation
                    }, e.done.push(f); e.done.length > e.undoDepth;) e.done.shift(), e.done[0].ranges || e.done.shift()
                }
                e.done.push(c), e.generation = ++e.maxGeneration, e.lastModTime = e.lastSelTime = g, e.lastOp = e.lastSelOp = d, e.lastOrigin = e.lastSelOrigin = b.origin, h || Ig(a, "historyAdded")
            }

            function ke(a, b, c, d) {
                var e = b.charAt(0);
                return "*" == e || "+" == e && c.ranges.length == d.ranges.length && c.somethingSelected() == d.somethingSelected() && new Date - a.history.lastSelTime <= (a.cm ? a.cm.options.historyEventDelay : 500)
            }

            function le(a, b, c, d) {
                var e = a.history,
                    f = d && d.origin;
                c == e.lastSelOp || f && e.lastSelOrigin == f && (e.lastModTime == e.lastSelTime && e.lastOrigin == f || ke(a, f, Ge(e.done), b)) ? e.done[e.done.length - 1] = b : me(b, e.done), e.lastSelTime = +new Date, e.lastSelOrigin = f, e.lastSelOp = c, d && d.clearRedo !== !1 && he(e.undone)
            }

            function me(a, b) {
                var c = Ge(b);
                c && c.ranges && c.equals(a) || b.push(a)
            }

            function ne(a, b, c, d) {
                var e = b["spans_" + a.id],
                    f = 0;
                a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function (c) {
                    c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans), ++f
                })
            }

            function oe(a) {
                if (!a) return null;
                for (var b, c = 0; c < a.length; ++c) a[c].marker.explicitlyCleared ? b || (b = a.slice(0, c)) : b && b.push(a[c]);
                return b ? b.length ? b : null : a
            }

            function pe(a, b) {
                var c = b["spans_" + a.id];
                if (!c) return null;
                for (var d = 0, e = []; d < b.text.length; ++d) e.push(oe(c[d]));
                return e
            }

            function qe(a, b, c) {
                for (var d = 0, e = []; d < a.length; ++d) {
                    var f = a[d];
                    if (f.ranges) e.push(c ? ka.prototype.deepCopy.call(f) : f);
                    else {
                        var g = f.changes,
                            h = [];
                        e.push({
                            changes: h
                        });
                        for (var i = 0; i < g.length; ++i) {
                            var j, k = g[i];
                            if (h.push({
                                from: k.from,
                                to: k.to,
                                text: k.text
                            }), b)
                                for (var l in k) (j = l.match(/^spans_(\d+)$/)) && He(b, Number(j[1])) > -1 && (Ge(h)[l] = k[l], delete k[l])
                        }
                    }
                }
                return e
            }

            function re(a, b, c, d) {
                c < a.line ? a.line += d : b < a.line && (a.line = b, a.ch = 0)
            }

            function se(a, b, c, d) {
                for (var e = 0; e < a.length; ++e) {
                    var f = a[e],
                        g = !0;
                    if (f.ranges) {
                        f.copied || (f = a[e] = f.deepCopy(), f.copied = !0);
                        for (var h = 0; h < f.ranges.length; h++) re(f.ranges[h].anchor, b, c, d), re(f.ranges[h].head, b, c, d)
                    } else {
                        for (var h = 0; h < f.changes.length; ++h) {
                            var i = f.changes[h];
                            if (c < i.from.line) i.from = Nf(i.from.line + d, i.from.ch), i.to = Nf(i.to.line + d, i.to.ch);
                            else if (b <= i.to.line) {
                                g = !1;
                                break
                            }
                        }
                        g || (a.splice(0, e + 1), e = 0)
                    }
                }
            }

            function te(a, b) {
                var c = b.from.line,
                    d = b.to.line,
                    e = b.text.length - (d - c) - 1;
                se(a.done, c, d, e), se(a.undone, c, d, e)
            }

            function ue(a) {
                return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue
            }

            function ve(a) {
                return a.target || a.srcElement
            }

            function we(a) {
                var b = a.which;
                return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)), Ff && a.ctrlKey && 1 == b && (b = 3), b
            }

            function xe(a, b, c) {
                var d = a._handlers && a._handlers[b];
                return c ? d && d.length > 0 ? d.slice() : Gg : d || Gg
            }

            function ye(a, b) {
                function c(a) {
                    return function () {
                        a.apply(null, f)
                    }
                }
                var d = xe(a, b, !1);
                if (d.length) {
                    var e, f = Array.prototype.slice.call(arguments, 2);
                    Uf ? e = Uf.delayedCallbacks : Jg ? e = Jg : (e = Jg = [], setTimeout(ze, 0));
                    for (var g = 0; g < d.length; ++g) e.push(c(d[g]))
                }
            }

            function ze() {
                var a = Jg;
                Jg = null;
                for (var b = 0; b < a.length; ++b) a[b]()
            }

            function Ae(a, b, c) {
                return "string" == typeof b && (b = {
                    type: b,
                    preventDefault: function () {
                        this.defaultPrevented = !0
                    }
                }), Ig(a, c || b.type, a, b), ue(b) || b.codemirrorIgnore
            }

            function Be(a) {
                var b = a._handlers && a._handlers.cursorActivity;
                if (b)
                    for (var c = a.curOp.cursorActivityHandlers || (a.curOp.cursorActivityHandlers = []), d = 0; d < b.length; ++d) He(c, b[d]) == -1 && c.push(b[d])
            }

            function Ce(a, b) {
                return xe(a, b).length > 0
            }

            function De(a) {
                a.prototype.on = function (a, b) {
                    Fg(this, a, b)
                }, a.prototype.off = function (a, b) {
                    Hg(this, a, b)
                }
            }

            function Ee() {
                this.id = null
            }

            function Fe(a) {
                for (; Rg.length <= a;) Rg.push(Ge(Rg) + " ");
                return Rg[a]
            }

            function Ge(a) {
                return a[a.length - 1]
            }

            function He(a, b) {
                for (var c = 0; c < a.length; ++c)
                    if (a[c] == b) return c;
                return -1
            }

            function Ie(a, b) {
                for (var c = [], d = 0; d < a.length; d++) c[d] = b(a[d], d);
                return c
            }

            function Je(a, b, c) {
                for (var d = 0, e = c(b); d < a.length && c(a[d]) <= e;) d++;
                a.splice(d, 0, b)
            }

            function Ke() { }

            function Le(a, b) {
                var c;
                return Object.create ? c = Object.create(a) : (Ke.prototype = a, c = new Ke), b && Me(b, c), c
            }

            function Me(a, b, c) {
                b || (b = {});
                for (var d in a) !a.hasOwnProperty(d) || c === !1 && b.hasOwnProperty(d) || (b[d] = a[d]);
                return b
            }

            function Ne(a) {
                var b = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return a.apply(null, b)
                }
            }

            function Oe(a, b) {
                return b ? !!(b.source.indexOf("\\w") > -1 && Vg(a)) || b.test(a) : Vg(a)
            }

            function Pe(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b) && a[b]) return !1;
                return !0
            }

            function Qe(a) {
                return a.charCodeAt(0) >= 768 && Wg.test(a)
            }

            function Re(a, b, c, d) {
                var e = document.createElement(a);
                if (c && (e.className = c), d && (e.style.cssText = d), "string" == typeof b) e.appendChild(document.createTextNode(b));
                else if (b)
                    for (var f = 0; f < b.length; ++f) e.appendChild(b[f]);
                return e
            }

            function Se(a) {
                for (var b = a.childNodes.length; b > 0; --b) a.removeChild(a.firstChild);
                return a
            }

            function Te(a, b) {
                return Se(a).appendChild(b)
            }

            function Ue() {
                for (var a = document.activeElement; a && a.root && a.root.activeElement;) a = a.root.activeElement;
                return a
            }

            function Ve(a) {
                return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*")
            }

            function We(a, b) {
                for (var c = a.split(" "), d = 0; d < c.length; d++) c[d] && !Ve(c[d]).test(b) && (b += " " + c[d]);
                return b
            }

            function Xe(a) {
                if (document.body.getElementsByClassName)
                    for (var b = document.body.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++) {
                        var d = b[c].CodeMirror;
                        d && a(d)
                    }
            }

            function Ye() {
                ah || (Ze(), ah = !0)
            }

            function Ze() {
                var a;
                Fg(window, "resize", function () {
                    null == a && (a = setTimeout(function () {
                        a = null, Xe(Tb)
                    }, 100))
                }), Fg(window, "blur", function () {
                    Xe(sc)
                })
            }

            function $e(a) {
                if (null == Yg) {
                    var b = Re("span", "​");
                    Te(a, Re("span", [b, document.createTextNode("x")])), 0 != a.firstChild.offsetHeight && (Yg = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(uf && vf < 8))
                }
                var c = Yg ? Re("span", "​") : Re("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return c.setAttribute("cm-text", ""), c
            }

            function _e(a) {
                if (null != Zg) return Zg;
                var b = Te(a, document.createTextNode("AخA")),
                    c = Tg(b, 0, 1).getBoundingClientRect(),
                    d = Tg(b, 1, 2).getBoundingClientRect();
                return Se(a), !(!c || c.left == c.right) && (Zg = d.right - c.right < 3)
            }

            function af(a) {
                if (null != fh) return fh;
                var b = Te(a, Re("span", "x")),
                    c = b.getBoundingClientRect(),
                    d = Tg(b, 0, 1).getBoundingClientRect();
                return fh = Math.abs(c.left - d.left) > 1
            }

            function bf(a, b, c, d) {
                if (!a) return d(b, c, "ltr");
                for (var e = !1, f = 0; f < a.length; ++f) {
                    var g = a[f];
                    (g.from < c && g.to > b || b == c && g.to == b) && (d(Math.max(g.from, b), Math.min(g.to, c), 1 == g.level ? "rtl" : "ltr"), e = !0)
                }
                e || d(b, c, "ltr")
            }

            function cf(a) {
                return a.level % 2 ? a.to : a.from
            }

            function df(a) {
                return a.level % 2 ? a.from : a.to
            }

            function ef(a) {
                var b = ee(a);
                return b ? cf(b[0]) : 0
            }

            function ff(a) {
                var b = ee(a);
                return b ? df(Ge(b)) : a.text.length
            }

            function gf(a, b) {
                var c = Zd(a.doc, b),
                    d = sd(c);
                d != c && (b = be(d));
                var e = ee(d),
                    f = e ? e[0].level % 2 ? ff(d) : ef(d) : 0;
                return Nf(b, f)
            }

            function hf(a, b) {
                for (var c, d = Zd(a.doc, b); c = qd(d);) d = c.find(1, !0).line, b = null;
                var e = ee(d),
                    f = e ? e[0].level % 2 ? ef(d) : ff(d) : d.text.length;
                return Nf(null == b ? be(d) : b, f)
            }

            function jf(a, b) {
                var c = gf(a, b.line),
                    d = Zd(a.doc, c.line),
                    e = ee(d);
                if (!e || 0 == e[0].level) {
                    var f = Math.max(0, d.text.search(/\S/)),
                        g = b.line == c.line && b.ch <= f && b.ch;
                    return Nf(c.line, g ? 0 : f)
                }
                return c
            }

            function kf(a, b, c) {
                var d = a[0].level;
                return b == d || c != d && b < c
            }

            function lf(a, b) {
                hh = null;
                for (var c, d = 0; d < a.length; ++d) {
                    var e = a[d];
                    if (e.from < b && e.to > b) return d;
                    if (e.from == b || e.to == b) {
                        if (null != c) return kf(a, e.level, a[c].level) ? (e.from != e.to && (hh = c), d) : (e.from != e.to && (hh = d), c);
                        c = d
                    }
                }
                return c
            }

            function mf(a, b, c, d) {
                if (!d) return b + c;
                do b += c; while (b > 0 && Qe(a.text.charAt(b)));
                return b
            }

            function nf(a, b, c, d) {
                var e = ee(a);
                if (!e) return of(a, b, c, d);
                for (var f = lf(e, b), g = e[f], h = mf(a, b, g.level % 2 ? -c : c, d); ;) {
                    if (h > g.from && h < g.to) return h;
                    if (h == g.from || h == g.to) return lf(e, h) == f ? h : (g = e[f += c], c > 0 == g.level % 2 ? g.to : g.from);
                    if (g = e[f += c], !g) return null;
                    h = c > 0 == g.level % 2 ? mf(a, g.to, -1, d) : mf(a, g.from, 1, d)
                }
            }

            function of(a, b, c, d) {
                var e = b + c;
                if (d)
                    for (; e > 0 && Qe(a.text.charAt(e));) e += c;
                return e < 0 || e > a.text.length ? null : e
            }
            var pf = navigator.userAgent,
                qf = navigator.platform,
                rf = /gecko\/\d/i.test(pf),
                sf = /MSIE \d/.test(pf),
                tf = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pf),
                uf = sf || tf,
                vf = uf && (sf ? document.documentMode || 6 : tf[1]),
                wf = /WebKit\//.test(pf),
                xf = wf && /Qt\/\d+\.\d+/.test(pf),
                yf = /Chrome\//.test(pf),
                zf = /Opera\//.test(pf),
                Af = /Apple Computer/.test(navigator.vendor),
                Bf = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(pf),
                Cf = /PhantomJS/.test(pf),
                Df = /AppleWebKit/.test(pf) && /Mobile\/\w+/.test(pf),
                Ef = Df || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(pf),
                Ff = Df || /Mac/.test(qf),
                Gf = /\bCrOS\b/.test(pf),
                Hf = /win/i.test(qf),
                If = zf && pf.match(/Version\/(\d*\.\d*)/);
            If && (If = Number(If[1])), If && If >= 15 && (zf = !1, wf = !0);
            var Jf = Ff && (xf || zf && (null == If || If < 12.11)),
                Kf = rf || uf && vf >= 9,
                Lf = !1,
                Mf = !1;
            p.prototype = Me({
                update: function (a) {
                    var b = a.scrollWidth > a.clientWidth + 1,
                        c = a.scrollHeight > a.clientHeight + 1,
                        d = a.nativeBarWidth;
                    if (c) {
                        this.vert.style.display = "block", this.vert.style.bottom = b ? d + "px" : "0";
                        var e = a.viewHeight - (b ? d : 0);
                        this.vert.firstChild.style.height = Math.max(0, a.scrollHeight - a.clientHeight + e) + "px"
                    } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                    if (b) {
                        this.horiz.style.display = "block", this.horiz.style.right = c ? d + "px" : "0", this.horiz.style.left = a.barLeft + "px";
                        var f = a.viewWidth - a.barLeft - (c ? d : 0);
                        this.horiz.firstChild.style.width = a.scrollWidth - a.clientWidth + f + "px"
                    } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                    return !this.checkedZeroWidth && a.clientHeight > 0 && (0 == d && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                        right: c ? d : 0,
                        bottom: b ? d : 0
                    }
                },
                setScrollLeft: function (a) {
                    this.horiz.scrollLeft != a && (this.horiz.scrollLeft = a), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
                },
                setScrollTop: function (a) {
                    this.vert.scrollTop != a && (this.vert.scrollTop = a), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
                },
                zeroWidthHack: function () {
                    var a = Ff && !Bf ? "12px" : "18px";
                    this.horiz.style.height = this.vert.style.width = a, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ee, this.disableVert = new Ee
                },
                enableZeroWidthBar: function (a, b) {
                    function c() {
                        var d = a.getBoundingClientRect(),
                            e = document.elementFromPoint(d.left + 1, d.bottom - 1);
                        e != a ? a.style.pointerEvents = "none" : b.set(1e3, c)
                    }
                    a.style.pointerEvents = "auto", b.set(1e3, c)
                },
                clear: function () {
                    var a = this.horiz.parentNode;
                    a.removeChild(this.horiz), a.removeChild(this.vert)
                }
            }, p.prototype), q.prototype = Me({
                update: function () {
                    return {
                        bottom: 0,
                        right: 0
                    }
                },
                setScrollLeft: function () { },
                setScrollTop: function () { },
                clear: function () { }
            }, q.prototype), a.scrollbarModel = {
                native: p,
                null: q
            }, z.prototype.signal = function (a, b) {
                Ce(a, b) && this.events.push(arguments)
            }, z.prototype.finish = function () {
                for (var a = 0; a < this.events.length; a++) Ig.apply(null, this.events[a])
            };
            var Nf = a.Pos = function (a, b) {
                return this instanceof Nf ? (this.line = a, void (this.ch = b)) : new Nf(a, b)
            },
                Of = a.cmpPos = function (a, b) {
                    return a.line - b.line || a.ch - b.ch
                },
                Pf = null;
            ca.prototype = Me({
                init: function (a) {
                    function b(a) {
                        if (!Ae(d, a)) {
                            if (d.somethingSelected()) Pf = {
                                lineWise: !1,
                                text: d.getSelections()
                            }, c.inaccurateSelection && (c.prevInput = "", c.inaccurateSelection = !1, f.value = Pf.text.join("\n"), Sg(f));
                            else {
                                if (!d.options.lineWiseCopyCut) return;
                                var b = aa(d);
                                Pf = {
                                    lineWise: !0,
                                    text: b.text
                                }, "cut" == a.type ? d.setSelections(b.ranges, null, Mg) : (c.prevInput = "", f.value = b.text.join("\n"), Sg(f))
                            }
                            "cut" == a.type && (d.state.cutIncoming = !0)
                        }
                    }
                    var c = this,
                        d = this.cm,
                        e = this.wrapper = da(),
                        f = this.textarea = e.firstChild;
                    a.wrapper.insertBefore(e, a.wrapper.firstChild), Df && (f.style.width = "0px"), Fg(f, "input", function () {
                        uf && vf >= 9 && c.hasSelection && (c.hasSelection = null), c.poll()
                    }), Fg(f, "paste", function (a) {
                        Ae(d, a) || $(a, d) || (d.state.pasteIncoming = !0, c.fastPoll())
                    }), Fg(f, "cut", b), Fg(f, "copy", b), Fg(a.scroller, "paste", function (b) {
                        Ub(a, b) || Ae(d, b) || (d.state.pasteIncoming = !0, c.focus())
                    }), Fg(a.lineSpace, "selectstart", function (b) {
                        Ub(a, b) || Cg(b)
                    }), Fg(f, "compositionstart", function () {
                        var a = d.getCursor("from");
                        c.composing && c.composing.range.clear(), c.composing = {
                            start: a,
                            range: d.markText(a, d.getCursor("to"), {
                                className: "CodeMirror-composing"
                            })
                        }
                    }), Fg(f, "compositionend", function () {
                        c.composing && (c.poll(), c.composing.range.clear(), c.composing = null)
                    })
                },
                prepareSelection: function () {
                    var a = this.cm,
                        b = a.display,
                        c = a.doc,
                        d = Ja(a);
                    if (a.options.moveInputWithCursor) {
                        var e = ob(a, c.sel.primary().head, "div"),
                            f = b.wrapper.getBoundingClientRect(),
                            g = b.lineDiv.getBoundingClientRect();
                        d.teTop = Math.max(0, Math.min(b.wrapper.clientHeight - 10, e.top + g.top - f.top)), d.teLeft = Math.max(0, Math.min(b.wrapper.clientWidth - 10, e.left + g.left - f.left))
                    }
                    return d
                },
                showSelection: function (a) {
                    var b = this.cm,
                        c = b.display;
                    Te(c.cursorDiv, a.cursors), Te(c.selectionDiv, a.selection), null != a.teTop && (this.wrapper.style.top = a.teTop + "px", this.wrapper.style.left = a.teLeft + "px")
                },
                reset: function (a) {
                    if (!this.contextMenuPending) {
                        var b, c, d = this.cm,
                            e = d.doc;
                        if (d.somethingSelected()) {
                            this.prevInput = "";
                            var f = e.sel.primary();
                            b = eh && (f.to().line - f.from().line > 100 || (c = d.getSelection()).length > 1e3);
                            var g = b ? "-" : c || d.getSelection();
                            this.textarea.value = g, d.state.focused && Sg(this.textarea), uf && vf >= 9 && (this.hasSelection = g)
                        } else a || (this.prevInput = this.textarea.value = "", uf && vf >= 9 && (this.hasSelection = null));
                        this.inaccurateSelection = b
                    }
                },
                getField: function () {
                    return this.textarea
                },
                supportsTouch: function () {
                    return !1
                },
                focus: function () {
                    if ("nocursor" != this.cm.options.readOnly && (!Ef || Ue() != this.textarea)) try {
                        this.textarea.focus()
                    } catch (a) { }
                },
                blur: function () {
                    this.textarea.blur()
                },
                resetPosition: function () {
                    this.wrapper.style.top = this.wrapper.style.left = 0
                },
                receivedFocus: function () {
                    this.slowPoll()
                },
                slowPoll: function () {
                    var a = this;
                    a.pollingFast || a.polling.set(this.cm.options.pollInterval, function () {
                        a.poll(), a.cm.state.focused && a.slowPoll()
                    })
                },
                fastPoll: function () {
                    function a() {
                        var d = c.poll();
                        d || b ? (c.pollingFast = !1, c.slowPoll()) : (b = !0, c.polling.set(60, a))
                    }
                    var b = !1,
                        c = this;
                    c.pollingFast = !0, c.polling.set(20, a)
                },
                poll: function () {
                    var a = this.cm,
                        b = this.textarea,
                        c = this.prevInput;
                    if (this.contextMenuPending || !a.state.focused || dh(b) && !c && !this.composing || a.isReadOnly() || a.options.disableInput || a.state.keySeq) return !1;
                    var d = b.value;
                    if (d == c && !a.somethingSelected()) return !1;
                    if (uf && vf >= 9 && this.hasSelection === d || Ff && /[\uf700-\uf7ff]/.test(d)) return a.display.input.reset(), !1;
                    if (a.doc.sel == a.display.selForContextMenu) {
                        var e = d.charCodeAt(0);
                        if (8203 != e || c || (c = "​"), 8666 == e) return this.reset(), this.cm.execCommand("undo")
                    }
                    for (var f = 0, g = Math.min(c.length, d.length); f < g && c.charCodeAt(f) == d.charCodeAt(f);)++f;
                    var h = this;
                    return Eb(a, function () {
                        Z(a, d.slice(f), c.length - f, null, h.composing ? "*compose" : null), d.length > 1e3 || d.indexOf("\n") > -1 ? b.value = h.prevInput = "" : h.prevInput = d, h.composing && (h.composing.range.clear(), h.composing.range = a.markText(h.composing.start, a.getCursor("to"), {
                            className: "CodeMirror-composing"
                        }))
                    }), !0
                },
                ensurePolled: function () {
                    this.pollingFast && this.poll() && (this.pollingFast = !1)
                },
                onKeyPress: function () {
                    uf && vf >= 9 && (this.hasSelection = null), this.fastPoll()
                },
                onContextMenu: function (a) {
                    function b() {
                        if (null != g.selectionStart) {
                            var a = e.somethingSelected(),
                                b = "​" + (a ? g.value : "");
                            g.value = "⇚", g.value = b, d.prevInput = a ? "" : "​", g.selectionStart = 1, g.selectionEnd = b.length, f.selForContextMenu = e.doc.sel
                        }
                    }

                    function c() {
                        if (d.contextMenuPending = !1, d.wrapper.style.cssText = l, g.style.cssText = k, uf && vf < 9 && f.scrollbars.setScrollTop(f.scroller.scrollTop = i), null != g.selectionStart) {
                            (!uf || uf && vf < 9) && b();
                            var a = 0,
                                c = function () {
                                    f.selForContextMenu == e.doc.sel && 0 == g.selectionStart && g.selectionEnd > 0 && "​" == d.prevInput ? Fb(e, lg.selectAll)(e) : a++ < 10 ? f.detectingSelectAll = setTimeout(c, 500) : f.input.reset()
                                };
                            f.detectingSelectAll = setTimeout(c, 200)
                        }
                    }
                    var d = this,
                        e = d.cm,
                        f = e.display,
                        g = d.textarea,
                        h = Vb(e, a),
                        i = f.scroller.scrollTop;
                    if (h && !zf) {
                        var j = e.options.resetSelectionOnContextMenu;
                        j && e.doc.sel.contains(h) == -1 && Fb(e, Aa)(e.doc, na(h), Mg);
                        var k = g.style.cssText,
                            l = d.wrapper.style.cssText;
                        d.wrapper.style.cssText = "position: absolute";
                        var m = d.wrapper.getBoundingClientRect();
                        if (g.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (a.clientY - m.top - 5) + "px; left: " + (a.clientX - m.left - 5) + "px; z-index: 1000; background: " + (uf ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", wf) var n = window.scrollY;
                        if (f.input.focus(), wf && window.scrollTo(null, n), f.input.reset(), e.somethingSelected() || (g.value = d.prevInput = " "), d.contextMenuPending = !0, f.selForContextMenu = e.doc.sel, clearTimeout(f.detectingSelectAll), uf && vf >= 9 && b(), Kf) {
                            Eg(a);
                            var o = function () {
                                Hg(window, "mouseup", o), setTimeout(c, 20)
                            };
                            Fg(window, "mouseup", o)
                        } else setTimeout(c, 50)
                    }
                },
                readOnlyChanged: function (a) {
                    a || this.reset()
                },
                setUneditable: Ke,
                needsContentAttribute: !1
            }, ca.prototype), ea.prototype = Me({
                init: function (a) {
                    function b(a) {
                        if (!Ae(d, a)) {
                            if (d.somethingSelected()) Pf = {
                                lineWise: !1,
                                text: d.getSelections()
                            }, "cut" == a.type && d.replaceSelection("", null, "cut");
                            else {
                                if (!d.options.lineWiseCopyCut) return;
                                var b = aa(d);
                                Pf = {
                                    lineWise: !0,
                                    text: b.text
                                }, "cut" == a.type && d.operation(function () {
                                    d.setSelections(b.ranges, 0, Mg), d.replaceSelection("", null, "cut")
                                })
                            }
                            if (a.clipboardData) {
                                a.clipboardData.clearData();
                                var f = Pf.text.join("\n");
                                if (a.clipboardData.setData("Text", f), a.clipboardData.getData("Text") == f) return void a.preventDefault()
                            }
                            var g = da(),
                                h = g.firstChild;
                            d.display.lineSpace.insertBefore(g, d.display.lineSpace.firstChild), h.value = Pf.text.join("\n");
                            var i = document.activeElement;
                            Sg(h), setTimeout(function () {
                                d.display.lineSpace.removeChild(g), i.focus(), i == e && c.showPrimarySelection()
                            }, 50)
                        }
                    }
                    var c = this,
                        d = c.cm,
                        e = c.div = a.lineDiv;
                    ba(e, d.options.spellcheck), Fg(e, "paste", function (a) {
                        Ae(d, a) || $(a, d) || vf <= 11 && setTimeout(Fb(d, function () {
                            c.pollContent() || Kb(d)
                        }), 20)
                    }), Fg(e, "compositionstart", function (a) {
                        var b = a.data;
                        if (c.composing = {
                            sel: d.doc.sel,
                            data: b,
                            startData: b
                        }, b) {
                            var e = d.doc.sel.primary(),
                                f = d.getLine(e.head.line),
                                g = f.indexOf(b, Math.max(0, e.head.ch - b.length));
                            g > -1 && g <= e.head.ch && (c.composing.sel = na(Nf(e.head.line, g), Nf(e.head.line, g + b.length)))
                        }
                    }), Fg(e, "compositionupdate", function (a) {
                        c.composing.data = a.data
                    }), Fg(e, "compositionend", function (a) {
                        var b = c.composing;
                        b && (a.data == b.startData || /\u200b/.test(a.data) || (b.data = a.data), setTimeout(function () {
                            b.handled || c.applyComposition(b), c.composing == b && (c.composing = null)
                        }, 50))
                    }), Fg(e, "touchstart", function () {
                        c.forceCompositionEnd()
                    }), Fg(e, "input", function () {
                        c.composing || !d.isReadOnly() && c.pollContent() || Eb(c.cm, function () {
                            Kb(d)
                        })
                    }), Fg(e, "copy", b), Fg(e, "cut", b)
                },
                prepareSelection: function () {
                    var a = Ja(this.cm, !1);
                    return a.focus = this.cm.state.focused, a
                },
                showSelection: function (a, b) {
                    a && this.cm.display.view.length && ((a.focus || b) && this.showPrimarySelection(), this.showMultipleSelections(a))
                },
                showPrimarySelection: function () {
                    var a = window.getSelection(),
                        b = this.cm.doc.sel.primary(),
                        c = ha(this.cm, a.anchorNode, a.anchorOffset),
                        d = ha(this.cm, a.focusNode, a.focusOffset);
                    if (!c || c.bad || !d || d.bad || 0 != Of(X(c, d), b.from()) || 0 != Of(W(c, d), b.to())) {
                        var e = fa(this.cm, b.from()),
                            f = fa(this.cm, b.to());
                        if (e || f) {
                            var g = this.cm.display.view,
                                h = a.rangeCount && a.getRangeAt(0);
                            if (e) {
                                if (!f) {
                                    var i = g[g.length - 1].measure,
                                        j = i.maps ? i.maps[i.maps.length - 1] : i.map;
                                    f = {
                                        node: j[j.length - 1],
                                        offset: j[j.length - 2] - j[j.length - 3]
                                    }
                                }
                            } else e = {
                                node: g[0].measure.map[2],
                                offset: 0
                            };
                            try {
                                var k = Tg(e.node, e.offset, f.offset, f.node)
                            } catch (a) { }
                            k && (!rf && this.cm.state.focused ? (a.collapse(e.node, e.offset), k.collapsed || a.addRange(k)) : (a.removeAllRanges(), a.addRange(k)), h && null == a.anchorNode ? a.addRange(h) : rf && this.startGracePeriod()), this.rememberSelection()
                        }
                    }
                },
                startGracePeriod: function () {
                    var a = this;
                    clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
                        a.gracePeriod = !1, a.selectionChanged() && a.cm.operation(function () {
                            a.cm.curOp.selectionChanged = !0
                        })
                    }, 20)
                },
                showMultipleSelections: function (a) {
                    Te(this.cm.display.cursorDiv, a.cursors), Te(this.cm.display.selectionDiv, a.selection)
                },
                rememberSelection: function () {
                    var a = window.getSelection();
                    this.lastAnchorNode = a.anchorNode, this.lastAnchorOffset = a.anchorOffset, this.lastFocusNode = a.focusNode, this.lastFocusOffset = a.focusOffset
                },
                selectionInEditor: function () {
                    var a = window.getSelection();
                    if (!a.rangeCount) return !1;
                    var b = a.getRangeAt(0).commonAncestorContainer;
                    return Xg(this.div, b)
                },
                focus: function () {
                    "nocursor" != this.cm.options.readOnly && this.div.focus()
                },
                blur: function () {
                    this.div.blur()
                },
                getField: function () {
                    return this.div
                },
                supportsTouch: function () {
                    return !0
                },
                receivedFocus: function () {
                    function a() {
                        b.cm.state.focused && (b.pollSelection(), b.polling.set(b.cm.options.pollInterval, a))
                    }
                    var b = this;
                    this.selectionInEditor() ? this.pollSelection() : Eb(this.cm, function () {
                        b.cm.curOp.selectionChanged = !0
                    }), this.polling.set(this.cm.options.pollInterval, a)
                },
                selectionChanged: function () {
                    var a = window.getSelection();
                    return a.anchorNode != this.lastAnchorNode || a.anchorOffset != this.lastAnchorOffset || a.focusNode != this.lastFocusNode || a.focusOffset != this.lastFocusOffset
                },
                pollSelection: function () {
                    if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
                        var a = window.getSelection(),
                            b = this.cm;
                        this.rememberSelection();
                        var c = ha(b, a.anchorNode, a.anchorOffset),
                            d = ha(b, a.focusNode, a.focusOffset);
                        c && d && Eb(b, function () {
                            Aa(b.doc, na(c, d), Mg), (c.bad || d.bad) && (b.curOp.selectionChanged = !0)
                        })
                    }
                },
                pollContent: function () {
                    var a = this.cm,
                        b = a.display,
                        c = a.doc.sel.primary(),
                        d = c.from(),
                        e = c.to();
                    if (d.line < b.viewFrom || e.line > b.viewTo - 1) return !1;
                    var f;
                    if (d.line == b.viewFrom || 0 == (f = Nb(a, d.line))) var g = be(b.view[0].line),
                        h = b.view[0].node;
                    else var g = be(b.view[f].line),
                        h = b.view[f - 1].node.nextSibling;
                    var i = Nb(a, e.line);
                    if (i == b.view.length - 1) var j = b.viewTo - 1,
                        k = b.lineDiv.lastChild;
                    else var j = be(b.view[i + 1].line) - 1,
                        k = b.view[i + 1].node.previousSibling;
                    for (var l = a.doc.splitLines(ja(a, h, k, g, j)), m = $d(a.doc, Nf(g, 0), Nf(j, Zd(a.doc, j).text.length)); l.length > 1 && m.length > 1;)
                        if (Ge(l) == Ge(m)) l.pop(), m.pop(), j--;
                        else {
                            if (l[0] != m[0]) break;
                            l.shift(), m.shift(), g++
                        }
                    for (var n = 0, o = 0, p = l[0], q = m[0], r = Math.min(p.length, q.length); n < r && p.charCodeAt(n) == q.charCodeAt(n);)++n;
                    for (var s = Ge(l), t = Ge(m), u = Math.min(s.length - (1 == l.length ? n : 0), t.length - (1 == m.length ? n : 0)); o < u && s.charCodeAt(s.length - o - 1) == t.charCodeAt(t.length - o - 1);)++o;
                    l[l.length - 1] = s.slice(0, s.length - o), l[0] = l[0].slice(n);
                    var v = Nf(g, n),
                        w = Nf(j, m.length ? Ge(m).length - o : 0);
                    return l.length > 1 || l[0] || Of(v, w) ? (Gc(a.doc, l, v, w, "+input"), !0) : void 0
                },
                ensurePolled: function () {
                    this.forceCompositionEnd()
                },
                reset: function () {
                    this.forceCompositionEnd()
                },
                forceCompositionEnd: function () {
                    this.composing && !this.composing.handled && (this.applyComposition(this.composing), this.composing.handled = !0, this.div.blur(), this.div.focus())
                },
                applyComposition: function (a) {
                    this.cm.isReadOnly() ? Fb(this.cm, Kb)(this.cm) : a.data && a.data != a.startData && Fb(this.cm, Z)(this.cm, a.data, 0, a.sel)
                },
                setUneditable: function (a) {
                    a.contentEditable = "false"
                },
                onKeyPress: function (a) {
                    a.preventDefault(), this.cm.isReadOnly() || Fb(this.cm, Z)(this.cm, String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), 0)
                },
                readOnlyChanged: function (a) {
                    this.div.contentEditable = String("nocursor" != a)
                },
                onContextMenu: Ke,
                resetPosition: Ke,
                needsContentAttribute: !0
            }, ea.prototype), a.inputStyles = {
                textarea: ca,
                contenteditable: ea
            }, ka.prototype = {
                primary: function () {
                    return this.ranges[this.primIndex]
                },
                equals: function (a) {
                    if (a == this) return !0;
                    if (a.primIndex != this.primIndex || a.ranges.length != this.ranges.length) return !1;
                    for (var b = 0; b < this.ranges.length; b++) {
                        var c = this.ranges[b],
                            d = a.ranges[b];
                        if (0 != Of(c.anchor, d.anchor) || 0 != Of(c.head, d.head)) return !1
                    }
                    return !0
                },
                deepCopy: function () {
                    for (var a = [], b = 0; b < this.ranges.length; b++) a[b] = new la(V(this.ranges[b].anchor), V(this.ranges[b].head));
                    return new ka(a, this.primIndex)
                },
                somethingSelected: function () {
                    for (var a = 0; a < this.ranges.length; a++)
                        if (!this.ranges[a].empty()) return !0;
                    return !1
                },
                contains: function (a, b) {
                    b || (b = a);
                    for (var c = 0; c < this.ranges.length; c++) {
                        var d = this.ranges[c];
                        if (Of(b, d.from()) >= 0 && Of(a, d.to()) <= 0) return c
                    }
                    return -1
                }
            }, la.prototype = {
                from: function () {
                    return X(this.anchor, this.head)
                },
                to: function () {
                    return W(this.anchor, this.head)
                },
                empty: function () {
                    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
                }
            };
            var Qf, Rf, Sf, Tf = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
                Uf = null,
                Vf = 0,
                Wf = 0,
                Xf = 0,
                Yf = null;
            uf ? Yf = -.53 : rf ? Yf = 15 : yf ? Yf = -.7 : Af && (Yf = -1 / 3);
            var Zf = function (a) {
                var b = a.wheelDeltaX,
                    c = a.wheelDeltaY;
                return null == b && a.detail && a.axis == a.HORIZONTAL_AXIS && (b = a.detail), null == c && a.detail && a.axis == a.VERTICAL_AXIS ? c = a.detail : null == c && (c = a.wheelDelta), {
                    x: b,
                    y: c
                }
            };
            a.wheelEventPixels = function (a) {
                var b = Zf(a);
                return b.x *= Yf, b.y *= Yf, b
            };
            var $f = new Ee,
                _f = null,
                ag = a.changeEnd = function (a) {
                    return a.text ? Nf(a.from.line + a.text.length - 1, Ge(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to
                };
            a.prototype = {
                constructor: a,
                focus: function () {
                    window.focus(), this.display.input.focus()
                },
                setOption: function (a, b) {
                    var c = this.options,
                        d = c[a];
                    c[a] == b && "mode" != a || (c[a] = b, cg.hasOwnProperty(a) && Fb(this, cg[a])(this, b, d))
                },
                getOption: function (a) {
                    return this.options[a]
                },
                getDoc: function () {
                    return this.doc
                },
                addKeyMap: function (a, b) {
                    this.state.keyMaps[b ? "push" : "unshift"](Vc(a))
                },
                removeKeyMap: function (a) {
                    for (var b = this.state.keyMaps, c = 0; c < b.length; ++c)
                        if (b[c] == a || b[c].name == a) return b.splice(c, 1), !0
                },
                addOverlay: Gb(function (b, c) {
                    var d = b.token ? b : a.getMode(this.options, b);
                    if (d.startState) throw new Error("Overlays may not be stateful.");
                    Je(this.state.overlays, {
                        mode: d,
                        modeSpec: b,
                        opaque: c && c.opaque,
                        priority: c && c.priority || 0
                    }, function (a) {
                        return a.priority
                    }), this.state.modeGen++ , Kb(this)
                }),
                removeOverlay: Gb(function (a) {
                    for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
                        var d = b[c].modeSpec;
                        if (d == a || "string" == typeof a && d.name == a) return b.splice(c, 1), this.state.modeGen++ , void Kb(this)
                    }
                }),
                indentLine: Gb(function (a, b, c) {
                    "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"), ra(this.doc, a) && Oc(this, a, b, c)
                }),
                indentSelection: Gb(function (a) {
                    for (var b = this.doc.sel.ranges, c = -1, d = 0; d < b.length; d++) {
                        var e = b[d];
                        if (e.empty()) e.head.line > c && (Oc(this, e.head.line, a, !0), c = e.head.line, d == this.doc.sel.primIndex && Mc(this));
                        else {
                            var f = e.from(),
                                g = e.to(),
                                h = Math.max(c, f.line);
                            c = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;
                            for (var i = h; i < c; ++i) Oc(this, i, a);
                            var j = this.doc.sel.ranges;
                            0 == f.ch && b.length == j.length && j[d].from().ch > 0 && wa(this.doc, d, new la(f, j[d].to()), Mg)
                        }
                    }
                }),
                getTokenAt: function (a, b) {
                    return Gd(this, a, b)
                },
                getLineTokens: function (a, b) {
                    return Gd(this, Nf(a), b, !0)
                },
                getTokenTypeAt: function (a) {
                    a = pa(this.doc, a);
                    var b, c = Jd(this, Zd(this.doc, a.line)),
                        d = 0,
                        e = (c.length - 1) / 2,
                        f = a.ch;
                    if (0 == f) b = c[2];
                    else
                        for (; ;) {
                            var g = d + e >> 1;
                            if ((g ? c[2 * g - 1] : 0) >= f) e = g;
                            else {
                                if (!(c[2 * g + 1] < f)) {
                                    b = c[2 * g + 2];
                                    break
                                }
                                d = g + 1
                            }
                        }
                    var h = b ? b.indexOf("cm-overlay ") : -1;
                    return h < 0 ? b : 0 == h ? null : b.slice(0, h - 1)
                },
                getModeAt: function (b) {
                    var c = this.doc.mode;
                    return c.innerMode ? a.innerMode(c, this.getTokenAt(b).state).mode : c
                },
                getHelper: function (a, b) {
                    return this.getHelpers(a, b)[0]
                },
                getHelpers: function (a, b) {
                    var c = [];
                    if (!ig.hasOwnProperty(b)) return c;
                    var d = ig[b],
                        e = this.getModeAt(a);
                    if ("string" == typeof e[b]) d[e[b]] && c.push(d[e[b]]);
                    else if (e[b])
                        for (var f = 0; f < e[b].length; f++) {
                            var g = d[e[b][f]];
                            g && c.push(g)
                        } else e.helperType && d[e.helperType] ? c.push(d[e.helperType]) : d[e.name] && c.push(d[e.name]);
                    for (var f = 0; f < d._global.length; f++) {
                        var h = d._global[f];
                        h.pred(e, this) && He(c, h.val) == -1 && c.push(h.val)
                    }
                    return c
                },
                getStateAfter: function (a, b) {
                    var c = this.doc;
                    return a = oa(c, null == a ? c.first + c.size - 1 : a), Qa(this, a + 1, b)
                },
                cursorCoords: function (a, b) {
                    var c, d = this.doc.sel.primary();
                    return c = null == a ? d.head : "object" == typeof a ? pa(this.doc, a) : a ? d.from() : d.to(), ob(this, c, b || "page")
                },
                charCoords: function (a, b) {
                    return nb(this, pa(this.doc, a), b || "page")
                },
                coordsChar: function (a, b) {
                    return a = mb(this, a, b || "page"), rb(this, a.left, a.top)
                },
                lineAtHeight: function (a, b) {
                    return a = mb(this, {
                        top: a,
                        left: 0
                    }, b || "page").top, ce(this.doc, a + this.display.viewOffset)
                },
                heightAtLine: function (a, b) {
                    var c, d = !1;
                    if ("number" == typeof a) {
                        var e = this.doc.first + this.doc.size - 1;
                        a < this.doc.first ? a = this.doc.first : a > e && (a = e, d = !0), c = Zd(this.doc, a)
                    } else c = a;
                    return lb(this, c, {
                        top: 0,
                        left: 0
                    }, b || "page").top + (d ? this.doc.height - de(c) : 0)
                },
                defaultTextHeight: function () {
                    return tb(this.display)
                },
                defaultCharWidth: function () {
                    return ub(this.display)
                },
                setGutterMarker: Gb(function (a, b, c) {
                    return Pc(this.doc, a, "gutter", function (a) {
                        var d = a.gutterMarkers || (a.gutterMarkers = {});
                        return d[b] = c, !c && Pe(d) && (a.gutterMarkers = null), !0
                    })
                }),
                clearGutter: Gb(function (a) {
                    var b = this,
                        c = b.doc,
                        d = c.first;
                    c.iter(function (c) {
                        c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null, Lb(b, d, "gutter"), Pe(c.gutterMarkers) && (c.gutterMarkers = null)), ++d
                    })
                }),
                lineInfo: function (a) {
                    if ("number" == typeof a) {
                        if (!ra(this.doc, a)) return null;
                        var b = a;
                        if (a = Zd(this.doc, a), !a) return null
                    } else {
                        var b = be(a);
                        if (null == b) return null
                    }
                    return {
                        line: b,
                        handle: a,
                        text: a.text,
                        gutterMarkers: a.gutterMarkers,
                        textClass: a.textClass,
                        bgClass: a.bgClass,
                        wrapClass: a.wrapClass,
                        widgets: a.widgets
                    }
                },
                getViewport: function () {
                    return {
                        from: this.display.viewFrom,
                        to: this.display.viewTo
                    }
                },
                addWidget: function (a, b, c, d, e) {
                    var f = this.display;
                    a = ob(this, pa(this.doc, a));
                    var g = a.bottom,
                        h = a.left;
                    if (b.style.position = "absolute", b.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(b), f.sizer.appendChild(b), "over" == d) g = a.top;
                    else if ("above" == d || "near" == d) {
                        var i = Math.max(f.wrapper.clientHeight, this.doc.height),
                            j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
                        ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom), h + b.offsetWidth > j && (h = j - b.offsetWidth)
                    }
                    b.style.top = g + "px", b.style.left = b.style.right = "", "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth, b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2), b.style.left = h + "px"), c && Jc(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
                },
                triggerOnKeyDown: Gb(mc),
                triggerOnKeyPress: Gb(pc),
                triggerOnKeyUp: oc,
                execCommand: function (a) {
                    if (lg.hasOwnProperty(a)) return lg[a].call(null, this)
                },
                triggerElectric: Gb(function (a) {
                    _(this, a)
                }),
                findPosH: function (a, b, c, d) {
                    var e = 1;
                    b < 0 && (e = -1, b = -b);
                    for (var f = 0, g = pa(this.doc, a); f < b && (g = Rc(this.doc, g, e, c, d), !g.hitSide); ++f);
                    return g
                },
                moveH: Gb(function (a, b) {
                    var c = this;
                    c.extendSelectionsBy(function (d) {
                        return c.display.shift || c.doc.extend || d.empty() ? Rc(c.doc, d.head, a, b, c.options.rtlMoveVisually) : a < 0 ? d.from() : d.to()
                    }, Og)
                }),
                deleteH: Gb(function (a, b) {
                    var c = this.doc.sel,
                        d = this.doc;
                    c.somethingSelected() ? d.replaceSelection("", null, "+delete") : Qc(this, function (c) {
                        var e = Rc(d, c.head, a, b, !1);
                        return a < 0 ? {
                            from: e,
                            to: c.head
                        } : {
                                from: c.head,
                                to: e
                            }
                    })
                }),
                findPosV: function (a, b, c, d) {
                    var e = 1,
                        f = d;
                    b < 0 && (e = -1, b = -b);
                    for (var g = 0, h = pa(this.doc, a); g < b; ++g) {
                        var i = ob(this, h, "div");
                        if (null == f ? f = i.left : i.left = f, h = Sc(this, i, e, c), h.hitSide) break
                    }
                    return h
                },
                moveV: Gb(function (a, b) {
                    var c = this,
                        d = this.doc,
                        e = [],
                        f = !c.display.shift && !d.extend && d.sel.somethingSelected();
                    if (d.extendSelectionsBy(function (g) {
                        if (f) return a < 0 ? g.from() : g.to();
                        var h = ob(c, g.head, "div");
                        null != g.goalColumn && (h.left = g.goalColumn), e.push(h.left);
                        var i = Sc(c, h, a, b);
                        return "page" == b && g == d.sel.primary() && Lc(c, null, nb(c, i, "div").top - h.top), i
                    }, Og), e.length)
                        for (var g = 0; g < d.sel.ranges.length; g++) d.sel.ranges[g].goalColumn = e[g]
                }),
                findWordAt: function (a) {
                    var b = this.doc,
                        c = Zd(b, a.line).text,
                        d = a.ch,
                        e = a.ch;
                    if (c) {
                        var f = this.getHelper(a, "wordChars");
                        (a.xRel < 0 || e == c.length) && d ? --d : ++e;
                        for (var g = c.charAt(d), h = Oe(g, f) ? function (a) {
                            return Oe(a, f)
                        } : /\s/.test(g) ? function (a) {
                            return /\s/.test(a)
                        } : function (a) {
                            return !/\s/.test(a) && !Oe(a)
                        }; d > 0 && h(c.charAt(d - 1));)--d;
                        for (; e < c.length && h(c.charAt(e));)++e
                    }
                    return new la(Nf(a.line, d), Nf(a.line, e))
                },
                toggleOverwrite: function (a) {
                    null != a && a == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? _g(this.display.cursorDiv, "CodeMirror-overwrite") : $g(this.display.cursorDiv, "CodeMirror-overwrite"), Ig(this, "overwriteToggle", this, this.state.overwrite))
                },
                hasFocus: function () {
                    return this.display.input.getField() == Ue()
                },
                isReadOnly: function () {
                    return !(!this.options.readOnly && !this.doc.cantEdit)
                },
                scrollTo: Gb(function (a, b) {
                    null == a && null == b || Nc(this), null != a && (this.curOp.scrollLeft = a), null != b && (this.curOp.scrollTop = b)
                }),
                getScrollInfo: function () {
                    var a = this.display.scroller;
                    return {
                        left: a.scrollLeft,
                        top: a.scrollTop,
                        height: a.scrollHeight - Ua(this) - this.display.barHeight,
                        width: a.scrollWidth - Ua(this) - this.display.barWidth,
                        clientHeight: Wa(this),
                        clientWidth: Va(this)
                    }
                },
                scrollIntoView: Gb(function (a, b) {
                    if (null == a ? (a = {
                        from: this.doc.sel.primary().head,
                        to: null
                    }, null == b && (b = this.options.cursorScrollMargin)) : "number" == typeof a ? a = {
                        from: Nf(a, 0),
                        to: null
                    } : null == a.from && (a = {
                        from: a,
                        to: null
                    }), a.to || (a.to = a.from), a.margin = b || 0, null != a.from.line) Nc(this), this.curOp.scrollToPos = a;
                    else {
                        var c = Kc(this, Math.min(a.from.left, a.to.left), Math.min(a.from.top, a.to.top) - a.margin, Math.max(a.from.right, a.to.right), Math.max(a.from.bottom, a.to.bottom) + a.margin);
                        this.scrollTo(c.scrollLeft, c.scrollTop)
                    }
                }),
                setSize: Gb(function (a, b) {
                    function c(a) {
                        return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a
                    }
                    var d = this;
                    null != a && (d.display.wrapper.style.width = c(a)), null != b && (d.display.wrapper.style.height = c(b)), d.options.lineWrapping && hb(this);
                    var e = d.display.viewFrom;
                    d.doc.iter(e, d.display.viewTo, function (a) {
                        if (a.widgets)
                            for (var b = 0; b < a.widgets.length; b++)
                                if (a.widgets[b].noHScroll) {
                                    Lb(d, e, "widget");
                                    break
                                } ++e
                    }), d.curOp.forceUpdate = !0, Ig(d, "refresh", this)
                }),
                operation: function (a) {
                    return Eb(this, a)
                },
                refresh: Gb(function () {
                    var a = this.display.cachedTextHeight;
                    Kb(this), this.curOp.forceUpdate = !0, ib(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), k(this), (null == a || Math.abs(a - tb(this.display)) > .5) && g(this), Ig(this, "refresh", this)
                }),
                swapDoc: Gb(function (a) {
                    var b = this.doc;
                    return b.cm = null, Yd(this, a), ib(this), this.display.input.reset(), this.scrollTo(a.scrollLeft, a.scrollTop), this.curOp.forceScroll = !0, ye(this, "swapDoc", this, b), b
                }),
                getInputField: function () {
                    return this.display.input.getField()
                },
                getWrapperElement: function () {
                    return this.display.wrapper
                },
                getScrollerElement: function () {
                    return this.display.scroller
                },
                getGutterElement: function () {
                    return this.display.gutters
                }
            }, De(a);
            var bg = a.defaults = {},
                cg = a.optionHandlers = {},
                dg = a.Init = {
                    toString: function () {
                        return "CodeMirror.Init"
                    }
                };
            Tc("value", "", function (a, b) {
                a.setValue(b)
            }, !0), Tc("mode", null, function (a, b) {
                a.doc.modeOption = b, c(a)
            }, !0), Tc("indentUnit", 2, c, !0), Tc("indentWithTabs", !1), Tc("smartIndent", !0), Tc("tabSize", 4, function (a) {
                d(a), ib(a), Kb(a)
            }, !0), Tc("lineSeparator", null, function (a, b) {
                if (a.doc.lineSep = b, b) {
                    var c = [],
                        d = a.doc.first;
                    a.doc.iter(function (a) {
                        for (var e = 0; ;) {
                            var f = a.text.indexOf(b, e);
                            if (f == -1) break;
                            e = f + b.length, c.push(Nf(d, f))
                        }
                        d++
                    });
                    for (var e = c.length - 1; e >= 0; e--) Gc(a.doc, b, c[e], Nf(c[e].line, c[e].ch + b.length))
                }
            }), Tc("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (b, c, d) {
                b.state.specialChars = new RegExp(c.source + (c.test("\t") ? "" : "|\t"), "g"), d != a.Init && b.refresh()
            }), Tc("specialCharPlaceholder", Nd, function (a) {
                a.refresh()
            }, !0), Tc("electricChars", !0), Tc("inputStyle", Ef ? "contenteditable" : "textarea", function () {
                throw new Error("inputStyle can not (yet) be changed in a running editor")
            }, !0), Tc("spellcheck", !1, function (a, b) {
                a.getInputField().spellcheck = b
            }, !0), Tc("rtlMoveVisually", !Hf), Tc("wholeLineUpdateBefore", !0), Tc("theme", "default", function (a) {
                h(a), i(a)
            }, !0), Tc("keyMap", "default", function (b, c, d) {
                var e = Vc(c),
                    f = d != a.Init && Vc(d);
                f && f.detach && f.detach(b, e), e.attach && e.attach(b, f || null)
            }), Tc("extraKeys", null), Tc("lineWrapping", !1, e, !0), Tc("gutters", [], function (a) {
                n(a.options), i(a)
            }, !0), Tc("fixedGutter", !0, function (a, b) {
                a.display.gutters.style.left = b ? y(a.display) + "px" : "0", a.refresh()
            }, !0), Tc("coverGutterNextToScrollbar", !1, function (a) {
                s(a)
            }, !0), Tc("scrollbarStyle", "native", function (a) {
                r(a), s(a), a.display.scrollbars.setScrollTop(a.doc.scrollTop), a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)
            }, !0), Tc("lineNumbers", !1, function (a) {
                n(a.options), i(a)
            }, !0), Tc("firstLineNumber", 1, i, !0), Tc("lineNumberFormatter", function (a) {
                return a
            }, i, !0), Tc("showCursorWhenSelecting", !1, Ia, !0), Tc("resetSelectionOnContextMenu", !0), Tc("lineWiseCopyCut", !0), Tc("readOnly", !1, function (a, b) {
                "nocursor" == b ? (sc(a), a.display.input.blur(), a.display.disabled = !0) : a.display.disabled = !1, a.display.input.readOnlyChanged(b)
            }), Tc("disableInput", !1, function (a, b) {
                b || a.display.input.reset()
            }, !0), Tc("dragDrop", !0, Sb), Tc("allowDropFileTypes", null), Tc("cursorBlinkRate", 530), Tc("cursorScrollMargin", 0), Tc("cursorHeight", 1, Ia, !0), Tc("singleCursorHeightPerLine", !0, Ia, !0), Tc("workTime", 100), Tc("workDelay", 100), Tc("flattenSpans", !0, d, !0), Tc("addModeClass", !1, d, !0), Tc("pollInterval", 100), Tc("undoDepth", 200, function (a, b) {
                a.doc.history.undoDepth = b
            }), Tc("historyEventDelay", 1250), Tc("viewportMargin", 10, function (a) {
                a.refresh()
            }, !0), Tc("maxHighlightLength", 1e4, d, !0), Tc("moveInputWithCursor", !0, function (a, b) {
                b || a.display.input.resetPosition()
            }), Tc("tabindex", null, function (a, b) {
                a.display.input.getField().tabIndex = b || ""
            }), Tc("autofocus", null);
            var eg = a.modes = {},
                fg = a.mimeModes = {};
            a.defineMode = function (b, c) {
                a.defaults.mode || "null" == b || (a.defaults.mode = b), arguments.length > 2 && (c.dependencies = Array.prototype.slice.call(arguments, 2)), eg[b] = c
            }, a.defineMIME = function (a, b) {
                fg[a] = b
            }, a.resolveMode = function (b) {
                if ("string" == typeof b && fg.hasOwnProperty(b)) b = fg[b];
                else if (b && "string" == typeof b.name && fg.hasOwnProperty(b.name)) {
                    var c = fg[b.name];
                    "string" == typeof c && (c = {
                        name: c
                    }), b = Le(c, b), b.name = c.name
                } else {
                    if ("string" == typeof b && /^[\w\-]+\/[\w\-]+\+xml$/.test(b)) return a.resolveMode("application/xml");
                    if ("string" == typeof b && /^[\w\-]+\/[\w\-]+\+json$/.test(b)) return a.resolveMode("application/json")
                }
                return "string" == typeof b ? {
                    name: b
                } : b || {
                    name: "null"
                }
            }, a.getMode = function (b, c) {
                var c = a.resolveMode(c),
                    d = eg[c.name];
                if (!d) return a.getMode(b, "text/plain");
                var e = d(b, c);
                if (gg.hasOwnProperty(c.name)) {
                    var f = gg[c.name];
                    for (var g in f) f.hasOwnProperty(g) && (e.hasOwnProperty(g) && (e["_" + g] = e[g]), e[g] = f[g])
                }
                if (e.name = c.name, c.helperType && (e.helperType = c.helperType), c.modeProps)
                    for (var g in c.modeProps) e[g] = c.modeProps[g];
                return e
            }, a.defineMode("null", function () {
                return {
                    token: function (a) {
                        a.skipToEnd()
                    }
                }
            }), a.defineMIME("text/plain", "null");
            var gg = a.modeExtensions = {};
            a.extendMode = function (a, b) {
                var c = gg.hasOwnProperty(a) ? gg[a] : gg[a] = {};
                Me(b, c)
            }, a.defineExtension = function (b, c) {
                a.prototype[b] = c
            }, a.defineDocExtension = function (a, b) {
                zg.prototype[a] = b
            }, a.defineOption = Tc;
            var hg = [];
            a.defineInitHook = function (a) {
                hg.push(a)
            };
            var ig = a.helpers = {};
            a.registerHelper = function (b, c, d) {
                ig.hasOwnProperty(b) || (ig[b] = a[b] = {
                    _global: []
                }), ig[b][c] = d
            }, a.registerGlobalHelper = function (b, c, d, e) {
                a.registerHelper(b, c, e), ig[b]._global.push({
                    pred: d,
                    val: e
                })
            };
            var jg = a.copyState = function (a, b) {
                if (b === !0) return b;
                if (a.copyState) return a.copyState(b);
                var c = {};
                for (var d in b) {
                    var e = b[d];
                    e instanceof Array && (e = e.concat([])), c[d] = e
                }
                return c
            },
                kg = a.startState = function (a, b, c) {
                    return !a.startState || a.startState(b, c)
                };
            a.innerMode = function (a, b) {
                for (; a.innerMode;) {
                    var c = a.innerMode(b);
                    if (!c || c.mode == a) break;
                    b = c.state, a = c.mode
                }
                return c || {
                    mode: a,
                    state: b
                }
            };
            var lg = a.commands = {
                selectAll: function (a) {
                    a.setSelection(Nf(a.firstLine(), 0), Nf(a.lastLine()), Mg)
                },
                singleSelection: function (a) {
                    a.setSelection(a.getCursor("anchor"), a.getCursor("head"), Mg)
                },
                killLine: function (a) {
                    Qc(a, function (b) {
                        if (b.empty()) {
                            var c = Zd(a.doc, b.head.line).text.length;
                            return b.head.ch == c && b.head.line < a.lastLine() ? {
                                from: b.head,
                                to: Nf(b.head.line + 1, 0)
                            } : {
                                    from: b.head,
                                    to: Nf(b.head.line, c)
                                }
                        }
                        return {
                            from: b.from(),
                            to: b.to()
                        }
                    })
                },
                deleteLine: function (a) {
                    Qc(a, function (b) {
                        return {
                            from: Nf(b.from().line, 0),
                            to: pa(a.doc, Nf(b.to().line + 1, 0))
                        }
                    })
                },
                delLineLeft: function (a) {
                    Qc(a, function (a) {
                        return {
                            from: Nf(a.from().line, 0),
                            to: a.from()
                        }
                    })
                },
                delWrappedLineLeft: function (a) {
                    Qc(a, function (b) {
                        var c = a.charCoords(b.head, "div").top + 5,
                            d = a.coordsChar({
                                left: 0,
                                top: c
                            }, "div");
                        return {
                            from: d,
                            to: b.from()
                        }
                    })
                },
                delWrappedLineRight: function (a) {
                    Qc(a, function (b) {
                        var c = a.charCoords(b.head, "div").top + 5,
                            d = a.coordsChar({
                                left: a.display.lineDiv.offsetWidth + 100,
                                top: c
                            }, "div");
                        return {
                            from: b.from(),
                            to: d
                        }
                    })
                },
                undo: function (a) {
                    a.undo()
                },
                redo: function (a) {
                    a.redo()
                },
                undoSelection: function (a) {
                    a.undoSelection()
                },
                redoSelection: function (a) {
                    a.redoSelection()
                },
                goDocStart: function (a) {
                    a.extendSelection(Nf(a.firstLine(), 0))
                },
                goDocEnd: function (a) {
                    a.extendSelection(Nf(a.lastLine()))
                },
                goLineStart: function (a) {
                    a.extendSelectionsBy(function (b) {
                        return gf(a, b.head.line)
                    }, {
                            origin: "+move",
                            bias: 1
                        })
                },
                goLineStartSmart: function (a) {
                    a.extendSelectionsBy(function (b) {
                        return jf(a, b.head)
                    }, {
                            origin: "+move",
                            bias: 1
                        })
                },
                goLineEnd: function (a) {
                    a.extendSelectionsBy(function (b) {
                        return hf(a, b.head.line)
                    }, {
                            origin: "+move",
                            bias: -1
                        })
                },
                goLineRight: function (a) {
                    a.extendSelectionsBy(function (b) {
                        var c = a.charCoords(b.head, "div").top + 5;
                        return a.coordsChar({
                            left: a.display.lineDiv.offsetWidth + 100,
                            top: c
                        }, "div")
                    }, Og)
                },
                goLineLeft: function (a) {
                    a.extendSelectionsBy(function (b) {
                        var c = a.charCoords(b.head, "div").top + 5;
                        return a.coordsChar({
                            left: 0,
                            top: c
                        }, "div")
                    }, Og)
                },
                goLineLeftSmart: function (a) {
                    a.extendSelectionsBy(function (b) {
                        var c = a.charCoords(b.head, "div").top + 5,
                            d = a.coordsChar({
                                left: 0,
                                top: c
                            }, "div");
                        return d.ch < a.getLine(d.line).search(/\S/) ? jf(a, b.head) : d
                    }, Og)
                },
                goLineUp: function (a) {
                    a.moveV(-1, "line")
                },
                goLineDown: function (a) {
                    a.moveV(1, "line")
                },
                goPageUp: function (a) {
                    a.moveV(-1, "page")
                },
                goPageDown: function (a) {
                    a.moveV(1, "page")
                },
                goCharLeft: function (a) {
                    a.moveH(-1, "char")
                },
                goCharRight: function (a) {
                    a.moveH(1, "char")
                },
                goColumnLeft: function (a) {
                    a.moveH(-1, "column")
                },
                goColumnRight: function (a) {
                    a.moveH(1, "column")
                },
                goWordLeft: function (a) {
                    a.moveH(-1, "word")
                },
                goGroupRight: function (a) {
                    a.moveH(1, "group")
                },
                goGroupLeft: function (a) {
                    a.moveH(-1, "group")
                },
                goWordRight: function (a) {
                    a.moveH(1, "word")
                },
                delCharBefore: function (a) {
                    a.deleteH(-1, "char")
                },
                delCharAfter: function (a) {
                    a.deleteH(1, "char")
                },
                delWordBefore: function (a) {
                    a.deleteH(-1, "word")
                },
                delWordAfter: function (a) {
                    a.deleteH(1, "word")
                },
                delGroupBefore: function (a) {
                    a.deleteH(-1, "group")
                },
                delGroupAfter: function (a) {
                    a.deleteH(1, "group")
                },
                indentAuto: function (a) {
                    a.indentSelection("smart")
                },
                indentMore: function (a) {
                    a.indentSelection("add")
                },
                indentLess: function (a) {
                    a.indentSelection("subtract")
                },
                insertTab: function (a) {
                    a.replaceSelection("\t")
                },
                insertSoftTab: function (a) {
                    for (var b = [], c = a.listSelections(), d = a.options.tabSize, e = 0; e < c.length; e++) {
                        var f = c[e].from(),
                            g = Pg(a.getLine(f.line), f.ch, d);
                        b.push(Fe(d - g % d))
                    }
                    a.replaceSelections(b)
                },
                defaultTab: function (a) {
                    a.somethingSelected() ? a.indentSelection("add") : a.execCommand("insertTab")
                },
                transposeChars: function (a) {
                    Eb(a, function () {
                        for (var b = a.listSelections(), c = [], d = 0; d < b.length; d++) {
                            var e = b[d].head,
                                f = Zd(a.doc, e.line).text;
                            if (f)
                                if (e.ch == f.length && (e = new Nf(e.line, e.ch - 1)), e.ch > 0) e = new Nf(e.line, e.ch + 1), a.replaceRange(f.charAt(e.ch - 1) + f.charAt(e.ch - 2), Nf(e.line, e.ch - 2), e, "+transpose");
                                else if (e.line > a.doc.first) {
                                    var g = Zd(a.doc, e.line - 1).text;
                                    g && a.replaceRange(f.charAt(0) + a.doc.lineSeparator() + g.charAt(g.length - 1), Nf(e.line - 1, g.length - 1), Nf(e.line, 1), "+transpose")
                                }
                            c.push(new la(e, e))
                        }
                        a.setSelections(c)
                    })
                },
                newlineAndIndent: function (a) {
                    Eb(a, function () {
                        for (var b = a.listSelections().length, c = 0; c < b; c++) {
                            var d = a.listSelections()[c];
                            a.replaceRange(a.doc.lineSeparator(), d.anchor, d.head, "+input"), a.indentLine(d.from().line + 1, null, !0)
                        }
                        Mc(a)
                    })
                },
                openLine: function (a) {
                    a.replaceSelection("\n", "start")
                },
                toggleOverwrite: function (a) {
                    a.toggleOverwrite()
                }
            },
                mg = a.keyMap = {};
            mg.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            }, mg.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            }, mg.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Alt-F": "goWordRight",
                "Alt-B": "goWordLeft",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-D": "delWordAfter",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            }, mg.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            }, mg.default = Ff ? mg.macDefault : mg.pcDefault, a.normalizeKeyMap = function (a) {
                var b = {};
                for (var c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = a[c];
                        if (/^(name|fallthrough|(de|at)tach)$/.test(c)) continue;
                        if ("..." == d) {
                            delete a[c];
                            continue
                        }
                        for (var e = Ie(c.split(" "), Uc), f = 0; f < e.length; f++) {
                            var g, h;
                            f == e.length - 1 ? (h = e.join(" "), g = d) : (h = e.slice(0, f + 1).join(" "), g = "...");
                            var i = b[h];
                            if (i) {
                                if (i != g) throw new Error("Inconsistent bindings for " + h)
                            } else b[h] = g
                        }
                        delete a[c]
                    }
                for (var j in b) a[j] = b[j];
                return a
            };
            var ng = a.lookupKey = function (a, b, c, d) {
                b = Vc(b);
                var e = b.call ? b.call(a, d) : b[a];
                if (e === !1) return "nothing";
                if ("..." === e) return "multi";
                if (null != e && c(e)) return "handled";
                if (b.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(b.fallthrough)) return ng(a, b.fallthrough, c, d);
                    for (var f = 0; f < b.fallthrough.length; f++) {
                        var g = ng(a, b.fallthrough[f], c, d);
                        if (g) return g
                    }
                }
            },
                og = a.isModifierKey = function (a) {
                    var b = "string" == typeof a ? a : gh[a.keyCode];
                    return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b
                },
                pg = a.keyName = function (a, b) {
                    if (zf && 34 == a.keyCode && a.char) return !1;
                    var c = gh[a.keyCode],
                        d = c;
                    return null != d && !a.altGraphKey && (a.altKey && "Alt" != c && (d = "Alt-" + d), (Jf ? a.metaKey : a.ctrlKey) && "Ctrl" != c && (d = "Ctrl-" + d), (Jf ? a.ctrlKey : a.metaKey) && "Cmd" != c && (d = "Cmd-" + d), !b && a.shiftKey && "Shift" != c && (d = "Shift-" + d), d)
                };
            a.fromTextArea = function (b, c) {
                function d() {
                    b.value = i.getValue()
                }
                if (c = c ? Me(c) : {}, c.value = b.value, !c.tabindex && b.tabIndex && (c.tabindex = b.tabIndex), !c.placeholder && b.placeholder && (c.placeholder = b.placeholder), null == c.autofocus) {
                    var e = Ue();
                    c.autofocus = e == b || null != b.getAttribute("autofocus") && e == document.body
                }
                if (b.form && (Fg(b.form, "submit", d), !c.leaveSubmitMethodAlone)) {
                    var f = b.form,
                        g = f.submit;
                    try {
                        var h = f.submit = function () {
                            d(), f.submit = g, f.submit(), f.submit = h
                        }
                    } catch (a) { }
                }
                c.finishInit = function (a) {
                    a.save = d, a.getTextArea = function () {
                        return b
                    }, a.toTextArea = function () {
                        a.toTextArea = isNaN, d(), b.parentNode.removeChild(a.getWrapperElement()), b.style.display = "", b.form && (Hg(b.form, "submit", d), "function" == typeof b.form.submit && (b.form.submit = g))
                    }
                }, b.style.display = "none";
                var i = a(function (a) {
                    b.parentNode.insertBefore(a, b.nextSibling)
                }, c);
                return i
            };
            var qg = a.StringStream = function (a, b) {
                this.pos = this.start = 0, this.string = a, this.tabSize = b || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
            };
            qg.prototype = {
                eol: function () {
                    return this.pos >= this.string.length
                },
                sol: function () {
                    return this.pos == this.lineStart
                },
                peek: function () {
                    return this.string.charAt(this.pos) || void 0
                },
                next: function () {
                    if (this.pos < this.string.length) return this.string.charAt(this.pos++)
                },
                eat: function (a) {
                    var b = this.string.charAt(this.pos);
                    if ("string" == typeof a) var c = b == a;
                    else var c = b && (a.test ? a.test(b) : a(b));
                    if (c) return ++this.pos, b
                },
                eatWhile: function (a) {
                    for (var b = this.pos; this.eat(a););
                    return this.pos > b
                },
                eatSpace: function () {
                    for (var a = this.pos;
                        /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
                    return this.pos > a
                },
                skipToEnd: function () {
                    this.pos = this.string.length
                },
                skipTo: function (a) {
                    var b = this.string.indexOf(a, this.pos);
                    if (b > -1) return this.pos = b, !0
                },
                backUp: function (a) {
                    this.pos -= a
                },
                column: function () {
                    return this.lastColumnPos < this.start && (this.lastColumnValue = Pg(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Pg(this.string, this.lineStart, this.tabSize) : 0)
                },
                indentation: function () {
                    return Pg(this.string, null, this.tabSize) - (this.lineStart ? Pg(this.string, this.lineStart, this.tabSize) : 0)
                },
                match: function (a, b, c) {
                    if ("string" != typeof a) {
                        var d = this.string.slice(this.pos).match(a);
                        return d && d.index > 0 ? null : (d && b !== !1 && (this.pos += d[0].length), d)
                    }
                    var e = function (a) {
                        return c ? a.toLowerCase() : a
                    },
                        f = this.string.substr(this.pos, a.length);
                    if (e(f) == e(a)) return b !== !1 && (this.pos += a.length), !0
                },
                current: function () {
                    return this.string.slice(this.start, this.pos)
                },
                hideFirstChars: function (a, b) {
                    this.lineStart += a;
                    try {
                        return b()
                    } finally {
                        this.lineStart -= a
                    }
                }
            };
            var rg = 0,
                sg = a.TextMarker = function (a, b) {
                    this.lines = [], this.type = b, this.doc = a, this.id = ++rg
                };
            De(sg), sg.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    var a = this.doc.cm,
                        b = a && !a.curOp;
                    if (b && vb(a), Ce(this, "clear")) {
                        var c = this.find();
                        c && ye(this, "clear", c.from, c.to)
                    }
                    for (var d = null, e = null, f = 0; f < this.lines.length; ++f) {
                        var g = this.lines[f],
                            h = ad(g.markedSpans, this);
                        a && !this.collapsed ? Lb(a, be(g), "text") : a && (null != h.to && (e = be(g)), null != h.from && (d = be(g))), g.markedSpans = bd(g.markedSpans, h), null == h.from && this.collapsed && !wd(this.doc, g) && a && ae(g, tb(a.display))
                    }
                    if (a && this.collapsed && !a.options.lineWrapping)
                        for (var f = 0; f < this.lines.length; ++f) {
                            var i = sd(this.lines[f]),
                                j = l(i);
                            j > a.display.maxLineLength && (a.display.maxLine = i, a.display.maxLineLength = j, a.display.maxLineChanged = !0)
                        }
                    null != d && a && this.collapsed && Kb(a, d, e + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, a && Da(a.doc)), a && ye(a, "markerCleared", a, this), b && xb(a), this.parent && this.parent.clear()
                }
            }, sg.prototype.find = function (a, b) {
                null == a && "bookmark" == this.type && (a = 1);
                for (var c, d, e = 0; e < this.lines.length; ++e) {
                    var f = this.lines[e],
                        g = ad(f.markedSpans, this);
                    if (null != g.from && (c = Nf(b ? f : be(f), g.from), a == -1)) return c;
                    if (null != g.to && (d = Nf(b ? f : be(f), g.to), 1 == a)) return d
                }
                return c && {
                    from: c,
                    to: d
                }
            }, sg.prototype.changed = function () {
                var a = this.find(-1, !0),
                    b = this,
                    c = this.doc.cm;
                a && c && Eb(c, function () {
                    var d = a.line,
                        e = be(a.line),
                        f = _a(c, e);
                    if (f && (gb(f), c.curOp.selectionChanged = c.curOp.forceUpdate = !0), c.curOp.updateMaxLine = !0, !wd(b.doc, d) && null != b.height) {
                        var g = b.height;
                        b.height = null;
                        var h = zd(b) - g;
                        h && ae(d, d.height + h)
                    }
                })
            }, sg.prototype.attachLine = function (a) {
                if (!this.lines.length && this.doc.cm) {
                    var b = this.doc.cm.curOp;
                    b.maybeHiddenMarkers && He(b.maybeHiddenMarkers, this) != -1 || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(a)
            }, sg.prototype.detachLine = function (a) {
                if (this.lines.splice(He(this.lines, a), 1), !this.lines.length && this.doc.cm) {
                    var b = this.doc.cm.curOp;
                    (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
                }
            };
            var rg = 0,
                tg = a.SharedTextMarker = function (a, b) {
                    this.markers = a, this.primary = b;
                    for (var c = 0; c < a.length; ++c) a[c].parent = this
                };
            De(tg), tg.prototype.clear = function () {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var a = 0; a < this.markers.length; ++a) this.markers[a].clear();
                    ye(this, "clear")
                }
            }, tg.prototype.find = function (a, b) {
                return this.primary.find(a, b)
            };
            var ug = a.LineWidget = function (a, b, c) {
                if (c)
                    for (var d in c) c.hasOwnProperty(d) && (this[d] = c[d]);
                this.doc = a, this.node = b
            };
            De(ug), ug.prototype.clear = function () {
                var a = this.doc.cm,
                    b = this.line.widgets,
                    c = this.line,
                    d = be(c);
                if (null != d && b) {
                    for (var e = 0; e < b.length; ++e) b[e] == this && b.splice(e--, 1);
                    b.length || (c.widgets = null);
                    var f = zd(this);
                    ae(c, Math.max(0, c.height - f)), a && Eb(a, function () {
                        yd(a, c, -f), Lb(a, d, "widget")
                    })
                }
            }, ug.prototype.changed = function () {
                var a = this.height,
                    b = this.doc.cm,
                    c = this.line;
                this.height = null;
                var d = zd(this) - a;
                d && (ae(c, c.height + d), b && Eb(b, function () {
                    b.curOp.forceUpdate = !0, yd(b, c, d)
                }))
            };
            var vg = a.Line = function (a, b, c) {
                this.text = a, kd(this, b), this.height = c ? c(this) : 1
            };
            De(vg), vg.prototype.lineNo = function () {
                return be(this)
            };
            var wg = {},
                xg = {};
            Vd.prototype = {
                chunkSize: function () {
                    return this.lines.length
                },
                removeInner: function (a, b) {
                    for (var c = a, d = a + b; c < d; ++c) {
                        var e = this.lines[c];
                        this.height -= e.height, Cd(e), ye(e, "delete")
                    }
                    this.lines.splice(a, b)
                },
                collapse: function (a) {
                    a.push.apply(a, this.lines)
                },
                insertInner: function (a, b, c) {
                    this.height += c, this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
                    for (var d = 0; d < b.length; ++d) b[d].parent = this
                },
                iterN: function (a, b, c) {
                    for (var d = a + b; a < d; ++a)
                        if (c(this.lines[a])) return !0
                }
            }, Wd.prototype = {
                chunkSize: function () {
                    return this.size
                },
                removeInner: function (a, b) {
                    this.size -= b;
                    for (var c = 0; c < this.children.length; ++c) {
                        var d = this.children[c],
                            e = d.chunkSize();
                        if (a < e) {
                            var f = Math.min(b, e - a),
                                g = d.height;
                            if (d.removeInner(a, f), this.height -= g - d.height, e == f && (this.children.splice(c--, 1), d.parent = null), 0 == (b -= f)) break;
                            a = 0
                        } else a -= e
                    }
                    if (this.size - b < 25 && (this.children.length > 1 || !(this.children[0] instanceof Vd))) {
                        var h = [];
                        this.collapse(h), this.children = [new Vd(h)], this.children[0].parent = this
                    }
                },
                collapse: function (a) {
                    for (var b = 0; b < this.children.length; ++b) this.children[b].collapse(a)
                },
                insertInner: function (a, b, c) {
                    this.size += b.length, this.height += c;
                    for (var d = 0; d < this.children.length; ++d) {
                        var e = this.children[d],
                            f = e.chunkSize();
                        if (a <= f) {
                            if (e.insertInner(a, b, c), e.lines && e.lines.length > 50) {
                                for (var g = e.lines.length % 25 + 25, h = g; h < e.lines.length;) {
                                    var i = new Vd(e.lines.slice(h, h += 25));
                                    e.height -= i.height, this.children.splice(++d, 0, i), i.parent = this
                                }
                                e.lines = e.lines.slice(0, g), this.maybeSpill()
                            }
                            break
                        }
                        a -= f
                    }
                },
                maybeSpill: function () {
                    if (!(this.children.length <= 10)) {
                        var a = this;
                        do {
                            var b = a.children.splice(a.children.length - 5, 5),
                                c = new Wd(b);
                            if (a.parent) {
                                a.size -= c.size, a.height -= c.height;
                                var d = He(a.parent.children, a);
                                a.parent.children.splice(d + 1, 0, c)
                            } else {
                                var e = new Wd(a.children);
                                e.parent = a, a.children = [e, c], a = e
                            }
                            c.parent = a.parent
                        } while (a.children.length > 10);
                        a.parent.maybeSpill()
                    }
                },
                iterN: function (a, b, c) {
                    for (var d = 0; d < this.children.length; ++d) {
                        var e = this.children[d],
                            f = e.chunkSize();
                        if (a < f) {
                            var g = Math.min(b, f - a);
                            if (e.iterN(a, g, c)) return !0;
                            if (0 == (b -= g)) break;
                            a = 0
                        } else a -= f
                    }
                }
            };
            var yg = 0,
                zg = a.Doc = function (a, b, c, d) {
                    if (!(this instanceof zg)) return new zg(a, b, c, d);
                    null == c && (c = 0), Wd.call(this, [new Vd([new vg("", null)])]), this.first = c, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = c;
                    var e = Nf(c, 0);
                    this.sel = na(e), this.history = new fe(null), this.id = ++yg, this.modeOption = b, this.lineSep = d, this.extend = !1, "string" == typeof a && (a = this.splitLines(a)), Ud(this, {
                        from: e,
                        to: e,
                        text: a
                    }), Aa(this, na(e), Mg)
                };
            zg.prototype = Le(Wd.prototype, {
                constructor: zg,
                iter: function (a, b, c) {
                    c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
                },
                insert: function (a, b) {
                    for (var c = 0, d = 0; d < b.length; ++d) c += b[d].height;
                    this.insertInner(a - this.first, b, c)
                },
                remove: function (a, b) {
                    this.removeInner(a - this.first, b)
                },
                getValue: function (a) {
                    var b = _d(this, this.first, this.first + this.size);
                    return a === !1 ? b : b.join(a || this.lineSeparator())
                },
                setValue: Hb(function (a) {
                    var b = Nf(this.first, 0),
                        c = this.first + this.size - 1;
                    Ac(this, {
                        from: b,
                        to: Nf(c, Zd(this, c).text.length),
                        text: this.splitLines(a),
                        origin: "setValue",
                        full: !0
                    }, !0), Aa(this, na(b))
                }),
                replaceRange: function (a, b, c, d) {
                    b = pa(this, b), c = c ? pa(this, c) : b, Gc(this, a, b, c, d)
                },
                getRange: function (a, b, c) {
                    var d = $d(this, pa(this, a), pa(this, b));
                    return c === !1 ? d : d.join(c || this.lineSeparator())
                },
                getLine: function (a) {
                    var b = this.getLineHandle(a);
                    return b && b.text
                },
                getLineHandle: function (a) {
                    if (ra(this, a)) return Zd(this, a)
                },
                getLineNumber: function (a) {
                    return be(a)
                },
                getLineHandleVisualStart: function (a) {
                    return "number" == typeof a && (a = Zd(this, a)), sd(a)
                },
                lineCount: function () {
                    return this.size
                },
                firstLine: function () {
                    return this.first
                },
                lastLine: function () {
                    return this.first + this.size - 1
                },
                clipPos: function (a) {
                    return pa(this, a)
                },
                getCursor: function (a) {
                    var b, c = this.sel.primary();
                    return b = null == a || "head" == a ? c.head : "anchor" == a ? c.anchor : "end" == a || "to" == a || a === !1 ? c.to() : c.from()
                },
                listSelections: function () {
                    return this.sel.ranges
                },
                somethingSelected: function () {
                    return this.sel.somethingSelected()
                },
                setCursor: Hb(function (a, b, c) {
                    xa(this, pa(this, "number" == typeof a ? Nf(a, b || 0) : a), null, c)
                }),
                setSelection: Hb(function (a, b, c) {
                    xa(this, pa(this, a), pa(this, b || a), c)
                }),
                extendSelection: Hb(function (a, b, c) {
                    ua(this, pa(this, a), b && pa(this, b), c)
                }),
                extendSelections: Hb(function (a, b) {
                    va(this, sa(this, a), b)
                }),
                extendSelectionsBy: Hb(function (a, b) {
                    var c = Ie(this.sel.ranges, a);
                    va(this, sa(this, c), b)
                }),
                setSelections: Hb(function (a, b, c) {
                    if (a.length) {
                        for (var d = 0, e = []; d < a.length; d++) e[d] = new la(pa(this, a[d].anchor), pa(this, a[d].head));
                        null == b && (b = Math.min(a.length - 1, this.sel.primIndex)), Aa(this, ma(e, b), c)
                    }
                }),
                addSelection: Hb(function (a, b, c) {
                    var d = this.sel.ranges.slice(0);
                    d.push(new la(pa(this, a), pa(this, b || a))), Aa(this, ma(d, d.length - 1), c)
                }),
                getSelection: function (a) {
                    for (var b, c = this.sel.ranges, d = 0; d < c.length; d++) {
                        var e = $d(this, c[d].from(), c[d].to());
                        b = b ? b.concat(e) : e
                    }
                    return a === !1 ? b : b.join(a || this.lineSeparator())
                },
                getSelections: function (a) {
                    for (var b = [], c = this.sel.ranges, d = 0; d < c.length; d++) {
                        var e = $d(this, c[d].from(), c[d].to());
                        a !== !1 && (e = e.join(a || this.lineSeparator())), b[d] = e
                    }
                    return b
                },
                replaceSelection: function (a, b, c) {
                    for (var d = [], e = 0; e < this.sel.ranges.length; e++) d[e] = a;
                    this.replaceSelections(d, b, c || "+input")
                },
                replaceSelections: Hb(function (a, b, c) {
                    for (var d = [], e = this.sel, f = 0; f < e.ranges.length; f++) {
                        var g = e.ranges[f];
                        d[f] = {
                            from: g.from(),
                            to: g.to(),
                            text: this.splitLines(a[f]),
                            origin: c
                        }
                    }
                    for (var h = b && "end" != b && yc(this, d, b), f = d.length - 1; f >= 0; f--) Ac(this, d[f]);
                    h ? za(this, h) : this.cm && Mc(this.cm)
                }),
                undo: Hb(function () {
                    Cc(this, "undo")
                }),
                redo: Hb(function () {
                    Cc(this, "redo")
                }),
                undoSelection: Hb(function () {
                    Cc(this, "undo", !0)
                }),
                redoSelection: Hb(function () {
                    Cc(this, "redo", !0)
                }),
                setExtending: function (a) {
                    this.extend = a
                },
                getExtending: function () {
                    return this.extend
                },
                historySize: function () {
                    for (var a = this.history, b = 0, c = 0, d = 0; d < a.done.length; d++) a.done[d].ranges || ++b;
                    for (var d = 0; d < a.undone.length; d++) a.undone[d].ranges || ++c;
                    return {
                        undo: b,
                        redo: c
                    }
                },
                clearHistory: function () {
                    this.history = new fe(this.history.maxGeneration)
                },
                markClean: function () {
                    this.cleanGeneration = this.changeGeneration(!0)
                },
                changeGeneration: function (a) {
                    return a && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                },
                isClean: function (a) {
                    return this.history.generation == (a || this.cleanGeneration)
                },
                getHistory: function () {
                    return {
                        done: qe(this.history.done),
                        undone: qe(this.history.undone)
                    }
                },
                setHistory: function (a) {
                    var b = this.history = new fe(this.history.maxGeneration);
                    b.done = qe(a.done.slice(0), null, !0), b.undone = qe(a.undone.slice(0), null, !0)
                },
                addLineClass: Hb(function (a, b, c) {
                    return Pc(this, a, "gutter" == b ? "gutter" : "class", function (a) {
                        var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass";
                        if (a[d]) {
                            if (Ve(c).test(a[d])) return !1;
                            a[d] += " " + c
                        } else a[d] = c;
                        return !0
                    })
                }),
                removeLineClass: Hb(function (a, b, c) {
                    return Pc(this, a, "gutter" == b ? "gutter" : "class", function (a) {
                        var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass",
                            e = a[d];
                        if (!e) return !1;
                        if (null == c) a[d] = null;
                        else {
                            var f = e.match(Ve(c));
                            if (!f) return !1;
                            var g = f.index + f[0].length;
                            a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null
                        }
                        return !0
                    })
                }),
                addLineWidget: Hb(function (a, b, c) {
                    return Ad(this, a, b, c)
                }),
                removeLineWidget: function (a) {
                    a.clear()
                },
                markText: function (a, b, c) {
                    return Wc(this, pa(this, a), pa(this, b), c, c && c.type || "range")
                },
                setBookmark: function (a, b) {
                    var c = {
                        replacedWith: b && (null == b.nodeType ? b.widget : b),
                        insertLeft: b && b.insertLeft,
                        clearWhenEmpty: !1,
                        shared: b && b.shared,
                        handleMouseEvents: b && b.handleMouseEvents
                    };
                    return a = pa(this, a), Wc(this, a, a, c, "bookmark")
                },
                findMarksAt: function (a) {
                    a = pa(this, a);
                    var b = [],
                        c = Zd(this, a.line).markedSpans;
                    if (c)
                        for (var d = 0; d < c.length; ++d) {
                            var e = c[d];
                            (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
                        }
                    return b
                },
                findMarks: function (a, b, c) {
                    a = pa(this, a), b = pa(this, b);
                    var d = [],
                        e = a.line;
                    return this.iter(a.line, b.line + 1, function (f) {
                        var g = f.markedSpans;
                        if (g)
                            for (var h = 0; h < g.length; h++) {
                                var i = g[h];
                                null != i.to && e == a.line && a.ch >= i.to || null == i.from && e != a.line || null != i.from && e == b.line && i.from >= b.ch || c && !c(i.marker) || d.push(i.marker.parent || i.marker)
                            } ++e
                    }), d
                },
                getAllMarks: function () {
                    var a = [];
                    return this.iter(function (b) {
                        var c = b.markedSpans;
                        if (c)
                            for (var d = 0; d < c.length; ++d) null != c[d].from && a.push(c[d].marker)
                    }), a
                },
                posFromIndex: function (a) {
                    var b, c = this.first,
                        d = this.lineSeparator().length;
                    return this.iter(function (e) {
                        var f = e.text.length + d;
                        return f > a ? (b = a, !0) : (a -= f, void ++c)
                    }), pa(this, Nf(c, b))
                },
                indexFromPos: function (a) {
                    a = pa(this, a);
                    var b = a.ch;
                    if (a.line < this.first || a.ch < 0) return 0;
                    var c = this.lineSeparator().length;
                    return this.iter(this.first, a.line, function (a) {
                        b += a.text.length + c
                    }), b
                },
                copy: function (a) {
                    var b = new zg(_d(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
                    return b.scrollTop = this.scrollTop, b.scrollLeft = this.scrollLeft, b.sel = this.sel, b.extend = !1, a && (b.history.undoDepth = this.history.undoDepth, b.setHistory(this.getHistory())), b
                },
                linkedDoc: function (a) {
                    a || (a = {});
                    var b = this.first,
                        c = this.first + this.size;
                    null != a.from && a.from > b && (b = a.from), null != a.to && a.to < c && (c = a.to);
                    var d = new zg(_d(this, b, c), a.mode || this.modeOption, b, this.lineSep);
                    return a.sharedHist && (d.history = this.history), (this.linked || (this.linked = [])).push({
                        doc: d,
                        sharedHist: a.sharedHist
                    }), d.linked = [{
                        doc: this,
                        isParent: !0,
                        sharedHist: a.sharedHist
                    }], Zc(d, Yc(this)), d
                },
                unlinkDoc: function (b) {
                    if (b instanceof a && (b = b.doc), this.linked)
                        for (var c = 0; c < this.linked.length; ++c) {
                            var d = this.linked[c];
                            if (d.doc == b) {
                                this.linked.splice(c, 1), b.unlinkDoc(this), $c(Yc(this));
                                break
                            }
                        }
                    if (b.history == this.history) {
                        var e = [b.id];
                        Xd(b, function (a) {
                            e.push(a.id)
                        }, !0), b.history = new fe(null), b.history.done = qe(this.history.done, e), b.history.undone = qe(this.history.undone, e)
                    }
                },
                iterLinkedDocs: function (a) {
                    Xd(this, a)
                },
                getMode: function () {
                    return this.mode
                },
                getEditor: function () {
                    return this.cm
                },
                splitLines: function (a) {
                    return this.lineSep ? a.split(this.lineSep) : ch(a)
                },
                lineSeparator: function () {
                    return this.lineSep || "\n"
                }
            }), zg.prototype.eachLine = zg.prototype.iter;
            var Ag = "iter insert remove copy getEditor constructor".split(" ");
            for (var Bg in zg.prototype) zg.prototype.hasOwnProperty(Bg) && He(Ag, Bg) < 0 && (a.prototype[Bg] = function (a) {
                return function () {
                    return a.apply(this.doc, arguments)
                }
            }(zg.prototype[Bg]));
            De(zg);
            var Cg = a.e_preventDefault = function (a) {
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            },
                Dg = a.e_stopPropagation = function (a) {
                    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
                },
                Eg = a.e_stop = function (a) {
                    Cg(a), Dg(a)
                },
                Fg = a.on = function (a, b, c) {
                    if (a.addEventListener) a.addEventListener(b, c, !1);
                    else if (a.attachEvent) a.attachEvent("on" + b, c);
                    else {
                        var d = a._handlers || (a._handlers = {}),
                            e = d[b] || (d[b] = []);
                        e.push(c)
                    }
                },
                Gg = [],
                Hg = a.off = function (a, b, c) {
                    if (a.removeEventListener) a.removeEventListener(b, c, !1);
                    else if (a.detachEvent) a.detachEvent("on" + b, c);
                    else
                        for (var d = xe(a, b, !1), e = 0; e < d.length; ++e)
                            if (d[e] == c) {
                                d.splice(e, 1);
                                break
                            }
                },
                Ig = a.signal = function (a, b) {
                    var c = xe(a, b, !0);
                    if (c.length)
                        for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e) c[e].apply(null, d)
                },
                Jg = null,
                Kg = 30,
                Lg = a.Pass = {
                    toString: function () {
                        return "CodeMirror.Pass"
                    }
                },
                Mg = {
                    scroll: !1
                },
                Ng = {
                    origin: "*mouse"
                },
                Og = {
                    origin: "+move"
                };
            Ee.prototype.set = function (a, b) {
                clearTimeout(this.id), this.id = setTimeout(b, a)
            };
            var Pg = a.countColumn = function (a, b, c, d, e) {
                null == b && (b = a.search(/[^\s\u00a0]/), b == -1 && (b = a.length));
                for (var f = d || 0, g = e || 0; ;) {
                    var h = a.indexOf("\t", f);
                    if (h < 0 || h >= b) return g + (b - f);
                    g += h - f, g += c - g % c, f = h + 1
                }
            },
                Qg = a.findColumn = function (a, b, c) {
                    for (var d = 0, e = 0; ;) {
                        var f = a.indexOf("\t", d);
                        f == -1 && (f = a.length);
                        var g = f - d;
                        if (f == a.length || e + g >= b) return d + Math.min(g, b - e);
                        if (e += f - d, e += c - e % c, d = f + 1, e >= b) return d
                    }
                },
                Rg = [""],
                Sg = function (a) {
                    a.select()
                };
            Df ? Sg = function (a) {
                a.selectionStart = 0, a.selectionEnd = a.value.length
            } : uf && (Sg = function (a) {
                try {
                    a.select()
                } catch (a) { }
            });
            var Tg, Ug = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
                Vg = a.isWordChar = function (a) {
                    return /\w/.test(a) || a > "" && (a.toUpperCase() != a.toLowerCase() || Ug.test(a))
                },
                Wg = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
            Tg = document.createRange ? function (a, b, c, d) {
                var e = document.createRange();
                return e.setEnd(d || a, c), e.setStart(a, b), e
            } : function (a, b, c) {
                var d = document.body.createTextRange();
                try {
                    d.moveToElementText(a.parentNode)
                } catch (a) {
                    return d
                }
                return d.collapse(!0), d.moveEnd("character", c), d.moveStart("character", b), d
            };
            var Xg = a.contains = function (a, b) {
                if (3 == b.nodeType && (b = b.parentNode), a.contains) return a.contains(b);
                do
                    if (11 == b.nodeType && (b = b.host), b == a) return !0;
                while (b = b.parentNode)
            };
            uf && vf < 11 && (Ue = function () {
                try {
                    return document.activeElement
                } catch (a) {
                    return document.body
                }
            });
            var Yg, Zg, $g = a.rmClass = function (a, b) {
                var c = a.className,
                    d = Ve(b).exec(c);
                if (d) {
                    var e = c.slice(d.index + d[0].length);
                    a.className = c.slice(0, d.index) + (e ? d[1] + e : "")
                }
            },
                _g = a.addClass = function (a, b) {
                    var c = a.className;
                    Ve(b).test(c) || (a.className += (c ? " " : "") + b)
                },
                ah = !1,
                bh = function () {
                    if (uf && vf < 9) return !1;
                    var a = Re("div");
                    return "draggable" in a || "dragDrop" in a
                }(),
                ch = a.splitLines = 3 != "\n\nb".split(/\n/).length ? function (a) {
                    for (var b = 0, c = [], d = a.length; b <= d;) {
                        var e = a.indexOf("\n", b);
                        e == -1 && (e = a.length);
                        var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e),
                            g = f.indexOf("\r");
                        g != -1 ? (c.push(f.slice(0, g)), b += g + 1) : (c.push(f), b = e + 1)
                    }
                    return c
                } : function (a) {
                    return a.split(/\r\n?|\n/)
                },
                dh = window.getSelection ? function (a) {
                    try {
                        return a.selectionStart != a.selectionEnd
                    } catch (a) {
                        return !1
                    }
                } : function (a) {
                    try {
                        var b = a.ownerDocument.selection.createRange()
                    } catch (a) { }
                    return !(!b || b.parentElement() != a) && 0 != b.compareEndPoints("StartToEnd", b)
                },
                eh = function () {
                    var a = Re("div");
                    return "oncopy" in a || (a.setAttribute("oncopy", "return;"), "function" == typeof a.oncopy)
                }(),
                fh = null,
                gh = a.keyNames = {
                    3: "Enter",
                    8: "Backspace",
                    9: "Tab",
                    13: "Enter",
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Esc",
                    32: "Space",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    44: "PrintScrn",
                    45: "Insert",
                    46: "Delete",
                    59: ";",
                    61: "=",
                    91: "Mod",
                    92: "Mod",
                    93: "Mod",
                    106: "*",
                    107: "=",
                    109: "-",
                    110: ".",
                    111: "/",
                    127: "Delete",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'",
                    63232: "Up",
                    63233: "Down",
                    63234: "Left",
                    63235: "Right",
                    63272: "Delete",
                    63273: "Home",
                    63275: "End",
                    63276: "PageUp",
                    63277: "PageDown",
                    63302: "Insert"
                };
            ! function () {
                for (var a = 0; a < 10; a++) gh[a + 48] = gh[a + 96] = String(a);
                for (var a = 65; a <= 90; a++) gh[a] = String.fromCharCode(a);
                for (var a = 1; a <= 12; a++) gh[a + 111] = gh[a + 63235] = "F" + a
            }();
            var hh, ih = function () {
                function a(a) {
                    return a <= 247 ? c.charAt(a) : 1424 <= a && a <= 1524 ? "R" : 1536 <= a && a <= 1773 ? d.charAt(a - 1536) : 1774 <= a && a <= 2220 ? "r" : 8192 <= a && a <= 8203 ? "w" : 8204 == a ? "b" : "L"
                }

                function b(a, b, c) {
                    this.level = a, this.from = b, this.to = c
                }
                var c = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                    d = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
                    e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                    f = /[stwN]/,
                    g = /[LRr]/,
                    h = /[Lb1n]/,
                    i = /[1n]/,
                    j = "L";
                return function (c) {
                    if (!e.test(c)) return !1;
                    for (var d, k = c.length, l = [], m = 0; m < k; ++m) l.push(d = a(c.charCodeAt(m)));
                    for (var m = 0, n = j; m < k; ++m) {
                        var d = l[m];
                        "m" == d ? l[m] = n : n = d
                    }
                    for (var m = 0, o = j; m < k; ++m) {
                        var d = l[m];
                        "1" == d && "r" == o ? l[m] = "n" : g.test(d) && (o = d, "r" == d && (l[m] = "R"))
                    }
                    for (var m = 1, n = l[0]; m < k - 1; ++m) {
                        var d = l[m];
                        "+" == d && "1" == n && "1" == l[m + 1] ? l[m] = "1" : "," != d || n != l[m + 1] || "1" != n && "n" != n || (l[m] = n), n = d
                    }
                    for (var m = 0; m < k; ++m) {
                        var d = l[m];
                        if ("," == d) l[m] = "N";
                        else if ("%" == d) {
                            for (var p = m + 1; p < k && "%" == l[p]; ++p);
                            for (var q = m && "!" == l[m - 1] || p < k && "1" == l[p] ? "1" : "N", r = m; r < p; ++r) l[r] = q;
                            m = p - 1
                        }
                    }
                    for (var m = 0, o = j; m < k; ++m) {
                        var d = l[m];
                        "L" == o && "1" == d ? l[m] = "L" : g.test(d) && (o = d)
                    }
                    for (var m = 0; m < k; ++m)
                        if (f.test(l[m])) {
                            for (var p = m + 1; p < k && f.test(l[p]); ++p);
                            for (var s = "L" == (m ? l[m - 1] : j), t = "L" == (p < k ? l[p] : j), q = s || t ? "L" : "R", r = m; r < p; ++r) l[r] = q;
                            m = p - 1
                        }
                    for (var u, v = [], m = 0; m < k;)
                        if (h.test(l[m])) {
                            var w = m;
                            for (++m; m < k && h.test(l[m]); ++m);
                            v.push(new b(0, w, m))
                        } else {
                            var x = m,
                                y = v.length;
                            for (++m; m < k && "L" != l[m]; ++m);
                            for (var r = x; r < m;)
                                if (i.test(l[r])) {
                                    x < r && v.splice(y, 0, new b(1, x, r));
                                    var z = r;
                                    for (++r; r < m && i.test(l[r]); ++r);
                                    v.splice(y, 0, new b(2, z, r)), x = r
                                } else ++r;
                            x < m && v.splice(y, 0, new b(1, x, m))
                        }
                    return 1 == v[0].level && (u = c.match(/^\s+/)) && (v[0].from = u[0].length, v.unshift(new b(0, 0, u[0].length))), 1 == Ge(v).level && (u = c.match(/\s+$/)) && (Ge(v).to -= u[0].length, v.push(new b(0, k - u[0].length, k))), 2 == v[0].level && v.unshift(new b(1, v[0].to, v[0].to)), v[0].level != Ge(v).level && v.push(new b(v[0].level, k, k)), v
                }
            }();
            return a.version = "5.19.0", a
        })
    }, {}],
    foldcode: [function (a, b, c) {
        ! function (d) {
            "object" == typeof c && "object" == typeof b ? d(a("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], d) : d(CodeMirror)
        }(function (a) {
            "use strict";

            function b(b, e, f, g) {
                function h(a) {
                    var c = i(b, e);
                    if (!c || c.to.line - c.from.line < j) return null;
                    for (var d = b.findMarksAt(c.from), f = 0; f < d.length; ++f)
                        if (d[f].__isFold && "fold" !== g) {
                            if (!a) return null;
                            c.cleared = !0, d[f].clear()
                        }
                    return c
                }
                if (f && f.call) {
                    var i = f;
                    f = null
                } else var i = d(b, f, "rangeFinder");
                "number" == typeof e && (e = a.Pos(e, 0));
                var j = d(b, f, "minFoldSize"),
                    k = h(!0);
                if (d(b, f, "scanUp"))
                    for (; !k && e.line > b.firstLine();) e = a.Pos(e.line - 1, 0), k = h(!1);
                if (k && !k.cleared && "unfold" !== g) {
                    var l = c(b, f);
                    a.on(l, "mousedown", function (b) {
                        m.clear(), a.e_preventDefault(b)
                    });
                    var m = b.markText(k.from, k.to, {
                        replacedWith: l,
                        clearOnEnter: d(b, f, "clearOnEnter"),
                        __isFold: !0
                    });
                    m.on("clear", function (c, d) {
                        a.signal(b, "unfold", b, c, d)
                    }), a.signal(b, "fold", b, k.from, k.to)
                }
            }

            function c(a, b) {
                var c = d(a, b, "widget");
                if ("string" == typeof c) {
                    var e = document.createTextNode(c);
                    c = document.createElement("span"), c.appendChild(e), c.className = "CodeMirror-foldmarker"
                }
                return c
            }

            function d(a, b, c) {
                if (b && void 0 !== b[c]) return b[c];
                var d = a.options.foldOptions;
                return d && void 0 !== d[c] ? d[c] : e[c]
            }
            a.newFoldFunction = function (a, c) {
                return function (d, e) {
                    b(d, e, {
                        rangeFinder: a,
                        widget: c
                    })
                }
            }, a.defineExtension("foldCode", function (a, c, d) {
                b(this, a, c, d)
            }), a.defineExtension("isFolded", function (a) {
                for (var b = this.findMarksAt(a), c = 0; c < b.length; ++c)
                    if (b[c].__isFold) return !0
            }), a.commands.toggleFold = function (a) {
                a.foldCode(a.getCursor())
            }, a.commands.fold = function (a) {
                a.foldCode(a.getCursor(), null, "fold")
            }, a.commands.unfold = function (a) {
                a.foldCode(a.getCursor(), null, "unfold")
            }, a.commands.foldAll = function (b) {
                b.operation(function () {
                    for (var c = b.firstLine(), d = b.lastLine(); c <= d; c++) b.foldCode(a.Pos(c, 0), null, "fold")
                })
            }, a.commands.unfoldAll = function (b) {
                b.operation(function () {
                    for (var c = b.firstLine(), d = b.lastLine(); c <= d; c++) b.foldCode(a.Pos(c, 0), null, "unfold")
                })
            }, a.registerHelper("fold", "combine", function () {
                var a = Array.prototype.slice.call(arguments, 0);
                return function (b, c) {
                    for (var d = 0; d < a.length; ++d) {
                        var e = a[d](b, c);
                        if (e) return e
                    }
                }
            }), a.registerHelper("fold", "auto", function (a, b) {
                for (var c = a.getHelpers(b, "fold"), d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e) return e
                }
            });
            var e = {
                rangeFinder: a.fold.auto,
                widget: "↔",
                minFoldSize: 0,
                scanUp: !1,
                clearOnEnter: !0
            };
            a.defineOption("foldOptions", null), a.defineExtension("foldOption", function (a, b) {
                return d(this, a, b)
            })
        })
    }, {
        "../../lib/codemirror": "codemirror"
    }],
    foldgutter: [function (a, b, c) {
        ! function (d) {
            "object" == typeof c && "object" == typeof b ? d(a("../../lib/codemirror"), a("./foldcode")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./foldcode"], d) : d(CodeMirror)
        }(function (a) {
            "use strict";

            function b(a) {
                this.options = a, this.from = this.to = 0
            }

            function c(a) {
                return a === !0 && (a = {}), null == a.gutter && (a.gutter = "CodeMirror-foldgutter"), null == a.indicatorOpen && (a.indicatorOpen = "CodeMirror-foldgutter-open"), null == a.indicatorFolded && (a.indicatorFolded = "CodeMirror-foldgutter-folded"), a
            }

            function d(a, b) {
                for (var c = a.findMarks(l(b, 0), l(b + 1, 0)), d = 0; d < c.length; ++d)
                    if (c[d].__isFold && c[d].find().from.line == b) return c[d]
            }

            function e(a) {
                if ("string" == typeof a) {
                    var b = document.createElement("div");
                    return b.className = a + " CodeMirror-guttermarker-subtle", b
                }
                return a.cloneNode(!0)
            }

            function f(a, b, c) {
                var f = a.state.foldGutter.options,
                    g = b,
                    h = a.foldOption(f, "minFoldSize"),
                    i = a.foldOption(f, "rangeFinder");
                a.eachLine(b, c, function (b) {
                    var c = null;
                    if (d(a, g)) c = e(f.indicatorFolded);
                    else {
                        var j = l(g, 0),
                            k = i && i(a, j);
                        k && k.to.line - k.from.line >= h && (c = e(f.indicatorOpen))
                    }
                    a.setGutterMarker(b, f.gutter, c), ++g
                })
            }

            function g(a) {
                var b = a.getViewport(),
                    c = a.state.foldGutter;
                c && (a.operation(function () {
                    f(a, b.from, b.to)
                }), c.from = b.from, c.to = b.to)
            }

            function h(a, b, c) {
                var e = a.state.foldGutter;
                if (e) {
                    var f = e.options;
                    if (c == f.gutter) {
                        var g = d(a, b);
                        g ? g.clear() : a.foldCode(l(b, 0), f.rangeFinder)
                    }
                }
            }

            function i(a) {
                var b = a.state.foldGutter;
                if (b) {
                    var c = b.options;
                    b.from = b.to = 0, clearTimeout(b.changeUpdate), b.changeUpdate = setTimeout(function () {
                        g(a)
                    }, c.foldOnChangeTimeSpan || 600)
                }
            }

            function j(a) {
                var b = a.state.foldGutter;
                if (b) {
                    var c = b.options;
                    clearTimeout(b.changeUpdate), b.changeUpdate = setTimeout(function () {
                        var c = a.getViewport();
                        b.from == b.to || c.from - b.to > 20 || b.from - c.to > 20 ? g(a) : a.operation(function () {
                            c.from < b.from && (f(a, c.from, b.from), b.from = c.from), c.to > b.to && (f(a, b.to, c.to), b.to = c.to)
                        })
                    }, c.updateViewportTimeSpan || 400)
                }
            }

            function k(a, b) {
                var c = a.state.foldGutter;
                if (c) {
                    var d = b.line;
                    d >= c.from && d < c.to && f(a, d, d + 1)
                }
            }
            a.defineOption("foldGutter", !1, function (d, e, f) {
                f && f != a.Init && (d.clearGutter(d.state.foldGutter.options.gutter), d.state.foldGutter = null, d.off("gutterClick", h), d.off("change", i), d.off("viewportChange", j), d.off("fold", k), d.off("unfold", k), d.off("swapDoc", i)), e && (d.state.foldGutter = new b(c(e)), g(d), d.on("gutterClick", h), d.on("change", i), d.on("viewportChange", j), d.on("fold", k), d.on("unfold", k), d.on("swapDoc", i))
            });
            var l = a.Pos
        })
    }, {
        "../../lib/codemirror": "codemirror",
        "./foldcode": "foldcode"
    }],
    "mode-javascript": [function (a, b, c) {
        ! function (d) {
            "object" == typeof c && "object" == typeof b ? d(a("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], d) : d(CodeMirror)
        }(function (a) {
            "use strict";

            function b(a, b, c) {
                return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(b.lastType) || "quasi" == b.lastType && /\{\s*$/.test(a.string.slice(0, a.pos - (c || 0)))
            }
            a.defineMode("javascript", function (c, d) {
                function e(a) {
                    for (var b, c = !1, d = !1; null != (b = a.next());) {
                        if (!c) {
                            if ("/" == b && !d) return;
                            "[" == b ? d = !0 : d && "]" == b && (d = !1)
                        }
                        c = !c && "\\" == b
                    }
                }

                function f(a, b, c) {
                    return xa = a, ya = c, b
                }

                function g(a, c) {
                    var d = a.next();
                    if ('"' == d || "'" == d) return c.tokenize = h(d), c.tokenize(a, c);
                    if ("." == d && a.match(/^\d+(?:[eE][+\-]?\d+)?/)) return f("number", "number");
                    if ("." == d && a.match("..")) return f("spread", "meta");
                    if (/[\[\]{}\(\),;\:\.]/.test(d)) return f(d);
                    if ("=" == d && a.eat(">")) return f("=>", "operator");
                    if ("0" == d && a.eat(/x/i)) return a.eatWhile(/[\da-f]/i), f("number", "number");
                    if ("0" == d && a.eat(/o/i)) return a.eatWhile(/[0-7]/i), f("number", "number");
                    if ("0" == d && a.eat(/b/i)) return a.eatWhile(/[01]/i), f("number", "number");
                    if (/\d/.test(d)) return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), f("number", "number");
                    if ("/" == d) return a.eat("*") ? (c.tokenize = i, i(a, c)) : a.eat("/") ? (a.skipToEnd(), f("comment", "comment")) : b(a, c, 1) ? (e(a), a.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), f("regexp", "string-2")) : (a.eatWhile(Ga), f("operator", "operator", a.current()));
                    if ("`" == d) return c.tokenize = j, j(a, c);
                    if ("#" == d) return a.skipToEnd(), f("error", "error");
                    if (Ga.test(d)) return a.eatWhile(Ga), f("operator", "operator", a.current());
                    if (Ea.test(d)) {
                        a.eatWhile(Ea);
                        var g = a.current(),
                            k = Fa.propertyIsEnumerable(g) && Fa[g];
                        return k && "." != c.lastType ? f(k.type, k.style, g) : f("variable", "variable", g)
                    }
                }

                function h(a) {
                    return function (b, c) {
                        var d, e = !1;
                        if (Ba && "@" == b.peek() && b.match(Ha)) return c.tokenize = g, f("jsonld-keyword", "meta");
                        for (; null != (d = b.next()) && (d != a || e);) e = !e && "\\" == d;
                        return e || (c.tokenize = g), f("string", "string")
                    }
                }

                function i(a, b) {
                    for (var c, d = !1; c = a.next();) {
                        if ("/" == c && d) {
                            b.tokenize = g;
                            break
                        }
                        d = "*" == c
                    }
                    return f("comment", "comment")
                }

                function j(a, b) {
                    for (var c, d = !1; null != (c = a.next());) {
                        if (!d && ("`" == c || "$" == c && a.eat("{"))) {
                            b.tokenize = g;
                            break
                        }
                        d = !d && "\\" == c
                    }
                    return f("quasi", "string-2", a.current())
                }

                function k(a, b) {
                    b.fatArrowAt && (b.fatArrowAt = null);
                    var c = a.string.indexOf("=>", a.start);
                    if (!(c < 0)) {
                        for (var d = 0, e = !1, f = c - 1; f >= 0; --f) {
                            var g = a.string.charAt(f),
                                h = Ia.indexOf(g);
                            if (h >= 0 && h < 3) {
                                if (!d) {
                                    ++f;
                                    break
                                }
                                if (0 == --d) {
                                    "(" == g && (e = !0);
                                    break
                                }
                            } else if (h >= 3 && h < 6)++d;
                            else if (Ea.test(g)) e = !0;
                            else {
                                if (/["'\/]/.test(g)) return;
                                if (e && !d) {
                                    ++f;
                                    break
                                }
                            }
                        }
                        e && !d && (b.fatArrowAt = f)
                    }
                }

                function l(a, b, c, d, e, f) {
                    this.indented = a, this.column = b, this.type = c, this.prev = e, this.info = f, null != d && (this.align = d)
                }

                function m(a, b) {
                    for (var c = a.localVars; c; c = c.next)
                        if (c.name == b) return !0;
                    for (var d = a.context; d; d = d.prev)
                        for (var c = d.vars; c; c = c.next)
                            if (c.name == b) return !0
                }

                function n(a, b, c, d, e) {
                    var f = a.cc;
                    for (Ka.state = a, Ka.stream = e, Ka.marked = null, Ka.cc = f, Ka.style = b, a.lexical.hasOwnProperty("align") || (a.lexical.align = !0); ;) {
                        var g = f.length ? f.pop() : Ca ? x : w;
                        if (g(c, d)) {
                            for (; f.length && f[f.length - 1].lex;) f.pop()();
                            return Ka.marked ? Ka.marked : "variable" == c && m(a, d) ? "variable-2" : b
                        }
                    }
                }

                function o() {
                    for (var a = arguments.length - 1; a >= 0; a--) Ka.cc.push(arguments[a])
                }

                function p() {
                    return o.apply(null, arguments), !0
                }

                function q(a) {
                    function b(b) {
                        for (var c = b; c; c = c.next)
                            if (c.name == a) return !0;
                        return !1
                    }
                    var c = Ka.state;
                    if (Ka.marked = "def", c.context) {
                        if (b(c.localVars)) return;
                        c.localVars = {
                            name: a,
                            next: c.localVars
                        }
                    } else {
                        if (b(c.globalVars)) return;
                        d.globalVars && (c.globalVars = {
                            name: a,
                            next: c.globalVars
                        })
                    }
                }

                function r() {
                    Ka.state.context = {
                        prev: Ka.state.context,
                        vars: Ka.state.localVars
                    }, Ka.state.localVars = La
                }

                function s() {
                    Ka.state.localVars = Ka.state.context.vars, Ka.state.context = Ka.state.context.prev
                }

                function t(a, b) {
                    var c = function () {
                        var c = Ka.state,
                            d = c.indented;
                        if ("stat" == c.lexical.type) d = c.lexical.indented;
                        else
                            for (var e = c.lexical; e && ")" == e.type && e.align; e = e.prev) d = e.indented;
                        c.lexical = new l(d, Ka.stream.column(), a, null, c.lexical, b)
                    };
                    return c.lex = !0, c
                }

                function u() {
                    var a = Ka.state;
                    a.lexical.prev && (")" == a.lexical.type && (a.indented = a.lexical.indented), a.lexical = a.lexical.prev)
                }

                function v(a) {
                    function b(c) {
                        return c == a ? p() : ";" == a ? o() : p(b)
                    }
                    return b
                }

                function w(a, b) {
                    return "var" == a ? p(t("vardef", b.length), _, v(";"), u) : "keyword a" == a ? p(t("form"), z, w, u) : "keyword b" == a ? p(t("form"), w, u) : "{" == a ? p(t("}"), T, u) : ";" == a ? p() : "if" == a ? ("else" == Ka.state.lexical.info && Ka.state.cc[Ka.state.cc.length - 1] == u && Ka.state.cc.pop()(), p(t("form"), z, w, u, ea)) : "function" == a ? p(ka) : "for" == a ? p(t("form"), fa, w, u) : "variable" == a ? p(t("stat"), M) : "switch" == a ? p(t("form"), z, t("}", "switch"), v("{"), T, u, u) : "case" == a ? p(x, v(":")) : "default" == a ? p(v(":")) : "catch" == a ? p(t("form"), r, v("("), la, v(")"), w, u, s) : "class" == a ? p(t("form"), ma, u) : "export" == a ? p(t("stat"), qa, u) : "import" == a ? p(t("stat"), ra, u) : "module" == a ? p(t("form"), aa, t("}"), v("{"), T, u, u) : "type" == a ? p(W, v("operator"), W, v(";")) : "async" == a ? p(w) : o(t("stat"), x, v(";"), u)
                }

                function x(a) {
                    return A(a, !1)
                }

                function y(a) {
                    return A(a, !0)
                }

                function z(a) {
                    return "(" != a ? o() : p(t(")"), x, v(")"), u)
                }

                function A(a, b) {
                    if (Ka.state.fatArrowAt == Ka.stream.start) {
                        var c = b ? I : H;
                        if ("(" == a) return p(r, t(")"), R(aa, ")"), u, v("=>"), c, s);
                        if ("variable" == a) return o(r, aa, v("=>"), c, s)
                    }
                    var d = b ? E : D;
                    return Ja.hasOwnProperty(a) ? p(d) : "function" == a ? p(ka, d) : "keyword c" == a || "async" == a ? p(b ? C : B) : "(" == a ? p(t(")"), B, v(")"), u, d) : "operator" == a || "spread" == a ? p(b ? y : x) : "[" == a ? p(t("]"), va, u, d) : "{" == a ? S(O, "}", null, d) : "quasi" == a ? o(F, d) : "new" == a ? p(J(b)) : p()
                }

                function B(a) {
                    return a.match(/[;\}\)\],]/) ? o() : o(x)
                }

                function C(a) {
                    return a.match(/[;\}\)\],]/) ? o() : o(y)
                }

                function D(a, b) {
                    return "," == a ? p(x) : E(a, b, !1)
                }

                function E(a, b, c) {
                    var d = 0 == c ? D : E,
                        e = 0 == c ? x : y;
                    return "=>" == a ? p(r, c ? I : H, s) : "operator" == a ? /\+\+|--/.test(b) ? p(d) : "?" == b ? p(x, v(":"), e) : p(e) : "quasi" == a ? o(F, d) : ";" != a ? "(" == a ? S(y, ")", "call", d) : "." == a ? p(N, d) : "[" == a ? p(t("]"), B, v("]"), u, d) : void 0 : void 0
                }

                function F(a, b) {
                    return "quasi" != a ? o() : "${" != b.slice(b.length - 2) ? p(F) : p(x, G)
                }

                function G(a) {
                    if ("}" == a) return Ka.marked = "string-2", Ka.state.tokenize = j, p(F)
                }

                function H(a) {
                    return k(Ka.stream, Ka.state), o("{" == a ? w : x)
                }

                function I(a) {
                    return k(Ka.stream, Ka.state), o("{" == a ? w : y)
                }

                function J(a) {
                    return function (b) {
                        return "." == b ? p(a ? L : K) : o(a ? y : x)
                    }
                }

                function K(a, b) {
                    if ("target" == b) return Ka.marked = "keyword", p(D)
                }

                function L(a, b) {
                    if ("target" == b) return Ka.marked = "keyword", p(E)
                }

                function M(a) {
                    return ":" == a ? p(u, w) : o(D, v(";"), u)
                }

                function N(a) {
                    if ("variable" == a) return Ka.marked = "property", p()
                }

                function O(a, b) {
                    return "async" == a ? (Ka.marked = "property", p(O)) : "variable" == a || "keyword" == Ka.style ? (Ka.marked = "property", p("get" == b || "set" == b ? P : Q)) : "number" == a || "string" == a ? (Ka.marked = Ba ? "property" : Ka.style + " property", p(Q)) : "jsonld-keyword" == a ? p(Q) : "modifier" == a ? p(O) : "[" == a ? p(x, v("]"), Q) : "spread" == a ? p(x) : ":" == a ? o(Q) : void 0
                }

                function P(a) {
                    return "variable" != a ? o(Q) : (Ka.marked = "property", p(ka))
                }

                function Q(a) {
                    return ":" == a ? p(y) : "(" == a ? o(ka) : void 0
                }

                function R(a, b) {
                    function c(d, e) {
                        if ("," == d) {
                            var f = Ka.state.lexical;
                            return "call" == f.info && (f.pos = (f.pos || 0) + 1), p(function (c, d) {
                                return c == b || d == b ? o() : o(a)
                            }, c)
                        }
                        return d == b || e == b ? p() : p(v(b))
                    }
                    return function (d, e) {
                        return d == b || e == b ? p() : o(a, c)
                    }
                }

                function S(a, b, c) {
                    for (var d = 3; d < arguments.length; d++) Ka.cc.push(arguments[d]);
                    return p(t(b, c), R(a, b), u);
                }

                function T(a) {
                    return "}" == a ? p() : o(w, T)
                }

                function U(a, b) {
                    if (Da) {
                        if (":" == a) return p(W);
                        if ("?" == b) return p(U)
                    }
                }

                function V(a, b) {
                    if ("=" == b) return p(y)
                }

                function W(a) {
                    return "variable" == a ? (Ka.marked = "variable-3", p($)) : "{" == a ? p(R(Y, "}")) : "(" == a ? p(R(Z, ")"), X) : void 0
                }

                function X(a) {
                    if ("=>" == a) return p(W)
                }

                function Y(a) {
                    return "variable" == a || "keyword" == Ka.style ? (Ka.marked = "property", p(Y)) : ":" == a ? p(W) : void 0
                }

                function Z(a) {
                    return "variable" == a ? p(Z) : ":" == a ? p(W) : void 0
                }

                function $(a, b) {
                    return "<" == b ? p(R(W, ">"), $) : "[" == a ? p(v("]"), $) : void 0
                }

                function _() {
                    return o(aa, U, ca, da)
                }

                function aa(a, b) {
                    return "modifier" == a ? p(aa) : "variable" == a ? (q(b), p()) : "spread" == a ? p(aa) : "[" == a ? S(aa, "]") : "{" == a ? S(ba, "}") : void 0
                }

                function ba(a, b) {
                    return "variable" != a || Ka.stream.match(/^\s*:/, !1) ? ("variable" == a && (Ka.marked = "property"), "spread" == a ? p(aa) : "}" == a ? o() : p(v(":"), aa, ca)) : (q(b), p(ca))
                }

                function ca(a, b) {
                    if ("=" == b) return p(y)
                }

                function da(a) {
                    if ("," == a) return p(_)
                }

                function ea(a, b) {
                    if ("keyword b" == a && "else" == b) return p(t("form", "else"), w, u)
                }

                function fa(a) {
                    if ("(" == a) return p(t(")"), ga, v(")"), u)
                }

                function ga(a) {
                    return "var" == a ? p(_, v(";"), ia) : ";" == a ? p(ia) : "variable" == a ? p(ha) : o(x, v(";"), ia)
                }

                function ha(a, b) {
                    return "in" == b || "of" == b ? (Ka.marked = "keyword", p(x)) : p(D, ia)
                }

                function ia(a, b) {
                    return ";" == a ? p(ja) : "in" == b || "of" == b ? (Ka.marked = "keyword", p(x)) : o(x, v(";"), ja)
                }

                function ja(a) {
                    ")" != a && p(x)
                }

                function ka(a, b) {
                    return "*" == b ? (Ka.marked = "keyword", p(ka)) : "variable" == a ? (q(b), p(ka)) : "(" == a ? p(r, t(")"), R(la, ")"), u, U, w, s) : void 0
                }

                function la(a) {
                    return "spread" == a ? p(la) : o(aa, U, V)
                }

                function ma(a, b) {
                    if ("variable" == a) return q(b), p(na)
                }

                function na(a, b) {
                    return "extends" == b ? p(Da ? W : x, na) : "{" == a ? p(t("}"), oa, u) : void 0
                }

                function oa(a, b) {
                    return "variable" == a || "keyword" == Ka.style ? ("static" == b || "get" == b || "set" == b || Da && ("public" == b || "private" == b || "protected" == b)) && Ka.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (Ka.marked = "keyword", p(oa)) : (Ka.marked = "property", p(Da ? pa : ka, oa)) : "*" == b ? (Ka.marked = "keyword", p(oa)) : ";" == a ? p(oa) : "}" == a ? p() : void 0
                }

                function pa(a) {
                    return ":" == a ? p(W) : o(ka)
                }

                function qa(a, b) {
                    return "*" == b ? (Ka.marked = "keyword", p(ua, v(";"))) : "default" == b ? (Ka.marked = "keyword", p(x, v(";"))) : o(w)
                }

                function ra(a) {
                    return "string" == a ? p() : o(sa, ua)
                }

                function sa(a, b) {
                    return "{" == a ? S(sa, "}") : ("variable" == a && q(b), "*" == b && (Ka.marked = "keyword"), p(ta))
                }

                function ta(a, b) {
                    if ("as" == b) return Ka.marked = "keyword", p(sa)
                }

                function ua(a, b) {
                    if ("from" == b) return Ka.marked = "keyword", p(x)
                }

                function va(a) {
                    return "]" == a ? p() : o(R(y, "]"))
                }

                function wa(a, b) {
                    return "operator" == a.lastType || "," == a.lastType || Ga.test(b.charAt(0)) || /[,.]/.test(b.charAt(0))
                }
                var xa, ya, za = c.indentUnit,
                    Aa = d.statementIndent,
                    Ba = d.jsonld,
                    Ca = d.json || Ba,
                    Da = d.typescript,
                    Ea = d.wordCharacters || /[\w$\xa1-\uffff]/,
                    Fa = function () {
                        function a(a) {
                            return {
                                type: a,
                                style: "keyword"
                            }
                        }
                        var b = a("keyword a"),
                            c = a("keyword b"),
                            d = a("keyword c"),
                            e = a("operator"),
                            f = {
                                type: "atom",
                                style: "atom"
                            },
                            g = {
                                if: a("if"),
                                while: b,
                                with: b,
                                else: c,
                                do: c,
                                try: c,
                                finally: c,
                                return: d,
                                break: d,
                                continue: d,
                                new: a("new"),
                                delete: d,
                                throw: d,
                                debugger: d,
                                var: a("var"),
                                const: a("var"),
                                let: a("var"),
                                function: a("function"),
                                catch: a("catch"),
                                for: a("for"),
                                switch: a("switch"),
                                case: a("case"),
                                default: a("default"),
                                in: e,
                                typeof: e,
                                instanceof: e,
                                true: f,
                                false: f,
                                null: f,
                                undefined: f,
                                NaN: f,
                                Infinity: f,
                                this: a("this"),
                                class: a("class"),
                                super: a("atom"),
                                yield: d,
                                export: a("export"),
                                import: a("import"),
                                extends: d,
                                await: d,
                                async: a("async")
                            };
                        if (Da) {
                            var h = {
                                type: "variable",
                                style: "variable-3"
                            },
                                i = {
                                    interface: a("class"),
                                    implements: d,
                                    namespace: d,
                                    module: a("module"),
                                    enum: a("module"),
                                    type: a("type"),
                                    public: a("modifier"),
                                    private: a("modifier"),
                                    protected: a("modifier"),
                                    abstract: a("modifier"),
                                    as: e,
                                    string: h,
                                    number: h,
                                    boolean: h,
                                    any: h
                                };
                            for (var j in i) g[j] = i[j]
                        }
                        return g
                    }(),
                    Ga = /[+\-*&%=<>!?|~^]/,
                    Ha = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                    Ia = "([{}])",
                    Ja = {
                        atom: !0,
                        number: !0,
                        variable: !0,
                        string: !0,
                        regexp: !0,
                        this: !0,
                        "jsonld-keyword": !0
                    },
                    Ka = {
                        state: null,
                        column: null,
                        marked: null,
                        cc: null
                    },
                    La = {
                        name: "this",
                        next: {
                            name: "arguments"
                        }
                    };
                return u.lex = !0, {
                    startState: function (a) {
                        var b = {
                            tokenize: g,
                            lastType: "sof",
                            cc: [],
                            lexical: new l((a || 0) - za, 0, "block", !1),
                            localVars: d.localVars,
                            context: d.localVars && {
                                vars: d.localVars
                            },
                            indented: a || 0
                        };
                        return d.globalVars && "object" == typeof d.globalVars && (b.globalVars = d.globalVars), b
                    },
                    token: function (a, b) {
                        if (a.sol() && (b.lexical.hasOwnProperty("align") || (b.lexical.align = !1), b.indented = a.indentation(), k(a, b)), b.tokenize != i && a.eatSpace()) return null;
                        var c = b.tokenize(a, b);
                        return "comment" == xa ? c : (b.lastType = "operator" != xa || "++" != ya && "--" != ya ? xa : "incdec", n(b, c, xa, ya, a))
                    },
                    indent: function (b, c) {
                        if (b.tokenize == i) return a.Pass;
                        if (b.tokenize != g) return 0;
                        var e, f = c && c.charAt(0),
                            h = b.lexical;
                        if (!/^\s*else\b/.test(c))
                            for (var j = b.cc.length - 1; j >= 0; --j) {
                                var k = b.cc[j];
                                if (k == u) h = h.prev;
                                else if (k != ea) break
                            }
                        for (;
                            ("stat" == h.type || "form" == h.type) && ("}" == f || (e = b.cc[b.cc.length - 1]) && (e == D || e == E) && !/^[,\.=+\-*:?[\(]/.test(c));) h = h.prev;
                        Aa && ")" == h.type && "stat" == h.prev.type && (h = h.prev);
                        var l = h.type,
                            m = f == l;
                        return "vardef" == l ? h.indented + ("operator" == b.lastType || "," == b.lastType ? h.info + 1 : 0) : "form" == l && "{" == f ? h.indented : "form" == l ? h.indented + za : "stat" == l ? h.indented + (wa(b, c) ? Aa || za : 0) : "switch" != h.info || m || 0 == d.doubleIndentSwitch ? h.align ? h.column + (m ? 0 : 1) : h.indented + (m ? 0 : za) : h.indented + (/^(?:case|default)\b/.test(c) ? za : 2 * za)
                    },
                    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                    blockCommentStart: Ca ? null : "/*",
                    blockCommentEnd: Ca ? null : "*/",
                    lineComment: Ca ? null : "//",
                    fold: "brace",
                    closeBrackets: "()[]{}''\"\"``",
                    helperType: Ca ? "json" : "javascript",
                    jsonldMode: Ba,
                    jsonMode: Ca,
                    expressionAllowed: b,
                    skipExpression: function (a) {
                        var b = a.cc[a.cc.length - 1];
                        b != x && b != y || a.cc.pop()
                    }
                }
            }), a.registerHelper("wordChars", "javascript", /[\w$]/), a.defineMIME("text/javascript", "javascript"), a.defineMIME("text/ecmascript", "javascript"), a.defineMIME("application/javascript", "javascript"), a.defineMIME("application/x-javascript", "javascript"), a.defineMIME("application/ecmascript", "javascript"), a.defineMIME("application/json", {
                name: "javascript",
                json: !0
            }), a.defineMIME("application/x-json", {
                name: "javascript",
                json: !0
            }), a.defineMIME("application/ld+json", {
                name: "javascript",
                jsonld: !0
            }), a.defineMIME("text/typescript", {
                name: "javascript",
                typescript: !0
            }), a.defineMIME("application/typescript", {
                name: "javascript",
                typescript: !0
            })
        })
    }, {
        "../../lib/codemirror": "codemirror"
    }],
    "mode-sql": [function (a, b, c) {
        ! function (d) {
            "object" == typeof c && "object" == typeof b ? d(a("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], d) : d(CodeMirror)
        }(function (a) {
            "use strict";
            a.defineMode("sql", function (b, c) {
                function d(a, b) {
                    var c = a.next();
                    if (o[c]) {
                        var d = o[c](a, b);
                        if (d !== !1) return d
                    }
                    if (1 == n.hexNumber && ("0" == c && a.match(/^[xX][0-9a-fA-F]+/) || ("x" == c || "X" == c) && a.match(/^'[0-9a-fA-F]+'/))) return "number";
                    if (1 == n.binaryNumber && (("b" == c || "B" == c) && a.match(/^'[01]+'/) || "0" == c && a.match(/^b[01]+/))) return "number";
                    if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) return a.match(/^[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/), 1 == n.decimallessFloat && a.eat("."), "number";
                    if ("?" == c && (a.eatSpace() || a.eol() || a.eat(";"))) return "variable-3";
                    if ("'" == c || '"' == c && n.doubleQuote) return b.tokenize = e(c), b.tokenize(a, b);
                    if ((1 == n.nCharCast && ("n" == c || "N" == c) || 1 == n.charsetCast && "_" == c && a.match(/[a-z][a-z0-9]*/i)) && ("'" == a.peek() || '"' == a.peek())) return "keyword";
                    if (/^[\(\),\;\[\]]/.test(c)) return null;
                    if (n.commentSlashSlash && "/" == c && a.eat("/")) return a.skipToEnd(), "comment";
                    if (n.commentHash && "#" == c || "-" == c && a.eat("-") && (!n.commentSpaceRequired || a.eat(" "))) return a.skipToEnd(), "comment";
                    if ("/" == c && a.eat("*")) return b.tokenize = f, b.tokenize(a, b);
                    if ("." != c) {
                        if (m.test(c)) return a.eatWhile(m), null;
                        if ("{" == c && (a.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || a.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) return "number";
                        a.eatWhile(/^[_\w\d]/);
                        var g = a.current().toLowerCase();
                        return p.hasOwnProperty(g) && (a.match(/^( )+'[^']*'/) || a.match(/^( )+"[^"]*"/)) ? "number" : j.hasOwnProperty(g) ? "atom" : k.hasOwnProperty(g) ? "builtin" : l.hasOwnProperty(g) ? "keyword" : i.hasOwnProperty(g) ? "string-2" : null
                    }
                    return 1 == n.zerolessFloat && a.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number" : 1 == n.ODBCdotTable && a.match(/^[a-zA-Z_]+/) ? "variable-2" : void 0
                }

                function e(a) {
                    return function (b, c) {
                        for (var e, f = !1; null != (e = b.next());) {
                            if (e == a && !f) {
                                c.tokenize = d;
                                break
                            }
                            f = !f && "\\" == e
                        }
                        return "string"
                    }
                }

                function f(a, b) {
                    for (; ;) {
                        if (!a.skipTo("*")) {
                            a.skipToEnd();
                            break
                        }
                        if (a.next(), a.eat("/")) {
                            b.tokenize = d;
                            break
                        }
                    }
                    return "comment"
                }

                function g(a, b, c) {
                    b.context = {
                        prev: b.context,
                        indent: a.indentation(),
                        col: a.column(),
                        type: c
                    }
                }

                function h(a) {
                    a.indent = a.context.indent, a.context = a.context.prev
                }
                var i = c.client || {},
                    j = c.atoms || {
                        false: !0,
                        true: !0,
                        null: !0
                    },
                    k = c.builtin || {},
                    l = c.keywords || {},
                    m = c.operatorChars || /^[*+\-%<>!=&|~^]/,
                    n = c.support || {},
                    o = c.hooks || {},
                    p = c.dateSQL || {
                        date: !0,
                        time: !0,
                        timestamp: !0
                    };
                return {
                    startState: function () {
                        return {
                            tokenize: d,
                            context: null
                        }
                    },
                    token: function (a, b) {
                        if (a.sol() && b.context && null == b.context.align && (b.context.align = !1), a.eatSpace()) return null;
                        var c = b.tokenize(a, b);
                        if ("comment" == c) return c;
                        b.context && null == b.context.align && (b.context.align = !0);
                        var d = a.current();
                        return "(" == d ? g(a, b, ")") : "[" == d ? g(a, b, "]") : b.context && b.context.type == d && h(b), c
                    },
                    indent: function (c, d) {
                        var e = c.context;
                        if (!e) return a.Pass;
                        var f = d.charAt(0) == e.type;
                        return e.align ? e.col + (f ? 0 : 1) : e.indent + (f ? 0 : b.indentUnit)
                    },
                    blockCommentStart: "/*",
                    blockCommentEnd: "*/",
                    lineComment: n.commentSlashSlash ? "//" : n.commentHash ? "#" : null
                }
            }),
                function () {
                    function b(a) {
                        for (var b; null != (b = a.next());)
                            if ("`" == b && !a.eat("`")) return "variable-2";
                        return a.backUp(a.current().length - 1), a.eatWhile(/\w/) ? "variable-2" : null
                    }

                    function c(a) {
                        return a.eat("@") && (a.match(/^session\./), a.match(/^local\./), a.match(/^global\./)), a.eat("'") ? (a.match(/^.*'/), "variable-2") : a.eat('"') ? (a.match(/^.*"/), "variable-2") : a.eat("`") ? (a.match(/^.*`/), "variable-2") : a.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null
                    }

                    function d(a) {
                        return a.eat("N") ? "atom" : a.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null
                    }

                    function e(a) {
                        for (var b = {}, c = a.split(" "), d = 0; d < c.length; ++d) b[c[d]] = !0;
                        return b
                    }
                    var f = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";
                    a.defineMIME("text/x-sql", {
                        name: "sql",
                        keywords: e(f + "begin"),
                        builtin: e("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),
                        atoms: e("false true null unknown"),
                        operatorChars: /^[*+\-%<>!=]/,
                        dateSQL: e("date time timestamp"),
                        support: e("ODBCdotTable doubleQuote binaryNumber hexNumber")
                    }), a.defineMIME("text/x-mssql", {
                        name: "sql",
                        client: e("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
                        keywords: e(f + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare"),
                        builtin: e("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
                        atoms: e("false true null unknown"),
                        operatorChars: /^[*+\-%<>!=]/,
                        dateSQL: e("date datetimeoffset datetime2 smalldatetime datetime time"),
                        hooks: {
                            "@": c
                        }
                    }), a.defineMIME("text/x-mysql", {
                        name: "sql",
                        client: e("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
                        keywords: e(f + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
                        builtin: e("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
                        atoms: e("false true null unknown"),
                        operatorChars: /^[*+\-%<>!=&|^]/,
                        dateSQL: e("date time timestamp"),
                        support: e("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
                        hooks: {
                            "@": c,
                            "`": b,
                            "\\": d
                        }
                    }), a.defineMIME("text/x-mariadb", {
                        name: "sql",
                        client: e("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
                        keywords: e(f + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
                        builtin: e("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
                        atoms: e("false true null unknown"),
                        operatorChars: /^[*+\-%<>!=&|^]/,
                        dateSQL: e("date time timestamp"),
                        support: e("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
                        hooks: {
                            "@": c,
                            "`": b,
                            "\\": d
                        }
                    }), a.defineMIME("text/x-cassandra", {
                        name: "sql",
                        client: {},
                        keywords: e("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
                        builtin: e("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
                        atoms: e("false true infinity NaN"),
                        operatorChars: /^[<>=]/,
                        dateSQL: {},
                        support: e("commentSlashSlash decimallessFloat"),
                        hooks: {}
                    }), a.defineMIME("text/x-plsql", {
                        name: "sql",
                        client: e("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
                        keywords: e("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
                        builtin: e("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
                        operatorChars: /^[*+\-%<>!=~]/,
                        dateSQL: e("date time timestamp"),
                        support: e("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
                    }), a.defineMIME("text/x-hive", {
                        name: "sql",
                        keywords: e("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),
                        builtin: e("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),
                        atoms: e("false true null unknown"),
                        operatorChars: /^[*+\-%<>!=]/,
                        dateSQL: e("date timestamp"),
                        support: e("ODBCdotTable doubleQuote binaryNumber hexNumber")
                    }), a.defineMIME("text/x-pgsql", {
                        name: "sql",
                        client: e("source"),
                        keywords: e(f + "a abort abs absent absolute access according action ada add admin after aggregate all allocate also always analyse analyze any are array array_agg array_max_cardinality asensitive assertion assignment asymmetric at atomic attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli binary bit_length blob blocked bom both breadth c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain characteristics characters character_length character_set_catalog character_set_name character_set_schema char_length check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column columns column_name command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constraint constraints constraint_catalog constraint_name constraint_schema constructor contains content continue control conversion convert copy corr corresponding cost covar_pop covar_samp cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datetime_interval_code datetime_interval_precision day db deallocate dec declare default defaults deferrable deferred defined definer degree delimiter delimiters dense_rank depth deref derived describe descriptor deterministic diagnostics dictionary disable discard disconnect dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain dynamic dynamic_function dynamic_function_code each element else empty enable encoding encrypted end end-exec end_frame end_partition enforced enum equals escape event every except exception exclude excluding exclusive exec execute exists exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreign fortran forward found frame_row free freeze fs full function functions fusion g general generated get global go goto grant granted greatest grouping groups handler header hex hierarchy hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import including increment indent index indexes indicator inherit inherits initially inline inner inout input insensitive instance instantiable instead integrity intersect intersection invoker isnull isolation k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like_regex link listen ln load local localtime localtimestamp location locator lock locked logged lower m map mapping match matched materialized max maxvalue max_cardinality member merge message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized nothing notify notnull nowait nth_value ntile null nullable nullif nulls number object occurrences_regex octets octet_length of off offset oids old only open operator option options ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password percent percentile_cont percentile_disc percent_rank period permission placing plans pli policy portion position position_regex power precedes preceding prepare prepared preserve primary prior privileges procedural procedure program public quote range rank read reads reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns revoke right role rollback rollup routine routine_catalog routine_name routine_schema row rows row_count row_number rule savepoint scale schema schema_name scope scope_catalog scope_name scope_schema scroll search second section security selective self sensitive sequence sequences serializable server server_name session session_user setof sets share show similar simple size skip snapshot some source space specific specifictype specific_name sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset substring substring_regex succeeds sum symmetric sysid system system_time system_user t tables tablesample tablespace table_name temp template temporary then ties timezone_hour timezone_minute to token top_level_count trailing transaction transactions_committed transactions_rolled_back transaction_active transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted unique unknown unlink unlisten unlogged unnamed unnest until untyped upper uri usage user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of varbinary variadic var_pop var_samp verbose version versioning view views volatile when whenever whitespace width_bucket window within work wrapper write xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes loop repeat"),
                        builtin: e("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
                        atoms: e("false true null unknown"),
                        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                        dateSQL: e("date time timestamp"),
                        support: e("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
                    }), a.defineMIME("text/x-gql", {
                        name: "sql",
                        keywords: e("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
                        atoms: e("false true"),
                        builtin: e("blob datetime first key __key__ string integer double boolean null"),
                        operatorChars: /^[*+\-%<>!=]/
                    })
                }()
        })
    }, {
        "../../lib/codemirror": "codemirror"
    }],
    panel: [function (a, b, c) {
        ! function (d) {
            "object" == typeof c && "object" == typeof b ? d(a("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], d) : d(CodeMirror)
        }(function (a) {
            function b(a, b, c, d) {
                this.cm = a, this.node = b, this.options = c, this.height = d, this.cleared = !1
            }

            function c(a) {
                var b = a.getWrapperElement(),
                    c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle,
                    d = parseInt(c.height),
                    e = a.state.panels = {
                        setHeight: b.style.height,
                        heightLeft: d,
                        panels: 0,
                        wrapper: document.createElement("div")
                    };
                b.parentNode.insertBefore(e.wrapper, b);
                var f = a.hasFocus();
                e.wrapper.appendChild(b), f && a.focus(), a._setSize = a.setSize, null != d && (a.setSize = function (b, c) {
                    if (null == c) return this._setSize(b, c);
                    if (e.setHeight = c, "number" != typeof c) {
                        var f = /^(\d+\.?\d*)px$/.exec(c);
                        f ? c = Number(f[1]) : (e.wrapper.style.height = c, c = e.wrapper.offsetHeight, e.wrapper.style.height = "")
                    }
                    a._setSize(b, e.heightLeft += c - d), d = c
                })
            }

            function d(a) {
                var b = a.state.panels;
                a.state.panels = null;
                var c = a.getWrapperElement();
                b.wrapper.parentNode.replaceChild(c, b.wrapper), c.style.height = b.setHeight, a.setSize = a._setSize, a.setSize()
            }
            a.defineExtension("addPanel", function (a, d) {
                d = d || {}, this.state.panels || c(this);
                var e = this.state.panels,
                    f = e.wrapper,
                    g = this.getWrapperElement();
                d.after instanceof b && !d.after.cleared ? f.insertBefore(a, d.before.node.nextSibling) : d.before instanceof b && !d.before.cleared ? f.insertBefore(a, d.before.node) : d.replace instanceof b && !d.replace.cleared ? (f.insertBefore(a, d.replace.node), d.replace.clear()) : "bottom" == d.position ? f.appendChild(a) : "before-bottom" == d.position ? f.insertBefore(a, g.nextSibling) : "after-top" == d.position ? f.insertBefore(a, g) : f.insertBefore(a, f.firstChild);
                var h = d && d.height || a.offsetHeight;
                return this._setSize(null, e.heightLeft -= h), e.panels++ , new b(this, a, d, h)
            }), b.prototype.clear = function () {
                if (!this.cleared) {
                    this.cleared = !0;
                    var a = this.cm.state.panels;
                    this.cm._setSize(null, a.heightLeft += this.height), a.wrapper.removeChild(this.node), 0 == --a.panels && d(this.cm)
                }
            }, b.prototype.changed = function (a) {
                var b = null == a ? this.node.offsetHeight : a,
                    c = this.cm.state.panels;
                this.cm._setSize(null, c.height += b - this.height), this.height = b
            }
        })
    }, {
        "../../lib/codemirror": "codemirror"
    }],
    "sqlite-parser": [function (a, b, c) {
        "use strict";

        function sqliteParser(a, b, c) {
            var f = (0, e.Tracer)();
            2 === arguments.length && "function" == typeof b && (c = b, b = {});
            var g = "function" == typeof c,
                h = {
                    tracer: f,
                    startRule: "start"
                };
            if (b && b.streaming && (h.startRule = "start_streaming"), g) setTimeout(function () {
                var b = void 0,
                    e = void 0;
                try {
                    b = (0, d.parse)(a, h)
                } catch (a) {
                    e = a instanceof d.SyntaxError ? f.smartError(a) : a
                }
                c(e, b)
            }, 0);
            else try {
                return (0, d.parse)(a, h)
            } catch (a) {
                throw a instanceof d.SyntaxError ? f.smartError(a) : a
            }
        }
        Object.defineProperty(c, "__esModule", {
            value: !0
        }), c.default = sqliteParser;
        var d = a("./parser"),
            e = a("./tracer"),
            f = a("./streaming");
        sqliteParser.createParser = function () {
            return new f.SqliteParserTransform
        }, sqliteParser.createStitcher = function () {
            return new f.SingleNodeTransform
        }, sqliteParser.NAME = "sqlite-parser", sqliteParser.VERSION = "1.0.0", b.exports = c.default
    }, {
        "./parser": 1,
        "./streaming": "./streaming",
        "./tracer": 2
    }]
}, {}, [3]);