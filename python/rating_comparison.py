class rating:
    def __init__(self, item, rating, sample, kind="stars") -> None:
        self.item = item
        self.rating = rating
        self.sample = sample
        self.kind = kind
    
    def standardize_rating(self):
        if self.kind != "stars":
            self.rating = self.rating * 5
        std_rating = ((self.rating * self.sample) + sum(range(6)))/(self.sample + 5)
        return std_rating
    

def best_rated_item(items: list[rating]) -> rating:
    items = {item.item: item.standardize_rating() for item in items}
    return max(items, key=lambda x: items[x])


if __name__ == "__main__":
    print("Enter the items with corresponding rating and number of ratings")
    items = []
    while True:
        i = input("Enter item name: ")
        r = float(input("Enter rating: "))
        rnum = int(input("Enter num ratings: "))
        k = "stars" if input("kind of rating = stars? (y/n)") == "y" else "perc"
        items.append(rating(i, r, rnum, k))
        if input("Enter another item? (y/n): ") == "n":
            break
    
    print("\nbest rated item: ", best_rated_item(items))