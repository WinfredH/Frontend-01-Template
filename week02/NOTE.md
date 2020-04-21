# 第二周

## 编程语言通识

> 多学几门语言

### 语言按语法分类

- 非形式语言
  - 中文，英文
- 形式语言（乔姆斯基谱系）
  - 0型 无限制文法
  - 1型 上下文相关文法
  - 2型 上下文无关文法
  - 3型 正则文法

主流语言分成词法、语法两个部分

### 产生式（BNF）

- 用尖括号括起来的名称表示语法结构名
- 引号和中间的字符表示终结符，symbol
- 四则预算
- 终结符

### 通过产生式理解乔姆斯基谱系

- 0型 无限制文法
  - ?::=?
- 1型 上下文相关文法
  - ?<A>?::=?<B>?
- 2型 上下文无关文法
  - <A>::=?
- 3型 正则文法
  - <A>::=<A>?
  - ~~<A>::=?<A>~~

> (optional)使用正则来重写四则运算

> 读懂标准

### 其他产生式

> EBNF ABNF Customized

### 图灵完备性

- 图灵完备性
  - 命令式——图灵机
    - goto
    - if和while
  - 声明式——lambda
    - 递归

### 动态与静态

- 动态：
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - Runtime
- 静态：
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

静态语言更少出现bug

### 类型系统

> 静态语言的大杀器

- 动态类型系统与静态类型系统
- 强类型（无隐式转换）与弱类型（有隐式转换）
  - String + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名
- 子类型？？？？
  - 逆变/协变

### 一般命令式编程语言

- Atom
- Expression
- Statement
- Structure
- Program

### 重学JavaScript

语法 => 语义 => 运行时

图灵完备的语言不容易管理

### CSRF

不使用表单提交

CORS

## 重学JavaScript | 词法、类型

### unicode

> http://www.fileformat.info/info/unicode/index.htm

InputElementDiv（带除号）
- WhiteSpace 空格
  - <TAB> 制表符
  - <VT>  垂直制表符
  - <FF>
  - <SP>
  - <NBSP> 不间断的空格，排版时不会被打断换行
  - <ZWNBSP> zero width no-break space 零宽空格，BOM（byte order mask）
  - <USP>
- LineTerminator 换行
- Comment 注释
  - 单行
  - 多行
- Token 有效的输入
  - Punctuator
  - IdentifierName 标识符
    - keywords
    - Identifier
    - Future reserved Keywords: enum
  - Literal
    - Number
      - IEEE 754 Double Float
        - sign(1)
        - Exponent(11)
        - Fraction(52)
    - String
      - Charactor
      - Code Point
      - Encoding
        - ASCII
        - Unicode
        - UCS U+0000 - U+FFFF
        - GB
          - GB2312
          - GBK(gb13000)
          - GB18030
        - ISO-8859
        - BIG5
        - UTF
          - UTF8
          - UTF16
      - Grammar
        - ""
        - ''
        - ``
    - Boolean
    - undefined
    - null
    - Object
    - symbol

