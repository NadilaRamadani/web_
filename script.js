// ============================================
// JavaScript untuk Website Ramadhan
// Materi: DOM Manipulation, Events, Modal
// ============================================

// ========== MODAL GAMBAR (DOM Manipulation) ==========
function showImageModal(imgElement, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImg.src = imgElement.src;
    modalCaption.innerHTML = caption;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ========== MODAL VIDEO ==========
function showVideoModal(videoUrl, title) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const modalTitle = document.getElementById('videoModalTitle');
    
    iframe.src = videoUrl + '?autoplay=1';
    modalTitle.innerHTML = '<i class="fas fa-video"></i> ' + title;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    iframe.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ========== FILTER GALERI (Event Handling) ==========
function filterGallery(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick')?.includes(category)) {
            btn.classList.add('active');
        }
    });
    
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

// ========== ANIMASI SCROLL (Scroll Event) ==========
function animateOnScroll() {
    const elements = document.querySelectorAll('.gallery-card, .video-card, .kontak-card, .story-card, .profile-card, .about-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (position < screenPosition - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ========== DOMContentLoaded Event ==========
document.addEventListener('DOMContentLoaded', function() {
    // Set initial style untuk animasi scroll
    const animatedElements = document.querySelectorAll('.gallery-card, .video-card, .kontak-card, .story-card, .profile-card, .about-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
    
    // Event listener untuk scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Set active nav berdasarkan halaman
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ========== TUTUP MODAL DENGAN TOMBOL ESC (Keyboard Event) ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeVideoModal();
    }
});

// ========== FORM KONTAK (Form Submit Event) ==========
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;
            
            if (name && email && message) {
                alert(`✨ Terima kasih ${name}! ✨\n\nPesan Anda telah terkirim.\n\n📧 Email: ${email}\n💬 Pesan: ${message}\n\nIns