class DataStore:
    def __init__(self, data):
        # We 'attach' the incoming data to the object using self
        self.stored_info = data

# When we create the object, we pass the data inside the parentheses
my_obj = DataStore("Hello World")

# Now the object 'remembers' that data
print(my_obj.stored_info)  # Output: Hello World
