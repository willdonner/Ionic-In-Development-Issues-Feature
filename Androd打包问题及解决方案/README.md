# Ionic-In-Development-Issues-Feature
# Ionic打包Android📦 问题解决

*  Android编译报错：Android Studio Gradle Error: Multiple dex files define:
    > 问题一：
    > 解决办法：
```html
dexOptions {
    preDexLibraries = false
}
```

