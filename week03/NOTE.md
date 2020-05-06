# 表达式

## Atom

- Grammar
  - Tree vs Priority
    优先级在逻辑上是通过生成树的方式来实现
  - Left hand side & Right hand side
- Runtime
  - Type Convertion
  - Reference

## Expression

> 符合语法的表达式，不意味着运行时允许出现

- Left Handside
  - Member
    - a.b
    - a[b]
    - foo`string`
    - super.b
    - super['b']
    - new.target (可用于判断函数是否使用new调用)
    - new Foo()
  - New
    - new Foo(构造函数中有return时，new的结果为return的返回值)
    - 函数调用的优先级更高 new new Foo()相当于new (new Foo())
  - Call
    - foo()
    - super()
    - foo()['b']
    - foo().b
    - foo()`abc`
- Right Handside
  - update(LeftHandSideExpression [no LineTerminator here] ++)
    - a++
    - a--
    - --a
    - ++a
  - Unary 单目运算符
    - delete a.b
    - void foo()
    - typeof a
      - typeof null === 'object'
      - typeof function(){} === 'function'
    - + a
    - - a
    - ~ a
    - ! a
    - await a
  - Exponental
    - **(唯一右结合的运算符)
  - Multiplicative
    - */%
  - Additive
    - +-
  - Shift
    - << >> >>>
  - Relationship
    - < > <= >= instanceof in
  - Equality
    - ==
    - !=
    - ===
    - !==
  - Bitwise
    - & ^ |
  - 


> String to Number
> Number to String