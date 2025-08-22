/**
 * 公司列表页面脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化当前日期显示
    initCurrentDate();
    
    // 初始化表格排序功能
    initTableSort();
    
    // 初始化筛选功能
    initFilters();
    
    // 初始化搜索功能
    initSearch();
    
    // 初始化分页功能
    initPagination();
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
 * 初始化表格排序功能
 */
function initTableSort() {
    const sortableHeaders = document.querySelectorAll('.sortable');
    
    sortableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const table = this.closest('table');
            const index = Array.from(this.parentNode.children).indexOf(this);
            const isAsc = this.classList.contains('sort-asc');
            
            // 移除所有排序类
            sortableHeaders.forEach(h => {
                h.classList.remove('sort-asc', 'sort-desc');
                h.querySelector('.sort-icon').innerHTML = '<i class="fa fa-sort"></i>';
            });
            
            // 设置新的排序方向
            if (isAsc) {
                this.classList.add('sort-desc');
                this.querySelector('.sort-icon').innerHTML = '<i class="fa fa-sort-desc"></i>';
            } else {
                this.classList.add('sort-asc');
                this.querySelector('.sort-icon').innerHTML = '<i class="fa fa-sort-asc"></i>';
            }
            
            // 排序表格行
            sortTable(table, index, !isAsc);
        });
    });
}

/**
 * 排序表格
 * @param {HTMLElement} table - 表格元素
 * @param {number} column - 列索引
 * @param {boolean} asc - 是否升序
 */
function sortTable(table, column, asc) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    // 排序行
    const sortedRows = rows.sort((a, b) => {
        const aValue = a.cells[column].textContent.trim();
        const bValue = b.cells[column].textContent.trim();
        
        // 检查是否为日期
        if (isDate(aValue) && isDate(bValue)) {
            return asc ? new Date(aValue) - new Date(bValue) : new Date(bValue) - new Date(aValue);
        }
        
        // 检查是否为数字
        if (!isNaN(aValue) && !isNaN(bValue)) {
            return asc ? aValue - bValue : bValue - aValue;
        }
        
        // 字符串比较
        return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    
    // 重新添加排序后的行
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    sortedRows.forEach(row => tbody.appendChild(row));
}

/**
 * 检查字符串是否为日期
 * @param {string} value - 要检查的字符串
 * @returns {boolean} - 是否为日期
 */
function isDate(value) {
    const date = new Date(value);
    return !isNaN(date.getTime());
}

/**
 * 初始化筛选功能
 */
function initFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', applyFilters);
    });
    
    // 清除筛选按钮
    const clearFilterBtn = document.getElementById('clear-filter');
    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', function() {
            filterSelects.forEach(select => {
                select.value = '';
            });
            applyFilters();
        });
    }
}

/**
 * 应用筛选条件
 */
function applyFilters() {
    const industryFilter = document.getElementById('industry-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    const ownerFilter = document.getElementById('owner-filter').value;
    
    const rows = document.querySelectorAll('.company-row');
    
    rows.forEach(row => {
        const industry = row.getAttribute('data-industry');
        const size = row.getAttribute('data-size');
        const owner = row.getAttribute('data-owner');
        
        const industryMatch = !industryFilter || industry === industryFilter;
        const sizeMatch = !sizeFilter || size === sizeFilter;
        const ownerMatch = !ownerFilter || owner === ownerFilter;
        
        if (industryMatch && sizeMatch && ownerMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    
    updatePagination();
}

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('company-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('.company-row');
            
            rows.forEach(row => {
                const companyName = row.querySelector('.company-name').textContent.toLowerCase();
                const industry = row.getAttribute('data-industry').toLowerCase();
                const owner = row.getAttribute('data-owner').toLowerCase();
                
                if (companyName.includes(searchTerm) || industry.includes(searchTerm) || owner.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
            updatePagination();
        });
    }
}

/**
 * 初始化分页功能
 */
function initPagination() {
    const itemsPerPage = 10;
    const paginationContainer = document.getElementById('pagination');
    const rows = document.querySelectorAll('.company-row');
    const totalPages = Math.ceil(rows.length / itemsPerPage);
    
    let currentPage = 1;
    
    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.classList.remove('hidden');
            } else {
                row.classList.add('hidden');
            }
        });
        
        // 更新分页显示
        updatePaginationUI(page, totalPages);
    }
    
    function updatePaginationUI(page, totalPages) {
        if (!paginationContainer) return;
        
        paginationContainer.innerHTML = '';
        
        // 上一页按钮
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&lt;';
        prevBtn.className = 'pagination-btn';
        prevBtn.disabled = page === 1;
        prevBtn.addEventListener('click', () => showPage(page - 1));
        paginationContainer.appendChild(prevBtn);
        
        // 页码按钮
        const maxVisiblePages = 5;
        let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.className = 'pagination-btn' + (i === page ? ' active' : '');
            pageBtn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageBtn);
        }
        
        // 下一页按钮
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&gt;';
        nextBtn.className = 'pagination-btn';
        nextBtn.disabled = page === totalPages;
        nextBtn.addEventListener('click', () => showPage(page + 1));
        paginationContainer.appendChild(nextBtn);
        
        // 显示信息
        const infoSpan = document.createElement('span');
        infoSpan.className = 'pagination-info';
        infoSpan.textContent = `显示 ${(page - 1) * itemsPerPage + 1}-${Math.min(page * itemsPerPage, rows.length)} 条，共 ${rows.length} 条`;
        paginationContainer.appendChild(infoSpan);
    }
    
    // 初始显示第一页
    showPage(currentPage);
}

/**
 * 更新分页
 */
function updatePagination() {
    // 重新初始化分页
    initPagination();
}