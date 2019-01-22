def divide(a,b):
    try:
        return a/b
    except ZeroDivisionError as e:
        return "There is a {} error".format(e)
print(divide(1,0))
print("end of program")