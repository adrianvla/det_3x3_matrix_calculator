$('.calc').on('click', function(){
    console.log(1);
    var r = (Number($('.1 > input').val())*Number($('.5 > input').val())*Number($('.9 > input').val()))+(Number($('.4 > input').val())*Number($('.8 > input').val())*Number($('.3 > input').val()))+(Number($('.7 > input').val())*Number($('.2 > input').val())*Number($('.6 > input').val()))-(Number($('.7 > input').val())*Number($('.5 > input').val())*Number($('.3 > input').val()))-(Number($('.1 > input').val())*Number($('.8 > input').val())*Number($('.6 > input').val()))-(Number($('.4 > input').val())*Number($('.2 > input').val())*Number($('.9 > input').val()));

    $('.j').text(r);
});