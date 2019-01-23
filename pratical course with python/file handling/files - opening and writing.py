file = open("example.txt","w")
file.write("Line 1\n")
file.write("line2\n")

l = ["line 1","line 2", "line 3"]
for line in l:
    file.write(line+"\n")
file.close()