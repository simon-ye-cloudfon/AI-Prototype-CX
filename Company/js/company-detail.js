/**
 * 公司详情页面脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化当前日期显示
    initCurrentDate();
    
    // 初始化标签页切换
    initTabs();
    
    // 初始化操作按钮事件
    initActionButtons();
});

/**
 * 初始化当前日期显示
 */
function initCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        dateElement.textContent = now.toLocaleDateString('zh-CN', options);
    }
}

/**
 * 初始化标签页切换
 */
function initTabs() {
    const tabItems = document.querySelectorAll('.tab-nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有活动状态
            tabItems.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // 设置当前标签为活动状态
            this.classList.add('active');
            
            // 显示对应的内容
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.remove('hidden');
        });
    });
}

/**
 * 初始化操作按钮事件
 */
function initActionButtons() {
    // 编辑公司按钮
    const editBtn = document.getElementById('edit-company-btn');
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            // 显示编辑模态框
            showEditModal();
        });
    }
    
    // 变更Owner按钮
    const changeOwnerBtn = document.getElementById('change-owner-btn');
    if (changeOwnerBtn) {
        changeOwnerBtn.addEventListener('click', function() {
            // 显示变更Owner模态框
            showChangeOwnerModal();
        });
    }
    
    // 关联联系人按钮
    const linkContactBtn = document.getElementById('link-contact-btn');
    if (linkContactBtn) {
        linkContactBtn.addEventListener('click', function() {
            // 显示关联联系人模态框
            showLinkContactModal();
        });
    }
    
    // 导出数据按钮
    const exportDataBtn = document.getElementById('export-data-btn');
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', function() {
            // 导出公司数据
            exportCompanyData();
        });
    }
}

/**
 * 显示编辑公司模态框
 */
function showEditModal() {
    // 这里是模拟功能，实际项目中应该实现真正的模态框
    alert('编辑公司信息功能将在这里实现');
}

/**
 * 显示变更Owner模态框
 */
function showChangeOwnerModal() {
    // 这里是模拟功能，实际项目中应该实现真正的模态框
    alert('变更Owner功能将在这里实现');
}

/**
 * 显示关联联系人模态框
 */
function showLinkContactModal() {
    // 这里是模拟功能，实际项目中应该实现真正的模态框
    alert('关联联系人功能将在这里实现');
}

/**
 * 导出公司数据
 */
function exportCompanyData() {
    // 这里是模拟功能，实际项目中应该实现真正的导出功能
    alert('导出公司数据功能将在这里实现');
}