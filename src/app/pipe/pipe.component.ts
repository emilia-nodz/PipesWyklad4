import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  studentList = [];
  studentList1 = ["Anna"];
  studentList2 = ["Barbara", "Maria"];
  studentList3 = ["Marcin", "Kamil", "Adrian", "Dominik", "Krzysztof", "Sebastian"];

  countStudents: {[k: string]: string} = {
    '=0': 'zero (0) studentów.',
    '=1': 'jeden (1) student.',
    'other': '# studentów.',
  };
}
