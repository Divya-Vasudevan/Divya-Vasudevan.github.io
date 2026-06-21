#!/usr/bin/env python3
"""Local dev server that serves 404.html for missing files (mimics GitHub Pages / Netlify)."""

import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def send_error(self, code, message=None, explain=None):
        if code == 404:
            fallback = os.path.join(DIRECTORY, '404.html')
            if os.path.exists(fallback):
                try:
                    with open(fallback, 'rb') as f:
                        body = f.read()
                    self.send_response(404)
                    self.send_header('Content-Type', 'text/html; charset=utf-8')
                    self.send_header('Content-Length', str(len(body)))
                    self.end_headers()
                    self.wfile.write(body)
                    return
                except OSError:
                    pass
        super().send_error(code, message, explain)


with socketserver.TCPServer(('', PORT), Handler) as httpd:
    httpd.allow_reuse_address = True
    print(f'Serving {DIRECTORY} at http://localhost:{PORT} (custom 404 → 404.html)')
    httpd.serve_forever()
