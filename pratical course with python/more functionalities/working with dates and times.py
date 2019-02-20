import datetime



filename = datetime.datetime.now()
filename = filename.strftime("%Y-%m-%d")+".txt"

#Create an empty file
def create_file():
    with open(filename,"w") as file:
        file.write("")#writing an empty string

create_file()

import time

lst = []
for i in range(5):
    lst.append(datetime.datetime.now())
    time.sleep(4)

for i in lst:
    print(i)
