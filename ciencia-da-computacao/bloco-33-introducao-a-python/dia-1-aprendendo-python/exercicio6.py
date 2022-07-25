def tringle(a, b, c):
    """Returns the type of the tringle"""
    if a + b < c or a + c < b or b + c < a:
        return "não é triangulo."
    if a == b and c == b:
        return "Triângulo Equilátero: três lados iguais."
    elif a == b or c == b or a == c:
        return "Triângulo Isósceles: quaisquer dois lados iguais."
    else:
        return " Triângulo Escaleno: três lados diferentes."


# print(tringle(3, 3, 5))
