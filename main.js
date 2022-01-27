import './style.css';
import 'spiralcss'
import {fakefaker} from 'fakefakerjs';
import { $ } from 'spiralquery';


const title = $('h1');

title.ready(() => {
  console.log('H1 is ready!');
  title.html('This is...')
  setTimeout(()=> title.html('SpiralQuery'), 2000);
  setTimeout(()=> title.html('+'), 4000);
  setTimeout(()=> title.html('Fakefaker.JS!'), 6000);
  setTimeout(()=> title.css('opacity', 0), 8000);
  setTimeout(() => setInterval(()=> title.css('opacity', title.css('opacity') == 0 ? 1 : 0), 1000), 10000);
})

$('button').ready(() => {
  $('button').on('click', () => {
    let thename = fakefaker.name();
    let surname = fakefaker.surName()
    $('#name').value(thename)
    $('#email').value(fakefaker.email(thename, surname))
    $('#surname').value(surname)
    $('#password').value(fakefaker.password())
    $('#address').value(fakefaker.address())
  })
})