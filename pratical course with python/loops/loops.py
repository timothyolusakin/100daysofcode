emails = ["george@gmail.com","trei@outlook.com","groiur@yahoo.com"]
count = {"yahoo":0,"outlook":0,"gmail":0}
for email in emails:
    email = email.split("@")
    print(email)
    if email[1] == "yahoo.com":
        count["yahoo"] += 1
    elif email[1] == "outlook.com":
        count["outlook"] += 1
    elif email[1] == "gmail.com":
        count["gmail"] += 1

for frequency in count.values():
    print(frequency)