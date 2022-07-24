def biggest_name(list_of_name):
    biggest = list_of_name[0]
    for name in list_of_name:
        if len(biggest) < len(name):
            biggest = name
    return biggest


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
