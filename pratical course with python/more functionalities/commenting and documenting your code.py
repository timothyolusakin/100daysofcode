"""
This scripts creates an empty file
"""

filename = "sample.txt"

#Create an empty file
def create_file():
    with open(filename,"w") as file:
        file.write("")#writing an empty string