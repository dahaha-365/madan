# Madan公众号排版编辑器

听说起个贱名字好养活，那就叫madan编辑器吧。

---

毫无意外，这不是一个原创项目，Fork[@doocs](https://github.com/doocs/md)大师的。目前修改过的地方有下面这些：

- 颜色和主题的配置进行了解耦✅
- 增加了一个Emoji输入键盘✅
- 修复了doocs/md在深色模式下，编辑器光标很难观察的问题✅
- 魔改了一些主题渲染的方法，给自己挖了个大坑🤢

嗯，忙活了几天好像也没比原版好多少。

Demo页迟点再做吧。

主题渲染的坑，源于自己一个不自量力的想法：

> doocs/md在渲染自定义主题时，强制添加了一些border、background之类的样式。我的想法是，程序尽不可能干扰主题的设计，于是就把那些默认样式都删掉的。
>
> 麻烦来了，这些样式删掉以后，主题色切换就失效了😂。于是乎，能不能让主题自己决定哪些元素需要跟着主题色变更呢？所以我在主题配置里加了一个`custom`函数，希望在切换主题色时能执行这个函数修改样式。
>
> 麻烦的兄弟也来了，字体、字号的切换也出问题了😂。重构渲染函数好像有点复杂，而且自己也不确定重构了以后会更好，多加几个判断就好了🤭。师傅当年教的是：项目全靠这些bug撑着，别改祖传的代码。
>
> 大家都不容易，能坑一个是一个吧。目前这个版本，主题渲染功能还是有点小问题的，不过能用，将就，不讲究。主要是因为我也没做出一个能用来测试的新主题🤭。
