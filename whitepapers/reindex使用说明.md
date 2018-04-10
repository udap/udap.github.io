## reindex.py  使用说明

reindex.py 是为了重新排序右上角标格式的注释 减少人工手动排序

右上角标格式:
```
    <sup>[\[{index_number}\]][{unique_reference_name}]</sup>
```

例如：
```
    <sup>[\[1\]][omni-layer]</sup>
```

markdown 引用格式: 
```
    [{unique_reference_name}]: {reference_url}
```

例如:
```
    [omni-layer]: http://www.omnilayer.org/
```

### 运行脚本

```bash
cd whitepapgers
python3 reindex.py
```
运行之后会生成一份备份文件 udap-eng.md.bk + 当前时间戳，并在命令行中输出引用列表，此处需要复制并替换 udap-Whitepaper-English.md 中的引用列表.
