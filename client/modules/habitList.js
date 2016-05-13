
import {Habit} from './habit';

var habitTemplate = {
    
    getHeader: function(habit){
        return ` <li class="habit">
                   <h3 class='habit-name' data-tooltip="${habit.info} &#13;&#10; &#13;&#10;  Difficylty: Hard"> ${habit.name} </h3>
                   <div class='habit-calendar'>`;
    }
    
};


var HabitList = function (element) {

  var dom = $(element);
  var habits = [];
  
  function
  
  
  function addHabit(habit) {


                    
               //    habits.push({obj:habit, dom:$(out).appendTo(dom)});

  }

  return {
    addHabit: addHabit


  };

};


export {  HabitList, Habit };