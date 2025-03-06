---
outline: deep
---

# 二维矩阵

> Mat2 类型 **类**

## 初始化一个二维单位矩阵

```js
const mat2 = new Mat2()
```

## 私有属性

| 属性名 | 描述 | 类型 |
| - | - | - |
| _value | 存放二维矩阵各个分量的数据 | [ARRAY_TYPE](./common.md#ARRAY_TYPE) |

## 静态方法

### fromValues

```js
/**
 * 使用4个值创建一个二维矩阵
 * 
 * @param {Number} m00 
 * @param {Number} m01
 * @param {Number} m10 
 * @param {Number} m11 
 * @returns {Mat2}
 */
```

## 实例方法

### get00

```js
/**
 * 获取二维矩阵的第一行第一列的值
 * 
 * @returns {Number}
 */
```

### get01

```js
/**
 * 获取二维矩阵的第一行第二列的值
 * 
 * @returns {Number}
 */
```

### get10

```js
/**
 * 获取二维矩阵的第二行第一列的值
 * 
 * @returns {Number}
 */
```

### get11

```js
/**
 * 获取二维矩阵的第二行第二列的值
 * 
 * @returns {Number}
 */
```

### set00

```js
/**
 * 设置二维矩阵的第一行第一列的值
 * 
 * @param {Number} val
 */
```

### set01

```js
/**
 * 设置二维矩阵的第一行第二列的值
 * 
 * @param {Number} val
 */
```

### set10

```js
/**
 * 设置二维矩阵的第二行第一列的值
 * 
 * @param {Number} val
 */
```

### set11

```js
/**
 * 设置二维矩阵的第二行第二列的值
 * 
 * @param {Number} val
 */
```

### set

```js
/**
 * 设置二维矩阵的值
 * 
 * @param {Number} m00 
 * @param {Number} m01
 * @param {Number} m10 
 * @param {Number} m11 
 */
```

### identity

```js
/**
 * 设置二维矩阵为单位矩阵（对眼矩阵）
 * 
 */
```

### clone

```js
/**
 * 克隆一个二维矩阵
 * 
 * @returns {Mat2}
 */
```

### copy

```js
/**
 * 复制另一个二维矩阵的值
 * 
 * @param {Mat2} Mat2
 */
```
