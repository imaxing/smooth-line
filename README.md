# 使用 Canvas 绘制笔锋线条

> 因业务需求, 基于大佬的库 https://github.com/linjc/smooth-signature 进行二次修改, 将 canvas 的逻辑剥离

#### Installtion

```bash
npm i smooth-line
```

#### Usage



```js
import SmoothLine from "smooth-line";
import useMouseEvent from "use-mouse-event";

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 传入 canvas 节点, 将 canvas 绑定的摁下/移动/抬起事件分别与绘制逻辑对应即可
const instance = new SmoothLine({ canvas });

useMouseEvent({
  el: canvas,
  onStart: (e) => {
    instance.start({
      x: e.touches ? e.touches[0].clientX : e.offsetX,
      y: e.touches ? e.touches[0].clientY : e.offsetY,
      t: Date.now(),
    });
  },
  onMove: (e) => {
    instance.draw({
      x: e.touches ? e.touches[0].clientX : e.offsetX,
      y: e.touches ? e.touches[0].clientY : e.offsetY,
      t: Date.now(),
    });
  },
  onEnd: instance.end,
});
```

#### Props

| 参数名   | 说明                             | 默认值 |
| -------- | -------------------------------- | ------ |
| el       | canvas 节点                      | -      |
| scale    | 缩放比例 window.devicePixelRatio | -      |
| color    | 线条颜色                         | -      |
| minWidth | 线条最小宽度                     | -      |
| maxWidth | 线条最大宽度                     | -      |

#### Demo

[Vue2 Demo](https://codesandbox.io/s/smooth-line-86qj3v?fontsize=14&hidenavigation=1&theme=dark)
[Vue3 Demo](https://codesandbox.io/s/smooth-lint-vue3-example-o78wry)
[React Demo](https://codesandbox.io/s/smooth-line-example-react-j5jnor)
