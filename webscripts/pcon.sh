#!/bin/bash

gpio -1 mode 12 out 

gpio -1 write 12 1 

sleep 0.5 

gpio -1 write 12 0 

sleep 2 

echo "PC Turned On"
