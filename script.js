document.addEventListener('DOMContentLoaded', function() {
    // 스크롤시 네비게이션 바 스타일 변경
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
    
    // 네비게이션 스크롤 이벤트
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // 전문분야 카드 호버 효과 강화
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--primary-light)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--white)';
        });
    });
    
    // 이미지 플레이스홀더 클릭 시 이미지 업로드 안내
    const imagePlaceholder = document.querySelector('.image-placeholder');
    
    if (imagePlaceholder) {
        imagePlaceholder.addEventListener('click', function() {
            alert('여기에 프로필 이미지를 추가할 수 있습니다.');
        });
    }
    
    // 페이지 로드 애니메이션
    document.body.classList.add('loaded');
});

// CSS 클래스 추가 (styles.css에 해당 스타일 추가 필요)
document.head.insertAdjacentHTML('beforeend', `
<style>
    body {
        opacity: 0;
        transition: opacity 1s;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .nav-scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    
    .expertise-card {
        transition: all 0.3s ease;
    }
</style>
`); 