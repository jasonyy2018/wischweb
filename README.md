# 网站语言自动切换功能

## 功能说明

网站现在支持根据用户的系统语言自动切换中英文界面。

## 实现原理

1. **系统语言检测**：使用 `navigator.language` 检测浏览器语言设置
2. **自动切换**：页面加载时自动应用对应语言
3. **用户偏好保存**：用户手动选择的语言会保存到 localStorage
4. **优先级**：用户选择 > 系统语言

## 核心代码

```javascript
// 检测系统语言
function detectSystemLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

// 页面加载时自动设置语言
window.addEventListener('load', function() {
    const savedLang = localStorage.getItem('preferred-language');
    const systemLang = detectSystemLanguage();
    const targetLang = savedLang || systemLang;
    
    applyLanguage(targetLang);
});
```

## 支持的语言

- **中文**：zh-CN, zh-TW, zh-HK, zh-SG 等中文变体
- **英文**：其他所有语言默认显示英文

## 测试方法

1. **修改浏览器语言**：
   - Chrome: 设置 → 高级 → 语言
   - Firefox: 设置 → 常规 → 语言
   - Edge: 设置 → 语言

2. **清除缓存**：清除 localStorage 中的语言偏好

3. **测试页面**：打开 `language-test.html` 查看详细信息

## 文件说明

- `home.html` - 主网站页面（已集成自动语言切换）
- `language-test.html` - 语言切换测试页面
- `language-demo.js` - 语言检测演示脚本

## 浏览器兼容性

- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge 12+
- IE 9+

## 注意事项

1. 首次访问会根据系统语言自动设置
2. 用户手动选择语言后会记住偏好
3. 清除浏览器数据会重置为系统语言
4. 支持实时切换，无需刷新页面