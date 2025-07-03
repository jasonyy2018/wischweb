// 系统语言自动检测功能演示
console.log('=== 系统语言检测演示 ===');

// 1. 检测浏览器语言设置
function detectSystemLanguage() {
    // 获取浏览器语言设置
    const userLang = navigator.language || navigator.userLanguage;
    console.log('浏览器语言设置:', userLang);
    
    // 检测是否为中文
    const isChinese = userLang.toLowerCase().startsWith('zh');
    console.log('是否为中文:', isChinese);
    
    return isChinese ? 'zh' : 'en';
}

// 2. 获取所有可能的语言信息
function getLanguageInfo() {
    console.log('\n=== 详细语言信息 ===');
    console.log('navigator.language:', navigator.language);
    console.log('navigator.userLanguage:', navigator.userLanguage);
    console.log('navigator.languages:', navigator.languages);
    console.log('navigator.systemLanguage:', navigator.systemLanguage);
    
    // 检测常见的中文变体
    const lang = navigator.language || navigator.userLanguage;
    const chineseVariants = ['zh', 'zh-cn', 'zh-tw', 'zh-hk', 'zh-sg'];
    const isChineseVariant = chineseVariants.some(variant => 
        lang.toLowerCase().startsWith(variant)
    );
    
    console.log('检测到的语言:', lang);
    console.log('是否为中文变体:', isChineseVariant);
    
    return isChineseVariant ? 'zh' : 'en';
}

// 3. 模拟语言切换功能
function simulateLanguageSwitch() {
    console.log('\n=== 模拟语言切换 ===');
    
    const detectedLang = detectSystemLanguage();
    console.log('检测到的系统语言:', detectedLang);
    
    // 模拟网站内容切换
    const content = {
        zh: {
            title: 'WCKJ - 创新人工智能解决方案',
            welcome: '欢迎访问我们的网站',
            services: '我们的服务'
        },
        en: {
            title: 'WCKJ - Innovative Artificial Intelligence Solutions',
            welcome: 'Welcome to our website',
            services: 'Our Services'
        }
    };
    
    const currentContent = content[detectedLang];
    console.log('应用的内容:');
    console.log('- 标题:', currentContent.title);
    console.log('- 欢迎语:', currentContent.welcome);
    console.log('- 服务:', currentContent.services);
}

// 执行演示
try {
    const systemLang = detectSystemLanguage();
    console.log('最终检测结果:', systemLang);
    
    getLanguageInfo();
    simulateLanguageSwitch();
    
    console.log('\n=== 实际应用建议 ===');
    console.log('1. 页面加载时自动检测系统语言');
    console.log('2. 如果用户之前选择过语言，优先使用用户选择');
    console.log('3. 提供手动切换语言的选项');
    console.log('4. 将语言选择保存到localStorage');
    
} catch (error) {
    console.error('语言检测出错:', error);
}