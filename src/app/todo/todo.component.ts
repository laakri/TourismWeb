import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  slidescamping = [
    { img: '../../assets/camping1.jpg' },
    { img: '../../assets/camping2.jpg' },
    { img: '../../assets/camping3.jpg' },
    { img: '../../assets/camping4.jpg' },
    { img: '../../assets/camping5.jpg' },
  ];
  slidesskiing = [
    { img: '../../assets/skiing5.jpg' },
    { img: '../../assets/skiing1.jpg' },
    { img: '../../assets/skiing2.jpg' },
    { img: '../../assets/skiing3.jpg' },
    { img: '../../assets/skiing4.jpg' },
  ];
  slidesbiking = [
    { img: '../../assets/biking5.jpg' },
    { img: '../../assets/biking1.jpg' },
    { img: '../../assets/biking2.jpg' },
    { img: '../../assets/biking3.jpg' },
    { img: '../../assets/biking4.jpg' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 1 };
}
