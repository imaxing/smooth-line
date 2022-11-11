/**
 * 获取绘制线条宽度
 * @returns lineWidth
 */
export const getLineWidth = ({ speed, minSpeed, minWidth, maxWidth }) => {
  minSpeed = minSpeed > 10 ? 10 : minSpeed < 1 ? 1 : minSpeed;
  const addWidth = ((maxWidth - minWidth) * speed) / minSpeed;
  const lineWidth = Math.max(maxWidth - addWidth, minWidth);
  return Math.min(lineWidth, maxWidth);
};

/**
 * 获取弧度数据
 * @returns
 */
export const getRadianData = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0) return { val: 0, pos: -1 };
  if (dy === 0) return { val: 0, pos: 1 };
  const val = Math.abs(Math.atan(dy / dx));
  if ((x2 > x1 && y2 < y1) || (x2 < x1 && y2 > y1)) return { val, pos: 1 };
  return { val, pos: -1 };
};

/**
 * 获取弧度节点
 * @returns
 */
export const getRadianPoints = (rd, x, y, h) => {
  const { val, pos } = rd;
  if (val === 0) {
    const v1 = [
      { x: x, y: y + h },
      { x: x, y: y - h },
    ];
    const v = [
      { y: y, x: x + h },
      { y: y, x: x - h },
    ];
    return pos === 1 ? v1 : v;
  }
  const dx = Math.sin(val) * h;
  const dy = Math.cos(val) * h;
  return pos === 1
    ? [
        { x: x + dx, y: y + dy },
        { x: x - dx, y: y - dy },
      ]
    : [
        { x: x + dx, y: y - dy },
        { x: x - dx, y: y + dy },
      ];
};
