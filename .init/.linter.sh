#!/bin/bash
cd /home/kavia/workspace/code-generation/solutiongen-platform-26695-26704/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

