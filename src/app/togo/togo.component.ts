import { Component } from '@angular/core';

@Component({
  selector: 'app-togo',
  templateUrl: './togo.component.html',
  styleUrls: ['./togo.component.css'],
})
export class TogoComponent {
  hotels = [
    {
      img: 'https://content.r9cdn.net/rimg/himg/c8/ab/7e/expediav2-203819-5cb340-879926.jpg?width=452&height=400&xhint=480&yhint=333&crop=true&watermarkheight=28&watermarkpadding=10',
      name: 'La Cigale Tabarka Hôtel Spa & Golf',
      stars: 5,
      prix: '133 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/47/4c/a0/expediav2-162221-22bc32-518514.jpg?width=226&height=200&xhint=540&yhint=330&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Dar Ismail Tabarka',
      stars: 4,
      prix: '45 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/d4/08/5d/expediav2-19384983-ae2a3e84_z-979644.jpg?width=226&height=200&xhint=540&yhint=333&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Thabraca Thalasso & Diving',
      stars: 5,
      prix: '85 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/9f/09/7c/expediav2-2391783-58d71d-730810.jpg?width=226&height=200&xhint=520&yhint=333&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Marina Prestige Tabarka ',
      stars: 3,
      prix: '37 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/2c/fe/3d/expediav2-350809-59f067-657112.jpg?width=226&height=200&xhint=440&yhint=312&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'El Mouradi Hammam Bourguiba',
      stars: 5,
      prix: '62 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/88/c8/e4/agoda-491456-21053526-381617.jpg?width=226&height=200&xhint=1023&yhint=798&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Hotel Residence Mehari Tabarka ',
      stars: 4,
      prix: '41 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/c8/ab/7e/expediav2-203819-5cb340-879926.jpg?width=452&height=400&xhint=480&yhint=333&crop=true&watermarkheight=28&watermarkpadding=10',
      name: 'La Cigale Tabarka Hôtel Spa & Golf',
      stars: 5,
      prix: '133 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/47/4c/a0/expediav2-162221-22bc32-518514.jpg?width=226&height=200&xhint=540&yhint=330&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Dar Ismail Tabarka',
      stars: 3,
      prix: '45 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/d4/08/5d/expediav2-19384983-ae2a3e84_z-979644.jpg?width=226&height=200&xhint=540&yhint=333&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Thabraca Thalasso & Diving',
      stars: 5,
      prix: '85 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/9f/09/7c/expediav2-2391783-58d71d-730810.jpg?width=226&height=200&xhint=520&yhint=333&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Marina Prestige Tabarka ',
      stars: 3,
      prix: '37 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/2c/fe/3d/expediav2-350809-59f067-657112.jpg?width=226&height=200&xhint=440&yhint=312&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'El Mouradi Hammam Bourguiba',
      stars: 4,
      prix: '62 €',
    },
    {
      img: 'https://content.r9cdn.net/rimg/himg/88/c8/e4/agoda-491456-21053526-381617.jpg?width=226&height=200&xhint=1023&yhint=798&crop=true&watermarkheight=14&watermarkpadding=5',
      name: 'Hotel Residence Mehari Tabarka ',
      stars: 3,
      prix: '41 €',
    },
  ];
}
