def currency_conveter(rate,euros):
    dollars = euros * rate
    return dollars

r = int(input("Enter rate:"))
e = int(input("Enter euros"))

print(currency_conveter(r,e))