$('#li').click(function(){
	alert('clicked')
});

$('#btn').click(function(){
	console.log($('#h1').text());
	$('#h1').text('Testing text');
	$('#h1').append('Extra text');

});

$('#btn2').on('click',function(){
	console.log('Second button is clicked');
});
