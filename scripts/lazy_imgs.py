from pathlib import Path
import re

p = Path(r"d:\lamassu\ashcroft\index.html")
html = p.read_text(encoding="utf-8")


def repl(m):
    src = m.group(1)
    return f'<img class="scene-photo" data-src="{src}" decoding="async" alt'


html2, n = re.subn(r'<img src="(/assets/scenes/[^"]+)" alt', repl, html)
print("scene imgs", n)
p.write_text(html2, encoding="utf-8")
