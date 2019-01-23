user = input("enter a password:")
while user != "1234":
    user = input("Enter password")
    if user == "1234":
        print("you lucky")
    else:
        print("you are stupid")