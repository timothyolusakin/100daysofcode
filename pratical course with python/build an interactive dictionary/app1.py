import json,sys,time
from difflib import get_close_matches

data = json.load(open("data.json"))
class Input_n(ValueError):
    def __str__(self):
        stop =  print("The program is stopping..."),time.sleep(7)
        stopping = print("......."),time.sleep(5)
        return exit()

class ValueError(ValueError):
    def __str__(self):
        return "Invalid Input Sorry"

def translate(word):
    word = word.lower()
    if word == "exit()":
        exit()
    try:
        if word in data:
            print (data[word])
            for meaning in data[word]:
                print( meaning+"\n")
            return to_continue()

        word = get_close_matches(word,data.keys())
        if word:
            for word in word:
                print(word)
            confirm = input("Enter the word you want to check:")
            for meaning in data[confirm]:
                print( meaning+"\n")
        return to_continue(),sys.exit()
    except ValueError as e:
        return "This was a {}".format(e),exit()
    except :
        print("the word doesn't exist.....")
        return translate(word=input("Enter word:"))

def to_continue():
    print("would you like to continue y for yes n for no:")
    check = input()
    if check == "y":
        translate(word=input("Enter Word:"))
    if check == "n":
        return Input_n()
    else:
        return ValueError()

print(translate(input("Enter Word:")))