# MinIO本机加密文件

MinIO 支持在上传文件时进行客户端加密，本地文件加密可以通过 `mc` 客户端工具来实现，具体步骤如下：

1. **安装 `mc`（MinIO Client）**：
   确保你已经安装了 MinIO 的客户端 `mc`。可以使用以下命令进行安装：

   ```bash
   curl -O https://dl.min.io/client/mc/release/linux-amd64/mc
   chmod +x mc
   sudo mv mc /usr/local/bin/
   ```

2. **配置 `mc`**：
   使用 `mc alias set` 命令配置 MinIO 服务的访问信息。替换为你的 MinIO 地址、访问密钥和密钥。

   ```bash
   mc alias set myminio http://localhost:9000 ACCESS_KEY SECRET_KEY
   ```

3. **使用加密上传文件**：
   使用 `mc encrypt` 来进行文件的客户端加密。假设你要加密并上传文件 `myfile.txt` 到 MinIO 的 bucket 中：

   ```bash
   mc encrypt myminio/mybucket/myfile.txt
   ```

   在此过程中，可以提供一个加密密钥，也可以利用 KMS（密钥管理服务）系统来生成和管理加密密钥。

4. **下载加密文件并解密**：
   使用以下命令下载并解密文件：

   ```bash
   mc cp myminio/mybucket/myfile.txt .
   ```

   MinIO 客户端会自动解密文件。

5. **使用加密上传文件夹**：
   --recursive：递归上传文件夹中的所有文件和子文件夹

   ```bash
   mc cp --recursive myfolder myminio/mybucket/
   ```

   MinIO 客户端会自动解密文件。
