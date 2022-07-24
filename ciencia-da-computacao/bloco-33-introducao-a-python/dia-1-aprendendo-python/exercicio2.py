def average(list):
    """Returns the average of the list of values"""
    total = 0
    for item in list:
        total += item
    return total / len(list)


# print(average([10, 20, 30, 40]))
