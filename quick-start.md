# 快速开始

matrixjs是一个矩阵相关的数学计算库

## 矩阵

### 伴随矩阵

> 伴随矩阵（Adjugate Matrix），也称为余子式矩阵的转置或伴随阵

对于$n$阶方阵$A$，其伴随矩阵$adj(A)$是一个$n$阶方阵，其元素是$A$的代数余子式，并且这些代数余子式被排列在$adj(A)$中，使得$adj(A)$的第$i$行第$j$列元素是$A$删去第$i$行第$j$列后得到的$ (n−1)$阶子式的行列式，再乘以 $(−1)^{(i+j)}$ （即代数余子式）

### 矩阵相乘

矩阵$C$的第$i$行第$j$列的元素$c_{ij}$是矩阵$A$的第$i$行与矩阵$B$的第$j$列对应元素相乘后求和的结果

## 四元数

四元数是一种超复数，由一个实数部分和三个虚数部分组成。这三个虚数部分分别由三个虚数单位i、j、k表示，它们满足以下关系

- $i^2 = j^2 = k^2 = -1$
- $i^0 = j^0 = k^0 = $
- $i、j、k$之间的乘积关系遵循特定的规则$ij=k$、$ij=-k$等

因此，一个四元数一般可以表示为$a + bi + cj + dk$的形式，其中$a、b、c、$d是实数。另外，四元数也可以用标量和向量的形式来表示，即$s + v$，其中$s$是实部，$v$是虚部（一个三维向量）
