/**
 * AI Copilot Tool Usage Report - JavaScript Logic
 */

/**
 * Global Configuration Constants
 * Centralized management of all UI and chart-related configurations
 */
const CONFIG = {
    // Chart colors
    colors: ['#165DFF', '#0FC6C2', '#00B42A', '#FF7D00', '#F53F3F'],
    
    // Tool icons
    icons: {
        'Expand': 'fa-text-height',
        'Rewrite': 'fa-refresh',
        'Professional Tone Rewrite': 'fa-user-tie',
        'Translate': 'fa-language',
        'Summarize': 'fa-list-alt',
        // Default icon
        'default': 'fa-tools'
    },
    
    // Color class names
    colorClasses: {
        'Expand': 'primary',
        'Rewrite': 'secondary',
        'Professional Tone Rewrite': 'warning',
        'Translate': 'danger',
        'Summarize': 'success',
        // Default color class
        'default': 'primary'
    },
    
    // Default chart configuration
    chart: {
        animation: true,
        animationDuration: 500,
        animationEasing: 'cubicOut',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            top: '5%',
            containLabel: true
        }
    },
    
    // Mini chart configuration
    miniChart: {
        height: 50,
        animation: false,
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    
    // Auto update interval (milliseconds)
    updateInterval: 60000
};

// Sample data
const toolData = {
    tools: ['Expand', 'Rewrite', 'Professional Tone Rewrite', 'Translate', 'Summarize'],
    channels: ['Webchat Workbench', 'Email'],
    timeTypes: {
        day: {
            labels: ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5'],
            data: [
                { name: 'Expand', values: [120, 150, 180, 200, 250] },
                { name: 'Rewrite', values: [80, 90, 110, 130, 150] },
                { name: 'Professional Tone Rewrite', values: [50, 60, 75, 85, 100] },
                { name: 'Translate', values: [30, 35, 40, 50, 60] },
                { name: 'Summarize', values: [70, 90, 110, 130, 150] }
            ],
            channelData: {
                'Webchat Workbench': [3, 3.2, 3.5, 3.8, 4],
                'Email': [2, 2.1, 2.3, 2.5, 2.8]
            }
        },
        week: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: [
                { name: 'Expand', values: [600, 750, 900, 1050] },
                { name: 'Rewrite', values: [400, 450, 550, 650] },
                { name: 'Professional Tone Rewrite', values: [250, 300, 350, 400] },
                { name: 'Translate', values: [150, 175, 200, 250] },
                { name: 'Summarize', values: [350, 450, 550, 650] }
            ],
            channelData: {
                'Webchat Workbench': [15, 18, 20, 22],
                'Email': [10, 11, 12, 13]
            }
        },
        month: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            data: [
                { name: 'Expand', values: [2500, 2800, 3000, 3200, 3500, 3800, 4000] },
                { name: 'Rewrite', values: [1800, 2000, 2200, 2400, 2600, 2800, 3000] },
                { name: 'Professional Tone Rewrite', values: [1000, 1100, 1200, 1300, 1400, 1500, 1600] },
                { name: 'Translate', values: [600, 700, 800, 900, 1000, 1100, 1200] },
                { name: 'Summarize', values: [1500, 1700, 1900, 2100, 2300, 2500, 2700] }
            ],
            channelData: {
                'Webchat Workbench': [25, 27, 29, 31, 33, 35, 37],
                'Email': [15, 16, 17, 18, 19, 20, 21]
            }
        }
    }
};

// Chart instances and state management
const chartState = {
    trendChart: null,
    isLoading: false,
    currentTimeType: 'week',
    chartType: 'line'
};

/**
 * Initialize charts and UI components
 */
function initCharts(retryCount = 0) {
    try {
        // Check if ECharts is loaded
        if (typeof echarts === 'undefined') {
            if (retryCount < 50) { // Maximum 50 retries (5 seconds)
                console.log(`ECharts library not loaded, retry ${retryCount + 1}...`);
                setTimeout(() => initCharts(retryCount + 1), 100);
                return;
            } else {
                console.error('ECharts library failed to load, please check network connection or CDN link');
                return;
            }
        }
        
        console.log('ECharts library loaded, version:', echarts.version);
        
        // Initialize trend chart
        const trendChartElement = document.getElementById('trend-chart');
        if (!trendChartElement) {
            console.error('Trend chart container does not exist');
            return;
        }
        
        // Ensure container has explicit width and height
        trendChartElement.style.width = '100%';
        trendChartElement.style.height = '400px';
        trendChartElement.style.display = 'block';
        trendChartElement.style.minHeight = '400px';
        
        // Wait for container rendering to complete
        setTimeout(() => {
            // Force set container styles
            trendChartElement.style.cssText = 'width: 100%; height: 400px; display: block; min-height: 400px; position: relative;';
            
            console.log('Chart container size:', trendChartElement.offsetWidth, 'x', trendChartElement.offsetHeight);
            
            // 检查容器尺寸是否有效
            if (trendChartElement.offsetWidth === 0 || trendChartElement.offsetHeight === 0) {
                console.error('图表容器尺寸无效，重新尝试设置');
                // 强制触发重排
                trendChartElement.style.display = 'none';
                trendChartElement.offsetHeight; // 触发重排
                trendChartElement.style.display = 'block';
                
                setTimeout(() => {
                    console.log('重新设置后的容器尺寸:', trendChartElement.offsetWidth, 'x', trendChartElement.offsetHeight);
                    initChartInstance();
                }, 100);
            } else {
                initChartInstance();
            }
            
            function initChartInstance() {
                // 销毁已存在的图表实例
                if (chartState.trendChart) {
                    chartState.trendChart.dispose();
                    chartState.trendChart = null;
                }
                
                // 初始化图表实例
                try {
                    chartState.trendChart = echarts.init(trendChartElement, null, {
                        width: trendChartElement.offsetWidth,
                        height: trendChartElement.offsetHeight
                    });
                    console.log('图表实例创建完成，尺寸:', trendChartElement.offsetWidth, 'x', trendChartElement.offsetHeight);
                } catch (error) {
                    console.error('创建图表实例失败:', error);
                    return;
                }
                
                // 设置初始图表类型
                const activeChartTypeBtn = document.querySelector('.chart-type-btn.active');
                if (activeChartTypeBtn) {
                    chartState.chartType = activeChartTypeBtn.textContent.includes('折线图') ? 'line' : 'bar';
                } else {
                    // 默认使用折线图
                    chartState.chartType = 'line';
                    // 如果没有活动按钮，将第一个按钮设为活动
                    const firstChartTypeBtn = document.querySelector('.chart-type-btn');
                    if (firstChartTypeBtn) {
                        firstChartTypeBtn.classList.add('active');
                        firstChartTypeBtn.classList.add('bg-primary/10');
                        firstChartTypeBtn.classList.add('text-primary');
                        firstChartTypeBtn.classList.remove('bg-gray-100');
                        firstChartTypeBtn.classList.remove('text-gray-600');
                    }
                }
                
                console.log('初始图表类型:', chartState.chartType);
                
                // 初始化迷你图表
                initMiniCharts();
                
                // 获取当前时间类型
                chartState.currentTimeType = document.getElementById('time-type').value;
                
                // 初始更新图表
                updateCharts();
                
                // 确保图表正确调整大小
                setTimeout(() => {
                    if (chartState.trendChart) {
                        chartState.trendChart.resize();
                    }
                }, 200);
                
                console.log('图表初始化完成');
            }
        }, 100);
        
    } catch (error) {
        console.error('图表初始化失败:', error);
    }
}

/**
 * 更新所有图表和数据显示
 */
function updateCharts() {
    try {
        updateTrendChart();
        updateToolsTable();
    } catch (error) {
        console.error('更新图表失败:', error);
    }
}

/**
 * 更新趋势图表
 * 根据当前选择的时间维度和图表类型更新趋势图表
 */
function updateTrendChart() {
    try {
        if (!chartState.trendChart) {
            console.error('趋势图表未初始化');
            return;
        }
        
        // 获取当前时间类型和数据
        const timeType = document.getElementById('time-type').value;
        chartState.currentTimeType = timeType;
        
        const currentData = toolData.timeTypes[timeType];
        if (!currentData) {
            console.error(`未找到时间类型 ${timeType} 的数据`);
            return;
        }
        
        // 检查数据是否有效
        if (!currentData.data || !currentData.labels || currentData.data.length === 0 || currentData.labels.length === 0) {
            console.error('数据无效或为空:', currentData);
            // 显示无数据的图表
            const emptyOption = {
                title: {
                    text: '暂无数据',
                    left: 'center',
                    top: 'center',
                    textStyle: {
                        color: '#999',
                        fontSize: 16
                    }
                },
                backgroundColor: '#fff'
            };
            chartState.trendChart.setOption(emptyOption, true);
            return;
        }
        
        // 如果chartState.chartType未设置，则从DOM获取当前图表类型
        if (!chartState.chartType) {
            const activeChartTypeBtn = document.querySelector('.chart-type-btn.active');
            if (!activeChartTypeBtn) {
                console.warn('未找到活动的图表类型按钮，默认使用折线图');
                chartState.chartType = 'line';
            } else {
                chartState.chartType = activeChartTypeBtn.textContent.includes('折线图') ? 'line' : 'bar';
            }
        }
        
        console.log('当前图表类型:', chartState.chartType, '时间类型:', timeType);
        
        // 确保图表容器有明确的宽度和高度
        const trendChartElement = document.getElementById('trend-chart');
        if (trendChartElement) {
            trendChartElement.style.width = '100%';
            trendChartElement.style.height = '400px';
        }
        
        // 构建系列数据
        const series = currentData.data.map((tool, index) => {
            const seriesItem = {
                name: tool.name,
                type: chartState.chartType,
                data: tool.values,
                emphasis: {
                    focus: 'series'
                },
                // 使用配置中的颜色
                color: CONFIG.colors[index % CONFIG.colors.length]
            };
            
            // 为折线图添加平滑属性和线条样式
            if (chartState.chartType === 'line') {
                seriesItem.smooth = true;
                seriesItem.lineStyle = {
                    width: 2
                };
                seriesItem.symbol = 'circle';
                seriesItem.symbolSize = 6;
            }
            
            // 为柱状图添加圆角和样式
            if (chartState.chartType === 'bar') {
                seriesItem.itemStyle = {
                    borderRadius: [3, 3, 0, 0]
                };
                seriesItem.barWidth = '60%';
            }
            
            return seriesItem;
        });
        
        console.log('生成的系列数据:', series.length, '个系列');
        
        // 图表配置
        const option = {
            color: CONFIG.colors,
            animation: true,
            animationDuration: 300,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e0e0e0',
                borderWidth: 1,
                textStyle: {
                    color: '#333'
                },
                axisPointer: {
                    type: chartState.chartType === 'line' ? 'cross' : 'shadow',
                    crossStyle: {
                        color: '#999'
                    }
                },
                formatter: function(params) {
                    let result = params[0].axisValue + '<br/>';
                    params.forEach(param => {
                        result += `<span style="color:${param.color};">●</span> ${param.seriesName}: ${param.value}<br/>`;
                    });
                    return result;
                }
            },
            legend: {
                data: toolData.tools,
                type: 'scroll',
                orient: 'horizontal',
                bottom: 10,
                left: 'center',
                textStyle: {
                    fontSize: 12
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '20%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: currentData.labels,
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e0e0e0'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#e0e0e0'
                    }
                },
                axisLabel: {
                    color: '#666',
                    fontSize: 11
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#f0f0f0',
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    color: '#666',
                    fontSize: 11,
                    formatter: function (value) {
                        if (value >= 1000) {
                            return (value / 1000) + 'k';
                        }
                        return value;
                    }
                }
            },
            series: series
        };
        
        // 应用图表配置前先清空之前的配置
        chartState.trendChart.clear();
        
        // 应用图表配置
        console.log('应用图表配置，系列数量:', series.length);
        chartState.trendChart.setOption(option, true);
        
        // 立即调整大小
        chartState.trendChart.resize();
        
        // 再次确保图表正确调整大小
        setTimeout(() => {
            if (chartState.trendChart) {
                console.log('延迟调整图表大小');
                chartState.trendChart.resize();
            }
        }, 100);
        
        console.log('图表更新完成');
    } catch (error) {
        console.error('更新趋势图表失败:', error);
    }
}

// 性能图表已移除
function updatePerformanceChart() {
    // 性能图表功能已移除
    console.log('性能图表功能已移除');
}

/**
 * 更新工具使用详情表格
 * 根据当前选择的时间维度更新工具使用数据和迷你图表
 */
function updateToolsTable() {
    try {
        // 获取当前时间类型和数据
        const timeType = document.getElementById('time-type').value;
        const currentData = toolData.timeTypes[timeType];
        const tableBody = document.getElementById('tools-table-body');
        
        if (!currentData) {
            console.error(`未找到时间类型 ${timeType} 的数据`);
            return;
        }
        
        if (!tableBody) {
            console.error('工具表格主体元素不存在');
            return;
        }
        
        // 清空表格
        tableBody.innerHTML = '';
        
        // 添加工具数据行
        toolData.tools.forEach((tool, index) => {
            const row = document.createElement('tr');
            
            // 计算总调用次数
            const totalCalls = currentData.data[index].values.reduce((sum, value) => sum + value, 0);
            
            // 计算人均调用次数
            const avgCalls = (totalCalls / 45).toFixed(1);
            
            row.innerHTML = `
                <td class="px-4 py-3">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded bg-${CONFIG.colorClasses[tool]}/10 flex items-center justify-center text-${CONFIG.colorClasses[tool]} mr-3">
                            <i class="fa ${CONFIG.icons[tool]}"></i>
                        </div>
                        <span>${tool}</span>
                    </div>
                </td>
                <td class="px-4 py-3">${totalCalls.toLocaleString()}</td>
                <td class="px-4 py-3">${avgCalls}</td>
                <td class="px-4 py-3">
                    <div class="w-20 h-6">
                        <canvas class="mini-chart" data-values="[${currentData.data[index].values.join(',')}]"></canvas>
                    </div>
                </td>

            `;
            
            tableBody.appendChild(row);
        });
        
        // 初始化迷你图表
        initMiniCharts();
    } catch (error) {
        console.error('Failed to update tools table:', error);
    }
}

/**
 * 初始化迷你图表
 * 为工具表格中的每个工具绘制迷你趋势图
 */
function initMiniCharts() {
    try {
        const miniCharts = document.querySelectorAll('.mini-chart');
        if (!miniCharts.length) {
            console.warn('未找到迷你图表元素');
            return;
        }
        
        // 使用requestAnimationFrame优化渲染性能
        requestAnimationFrame(() => {
            miniCharts.forEach((canvas, index) => {
                try {
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        console.warn('无法获取canvas上下文');
                        return;
                    }
                    
                    // 解析数据值
                    let values = [];
                    try {
                        values = JSON.parse(canvas.getAttribute('data-values'));
                        if (!Array.isArray(values) || values.length === 0) {
                            console.warn('迷你图表数据无效:', canvas.getAttribute('data-values'));
                            return;
                        }
                    } catch (parseError) {
                        console.error('解析迷你图表数据失败:', parseError);
                        return;
                    }
                    
                    // 设置画布尺寸
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                    
                    // 计算最大值和最小值
                    const max = Math.max(...values);
                    const min = Math.min(...values);
                    const range = max - min;
                    
                    // 设置绘图参数
                    const padding = 2;
                    const width = canvas.width;
                    const height = canvas.height - padding * 2;
                    const barWidth = width / values.length - 1;
                    
                    // 绘制迷你图表
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    
                    // 绘制折线图 - 使用配置中的颜色
                    const colorIndex = index % CONFIG.colors.length;
                    const strokeColor = CONFIG.colors[colorIndex];
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 1.5;
                    
                    values.forEach((value, index) => {
                        const x = index * (barWidth + 1);
                        const normalizedValue = range ? (value - min) / range : 0.5;
                        const y = height - (normalizedValue * height) + padding;
                        
                        if (index === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    });
                    
                    ctx.stroke();
                    
                    // 添加填充区域
                    ctx.lineTo(width, height + padding);
                    ctx.lineTo(0, height + padding);
                    ctx.closePath();
                    ctx.fillStyle = `${strokeColor}1A`; // 添加10%透明度
                    ctx.fill();
                } catch (canvasError) {
                    console.error('绘制迷你图表失败:', canvasError);
                }
            });
        });
    } catch (error) {
        console.error('初始化迷你图表失败:', error);
    }
}

/**
 * 设置当前日期和最后更新时间
 */
function setCurrentDate() {
    try {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = `${hours}:${minutes}`;
        
        const currentDateElement = document.getElementById('current-date');
        const lastUpdateTimeElement = document.getElementById('last-update-time');
        
        if (currentDateElement) {
            currentDateElement.textContent = formattedDate;
        }
        
        if (lastUpdateTimeElement) {
            lastUpdateTimeElement.textContent = formattedTime;
        }
        
        return { date: formattedDate, time: formattedTime };
    } catch (error) {
        console.error('设置当前日期失败:', error);
        return null;
    }
}

/**
 * 设置事件监听器
 * 使用事件委托模式减少事件监听器数量
 */
function setupEventListeners() {
    try {
        // 时间维度切换事件
        const timeTypeSelect = document.getElementById('time-type');
        if (timeTypeSelect) {
            timeTypeSelect.addEventListener('change', function() {
                updateCharts();
            });
        }
        
        // 图表类型按钮点击事件 - 使用事件委托
        const chartTypeContainer = document.querySelector('.chart-type-container');
        if (chartTypeContainer) {
            // 移除可能存在的旧事件监听器
            chartTypeContainer.removeEventListener('click', chartTypeClickHandler);
            
            // 添加新的事件监听器
            chartTypeContainer.addEventListener('click', chartTypeClickHandler);
            
            console.log('使用事件委托设置图表类型按钮事件:', chartTypeContainer);
        } else {
            // 如果找不到容器，则为每个按钮单独添加事件
            document.querySelectorAll('.chart-type-btn').forEach(btn => {
                // 移除可能存在的旧事件监听器
                btn.removeEventListener('click', individualChartTypeClickHandler);
                
                // 添加新的事件监听器
                btn.addEventListener('click', individualChartTypeClickHandler);
            });
            
            console.log('为每个图表类型按钮单独设置事件');
        }
        
        console.log('图表类型按钮事件设置完成');
        
        // 图表类型按钮点击事件处理函数 - 事件委托方式
        function chartTypeClickHandler(event) {
            const btn = event.target.closest('.chart-type-btn');
            if (btn) {
                handleChartTypeChange(btn);
            }
        }
        
        // 图表类型按钮点击事件处理函数 - 单独按钮方式
        function individualChartTypeClickHandler() {
            handleChartTypeChange(this);
        }
        
        // 处理图表类型变更的通用函数
        function handleChartTypeChange(buttonElement) {
            console.log('图表类型按钮点击:', buttonElement.textContent);
            
            // 更新按钮样式
            document.querySelectorAll('.chart-type-btn').forEach(b => {
                b.classList.remove('active', 'bg-primary/10', 'text-primary');
                b.classList.add('bg-gray-100', 'text-gray-600');
            });
            buttonElement.classList.add('active', 'bg-primary/10', 'text-primary');
            buttonElement.classList.remove('bg-gray-100', 'text-gray-600');
            
            // 更新图表类型
            const newChartType = buttonElement.textContent.includes('折线图') ? 'line' : 'bar';
            console.log('更新图表类型:', chartState.chartType, '->', newChartType);
            chartState.chartType = newChartType;
            
            // 使用setTimeout确保DOM更新后再更新图表
            setTimeout(() => {
                updateTrendChart();
            }, 0);
        }
        
        // 查询按钮点击事件
        const queryBtn = document.getElementById('query-btn');
        if (queryBtn) {
            queryBtn.addEventListener('click', function() {
                const startDate = document.getElementById('start-date').value;
                const endDate = document.getElementById('end-date').value;
                const timeType = document.getElementById('time-type').value;
                
                // 这里可以添加实际的数据查询逻辑
                console.log(`查询: 时间维度=${timeType}, 开始日期=${startDate}, 结束日期=${endDate}`);
                
                // 更新图表
                updateCharts();
                
                // 显示加载状态
                this.innerHTML = '<i class="fa fa-spinner fa-spin mr-1"></i> 查询中...';
                this.disabled = true;
                
                // 模拟加载延迟
                setTimeout(() => {
                    this.innerHTML = '<i class="fa fa-search mr-1"></i> 查询';
                    this.disabled = false;
                }, 800);
            });
        }
        
        // 导出报表按钮点击事件
        const exportBtn = document.querySelector('button:has(.fa-download)');
        if (exportBtn) {
            exportBtn.addEventListener('click', function() {
                alert('报表导出功能正在开发中...');
            });
        }
        
        // 详情按钮点击事件 - 使用事件委托
        const toolsTable = document.getElementById('tools-table-body');
        if (toolsTable) {
            toolsTable.addEventListener('click', function(event) {
                const viewBtn = event.target.closest('button:has(.fa-eye)');
                if (viewBtn) {
                    const time = viewBtn.closest('tr').querySelector('td:first-child').textContent;
                    const toolName = viewBtn.closest('tr').querySelector('td:nth-child(2)').textContent;
                    alert(`View ${time} ${toolName} call details feature is under development...`);
                }
            });
        } else {
            // 如果没有表格容器，则使用原来的方式
            document.querySelectorAll('button:has(.fa-eye)').forEach(btn => {
                btn.addEventListener('click', function() {
                    const time = this.closest('tr').querySelector('td:first-child').textContent;
                    const toolName = this.closest('tr').querySelector('td:nth-child(2)').textContent;
                    alert(`View ${time} ${toolName} call details feature is under development...`);
                });
            });
        }
        
        // 窗口大小变化时重新渲染图表 - 使用防抖函数优化性能
        const resizeHandler = debounce(function() {
            if (chartState.trendChart) {
                chartState.trendChart.resize();
                initMiniCharts();
            }
        }, 250); // 250ms防抖延迟
        
        window.addEventListener('resize', resizeHandler);
        
        console.log('事件监听器设置完成');
    } catch (error) {
        console.error('设置事件监听器失败:', error);
    }
}

/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {number} wait - 等待时间(毫秒)
 * @returns {Function} - 防抖处理后的函数
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

/**
 * 设置自动更新时间
 */
function setupAutoUpdate() {
    try {
        // 初始设置时间
        const initialTime = setCurrentDate();
        if (!initialTime) {
            console.warn('初始时间设置失败');
        }
        
        // 每分钟更新一次时间
        const intervalId = setInterval(function() {
            setCurrentDate();
        }, 60000); // 60秒 = 1分钟
        
        // 存储intervalId以便需要时清除
        window.autoUpdateIntervalId = intervalId;
        
        console.log('自动更新时间设置完成');
    } catch (error) {
        console.error('设置自动更新失败:', error);
    }
}

/**
 * 应用初始化函数
 * 集中管理所有初始化操作
 */
function initApplication() {
    try {
        console.log('开始初始化应用...');
        
        // 设置当前日期
        setCurrentDate();
        
        // 设置事件监听器
        setupEventListeners();
        
        // 初始化图表（延迟执行确保DOM和ECharts都已加载）
        setTimeout(() => {
            initCharts(0);
        }, 100);
        
        // 设置自动更新
        setupAutoUpdate();
        
        console.log('应用初始化完成');
    } catch (error) {
        console.error('应用初始化失败:', error);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化应用');
    console.log('ECharts是否已加载:', typeof echarts !== 'undefined');
    console.log('图表容器是否存在:', !!document.getElementById('trend-chart'));
    
    // 检查容器的初始状态
    const container = document.getElementById('trend-chart');
    if (container) {
        console.log('容器初始尺寸:', container.offsetWidth, 'x', container.offsetHeight);
        console.log('容器样式:', window.getComputedStyle(container).display, window.getComputedStyle(container).width, window.getComputedStyle(container).height);
    }
    
    // 使用setTimeout确保DOM完全加载和ECharts库加载完成
    setTimeout(initApplication, 200);
});

// 窗口加载完成后的备用初始化
window.addEventListener('load', function() {
    console.log('窗口加载完成');
    console.log('ECharts版本:', typeof echarts !== 'undefined' ? echarts.version : '未加载');
    
    // 如果图表还未初始化，再次尝试
    if (!chartState.trendChart) {
        console.log('图表未初始化，重新尝试初始化');
        setTimeout(() => initCharts(0), 300);
    } else {
        console.log('图表已存在，检查状态...');
        const container = document.getElementById('trend-chart');
        if (container) {
            console.log('当前容器尺寸:', container.offsetWidth, 'x', container.offsetHeight);
        }
    }
});