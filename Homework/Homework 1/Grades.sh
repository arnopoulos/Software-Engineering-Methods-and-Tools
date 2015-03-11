#!/bin/bash
# Andrew Arnopoulos

file=$1

if [ $# -lt 1 ]
then
	echo "Usage: $0 filename"
	exit 1
fi
((newFile = "fjdskla"))
while read -r line
do
	OIFS=$IFS
	set -- "$line"
	IFS=" "
	declare -a comp=($*)
	((average = (${comp[3]} + ${comp[4]} + ${comp[5]}) / 3))
	echo "$average [${comp[0]}] ${comp[2]}, ${comp[1]}"
	IFS=$OIFS
	
done < "$file" | sort -t " " -k 3,4
