#!/bin/bash
# Andrew Arnopoulos

file=$1

if [ $file ]
then
	awk '{print ($4 + $5 + $6) / 3, "["$1"]",$3", " $2}'  $file | sort -t " " -k 3,4

else
	echo "Usage: $0 filename"
fi
