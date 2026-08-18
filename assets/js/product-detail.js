// ===== Image Gallery =====
function changeImage(thumb) {
  const mainImg = document.getElementById('mainImg');
  mainImg.src = thumb.src.replace('w=200', 'w=800');
  
  // Update active state
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ===== Quantity Control =====
function changeQty(delta) {
  const input = document.getElementById('qty');
  let value = parseInt(input.value) || 1;
  value = Math.max(1, Math.min(99, value + delta));
  input.value = value;
}

// ===== Color / Size Selection =====
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.querySelectorAll('.size-btn:not(.disabled)').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== Tabs =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;

    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update contents
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });
});

// ===== Wishlist Toggle =====
document.querySelector('.btn-wishlist')?.addEventListener('click', function() {
  const icon = this.querySelector('i');
  if (icon.classList.contains('far')) {
    icon.classList.replace('far', 'fas');
    icon.style.color = '#ff5a5f';
    this.style.borderColor = '#ff5a5f';
  } else {
    icon.classList.replace('fas', 'far');
    icon.style.color = '';
    this.style.borderColor = '';
  }
});

// ===== Cart / Buy Buttons (demo) =====
document.querySelector('.btn-cart')?.addEventListener('click', () => {
  alert('장바구니에 상품이 추가되었습니다! (데모)');
});

document.querySelector('.btn-buy')?.addEventListener('click', () => {
  alert('바로구매 페이지로 이동합니다! (데모)');
});

console.log('🛒 Product Detail Page loaded successfully');
