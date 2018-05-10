#!/usr/bin/env python

import argparse
import subprocess
from zipfile import ZipFile

parser=argparse.ArgumentParser(description='get arguments from https://addons.mozilla.org/en-US/developers/addon/api/key/')
parser.add_argument('jwt_issuer')
parser.add_argument('jwt_secret')
args=parser.parse_args()

with ZipFile('new-tab.zip', 'w') as file:
	[file.write(i) for i in ['main.js', 'manifest.json', 'option.js', 'options.html']]

subprocess.check_call(['web-ext', 'sign', '--api-key', args.jwt_issuer, '--api-secret', args.jwt_secret])
