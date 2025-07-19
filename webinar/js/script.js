async function submitForm() {
  const form = document.getElementById('registrationForm');
  const submitBtn = document.getElementById('submitBtn');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const responseMessage = document.getElementById('responseMessage');
  
  if (!form || !submitBtn || !loadingSpinner || !responseMessage) {
    console.error('Required form elements not found');
    showModal('Error', 'Form elements not found', 'error');
    return;
  }
  // Validate form first
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('border-red-500');
      isValid = false;
    } else {
      field.classList.remove('border-red-500');
    }
  });
  
  if (!isValid) {
    showModal('Validation Error', 'Please fill in all required fields', 'error');
    return;
  }
  try {
    // Disable form and show loading
    form.classList.add('submitting');
    submitBtn.disabled = true;
    loadingSpinner.classList.remove('hidden');
    responseMessage.classList.add('hidden');

    
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('countryCode').value + document.getElementById('phone').value,
      whatsapp: document.getElementById('whatsapp').value
    };


    console.log('Submitting form data:', formData);
    
    /* For testing purposes - simulate successful submission
    // Comment this section and uncomment the fetch call for production
    setTimeout(() => {
      // Hide form and show success modal
      form.classList.add('hidden');
      showModal('Registration Successful', 'Thank you for registering! We will contact you soon.', 'success');
      
      // Reset form state
      form.classList.remove('submitting');
      submitBtn.disabled = false;
      loadingSpinner.classList.add('hidden');
    }, 1500); // Simulate network delay
    
    return; // Stop execution here during testing
    */
    
    // Production API call
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success) {
      console.log('表单提交成功，准备显示成功模态框');
      // 隐藏表单
      form.classList.add('hidden');
      
      // 显示成功模态框
      showModal('Registration Successful', 'Thanks for your register, we will send you email soon!', 'success');
      
      // 确保模态框可见 - 使用requestAnimationFrame代替setTimeout，更适合处理UI更新
      requestAnimationFrame(() => {
        const modal = document.getElementById('responseModal');
        const modalContent = modal.querySelector('.modal-content');
        
        if (modal && modalContent) {
          console.log('确保模态框内容可见');
          modal.classList.remove('hidden');
          modalContent.classList.remove('scale-95', 'opacity-0');
          modalContent.classList.add('scale-100', 'opacity-100');
        }
      });
    } else {
      throw new Error(data.error || 'Registration failed');
    }
  } catch (error) {
    // Show error modal
    showModal('Registration Failed', error.message, 'error');
  } finally {
    // Reset form state in case the setTimeout approach isn't used
    if (!loadingSpinner.classList.contains('hidden')) {
      form.classList.remove('submitting');
      submitBtn.disabled = false;
      loadingSpinner.classList.add('hidden');
    }
  }
}

function showModal(title, message, type) {
  console.log('显示模态框:', { title, message, type });
  
  const modal = document.getElementById('responseModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  const modalIcon = document.getElementById('modalIcon');
  
  if (!modal || !modalTitle || !modalMessage || !modalIcon) {
    console.error('Modal elements not found');
    return;
  }
  
  // 设置模态框内容
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  
  // 确保内容可见
  modalTitle.style.display = 'block';
  modalMessage.style.display = 'block';
  
  // 设置模态框样式 - 同时移除hidden类
  modal.classList.remove('success', 'error', 'hidden');
  modal.classList.add(type);
  
  // 根据类型更新图标
  if (type === 'success') {
    modalIcon.classList.remove('text-red-500');
    modalIcon.classList.add('text-green-500');
    modalIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
  } else {
    modalIcon.classList.remove('text-green-500');
    modalIcon.classList.add('text-red-500');
    modalIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
  }
  
  // 确保图标可见 - 使用setAttribute一次性设置所有样式
  modalIcon.setAttribute('style', 'display: block !important; color: ' + 
    (type === 'success' ? '#10B981' : '#EF4444') + 
    ' !important; visibility: visible !important;');
  
  // 添加动画效果 - 使用requestAnimationFrame确保在下一帧渲染
  requestAnimationFrame(() => {
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
      modalContent.classList.remove('scale-95', 'opacity-0');
      modalContent.classList.add('scale-100', 'opacity-100');
    }
  });
}

function closeModal() {
  const modal = document.getElementById('responseModal');
  const modalContent = modal.querySelector('.modal-content');
  
  // Reset animation first
  if (modalContent) {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
  }
  
  // Hide modal with a slight delay to allow animation
  setTimeout(() => {
    modal.classList.add('hidden');
    
    // Reset form visibility when closing success modal
    if (modal.classList.contains('success')) {
      document.getElementById('registrationForm').classList.remove('hidden');
    }
  }, 200);
}

// For testing purposes - can be removed in production
// 测试函数已移除，使用showModal函数代替

// DOM content loaded event listener
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
  // No test button in production
});