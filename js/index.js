
//top버튼 누르면 맨위로 올라가기
$(".bartop").click(function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 },500); 
});

$(function () {
    var counted = false; // 숫자가 이미 증가했는지 확인하는 변수

    // 숫자를 증가시키는 함수
    function animateCounter($element, start, end, duration) {
        $({ Counter: start }).animate({ Counter: end }, {
            duration: duration,
            easing: 'swing', // 애니메이션 가속 설정
            step: function (now) {
                $element.text(Math.floor(now)); // 현재 값으로 텍스트 업데이트
            }
        });
    }

    // 스크롤 시 숫자 증가를 트리거
    $(window).on('scroll', function () {
        var content4Top = $('.content4').offset().top - window.innerHeight;

        // content4가 화면에 나타날 때
        if (!counted && $(window).scrollTop() > content4Top) {
            counted = true; // 숫자가 이미 증가했음을 표시
            animateCounter($('.countNum1'), 0, 50, 2000); // 0에서 50만까지 2초간 애니메이션
            animateCounter($('.countNum2'), 0, 300, 2000); // 0에서 300만까지 2초간 애니메이션
            animateCounter($('.countNum3'), 0, 54456, 2000); // 0에서 54,456까지 2초간 애니메이션
        }
    });
});


$(function() {
    $('.img-container').hover(
        function() {
            // 마우스를 올렸을 때 이미지 흐려지고 텍스트가 올라옴
            $(this).find('img').css('opacity', '0.5');
            $(this).find('.text-overlay').css('bottom', '30px');
        },
        function() {
            // 마우스가 떠났을 때 원래 상태로 복원
            $(this).find('img').css('opacity', '1');
            $(this).find('.text-overlay').css('bottom', '-100px');
        }
    );
});
