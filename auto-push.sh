#!/bin/bash

echo "Watching for changes... Press [CTRL+C] to stop."

fswatch -o . | while read f
do
    git add .
    git commit -m "Auto commit on change: $(date)"
    git push origin main
done
