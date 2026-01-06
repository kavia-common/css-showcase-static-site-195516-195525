#!/bin/bash
cd /home/kavia/workspace/code-generation/css-showcase-static-site-195516-195525/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

