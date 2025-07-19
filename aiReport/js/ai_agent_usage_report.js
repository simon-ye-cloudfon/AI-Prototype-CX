// AI Agent Usage Report JavaScript

// Mock data for AI Agent Usage
const agentUsageData = {
    v1: {
        'all': {
            name: 'All V1 Agents',
            totalReplies: 8420,
            dailyAverage: 561,
            peakHour: '14:00',
            peakReplies: 1240,
            activeAgents: 3,
            agents: [
                { name: 'Agent - Support V1', replies: 3680, dailyAvg: 245, peakHour: '14:00', lastActive: '2025-01-15 16:30' },
        { name: 'Agent - Sales V1', replies: 2890, dailyAvg: 193, peakHour: '15:00', lastActive: '2025-01-15 16:25' },
        { name: 'Agent - Technical V1', replies: 1850, dailyAvg: 123, peakHour: '13:00', lastActive: '2025-01-15 16:20' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [520, 580, 640, 720, 680, 750, 820]
            },
    
        },
        'support': {
            name: 'Agent - Support V1',
            totalReplies: 3680,
            dailyAverage: 245,
            peakHour: '14:00',
            peakReplies: 520,
            activeAgents: 1,
            agents: [
                { name: 'Agent - Support V1', replies: 3680, dailyAvg: 245, peakHour: '14:00', lastActive: '2025-01-15 16:30' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [220, 250, 280, 320, 300, 340, 380]
            },
    
        },
        'sales': {
            name: 'Agent - Sales V1',
            totalReplies: 2890,
            dailyAverage: 193,
            peakHour: '15:00',
            peakReplies: 420,
            activeAgents: 1,
            agents: [
                { name: 'Agent - Sales V1', replies: 2890, dailyAvg: 193, peakHour: '15:00', lastActive: '2025-01-15 16:25' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [180, 200, 220, 240, 230, 260, 280]
            },
    
        },
        'technical': {
            name: 'Agent - Technical V1',
            totalReplies: 1850,
            dailyAverage: 123,
            peakHour: '13:00',
            peakReplies: 280,
            activeAgents: 1,
            agents: [
                { name: 'Agent - Technical V1', replies: 1850, dailyAvg: 123, peakHour: '13:00', lastActive: '2025-01-15 16:20' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [120, 130, 140, 160, 150, 150, 160]
            },
    
        }
    },
    v2: {
        'all': {
            name: 'All V2 Agents',
            totalReplies: 7260,
            dailyAverage: 484,
            peakHour: '15:00',
            peakReplies: 1100,
            activeAgents: 3,
            agents: [
                { name: 'Agent - Support V2', replies: 3120, dailyAvg: 208, peakHour: '15:00', lastActive: '2025-01-15 16:35' },
        { name: 'Agent - Sales V2', replies: 2580, dailyAvg: 172, peakHour: '14:00', lastActive: '2025-01-15 16:28' },
        { name: 'Agent - Technical V2', replies: 1560, dailyAvg: 104, peakHour: '16:00', lastActive: '2025-01-15 16:32' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [420, 480, 520, 580, 620, 680, 720]
            },
    
        },
        'support': {
            name: 'Agent - Support V2',
            totalReplies: 3120,
            dailyAverage: 208,
            peakHour: '15:00',
            peakReplies: 450,
            activeAgents: 1,
            agents: [
                { name: 'Agent - Support V2', replies: 3120, dailyAvg: 208, peakHour: '15:00', lastActive: '2025-01-15 16:35' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [180, 210, 230, 260, 280, 310, 320]
            },
    
        },
        'sales': {
            name: 'Agent - Sales V2',
            totalReplies: 2580,
            dailyAverage: 172,
            peakHour: '14:00',
            peakReplies: 380,
            activeAgents: 1,
            agents: [
                { name: 'Agent - Sales V2', replies: 2580, dailyAvg: 172, peakHour: '14:00', lastActive: '2025-01-15 16:28' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [150, 170, 180, 200, 220, 240, 260]
            },
    
        },
        'technical': {
            name: 'Agent - Technical V2',
            totalReplies: 1560,
            dailyAverage: 104,
            peakHour: '16:00',
            peakReplies: 270,
            activeAgents: 1,
            agents: [
                { name: 'Agent - Technical V2', replies: 1560, dailyAvg: 104, peakHour: '16:00', lastActive: '2025-01-15 16:32' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [90, 100, 110, 120, 120, 130, 140]
            },
    
        }
    },
    all: {
        'all': {
            name: 'All Agents (V1 & V2)',
            totalReplies: 15680,
            dailyAverage: 1045,
            peakHour: '14:00',
            peakReplies: 2340,
            activeAgents: 6,
            agents: [
                { name: 'Agent - Support V1', replies: 3680, dailyAvg: 245, peakHour: '14:00', lastActive: '2025-01-15 16:30' },
        { name: 'Agent - Support V2', replies: 3120, dailyAvg: 208, peakHour: '15:00', lastActive: '2025-01-15 16:35' },
        { name: 'Agent - Sales V1', replies: 2890, dailyAvg: 193, peakHour: '15:00', lastActive: '2025-01-15 16:25' },
        { name: 'Agent - Sales V2', replies: 2580, dailyAvg: 172, peakHour: '14:00', lastActive: '2025-01-15 16:28' },
        { name: 'Agent - Technical V1', replies: 1850, dailyAvg: 123, peakHour: '13:00', lastActive: '2025-01-15 16:20' },
        { name: 'Agent - Technical V2', replies: 1560, dailyAvg: 104, peakHour: '16:00', lastActive: '2025-01-15 16:32' }
            ],
            trendData: {
                dates: ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'],
                values: [940, 1060, 1160, 1300, 1300, 1430, 1540]
            },
    
        }
    }
};

// Chart instances
let usageTrendChart = null;
let agentDistributionChart = null;


// Initialize the report
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupEventListeners();
    updateReport();
});

// Setup event listeners
function setupEventListeners() {
    // Filter change events
    document.getElementById('agent-version').addEventListener('change', updateReport);
    document.getElementById('specific-agent').addEventListener('change', updateReport);
    document.getElementById('time-dimension').addEventListener('change', updateReport);
    document.getElementById('time-range').addEventListener('change', handleTimeRangeChange);

    
    // Chart type buttons
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chartContainer = this.closest('.card-shadow');
            chartContainer.querySelectorAll('.chart-type-btn').forEach(b => {
                b.classList.remove('active', 'bg-primary/10', 'text-primary');
                b.classList.add('bg-gray-100', 'text-gray-600');
            });
            this.classList.add('active', 'bg-primary/10', 'text-primary');
            this.classList.remove('bg-gray-100', 'text-gray-600');
            
            // Update chart based on type
            const chartType = this.dataset.type;
            const chartId = chartContainer.querySelector('.chart-container').id;
            updateChartType(chartId, chartType);
        });
    });
}

// Handle time range change
function handleTimeRangeChange() {
    const timeRange = document.getElementById('time-range').value;
    const customDateRange = document.getElementById('custom-date-range');
    
    if (timeRange === 'custom') {
        customDateRange.style.display = 'grid';
    } else {
        customDateRange.style.display = 'none';
    }
    
    updateReport();
}

// Get current data based on filters
function getCurrentData() {
    const version = document.getElementById('agent-version').value;
    const agent = document.getElementById('specific-agent').value;
    const timeRange = document.getElementById('time-range').value;
    
    let baseData;
    if (version === 'all') {
        baseData = agentUsageData.all[agent] || agentUsageData.all.all;
    } else {
        baseData = agentUsageData[version][agent] || agentUsageData[version].all;
    }
    
    // Apply time range adjustments
    return applyTimeRangeFilter(baseData, timeRange);
}

// Apply time range filter to data
function applyTimeRangeFilter(data, timeRange) {
    const adjustedData = JSON.parse(JSON.stringify(data)); // Deep copy
    
    switch (timeRange) {
        case 'today':
            adjustedData.totalReplies = Math.round(data.totalReplies * 0.15); // ~1/7 of weekly data
            adjustedData.dailyAverage = adjustedData.totalReplies;
            adjustedData.peakReplies = Math.round(data.peakReplies * 0.8);
            adjustedData.trendData = {
                dates: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                values: []
            };
            break;
            
        case 'yesterday':
            adjustedData.totalReplies = Math.round(data.totalReplies * 0.14);
            adjustedData.dailyAverage = adjustedData.totalReplies;
            adjustedData.peakReplies = Math.round(data.peakReplies * 0.75);
            adjustedData.trendData = {
                dates: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                values: []
            };
            break;
            
        case 'last7days':
            adjustedData.totalReplies = Math.round(data.totalReplies * 1.0);
            adjustedData.dailyAverage = Math.round(adjustedData.totalReplies / 7);
            adjustedData.peakReplies = Math.round(data.peakReplies * 1.0);
            // Keep original trend data (7 days)
            break;
            
        case 'last30days':
            adjustedData.totalReplies = Math.round(data.totalReplies * 4.2);
            adjustedData.dailyAverage = Math.round(adjustedData.totalReplies / 30);
            adjustedData.peakReplies = Math.round(data.peakReplies * 1.1);
            adjustedData.trendData = {
                dates: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                values: [
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 0.8),
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 0.9),
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 1.0),
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 1.1)
                ]
            };
            break;
            
        case 'last90days':
            adjustedData.totalReplies = Math.round(data.totalReplies * 12.5);
            adjustedData.dailyAverage = Math.round(adjustedData.totalReplies / 90);
            adjustedData.peakReplies = Math.round(data.peakReplies * 1.2);
            adjustedData.trendData = {
                dates: ['Month 1', 'Month 2', 'Month 3'],
                values: [
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 3.8),
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 4.1),
                    Math.round(data.trendData.values.reduce((a, b) => a + b) * 4.6)
                ]
            };
            break;
            
        case 'custom':
            // For custom range, use default data but could be enhanced with actual date logic
            adjustedData.totalReplies = Math.round(data.totalReplies * 2.1);
            adjustedData.dailyAverage = Math.round(adjustedData.totalReplies / 14);
            adjustedData.peakReplies = Math.round(data.peakReplies * 1.05);
            break;
            
        default: // last7days
            break;
    }
    
    // Update agents data proportionally
    if (adjustedData.agents) {
        const ratio = adjustedData.totalReplies / data.totalReplies;
        adjustedData.agents = adjustedData.agents.map(agent => ({
            ...agent,
            replies: Math.round(agent.replies * ratio),
            dailyAvg: Math.round(agent.dailyAvg * ratio)
        }));
    }
    
    return adjustedData;
}

// Update the entire report
function updateReport() {
    const currentData = getCurrentData();
    
    updateKeyMetrics(currentData);
    updateUsageTable(currentData);
    updateTrendChart(currentData);
    updateDistributionChart(currentData);

}

// Update key metrics
function updateKeyMetrics(data) {
    document.getElementById('total-replies').textContent = data.totalReplies.toLocaleString();
    document.getElementById('daily-average').textContent = data.dailyAverage.toLocaleString();
    document.getElementById('peak-replies').textContent = data.peakReplies.toLocaleString();
    document.getElementById('active-agents').textContent = data.activeAgents;
    
    // Update version info in active agents
    const version = document.getElementById('agent-version').value;
    const activeAgentsElement = document.getElementById('active-agents').nextElementSibling;
    if (version === 'all') {
        activeAgentsElement.textContent = 'V1: 3, V2: 3';
    } else if (version === 'v1') {
        activeAgentsElement.textContent = 'Version 1 Agents';
    } else if (version === 'v2') {
        activeAgentsElement.textContent = 'Version 2 Agents';
    }
}

// Update usage table
function updateUsageTable() {
    const currentData = getCurrentData();
    const tableBody = document.getElementById('usage-table-body');
    
    tableBody.innerHTML = '';
    
    currentData.agents.forEach(agent => {
        const row = document.createElement('tr');
        const version = agent.name.includes('V1') ? 'V1' : 'V2';

        
        row.innerHTML = `
            <td class="px-4 py-3">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <i class="fa fa-robot text-primary text-sm"></i>
                    </div>
                    <span class="font-medium">${agent.name}</span>
                </div>
            </td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center rounded-full text-xs font-medium px-2 py-1 ${
                    version === 'V1' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                }">
                    ${version}
                </span>
            </td>
            <td class="px-4 py-3 font-semibold">${agent.replies.toLocaleString()}</td>
            <td class="px-4 py-3">${agent.dailyAvg}</td>
            <td class="px-4 py-3">${agent.peakHour}</td>

            <td class="px-4 py-3 text-gray-500">${agent.lastActive}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Initialize charts
function initializeCharts() {
    // Usage Trend Chart
    usageTrendChart = echarts.init(document.getElementById('usage-trend-chart'));
    
    // Agent Distribution Chart
    agentDistributionChart = echarts.init(document.getElementById('agent-distribution-chart'));
    

}

// Update trend chart
function updateTrendChart(data) {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.trendData.dates,
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#e5e7eb'
                }
            }
        },
        series: [{
            name: 'AI Replies',
            type: 'line',
            data: data.trendData.values,
            smooth: true,
            lineStyle: {
                color: '#3b82f6',
                width: 3
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(59, 130, 246, 0.3)'
                    }, {
                        offset: 1, color: 'rgba(59, 130, 246, 0.05)'
                    }]
                }
            },
            itemStyle: {
                color: '#3b82f6'
            }
        }]
    };
    
    usageTrendChart.setOption(option);
}

// Update distribution chart
function updateDistributionChart(data) {
    const pieData = data.agents.map(agent => ({
        name: agent.name,
        value: agent.replies
    }));
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                fontSize: 12
            }
        },
        series: [{
            name: 'AI Replies',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['60%', '50%'],
            data: pieData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                formatter: '{b}\n{d}%'
            }
        }]
    };
    
    agentDistributionChart.setOption(option);
}



// Update chart type
function updateChartType(chartId, chartType) {
    const currentData = getCurrentData();
    
    if (chartId === 'usage-trend-chart') {
        if (chartType === 'bar') {
            const option = usageTrendChart.getOption();
            option.series[0].type = 'bar';
            option.series[0].areaStyle = null;
            usageTrendChart.setOption(option);
        } else {
            updateTrendChart(currentData);
        }
    } else if (chartId === 'agent-distribution-chart') {
        const pieData = currentData.agents.map(agent => ({
            name: agent.name,
            value: agent.replies
        }));
        
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    fontSize: 12
                }
            },
            series: [{
                name: 'AI Replies',
                type: 'pie',
                radius: chartType === 'doughnut' ? ['40%', '70%'] : '70%',
                center: ['60%', '50%'],
                data: pieData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    formatter: '{b}\n{d}%'
                }
            }]
        };
        
        agentDistributionChart.setOption(option);
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    if (usageTrendChart) usageTrendChart.resize();
    if (agentDistributionChart) agentDistributionChart.resize();

});

// Export functionality (placeholder)
function exportData() {
    alert('Export functionality would be implemented here');
}

// Add export button event listener
document.addEventListener('DOMContentLoaded', function() {
    const exportBtn = document.querySelector('button[onclick*="export"]');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }
});