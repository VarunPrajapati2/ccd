import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').append('<div id="backToTop" class="btn btn-lg"><span class="glyphicon glyphicon-chevron-up"></span></div>');
      $(window).scroll(function () {
  		if ($(this).scrollTop() <= 200) {
  			$('#backToTop').fadeOut();
  		} else {
  			$('#backToTop').fadeIn();
  		}
	  }); 
    $('#backToTop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

 }
}
