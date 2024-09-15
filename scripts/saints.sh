#!/bin/bash
echo "Importing saints data..."
mongoimport --host data --db api --collection saints --file ../data/saints.json --jsonArray