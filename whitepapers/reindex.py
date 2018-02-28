import re
import time
import sys
import shutil

'''
It is a script to keep reference id in order in case of an inserted reference
'''
used_refs_pattern = r'<sup>\[\\\[([\d]*)\\\]\]\[([\w-]*)\]<\/sup>'
ref_template = r'<sup>[\[{}\]][{}]</sup>'
all_refs_pattern = r'\[([\w-]*)\]:\s+([\S]*)'
read_me_path = 'UDAP-Whitepaper-English.md'
read_me_backup_path = 'udap-eng.md.bk' + str(time.time() * 1000)

with open(read_me_path, 'r+') as read_me:
    content = read_me.read()
    used_refs = re.findall(used_refs_pattern, content)
    if not used_refs:
        sys.exit('error: no reference please check re pattern and markdown file')
    all_refs = re.findall(all_refs_pattern, content)
    all_refs_dict = {item[0]: item[1] for item in all_refs}
    # backup readme
    shutil.copyfile(read_me_path, read_me_backup_path)
    for idx, value in enumerate(used_refs):
        old_v = ref_template.format(value[0], value[1])
        new_v = ref_template.format(str(idx + 1), value[1])
        # print used references to terminal
        print('\[{}\]: {}\n'.format(str(idx + 1), all_refs_dict[value[1]]))
        content = content.replace(old_v, new_v)
    read_me.seek(0)
    read_me.write(content)
    read_me.truncate()
