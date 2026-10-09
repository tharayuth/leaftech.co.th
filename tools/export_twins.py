#!/usr/bin/env python3
"""Export real Notibox v3 HTML widgets (3D twins from the DC2 demo) as standalone pages for the website.

    NOTIBOX_REPO=<notibox-v3 checkout at main> python3 tools/export_twins.py

Each page = the widget HTML exactly as on a Notibox board + a tiny stand-in for the `notibox` bridge that replays
simulated point values (a normal → incident → normal story, one frame per second). Clicking something that would open
a board opens the public live demo instead. Mouse-wheel is left to the page (scrolls the site, not the 3D zoom).
three.js is served from /vendor (copied from the Notibox frontend build).
"""
import importlib, json, os, sys

REPO = os.environ.get('NOTIBOX_REPO', '/root/Dev/nbx-dc2')
V3 = os.path.join(REPO, 'tools/demo/dc2/v3')
sys.path[:0] = [V3, os.path.join(REPO, 'tools/demo/dcim')]
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'client', 'public', 'twin')
DEMO = 'https://notibox-dc2.appboox.com/p/DM0Hl71_kmmsPuAUgvclM4JfWKn97m-p3HmFzG-Da8Y/b/f3e42f25-008d-4fbb-a30f-3d2db205ec0f'
THEME = dict(background='#070d1a', foreground='#e8eef7', muted='#111a2e', mutedForeground='#8a98b3', border='#ffffff1a', primary='#22c55e')

BRIDGE = r"""<script>
(() => {
  const FRAMES = __FRAMES__, DEMO = __DEMO__; let i = 0, cur = FRAMES[0] || {};
  const listeners = [], declared = Object.freeze(Object.keys(cur));
  window.notibox = Object.freeze({
    get points() { return declared }, get values() { return {} }, get rule() { return {} },
    point(key) { return Object.freeze({ key, get value() { return cur[key] ? cur[key].value : null }, get status() { return cur[key] ? cur[key].status : null },
      get unit() { return cur[key] ? cur[key].unit : null }, get ts() { return Date.now() }, on() { return () => {} }, write() { return Promise.resolve() } }) },
    onUpdate(fn) { listeners.push(fn); setTimeout(() => fn({}, {}), 0) },
    openBoard() { window.open(DEMO, '_blank', 'noopener') },
    send() { return Promise.resolve() }, signal() {}, onSignal() { return () => {} },
  });
  setInterval(() => { i = (i + 1) % FRAMES.length; cur = FRAMES[i]; for (const fn of listeners) fn({}, {}) }, 1000);
  // let the wheel scroll the website instead of zooming the 3D scene
  addEventListener('wheel', (e) => e.stopPropagation(), { capture: true });
})();
</script>"""


def story(mod, normal=14, incident=10):
    return [mod.mock_points('normal', t) for t in range(normal)] + [mod.mock_points('incident', t) for t in range(incident)]


def page(name, mod_name, cfg_env=None, cfg_patch=None):
    for k, v in (cfg_env or {}).items():
        os.environ[k] = v
    mod = importlib.import_module(mod_name)
    cfg = mod.sample_config()
    cfg.update(cfg_patch or {})
    html = mod.render(cfg)
    css = ':root{' + ''.join(f'--nb-{"".join("-" + c.lower() if c.isupper() else c for c in k)}:{v};' for k, v in THEME.items()) + '}'
    doc = ('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
           f'<meta name="robots" content="noindex"><title>Notibox v3 · {name}</title><style>{css}html,body{{background:transparent;margin:0;height:100%}}</style>'
           + BRIDGE.replace('__FRAMES__', json.dumps(story(mod), separators=(',', ':'))).replace('__DEMO__', json.dumps(DEMO))
           + '</head><body>' + html + '</body></html>')
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, f'{name}.html')
    open(path, 'w').write(doc)
    print(f'{path}: {len(doc.encode()) // 1024} KiB')


if __name__ == '__main__':
    page('tower', 'tpl_tower', cfg_patch={'board': 'demo'})
    page('hall', 'tpl_hall', {'HALL_VIEW': 'thermal'}, {'title': 'Data Hall 2', 'subtitle': 'Live digital twin · drag to orbit'})
    page('campus', 'tpl_site')
    page('cctv', 'tpl_cctv', {'CCTV_SCENE': 'rows', 'CCTV_CAM': '3'})
    page('rack', 'tpl_rack', {'RACK': 'B3', 'VIEW': 'usage'})
