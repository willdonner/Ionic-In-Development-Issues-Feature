# Ionic-In-Development-Issues-Feature
# Ionic打包Android📦 问题解决

*  Android编译报错：
- 问题：Android Studio Gradle Error: Multiple dex files define:
- 解决办法：

```
    dexOptions {
    preDexLibraries = false
}
```


