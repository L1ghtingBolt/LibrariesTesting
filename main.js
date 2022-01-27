import './style.css';
import {fakefaker} from 'fakefakerjs';
import { $ } from 'spiralquery';

console.log(fakefaker)
console.log('Name:')
console.log(fakefaker.name());
console.log('SurName:')
console.log(fakefaker.surName());
console.log('CompleteName:')
console.log(fakefaker.completeName());
console.log('Email:')
console.log(fakefaker.email());
console.log($('h1'));

$('h1').ready(() => {
  console.log('H1 is ready!');
  $('h1').html('This is...')
  setTimeout(() => $('h1').css('font-size', '6em').addClass('active'), 0)
  setTimeout(()=> $('h1').html('SpiralQuery'), 2000);
  setTimeout(()=> $('h1').html('+'), 4000);
  setTimeout(()=> $('h1').html('Fakefaker.JS!'), 6000);
  setTimeout(()=> $('h1').css('opacity', 0), 8000);
  setTimeout(setInterval(()=> $('h1').css('opacity', $('h1').css('opacity') == 0 ? 1 : 0), 2000), 10000);
})

$('button').ready(() => {
  $('button').on('click', 'button', () => {
    let thename = fakefaker.name();
    let surname = fakefaker.surName()
    $('#name').value(thename)
    $('#email').value(fakefaker.email(thename, surname))
    $('#surname').value(surname)
    $('#password').value(fakefaker.password())
  })
})