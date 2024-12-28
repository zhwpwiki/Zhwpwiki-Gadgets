### 用法 / Usage
> 此文档一般用不到，仅供参考

#### 对于网站维护者：<br>For website maintainers:

1. Fork 本仓库<br>Fork this repository

2. 根据实际情况更改各个小工具的`definition.json`，可选值及默认值可见于`scripts/constant.ts` - `DEFAULT_DEFINITION`<br>Modify the definition.json for each gadget according to your specific requirements. Optional values and their default values can be found in `scripts/constant.ts` - `DEFAULT_DEFINITION`

3. 根据实际情况更改`scripts/constant.ts`中的信息<br>Update the information in `scripts/constant.ts` based on your specific needs

4. 在`script`文件夹下新建`credentials.json`文件（同一站点存在多种登录凭据时，OAuth2 优先于 OAuth1.0a 优先于机器人账号密码）<br>Create a `credentials.json` file in the `script` directory (If multiple login credentials are available for a site, OAuth2 takes precedence over OAuth1.0a, which takes precedence over bot password)

    ```jsonc
    {
    	// 站点名称 / Site name
    	"siteA": {
    		"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    		"username": "", // 填入机器人账号和密码（可以在[[Special:BotPasswords]]获取）/ Enter the robot account and password (you can get it from [[Special:BotPasswords]])
    		"password": "",
    	},
    	"siteB": {
    		"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    		"OAuth2AccessToken": "", // 填入 OAuth2 访问密钥 / Enter the OAuth2 access token
    	},
    	"siteC": {
    		"apiUrl": "https://your.wiki/api.php", // 根据实际情况修改 / Modify according to actual needs
    		"OAuthCredentials": {
    			// 填入 OAuth1.0a 相关信息 / Enter the OAuth1.0a related information
    			"accessToken": "16_DIGIT_ALPHANUMERIC_KEY",
    			"accessSecret": "20_DIGIT_ALPHANUMERIC_KEY",
    			"consumerToken": "16_DIGIT_ALPHANUMERIC_KEY",
    			"consumerSecret": "20_DIGIT_ALPHANUMERIC_KEY",
    		},
    	},
    }
    ```

    也可以将字符串化后的`credentials.json`文本声明为`CREDENTIALS_JSON`环境变量。此时，`credentials.json`文件将被忽略<br>You can declare the stringified `credentials.json` text as the `CREDENTIALS_JSON` environment variable, in which case the `credentials.json` file will be ignored.

    根据工具需要，你应该授予机器人账号以下额外权限<br>Grant the robot account the following additional permissions:

    - 大量编辑<br>High-volume editing
    - 编辑存在的页面<br>Edit existing pages
    - 编辑受保护的页面<br>Edit protected pages
    - 编辑MediaWiki命名空间和全站/用户的JSON<br>Edit the MediaWiki namespace and sitewide/user JSON
    - 编辑全站和用户的CSS/JS<br>Edit sitewide and user CSS/JS
    - 创建、编辑和移动页面<br>Create, edit, and move pages
    - 删除页面、修订和日志记录<br>Delete pages, revisions, and log entries

5. 运行`pnpm run deploy`以检查语法、格式化代码、编译源码、并向网站部署<br>Run `pnpm run deploy` to check syntax, format code, compile the source code, and deploy to the website

