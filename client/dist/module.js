(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var Habit = function Habit() {

  var name = "Habit name";
  var difficulty = 1;
  var done = [];

  return {};
};

exports.Habit = Habit;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Habit = exports.HabitList = undefined;

var _habit = require('./habit');

var HabitList = function HabitList(element) {

  var dom = $(element);
  var habits = [];

  function addHabit(habit) {

    var out = '   <li class="habit">\n                        <h3 class=\'habit-name\' data-tooltip="repetition of a mental experience. Habitual behavior often goes unnoticed in persons exhibiting it, because a person does not need to engage in self-analysis when undertaking routine tasks. Habits are &#13;&#10; &#13;&#10;  Difficylty: Hard"> Habit name </h3>\n                        <p class=\'habit-info\'>  < </p>\n\n                        <input class="habit-difficulty" type="range" min="0" max="100" step="25" />\n\n                        <div class=\'habit-calendar\'>\n                            <div class="field" data-tooltip="Monday">\n                                <div class="habit-checkbox">\n                                    <input type="checkbox" value="None" id="roundedOne" name="check" />\n                                    <label for="roundedOne"></label>\n                                </div>\n                            </div>\n\n                            \n                        </div>\n\n                    </li>';

    habits.push({ obj: habit, dom: $(out).appendTo(dom) });
  }

  return {
    addHabit: addHabit

  };
};

exports.HabitList = HabitList;
exports.Habit = _habit.Habit;

},{"./habit":1}],3:[function(require,module,exports){
"use strict";

var _habitList = require("./habitList");

var habitList = new _habitList.HabitList(".habits-list");
habitList.addHabit(new _habitList.Habit());

//init all tooltips

},{"./habitList":2}]},{},[3]);
