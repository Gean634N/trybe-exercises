def amount_of_paint(wall_dimension: int):
    """Returns the amount and the price of paint that will be used."""
    gallon_of_paint = {"price": 80, "volume": 18}
    paint = []
    if wall_dimension % gallon_of_paint["volume"] == 0:
        paint.append(wall_dimension / gallon_of_paint["volume"])
    else:
        paint.append(wall_dimension // gallon_of_paint["volume"] + 1)
    paint.append(paint[0] * gallon_of_paint["price"])
    return paint


print(amount_of_paint(50))
