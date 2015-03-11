#!/bin/bash
#Andrew Arnopoulos

file=$1

if [ $file ]
then
	grep "\d$" $file | wc -l

	grep "^[^aeiouyAEIOUY]" $file | wc -l

	grep "^[a-zA-Z]\{12\}$" $file | wc -l

	grep "^[0-9]\{3\}-[0-9]\{3\}-[0-9]\{4\}$" $file | wc -l

	grep "303-441-[0-9]\{4\}" $file | wc -l

	grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" $file | wc -l

	grep "\.gov$" $file | wc -l
else
	echo "Usage: $0 filename"
fi