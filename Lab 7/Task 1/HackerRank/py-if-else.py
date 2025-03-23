#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    
    res = ""
    if n % 2 == 0:
        if 2 <= n <= 5:
            res += "Not "
        if n > 20:
            res += "Not "
    
    print(res + "Weird")
