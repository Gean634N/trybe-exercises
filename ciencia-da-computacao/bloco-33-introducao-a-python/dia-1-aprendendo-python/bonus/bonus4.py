def fuel_price(liters: float, type: str):
    price = {"A": (1.9, 0.03, 0.05), "G": (2.5, 0.04, 0.05)}
    if liters < 20:
        return (
            price[type][0] * liters - price[type][0] * price[type][1] * liters
        )
    return price[type][0] * liters - price[type][0] * price[type][2] * liters


# print(fuel_price(10, "G"))
