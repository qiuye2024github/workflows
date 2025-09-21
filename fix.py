import os
import re
import glob


def process_mods_folder():
    # 构建 mods 文件夹的路径
    mods_dir = os.path.join(".", "mods")

    # 检查 mods 文件夹是否存在
    if not os.path.exists(mods_dir):
        print(f"错误: 找不到 mods 文件夹 ({mods_dir})")
        return

    # 匹配中括号及其内容以及后面的一个空格的正则表达式
    pattern = re.compile(r'\[[^\]]+?\] ?')

    # 获取 mods 文件夹下所有 .pw.toml 文件
    file_pattern = os.path.join(mods_dir, '*.pw.toml')
    files = glob.glob(file_pattern)

    if not files:
        print(f"在 {mods_dir} 中未找到 .pw.toml 文件")
        return

    for file_path in files:
        print(f"处理文件: {os.path.basename(file_path)}")

        try:
            # 读取文件内容
            with open(file_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()

            # 只处理第一行
            if lines:
                # 使用正则表达式替换
                original_first_line = lines[0]
                lines[0] = pattern.sub('', lines[0])

                # 如果第一行有变化，则写回文件
                if original_first_line != lines[0]:
                    with open(file_path, 'w', encoding='utf-8') as file:
                        file.writelines(lines)
                    print(f"已处理: {os.path.basename(file_path)}")
                else:
                    print(f"无需处理: {os.path.basename(file_path)} (未找到匹配内容)")

        except Exception as e:
            print(f"处理文件 {os.path.basename(file_path)} 时出错: {str(e)}")


if __name__ == "__main__":
    process_mods_folder()
    print("处理完成!")