# 常见文件操作命令指南

本文档整理了 Linux/Unix 系统中常用的文件和目录操作命令，帮助你更高效地管理文件系统。

## 基础文件操作

### 查看文件

```bash
# 列出文件和目录
ls                    # 列出当前目录内容
ls -l                 # 详细列表格式
ls -la                # 包含隐藏文件
ls -lh                # 人类可读的文件大小

# 查看文件内容
cat file.txt          # 显示全部内容
less file.txt         # 分页查看（可上下滚动）
head file.txt         # 查看前10行
head -n 20 file.txt   # 查看前20行
tail file.txt         # 查看后10行
tail -f log.txt       # 实时查看日志文件
```

### 创建和删除

```bash
# 创建文件和目录
touch file.txt        # 创建空文件
mkdir dirname         # 创建目录
mkdir -p a/b/c        # 递归创建多级目录

# 删除文件和目录
rm file.txt           # 删除文件
rm -f file.txt        # 强制删除（不提示）
rm -r dirname         # 递归删除目录
rm -rf dirname        # 强制递归删除（危险！）
```

### 复制和移动

```bash
# 复制文件
cp source.txt dest.txt              # 复制文件
cp -r source_dir/ dest_dir/         # 递归复制目录
cp -a source_dir/ dest_dir/         # 保留所有属性复制

# 移动和重命名
mv old_name.txt new_name.txt        # 重命名文件
mv file.txt /path/to/directory/     # 移动文件
mv -i file.txt dest/                # 交互式移动（覆盖前确认）
```

## 高级操作

### 文件查找

```bash
# find 命令
find . -name "*.txt"                # 查找所有txt文件
find . -type f -name "*.log"        # 查找所有log文件
find . -type d -name "test*"        # 查找目录
find . -size +100M                  # 查找大于100MB的文件
find . -mtime -7                    # 查找7天内修改的文件
find . -name "*.tmp" -delete        # 查找并删除

# locate 命令（更快，但需要更新数据库）
locate filename
sudo updatedb                       # 更新locate数据库
```

### 文件搜索内容

```bash
# grep 文本搜索
grep "pattern" file.txt             # 在文件中搜索
grep -r "pattern" directory/        # 递归搜索目录
grep -i "pattern" file.txt          # 忽略大小写
grep -n "pattern" file.txt          # 显示行号
grep -v "pattern" file.txt          # 反向匹配（不包含）
grep -E "regex" file.txt            # 使用正则表达式
```

### 文件权限管理

```bash
# 修改权限
chmod 755 file.sh                   # 设置权限为 rwxr-xr-x
chmod +x script.sh                  # 添加执行权限
chmod -R 644 directory/             # 递归修改目录权限

# 修改所有者
chown user:group file.txt           # 修改文件所有者和组
chown -R user:group directory/      # 递归修改目录
```

### 文件压缩和解压

```bash
# tar 归档
tar -cvf archive.tar files/         # 创建tar归档
tar -xvf archive.tar                # 解压tar归档
tar -czvf archive.tar.gz files/     # 创建gzip压缩的tar
tar -xzvf archive.tar.gz            # 解压tar.gz
tar -cjvf archive.tar.bz2 files/    # 创建bzip2压缩的tar
tar -xjvf archive.tar.bz2           # 解压tar.bz2

# zip 压缩
zip -r archive.zip directory/       # 压缩目录为zip
unzip archive.zip                   # 解压zip
unzip -l archive.zip                # 列出zip内容
```

## 文件同步与合并

### rsync 文件同步

```bash
# 基本同步
rsync -av source/ destination/      # 同步目录（保留属性）
rsync -avz source/ user@remote:destination/  # 远程同步

# 文件夹合并（不覆盖已存在的文件）
rsync -av --ignore-existing B/ A/

# 增量备份
rsync -av --delete source/ backup/  # 删除目标中多余文件
rsync -avh --progress source/ dest/ # 显示进度
```

#### rsync 命令详解

- `rsync`：用于同步文件和文件夹的强大工具
- `-a`：归档模式，保持文件的属性、权限、时间戳等
- `-v`：显示详细的进程信息
- `-z`：传输时压缩数据
- `-h`：人类可读的输出格式
- `--progress`：显示传输进度
- `--ignore-existing`：忽略已存在于目标文件夹中的文件，避免覆盖
- `--delete`：删除目标目录中源目录没有的文件

#### 合并示例

假设有两个文件夹结构：

```
A/
├── x/y/z1
└── q/w/e1

B/
├── x/y/z2
└── q/w/e2
```

执行合并命令：

```bash
rsync -av --ignore-existing B/ A/
```

执行后，文件夹 A 将包含：

```
A/
├── x/y/z1  (保留A中原有文件)
├── x/y/z2  (从B中复制过来)
├── q/w/e1  (保留A中原有文件)
└── q/w/e2  (从B中复制过来)
```

这样就达到了合并文件夹并避免同名文件覆盖的目的。

### 批量操作

```bash
# 批量重命名
for file in *.txt; do mv "$file" "${file%.txt}.md"; done

# 批量转换文件编码
for file in *.txt; do iconv -f GBK -t UTF-8 "$file" -o "${file}.utf8"; done

# 批量替换文件内容
find . -name "*.txt" -exec sed -i 's/old/new/g' {} +
```

## 磁盘空间管理

```bash
# 查看磁盘使用情况
df -h                               # 查看分区使用情况
du -h directory/                    # 查看目录大小
du -sh directory/                   # 只显示目录总大小
du -h --max-depth=1                 # 只显示一级子目录大小

# 查找大文件
du -ah / | sort -rh | head -n 20   # 查找最大的20个文件
find / -type f -size +1G            # 查找大于1GB的文件
```

## 符号链接

```bash
# 创建软链接（符号链接）
ln -s /path/to/original /path/to/link

# 创建硬链接
ln /path/to/original /path/to/link

# 查看链接指向
ls -l link_name
readlink link_name
```

## 实用技巧

### 文件对比

```bash
diff file1.txt file2.txt            # 对比两个文件
diff -u file1.txt file2.txt         # 统一格式输出
vimdiff file1.txt file2.txt         # 可视化对比
```

### 文件监控

```bash
watch -n 1 ls -lh                   # 每秒监控目录变化
inotifywait -m directory/           # 实时监控文件系统事件
```

### 文件类型判断

```bash
file filename                       # 判断文件类型
stat filename                       # 查看文件详细信息
```

## 注意事项

1. **危险命令警告**：使用 `rm -rf` 时要特别小心，错误的路径可能导致系统文件被删除
2. **权限问题**：某些操作需要 sudo 权限
3. **备份重要**：在进行批量操作前，建议先备份重要数据
4. **路径尾部斜杠**：在使用 rsync 等命令时，路径末尾的 `/` 很重要，会影响同步行为
5. **通配符使用**：使用 `*` 等通配符时要谨慎，建议先用 `ls` 确认匹配结果

## 相关资源

- [Linux 命令手册](https://man7.org/linux/man-pages/)
- [rsync 官方文档](https://rsync.samba.org/)
- [GNU Coreutils](https://www.gnu.org/software/coreutils/)
