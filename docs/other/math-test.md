# 数学公式测试

测试 KaTeX 公式渲染是否正常工作。

## 行内公式测试

这是一个行内公式：$\theta = \sin(x)$，应该能看到数学符号。

使用反斜杠括号：\(\alpha + \beta = \gamma\)

## 块级公式测试

使用双美元符号：

$$
\theta = \text{atan2}(\sin(\Delta \lambda) \cdot \cos(\phi_2), \cos(\phi_1) \cdot \sin(\phi_2))
$$

使用反斜杠方括号：

\[
\text{bearing} = (\theta \cdot \frac{180}{\pi} + 360) \mod 360
\]

## 复杂公式测试

\[
\phi_1 = \text{lat}_1 \cdot \frac{\pi}{180}
\]

\[
\Delta \lambda = \lambda_2 - \lambda_1
\]

## 多行公式测试

$$
\begin{aligned}
\phi_1 &= \text{lat}_1 \cdot \frac{\pi}{180} \\
\phi_2 &= \text{lat}_2 \cdot \frac{\pi}{180} \\
\lambda_1 &= \text{lon}_1 \cdot \frac{\pi}{180} \\
\lambda_2 &= \text{lon}_2 \cdot \frac{\pi}{180}
\end{aligned}
$$

如果你能看到上面的公式正确渲染（而不是看到 LaTeX 代码），说明配置成功了！
