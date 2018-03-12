#!/usr/bin/python

def qsort(xss: list) -> list:
    if ([] == xss):
        return []

    pivot = xss[0]
    xs = xss[1:] 

    gt_pivot = lambda xs: filter(lambda y: pivot > y, xs)
    lte_pivot = lambda xs: filter(lambda y: pivot <= y, xs)

    return qsort(list(gt_pivot(xs))) + [pivot] + qsort(list(lte_pivot(xs)))

print(qsort([]))
print(qsort([2, 1, 4, 100, 77, 3, 99, 5]))
