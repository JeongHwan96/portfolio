$(document).ready(function(){

		$("#ListAboutMe").click(function(){

			var offset = $('#ListAboutMe').offset();

			$('#ListAboutMe').addClass('press');

			$('#ListQnA').removeClass('press');
			$('#ListBlog').removeClass('press');
			$('#ListContact').removeClass('press');
			$('#Listproject').removeClass('press');

		}) ;

	});
	
	$(document).ready(function(){

		$("#ListQnA").click(function(){

			var offset = $('#ListEducation').offset();

			$('#ListQnA').addClass('press');

			$('#ListAboutMe').removeClass('press');
			$('#ListBlog').removeClass('press');
			$('#ListContact').removeClass('press');
			$('#Listproject').removeClass('press');
		}) ;

	});
	
	$(document).ready(function(){

		$("#ListBlog").click(function(){

			var offset = $('#ListBlog').offset();

			$('#ListBlog').addClass('press');
			
			$('#ListAboutMe').removeClass('press');
			$('#ListQnA').removeClass('press');
			$('#ListContact').removeClass('press');
			$('#Listproject').removeClass('press');

		}) ;

	});
	


	$(document).ready(function(){

		$("#Listproject").click(function(){

			var offset = $('#Listproject').offset();

			$('#Listproject').addClass('press');
			
			$('#ListAboutMe').removeClass('press');
			$('#ListQnA').removeClass('press');
			$('#ListBlog').removeClass('press');

		}) ;

	});

	

	
	//	첫번째 질문
	$(document).ready(function(){

		$(".FirstQuestion").click(function(){

			var Foffset = $('.FisrtAnser').offset();
			var Soffset = $('.SecondQuestion').offset();
			var Toffset = $('.ThirdQuestion').offset();
			var Foroffset = $('.FourthQuestion').offset();
			

			$('.FisrtAnser').toggleClass('show');
			$('.SecondQuestion').toggleClass('height');
			$('.ThirdQuestion').toggleClass('height2');
			$('.FourthQuestion').toggleClass('height6');
			
			$('.ThirdQuestion').removeClass('height3');
			$('.FourthQuestion').removeClass('height4');
			$('.FourthQuestion').removeClass('height5');
			$('.SecondAnser').removeClass('show');
			$('.ThirdAnser ').removeClass('show');
			$('.FourthAnser').removeClass('show');
		
			
		}) ;

	});
	
	//	두번째 질문
	$(document).ready(function(){

		$(".SecondQuestion").click(function(){

			var Soffset = $('.SecondAnser').offset();
			var Foffset = $('.FisrtAnser').offset();
			var Foffset = $('.ThirdQuestion').offset();
			var Foroffset = $('.FourthQuestion').offset();

			$('.SecondAnser').toggleClass('show');
			$('.ThirdQuestion').toggleClass('height3');
			$('.FourthQuestion').toggleClass('height5');
			
			$('.FisrtAnser').removeClass('show');
			$('.ThirdAnser ').removeClass('show');
			$('.FourthAnser').removeClass('show');
			$('.SecondQuestion').removeClass('height');
			$('.ThirdQuestion').removeClass('height2');
			$('.FourthQuestion').removeClass('height4');
			$('.FourthQuestion').removeClass('height6');
			

		}) ;

	});
	
	//	세번째 질문
	$(document).ready(function(){

		$(".ThirdQuestion").click(function(){

			var Soffset = $('.SecondAnser').offset();
			var Foffset = $('.FisrtAnser').offset();
			var Foffset = $('.ThirdQuestion').offset();
			var Foroffset = $('.FourthQuestion').offset();

			$('.ThirdAnser').toggleClass('show');
			$('.FourthQuestion').toggleClass('height4');
			
			$('.FisrtAnser').removeClass('show');
			$('.SecondAnser').removeClass('show');
			$('.FourthAnser').removeClass('show');
			$('.SecondQuestion').removeClass('height');
			$('.ThirdQuestion').removeClass('height2');
			$('.ThirdQuestion').removeClass('height3');
			$('.FourthQuestion').removeClass('height5');
			$('.FourthQuestion').removeClass('height6');

		}) ;
		
		// 네번째 질문
		
		$(".FourthQuestion").click(function(){
			
			var Foroffset = $('.FourthQuestion').offset();
			var Toffset = $('.ThirdQuestion').offset();
			var Foffset = $('.FisrtAnser').offset();
			var Soffset = $('.SecondAnser').offset();

			$('.FourthAnser').toggleClass('show');
			
			$('.FisrtAnser').removeClass('show');
			$('.SecondAnser').removeClass('show');
			$('.ThirdAnser').removeClass('show');
			$('.SecondQuestion').removeClass('height');
			$('.ThirdQuestion').removeClass('height2');
			$('.ThirdQuestion').removeClass('height3');
			$('.FourthQuestion').removeClass('height4');
			$('.FourthQuestion').removeClass('height5');
			$('.FourthQuestion').removeClass('height6');
			
		

		}) ;

	});

	
