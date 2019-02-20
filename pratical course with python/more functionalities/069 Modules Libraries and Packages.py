import os,sqlite3
print(os.__file__)
print(sqlite3.__file__)
#print(os.listdir())

p = os.listdir()
if "sample.txt" in p:
   print("It's There")