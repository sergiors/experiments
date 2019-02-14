from datetime import timedelta
from dateutil.easter import easter

easter_date = easter(2020) + timedelta(days=-47)
print(easter_date)
