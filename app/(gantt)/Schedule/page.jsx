'use client'
import React, { useEffect } from 'react';
import Gantt from 'frappe-gantt';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import './styles.css';
import AddNewTasks from '@/components/AddNewTasks';

const Schedule = () => {

   const [position, setPosition] = React.useState("bottom")


  useEffect(() => {
    const tasks = [
      {
        id: 'Task 1',
        name: 'Buy hosting',
        start: '2022-01-22',
        end: '2022-01-23',
        progress: 100,
      },
      {
        id: 'Task 2',
        name: 'Draw wireframes',
        start: '2022-01-23',
        end: '2022-01-25',
        progress: 100,
      },
      {
        id: 'Task 3',
        name: 'Visual Design',
        start: '2022-01-25',
        end: '2022-01-27',
        progress: 20,
        dependencies: 'Task 2',
      },
      {
        id: 'Task 4',
        name: 'Build frontend',
        start: '2022-02-01',
        end: '2022-02-03',
        progress: 0,
        dependencies: 'Task 3',
      },
      {
        id: 'Task 5',
        name: 'Build backend',
        start: '2022-02-03',
        end: '2022-02-07',
        progress: 0,
      },
      {
        id: 'Task 6',
        name: 'Deploy Website',
        start: '2022-02-07',
        end: '2022-02-09',
        progress: 0,
        dependencies: 'Task 4, Task 5',
      },
    ];

    
let ganttChart = new Gantt("#gantt", tasks, {  
    on_view_change: function() {
        document.getElementById("current-timescale").innerText = 'Week';
    },
    custom_popup_html: function(task) {
        return `
          <div class="details-container">
            <h5>${task.name}</h5>
            <p>Task started on: ${task._start.getDate()}</p>
            <p>Expected to finish by ${task._start.getDate()}</p>
            <p>${task.progress}% completed!</p>
          </div>
        `;
}
});

   document.querySelector(".chart-controls #day-btn").addEventListener("click", () => {
    ganttChart.change_view_mode("Day");
})
document.querySelector(".chart-controls #week-btn").addEventListener("click", () => {
    ganttChart.change_view_mode("Week");
})
document.querySelector(".chart-controls #month-btn").addEventListener("click", () => {
    ganttChart.change_view_mode("Month");
})

    // You might want to update the chart when the tasks change
    // ganttChart.refresh(tasks);
  }, []); // Empty dependency array means this effect runs once after the initial render

   

  return (
    <div className=''>
      <section>
          <AddNewTasks/>
      </section>


      {/* day week month change  */}
      <div className="chart-controls">

 <div className="button-cont">
        

        </div>
       
          <button className=' hover:bg-zinc-800 rounded-lg py-1 px-2 gap-x-2 ' id="day-btn">Day</button>
          <button className=' hover:bg-zinc-800 rounded-lg py-1 px-2 gap-x-2 '  id="week-btn">Week</button>
          <button className=' hover:bg-zinc-800 rounded-lg py-1 px-2 gap-x-2 ' id="month-btn">Month</button>
        
      </div>

{/* gantt chartt harida  */}
      <main>
        <p className="chart-label">
        Timescale: <span id="current-timescale">Day</span>
      </p>

      <div>
        <svg id="gantt"></svg>
      </div>
      
      </main>
    </div>
  );
};

export default Schedule;
