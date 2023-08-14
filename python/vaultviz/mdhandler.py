class ListItem:
    def __init__(self, text) -> None:
        self.text = text
        self.sub_items = []
        self.frontmatter = {}
    
    def add_sub_item(self, sub_item):
        self.sub_items.append(sub_item)


class TaskItem(ListItem):
    def __init__(self, text, complete=False) -> None:
        super().__init__(text=text)
        self.complete = complete
    
    def mark_complete(self):
        self.complete = True
    
    def mark_incomplete(self):
        self.complete = False


class Section:
    def __init__(self, name):
        self.name = name
        self.sections = []
        self.lists = []
        self.tasks = []
        self.textlines = []
    

class mdDocument(Section):
    def __init__(self, mdContent, filename) -> None:
        self.mdc = mdContent
        super().__init__(name=filename)